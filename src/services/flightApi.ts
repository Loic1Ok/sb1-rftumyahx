import axios from 'axios';
import type { Flight } from '../types/flight';

const API_KEY = import.meta.env.VITE_AVIATION_EDGE_API_KEY;
const BASE_URL = 'https://aviation-edge.com/v2/public';

// Mock data for when API is not available
const mockFlights: Flight[] = [
  {
    id: 'arr-mk648-1',
    flight: 'MK648',
    airline: 'Air Mauritius',
    origin: 'MRU',
    destination: 'RRG',
    departureTime: '09:00',
    arrivalTime: '10:30',
    status: 'On Time',
    terminal: '1',
    type: 'arrival',
    scheduledTime: new Date().toISOString()
  },
  {
    id: 'dep-mk649-1',
    flight: 'MK649',
    airline: 'Air Mauritius',
    origin: 'RRG',
    destination: 'MRU',
    departureTime: '11:30',
    arrivalTime: '13:00',
    status: 'Boarding',
    terminal: '1',
    type: 'departure',
    scheduledTime: new Date(Date.now() + 3600000).toISOString()
  },
  {
    id: 'arr-uu441-1',
    flight: 'UU441',
    airline: 'Air Austral',
    origin: 'RUN',
    destination: 'RRG',
    departureTime: '14:00',
    arrivalTime: '15:30',
    status: 'Scheduled',
    terminal: '1',
    type: 'arrival',
    scheduledTime: new Date(Date.now() + 7200000).toISOString()
  }
];

function calculateStatus(scheduledTime: string, actualTime?: string): string {
  if (!actualTime) return 'Scheduled';
  
  const scheduled = new Date(scheduledTime).getTime();
  const actual = new Date(actualTime).getTime();
  const now = Date.now();
  
  if (now > actual) {
    return 'Departed';
  }
  
  const delayMinutes = Math.floor((actual - scheduled) / (1000 * 60));
  
  if (delayMinutes > 15) {
    return `Delayed (${delayMinutes} mins)`;
  } else if (delayMinutes < -5) {
    return 'Early';
  } else if (Math.abs(now - scheduled) <= 30 * 60 * 1000) {
    return 'Boarding';
  }
  
  return 'On Time';
}

export async function getFlights(): Promise<Flight[]> {
  // If no API key is available, return mock data
  if (!API_KEY) {
    console.warn('No API key available, using mock data');
    return mockFlights;
  }

  try {
    // Fetch both arrivals and departures
    const [arrivalsResponse, departuresResponse] = await Promise.all([
      axios.get(`${BASE_URL}/timetable`, {
        params: {
          key: API_KEY,
          iataCode: 'RRG',
          type: 'arrival'
        }
      }),
      axios.get(`${BASE_URL}/timetable`, {
        params: {
          key: API_KEY,
          iataCode: 'RRG',
          type: 'departure'
        }
      })
    ]);

    // If no data is returned, use mock data
    if (!arrivalsResponse.data?.length && !departuresResponse.data?.length) {
      console.warn('No flight data returned from API, using mock data');
      return mockFlights;
    }

    // Process arrivals
    const arrivals = (arrivalsResponse.data || []).map((flight: any) => {
      const scheduledTime = flight.arrival?.scheduledTime;
      const actualTime = flight.arrival?.actualTime;
      return {
        id: `arr-${flight.flight?.iataNumber}-${Date.now()}`,
        flight: flight.flight?.iataNumber || 'Unknown',
        airline: flight.airline?.name || 'Unknown Airline',
        origin: flight.departure?.iataCode || 'Unknown',
        destination: 'RRG',
        departureTime: new Date(flight.departure?.scheduledTime || Date.now()).toLocaleTimeString(),
        arrivalTime: new Date(scheduledTime || Date.now()).toLocaleTimeString(),
        status: calculateStatus(scheduledTime, actualTime),
        terminal: '1',
        type: 'arrival' as const,
        scheduledTime,
        actualTime
      };
    });

    // Process departures
    const departures = (departuresResponse.data || []).map((flight: any) => {
      const scheduledTime = flight.departure?.scheduledTime;
      const actualTime = flight.departure?.actualTime;
      return {
        id: `dep-${flight.flight?.iataNumber}-${Date.now()}`,
        flight: flight.flight?.iataNumber || 'Unknown',
        airline: flight.airline?.name || 'Unknown Airline',
        origin: 'RRG',
        destination: flight.arrival?.iataCode || 'Unknown',
        departureTime: new Date(scheduledTime || Date.now()).toLocaleTimeString(),
        arrivalTime: new Date(flight.arrival?.scheduledTime || Date.now()).toLocaleTimeString(),
        status: calculateStatus(scheduledTime, actualTime),
        terminal: '1',
        type: 'departure' as const,
        scheduledTime,
        actualTime
      };
    });

    // Combine and sort by scheduled time
    return [...arrivals, ...departures].sort((a, b) => {
      const timeA = new Date(a.scheduledTime || '').getTime();
      const timeB = new Date(b.scheduledTime || '').getTime();
      return timeA - timeB;
    });

  } catch (error) {
    console.warn('Failed to fetch flights from API, using mock data:', error);
    return mockFlights;
  }
}

export async function getFlightStatus(flightNumber: string): Promise<Flight | null> {
  // If no API key is available, search mock data
  if (!API_KEY) {
    const mockFlight = mockFlights.find(f => f.flight === flightNumber);
    return mockFlight || null;
  }

  try {
    const response = await axios.get(`${BASE_URL}/timetable`, {
      params: {
        key: API_KEY,
        flightIata: flightNumber
      }
    });
    
    if (!response.data || response.data.error) {
      console.warn('API returned error or no data for flight:', flightNumber);
      return mockFlights.find(f => f.flight === flightNumber) || null;
    }

    const flight = response.data[0];
    if (!flight) return null;

    const scheduledTime = flight.departure?.scheduledTime;
    const actualTime = flight.departure?.actualTime;
    const isArrival = flight.arrival?.iataCode === 'RRG';

    return {
      id: `${isArrival ? 'arr' : 'dep'}-${flight.flight?.iataNumber}-${Date.now()}`,
      flight: flight.flight?.iataNumber || flightNumber,
      airline: flight.airline?.name || 'Unknown Airline',
      origin: isArrival ? flight.departure?.iataCode : 'RRG',
      destination: isArrival ? 'RRG' : flight.arrival?.iataCode,
      departureTime: new Date(flight.departure?.scheduledTime || Date.now()).toLocaleTimeString(),
      arrivalTime: new Date(flight.arrival?.scheduledTime || Date.now()).toLocaleTimeString(),
      status: calculateStatus(scheduledTime, actualTime),
      terminal: '1',
      type: isArrival ? 'arrival' : 'departure',
      scheduledTime,
      actualTime
    };
  } catch (error) {
    console.warn('Failed to fetch flight status from API:', error);
    return mockFlights.find(f => f.flight === flightNumber) || null;
  }
}
export interface Flight {
  id: string;
  flight: string;
  airline: string;
  origin: string;
  destination: string;
  departureTime: string;
  arrivalTime: string;
  status: string;
  terminal: string;
  type: 'arrival' | 'departure';
  scheduledTime?: string;
  actualTime?: string;
}
import { createClient } from '@supabase/supabase-js';
import type { NewsItem, Advertisement, Announcement } from '../types/content';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

const supabase = createClient(supabaseUrl, supabaseKey);

// News API
export async function getNews() {
  const { data, error } = await supabase
    .from('news')
    .select('*')
    .eq('published', true)
    .order('date', { ascending: false });

  if (error) throw error;
  return data as NewsItem[];
}

export async function getAllNews() {
  const { data, error } = await supabase
    .from('news')
    .select('*')
    .order('date', { ascending: false });

  if (error) throw error;
  return data as NewsItem[];
}

export async function createNews(news: Omit<NewsItem, 'id' | 'created_at' | 'updated_at'>) {
  const { data, error } = await supabase
    .from('news')
    .insert([news])
    .select()
    .single();

  if (error) throw error;
  return data as NewsItem;
}

export async function updateNews(id: string, news: Partial<NewsItem>) {
  const { data, error } = await supabase
    .from('news')
    .update(news)
    .eq('id', id)
    .select()
    .single();

  if (error) throw error;
  return data as NewsItem;
}

export async function deleteNews(id: string) {
  const { error } = await supabase
    .from('news')
    .delete()
    .eq('id', id);

  if (error) throw error;
}

// Advertisements API
export async function getActiveAds() {
  const { data, error } = await supabase
    .from('advertisements')
    .select('*')
    .eq('active', true)
    .gte('end_date', new Date().toISOString().split('T')[0])
    .lte('start_date', new Date().toISOString().split('T')[0])
    .order('start_date', { ascending: true });

  if (error) throw error;
  return data as Advertisement[];
}

export async function getAllAds() {
  const { data, error } = await supabase
    .from('advertisements')
    .select('*')
    .order('start_date', { ascending: false });

  if (error) throw error;
  return data as Advertisement[];
}

export async function createAd(ad: Omit<Advertisement, 'id' | 'created_at' | 'updated_at'>) {
  const { data, error } = await supabase
    .from('advertisements')
    .insert([ad])
    .select()
    .single();

  if (error) throw error;
  return data as Advertisement;
}

export async function updateAd(id: string, ad: Partial<Advertisement>) {
  const { data, error } = await supabase
    .from('advertisements')
    .update(ad)
    .eq('id', id)
    .select()
    .single();

  if (error) throw error;
  return data as Advertisement;
}

export async function deleteAd(id: string) {
  const { error } = await supabase
    .from('advertisements')
    .delete()
    .eq('id', id);

  if (error) throw error;
}

// Announcements API
export async function getActiveAnnouncements() {
  const { data, error } = await supabase
    .from('announcements')
    .select('*')
    .eq('active', true)
    .gte('end_date', new Date().toISOString().split('T')[0])
    .lte('start_date', new Date().toISOString().split('T')[0])
    .order('priority', { ascending: false });

  if (error) throw error;
  return data as Announcement[];
}

export async function getAllAnnouncements() {
  const { data, error } = await supabase
    .from('announcements')
    .select('*')
    .order('start_date', { ascending: false });

  if (error) throw error;
  return data as Announcement[];
}

export async function createAnnouncement(announcement: Omit<Announcement, 'id' | 'created_at' | 'updated_at'>) {
  const { data, error } = await supabase
    .from('announcements')
    .insert([announcement])
    .select()
    .single();

  if (error) throw error;
  return data as Announcement;
}

export async function updateAnnouncement(id: string, announcement: Partial<Announcement>) {
  const { data, error } = await supabase
    .from('announcements')
    .update(announcement)
    .eq('id', id)
    .select()
    .single();

  if (error) throw error;
  return data as Announcement;
}

export async function deleteAnnouncement(id: string) {
  const { error } = await supabase
    .from('announcements')
    .delete()
    .eq('id', id);

  if (error) throw error;
}
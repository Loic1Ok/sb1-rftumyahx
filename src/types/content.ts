export interface NewsItem {
  id: string;
  title: string;
  date: string;
  category: string;
  image: string;
  summary: string;
  link: string;
  published: boolean;
  created_at: string;
  updated_at: string;
}

export interface Advertisement {
  id: string;
  title: string;
  image: string;
  description: string;
  link: string;
  sponsor: string;
  start_date: string;
  end_date: string;
  active: boolean;
  created_at: string;
  updated_at: string;
}

export interface Announcement {
  id: string;
  title: string;
  content: string;
  priority: 'low' | 'medium' | 'high';
  start_date: string;
  end_date: string;
  active: boolean;
  created_at: string;
  updated_at: string;
}
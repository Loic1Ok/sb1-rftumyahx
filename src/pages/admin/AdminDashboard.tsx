import React from 'react';
import { Newspaper, Megaphone, BarChart } from 'lucide-react';
import AdminNewsManager from './AdminNewsManager';
import AdminAdsManager from './AdminAdsManager';
import AdminAnnouncementsManager from './AdminAnnouncementsManager';

export default function AdminDashboard() {
  const [activeTab, setActiveTab] = React.useState<'news' | 'ads' | 'announcements'>('news');

  return (
    <div className="min-h-screen bg-gray-100">
      <header className="bg-white shadow">
        <div className="max-w-7xl mx-auto py-6 px-4">
          <h1 className="text-3xl font-bold text-gray-900">Admin Dashboard</h1>
        </div>
      </header>

      <main className="max-w-7xl mx-auto py-6 px-4">
        {/* Tab Navigation */}
        <div className="mb-8 border-b border-gray-200">
          <nav className="flex space-x-8">
            <button
              onClick={() => setActiveTab('news')}
              className={`py-4 px-1 border-b-2 font-medium text-sm ${
                activeTab === 'news'
                  ? 'border-blue-500 text-blue-600'
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
              }`}
            >
              <Newspaper className="h-5 w-5 inline-block mr-2" />
              News Management
            </button>
            <button
              onClick={() => setActiveTab('ads')}
              className={`py-4 px-1 border-b-2 font-medium text-sm ${
                activeTab === 'ads'
                  ? 'border-blue-500 text-blue-600'
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
              }`}
            >
              <BarChart className="h-5 w-5 inline-block mr-2" />
              Advertisements
            </button>
            <button
              onClick={() => setActiveTab('announcements')}
              className={`py-4 px-1 border-b-2 font-medium text-sm ${
                activeTab === 'announcements'
                  ? 'border-blue-500 text-blue-600'
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
              }`}
            >
              <Megaphone className="h-5 w-5 inline-block mr-2" />
              Announcements
            </button>
          </nav>
        </div>

        {/* Content Area */}
        <div className="bg-white shadow rounded-lg p-6">
          {activeTab === 'news' && <AdminNewsManager />}
          {activeTab === 'ads' && <AdminAdsManager />}
          {activeTab === 'announcements' && <AdminAnnouncementsManager />}
        </div>
      </main>
    </div>
  );
}
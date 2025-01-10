import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import PageHeader from '../../components/PageHeader';
import { Shield, LogIn } from 'lucide-react';
import AdminNewsManager from './AdminNewsManager';
import { signIn, getCurrentUser } from '../../services/authApi';

export default function AdminPage() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    checkAuth();
  }, []);

  const checkAuth = async () => {
    try {
      const user = await getCurrentUser();
      setIsAuthenticated(!!user);
    } catch (err) {
      console.error('Auth check failed:', err);
    } finally {
      setLoading(false);
    }
  };

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      setError(null);
      await signIn(email, password);
      setIsAuthenticated(true);
    } catch (err) {
      setError('Invalid credentials');
      console.error('Login failed:', err);
    }
  };

  if (loading) {
    return <div className="min-h-screen flex items-center justify-center">Loading...</div>;
  }

  return (
    <div className="min-h-screen">
      <Navbar />
      <PageHeader
        title="Admin Dashboard"
        subtitle="Manage website content and updates"
        bgImage="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40"
        icon={<Shield className="h-12 w-12" />}
      />
      <main className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          {!isAuthenticated ? (
            <div className="max-w-md mx-auto">
              <div className="bg-white p-8 rounded-lg shadow-lg">
                <div className="flex items-center justify-center mb-8">
                  <LogIn className="h-8 w-8 text-blue-600 mr-3" />
                  <h2 className="text-2xl font-bold">Admin Login</h2>
                </div>

                {error && (
                  <div className="bg-red-50 text-red-700 p-4 rounded-lg mb-6">
                    {error}
                  </div>
                )}

                <form onSubmit={handleLogin} className="space-y-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Email
                    </label>
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full rounded-lg border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Password
                    </label>
                    <input
                      type="password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      className="w-full rounded-lg border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                      required
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                  >
                    Sign In
                  </button>
                </form>
              </div>
            </div>
          ) : (
            <AdminNewsManager />
          )}
        </div>
      </main>
      <Footer />
    </div>
  );
}
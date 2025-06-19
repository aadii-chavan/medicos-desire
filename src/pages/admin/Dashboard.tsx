import React, { useState, useEffect } from 'react';
import { 
  FileText, 
  Video, 
  Image, 
  Users, 
  TrendingUp, 
  Calendar,
  Bell,
  Activity,
  Mail
} from 'lucide-react';
import { getBlogPosts, getVideos, getGalleryImages, getNotifications, getRecentMessages } from '../../firebase/firestore';

export const Dashboard: React.FC = () => {
  const [stats, setStats] = useState({
    blogPosts: 0,
    videos: 0,
    galleryImages: 0,
    notifications: 0
  });
  const [loading, setLoading] = useState(true);
  const [darkMode, setDarkMode] = useState(false);
  const [recentMessages, setRecentMessages] = useState<any[]>([]);
  const [messagesLoading, setMessagesLoading] = useState(true);

  useEffect(() => {
    const fetchStats = async () => {
      try {
        const [blogs, videos, gallery, notifications] = await Promise.all([
          getBlogPosts(),
          getVideos(),
          getGalleryImages(),
          getNotifications()
        ]);

        setStats({
          blogPosts: blogs.length,
          videos: videos.length,
          galleryImages: gallery.length,
          notifications: notifications.length
        });
      } catch (error) {
        console.error('Error fetching stats:', error);
      } finally {
        setLoading(false);
      }
    };

    const fetchMessages = async () => {
      try {
        const msgs = await getRecentMessages();
        setRecentMessages(msgs);
      } catch (err) {
        setRecentMessages([]);
      } finally {
        setMessagesLoading(false);
      }
    };

    fetchStats();
    fetchMessages();
  }, []);

  const statCards = [
    {
      title: 'Blog Posts',
      value: stats.blogPosts,
      icon: FileText,
      color: 'bg-blue-500'
    },
    {
      title: 'Videos',
      value: stats.videos,
      icon: Video,
      color: 'bg-green-500'
    },
    {
      title: 'Gallery Images',
      value: stats.galleryImages,
      icon: Image,
      color: 'bg-purple-500'
    },
    {
      title: 'Active Notifications',
      value: stats.notifications,
      icon: Bell,
      color: 'bg-orange-500'
    }
  ];

  const recentActivities = [
    { action: 'New blog post published', time: '2 hours ago', type: 'blog' },
    { action: 'Video added to gallery', time: '4 hours ago', type: 'video' },
    { action: 'Contact info updated', time: '1 day ago', type: 'contact' },
    { action: 'FAQ section updated', time: '2 days ago', type: 'faq' },
    { action: 'New notification created', time: '3 days ago', type: 'notification' }
  ];

  if (loading) {
    return (
      <div className="flex items-center justify-center h-64">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary"></div>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Dashboard</h1>
          <p className="text-gray-600 mt-1">Welcome back! Here's what's happening.</p>
        </div>
        <div className="flex items-center space-x-2 text-gray-500">
          <Calendar className="w-5 h-5" />
          <span>{new Date().toLocaleDateString()}</span>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {statCards.map((stat, index) => {
          const Icon = stat.icon;
          return (
            <div key={index} className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-gray-600 text-sm font-medium">{stat.title}</p>
                  <p className="text-3xl font-bold text-gray-900 mt-1">{stat.value}</p>
                </div>
                <div className={`w-12 h-12 ${stat.color} rounded-lg flex items-center justify-center`}>
                  <Icon className="w-6 h-6 text-white" />
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Quick Actions */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
          <h2 className="text-xl font-semibold text-gray-900 mb-6">Quick Actions</h2>
          <div className="grid grid-cols-2 gap-4">
            <button className="p-4 border-2 border-dashed border-gray-300 rounded-lg transition-colors group hover:border-primary hover:bg-primary/5 dark:hover:bg-primary/10">
              <FileText className="w-8 h-8 text-gray-400 group-hover:text-primary mx-auto mb-2" />
              <p className="text-sm font-medium text-gray-600 group-hover:text-primary">New Blog Post</p>
            </button>
            <button className="p-4 border-2 border-dashed border-gray-300 rounded-lg transition-colors group hover:border-primary hover:bg-primary/5 dark:hover:bg-primary/10">
              <Video className="w-8 h-8 text-gray-400 group-hover:text-primary mx-auto mb-2" />
              <p className="text-sm font-medium text-gray-600 group-hover:text-primary">Add Video</p>
            </button>
            <button className="p-4 border-2 border-dashed border-gray-300 rounded-lg transition-colors group hover:border-primary hover:bg-primary/5 dark:hover:bg-primary/10">
              <Bell className="w-8 h-8 text-gray-400 group-hover:text-primary mx-auto mb-2" />
              <p className="text-sm font-medium text-gray-600 group-hover:text-primary">Send Notification</p>
            </button>
            <button className="p-4 border-2 border-dashed border-gray-300 rounded-lg transition-colors group hover:border-primary hover:bg-primary/5 dark:hover:bg-primary/10">
              <Image className="w-8 h-8 text-gray-400 group-hover:text-primary mx-auto mb-2" />
              <p className="text-sm font-medium text-gray-600 group-hover:text-primary">Upload Image</p>
            </button>
          </div>
        </div>
        {/* Mailbox */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl font-semibold text-gray-900">Mailbox</h2>
            <Mail className="w-5 h-5 text-gray-400" />
          </div>
          {messagesLoading ? (
            <div className="flex items-center justify-center h-24">
              <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-primary"></div>
            </div>
          ) : recentMessages.length === 0 ? (
            <p className="text-gray-500 text-sm">No messages received yet.</p>
          ) : (
            <div className="space-y-4">
              {recentMessages.map((msg, idx) => (
                <div key={msg.id || idx} className="p-3 rounded-lg border border-gray-100 bg-gray-50">
                  <div className="flex items-center justify-between mb-1">
                    <span className="font-semibold text-primary">{msg.name || 'No Name'}</span>
                    <span className="text-xs text-gray-400">{msg.createdAt && msg.createdAt.toDate ? msg.createdAt.toDate().toLocaleString() : ''}</span>
                  </div>
                  <div className="text-xs text-gray-500 mb-1">{msg.email}</div>
                  <div className="text-gray-800 text-sm">{msg.message}</div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* System Status */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
        <h2 className="text-xl font-semibold text-gray-900 mb-6">System Status</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="text-center">
            <div className="w-3 h-3 bg-green-500 rounded-full mx-auto mb-2"></div>
            <p className="text-sm font-medium text-gray-900">Website</p>
            <p className="text-xs text-gray-500">Operational</p>
          </div>
          <div className="text-center">
            <div className="w-3 h-3 bg-green-500 rounded-full mx-auto mb-2"></div>
            <p className="text-sm font-medium text-gray-900">Database</p>
            <p className="text-xs text-gray-500">Operational</p>
          </div>
          <div className="text-center">
            <div className="w-3 h-3 bg-green-500 rounded-full mx-auto mb-2"></div>
            <p className="text-sm font-medium text-gray-900">Authentication</p>
            <p className="text-xs text-gray-500">Operational</p>
          </div>
        </div>
      </div>
    </div>
  );
};
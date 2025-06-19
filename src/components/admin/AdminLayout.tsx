import React, { useState } from 'react';
import { Outlet, useNavigate, useLocation } from 'react-router-dom';
import { useAuth } from '../../contexts/AuthContext';
import { signOutAdmin } from '../../firebase/auth';
import {
  LayoutDashboard,
  FileText,
  Video,
  Image,
  Phone,
  Bell,
  HelpCircle,
  ExternalLink,
  Settings,
  LogOut,
  Menu,
  X,
  User,
  Moon,
  Sun,
  DollarSign,
  Users,
  GraduationCap
} from 'lucide-react';

const sidebarItems = [
  { icon: LayoutDashboard, label: 'Dashboard', path: '/admin' },
  { icon: FileText, label: 'Blog Manager', path: '/admin/blog' },
  { icon: Video, label: 'Videos', path: '/admin/videos' },
  { icon: Image, label: 'Gallery', path: '/admin/gallery' },
  { icon: GraduationCap, label: 'Universities', path: '/admin/universities' },
  { icon: DollarSign, label: 'Fees Manager', path: '/admin/fees' },
  { icon: HelpCircle, label: 'FAQs Manager', path: '/admin/faqs' },
  { icon: Users, label: 'Team Manager', path: '/admin/team' },
  { icon: Phone, label: 'Contact Info', path: '/admin/contact' },
  { icon: Bell, label: 'Notifications', path: '/admin/notifications' },
  { icon: Settings, label: 'Settings', path: '/admin/settings' }
];

export const AdminLayout: React.FC = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(() => {
    return localStorage.getItem('adminDarkMode') === 'true';
  });
  const { user } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();

  React.useEffect(() => {
    if (darkMode) {
      document.body.classList.add('admin-dark');
    } else {
      document.body.classList.remove('admin-dark');
    }
    localStorage.setItem('adminDarkMode', darkMode ? 'true' : 'false');
  }, [darkMode]);

  const handleLogout = async () => {
    try {
      await signOutAdmin();
      navigate('/admin-login');
    } catch (error) {
      console.error('Logout error:', error);
    }
  };

  const isActivePath = (path: string) => {
    if (path === '/admin') {
      return location.pathname === '/admin';
    }
    return location.pathname.startsWith(path);
  };

  return (
    <div className={`min-h-screen ${darkMode ? 'admin-dark bg-gray-900' : 'bg-gray-50'} flex`}>
      {/* Sidebar */}
      <div className={`fixed inset-y-0 left-0 z-50 w-64 bg-white shadow-lg transform ${
        sidebarOpen ? 'translate-x-0' : '-translate-x-full'
      } transition-transform duration-300 ease-in-out lg:translate-x-0 lg:static lg:inset-0`}>
        <div className="flex items-center justify-between h-16 px-6 border-b border-gray-200">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm">M</span>
            </div>
            <span className={`font-bold ${darkMode ? 'text-white' : 'text-primary'}`}>Admin Panel</span>
          </div>
          <button
            onClick={() => setSidebarOpen(false)}
            className="lg:hidden text-gray-500 hover:text-gray-700"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        <nav className="mt-6 px-3">
          {sidebarItems.map((item) => {
            const Icon = item.icon;
            return (
              <button
                key={item.path}
                onClick={() => {
                  navigate(item.path);
                  setSidebarOpen(false);
                }}
                className={`w-full flex items-center space-x-3 px-3 py-3 rounded-lg text-left transition-colors mb-1 ${
                  isActivePath(item.path)
                    ? 'bg-primary text-white'
                    : 'text-gray-700 hover:bg-gray-100'
                }`}
              >
                <Icon className="w-5 h-5" />
                <span className="font-medium">{item.label}</span>
              </button>
            );
          })}
        </nav>
      </div>

      {/* Main Content */}
      <div className="flex-1 lg:ml-0">
        {/* Top Navigation */}
        <header className={`bg-white ${darkMode ? 'admin-dark-header' : ''} shadow-sm border-b border-gray-200 h-16 flex items-center px-6`}>
          <button
            onClick={() => setSidebarOpen(true)}
            className="lg:hidden text-gray-500 hover:text-gray-700"
          >
            <Menu className="w-6 h-6" />
          </button>

          <div className="flex-1 flex justify-end items-center space-x-4">
            <div className={`flex items-center space-x-2 ${darkMode ? 'text-gray-200' : 'text-gray-700'}`}>
              <User className="w-5 h-5" />
              <span className="text-sm font-medium">{user?.email}</span>
            </div>
            <button
              onClick={handleLogout}
              className={`flex items-center space-x-2 px-3 py-2 ${darkMode ? 'text-gray-200' : 'text-gray-700'} hover:text-red-600 transition-colors`}
            >
              <LogOut className="w-4 h-4" />
              <span className="text-sm font-medium">Logout</span>
            </button>
            <button
              onClick={() => setDarkMode((d) => !d)}
              className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
              title="Toggle dark mode"
            >
              {darkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
            </button>
          </div>
        </header>

        {/* Page Content */}
        <main className="p-6">
          <Outlet />
        </main>
      </div>

      {/* Overlay for mobile */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}
    </div>
  );
};
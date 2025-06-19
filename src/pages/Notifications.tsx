import React, { useState } from 'react';
import {
  Bell,
  Calendar,
  Star,
  Search,
  Filter,
  ChevronDown,
  AlertTriangle,
  Flame,
  Download,
  Share2,
  Mail as MailIcon
} from 'lucide-react';

const exampleNotifications = [
  {
    id: 1,
    title: 'New Admission Open!',
    message: 'Admissions for MBBS 2024 are now open. Apply before July 31st.',
    date: '2024-06-20 10:00 AM',
    type: 'info',
    tag: 'Admission',
    pinned: false,
  },
  {
    id: 2,
    title: 'Webinar Announcement',
    message: 'Join our free webinar on MBBS Abroad on June 25th at 5 PM.',
    date: '2024-06-18 09:30 AM',
    type: 'event',
    tag: 'Webinar',
    pinned: false,
  },
  {
    id: 3,
    title: 'NMC New Rules',
    message: 'NMC has released new guidelines for foreign medical graduates. Read more on our blog.',
    date: '2024-06-15 04:00 PM',
    type: 'alert',
    tag: 'NMC',
    pinned: true,
  },
  {
    id: 4,
    title: 'Holiday Notice',
    message: 'Our offices will be closed on June 21st for a public holiday.',
    date: '2024-06-14 11:00 AM',
    type: 'info',
    tag: 'Holiday',
    pinned: false,
  },
  {
    id: 5,
    title: 'Result Announcement',
    message: 'FMGE June 2024 results are out. Congratulations to all successful candidates!',
    date: '2024-06-12 03:00 PM',
    type: 'success',
    tag: 'FMGE',
    pinned: false,
  },
  {
    id: 6,
    title: 'Visa Deadline Extended',
    message: 'The deadline for visa applications has been extended to July 10th.',
    date: '2024-06-10 02:00 PM',
    type: 'alert',
    tag: 'Visa',
    pinned: false,
  },
  {
    id: 7,
    title: 'Scholarship Opportunity',
    message: 'Apply for the Medicos Desire Scholarship 2024. Limited seats available.',
    date: '2024-06-09 10:00 AM',
    type: 'success',
    tag: 'Scholarship',
    pinned: false,
  },
];

const typeColors: Record<string, string> = {
  info: 'bg-blue-100 text-blue-800',
  event: 'bg-purple-100 text-purple-800',
  alert: 'bg-red-100 text-red-800',
  success: 'bg-green-100 text-green-800',
  urgent: 'bg-red-200 text-red-900',
};
const tagColors: Record<string, string> = {
  Admission: 'bg-blue-200 text-blue-800',
  Webinar: 'bg-purple-200 text-purple-800',
  NMC: 'bg-yellow-200 text-yellow-800',
  Holiday: 'bg-gray-200 text-gray-700',
  FMGE: 'bg-green-200 text-green-800',
  Visa: 'bg-red-200 text-red-800',
  Scholarship: 'bg-pink-200 text-pink-800',
};

const urgentHighlight = {
  title: 'Urgent Visa Alert',
  message: 'Visa processing for Russia is delayed due to new embassy rules. Please check your email for updates or contact support.',
  type: 'urgent',
  tag: 'Visa Alert',
  color: 'bg-red-100 border-red-300 text-red-800',
  icon: <AlertTriangle className="w-6 h-6 text-red-500 animate-pulse" />,
};

const sortOptions = [
  { label: 'Latest', value: 'latest' },
  { label: 'Most Popular', value: 'popular' },
  { label: 'By Deadline', value: 'deadline' },
];

const Notifications: React.FC = () => {
  const [search, setSearch] = useState('');
  const [sort, setSort] = useState('latest');
  const [visibleCount, setVisibleCount] = useState(5);

  // Filter and sort logic (mocked)
  let filtered = exampleNotifications.filter(n =>
    n.title.toLowerCase().includes(search.toLowerCase()) ||
    n.message.toLowerCase().includes(search.toLowerCase())
  );
  if (sort === 'latest') filtered = filtered.sort((a, b) => b.id - a.id);
  // For demo, no real popularity or deadline sort

  // Infinite scroll handler (mocked)
  const handleLoadMore = () => {
    setVisibleCount(c => Math.min(c + 3, filtered.length));
  };

  // Announcement banner for pinned notice
  const pinned = filtered.find(n => n.pinned);

  return (
    <div className="min-h-screen bg-gray-50 pb-24">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary via-primary-light to-secondary text-white py-20 overflow-hidden">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="absolute top-10 right-10 opacity-20">
          <Bell className="w-32 h-32 animate-bounce-subtle" />
        </div>
        <div className="absolute bottom-10 left-10 opacity-20">
          <Calendar className="w-24 h-24 animate-pulse" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="animate-slide-up">
            <Bell className="w-16 h-16 mx-auto mb-6 text-secondary animate-bounce" />
            <h1 className="text-4xl md:text-6xl font-bold mb-6">Stay Updated with the Latest</h1>
            <h2 className="text-2xl md:text-3xl font-semibold mb-4 text-secondary">in the Medical World</h2>
            <p className="text-xl text-gray-200 max-w-3xl mx-auto mb-8">
              Visa alerts, exam deadlines, scholarships & more - all in one place
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
              <button className="bg-secondary text-primary px-6 py-3 rounded-lg font-semibold hover:bg-opacity-90 transition-colors flex items-center justify-center space-x-2">
                <Bell className="w-5 h-5" />
                <span>Enable Notifications</span>
              </button>
              <button className="border-2 border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-primary transition-all duration-300">
                Subscribe to Updates
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Sticky Toolbar */}
      <section className="sticky top-0 z-40 bg-white shadow-md border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex flex-col lg:flex-row gap-4 items-center justify-between">
            {/* Search Bar */}
            <div className="flex-1 flex items-center gap-2 max-w-md w-full">
              <div className="relative w-full">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  value={search}
                  onChange={e => setSearch(e.target.value)}
                  placeholder="Search updates (e.g. NEET PG, Visa update)"
                  className="w-full pl-10 pr-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-primary focus:border-transparent bg-gray-50 transition-all duration-200"
                />
              </div>
            </div>

            {/* Filter Tags */}
            <div className="flex flex-wrap gap-2">
              {['MBBS Abroad', 'Visa', 'Exams', 'NEET', 'Russia', 'Scholarships'].map(tag => (
                <button
                  key={tag}
                  className="px-4 py-2 rounded-full text-sm font-medium bg-gray-100 text-gray-700 hover:bg-primary hover:text-white transition-all duration-200 transform hover:scale-105"
                >
                  {tag}
                </button>
              ))}
            </div>

            {/* Sort Dropdown */}
            <div className="flex items-center gap-2">
              <Filter className="w-5 h-5 text-gray-400" />
              <div className="relative">
                <select
                  value={sort}
                  onChange={e => setSort(e.target.value)}
                  className="appearance-none pl-3 pr-8 py-2 rounded-lg border border-gray-200 bg-gray-50 text-sm font-medium focus:ring-2 focus:ring-primary focus:border-transparent"
                >
                  {sortOptions.map(opt => (
                    <option key={opt.value} value={opt.value}>{opt.label}</option>
                  ))}
                </select>
                <ChevronDown className="absolute right-2 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Urgent Highlight Banner */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-6">
        <div className={`flex items-center gap-4 rounded-xl border-l-8 p-4 shadow-lg animate-pulse ${urgentHighlight.color} border-red-400`}>
          <div className="flex-shrink-0">{urgentHighlight.icon}</div>
          <div className="flex-1">
            <div className="flex items-center gap-2 mb-1">
              <span className="font-bold text-lg">{urgentHighlight.title}</span>
              <span className="px-2 py-1 rounded-full text-xs font-bold bg-red-200 text-red-700 border border-red-300 animate-bounce">{urgentHighlight.tag}</span>
              <Flame className="w-5 h-5 text-orange-500 animate-bounce" />
            </div>
            <p className="text-sm">{urgentHighlight.message}</p>
          </div>
        </div>
      </div>

      {/* Announcement Banner for Pinned Notice */}
      {pinned && (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-6">
          <div className="flex items-center gap-4 rounded-xl bg-yellow-100 border-l-8 border-yellow-400 p-4 shadow-lg animate-fade-in">
            <Star className="w-6 h-6 text-yellow-500 animate-bounce" />
            <div className="flex-1">
              <span className="font-semibold text-yellow-900">Announcement:</span>
              <span className="ml-2 font-medium text-yellow-800">{pinned.title}</span>
              <span className="ml-2 px-2 py-1 rounded-full text-xs font-bold bg-yellow-200 text-yellow-800 border border-yellow-300">{pinned.tag}</span>
            </div>
          </div>
        </div>
      )}

      {/* Push Notification Prompt */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-6">
        <div className="flex items-center gap-4 rounded-xl bg-primary/10 border border-primary/30 p-4 shadow-lg animate-fade-in">
          <Bell className="w-6 h-6 text-primary animate-bounce" />
          <div className="flex-1">
            <span className="font-semibold text-primary">Enable alerts for new notifications?</span>
            <p className="text-xs text-gray-700 mt-1">Get instant updates when important medical news or deadlines are posted.</p>
          </div>
          <div className="flex gap-2">
            <button className="bg-primary text-white px-4 py-2 rounded-lg font-medium text-sm hover:bg-primary-dark transition-colors">Enable</button>
            <button className="bg-gray-200 text-gray-700 px-3 py-2 rounded-lg font-medium text-sm hover:bg-gray-300 transition-colors">Dismiss</button>
          </div>
        </div>
      </div>

      {/* Main Content - Notifications Feed */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-8">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Sidebar (Desktop Only) */}
          <div className="hidden lg:block">
            <div className="bg-white rounded-xl shadow-lg p-6 sticky top-32">
              <h3 className="text-lg font-semibold text-primary mb-4">Quick Filters</h3>
              <div className="space-y-3">
                {Object.keys(tagColors).map(tag => (
                  <label key={tag} className="flex items-center space-x-2 cursor-pointer">
                    <input type="checkbox" className="rounded border-gray-300 text-primary focus:ring-primary" />
                    <span className="text-sm text-gray-700">{tag}</span>
                  </label>
                ))}
              </div>
              
              <div className="mt-6 pt-6 border-t border-gray-200">
                <h4 className="font-semibold text-gray-900 mb-3">Subscribe</h4>
                <label className="flex items-center space-x-2 cursor-pointer">
                  <input type="checkbox" className="rounded border-gray-300 text-primary focus:ring-primary" />
                  <span className="text-sm text-gray-700">Email notifications</span>
                </label>
              </div>

              <div className="mt-6 pt-6 border-t border-gray-200">
                <h4 className="font-semibold text-gray-900 mb-3">Calendar View</h4>
                <div className="bg-gray-50 rounded-lg p-3">
                  <Calendar className="w-full h-32 text-gray-400" />
                </div>
              </div>
            </div>
          </div>

          {/* Notifications Feed */}
          <div className="lg:col-span-3">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {filtered.slice(0, visibleCount).map((notif, index) => (
                <div
                  key={notif.id}
                  className={`rounded-xl shadow-lg border border-gray-200 p-6 ${typeColors[notif.type]} transition-all duration-300 transform hover:shadow-xl hover:scale-[1.02] animate-fade-in`}
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="flex items-start justify-between mb-3">
                    <div className="flex items-center gap-2">
                      {/* Animated icon for high-priority */}
                      {notif.type === 'alert' || notif.type === 'urgent' ? (
                        <span className="animate-bounce">
                          <Flame className="w-5 h-5 text-red-500" />
                        </span>
                      ) : null}
                      <h3 className="text-lg font-semibold cursor-pointer hover:underline text-primary">
                        {notif.title}
                      </h3>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className={`px-2 py-1 rounded-full text-xs font-bold border ${tagColors[notif.tag] || 'bg-gray-200 text-gray-700 border-gray-300'}`}>
                        {notif.tag}
                      </span>
                      <span className={`px-2 py-1 rounded-full text-xs font-bold border ${typeColors[notif.type]}`}>{notif.type.toUpperCase()}</span>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-2 text-xs text-gray-500 mb-3">
                    <Calendar className="w-4 h-4" />
                    <span>{notif.date}</span>
                  </div>
                  
                  <p className="text-sm mb-4 line-clamp-3">{notif.message}</p>
                  
                  <div className="flex items-center justify-between">
                    <button className="text-primary text-sm font-semibold hover:underline">Read More</button>
                    <div className="flex items-center gap-2">
                      {/* Share button with dropdown (UI only) */}
                      <div className="relative group">
                        <button className="flex items-center gap-1 text-gray-500 hover:text-primary text-xs font-medium">
                          <Share2 className="w-4 h-4" /> Share
                        </button>
                        <div className="absolute bottom-full right-0 mb-2 bg-white border border-gray-200 rounded-lg shadow-lg p-2 space-y-1 opacity-0 group-hover:opacity-100 pointer-events-none group-hover:pointer-events-auto transition-all z-20 min-w-[120px]">
                          <a href="#" className="flex items-center gap-2 text-xs text-gray-700 hover:text-primary">
                            <img src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg" alt="WhatsApp" className="w-4 h-4" /> WhatsApp
                          </a>
                          <a href="#" className="flex items-center gap-2 text-xs text-gray-700 hover:text-primary">
                            <MailIcon className="w-4 h-4" /> Email
                          </a>
                          <a href="#" className="flex items-center gap-2 text-xs text-gray-700 hover:text-primary">
                            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M22.46 6c-.77.35-1.6.58-2.47.69a4.3 4.3 0 0 0 1.88-2.37 8.59 8.59 0 0 1-2.72 1.04A4.28 4.28 0 0 0 16.11 4c-2.37 0-4.29 1.92-4.29 4.29 0 .34.04.67.11.99C7.69 9.13 4.07 7.38 1.64 4.7c-.37.64-.58 1.38-.58 2.17 0 1.5.76 2.82 1.92 3.6-.7-.02-1.36-.21-1.94-.53v.05c0 2.1 1.5 3.85 3.5 4.25-.36.1-.74.16-1.13.16-.28 0-.54-.03-.8-.08.54 1.7 2.1 2.94 3.95 2.97A8.6 8.6 0 0 1 2 19.54c-.65 0-1.28-.04-1.9-.11A12.13 12.13 0 0 0 6.29 21c7.55 0 11.68-6.26 11.68-11.68 0-.18-.01-.36-.02-.54A8.18 8.18 0 0 0 22.46 6z"/></svg> Twitter
                          </a>
                        </div>
                      </div>
                      {/* Bookmark button (UI only) */}
                      <button className="text-gray-400 hover:text-yellow-400 transition-colors" title="Bookmark">
                        <Star className="w-5 h-5" />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Load More Button */}
            {visibleCount < filtered.length && (
              <div className="flex justify-center mt-8">
                <button
                  onClick={handleLoadMore}
                  className="px-8 py-3 rounded-lg bg-primary text-white font-semibold shadow-lg hover:bg-primary-dark transition-colors transform hover:scale-105"
                >
                  Load More Updates
                </button>
              </div>
            )}

            {/* No Results */}
            {filtered.length === 0 && (
              <div className="text-center py-12">
                <Bell className="w-16 h-16 text-gray-300 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-gray-600 mb-2">No notifications found</h3>
                <p className="text-gray-500">Try adjusting your search or filters</p>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Sticky Bottom Bar (Mobile Only) */}
      <div className="fixed bottom-0 left-0 w-full z-50 lg:hidden">
        <div className="bg-white shadow-lg border-t border-gray-200 px-4 py-3">
          <div className="flex justify-around items-center">
            <button className="flex flex-col items-center text-primary hover:text-primary-dark focus:outline-none">
              <Search className="w-6 h-6 mb-1" />
              <span className="text-xs font-medium">Search</span>
            </button>
            <button className="flex flex-col items-center text-primary hover:text-primary-dark focus:outline-none">
              <Bell className="w-6 h-6 mb-1" />
              <span className="text-xs font-medium">Subscribe</span>
            </button>
            <button className="flex flex-col items-center text-primary hover:text-primary-dark focus:outline-none">
              <Download className="w-6 h-6 mb-1" />
              <span className="text-xs font-medium">Downloads</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Notifications;
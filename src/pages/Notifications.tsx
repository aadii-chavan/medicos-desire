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
      {/* Sticky Header */}
      <header className="sticky top-0 z-40 bg-white shadow-md flex items-center justify-between px-4 sm:px-8 py-4 border-b border-gray-200">
        <div className="flex items-center gap-3">
          <Bell className="w-7 h-7 text-primary animate-bounce" />
          <h1 className="text-xl sm:text-2xl font-bold text-gray-900 tracking-tight">Medical Updates & Notifications</h1>
          <Calendar className="w-6 h-6 text-gray-400 ml-2" />
        </div>
      </header>
      {/* Filters & Search */}
      <section className="bg-white px-4 sm:px-8 py-4 border-b border-gray-100 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        {/* Search Bar */}
        <div className="flex-1 flex items-center gap-2 max-w-md w-full mx-auto md:mx-0">
          <div className="relative w-full">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input
              type="text"
              value={search}
              onChange={e => setSearch(e.target.value)}
              placeholder="Search updates (e.g. NEET PG, Visa update)"
              className="w-full pl-10 pr-4 py-2 rounded-lg border border-gray-200 focus:ring-2 focus:ring-primary focus:border-transparent bg-gray-50 text-sm"
            />
          </div>
        </div>
        {/* Sort Dropdown */}
        <div className="flex items-center gap-2 w-full md:w-auto">
          <Filter className="w-5 h-5 text-gray-400" />
          <div className="relative w-full max-w-[180px]">
            <select
              value={sort}
              onChange={e => setSort(e.target.value)}
              className="appearance-none pl-3 pr-8 py-2 rounded-lg border border-gray-200 bg-gray-50 text-sm font-medium focus:ring-2 focus:ring-primary focus:border-transparent w-full"
            >
              {sortOptions.map(opt => (
                <option key={opt.value} value={opt.value}>{opt.label}</option>
              ))}
            </select>
            <ChevronDown className="absolute right-2 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none" />
          </div>
        </div>
      </section>
      {/* Highlight/Sticky Section */}
      <div className="max-w-2xl mx-auto mt-6 mb-8 w-full px-2 sm:px-0">
        <div className={`flex flex-col sm:flex-row items-center gap-3 rounded-xl border-l-8 p-4 shadow-md animate-flash ${urgentHighlight.color} border-red-400 w-full`}>
          <div className="flex-shrink-0">{urgentHighlight.icon}</div>
          <div className="flex-1">
            <div className="flex flex-wrap items-center gap-2 mb-1">
              <span className="font-bold text-base">{urgentHighlight.title}</span>
              <span className="px-2 py-0.5 rounded-full text-xs font-bold bg-red-200 text-red-700 border border-red-300 animate-pulse">{urgentHighlight.tag}</span>
              <Flame className="w-4 h-4 text-orange-500 animate-bounce" />
            </div>
            <p className="text-sm leading-snug">{urgentHighlight.message}</p>
          </div>
        </div>
      </div>
      {/* Announcement Banner for Pinned Notice */}
      {pinned && (
        <div className="max-w-2xl mx-auto mb-6 w-full px-2 sm:px-0">
          <div className="flex items-center gap-3 rounded-xl bg-yellow-100 border-l-8 border-yellow-400 p-4 shadow animate-fade-in">
            <Star className="w-6 h-6 text-yellow-500 animate-bounce" />
            <div className="flex-1">
              <span className="font-semibold text-yellow-900">Announcement:</span>
              <span className="ml-2 font-medium text-yellow-800">{pinned.title}</span>
              <span className="ml-2 px-2 py-0.5 rounded-full text-xs font-bold bg-yellow-200 text-yellow-800 border border-yellow-300">{pinned.tag}</span>
            </div>
          </div>
        </div>
      )}
      {/* Push Notification Prompt */}
      <div className="max-w-2xl mx-auto mb-8 w-full px-2 sm:px-0">
        <div className="flex flex-col sm:flex-row items-center gap-3 rounded-xl bg-primary/10 border border-primary/30 p-4 shadow animate-fade-in">
          <Bell className="w-6 h-6 text-primary animate-bounce mb-2 sm:mb-0" />
          <div className="flex-1 text-center sm:text-left">
            <span className="font-semibold text-primary block">Enable alerts for new notifications?</span>
            <p className="text-xs text-gray-700 mt-1">Get instant updates when important medical news or deadlines are posted.</p>
          </div>
          <div className="flex gap-2 mt-2 sm:mt-0">
            <button className="bg-primary text-white px-4 py-1.5 rounded-lg font-medium text-xs hover:bg-primary-dark transition-colors">Enable</button>
            <button className="bg-gray-200 text-gray-700 px-3 py-1.5 rounded-lg font-medium text-xs hover:bg-gray-300 transition-colors">Dismiss</button>
          </div>
        </div>
      </div>
      {/* Notifications Feed (Infinite Scroll) */}
      <div className="max-w-2xl mx-auto mt-8 w-full px-2 sm:px-0">
        <div className="space-y-4">
          {filtered.slice(0, visibleCount).map((notif) => (
            <div
              key={notif.id}
              className={`rounded-xl shadow-sm border border-gray-200 p-5 flex flex-col sm:flex-row sm:items-center gap-3 ${typeColors[notif.type]} transition-all duration-300 transform hover:shadow-lg hover:scale-[1.02] animate-fade-in w-full`}
            >
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-1">
                  {/* Animated icon for high-priority */}
                  {notif.type === 'alert' || notif.type === 'urgent' ? (
                    <span className="animate-bounce inline-block">
                      <Flame className="w-5 h-5 text-red-500" />
                    </span>
                  ) : null}
                  <h2 className="text-lg font-semibold cursor-pointer hover:underline text-primary mb-0.5">
                    {notif.title}
                  </h2>
                </div>
                <div className="flex flex-wrap items-center gap-2 mb-1">
                  <span className="text-xs text-gray-500 flex items-center">
                    <Calendar className="w-4 h-4 mr-1" />
                    {notif.date}
                  </span>
                  <span className={`ml-2 px-2 py-0.5 rounded-full text-xs font-bold border ${tagColors[notif.tag] || 'bg-gray-200 text-gray-700 border-gray-300'}`}>
                    {notif.tag}
                  </span>
                  <span className={`ml-2 px-2 py-0.5 rounded-full text-xs font-bold border ${typeColors[notif.type]}`}>{notif.type.toUpperCase()}</span>
                </div>
                <p className="text-sm mb-2 line-clamp-2">{notif.message}</p>
                <div className="flex items-center gap-3 mt-2">
                  <button className="text-primary text-xs font-semibold hover:underline">Read More</button>
                  {/* Share button with dropdown (UI only) */}
                  <div className="relative group">
                    <button className="flex items-center gap-1 text-gray-500 hover:text-primary text-xs font-medium">
                      <Share2 className="w-4 h-4" /> Share
                    </button>
                    <div className="absolute left-0 mt-2 bg-white border border-gray-200 rounded-lg shadow-lg p-2 space-y-1 opacity-0 group-hover:opacity-100 pointer-events-none group-hover:pointer-events-auto transition-all z-20 min-w-[120px]">
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
                  <button className="ml-2 text-gray-400 hover:text-yellow-400 transition-colors" title="Bookmark">
                    <Star className="w-5 h-5" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
        {/* Infinite Scroll Load More Button */}
        {visibleCount < filtered.length && (
          <div className="flex justify-center mt-6">
            <button
              onClick={handleLoadMore}
              className="px-6 py-2 rounded-lg bg-primary text-white font-semibold shadow hover:bg-primary-dark transition-colors"
            >
              Load More
            </button>
          </div>
        )}
      </div>
      {/* Sticky Bottom Action Bar (Mobile Only) */}
      <div className="fixed bottom-0 left-0 w-full z-40 sm:hidden pointer-events-none">
        <div className="max-w-2xl mx-auto flex justify-around items-center bg-white rounded-t-2xl shadow-lg p-3 m-2 pointer-events-auto border border-gray-200">
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
  );
};

export default Notifications;
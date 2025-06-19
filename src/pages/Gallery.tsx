import React, { useState } from 'react';
import { Filter, Play, Image as ImageIcon, Calendar, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';

export const Gallery: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  const [activeTab, setActiveTab] = useState('photos');

  const filters = [
    { id: 'all', label: 'All' },
    { id: 'campus', label: 'Campus Life' },
    { id: 'graduation', label: 'Graduation' },
    { id: 'events', label: 'Events' },
    { id: 'facilities', label: 'Facilities' },
    { id: 'students', label: 'Student Life' }
  ];

  const photos = [
    {
      id: 1,
      src: 'https://images.pexels.com/photos/5452293/pexels-photo-5452293.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
      title: 'Medical Students in Laboratory',
      category: 'facilities',
      location: 'Kursk State Medical University, Russia',
      date: '2024-01-15'
    },
    {
      id: 2,
      src: 'https://images.pexels.com/photos/5452271/pexels-photo-5452271.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
      title: 'Graduation Ceremony 2023',
      category: 'graduation',
      location: 'Tbilisi State Medical University, Georgia',
      date: '2023-06-20'
    },
    {
      id: 3,
      src: 'https://images.pexels.com/photos/4916461/pexels-photo-4916461.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
      title: 'Modern Campus Infrastructure',
      category: 'campus',
      location: 'Tashkent Medical Academy, Uzbekistan',
      date: '2024-02-10'
    },
    {
      id: 4,
      src: 'https://images.pexels.com/photos/5452280/pexels-photo-5452280.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
      title: 'Student Orientation Program',
      category: 'events',
      location: 'Kazakh National Medical University, Kazakhstan',
      date: '2023-09-05'
    },
    {
      id: 5,
      src: 'https://images.pexels.com/photos/4916559/pexels-photo-4916559.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
      title: 'Library and Study Areas',
      category: 'facilities',
      location: 'Kyrgyz State Medical Academy, Kyrgyzstan',
      date: '2024-01-20'
    },
    {
      id: 6,
      src: 'https://images.pexels.com/photos/5668858/pexels-photo-5668858.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
      title: 'International Students Community',
      category: 'students',
      location: 'Various Universities',
      date: '2023-12-15'
    },
    {
      id: 7,
      src: 'https://images.pexels.com/photos/5215024/pexels-photo-5215024.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
      title: 'Medical Conference 2023',
      category: 'events',
      location: 'Saint Petersburg State University, Russia',
      date: '2023-11-10'
    },
    {
      id: 8,
      src: 'https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
      title: 'Student Success Stories',
      category: 'graduation',
      location: 'Multiple Universities',
      date: '2023-07-30'
    }
  ];

  const videos = [
    {
      id: 1,
      thumbnail: '/FMGE.png',
      title: 'FMGE - Foreign Medical Graduates Examination',
      youtubeUrl: 'https://www.youtube.com/watch?v=PVAkzHkvaA8',
      category: 'education',
      date: '2024-03-15'
    },
    {
      id: 2,
      thumbnail: '/Future of MBBS abroad.png',
      title: 'Future of MBBS Abroad',
      youtubeUrl: 'https://www.youtube.com/watch?v=oq8-adepP0U',
      category: 'education',
      date: '2024-03-10'
    },
    {
      id: 3,
      thumbnail: '/MBBS university transfer.png',
      title: 'MBBS University Transfer',
      youtubeUrl: 'https://www.youtube.com/watch?v=3TC_6r9F_EY',
      category: 'education',
      date: '2024-03-05'
    },
    {
      id: 4,
      thumbnail: '/NMC new rules.png',
      title: 'NMC New Rules',
      youtubeUrl: 'https://www.youtube.com/watch?v=kYcx7B8Jfts',
      category: 'education',
      date: '2024-03-01'
    }
  ];

  const filteredPhotos = activeFilter === 'all' 
    ? photos 
    : photos.filter(photo => photo.category === activeFilter);

  const filteredVideos = activeFilter === 'all' 
    ? videos 
    : videos.filter(video => video.category === activeFilter);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary to-primary-light text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center animate-slide-up">
            <ImageIcon className="w-16 h-16 mx-auto mb-6 text-secondary" />
            <h1 className="text-4xl md:text-6xl font-bold mb-6">Gallery</h1>
            <p className="text-xl text-gray-200 max-w-3xl mx-auto">
              Explore our visual journey through campus life, graduation ceremonies, 
              student achievements, and memorable moments from universities worldwide.
            </p>
          </div>
        </div>
      </section>

      {/* Tabs and Filters */}
      <section className="py-8 bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Photo/Video Tabs */}
          <div className="flex justify-center mb-8">
            <div className="bg-gray-100 rounded-lg p-1 flex">
              <button
                onClick={() => setActiveTab('photos')}
                className={`px-6 py-2 rounded-lg font-medium transition-colors ${
                  activeTab === 'photos'
                    ? 'bg-primary text-white'
                    : 'text-gray-600 hover:text-primary'
                }`}
              >
                <ImageIcon className="w-4 h-4 inline mr-2" />
                Photos
              </button>
              <button
                onClick={() => setActiveTab('videos')}
                className={`px-6 py-2 rounded-lg font-medium transition-colors ${
                  activeTab === 'videos'
                    ? 'bg-primary text-white'
                    : 'text-gray-600 hover:text-primary'
                }`}
              >
                <Play className="w-4 h-4 inline mr-2" />
                Videos
              </button>
            </div>
          </div>

          {/* Filters */}
          <div className="flex flex-wrap justify-center gap-2">
            {filters.map((filter) => (
              <button
                key={filter.id}
                onClick={() => setActiveFilter(filter.id)}
                className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                  activeFilter === filter.id
                    ? 'bg-primary text-white'
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                }`}
              >
                {filter.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Content */}
      <section className="py-20 bg-accent">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {activeTab === 'photos' ? (
            /* Photo Gallery */
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {filteredPhotos.map((photo, index) => (
                <div
                  key={photo.id}
                  className="group bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 animate-scale-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="relative overflow-hidden">
                    <img
                      src={photo.src}
                      alt={photo.title}
                      className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300"></div>
                  </div>
                  <div className="p-4">
                    <h3 className="font-semibold text-primary mb-2 group-hover:text-secondary transition-colors">
                      {photo.title}
                    </h3>
                    <div className="space-y-1 text-sm text-gray-600">
                      <div className="flex items-center space-x-1">
                        <MapPin className="w-3 h-3" />
                        <span>{photo.location}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Calendar className="w-3 h-3" />
                        <span>{new Date(photo.date).toLocaleDateString()}</span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            /* Video Gallery */
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredVideos.map((video, index) => (
                <div
                  key={video.id}
                  className="group bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 animate-scale-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <a 
                    href={video.youtubeUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block relative overflow-hidden"
                  >
                    <img
                      src={video.thumbnail}
                      alt={video.title}
                      className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors duration-300 flex items-center justify-center">
                      <div className="w-16 h-16 bg-white/90 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                        <Play className="w-6 h-6 text-primary ml-1" />
                      </div>
                    </div>
                  </a>
                  <div className="p-4">
                    <a 
                      href={video.youtubeUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block"
                    >
                      <h3 className="font-semibold text-primary mb-2 group-hover:text-secondary transition-colors">
                        {video.title}
                      </h3>
                    </a>
                    <div className="flex items-center space-x-1 text-sm text-gray-600">
                      <Calendar className="w-3 h-3" />
                      <span>{new Date(video.date).toLocaleDateString()}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* No Results */}
          {((activeTab === 'photos' && filteredPhotos.length === 0) || 
            (activeTab === 'videos' && filteredVideos.length === 0)) && (
            <div className="text-center py-12">
              <ImageIcon className="w-16 h-16 text-gray-300 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-600 mb-2">No content found</h3>
              <p className="text-gray-500">
                No {activeTab} found for the selected category.{' '}
                <button
                  onClick={() => setActiveFilter('all')}
                  className="text-primary hover:text-secondary font-medium"
                >
                  View all {activeTab}
                </button>
              </p>
            </div>
          )}
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-primary text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-slide-up">
            <h2 className="text-4xl font-bold mb-4">Our Visual Journey</h2>
            <p className="text-xl text-gray-200 max-w-3xl mx-auto">
              Capturing moments, celebrating achievements, and showcasing the incredible 
              journey of our students worldwide.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { number: '500+', label: 'Photos Captured' },
              { number: '50+', label: 'Video Stories' },
              { number: '25+', label: 'Universities Featured' },
              { number: '1000+', label: 'Student Moments' }
            ].map((stat, index) => (
              <div
                key={index}
                className="text-center animate-scale-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="text-3xl md:text-4xl font-bold text-secondary mb-2">{stat.number}</div>
                <div className="text-gray-300 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-secondary to-primary text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="animate-slide-up">
            <h2 className="text-4xl font-bold mb-6">Be Part of Our Story</h2>
            <p className="text-xl mb-8 text-gray-200">
              Join thousands of successful students and create your own memorable moments 
              at world-class medical universities. Your journey starts here.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-white text-primary px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-colors inline-flex items-center justify-center"
              >
                Start Your Journey
              </Link>
              <Link
                to="/contact"
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-primary transition-all duration-300 inline-flex items-center justify-center"
              >
                Share Your Story
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
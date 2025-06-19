import React, { useState } from 'react';
import { Calendar, User, Tag, Search, ArrowRight, Clock } from 'lucide-react';

export const Blog: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = [
    { id: 'all', label: 'All Posts' },
    { id: 'mbbs-abroad', label: 'MBBS Abroad' },
    { id: 'admission-tips', label: 'Admission Tips' },
    { id: 'student-life', label: 'Student Life' },
    { id: 'university-news', label: 'University News' },
    { id: 'success-stories', label: 'Success Stories' }
  ];

  const blogPosts = [
    {
      id: 1,
      title: 'Complete Guide to MBBS in Russia 2024: Everything You Need to Know',
      excerpt: 'Discover why Russia is becoming the top destination for Indian medical students. Learn about top universities, admission process, fees, and student life.',
      content: 'Russia has emerged as one of the most popular destinations for Indian students pursuing MBBS abroad...',
      author: 'Dr. Rajesh Kumar',
      date: '2024-01-15',
      category: 'mbbs-abroad',
      image: 'https://images.pexels.com/photos/4916461/pexels-photo-4916461.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
      readTime: '8 min read',
      tags: ['Russia', 'MBBS', 'Medical Education', 'Study Abroad']
    },
    {
      id: 2,
      title: 'NEET 2024: How to Prepare for MBBS Abroad After NEET Results',
      excerpt: 'Got your NEET results? Here\'s your complete roadmap to securing MBBS admission abroad with expert tips and timeline.',
      content: 'The NEET results are out, and if you\'re considering MBBS abroad, this is the perfect time to start your journey...',
      author: 'Ms. Priya Sharma',
      date: '2024-01-10',
      category: 'admission-tips',
      image: 'https://images.pexels.com/photos/5452293/pexels-photo-5452293.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
      readTime: '6 min read',
      tags: ['NEET', 'Admission', 'MBBS Abroad', 'Career Guidance']
    },
    {
      id: 3,
      title: 'Student Life in Georgia: A Complete Experience Guide',
      excerpt: 'From campus culture to local cuisine, discover what it\'s really like to be an international medical student in Georgia.',
      content: 'Georgia offers a unique blend of European and Asian cultures, making it an exciting destination for medical students...',
      author: 'Rahul Patel',
      date: '2024-01-05',
      category: 'student-life',
      image: 'https://images.pexels.com/photos/5452271/pexels-photo-5452271.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
      readTime: '10 min read',
      tags: ['Georgia', 'Student Life', 'Culture', 'International Students']
    },
    {
      id: 4,
      title: 'Top 10 Medical Universities in Uzbekistan for Indian Students',
      excerpt: 'Explore the best medical universities in Uzbekistan offering quality education at affordable fees with complete recognition.',
      content: 'Uzbekistan has become an increasingly popular destination for Indian medical students due to its affordable fees...',
      author: 'Dr. Amit Singh',
      date: '2023-12-28',
      category: 'university-news',
      image: 'https://images.pexels.com/photos/5452280/pexels-photo-5452280.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
      readTime: '7 min read',
      tags: ['Uzbekistan', 'Universities', 'Medical Education', 'Rankings']
    },
    {
      id: 5,
      title: 'From Dreams to Reality: Ananya\'s Journey from Mumbai to Tbilisi',
      excerpt: 'Read the inspiring success story of Ananya Singh, who overcame challenges to become a successful medical student in Georgia.',
      content: 'Ananya Singh from Mumbai always dreamed of becoming a doctor, but the competitive landscape in India...',
      author: 'Editorial Team',
      date: '2023-12-20',
      category: 'success-stories',
      image: 'https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
      readTime: '5 min read',
      tags: ['Success Story', 'Student Journey', 'Georgia', 'Inspiration']
    },
    {
      id: 6,
      title: 'Document Checklist for MBBS Abroad: Complete Guide 2024',
      excerpt: 'Don\'t miss any important documents! Here\'s your comprehensive checklist for MBBS abroad applications.',
      content: 'Applying for MBBS abroad requires careful preparation of various documents. Missing even one can delay your admission...',
      author: 'Mr. Vikash Kumar',
      date: '2023-12-15',
      category: 'admission-tips',
      image: 'https://images.pexels.com/photos/5668858/pexels-photo-5668858.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
      readTime: '9 min read',
      tags: ['Documents', 'Admission', 'Checklist', 'MBBS Abroad']
    }
  ];

  const filteredPosts = blogPosts.filter(post => {
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    const matchesCategory = selectedCategory === 'all' || post.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const featuredPost = blogPosts[0];
  const recentPosts = blogPosts.slice(1, 4);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary to-primary-light text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center animate-slide-up">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">Blog & Updates</h1>
            <p className="text-xl text-gray-200 max-w-3xl mx-auto">
              Stay updated with the latest news, insights, and guidance about medical education, 
              university updates, and student success stories.
            </p>
          </div>
        </div>
      </section>

      {/* Search and Filter */}
      <section className="py-8 bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search articles..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
              />
            </div>
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                    selectedCategory === category.id
                      ? 'bg-primary text-white'
                      : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                  }`}
                >
                  {category.label}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Featured Post */}
      <section className="py-16 bg-accent">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-xl shadow-lg overflow-hidden animate-slide-up">
            <div className="grid grid-cols-1 lg:grid-cols-2">
              <div className="relative">
                <img
                  src={featuredPost.image}
                  alt={featuredPost.title}
                  className="w-full h-64 lg:h-full object-cover"
                />
                <div className="absolute top-4 left-4 bg-primary text-white px-3 py-1 rounded-full text-sm font-medium">
                  Featured
                </div>
              </div>
              <div className="p-8">
                <div className="flex items-center space-x-4 text-sm text-gray-500 mb-4">
                  <div className="flex items-center space-x-1">
                    <Calendar className="w-4 h-4" />
                    <span>{new Date(featuredPost.date).toLocaleDateString()}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <User className="w-4 h-4" />
                    <span>{featuredPost.author}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Clock className="w-4 h-4" />
                    <span>{featuredPost.readTime}</span>
                  </div>
                </div>
                <h2 className="text-2xl font-bold text-primary mb-4">{featuredPost.title}</h2>
                <p className="text-gray-600 mb-6">{featuredPost.excerpt}</p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {featuredPost.tags.map((tag, index) => (
                    <span
                      key={index}
                      className="bg-accent text-primary px-3 py-1 rounded-full text-sm font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <button className="bg-primary text-white px-6 py-3 rounded-lg font-semibold hover:bg-primary-light transition-colors inline-flex items-center space-x-2">
                  <span>Read Full Article</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-slide-up">
            <h2 className="text-4xl font-bold text-primary mb-4">Latest Articles</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Explore our latest insights, tips, and updates about medical education and student life.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPosts.slice(1).map((post, index) => (
              <article
                key={post.id}
                className="bg-white border border-gray-200 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden animate-scale-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="relative">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-48 object-cover hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-4 left-4 bg-primary text-white px-3 py-1 rounded-full text-xs font-medium capitalize">
                    {post.category.replace('-', ' ')}
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-center space-x-4 text-xs text-gray-500 mb-3">
                    <div className="flex items-center space-x-1">
                      <Calendar className="w-3 h-3" />
                      <span>{new Date(post.date).toLocaleDateString()}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Clock className="w-3 h-3" />
                      <span>{post.readTime}</span>
                    </div>
                  </div>
                  <h3 className="text-lg font-bold text-primary mb-3 hover:text-secondary transition-colors cursor-pointer">
                    {post.title}
                  </h3>
                  <p className="text-gray-600 text-sm mb-4 line-clamp-3">{post.excerpt}</p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2 text-sm text-gray-500">
                      <User className="w-4 h-4" />
                      <span>{post.author}</span>
                    </div>
                    <button className="text-primary hover:text-secondary font-medium text-sm inline-flex items-center space-x-1">
                      <span>Read More</span>
                      <ArrowRight className="w-3 h-3" />
                    </button>
                  </div>
                </div>
              </article>
            ))}
          </div>

          {filteredPosts.length === 0 && (
            <div className="text-center py-12">
              <h3 className="text-xl font-semibold text-gray-600 mb-2">No articles found</h3>
              <p className="text-gray-500">
                Try adjusting your search or{' '}
                <button
                  onClick={() => {
                    setSearchTerm('');
                    setSelectedCategory('all');
                  }}
                  className="text-primary hover:text-secondary font-medium"
                >
                  view all articles
                </button>
              </p>
            </div>
          )}
        </div>
      </section>

      {/* Newsletter Subscription */}
      <section className="py-20 bg-primary text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="animate-slide-up">
            <h2 className="text-4xl font-bold mb-6">Stay Updated</h2>
            <p className="text-xl mb-8 text-gray-200">
              Subscribe to our newsletter and never miss important updates about 
              medical education, admission deadlines, and success stories.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-lg text-gray-900 focus:ring-2 focus:ring-secondary focus:outline-none"
              />
              <button className="bg-secondary text-primary px-6 py-3 rounded-lg font-semibold hover:bg-opacity-90 transition-colors">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Recent Posts Sidebar */}
      <section className="py-20 bg-accent">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-slide-up">
            <h2 className="text-4xl font-bold text-primary mb-4">Popular Articles</h2>
            <p className="text-xl text-gray-600">
              Don't miss these trending articles from our blog
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {recentPosts.map((post, index) => (
              <div
                key={post.id}
                className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-300 animate-scale-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex items-center space-x-2 text-xs text-gray-500 mb-3">
                  <Calendar className="w-3 h-3" />
                  <span>{new Date(post.date).toLocaleDateString()}</span>
                </div>
                <h3 className="text-lg font-semibold text-primary mb-3 hover:text-secondary transition-colors cursor-pointer">
                  {post.title}
                </h3>
                <p className="text-gray-600 text-sm mb-4">{post.excerpt.substring(0, 100)}...</p>
                <button className="text-primary hover:text-secondary font-medium text-sm inline-flex items-center space-x-1">
                  <span>Read Article</span>
                  <ArrowRight className="w-3 h-3" />
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};
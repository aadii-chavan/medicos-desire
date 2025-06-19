import React, { useState, useEffect } from 'react';
import { Plus, Edit, Trash2, Search, Calendar, User, Eye, AlertCircle } from 'lucide-react';
import { getBlogPosts, addBlogPost, updateBlogPost, deleteBlogPost } from '../../firebase/firestore';

interface BlogPost {
  id?: string;
  title: string;
  excerpt: string;
  content: string;
  author: string;
  image: string;
  category: string;
  tags: string[];
  published: boolean;
  sectionType: 'featured' | 'latest' | 'popular';
  createdAt?: any;
}

export const BlogManager: React.FC = () => {
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);
  const [showModal, setShowModal] = useState(false);
  const [editingPost, setEditingPost] = useState<BlogPost | null>(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [formData, setFormData] = useState<BlogPost>({
    title: '',
    excerpt: '',
    content: '',
    author: '',
    image: '',
    category: '',
    tags: [],
    published: false,
    sectionType: 'latest'
  });

  useEffect(() => {
    fetchPosts();
  }, []);

  const fetchPosts = async () => {
    try {
      const fetchedPosts = await getBlogPosts();
      setPosts(fetchedPosts);
    } catch (error) {
      console.error('Error fetching posts:', error);
    } finally {
      setLoading(false);
    }
  };

  const getSectionCounts = () => {
    return {
      featured: posts.filter(p => p.sectionType === 'featured').length,
      latest: posts.filter(p => p.sectionType === 'latest').length,
      popular: posts.filter(p => p.sectionType === 'popular').length
    };
  };

  const validateSectionLimits = (sectionType: string, currentPostId?: string) => {
    const counts = getSectionCounts();
    
    if (sectionType === 'featured' && counts.featured >= 1) {
      const existingFeatured = posts.find(p => p.sectionType === 'featured' && p.id !== currentPostId);
      if (existingFeatured) {
        return `Only 1 featured post allowed. "${existingFeatured.title}" is currently featured.`;
      }
    }
    
    if (sectionType === 'popular' && counts.popular >= 6) {
      const existingPopular = posts.filter(p => p.sectionType === 'popular' && p.id !== currentPostId);
      if (existingPopular.length >= 6) {
        return 'Maximum 6 popular posts allowed.';
      }
    }
    
    return null;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validate section limits
    const validationError = validateSectionLimits(formData.sectionType, editingPost?.id);
    if (validationError) {
      alert(validationError);
      return;
    }

    try {
      if (editingPost) {
        await updateBlogPost(editingPost.id!, formData);
      } else {
        await addBlogPost(formData);
      }
      await fetchPosts();
      resetForm();
    } catch (error) {
      console.error('Error saving post:', error);
    }
  };

  const handleDelete = async (id: string) => {
    if (window.confirm('Are you sure you want to delete this post?')) {
      try {
        await deleteBlogPost(id);
        await fetchPosts();
      } catch (error) {
        console.error('Error deleting post:', error);
      }
    }
  };

  const handleEdit = (post: BlogPost) => {
    setEditingPost(post);
    setFormData(post);
    setShowModal(true);
  };

  const resetForm = () => {
    setFormData({
      title: '',
      excerpt: '',
      content: '',
      author: '',
      image: '',
      category: '',
      tags: [],
      published: false,
      sectionType: 'latest'
    });
    setEditingPost(null);
    setShowModal(false);
  };

  const filteredPosts = posts.filter(post =>
    post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    post.author.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const sectionCounts = getSectionCounts();

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
          <h1 className="text-3xl font-bold text-gray-900">Blog Manager</h1>
          <p className="text-gray-600 mt-1">Manage your blog posts and articles</p>
        </div>
        <button
          onClick={() => setShowModal(true)}
          className="bg-primary text-white px-4 py-2 rounded-lg font-medium hover:bg-primary-light transition-colors flex items-center space-x-2"
        >
          <Plus className="w-4 h-4" />
          <span>New Post</span>
        </button>
      </div>

      {/* Section Statistics */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="bg-gray-50 border border-gray-200 rounded-lg p-4">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Featured Posts</p>
              <p className="text-2xl font-bold text-gray-900">{sectionCounts.featured}</p>
            </div>
            <div className="text-gray-400">
              <Eye className="w-8 h-8" />
            </div>
          </div>
          <p className="text-xs text-gray-600 mt-1">Max: 1 post</p>
        </div>
        
        <div className="bg-gray-50 border border-gray-200 rounded-lg p-4">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Popular Posts</p>
              <p className="text-2xl font-bold text-gray-900">{sectionCounts.popular}</p>
            </div>
            <div className="text-gray-400">
              <User className="w-8 h-8" />
            </div>
          </div>
          <p className="text-xs text-gray-600 mt-1">Max: 6 posts</p>
        </div>
        
        <div className="bg-gray-50 border border-gray-200 rounded-lg p-4">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Latest Articles</p>
              <p className="text-2xl font-bold text-gray-900">{sectionCounts.latest}</p>
            </div>
            <div className="text-gray-400">
              <Calendar className="w-8 h-8" />
            </div>
          </div>
          <p className="text-xs text-gray-600 mt-1">Unlimited</p>
        </div>
      </div>

      {/* Search */}
      <div className="relative max-w-md">
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
        <input
          type="text"
          placeholder="Search posts..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent w-full"
        />
      </div>

      {/* Posts List */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-200">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50 border-b border-gray-200">
              <tr>
                <th className="text-left py-3 px-6 font-medium text-gray-900">Title</th>
                <th className="text-left py-3 px-6 font-medium text-gray-900">Author</th>
                <th className="text-left py-3 px-6 font-medium text-gray-900">Section</th>
                <th className="text-left py-3 px-6 font-medium text-gray-900">Category</th>
                <th className="text-left py-3 px-6 font-medium text-gray-900">Status</th>
                <th className="text-left py-3 px-6 font-medium text-gray-900">Date</th>
                <th className="text-left py-3 px-6 font-medium text-gray-900">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {filteredPosts.map((post) => (
                <tr key={post.id} className="hover:bg-gray-50">
                  <td className="py-4 px-6">
                    <div className="flex items-center space-x-3">
                      <img
                        src={post.image || 'https://via.placeholder.com/40x40'}
                        alt={post.title}
                        className="w-10 h-10 rounded-lg object-cover"
                      />
                      <div>
                        <p className="font-medium text-gray-900">{post.title}</p>
                        <p className="text-sm text-gray-500">{post.excerpt.substring(0, 50)}...</p>
                      </div>
                    </div>
                  </td>
                  <td className="py-4 px-6 text-gray-900">{post.author}</td>
                  <td className="py-4 px-6">
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                      post.sectionType === 'featured' 
                        ? 'bg-blue-100 text-blue-800'
                        : post.sectionType === 'popular'
                        ? 'bg-green-100 text-green-800'
                        : 'bg-gray-100 text-gray-800'
                    }`}>
                      {post.sectionType}
                    </span>
                  </td>
                  <td className="py-4 px-6">
                    <span className="bg-gray-100 text-gray-800 px-2 py-1 rounded-full text-xs font-medium">
                      {post.category}
                    </span>
                  </td>
                  <td className="py-4 px-6">
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                      post.published 
                        ? 'bg-green-100 text-green-800' 
                        : 'bg-yellow-100 text-yellow-800'
                    }`}>
                      {post.published ? 'Published' : 'Draft'}
                    </span>
                  </td>
                  <td className="py-4 px-6 text-gray-500 text-sm">
                    {post.createdAt?.toDate?.()?.toLocaleDateString() || 'N/A'}
                  </td>
                  <td className="py-4 px-6">
                    <div className="flex items-center space-x-2">
                      <button
                        onClick={() => handleEdit(post)}
                        className="text-blue-600 hover:text-blue-800 p-1"
                      >
                        <Edit className="w-4 h-4" />
                      </button>
                      <button
                        onClick={() => handleDelete(post.id!)}
                        className="text-red-600 hover:text-red-800 p-1"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            <div className="p-6 border-b border-gray-200">
              <h2 className="text-xl font-semibold text-gray-900">
                {editingPost ? 'Edit Post' : 'New Post'}
              </h2>
            </div>
            <form onSubmit={handleSubmit} className="p-6 space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Title</label>
                <input
                  type="text"
                  value={formData.title}
                  onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                  required
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Section Type</label>
                <select
                  value={formData.sectionType}
                  onChange={(e) => setFormData({ ...formData, sectionType: e.target.value as any })}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                  required
                >
                  <option value="latest">Latest Articles (Unlimited)</option>
                  <option value="popular" disabled={sectionCounts.popular >= 6 && formData.sectionType !== 'popular'}>
                    Popular Articles ({sectionCounts.popular}/6)
                  </option>
                  <option value="featured" disabled={sectionCounts.featured >= 1 && formData.sectionType !== 'featured'}>
                    Featured (1 max) {sectionCounts.featured >= 1 ? '- FULL' : ''}
                  </option>
                </select>
                {formData.sectionType === 'featured' && sectionCounts.featured >= 1 && !editingPost && (
                  <div className="mt-2 p-2 bg-yellow-50 border border-yellow-200 rounded text-sm text-yellow-700 flex items-center space-x-2">
                    <AlertCircle className="w-4 h-4" />
                    <span>Featured slot is occupied. Creating this will replace the current featured post.</span>
                  </div>
                )}
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Excerpt</label>
                <textarea
                  value={formData.excerpt}
                  onChange={(e) => setFormData({ ...formData, excerpt: e.target.value })}
                  rows={2}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Content</label>
                <textarea
                  value={formData.content}
                  onChange={(e) => setFormData({ ...formData, content: e.target.value })}
                  rows={6}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                  required
                />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Author</label>
                  <input
                    type="text"
                    value={formData.author}
                    onChange={(e) => setFormData({ ...formData, author: e.target.value })}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Category</label>
                  <select
                    value={formData.category}
                    onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                    required
                  >
                    <option value="">Select Category</option>
                    <option value="mbbs-abroad">MBBS Abroad</option>
                    <option value="admission-tips">Admission Tips</option>
                    <option value="student-life">Student Life</option>
                    <option value="university-news">University News</option>
                    <option value="success-stories">Success Stories</option>
                  </select>
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Image URL</label>
                <input
                  type="url"
                  value={formData.image}
                  onChange={(e) => setFormData({ ...formData, image: e.target.value })}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                  placeholder="https://example.com/image.jpg"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Tags (comma separated)</label>
                <input
                  type="text"
                  value={formData.tags.join(', ')}
                  onChange={(e) => setFormData({ ...formData, tags: e.target.value.split(',').map(tag => tag.trim()) })}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                  placeholder="MBBS, Russia, Medical Education"
                />
              </div>
              <div className="flex items-center">
                <input
                  type="checkbox"
                  id="published"
                  checked={formData.published}
                  onChange={(e) => setFormData({ ...formData, published: e.target.checked })}
                  className="mr-2"
                />
                <label htmlFor="published" className="text-sm font-medium text-gray-700">
                  Publish immediately
                </label>
              </div>
              <div className="flex justify-end space-x-3 pt-4">
                <button
                  type="button"
                  onClick={resetForm}
                  className="px-4 py-2 text-gray-700 border border-gray-300 rounded-lg hover:bg-gray-50"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 bg-primary text-white rounded-lg hover:bg-primary-light"
                >
                  {editingPost ? 'Update' : 'Create'} Post
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};
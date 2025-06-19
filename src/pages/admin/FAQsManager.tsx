import React, { useState, useEffect } from 'react';
import { Plus, Edit, Trash2, Search, ChevronUp, ChevronDown, Globe, MapPin, Settings } from 'lucide-react';
import { getFAQs, addFAQ, updateFAQ, deleteFAQ } from '../../firebase/firestore';

interface FAQ {
  id?: string;
  question: string;
  answer: string;
  category: string;
  order: number;
  type: 'global' | 'service' | 'country';
  serviceId?: string;
  countryId?: string;
}

export const FAQsManager: React.FC = () => {
  const [faqs, setFaqs] = useState<FAQ[]>([]);
  const [loading, setLoading] = useState(true);
  const [showModal, setShowModal] = useState(false);
  const [editingFAQ, setEditingFAQ] = useState<FAQ | null>(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [activeTab, setActiveTab] = useState<'global' | 'service' | 'country'>('global');
  const [selectedService, setSelectedService] = useState('');
  const [selectedCountry, setSelectedCountry] = useState('');
  const [formData, setFormData] = useState<FAQ>({
    question: '',
    answer: '',
    category: 'general',
    order: 0,
    type: 'global'
  });

  const globalCategories = [
    { value: 'general', label: 'General Information' },
    { value: 'mbbs-abroad', label: 'MBBS Abroad' },
    { value: 'admission', label: 'Admission Process' },
    { value: 'fees', label: 'Fees and Financial' },
    { value: 'visa', label: 'Visa and Travel' },
    { value: 'after-graduation', label: 'After Graduation' }
  ];

  const services = [
    { id: 'counseling-guidance', name: 'Counseling & Guidance' },
    { id: 'apostille-attestation', name: 'Apostille & Attestation' },
    { id: 'document-translation', name: 'Document Translation' },
    { id: 'visa-services', name: 'Visa Services' },
    { id: 'forex-travel', name: 'Forex & Travel' },
    { id: 'scholarships-loans', name: 'Scholarships & Loans' }
  ];

  const countries = [
    { id: 'russia', name: 'Russia', flag: '🇷🇺' },
    { id: 'georgia', name: 'Georgia', flag: '🇬🇪' },
    { id: 'uzbekistan', name: 'Uzbekistan', flag: '🇺🇿' },
    { id: 'kazakhstan', name: 'Kazakhstan', flag: '🇰🇿' },
    { id: 'kyrgyzstan', name: 'Kyrgyzstan', flag: '🇰🇬' }
  ];

  useEffect(() => {
    fetchFAQs();
  }, []);

  const fetchFAQs = async () => {
    try {
      const fetchedFAQs = await getFAQs();
      setFaqs(fetchedFAQs);
    } catch (error) {
      console.error('Error fetching FAQs:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const faqData = {
        ...formData,
        type: activeTab,
        serviceId: activeTab === 'service' ? selectedService : undefined,
        countryId: activeTab === 'country' ? selectedCountry : undefined
      };

      if (editingFAQ) {
        await updateFAQ(editingFAQ.id!, faqData);
      } else {
        // Set order to be last in category
        const categoryFAQs = getFilteredFAQs().filter(faq => 
          faq.category === formData.category && 
          faq.type === activeTab &&
          (activeTab === 'service' ? faq.serviceId === selectedService : true) &&
          (activeTab === 'country' ? faq.countryId === selectedCountry : true)
        );
        const maxOrder = categoryFAQs.length > 0 ? Math.max(...categoryFAQs.map(faq => faq.order)) : 0;
        await addFAQ({ ...faqData, order: maxOrder + 1 });
      }
      await fetchFAQs();
      resetForm();
    } catch (error) {
      console.error('Error saving FAQ:', error);
    }
  };

  const handleDelete = async (id: string) => {
    if (window.confirm('Are you sure you want to delete this FAQ?')) {
      try {
        await deleteFAQ(id);
        await fetchFAQs();
      } catch (error) {
        console.error('Error deleting FAQ:', error);
      }
    }
  };

  const handleEdit = (faq: FAQ) => {
    setEditingFAQ(faq);
    setFormData(faq);
    setActiveTab(faq.type);
    if (faq.serviceId) setSelectedService(faq.serviceId);
    if (faq.countryId) setSelectedCountry(faq.countryId);
    setShowModal(true);
  };

  const resetForm = () => {
    setFormData({
      question: '',
      answer: '',
      category: 'general',
      order: 0,
      type: activeTab
    });
    setEditingFAQ(null);
    setShowModal(false);
  };

  const getFilteredFAQs = () => {
    return faqs.filter(faq => {
      const matchesSearch = faq.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           faq.answer.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesType = faq.type === activeTab;
      const matchesService = activeTab !== 'service' || faq.serviceId === selectedService;
      const matchesCountry = activeTab !== 'country' || faq.countryId === selectedCountry;
      
      return matchesSearch && matchesType && matchesService && matchesCountry;
    });
  };

  const getCategoryLabel = (categoryValue: string) => {
    return globalCategories.find(cat => cat.value === categoryValue)?.label || categoryValue;
  };

  const getTabCounts = () => {
    return {
      global: faqs.filter(f => f.type === 'global').length,
      service: faqs.filter(f => f.type === 'service').length,
      country: faqs.filter(f => f.type === 'country').length
    };
  };

  const tabCounts = getTabCounts();
  const filteredFAQs = getFilteredFAQs();

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
          <h1 className="text-3xl font-bold text-gray-900">FAQs Manager</h1>
          <p className="text-gray-600 mt-1">Manage frequently asked questions across different sections</p>
        </div>
        <button
          onClick={() => setShowModal(true)}
          className="bg-primary text-white px-4 py-2 rounded-lg font-medium hover:bg-primary-light transition-colors flex items-center space-x-2"
        >
          <Plus className="w-4 h-4" />
          <span>Add FAQ</span>
        </button>
      </div>

      {/* Tabs */}
      <div className="border-b border-gray-200">
        <nav className="-mb-px flex space-x-8">
          <button
            onClick={() => setActiveTab('global')}
            className={`py-2 px-1 border-b-2 font-medium text-sm flex items-center space-x-2 ${
              activeTab === 'global'
                ? 'border-primary text-primary'
                : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
            }`}
          >
            <Globe className="w-4 h-4" />
            <span>Global FAQs</span>
            <span className="bg-gray-100 text-gray-600 px-2 py-1 rounded-full text-xs">
              {tabCounts.global}
            </span>
          </button>
          <button
            onClick={() => setActiveTab('service')}
            className={`py-2 px-1 border-b-2 font-medium text-sm flex items-center space-x-2 ${
              activeTab === 'service'
                ? 'border-primary text-primary'
                : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
            }`}
          >
            <Settings className="w-4 h-4" />
            <span>Service-Specific</span>
            <span className="bg-gray-100 text-gray-600 px-2 py-1 rounded-full text-xs">
              {tabCounts.service}
            </span>
          </button>
          <button
            onClick={() => setActiveTab('country')}
            className={`py-2 px-1 border-b-2 font-medium text-sm flex items-center space-x-2 ${
              activeTab === 'country'
                ? 'border-primary text-primary'
                : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
            }`}
          >
            <MapPin className="w-4 h-4" />
            <span>Country-Specific</span>
            <span className="bg-gray-100 text-gray-600 px-2 py-1 rounded-full text-xs">
              {tabCounts.country}
            </span>
          </button>
        </nav>
      </div>

      {/* Filters */}
      <div className="flex flex-col sm:flex-row gap-4">
        <div className="relative flex-1 max-w-md">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
          <input
            type="text"
            placeholder="Search FAQs..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent w-full"
          />
        </div>
        
        {activeTab === 'service' && (
          <select
            value={selectedService}
            onChange={(e) => setSelectedService(e.target.value)}
            className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
          >
            <option value="">Select Service</option>
            {services.map(service => (
              <option key={service.id} value={service.id}>
                {service.name}
              </option>
            ))}
          </select>
        )}
        
        {activeTab === 'country' && (
          <select
            value={selectedCountry}
            onChange={(e) => setSelectedCountry(e.target.value)}
            className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
          >
            <option value="">Select Country</option>
            {countries.map(country => (
              <option key={country.id} value={country.id}>
                {country.flag} {country.name}
              </option>
            ))}
          </select>
        )}
      </div>

      {/* FAQs List */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-200">
        <div className="p-6">
          {filteredFAQs.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-gray-500 text-lg">No FAQs found</p>
              <p className="text-gray-400 text-sm mt-1">
                {searchTerm || (activeTab === 'service' && !selectedService) || (activeTab === 'country' && !selectedCountry)
                  ? 'Try adjusting your search or filter criteria'
                  : 'Add your first FAQ to get started'
                }
              </p>
            </div>
          ) : (
            <div className="space-y-4">
              {filteredFAQs.map((faq, index) => (
                <div
                  key={faq.id}
                  className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow"
                >
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <div className="flex items-center space-x-2 mb-2">
                        <span className="bg-primary text-white px-2 py-1 rounded-full text-xs font-medium">
                          {getCategoryLabel(faq.category)}
                        </span>
                        {faq.type === 'service' && faq.serviceId && (
                          <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded-full text-xs font-medium">
                            {services.find(s => s.id === faq.serviceId)?.name}
                          </span>
                        )}
                        {faq.type === 'country' && faq.countryId && (
                          <span className="bg-green-100 text-green-800 px-2 py-1 rounded-full text-xs font-medium">
                            {countries.find(c => c.id === faq.countryId)?.flag} {countries.find(c => c.id === faq.countryId)?.name}
                          </span>
                        )}
                        <span className="text-gray-500 text-xs">Order: {faq.order}</span>
                      </div>
                      <h3 className="font-semibold text-gray-900 mb-2">{faq.question}</h3>
                      <p className="text-gray-600 text-sm leading-relaxed">{faq.answer}</p>
                    </div>
                    <div className="flex items-center space-x-2 ml-4">
                      <button
                        onClick={() => handleEdit(faq)}
                        className="text-blue-600 hover:text-blue-800 p-1"
                      >
                        <Edit className="w-4 h-4" />
                      </button>
                      <button
                        onClick={() => handleDelete(faq.id!)}
                        className="text-red-600 hover:text-red-800 p-1"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            <div className="p-6 border-b border-gray-200">
              <h2 className="text-xl font-semibold text-gray-900">
                {editingFAQ ? 'Edit FAQ' : 'Add New FAQ'}
              </h2>
            </div>
            <form onSubmit={handleSubmit} className="p-6 space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">FAQ Type</label>
                <div className="grid grid-cols-3 gap-2">
                  <button
                    type="button"
                    onClick={() => setFormData({ ...formData, type: 'global' })}
                    className={`p-2 rounded-lg border text-sm font-medium ${
                      formData.type === 'global'
                        ? 'bg-primary text-white border-primary'
                        : 'bg-white text-gray-700 border-gray-300 hover:bg-gray-50'
                    }`}
                  >
                    Global
                  </button>
                  <button
                    type="button"
                    onClick={() => setFormData({ ...formData, type: 'service' })}
                    className={`p-2 rounded-lg border text-sm font-medium ${
                      formData.type === 'service'
                        ? 'bg-primary text-white border-primary'
                        : 'bg-white text-gray-700 border-gray-300 hover:bg-gray-50'
                    }`}
                  >
                    Service
                  </button>
                  <button
                    type="button"
                    onClick={() => setFormData({ ...formData, type: 'country' })}
                    className={`p-2 rounded-lg border text-sm font-medium ${
                      formData.type === 'country'
                        ? 'bg-primary text-white border-primary'
                        : 'bg-white text-gray-700 border-gray-300 hover:bg-gray-50'
                    }`}
                  >
                    Country
                  </button>
                </div>
              </div>

              {formData.type === 'service' && (
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Service</label>
                  <select
                    value={formData.serviceId || ''}
                    onChange={(e) => setFormData({ ...formData, serviceId: e.target.value })}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                    required
                  >
                    <option value="">Select Service</option>
                    {services.map(service => (
                      <option key={service.id} value={service.id}>
                        {service.name}
                      </option>
                    ))}
                  </select>
                </div>
              )}

              {formData.type === 'country' && (
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Country</label>
                  <select
                    value={formData.countryId || ''}
                    onChange={(e) => setFormData({ ...formData, countryId: e.target.value })}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                    required
                  >
                    <option value="">Select Country</option>
                    {countries.map(country => (
                      <option key={country.id} value={country.id}>
                        {country.flag} {country.name}
                      </option>
                    ))}
                  </select>
                </div>
              )}

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Question</label>
                <input
                  type="text"
                  value={formData.question}
                  onChange={(e) => setFormData({ ...formData, question: e.target.value })}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                  placeholder="Enter the question"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Answer</label>
                <textarea
                  value={formData.answer}
                  onChange={(e) => setFormData({ ...formData, answer: e.target.value })}
                  rows={4}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                  placeholder="Enter the answer"
                  required
                />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Category</label>
                  <select
                    value={formData.category}
                    onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                  >
                    {globalCategories.map(category => (
                      <option key={category.value} value={category.value}>
                        {category.label}
                      </option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Order</label>
                  <input
                    type="number"
                    value={formData.order}
                    onChange={(e) => setFormData({ ...formData, order: parseInt(e.target.value) || 0 })}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                    min="0"
                  />
                </div>
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
                  {editingFAQ ? 'Update' : 'Add'} FAQ
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};
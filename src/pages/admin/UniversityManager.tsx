import React, { useState, useEffect } from 'react';
import { Plus, Edit, Trash2, Search, Eye, EyeOff, MapPin, Calendar } from 'lucide-react';
import { getUniversities, addUniversity, updateUniversity, deleteUniversity } from '../../firebase/firestore';

interface University {
  id?: string;
  name: string;
  country: string;
  city: string;
  bannerImage: string;
  description: string;
  established: string;
  nmcApproved: boolean;
  whoApproved: boolean;
  ranking: string;
  studentCount: string;
  annualFee: string;
  totalCost: string;
  duration: string;
  neetRequired: boolean;
  ageLimit: string;
  subjectCriteria: string[];
  mediumOfInstruction: string[];
  accommodationType: string;
  foodOptions: string[];
  climate: string;
  admissionProcess: string[];
  highlights: string[];
  uniqueFeatures: string[];
  latitude?: number;
  longitude?: number;
  galleryImages: string[];
  videoUrl?: string;
  applyNowUrl: string;
  visible: boolean;
  createdAt?: any;
}

export const UniversityManager: React.FC = () => {
  const [universities, setUniversities] = useState<University[]>([]);
  const [loading, setLoading] = useState(true);
  const [showModal, setShowModal] = useState(false);
  const [editingUniversity, setEditingUniversity] = useState<University | null>(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [formData, setFormData] = useState<University>({
    name: '',
    country: '',
    city: '',
    bannerImage: '',
    description: '',
    established: '',
    nmcApproved: false,
    whoApproved: false,
    ranking: '',
    studentCount: '',
    annualFee: '',
    totalCost: '',
    duration: '6 Years',
    neetRequired: true,
    ageLimit: '17-25 years',
    subjectCriteria: [],
    mediumOfInstruction: [],
    accommodationType: '',
    foodOptions: [],
    climate: '',
    admissionProcess: [],
    highlights: [],
    uniqueFeatures: [],
    galleryImages: [],
    applyNowUrl: '',
    visible: true
  });

  useEffect(() => {
    fetchUniversities();
  }, []);

  const fetchUniversities = async () => {
    try {
      const fetchedUniversities = await getUniversities();
      setUniversities(fetchedUniversities);
    } catch (error) {
      console.error('Error fetching universities:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      if (editingUniversity) {
        await updateUniversity(editingUniversity.id!, formData);
      } else {
        await addUniversity(formData);
      }
      await fetchUniversities();
      resetForm();
    } catch (error) {
      console.error('Error saving university:', error);
    }
  };

  const handleDelete = async (id: string) => {
    if (window.confirm('Are you sure you want to delete this university?')) {
      try {
        await deleteUniversity(id);
        await fetchUniversities();
      } catch (error) {
        console.error('Error deleting university:', error);
      }
    }
  };

  const handleEdit = (university: University) => {
    setEditingUniversity(university);
    setFormData(university);
    setShowModal(true);
  };

  const resetForm = () => {
    setFormData({
      name: '',
      country: '',
      city: '',
      bannerImage: '',
      description: '',
      established: '',
      nmcApproved: false,
      whoApproved: false,
      ranking: '',
      studentCount: '',
      annualFee: '',
      totalCost: '',
      duration: '6 Years',
      neetRequired: true,
      ageLimit: '17-25 years',
      subjectCriteria: [],
      mediumOfInstruction: [],
      accommodationType: '',
      foodOptions: [],
      climate: '',
      admissionProcess: [],
      highlights: [],
      uniqueFeatures: [],
      galleryImages: [],
      applyNowUrl: '',
      visible: true
    });
    setEditingUniversity(null);
    setShowModal(false);
  };

  const filteredUniversities = universities.filter(university =>
    university.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    university.country.toLowerCase().includes(searchTerm.toLowerCase()) ||
    university.city.toLowerCase().includes(searchTerm.toLowerCase())
  );

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
          <h1 className="text-3xl font-bold text-gray-900">University Manager</h1>
          <p className="text-gray-600 mt-1">Manage university profiles and information</p>
        </div>
        <button
          onClick={() => setShowModal(true)}
          className="bg-primary text-white px-4 py-2 rounded-lg font-medium hover:bg-primary-light transition-colors flex items-center space-x-2"
        >
          <Plus className="w-4 h-4" />
          <span>Add University</span>
        </button>
      </div>

      {/* Search */}
      <div className="relative max-w-md">
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
        <input
          type="text"
          placeholder="Search universities..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent w-full"
        />
      </div>

      {/* Universities List */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-200">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50 border-b border-gray-200">
              <tr>
                <th className="text-left py-3 px-6 font-medium text-gray-900">University</th>
                <th className="text-left py-3 px-6 font-medium text-gray-900">Location</th>
                <th className="text-left py-3 px-6 font-medium text-gray-900">Established</th>
                <th className="text-left py-3 px-6 font-medium text-gray-900">Fee</th>
                <th className="text-left py-3 px-6 font-medium text-gray-900">Status</th>
                <th className="text-left py-3 px-6 font-medium text-gray-900">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {filteredUniversities.map((university) => (
                <tr key={university.id} className="hover:bg-gray-50">
                  <td className="py-4 px-6">
                    <div className="flex items-center space-x-3">
                      <img
                        src={university.bannerImage || 'https://via.placeholder.com/40x40'}
                        alt={university.name}
                        className="w-10 h-10 rounded-lg object-cover"
                      />
                      <div>
                        <p className="font-medium text-gray-900">{university.name}</p>
                        <p className="text-sm text-gray-500">{university.ranking}</p>
                      </div>
                    </div>
                  </td>
                  <td className="py-4 px-6">
                    <div className="flex items-center space-x-1">
                      <MapPin className="w-4 h-4 text-gray-400" />
                      <span className="text-gray-900">{university.city}, {university.country}</span>
                    </div>
                  </td>
                  <td className="py-4 px-6">
                    <div className="flex items-center space-x-1">
                      <Calendar className="w-4 h-4 text-gray-400" />
                      <span className="text-gray-900">{university.established}</span>
                    </div>
                  </td>
                  <td className="py-4 px-6">
                    <span className="font-semibold text-secondary">{university.annualFee}</span>
                  </td>
                  <td className="py-4 px-6">
                    <div className="space-y-1">
                      <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                        university.visible 
                          ? 'bg-green-100 text-green-800' 
                          : 'bg-gray-100 text-gray-800'
                      }`}>
                        {university.visible ? 'Visible' : 'Hidden'}
                      </span>
                      <div className="flex space-x-1">
                        {university.whoApproved && (
                          <span className="bg-blue-100 text-blue-800 px-1 py-0.5 rounded text-xs">WHO</span>
                        )}
                        {university.nmcApproved && (
                          <span className="bg-green-100 text-green-800 px-1 py-0.5 rounded text-xs">NMC</span>
                        )}
                      </div>
                    </div>
                  </td>
                  <td className="py-4 px-6">
                    <div className="flex items-center space-x-2">
                      <button
                        onClick={() => handleEdit(university)}
                        className="text-blue-600 hover:text-blue-800 p-1"
                      >
                        <Edit className="w-4 h-4" />
                      </button>
                      <button
                        onClick={() => handleDelete(university.id!)}
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
          <div className="bg-white rounded-xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
            <div className="p-6 border-b border-gray-200">
              <h2 className="text-xl font-semibold text-gray-900">
                {editingUniversity ? 'Edit University' : 'Add New University'}
              </h2>
            </div>
            <form onSubmit={handleSubmit} className="p-6 space-y-6">
              {/* Basic Information */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">University Name</label>
                  <input
                    type="text"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Country</label>
                  <select
                    value={formData.country}
                    onChange={(e) => setFormData({ ...formData, country: e.target.value })}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                    required
                  >
                    <option value="">Select Country</option>
                    <option value="Russia">Russia</option>
                    <option value="Georgia">Georgia</option>
                    <option value="Uzbekistan">Uzbekistan</option>
                    <option value="Kazakhstan">Kazakhstan</option>
                    <option value="Kyrgyzstan">Kyrgyzstan</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">City</label>
                  <input
                    type="text"
                    value={formData.city}
                    onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Established Year</label>
                  <input
                    type="text"
                    value={formData.established}
                    onChange={(e) => setFormData({ ...formData, established: e.target.value })}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                    required
                  />
                </div>
              </div>

              {/* Description */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Description</label>
                <textarea
                  value={formData.description}
                  onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                  rows={4}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                  required
                />
              </div>

              {/* Fees and Recognition */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Annual Fee</label>
                  <input
                    type="text"
                    value={formData.annualFee}
                    onChange={(e) => setFormData({ ...formData, annualFee: e.target.value })}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                    placeholder="$4,500"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Total Cost</label>
                  <input
                    type="text"
                    value={formData.totalCost}
                    onChange={(e) => setFormData({ ...formData, totalCost: e.target.value })}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                    placeholder="$27,000"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Ranking</label>
                  <input
                    type="text"
                    value={formData.ranking}
                    onChange={(e) => setFormData({ ...formData, ranking: e.target.value })}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                    placeholder="#1 in Russia"
                    required
                  />
                </div>
              </div>

              {/* Recognition Checkboxes */}
              <div className="flex space-x-6">
                <div className="flex items-center">
                  <input
                    type="checkbox"
                    id="whoApproved"
                    checked={formData.whoApproved}
                    onChange={(e) => setFormData({ ...formData, whoApproved: e.target.checked })}
                    className="mr-2"
                  />
                  <label htmlFor="whoApproved" className="text-sm font-medium text-gray-700">
                    WHO Approved
                  </label>
                </div>
                <div className="flex items-center">
                  <input
                    type="checkbox"
                    id="nmcApproved"
                    checked={formData.nmcApproved}
                    onChange={(e) => setFormData({ ...formData, nmcApproved: e.target.checked })}
                    className="mr-2"
                  />
                  <label htmlFor="nmcApproved" className="text-sm font-medium text-gray-700">
                    NMC Approved
                  </label>
                </div>
                <div className="flex items-center">
                  <input
                    type="checkbox"
                    id="visible"
                    checked={formData.visible}
                    onChange={(e) => setFormData({ ...formData, visible: e.target.checked })}
                    className="mr-2"
                  />
                  <label htmlFor="visible" className="text-sm font-medium text-gray-700">
                    Visible on Website
                  </label>
                </div>
              </div>

              {/* Apply Now URL */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Apply Now URL</label>
                <input
                  type="text"
                  value={formData.applyNowUrl}
                  onChange={(e) => setFormData({ ...formData, applyNowUrl: e.target.value })}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                  placeholder="/contact?university=university-name"
                  required
                />
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
                  {editingUniversity ? 'Update' : 'Create'} University
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};
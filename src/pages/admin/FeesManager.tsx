import React, { useState, useEffect } from 'react';
import { Plus, Edit, Trash2, Save, DollarSign } from 'lucide-react';
import { getFeesStructure, updateFeesStructure } from '../../firebase/firestore';

interface UniversityFee {
  id: string;
  universityName: string;
  annualFee: string;
  duration: string;
  totalFee: string;
  actionLabel?: string;
  actionUrl?: string;
}

interface CountryFees {
  [country: string]: UniversityFee[];
}

export const FeesManager: React.FC = () => {
  const [feesData, setFeesData] = useState<CountryFees>({});
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [activeCountry, setActiveCountry] = useState('russia');
  const [editingId, setEditingId] = useState<string | null>(null);
  const [showAddForm, setShowAddForm] = useState(false);
  const [newEntry, setNewEntry] = useState<Omit<UniversityFee, 'id'>>({
    universityName: '',
    annualFee: '',
    duration: '6 Years',
    totalFee: '',
    actionLabel: 'Apply Now',
    actionUrl: '/contact'
  });

  const countries = [
    { id: 'russia', name: 'Russia', flag: '🇷🇺' },
    { id: 'georgia', name: 'Georgia', flag: '🇬🇪' },
    { id: 'uzbekistan', name: 'Uzbekistan', flag: '🇺🇿' },
    { id: 'kazakhstan', name: 'Kazakhstan', flag: '🇰🇿' },
    { id: 'kyrgyzstan', name: 'Kyrgyzstan', flag: '🇰🇬' }
  ];

  useEffect(() => {
    fetchFeesData();
  }, []);

  const fetchFeesData = async () => {
    try {
      const data = await getFeesStructure();
      if (data) {
        setFeesData(data);
      } else {
        // Initialize with empty data for each country
        const initialData: CountryFees = {};
        countries.forEach(country => {
          initialData[country.id] = [];
        });
        setFeesData(initialData);
      }
    } catch (error) {
      console.error('Error fetching fees data:', error);
    } finally {
      setLoading(false);
    }
  };

  const saveFeesData = async () => {
    setSaving(true);
    try {
      await updateFeesStructure(feesData);
      alert('Fees structure updated successfully!');
    } catch (error) {
      console.error('Error saving fees data:', error);
      alert('Error saving fees structure. Please try again.');
    } finally {
      setSaving(false);
    }
  };

  const addUniversity = () => {
    if (!newEntry.universityName || !newEntry.annualFee) {
      alert('Please fill in required fields');
      return;
    }

    const id = Date.now().toString();
    const updatedData = { ...feesData };
    
    if (!updatedData[activeCountry]) {
      updatedData[activeCountry] = [];
    }
    
    updatedData[activeCountry].push({ ...newEntry, id });
    setFeesData(updatedData);
    
    setNewEntry({
      universityName: '',
      annualFee: '',
      duration: '6 Years',
      totalFee: '',
      actionLabel: 'Apply Now',
      actionUrl: '/contact'
    });
    setShowAddForm(false);
  };

  const updateUniversity = (id: string, field: keyof UniversityFee, value: string) => {
    const updatedData = { ...feesData };
    const universityIndex = updatedData[activeCountry].findIndex(u => u.id === id);
    
    if (universityIndex !== -1) {
      updatedData[activeCountry][universityIndex] = {
        ...updatedData[activeCountry][universityIndex],
        [field]: value
      };
      setFeesData(updatedData);
    }
  };

  const deleteUniversity = (id: string) => {
    if (window.confirm('Are you sure you want to delete this university?')) {
      const updatedData = { ...feesData };
      updatedData[activeCountry] = updatedData[activeCountry].filter(u => u.id !== id);
      setFeesData(updatedData);
    }
  };

  const calculateTotalFee = (annualFee: string, duration: string) => {
    const annual = parseFloat(annualFee.replace(/[^0-9.]/g, ''));
    const years = parseFloat(duration.replace(/[^0-9.]/g, ''));
    
    if (annual && years) {
      return `$${(annual * years).toLocaleString()}`;
    }
    return '';
  };

  const currentCountryData = feesData[activeCountry] || [];

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
          <h1 className="text-3xl font-bold text-gray-900">Fees Structure Manager</h1>
          <p className="text-gray-600 mt-1">Manage university fees for different countries</p>
        </div>
        <button
          onClick={saveFeesData}
          disabled={saving}
          className="bg-primary text-white px-6 py-2 rounded-lg font-medium hover:bg-primary-light transition-colors disabled:opacity-50 flex items-center space-x-2"
        >
          <Save className="w-4 h-4" />
          <span>{saving ? 'Saving...' : 'Save Changes'}</span>
        </button>
      </div>

      {/* Country Tabs */}
      <div className="border-b border-gray-200">
        <nav className="-mb-px flex space-x-8">
          {countries.map((country) => (
            <button
              key={country.id}
              onClick={() => setActiveCountry(country.id)}
              className={`py-2 px-1 border-b-2 font-medium text-sm flex items-center space-x-2 ${
                activeCountry === country.id
                  ? 'border-primary text-primary'
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
              }`}
            >
              <span className="text-lg">{country.flag}</span>
              <span>{country.name}</span>
              <span className="bg-gray-100 text-gray-600 px-2 py-1 rounded-full text-xs">
                {currentCountryData.length}
              </span>
            </button>
          ))}
        </nav>
      </div>

      {/* Add University Button */}
      <div className="flex justify-between items-center">
        <h2 className="text-xl font-semibold text-gray-900">
          {countries.find(c => c.id === activeCountry)?.name} Universities
        </h2>
        <button
          onClick={() => setShowAddForm(true)}
          className="bg-secondary text-white px-4 py-2 rounded-lg font-medium hover:bg-opacity-90 transition-colors flex items-center space-x-2"
        >
          <Plus className="w-4 h-4" />
          <span>Add University</span>
        </button>
      </div>

      {/* Add Form */}
      {showAddForm && (
        <div className="bg-white border border-gray-200 rounded-lg p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Add New University</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">University Name *</label>
              <input
                type="text"
                value={newEntry.universityName}
                onChange={(e) => setNewEntry({ ...newEntry, universityName: e.target.value })}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                placeholder="Enter university name"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Annual Fee (USD) *</label>
              <input
                type="text"
                value={newEntry.annualFee}
                onChange={(e) => {
                  const value = e.target.value;
                  setNewEntry({ 
                    ...newEntry, 
                    annualFee: value,
                    totalFee: calculateTotalFee(value, newEntry.duration)
                  });
                }}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                placeholder="$4,500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Duration</label>
              <select
                value={newEntry.duration}
                onChange={(e) => {
                  const value = e.target.value;
                  setNewEntry({ 
                    ...newEntry, 
                    duration: value,
                    totalFee: calculateTotalFee(newEntry.annualFee, value)
                  });
                }}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
              >
                <option value="6 Years">6 Years</option>
                <option value="5 Years">5 Years</option>
                <option value="7 Years">7 Years</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Total Fee (Auto-calculated)</label>
              <input
                type="text"
                value={newEntry.totalFee}
                readOnly
                className="w-full px-3 py-2 border border-gray-300 rounded-lg bg-gray-50"
                placeholder="Auto-calculated"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Action Button Label</label>
              <input
                type="text"
                value={newEntry.actionLabel}
                onChange={(e) => setNewEntry({ ...newEntry, actionLabel: e.target.value })}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                placeholder="Apply Now"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Action URL</label>
              <input
                type="text"
                value={newEntry.actionUrl}
                onChange={(e) => setNewEntry({ ...newEntry, actionUrl: e.target.value })}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                placeholder="/contact"
              />
            </div>
          </div>
          <div className="flex justify-end space-x-3 mt-4">
            <button
              onClick={() => setShowAddForm(false)}
              className="px-4 py-2 text-gray-700 border border-gray-300 rounded-lg hover:bg-gray-50"
            >
              Cancel
            </button>
            <button
              onClick={addUniversity}
              className="px-4 py-2 bg-primary text-white rounded-lg hover:bg-primary-light"
            >
              Add University
            </button>
          </div>
        </div>
      )}

      {/* Universities Table */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
        {currentCountryData.length === 0 ? (
          <div className="text-center py-12">
            <DollarSign className="w-16 h-16 text-gray-300 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-gray-600 mb-2">No universities added</h3>
            <p className="text-gray-500">Add your first university to get started</p>
          </div>
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-50 border-b border-gray-200">
                <tr>
                  <th className="text-left py-3 px-6 font-medium text-gray-900">University Name</th>
                  <th className="text-left py-3 px-6 font-medium text-gray-900">Annual Fee</th>
                  <th className="text-left py-3 px-6 font-medium text-gray-900">Duration</th>
                  <th className="text-left py-3 px-6 font-medium text-gray-900">Total Fee</th>
                  <th className="text-left py-3 px-6 font-medium text-gray-900">Action Button</th>
                  <th className="text-left py-3 px-6 font-medium text-gray-900">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {currentCountryData.map((university) => (
                  <tr key={university.id} className="hover:bg-gray-50">
                    <td className="py-4 px-6">
                      {editingId === university.id ? (
                        <input
                          type="text"
                          value={university.universityName}
                          onChange={(e) => updateUniversity(university.id, 'universityName', e.target.value)}
                          className="w-full px-2 py-1 border border-gray-300 rounded"
                        />
                      ) : (
                        <span className="font-medium text-gray-900">{university.universityName}</span>
                      )}
                    </td>
                    <td className="py-4 px-6">
                      {editingId === university.id ? (
                        <input
                          type="text"
                          value={university.annualFee}
                          onChange={(e) => {
                            const value = e.target.value;
                            updateUniversity(university.id, 'annualFee', value);
                            updateUniversity(university.id, 'totalFee', calculateTotalFee(value, university.duration));
                          }}
                          className="w-full px-2 py-1 border border-gray-300 rounded"
                        />
                      ) : (
                        <span className="text-secondary font-semibold">{university.annualFee}</span>
                      )}
                    </td>
                    <td className="py-4 px-6">
                      {editingId === university.id ? (
                        <select
                          value={university.duration}
                          onChange={(e) => {
                            const value = e.target.value;
                            updateUniversity(university.id, 'duration', value);
                            updateUniversity(university.id, 'totalFee', calculateTotalFee(university.annualFee, value));
                          }}
                          className="w-full px-2 py-1 border border-gray-300 rounded"
                        >
                          <option value="6 Years">6 Years</option>
                          <option value="5 Years">5 Years</option>
                          <option value="7 Years">7 Years</option>
                        </select>
                      ) : (
                        <span className="text-gray-600">{university.duration}</span>
                      )}
                    </td>
                    <td className="py-4 px-6">
                      <span className="text-primary font-semibold">{university.totalFee}</span>
                    </td>
                    <td className="py-4 px-6">
                      {editingId === university.id ? (
                        <div className="space-y-1">
                          <input
                            type="text"
                            value={university.actionLabel || ''}
                            onChange={(e) => updateUniversity(university.id, 'actionLabel', e.target.value)}
                            className="w-full px-2 py-1 border border-gray-300 rounded text-sm"
                            placeholder="Button text"
                          />
                          <input
                            type="text"
                            value={university.actionUrl || ''}
                            onChange={(e) => updateUniversity(university.id, 'actionUrl', e.target.value)}
                            className="w-full px-2 py-1 border border-gray-300 rounded text-sm"
                            placeholder="URL"
                          />
                        </div>
                      ) : (
                        <div className="text-sm">
                          <div className="font-medium">{university.actionLabel || 'Apply Now'}</div>
                          <div className="text-gray-500">{university.actionUrl || '/contact'}</div>
                        </div>
                      )}
                    </td>
                    <td className="py-4 px-6">
                      <div className="flex items-center space-x-2">
                        {editingId === university.id ? (
                          <button
                            onClick={() => setEditingId(null)}
                            className="text-green-600 hover:text-green-800 p-1"
                          >
                            <Save className="w-4 h-4" />
                          </button>
                        ) : (
                          <button
                            onClick={() => setEditingId(university.id)}
                            className="text-blue-600 hover:text-blue-800 p-1"
                          >
                            <Edit className="w-4 h-4" />
                          </button>
                        )}
                        <button
                          onClick={() => deleteUniversity(university.id)}
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
        )}
      </div>
    </div>
  );
};
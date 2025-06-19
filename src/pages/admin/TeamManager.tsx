import React, { useState, useEffect } from 'react';
import { Plus, Edit, Trash2, Save, Eye, EyeOff, GripVertical } from 'lucide-react';
import { getTeamMembers, updateTeamMembers } from '../../firebase/firestore';

interface TeamMember {
  id: string;
  name: string;
  designation: string;
  description: string;
  image: string;
  order: number;
  visible: boolean;
}

export const TeamManager: React.FC = () => {
  const [teamMembers, setTeamMembers] = useState<TeamMember[]>([]);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [editingMember, setEditingMember] = useState<TeamMember | null>(null);
  const [formData, setFormData] = useState<Omit<TeamMember, 'id' | 'order'>>({
    name: '',
    designation: '',
    description: '',
    image: '',
    visible: true
  });

  useEffect(() => {
    fetchTeamMembers();
  }, []);

  const fetchTeamMembers = async () => {
    try {
      const data = await getTeamMembers();
      if (data && Array.isArray(data)) {
        setTeamMembers(data.sort((a, b) => a.order - b.order));
      } else {
        // Initialize with default team members if no data exists
        const defaultMembers: TeamMember[] = [
          {
            id: '1',
            name: 'Dr. Pavan Rathod',
            designation: 'Founder & CEO',
            description: 'Former medical college dean with 20+ years in medical education',
            image: '/pavan.png',
            order: 1,
            visible: true
          },
          {
            id: '2',
            name: 'Dr. Abhishek Rathod',
            designation: 'Head of Counseling',
            description: 'Educational psychologist specializing in career guidance',
            image: '/abhi.png',
            order: 2,
            visible: true
          }
        ];
        setTeamMembers(defaultMembers);
        await updateTeamMembers(defaultMembers);
      }
    } catch (error) {
      console.error('Error fetching team members:', error);
    } finally {
      setLoading(false);
    }
  };

  const saveTeamMembers = async () => {
    setSaving(true);
    try {
      await updateTeamMembers(teamMembers);
      alert('Team members updated successfully!');
    } catch (error) {
      console.error('Error saving team members:', error);
      alert('Error saving team members. Please try again.');
    } finally {
      setSaving(false);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (editingMember) {
      // Update existing member
      const updatedMembers = teamMembers.map(member =>
        member.id === editingMember.id
          ? { ...member, ...formData }
          : member
      );
      setTeamMembers(updatedMembers);
    } else {
      // Add new member
      const newMember: TeamMember = {
        ...formData,
        id: Date.now().toString(),
        order: teamMembers.length + 1
      };
      setTeamMembers([...teamMembers, newMember]);
    }
    
    resetForm();
  };

  const handleEdit = (member: TeamMember) => {
    setEditingMember(member);
    setFormData({
      name: member.name,
      designation: member.designation,
      description: member.description,
      image: member.image,
      visible: member.visible
    });
    setShowModal(true);
  };

  const handleDelete = (id: string) => {
    if (window.confirm('Are you sure you want to delete this team member?')) {
      const updatedMembers = teamMembers
        .filter(member => member.id !== id)
        .map((member, index) => ({ ...member, order: index + 1 }));
      setTeamMembers(updatedMembers);
    }
  };

  const toggleVisibility = (id: string) => {
    const updatedMembers = teamMembers.map(member =>
      member.id === id
        ? { ...member, visible: !member.visible }
        : member
    );
    setTeamMembers(updatedMembers);
  };

  const moveUp = (id: string) => {
    const index = teamMembers.findIndex(member => member.id === id);
    if (index > 0) {
      const newMembers = [...teamMembers];
      [newMembers[index], newMembers[index - 1]] = [newMembers[index - 1], newMembers[index]];
      // Update order values
      newMembers.forEach((member, idx) => {
        member.order = idx + 1;
      });
      setTeamMembers(newMembers);
    }
  };

  const moveDown = (id: string) => {
    const index = teamMembers.findIndex(member => member.id === id);
    if (index < teamMembers.length - 1) {
      const newMembers = [...teamMembers];
      [newMembers[index], newMembers[index + 1]] = [newMembers[index + 1], newMembers[index]];
      // Update order values
      newMembers.forEach((member, idx) => {
        member.order = idx + 1;
      });
      setTeamMembers(newMembers);
    }
  };

  const resetForm = () => {
    setFormData({
      name: '',
      designation: '',
      description: '',
      image: '',
      visible: true
    });
    setEditingMember(null);
    setShowModal(false);
  };

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
          <h1 className="text-3xl font-bold text-gray-900">Team Manager</h1>
          <p className="text-gray-600 mt-1">Manage team members displayed on the About page</p>
        </div>
        <div className="flex space-x-3">
          <button
            onClick={() => setShowModal(true)}
            className="bg-secondary text-white px-4 py-2 rounded-lg font-medium hover:bg-opacity-90 transition-colors flex items-center space-x-2"
          >
            <Plus className="w-4 h-4" />
            <span>Add Member</span>
          </button>
          <button
            onClick={saveTeamMembers}
            disabled={saving}
            className="bg-primary text-white px-6 py-2 rounded-lg font-medium hover:bg-primary-light transition-colors disabled:opacity-50 flex items-center space-x-2"
          >
            <Save className="w-4 h-4" />
            <span>{saving ? 'Saving...' : 'Save Changes'}</span>
          </button>
        </div>
      </div>

      {/* Team Members List */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-200">
        {teamMembers.length === 0 ? (
          <div className="text-center py-12">
            <h3 className="text-xl font-semibold text-gray-600 mb-2">No team members added</h3>
            <p className="text-gray-500">Add your first team member to get started</p>
          </div>
        ) : (
          <div className="divide-y divide-gray-200">
            {teamMembers.map((member, index) => (
              <div key={member.id} className="p-6 hover:bg-gray-50 transition-colors">
                <div className="flex items-center space-x-4">
                  {/* Drag Handle */}
                  <div className="flex flex-col space-y-1">
                    <button
                      onClick={() => moveUp(member.id)}
                      disabled={index === 0}
                      className="text-gray-400 hover:text-gray-600 disabled:opacity-30 disabled:cursor-not-allowed"
                    >
                      ↑
                    </button>
                    <GripVertical className="w-4 h-4 text-gray-400" />
                    <button
                      onClick={() => moveDown(member.id)}
                      disabled={index === teamMembers.length - 1}
                      className="text-gray-400 hover:text-gray-600 disabled:opacity-30 disabled:cursor-not-allowed"
                    >
                      ↓
                    </button>
                  </div>

                  {/* Member Image */}
                  <div className="relative">
                    <img
                      src={member.image || 'https://via.placeholder.com/80x80'}
                      alt={member.name}
                      className="w-20 h-20 rounded-lg object-cover"
                    />
                    {!member.visible && (
                      <div className="absolute inset-0 bg-black bg-opacity-50 rounded-lg flex items-center justify-center">
                        <EyeOff className="w-6 h-6 text-white" />
                      </div>
                    )}
                  </div>

                  {/* Member Info */}
                  <div className="flex-1">
                    <div className="flex items-center space-x-2 mb-1">
                      <h3 className="text-lg font-semibold text-gray-900">{member.name}</h3>
                      <span className="text-sm text-gray-500">#{member.order}</span>
                    </div>
                    <p className="text-secondary font-medium mb-2">{member.designation}</p>
                    <p className="text-gray-600 text-sm">{member.description}</p>
                  </div>

                  {/* Actions */}
                  <div className="flex items-center space-x-2">
                    <button
                      onClick={() => toggleVisibility(member.id)}
                      className={`p-2 rounded-lg transition-colors ${
                        member.visible
                          ? 'text-green-600 hover:bg-green-50'
                          : 'text-gray-400 hover:bg-gray-50'
                      }`}
                      title={member.visible ? 'Hide member' : 'Show member'}
                    >
                      {member.visible ? <Eye className="w-4 h-4" /> : <EyeOff className="w-4 h-4" />}
                    </button>
                    <button
                      onClick={() => handleEdit(member)}
                      className="text-blue-600 hover:text-blue-800 p-2 hover:bg-blue-50 rounded-lg transition-colors"
                    >
                      <Edit className="w-4 h-4" />
                    </button>
                    <button
                      onClick={() => handleDelete(member.id)}
                      className="text-red-600 hover:text-red-800 p-2 hover:bg-red-50 rounded-lg transition-colors"
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

      {/* Preview Section */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
        <h2 className="text-xl font-semibold text-gray-900 mb-4">Preview</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {teamMembers.filter(member => member.visible).map((member) => (
            <div key={member.id} className="text-center">
              <img
                src={member.image || 'https://via.placeholder.com/150x150'}
                alt={member.name}
                className="w-32 h-32 rounded-full object-cover mx-auto mb-4"
              />
              <h3 className="text-lg font-semibold text-primary mb-1">{member.name}</h3>
              <p className="text-secondary font-medium mb-2">{member.designation}</p>
              <p className="text-gray-600 text-sm">{member.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-xl max-w-md w-full">
            <div className="p-6 border-b border-gray-200">
              <h2 className="text-xl font-semibold text-gray-900">
                {editingMember ? 'Edit Team Member' : 'Add Team Member'}
              </h2>
            </div>
            <form onSubmit={handleSubmit} className="p-6 space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Name</label>
                <input
                  type="text"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Designation</label>
                <input
                  type="text"
                  value={formData.designation}
                  onChange={(e) => setFormData({ ...formData, designation: e.target.value })}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Description</label>
                <textarea
                  value={formData.description}
                  onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                  rows={3}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                  required
                />
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
              {formData.image && (
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Preview</label>
                  <img
                    src={formData.image}
                    alt="Preview"
                    className="w-20 h-20 rounded-lg object-cover border border-gray-300"
                    onError={(e) => {
                      e.currentTarget.style.display = 'none';
                    }}
                  />
                </div>
              )}
              <div className="flex items-center">
                <input
                  type="checkbox"
                  id="visible"
                  checked={formData.visible}
                  onChange={(e) => setFormData({ ...formData, visible: e.target.checked })}
                  className="mr-2"
                />
                <label htmlFor="visible" className="text-sm font-medium text-gray-700">
                  Visible on website
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
                  {editingMember ? 'Update' : 'Add'} Member
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};
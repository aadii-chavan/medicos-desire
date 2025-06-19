import React, { useState } from 'react';
import { Save, User, Shield, Database, Globe, Eye, EyeOff } from 'lucide-react';
import { updatePassword, reauthenticateWithCredential, EmailAuthProvider, createUserWithEmailAndPassword, sendPasswordResetEmail, signInWithEmailAndPassword } from 'firebase/auth';
import { auth, db } from '../../firebase/config';
import { collection, getDocs, setDoc, doc, query, where } from 'firebase/firestore';
import { useAuth } from '../../contexts/AuthContext';

export const Settings: React.FC = () => {
  const [settings, setSettings] = useState({
    siteName: 'Medicos Desire',
    siteDescription: 'Your trusted partner for MBBS admissions in India & abroad',
    adminEmail: 'admin@medicosdesire.in',
    maintenanceMode: false,
    allowRegistration: true,
    emailNotifications: true,
    backupFrequency: 'daily'
  });
  const [saving, setSaving] = useState(false);
  const [message, setMessage] = useState('');
  const { currentUser } = useAuth();

  // Change Password State
  const [currentPassword, setCurrentPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showCurrent, setShowCurrent] = useState(false);
  const [showNew, setShowNew] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);
  const [changePassMsg, setChangePassMsg] = useState('');
  const [changingPass, setChangingPass] = useState(false);

  // Admin Management State
  const [adminEmail, setAdminEmail] = useState('');
  const [adminPassword, setAdminPassword] = useState('');
  const [adminMsg, setAdminMsg] = useState('');
  const [creatingAdmin, setCreatingAdmin] = useState(false);
  const [admins, setAdmins] = useState<any[]>([]);
  const [loadingAdmins, setLoadingAdmins] = useState(false);
  // For workaround: store current admin's email and password
  const [adminOwnPassword, setAdminOwnPassword] = useState('');
  const [showAdminOwnPassword, setShowAdminOwnPassword] = useState(false);

  // Fetch all admins
  React.useEffect(() => {
    const fetchAdmins = async () => {
      setLoadingAdmins(true);
      const q = query(collection(db, 'users'), where('role', '==', 'admin'));
      const snapshot = await getDocs(q);
      setAdmins(snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() })));
      setLoadingAdmins(false);
    };
    fetchAdmins();
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSaving(true);
    setMessage('');

    try {
      // Simulate saving settings
      await new Promise(resolve => setTimeout(resolve, 1000));
      setMessage('Settings saved successfully!');
    } catch (error) {
      setMessage('Error saving settings. Please try again.');
    } finally {
      setSaving(false);
    }
  };

  const handleChange = (field: string, value: any) => {
    setSettings(prev => ({ ...prev, [field]: value }));
  };

  // Change Password Handler
  const handleChangePassword = async (e: React.FormEvent) => {
    e.preventDefault();
    setChangingPass(true);
    setChangePassMsg('');
    if (newPassword !== confirmPassword) {
      setChangePassMsg('New passwords do not match.');
      setChangingPass(false);
      return;
    }
    try {
      if (!currentUser?.email) throw new Error('No user.');
      const cred = EmailAuthProvider.credential(currentUser.email, currentPassword);
      await reauthenticateWithCredential(currentUser, cred);
      await updatePassword(currentUser, newPassword);
      setChangePassMsg('Password changed successfully!');
      setCurrentPassword('');
      setNewPassword('');
      setConfirmPassword('');
    } catch (err: any) {
      setChangePassMsg(err.message || 'Failed to change password.');
    } finally {
      setChangingPass(false);
    }
  };

  // Create Admin Handler (client-side workaround)
  const handleCreateAdmin = async (e: React.FormEvent) => {
    e.preventDefault();
    setCreatingAdmin(true);
    setAdminMsg('');
    try {
      if (!currentUser?.email) throw new Error('No admin session.');
      if (!adminOwnPassword) throw new Error('Please enter your password to confirm.');
      // Store original admin credentials
      const originalEmail = currentUser.email;
      const originalPassword = adminOwnPassword;
      // Create user in Firebase Auth (this will sign in as the new user)
      const userCredential = await createUserWithEmailAndPassword(auth, adminEmail, adminPassword);
      const newUid = userCredential.user.uid;
      // Immediately sign back in as the original admin
      await signInWithEmailAndPassword(auth, originalEmail, originalPassword);
      // Now write the new admin's Firestore document
      await setDoc(doc(db, 'users', newUid), {
        email: adminEmail,
        role: 'admin',
        createdAt: new Date(),
      });
      setAdminMsg('Admin account created successfully!');
      setAdminEmail('');
      setAdminPassword('');
      setAdminOwnPassword('');
    } catch (err: any) {
      setAdminMsg(err.message || 'Failed to create admin.');
    } finally {
      setCreatingAdmin(false);
    }
  };

  // Send password reset email to admin
  const handleResetAdminPassword = async (email: string) => {
    try {
      await sendPasswordResetEmail(auth, email);
      alert('Password reset email sent to ' + email);
    } catch (err: any) {
      alert('Failed to send reset email: ' + (err.message || 'Unknown error'));
    }
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold text-gray-900">Settings</h1>
        <p className="text-gray-600 mt-1">Manage system settings and configurations</p>
      </div>

      {/* Success/Error Message */}
      {message && (
        <div className={`p-4 rounded-lg ${
          message.includes('successfully') 
            ? 'bg-green-50 border border-green-200 text-green-700' 
            : 'bg-red-50 border border-red-200 text-red-700'
        }`}>
          {message}
        </div>
      )}

      {/* Admin Settings (email only, read-only) */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-200">
        <div className="p-6 border-b border-gray-200">
          <div className="flex items-center space-x-2">
            <User className="w-5 h-5 text-primary" />
            <h2 className="text-lg font-semibold text-gray-900">Admin Settings</h2>
          </div>
        </div>
        <div className="p-6 space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Admin Email</label>
            <input
              type="email"
              value={currentUser?.email || ''}
              readOnly
              className="w-full px-3 py-2 border border-gray-300 rounded-lg bg-gray-100 focus:ring-2 focus:ring-primary focus:border-transparent cursor-not-allowed"
            />
          </div>
        </div>
      </div>

      {/* Change Password Section */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-200">
        <div className="p-6 border-b border-gray-200">
          <div className="flex items-center space-x-2">
            <Shield className="w-5 h-5 text-primary" />
            <h2 className="text-lg font-semibold text-gray-900">Change Password</h2>
          </div>
        </div>
        <form onSubmit={handleChangePassword} className="p-6 space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Current Password</label>
            <div className="relative">
              <input
                type={showCurrent ? 'text' : 'password'}
                value={currentPassword}
                onChange={e => setCurrentPassword(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent pr-12"
                required
              />
              <button
                type="button"
                onClick={() => setShowCurrent((v) => !v)}
                className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
                tabIndex={-1}
              >
                {showCurrent ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
              </button>
            </div>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">New Password</label>
            <div className="relative">
              <input
                type={showNew ? 'text' : 'password'}
                value={newPassword}
                onChange={e => setNewPassword(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent pr-12"
                required
              />
              <button
                type="button"
                onClick={() => setShowNew((v) => !v)}
                className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
                tabIndex={-1}
              >
                {showNew ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
              </button>
            </div>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Confirm New Password</label>
            <div className="relative">
              <input
                type={showConfirm ? 'text' : 'password'}
                value={confirmPassword}
                onChange={e => setConfirmPassword(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent pr-12"
                required
              />
              <button
                type="button"
                onClick={() => setShowConfirm((v) => !v)}
                className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
                tabIndex={-1}
              >
                {showConfirm ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
              </button>
            </div>
          </div>
          {changePassMsg && (
            <div className={`p-2 rounded ${changePassMsg.includes('success') ? 'bg-green-50 text-green-700' : 'bg-red-50 text-red-700'}`}>{changePassMsg}</div>
          )}
          <button
            type="submit"
            disabled={changingPass}
            className="bg-primary text-white px-6 py-2 rounded-lg font-medium hover:bg-primary-light transition-colors disabled:opacity-50"
          >
            {changingPass ? 'Changing...' : 'Change Password'}
          </button>
        </form>
      </div>

      {/* Submit Button */}
      <div className="flex justify-end">
        <button
          type="submit"
          disabled={saving}
          className="bg-primary text-white px-6 py-2 rounded-lg font-medium hover:bg-primary-light transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center space-x-2"
        >
          <Save className="w-4 h-4" />
          <span>{saving ? 'Saving...' : 'Save Settings'}</span>
        </button>
      </div>
    </div>
  );
};
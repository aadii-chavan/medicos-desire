export interface UserData {
  uid: string;
  email: string;
  role: 'admin' | 'user';
  displayName?: string;
  createdAt: Date;
  lastLogin?: Date;
} 
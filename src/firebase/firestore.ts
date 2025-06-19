import { 
  collection, 
  doc, 
  getDocs, 
  addDoc, 
  updateDoc, 
  deleteDoc, 
  getDoc,
  query,
  orderBy,
  Timestamp,
  setDoc,
  where,
  limit
} from 'firebase/firestore';
import { db } from './config';

// Blog Posts
export const getBlogPosts = async () => {
  const q = query(collection(db, 'blogPosts'), orderBy('createdAt', 'desc'));
  const querySnapshot = await getDocs(q);
  return querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
};

export const addBlogPost = async (post: any) => {
  return await addDoc(collection(db, 'blogPosts'), {
    ...post,
    createdAt: Timestamp.now(),
    updatedAt: Timestamp.now()
  });
};

export const updateBlogPost = async (id: string, post: any) => {
  const docRef = doc(db, 'blogPosts', id);
  return await updateDoc(docRef, {
    ...post,
    updatedAt: Timestamp.now()
  });
};

export const deleteBlogPost = async (id: string) => {
  return await deleteDoc(doc(db, 'blogPosts', id));
};

// Videos
export const getVideos = async () => {
  const q = query(collection(db, 'videos'), orderBy('createdAt', 'desc'));
  const querySnapshot = await getDocs(q);
  return querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
};

export const addVideo = async (video: any) => {
  return await addDoc(collection(db, 'videos'), {
    ...video,
    createdAt: Timestamp.now()
  });
};

export const deleteVideo = async (id: string) => {
  return await deleteDoc(doc(db, 'videos', id));
};

// Gallery
export const getGalleryImages = async () => {
  const q = query(collection(db, 'gallery'), orderBy('createdAt', 'desc'));
  const querySnapshot = await getDocs(q);
  return querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
};

export const addGalleryImage = async (image: any) => {
  return await addDoc(collection(db, 'gallery'), {
    ...image,
    createdAt: Timestamp.now()
  });
};

export const deleteGalleryImage = async (id: string) => {
  return await deleteDoc(doc(db, 'gallery', id));
};

// Contact Info
export const getContactInfo = async () => {
  const docRef = doc(db, 'settings', 'contact');
  const docSnap = await getDoc(docRef);
  return docSnap.exists() ? docSnap.data() : null;
};

export const updateContactInfo = async (contactInfo: any) => {
  const docRef = doc(db, 'settings', 'contact');
  return await updateDoc(docRef, contactInfo);
};

// FAQs
export const getFAQs = async () => {
  const q = query(collection(db, 'faqs'), orderBy('order', 'asc'));
  const querySnapshot = await getDocs(q);
  return querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
};

export const addFAQ = async (faq: any) => {
  return await addDoc(collection(db, 'faqs'), faq);
};

export const updateFAQ = async (id: string, faq: any) => {
  const docRef = doc(db, 'faqs', id);
  return await updateDoc(docRef, faq);
};

export const deleteFAQ = async (id: string) => {
  return await deleteDoc(doc(db, 'faqs', id));
};

// Notifications
export const getNotifications = async () => {
  const q = query(collection(db, 'notifications'), orderBy('createdAt', 'desc'));
  const querySnapshot = await getDocs(q);
  return querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
};

export const addNotification = async (notification: any) => {
  return await addDoc(collection(db, 'notifications'), {
    ...notification,
    createdAt: Timestamp.now()
  });
};

export const deleteNotification = async (id: string) => {
  return await deleteDoc(doc(db, 'notifications', id));
};

// Useful Links
export const getUsefulLinks = async () => {
  const q = query(collection(db, 'usefulLinks'), orderBy('order', 'asc'));
  const querySnapshot = await getDocs(q);
  return querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
};

export const addUsefulLink = async (link: any) => {
  return await addDoc(collection(db, 'usefulLinks'), link);
};

export const updateUsefulLink = async (id: string, link: any) => {
  const docRef = doc(db, 'usefulLinks', id);
  return await updateDoc(docRef, link);
};

export const deleteUsefulLink = async (id: string) => {
  return await deleteDoc(doc(db, 'usefulLinks', id));
};

// Fees Structure
export const getFeesStructure = async () => {
  const docRef = doc(db, 'settings', 'feesStructure');
  const docSnap = await getDoc(docRef);
  return docSnap.exists() ? docSnap.data() : null;
};

export const updateFeesStructure = async (feesData: any) => {
  const docRef = doc(db, 'settings', 'feesStructure');
  return await setDoc(docRef, feesData, { merge: true });
};

// Team Members
export const getTeamMembers = async () => {
  const docRef = doc(db, 'settings', 'teamMembers');
  const docSnap = await getDoc(docRef);
  return docSnap.exists() ? docSnap.data().members : null;
};

export const updateTeamMembers = async (members: any[]) => {
  const docRef = doc(db, 'settings', 'teamMembers');
  return await setDoc(docRef, { members }, { merge: true });
};

// Universities
export const getUniversities = async () => {
  const q = query(collection(db, 'universities'), orderBy('name', 'asc'));
  const querySnapshot = await getDocs(q);
  return querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
};

export const getUniversityById = async (id: string) => {
  const docRef = doc(db, 'universities', id);
  const docSnap = await getDoc(docRef);
  return docSnap.exists() ? { id: docSnap.id, ...docSnap.data() } : null;
};

export const addUniversity = async (university: any) => {
  return await addDoc(collection(db, 'universities'), {
    ...university,
    createdAt: Timestamp.now(),
    updatedAt: Timestamp.now()
  });
};

export const updateUniversity = async (id: string, university: any) => {
  const docRef = doc(db, 'universities', id);
  return await updateDoc(docRef, {
    ...university,
    updatedAt: Timestamp.now()
  });
};

export const deleteUniversity = async (id: string) => {
  return await deleteDoc(doc(db, 'universities', id));
};

export const getUniversitiesByCountry = async (country: string) => {
  const q = query(
    collection(db, 'universities'), 
    where('country', '==', country),
    where('visible', '==', true),
    orderBy('name', 'asc')
  );
  const querySnapshot = await getDocs(q);
  return querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
};

// Contact Messages
export const getRecentMessages = async () => {
  const q = query(collection(db, 'messages'), orderBy('createdAt', 'desc'), limit(5));
  const querySnapshot = await getDocs(q);
  return querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
};
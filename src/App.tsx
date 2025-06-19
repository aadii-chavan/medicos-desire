import React from 'react';
import { createRoutesFromElements, createBrowserRouter, RouterProvider, Outlet, Route } from 'react-router-dom';
import { AuthProvider } from './contexts/AuthContext';
import { ProtectedRoute } from './components/admin/ProtectedRoute';
import { Navbar } from './components/layout/Navbar';
import { Footer } from './components/layout/Footer';
import { FloatingContact } from './components/common/FloatingContact';
import { FloatingNotificationButton } from './components/common/FloatingNotificationButton';
import { Preloader } from './components/Preloader';
import { ScrollToTop } from './components/ScrollToTop';
import { Home } from './pages/Home';
import { About } from './pages/About';
import { Services } from './pages/Services';
import { MBBSAbroad } from './pages/MBBSAbroad';
import { CountryPage } from './pages/CountryPage';
import { ServicePage } from './pages/ServicePage';
import { FeesStructure } from './pages/FeesStructure';
import { Universities } from './pages/Universities';
import { UniversityDetails } from './pages/UniversityDetails';
import { Contact } from './pages/Contact';
import { FAQ } from './pages/FAQ';
import { Gallery } from './pages/Gallery';
import { Blog } from './pages/Blog';
import PavanRathod from './pages/team/PavanRathod';
import AbhishekRathod from './pages/team/AbhishekRathod';
import ShubhamGahane from './pages/team/ShubhamGahane';
import Notifications from './pages/Notifications';

// Admin Pages
import { AdminLogin } from './pages/admin/AdminLogin';
import { AdminLayout } from './components/admin/AdminLayout';
import { Dashboard } from './pages/admin/Dashboard';
import { BlogManager } from './pages/admin/BlogManager';
import { VideoManager } from './pages/admin/VideoManager';
import { GalleryManager } from './pages/admin/GalleryManager';
import { ContactManager } from './pages/admin/ContactManager';
import { NotificationManager } from './pages/admin/NotificationManager';
import { FAQsManager } from './pages/admin/FAQsManager';
import { FeesManager } from './pages/admin/FeesManager';
import { TeamManager } from './pages/admin/TeamManager';
import { Settings } from './pages/admin/Settings';
import { UniversityManager } from './pages/admin/UniversityManager';

// Root layout component that includes ScrollToTop
const RootLayout = () => {
  return (
    <>
      <ScrollToTop />
      <div className="min-h-screen bg-background">
        <Outlet />
      </div>
    </>
  );
};

// Public layout component
const PublicLayout = () => {
  return (
    <>
      <Navbar />
      <main>
        <Outlet />
      </main>
      <Footer />
      <div className="fixed bottom-6 right-4 sm:right-6 z-50 flex flex-col items-end">
        <FloatingContact />
      </div>
    </>
  );
};

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route element={<RootLayout />}>
      {/* Admin Routes */}
      <Route path="/admin-login" element={<AdminLogin />} />
      <Route path="/admin" element={
        <ProtectedRoute>
          <AdminLayout />
        </ProtectedRoute>
      }>
        <Route index element={<Dashboard />} />
        <Route path="blog" element={<BlogManager />} />
        <Route path="videos" element={<VideoManager />} />
        <Route path="gallery" element={<GalleryManager />} />
        <Route path="fees" element={<FeesManager />} />
        <Route path="faqs" element={<FAQsManager />} />
        <Route path="team" element={<TeamManager />} />
        <Route path="contact" element={<ContactManager />} />
        <Route path="notifications" element={<NotificationManager />} />
        <Route path="settings" element={<Settings />} />
        <Route path="universities" element={<UniversityManager />} />
      </Route>

      {/* Public Routes */}
      <Route element={<PublicLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="services" element={<Services />} />
        <Route path="services/:serviceId" element={<ServicePage />} />
        <Route path="mbbs-abroad" element={<MBBSAbroad />} />
        <Route path="mbbs-abroad/:country" element={<CountryPage />} />
        <Route path="fees" element={<FeesStructure />} />
        <Route path="universities" element={<Universities />} />
        <Route path="university-details/:universityId" element={<UniversityDetails />} />
        <Route path="faq" element={<FAQ />} />
        <Route path="gallery" element={<Gallery />} />
        <Route path="blog" element={<Blog />} />
        <Route path="contact" element={<Contact />} />
        <Route path="team/pavan-rathod" element={<PavanRathod />} />
        <Route path="team/abhishek-rathod" element={<AbhishekRathod />} />
        <Route path="team/shubham-gahane" element={<ShubhamGahane />} />
        <Route path="notifications" element={<Notifications />} />
      </Route>
    </Route>
  ),
  {
    future: {
      v7_startTransition: true,
      v7_relativeSplatPath: true
    }
  }
);

function App() {
  return (
    <AuthProvider>
      <Preloader />
      <RouterProvider router={router} />
    </AuthProvider>
  );
}

export default App;
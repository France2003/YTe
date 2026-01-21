import { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MainLayout from './layouts/MainLayout';
import ScrollToTop from './components/ScrollToTop';
import PageLoader from './components/PageLoader';

// Lazy load pages for better performance
const HomePage = lazy(() => import('./pages/HomePage'));
const ServicesPage = lazy(() => import('./pages/ServicesPage'));
const DoctorsPage = lazy(() => import('./pages/DoctorsPage'));
const AppointmentsPage = lazy(() => import('./pages/AppointmentsPage'));
const AboutPage = lazy(() => import('./pages/AboutPage'));
const ContactPage = lazy(() => import('./pages/ContactPage'));
const NewsPage = lazy(() => import('./pages/NewsPage'));

function App() {
  return (
    <Router basename={import.meta.env.BASE_URL}>
      <ScrollToTop />
      <Suspense fallback={<PageLoader />}>
        <Routes>
          <Route path="/" element={<MainLayout />}>
            <Route index element={<HomePage />} />
            <Route path="services" element={<ServicesPage />} />
            <Route path="doctors" element={<DoctorsPage />} />
            <Route path="appointments" element={<AppointmentsPage />} />
            <Route path="about" element={<AboutPage />} />
            <Route path="about" element={<AboutPage />} />
            <Route path="contact" element={<ContactPage />} />
            <Route path="news" element={<NewsPage />} />
            <Route path="news/:id" element={<NewsPage />} />
          </Route>
        </Routes>
      </Suspense>
    </Router>
  );
}

export default App;

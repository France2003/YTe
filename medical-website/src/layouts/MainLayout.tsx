import { Outlet, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ChatWidget from '../components/ChatWidget';
import PageLoader from '../components/PageLoader';

const MainLayout = () => {
    const location = useLocation();
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        // Trigger loading on route change
        setIsLoading(true);
        const timer = setTimeout(() => {
            setIsLoading(false);
        }, 800); // 800ms loading duration

        return () => clearTimeout(timer);
    }, [location.pathname]);

    return (
        <div className="min-h-screen flex flex-col">
            <AnimatePresence>
                {isLoading && <PageLoader />}
            </AnimatePresence>

            <Navbar />
            <main className="flex-grow">
                {/* Only show content when not loading, or keep it but overlay loader */}
                {/* Using AnimatePresence mode="wait" on Outlet for page transitions */}
                <AnimatePresence mode="wait">
                    {/* Key is crucial for framer-motion to detect page changes */}
                    <Outlet key={location.pathname} />
                </AnimatePresence>
            </main>
            <Footer />
            <ChatWidget />
        </div>
    );
};

export default MainLayout;

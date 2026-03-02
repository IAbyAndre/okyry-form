import { Outlet, useLocation } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';
import { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Layout() {
    const { pathname } = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);

    return (
        <div className="flex flex-col min-h-screen">
            <Navbar />
            <main className="flex-grow">
                <AnimatePresence mode="wait">
                    <motion.div
                        key={pathname}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ duration: 0.4, ease: "easeInOut" }}
                        className="container mx-auto px-6 max-w-7xl pt-32 pb-20"
                    >
                        <Outlet />
                    </motion.div>
                </AnimatePresence>
            </main>
            <Footer />
        </div>
    );
}

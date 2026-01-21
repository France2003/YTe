import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

interface LogoProps {
    className?: string;
}

const Logo: React.FC<LogoProps> = ({ className = '' }) => {
    return (
        <Link to="/" className={`flex items-center space-x-2 ${className}`}>
            <motion.img
                src={`${import.meta.env.BASE_URL}logo.png`}
                alt="MediCare+ Logo"
                className="h-10 w-10"
                whileHover={{ scale: 1.1, rotate: 5 }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: 'spring', stiffness: 400, damping: 10 }}
            />
            <motion.div
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 }}
            >
                <h1 className="text-2xl font-bold text-deep-blue">
                    MediCare<span className="text-teal-green">+</span>
                </h1>
            </motion.div>
        </Link>
    );
};

export default Logo;

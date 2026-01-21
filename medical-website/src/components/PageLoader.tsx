import { motion } from 'framer-motion';
import { Activity } from 'lucide-react';

const PageLoader = () => {
    return (
        <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center bg-white"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
        >
            <div className="flex flex-col items-center gap-4">
                <motion.div
                    animate={{
                        scale: [1, 1.2, 1],
                        opacity: [0.5, 1, 0.5],
                    }}
                    transition={{
                        duration: 1.5,
                        repeat: Infinity,
                        ease: "easeInOut",
                    }}
                    className="relative flex items-center justify-center w-20 h-20 bg-teal-green/10 rounded-full"
                >
                    <Activity className="w-10 h-10 text-teal-green" />
                    <motion.div
                        className="absolute inset-0 border-4 border-teal-green/30 rounded-full"
                        animate={{ scale: [1, 1.5], opacity: [1, 0] }}
                        transition={{ duration: 1.5, repeat: Infinity }}
                    />
                </motion.div>
                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.5 }}
                    className="text-teal-green font-medium tracking-wider"
                >
                    LOADING...
                </motion.p>
            </div>
        </motion.div>
    );
};

export default PageLoader;

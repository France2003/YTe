import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { slideInLeft, slideInRight } from '../animations/pageTransitions';

const Hero: React.FC = () => {
    const navigate = useNavigate();

    return (
        <section className="relative text-white pt-24 pb-16 md:pt-32 md:pb-24 overflow-hidden">
            {/* Medical Background Image - Sharp and Clear */}
            <div
                className="absolute inset-0"
                style={{
                    backgroundImage: 'url(/medical-bg.jpg)',
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                }}
            ></div>

            {/* Dark overlay for text readability */}
            <div className="absolute inset-0 bg-black/50"></div>

            {/* Subtle animated gradient accents */}
            <div className="absolute inset-0 overflow-hidden">
                <motion.div
                    animate={{
                        scale: [1, 1.1, 1],
                        opacity: [0.15, 0.25, 0.15],
                    }}
                    transition={{
                        duration: 8,
                        repeat: Infinity,
                        ease: 'easeInOut',
                    }}
                    className="absolute top-0 right-0 w-1/2 h-1/2 bg-gradient-to-br from-teal-green/30 to-transparent rounded-full blur-3xl"
                />
                <motion.div
                    animate={{
                        scale: [1, 1.2, 1],
                        opacity: [0.15, 0.2, 0.15],
                    }}
                    transition={{
                        duration: 10,
                        repeat: Infinity,
                        ease: 'easeInOut',
                    }}
                    className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-gradient-to-tr from-cyan-500/20 to-transparent rounded-full blur-3xl"
                />
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="grid md:grid-cols-2 gap-12 items-center">
                    {/* Left Content */}
                    <motion.div
                        variants={slideInLeft}
                        initial="initial"
                        animate="animate"
                        className="space-y-6"
                    >
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.1, duration: 0.6 }}
                            className="inline-block"
                        >
                            <span className="bg-white/20 backdrop-blur-md text-white px-4 py-2 rounded-full text-sm font-semibold border border-white/30 shadow-lg">
                                ✨ Chăm sóc sức khỏe chuyên nghiệp
                            </span>
                        </motion.div>

                        <motion.h1
                            className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight font-heading drop-shadow-lg"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2, duration: 0.8 }}
                        >
                            Chăm sóc sức khỏe{' '}
                            <span className="text-cyan-300 drop-shadow-lg">
                                tận tâm
                            </span>
                        </motion.h1>

                        <motion.p
                            className="text-lg md:text-xl text-white leading-relaxed drop-shadow-lg"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.4, duration: 0.8 }}
                        >
                            Đội ngũ bác sĩ chuyên nghiệp, trang thiết bị hiện đại,
                            luôn sẵn sàng phục vụ sức khỏe của bạn và gia đình 24/7
                        </motion.p>

                        {/* Features */}
                        <motion.div
                            className="grid grid-cols-2 gap-4 pt-2"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.5, duration: 0.8 }}
                        >
                            <div className="flex items-center space-x-2">
                                <div className="w-2 h-2 bg-teal-green rounded-full shadow-glow"></div>
                                <span className="text-sm text-white font-medium">10+ năm kinh nghiệm</span>
                            </div>
                            <div className="flex items-center space-x-2">
                                <div className="w-2 h-2 bg-teal-green rounded-full shadow-glow"></div>
                                <span className="text-sm text-white font-medium">50+ bác sĩ chuyên khoa</span>
                            </div>
                            <div className="flex items-center space-x-2">
                                <div className="w-2 h-2 bg-teal-green rounded-full shadow-glow"></div>
                                <span className="text-sm text-white font-medium">Trang thiết bị hiện đại</span>
                            </div>
                            <div className="flex items-center space-x-2">
                                <div className="w-2 h-2 bg-teal-green rounded-full shadow-glow"></div>
                                <span className="text-sm text-white font-medium">Phục vụ 24/7</span>
                            </div>
                        </motion.div>

                        <motion.div
                            className="flex flex-col sm:flex-row gap-4 pt-4"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.6, duration: 0.8 }}
                        >
                            <motion.button
                                onClick={() => navigate('/appointments')}
                                className="group flex items-center justify-center bg-gradient-to-r from-teal-green to-cyan-500 text-white px-8 py-4 rounded-xl font-semibold shadow-xl hover:shadow-glow transition-all"
                                whileHover={{ scale: 1.05, y: -2 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                <Calendar className="w-5 h-5 mr-2 group-hover:rotate-12 transition-transform" />
                                Đặt lịch khám
                            </motion.button>
                            <motion.button
                                onClick={() => navigate('/services')}
                                className="group flex items-center justify-center bg-white/15 backdrop-blur-md text-white px-8 py-4 rounded-xl font-semibold border border-white/30 hover:bg-white/25 transition-all shadow-lg"
                                whileHover={{ scale: 1.05, y: -2 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                Xem dịch vụ
                                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                            </motion.button>
                        </motion.div>
                    </motion.div>

                    {/* Right Content - Modern Glass Card */}
                    <motion.div
                        variants={slideInRight}
                        initial="initial"
                        animate="animate"
                        className="relative"
                    >
                        <motion.div
                            className="relative bg-white/10 backdrop-blur-2xl rounded-3xl p-8 border border-white/20 shadow-2xl"
                            whileHover={{ scale: 1.02, y: -5 }}
                            transition={{ type: 'spring', stiffness: 300 }}
                        >
                            {/* Decorative gradient glow */}
                            <div className="absolute -inset-0.5 bg-gradient-to-r from-teal-green to-cyan-500 rounded-3xl opacity-20 blur"></div>

                            <div className="relative aspect-square bg-gradient-to-br from-white/10 to-white/5 rounded-2xl flex items-center justify-center overflow-hidden border border-white/10">
                                {/* Medical Icon SVG */}
                                <motion.svg
                                    className="w-2/3 h-2/3"
                                    viewBox="0 0 200 200"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                    animate={{
                                        rotate: [0, 5, 0, -5, 0],
                                        scale: [1, 1.05, 1]
                                    }}
                                    transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
                                >
                                    {/* Medical Cross with gradient */}
                                    <defs>
                                        <linearGradient id="crossGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                                            <stop offset="0%" stopColor="#14b8a6" />
                                            <stop offset="50%" stopColor="#06b6d4" />
                                            <stop offset="100%" stopColor="#0ea5e9" />
                                        </linearGradient>
                                    </defs>
                                    <rect x="85" y="30" width="30" height="140" fill="url(#crossGradient)" rx="8" />
                                    <rect x="30" y="85" width="140" height="30" fill="url(#crossGradient)" rx="8" />

                                    {/* Stethoscope */}
                                    <circle cx="100" cy="100" r="20" stroke="white" strokeWidth="5" fill="none" opacity="0.9" />
                                    <path d="M100 120 Q75 150 50 170" stroke="white" strokeWidth="5" strokeLinecap="round" fill="none" opacity="0.9" />
                                    <circle cx="50" cy="170" r="10" fill="white" opacity="0.9" />
                                </motion.svg>

                                {/* Floating particles */}
                                <motion.div
                                    className="absolute top-10 left-10 w-3 h-3 bg-teal-green rounded-full shadow-glow"
                                    animate={{ y: [0, -20, 0], opacity: [0.5, 1, 0.5] }}
                                    transition={{ duration: 3, repeat: Infinity }}
                                />
                                <motion.div
                                    className="absolute bottom-10 right-10 w-2 h-2 bg-cyan-400 rounded-full shadow-glow"
                                    animate={{ y: [0, 20, 0], opacity: [0.5, 1, 0.5] }}
                                    transition={{ duration: 4, repeat: Infinity, delay: 1 }}
                                />
                            </div>

                            {/* Stats badges */}
                            <div className="grid grid-cols-2 gap-4 mt-6">
                                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 text-center border border-white/20">
                                    <div className="text-2xl font-bold text-cyan-300">10+</div>
                                    <div className="text-xs text-white">Năm kinh nghiệm</div>
                                </div>
                                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 text-center border border-white/20">
                                    <div className="text-2xl font-bold text-cyan-300">50+</div>
                                    <div className="text-xs text-white">Bác sĩ</div>
                                </div>
                            </div>
                        </motion.div>

                        {/* Floating badges */}
                        <motion.div
                            className="absolute -top-4 -right-4 bg-gradient-to-r from-teal-green to-cyan-500 text-white px-4 py-2 rounded-full text-sm font-semibold shadow-glow"
                            animate={{ y: [0, -10, 0] }}
                            transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
                        >
                            ⭐ Uy tín hàng đầu
                        </motion.div>
                        <motion.div
                            className="absolute -bottom-4 -left-4 bg-white/15 backdrop-blur-xl text-white px-4 py-2 rounded-full text-sm font-semibold border border-white/30 shadow-lg"
                            animate={{ y: [0, 10, 0] }}
                            transition={{ duration: 2.5, repeat: Infinity, ease: 'easeInOut' }}
                        >
                            🏥 Phục vụ 24/7
                        </motion.div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Hero;

import React from 'react';
import { motion } from 'framer-motion';
import { Award, Users, Heart, LucideIcon } from 'lucide-react';
import { staggerContainer, fadeInUp } from '../animations/pageTransitions';

interface Stat {
    icon: LucideIcon;
    number: string;
    label: string;
    color: string;
}

const QuickStats: React.FC = () => {
    const stats: Stat[] = [
        {
            icon: Award,
            number: '10+',
            label: 'Năm kinh nghiệm',
            color: 'text-teal-green'
        },
        {
            icon: Users,
            number: '50+',
            label: 'Bác sĩ chuyên khoa',
            color: 'text-deep-blue'
        },
        {
            icon: Heart,
            number: '10,000+',
            label: 'Bệnh nhân tin tưởng',
            color: 'text-red-500'
        }
    ];

    return (
        <section className="py-12 bg-sky-blue">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    variants={staggerContainer}
                    initial="initial"
                    whileInView="animate"
                    viewport={{ once: true, amount: 0.3 }}
                    className="grid grid-cols-1 md:grid-cols-3 gap-8"
                >
                    {stats.map((stat, index) => (
                        <motion.div
                            key={index}
                            variants={fadeInUp}
                            whileHover={{ y: -10, boxShadow: '0 20px 40px rgba(0,0,0,0.1)' }}
                            className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition text-center"
                        >
                            <motion.div
                                className="flex justify-center mb-4"
                                whileHover={{ rotate: 360, scale: 1.1 }}
                                transition={{ duration: 0.6 }}
                            >
                                <div className={`${stat.color} bg-gray-50 p-4 rounded-full`}>
                                    <stat.icon className="w-8 h-8" />
                                </div>
                            </motion.div>
                            <motion.h3
                                className="text-4xl font-bold text-gray-800 mb-2"
                                initial={{ opacity: 0, scale: 0.5 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 + 0.3, duration: 0.5 }}
                            >
                                {stat.number}
                            </motion.h3>
                            <p className="text-gray-600 font-medium">{stat.label}</p>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default QuickStats;

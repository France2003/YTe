import React from 'react';
import { motion } from 'framer-motion';
import { Stethoscope, Baby, Heart, Bone, Sparkles, Eye, Brain, Pill, LucideIcon } from 'lucide-react';
import { staggerContainer, fadeInUp } from '../animations/pageTransitions';

interface Service {
    icon: LucideIcon;
    title: string;
    description: string;
    color: string;
}

const Services: React.FC = () => {
    const services: Service[] = [
        {
            icon: Stethoscope,
            title: 'Nội khoa',
            description: 'Khám và điều trị các bệnh lý nội khoa tổng quát',
            color: 'bg-blue-50 text-blue-600'
        },
        {
            icon: Baby,
            title: 'Nhi khoa',
            description: 'Chăm sóc sức khỏe toàn diện cho trẻ em',
            color: 'bg-pink-50 text-pink-600'
        },
        {
            icon: Heart,
            title: 'Tim mạch',
            description: 'Chẩn đoán và điều trị bệnh lý tim mạch',
            color: 'bg-red-50 text-red-600'
        },
        {
            icon: Bone,
            title: 'Chấn thương chỉnh hình',
            description: 'Điều trị các bệnh lý về xương khớp',
            color: 'bg-orange-50 text-orange-600'
        },
        {
            icon: Sparkles,
            title: 'Da liễu',
            description: 'Chăm sóc và điều trị các vấn đề về da',
            color: 'bg-purple-50 text-purple-600'
        },
        {
            icon: Eye,
            title: 'Mắt',
            description: 'Khám và điều trị các bệnh lý về mắt',
            color: 'bg-teal-50 text-teal-600'
        },
        {
            icon: Brain,
            title: 'Thần kinh',
            description: 'Chẩn đoán và điều trị bệnh lý thần kinh',
            color: 'bg-indigo-50 text-indigo-600'
        },
        {
            icon: Pill,
            title: 'Dược lâm sàng',
            description: 'Tư vấn và cung cấp thuốc chất lượng',
            color: 'bg-green-50 text-green-600'
        }
    ];

    return (
        <section id="services" className="py-16 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-12"
                >
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4 font-heading">
                        Dịch vụ y tế chuyên nghiệp
                    </h2>
                    <p className="text-gray-600 text-lg max-w-2xl mx-auto">
                        Chúng tôi cung cấp đa dạng các dịch vụ y tế với đội ngũ bác sĩ giàu kinh nghiệm
                    </p>
                </motion.div>

                <motion.div
                    variants={staggerContainer}
                    initial="initial"
                    whileInView="animate"
                    viewport={{ once: true, amount: 0.1 }}
                    className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
                >
                    {services.map((service, index) => (
                        <motion.div
                            key={index}
                            variants={fadeInUp}
                            whileHover={{ y: -10, boxShadow: '0 20px 40px rgba(0,0,0,0.1)' }}
                            className="group bg-white border-2 border-gray-100 rounded-xl p-6 hover:border-deep-blue hover:shadow-xl transition-all duration-300 cursor-pointer"
                        >
                            <motion.div
                                className={`${service.color} w-16 h-16 rounded-lg flex items-center justify-center mb-4`}
                                whileHover={{ scale: 1.1, rotate: 5 }}
                                transition={{ type: 'spring', stiffness: 400, damping: 10 }}
                            >
                                <service.icon className="w-8 h-8" />
                            </motion.div>
                            <h3 className="text-xl font-semibold text-gray-800 mb-2 group-hover:text-deep-blue transition">
                                {service.title}
                            </h3>
                            <p className="text-gray-600 text-sm">
                                {service.description}
                            </p>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default Services;

import { motion } from 'framer-motion';
import { pageVariants, staggerContainer, fadeInUp } from '../animations/pageTransitions';
import { Stethoscope, Baby, Heart, Bone, Sparkles, Eye, Brain, Pill, Clock, CheckCircle } from 'lucide-react';
import SEO from '../components/SEO';

const ServicesPage = () => {
    const services = [
        {
            icon: Stethoscope,
            title: 'Nội khoa',
            description: 'Khám và điều trị các bệnh lý nội khoa tổng quát',
            details: 'Chuyên khoa nội tổng quát, tim mạch, tiêu hóa, hô hấp',
            price: 'Từ 200.000đ',
            color: 'bg-blue-50 text-blue-600'
        },
        {
            icon: Baby,
            title: 'Nhi khoa',
            description: 'Chăm sóc sức khỏe toàn diện cho trẻ em',
            details: 'Khám sức khỏe định kỳ, tiêm chủng, điều trị bệnh nhi',
            price: 'Từ 150.000đ',
            color: 'bg-pink-50 text-pink-600'
        },
        {
            icon: Heart,
            title: 'Tim mạch',
            description: 'Chẩn đoán và điều trị bệnh lý tim mạch',
            details: 'Siêu âm tim, điện tâm đồ, điều trị cao huyết áp',
            price: 'Từ 300.000đ',
            color: 'bg-red-50 text-red-600'
        },
        {
            icon: Bone,
            title: 'Chấn thương chỉnh hình',
            description: 'Điều trị các bệnh lý về xương khớp',
            details: 'Phẫu thuật xương khớp, vật lý trị liệu, phục hồi chức năng',
            price: 'Từ 250.000đ',
            color: 'bg-orange-50 text-orange-600'
        },
        {
            icon: Sparkles,
            title: 'Da liễu',
            description: 'Chăm sóc và điều trị các vấn đề về da',
            details: 'Điều trị mụn, nám, viêm da, thẩm mỹ da',
            price: 'Từ 200.000đ',
            color: 'bg-purple-50 text-purple-600'
        },
        {
            icon: Eye,
            title: 'Mắt',
            description: 'Khám và điều trị các bệnh lý về mắt',
            details: 'Khúc xạ, đục thủy tinh thể, glaucoma, võng mạc',
            price: 'Từ 180.000đ',
            color: 'bg-teal-50 text-teal-600'
        },
        {
            icon: Brain,
            title: 'Thần kinh',
            description: 'Chẩn đoán và điều trị bệnh lý thần kinh',
            details: 'Đau đầu, đột quỵ, động kinh, Parkinson',
            price: 'Từ 300.000đ',
            color: 'bg-indigo-50 text-indigo-600'
        },
        {
            icon: Pill,
            title: 'Dược lâm sàng',
            description: 'Tư vấn và cung cấp thuốc chất lượng',
            details: 'Thuốc chính hãng, tư vấn dùng thuốc, theo dõi điều trị',
            price: 'Tư vấn miễn phí',
            color: 'bg-green-50 text-green-600'
        }
    ];

    return (
        <motion.div
            variants={pageVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            className="pt-20"
        >
            <SEO
                title="Dịch vụ Y tế"
                description="Khám phá các dịch vụ y tế chuyên khoa tại MediCare+: Nội khoa, Nhi khoa, Tim mạch, Xương khớp và nhiều chuyên khoa khác."
            />

            {/* Hero Section */}
            <section className="bg-gradient-to-br from-deep-blue to-blue-900 text-white py-16">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="text-center"
                    >
                        <h1 className="text-4xl md:text-5xl font-bold mb-4 font-heading">Dịch vụ y tế chuyên nghiệp</h1>
                        <p className="text-xl text-blue-100 max-w-3xl mx-auto">
                            Chúng tôi cung cấp đa dạng các dịch vụ y tế với đội ngũ bác sĩ giàu kinh nghiệm và trang thiết bị hiện đại
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Services Grid */}
            <section className="py-16 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div
                        variants={staggerContainer}
                        initial="initial"
                        animate="animate"
                        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                    >
                        {services.map((service, index) => (
                            <motion.div
                                key={index}
                                variants={fadeInUp}
                                whileHover={{ y: -10, boxShadow: '0 20px 40px rgba(0,0,0,0.1)' }}
                                className="bg-white rounded-2xl p-6 shadow-md hover:shadow-xl transition-all duration-300"
                            >
                                <div className={`${service.color} w-16 h-16 rounded-xl flex items-center justify-center mb-4`}>
                                    <service.icon className="w-8 h-8" />
                                </div>
                                <h3 className="text-2xl font-bold text-gray-800 mb-2 font-heading">{service.title}</h3>
                                <p className="text-gray-600 mb-4">{service.description}</p>
                                <div className="border-t pt-4 space-y-2">
                                    <div className="flex items-start text-sm text-gray-600">
                                        <CheckCircle className="w-4 h-4 mr-2 text-teal-green flex-shrink-0 mt-0.5" />
                                        <span>{service.details}</span>
                                    </div>
                                    <div className="flex items-center text-sm">
                                        <Clock className="w-4 h-4 mr-2 text-gray-400" />
                                        <span className="text-gray-600">Thời gian khám: 30-45 phút</span>
                                    </div>
                                    <div className="text-teal-green font-bold text-lg mt-2">{service.price}</div>
                                </div>
                                <button className="w-full mt-4 bg-gradient-to-r from-deep-blue to-blue-700 text-white py-3 rounded-lg hover:shadow-lg transition transform hover:scale-105">
                                    Đặt lịch khám
                                </button>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </section>
        </motion.div>
    );
};

export default ServicesPage;

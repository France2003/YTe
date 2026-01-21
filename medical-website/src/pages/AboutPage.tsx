import { motion } from 'framer-motion';
import { pageVariants, fadeInUp, staggerContainer } from '../animations/pageTransitions';
import { Award, Target, Heart, Users, Building2 } from 'lucide-react';
import SEO from '../components/SEO';

const AboutPage = () => {
    const values = [
        { icon: Heart, title: 'Tận tâm', description: 'Luôn đặt sức khỏe bệnh nhân lên hàng đầu' },
        { icon: Award, title: 'Chuyên nghiệp', description: 'Đội ngũ y bác sĩ giàu kinh nghiệm' },
        { icon: Target, title: 'Chất lượng', description: 'Trang thiết bị hiện đại, dịch vụ tốt nhất' },
        { icon: Users, title: 'Nhân văn', description: 'Chăm sóc toàn diện, thấu hiểu bệnh nhân' },
    ];

    const achievements = [
        { number: '10+', label: 'Năm hoạt động' },
        { number: '50+', label: 'Bác sĩ chuyên khoa' },
        { number: '10,000+', label: 'Bệnh nhân' },
        { number: '98%', label: 'Hài lòng' },
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
                title="Về Chúng tôi"
                description="Hệ thống Y tế MediCare+ với hơn 10 năm kinh nghiệm, đội ngũ y bác sĩ đầu ngành và trang thiết bị hiện đại, cam kết mang lại dịch vụ chăm sóc sức khỏe tốt nhất."
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
                        <h1 className="text-4xl md:text-5xl font-bold mb-4 font-heading">Về MediCare+</h1>
                        <p className="text-xl text-blue-100 max-w-3xl mx-auto">
                            Hơn 10 năm đồng hành cùng sức khỏe cộng đồng
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Story Section */}
            <section className="py-16 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6 }}
                        >
                            <h2 className="text-3xl font-bold text-gray-800 mb-4 font-heading">Câu chuyện của chúng tôi</h2>
                            <p className="text-gray-600 mb-4">
                                MediCare+ được thành lập với sứ mệnh mang đến dịch vụ y tế chất lượng cao,
                                dễ tiếp cận cho mọi người. Với hơn 10 năm kinh nghiệm, chúng tôi tự hào là
                                đơn vị y tế được tin tưởng hàng đầu.
                            </p>
                            <p className="text-gray-600 mb-4">
                                Đội ngũ của chúng tôi gồm hơn 50 bác sĩ chuyên khoa giàu kinh nghiệm,
                                luôn cập nhật kiến thức y khoa mới nhất để phục vụ bệnh nhân tốt nhất.
                            </p>
                            <p className="text-gray-600">
                                Chúng tôi không ngừng đầu tư vào trang thiết bị hiện đại, cải thiện
                                chất lượng dịch vụ để xứng đáng với niềm tin của bệnh nhân.
                            </p>
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0, x: 50 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6 }}
                            className="glass-blue rounded-2xl p-8"
                        >
                            <Building2 className="w-20 h-20 text-deep-blue mb-4" />
                            <h3 className="text-2xl font-bold text-gray-800 mb-4">Sứ mệnh</h3>
                            <p className="text-gray-700">
                                "Chăm sóc sức khỏe tận tâm, mang lại cuộc sống khỏe mạnh và hạnh phúc
                                cho mọi người trong cộng đồng."
                            </p>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Values Section */}
            <section className="py-16 bg-sky-blue">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-3xl font-bold text-center text-gray-800 mb-12 font-heading"
                    >
                        Giá trị cốt lõi
                    </motion.h2>
                    <motion.div
                        variants={staggerContainer}
                        initial="initial"
                        animate="animate"
                        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
                    >
                        {values.map((value, index) => (
                            <motion.div
                                key={index}
                                variants={fadeInUp}
                                whileHover={{ y: -5 }}
                                className="bg-white rounded-xl p-6 text-center shadow-md hover:shadow-xl transition"
                            >
                                <div className="bg-teal-50 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                                    <value.icon className="w-8 h-8 text-teal-green" />
                                </div>
                                <h3 className="text-xl font-bold text-gray-800 mb-2">{value.title}</h3>
                                <p className="text-gray-600 text-sm">{value.description}</p>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </section>

            {/* Achievements Section */}
            <section className="py-16 bg-gradient-to-br from-deep-blue to-blue-900 text-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-3xl font-bold text-center mb-12 font-heading"
                    >
                        Thành tựu của chúng tôi
                    </motion.h2>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                        {achievements.map((achievement, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, scale: 0.5 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ delay: index * 0.1 }}
                                className="text-center"
                            >
                                <div className="text-4xl md:text-5xl font-bold text-teal-green mb-2">
                                    {achievement.number}
                                </div>
                                <div className="text-blue-100">{achievement.label}</div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>
        </motion.div>
    );
};

export default AboutPage;

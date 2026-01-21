import { motion } from 'framer-motion';
import Hero from '../components/Hero';
import QuickStats from '../components/QuickStats';
import Services from '../components/Services';
import Testimonials from '../components/Testimonials';
import WhyChooseUs from '../components/WhyChooseUs';
import FeaturedDoctors from '../components/FeaturedDoctors';
import HealthBlog from '../components/HealthBlog';
import { pageVariants } from '../animations/pageTransitions';
import { Link } from 'react-router-dom';
import { ArrowRight, Calendar, Users, Stethoscope } from 'lucide-react';
import SEO from '../components/SEO';

const HomePage = () => {
    return (
        <motion.div
            variants={pageVariants}
            initial="initial"
            animate="animate"
            exit="exit"
        >
            <SEO
                title="Trang chủ"
                description="Hệ thống Y tế MediCare+ cung cấp dịch vụ khám chữa bệnh chất lượng cao, đặt lịch trực tuyến, tư vấn sức khỏe 24/7."
            />
            <Hero />
            <QuickStats />
            <WhyChooseUs />
            <Services />
            <FeaturedDoctors />

            {/* CTA Section */}
            <section className="py-16 bg-gradient-to-br from-deep-blue to-blue-900 text-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid md:grid-cols-3 gap-8">
                        <motion.div
                            whileHover={{ scale: 1.05, y: -5 }}
                            className="glass rounded-xl p-6 text-center"
                        >
                            <Calendar className="w-12 h-12 mx-auto mb-4 text-teal-green" />
                            <h3 className="text-xl font-bold mb-2">Đặt lịch nhanh</h3>
                            <p className="text-blue-100 mb-4">Đặt lịch khám chỉ trong vài phút</p>
                            <Link to="/appointments" className="text-teal-green hover:underline flex items-center justify-center">
                                Đặt ngay <ArrowRight className="w-4 h-4 ml-1" />
                            </Link>
                        </motion.div>

                        <motion.div
                            whileHover={{ scale: 1.05, y: -5 }}
                            className="glass rounded-xl p-6 text-center"
                        >
                            <Users className="w-12 h-12 mx-auto mb-4 text-teal-green" />
                            <h3 className="text-xl font-bold mb-2">Đội ngũ bác sĩ</h3>
                            <p className="text-blue-100 mb-4">Hơn 50 bác sĩ chuyên khoa giàu kinh nghiệm</p>
                            <Link to="/doctors" className="text-teal-green hover:underline flex items-center justify-center">
                                Xem chi tiết <ArrowRight className="w-4 h-4 ml-1" />
                            </Link>
                        </motion.div>

                        <motion.div
                            whileHover={{ scale: 1.05, y: -5 }}
                            className="glass rounded-xl p-6 text-center"
                        >
                            <Stethoscope className="w-12 h-12 mx-auto mb-4 text-teal-green" />
                            <h3 className="text-xl font-bold mb-2">Dịch vụ đa dạng</h3>
                            <p className="text-blue-100 mb-4">Nhiều chuyên khoa phục vụ mọi nhu cầu</p>
                            <Link to="/services" className="text-teal-green hover:underline flex items-center justify-center">
                                Khám phá <ArrowRight className="w-4 h-4 ml-1" />
                            </Link>
                        </motion.div>
                    </div>
                </div>
            </section>

            <HealthBlog />
            <Testimonials />
        </motion.div>
    );
};

export default HomePage;

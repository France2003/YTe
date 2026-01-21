import { motion } from 'framer-motion';
import { pageVariants } from '../animations/pageTransitions';
import DoctorSearch from '../components/DoctorSearch';
import SEO from '../components/SEO';

const DoctorsPage = () => {
    return (
        <motion.div
            variants={pageVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            className="pt-20"
        >
            <SEO
                title="Đội ngũ Bác sĩ"
                description="Danh sách hơn 50 bác sĩ chuyên khoa giàu kinh nghiệm và tận tâm tại MediCare+. Tìm kiếm bác sĩ và đặt lịch khám ngay."
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
                        <h1 className="text-4xl md:text-5xl font-bold mb-4 font-heading">Đội ngũ bác sĩ chuyên nghiệp</h1>
                        <p className="text-xl text-blue-100 max-w-3xl mx-auto">
                            Hơn 50 bác sĩ giàu kinh nghiệm, tận tâm với nghề, luôn đặt sức khỏe bệnh nhân lên hàng đầu
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Doctor Search Component */}
            <div className="bg-white">
                <DoctorSearch />
            </div>
        </motion.div>
    );
};

export default DoctorsPage;

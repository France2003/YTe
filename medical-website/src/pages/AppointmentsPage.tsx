import { motion } from 'framer-motion';
import { pageVariants } from '../animations/pageTransitions';
import BookingForm from '../components/BookingForm';
import SEO from '../components/SEO';

const AppointmentsPage = () => {
    return (
        <motion.div
            variants={pageVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            className="pt-20 min-h-screen"
        >
            <SEO
                title="Đặt lịch khám"
                description="Đặt lịch khám bệnh trực tuyến nhanh chóng, tiện lợi. Chọn bác sĩ, chuyên khoa và thời gian phù hợp với bạn."
            />
            <BookingForm />
        </motion.div>
    );
};

export default AppointmentsPage;

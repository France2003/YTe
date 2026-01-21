import { motion } from 'framer-motion';
import { ShieldCheck, UserCheck, Clock, Award, CheckCircle } from 'lucide-react';

const reasons = [
    {
        icon: <ShieldCheck className="w-10 h-10 text-teal-green" />,
        title: "Uy tín hàng đầu",
        description: "Hệ thống y tế đạt chuẩn quốc tế JCI với quy trình khám chữa bệnh nghiêm ngặt."
    },
    {
        icon: <UserCheck className="w-10 h-10 text-teal-green" />,
        title: "Đội ngũ chuyên gia",
        description: "Quy tụ hơn 50 Bác sĩ CKI, CKII, Thạc sĩ, Tiến sĩ giàu kinh nghiệm từ các bệnh viện lớn."
    },
    {
        icon: <Clock className="w-10 h-10 text-teal-green" />,
        title: "Phục vụ 24/7",
        description: "Hệ thống cấp cứu và tư vấn trực tuyến hoạt động liên tục, sẵn sàng hỗ trợ mọi lúc."
    },
    {
        icon: <Award className="w-10 h-10 text-teal-green" />,
        title: "Trang thiết bị hiện đại",
        description: "Sở hữu hệ thống máy MRI 3.0, CT 128 lát cắt, Labo xét nghiệm tự động hoàn toàn."
    }
];

const WhyChooseUs = () => {
    return (
        <section className="py-20 bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col md:flex-row items-center gap-12">
                    {/* Left: Content */}
                    <div className="w-full md:w-1/2">
                        <motion.span
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            className="text-teal-green font-bold text-sm uppercase tracking-wider"
                        >
                            Tại sao chọn chúng tôi?
                        </motion.span>
                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.1 }}
                            className="text-3xl md:text-4xl font-bold text-gray-900 mt-2 mb-6"
                        >
                            Chăm sóc sức khỏe toàn diện với tiêu chuẩn cao nhất
                        </motion.h2>
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2 }}
                            className="text-gray-600 mb-8 leading-relaxed"
                        >
                            MediCare+ cam kết mang đến trải nghiệm khám chữa bệnh an toàn, hiệu quả và tận tâm. Chúng tôi không ngừng nỗ lực nâng cao chất lượng dịch vụ để trở thành người bạn đồng hành tin cậy của mọi gia đình.
                        </motion.p>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                            {reasons.map((item, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.3 + index * 0.1 }}
                                    className="flex items-start gap-4"
                                >
                                    <div className="bg-white p-3 rounded-xl shadow-sm border border-gray-100 flex-shrink-0">
                                        {item.icon}
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-gray-900 mb-1">{item.title}</h4>
                                        <p className="text-sm text-gray-500">{item.description}</p>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>

                    {/* Right: Image */}
                    <div className="w-full md:w-1/2 relative">
                        <motion.div
                            initial={{ opacity: 0, x: 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8 }}
                            className="relative z-10 rounded-3xl overflow-hidden shadow-2xl"
                        >
                            <img
                                src="https://images.unsplash.com/photo-1579684385127-1ef15d508118?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80"
                                alt="Modern Hospital"
                                className="w-full h-auto object-cover"
                            />
                            {/* Floating Card */}
                            <div className="absolute bottom-6 left-6 bg-white p-4 rounded-xl shadow-lg flex items-center gap-3">
                                <div className="bg-green-100 p-2 rounded-full text-green-600">
                                    <CheckCircle className="w-6 h-6" />
                                </div>
                                <div>
                                    <p className="text-xs text-gray-500 font-medium">Đánh giá khách hàng</p>
                                    <p className="font-bold text-gray-900">4.9/5 ⭐ (2k+ review)</p>
                                </div>
                            </div>
                        </motion.div>
                        {/* Decorative Background */}
                        <div className="absolute top-10 -right-10 w-full h-full bg-teal-pattern rounded-3xl opacity-20 -z-0 transform rotate-6"></div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default WhyChooseUs;

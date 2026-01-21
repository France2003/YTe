import { motion } from 'framer-motion';
import { pageVariants, fadeInUp } from '../animations/pageTransitions';
import { MapPin, Phone, Mail, Clock, Send } from 'lucide-react';
import { useState } from 'react';
import SEO from '../components/SEO';

const ContactPage = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        message: ''
    });
    const [isSubmitted, setIsSubmitted] = useState(false);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitted(true);
        setTimeout(() => {
            setIsSubmitted(false);
            setFormData({ name: '', email: '', phone: '', message: '' });
        }, 3000);
    };

    return (
        <motion.div
            variants={pageVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            className="pt-20"
        >
            <SEO
                title="Liên hệ"
                description="Liên hệ với MediCare+ để được tư vấn và hỗ trợ. Địa chỉ 123 Đường ABC, Hà Nội. Hotline: 1900-1234."
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
                        <h1 className="text-4xl md:text-5xl font-bold mb-4 font-heading">Liên hệ với chúng tôi</h1>
                        <p className="text-xl text-blue-100 max-w-3xl mx-auto">
                            Chúng tôi luôn sẵn sàng lắng nghe và hỗ trợ bạn
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Contact Section */}
            <section className="py-16 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid md:grid-cols-2 gap-12">
                        {/* Contact Info */}
                        <motion.div
                            variants={fadeInUp}
                            initial="initial"
                            animate="animate"
                            className="space-y-6"
                        >
                            <h2 className="text-3xl font-bold text-gray-800 mb-6 font-heading">Thông tin liên hệ</h2>

                            <div className="bg-white rounded-xl p-6 shadow-md">
                                <div className="flex items-start space-x-4">
                                    <div className="bg-teal-50 p-3 rounded-lg">
                                        <MapPin className="w-6 h-6 text-teal-green" />
                                    </div>
                                    <div>
                                        <h3 className="font-semibold text-gray-800 mb-1">Địa chỉ</h3>
                                        <p className="text-gray-600">123 Đường ABC, Quận 1, TP. Hồ Chí Minh</p>
                                    </div>
                                </div>
                            </div>

                            <div className="bg-white rounded-xl p-6 shadow-md">
                                <div className="flex items-start space-x-4">
                                    <div className="bg-blue-50 p-3 rounded-lg">
                                        <Phone className="w-6 h-6 text-deep-blue" />
                                    </div>
                                    <div>
                                        <h3 className="font-semibold text-gray-800 mb-1">Điện thoại</h3>
                                        <p className="text-gray-600">028 1234 567</p>
                                        <p className="text-red-600 font-semibold">Cấp cứu: 1900-1234</p>
                                    </div>
                                </div>
                            </div>

                            <div className="bg-white rounded-xl p-6 shadow-md">
                                <div className="flex items-start space-x-4">
                                    <div className="bg-purple-50 p-3 rounded-lg">
                                        <Mail className="w-6 h-6 text-purple-600" />
                                    </div>
                                    <div>
                                        <h3 className="font-semibold text-gray-800 mb-1">Email</h3>
                                        <p className="text-gray-600">info@medicare.vn</p>
                                    </div>
                                </div>
                            </div>

                            <div className="bg-white rounded-xl p-6 shadow-md">
                                <div className="flex items-start space-x-4">
                                    <div className="bg-green-50 p-3 rounded-lg">
                                        <Clock className="w-6 h-6 text-green-600" />
                                    </div>
                                    <div>
                                        <h3 className="font-semibold text-gray-800 mb-1">Giờ làm việc</h3>
                                        <p className="text-gray-600">Thứ 2 - Thứ 6: 8:00 - 20:00</p>
                                        <p className="text-gray-600">Thứ 7 - Chủ nhật: 8:00 - 17:00</p>
                                    </div>
                                </div>
                            </div>
                        </motion.div>

                        {/* Contact Form */}
                        <motion.div
                            variants={fadeInUp}
                            initial="initial"
                            animate="animate"
                            className="bg-white rounded-2xl p-8 shadow-xl"
                        >
                            <h2 className="text-3xl font-bold text-gray-800 mb-6 font-heading">Gửi tin nhắn</h2>

                            {isSubmitted ? (
                                <div className="text-center py-12">
                                    <div className="text-6xl mb-4">✅</div>
                                    <h3 className="text-2xl font-bold text-gray-800 mb-2">Gửi thành công!</h3>
                                    <p className="text-gray-600">Chúng tôi sẽ liên hệ với bạn sớm nhất.</p>
                                </div>
                            ) : (
                                <form onSubmit={handleSubmit} className="space-y-4">
                                    <div>
                                        <label className="block text-gray-700 font-medium mb-2">Họ và tên *</label>
                                        <input
                                            type="text"
                                            name="name"
                                            value={formData.name}
                                            onChange={handleChange}
                                            required
                                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-deep-blue focus:border-transparent outline-none"
                                            placeholder="Nhập họ và tên"
                                        />
                                    </div>

                                    <div>
                                        <label className="block text-gray-700 font-medium mb-2">Email *</label>
                                        <input
                                            type="email"
                                            name="email"
                                            value={formData.email}
                                            onChange={handleChange}
                                            required
                                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-deep-blue focus:border-transparent outline-none"
                                            placeholder="Nhập email"
                                        />
                                    </div>

                                    <div>
                                        <label className="block text-gray-700 font-medium mb-2">Số điện thoại *</label>
                                        <input
                                            type="tel"
                                            name="phone"
                                            value={formData.phone}
                                            onChange={handleChange}
                                            required
                                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-deep-blue focus:border-transparent outline-none"
                                            placeholder="Nhập số điện thoại"
                                        />
                                    </div>

                                    <div>
                                        <label className="block text-gray-700 font-medium mb-2">Tin nhắn *</label>
                                        <textarea
                                            name="message"
                                            value={formData.message}
                                            onChange={handleChange}
                                            required
                                            rows={4}
                                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-deep-blue focus:border-transparent outline-none resize-none"
                                            placeholder="Nhập nội dung tin nhắn"
                                        />
                                    </div>

                                    <motion.button
                                        type="submit"
                                        whileHover={{ scale: 1.02 }}
                                        whileTap={{ scale: 0.98 }}
                                        className="w-full bg-gradient-to-r from-deep-blue to-blue-700 text-white py-4 rounded-lg font-semibold hover:shadow-lg transition flex items-center justify-center"
                                    >
                                        <Send className="w-5 h-5 mr-2" />
                                        Gửi tin nhắn
                                    </motion.button>
                                </form>
                            )}
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Map Section */}
            <section className="py-16 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-3xl font-bold text-center text-gray-800 mb-8 font-heading">Vị trí của chúng tôi</h2>
                    <div className="bg-gray-200 rounded-2xl overflow-hidden h-96 flex items-center justify-center">
                        <p className="text-gray-500">Google Maps sẽ được tích hợp tại đây</p>
                    </div>
                </div>
            </section>
        </motion.div>
    );
};

export default ContactPage;

import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Facebook, Twitter, Instagram, Clock } from 'lucide-react';
import { Link } from 'react-router-dom';
import Logo from './Logo';

const Footer: React.FC = () => {
    return (
        <footer className="bg-gray-900 text-white pt-12 pb-6">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
                    {/* Company Info */}
                    <div>
                        <Logo className="mb-4" />
                        <p className="text-gray-400 mb-4">
                            Chăm sóc sức khỏe tận tâm, phục vụ cộng đồng với trái tim và sự chuyên nghiệp.
                        </p>
                        <div className="flex space-x-4">
                            <motion.a
                                href="#"
                                whileHover={{ scale: 1.1, y: -2 }}
                                className="bg-blue-600 p-2 rounded-full hover:bg-blue-700 transition"
                            >
                                <Facebook className="w-5 h-5" />
                            </motion.a>
                            <motion.a
                                href="#"
                                whileHover={{ scale: 1.1, y: -2 }}
                                className="bg-blue-400 p-2 rounded-full hover:bg-blue-500 transition"
                            >
                                <Twitter className="w-5 h-5" />
                            </motion.a>
                            <motion.a
                                href="#"
                                whileHover={{ scale: 1.1, y: -2 }}
                                className="bg-pink-600 p-2 rounded-full hover:bg-pink-700 transition"
                            >
                                <Instagram className="w-5 h-5" />
                            </motion.a>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="text-lg font-semibold mb-4">Liên kết nhanh</h4>
                        <ul className="space-y-2 text-gray-400">
                            <li>
                                <Link to="/" className="hover:text-teal-green transition">Trang chủ</Link>
                            </li>
                            <li>
                                <Link to="/services" className="hover:text-teal-green transition">Dịch vụ</Link>
                            </li>
                            <li>
                                <Link to="/doctors" className="hover:text-teal-green transition">Bác sĩ</Link>
                            </li>
                            <li>
                                <Link to="/appointments" className="hover:text-teal-green transition">Đặt lịch</Link>
                            </li>
                            <li>
                                <Link to="/about" className="hover:text-teal-green transition">Về chúng tôi</Link>
                            </li>
                            <li>
                                <Link to="/contact" className="hover:text-teal-green transition">Liên hệ</Link>
                            </li>
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div>
                        <h4 className="text-lg font-semibold mb-4">Liên hệ</h4>
                        <ul className="space-y-3 text-gray-400">
                            <li className="flex items-start">
                                <MapPin className="w-5 h-5 mr-2 mt-1 flex-shrink-0 text-teal-green" />
                                <span>123 Đường ABC, Quận 1, TP. Hồ Chí Minh</span>
                            </li>
                            <li className="flex items-center">
                                <Phone className="w-5 h-5 mr-2 flex-shrink-0 text-teal-green" />
                                <a href="tel:0281234567" className="hover:text-white transition">028 1234 567</a>
                            </li>
                            <li className="flex items-center">
                                <Mail className="w-5 h-5 mr-2 flex-shrink-0 text-teal-green" />
                                <a href="mailto:info@medicare.vn" className="hover:text-white transition">info@medicare.vn</a>
                            </li>
                        </ul>
                    </div>

                    {/* Emergency */}
                    <div>
                        <h4 className="text-lg font-semibold mb-4">Cấp cứu 24/7</h4>
                        <motion.div
                            whileHover={{ scale: 1.05 }}
                            className="bg-gradient-to-r from-red-600 to-red-700 rounded-lg p-4 mb-4 shadow-glow"
                        >
                            <p className="text-sm mb-2">Đường dây nóng cấp cứu</p>
                            <a href="tel:1900-1234" className="text-2xl font-bold hover:text-gray-200 transition">
                                1900-1234
                            </a>
                        </motion.div>
                        <div className="text-gray-400 text-sm space-y-1">
                            <div className="flex items-center">
                                <Clock className="w-4 h-4 mr-2 text-teal-green" />
                                <span>Thứ 2-6: 8:00 - 20:00</span>
                            </div>
                            <div className="flex items-center">
                                <Clock className="w-4 h-4 mr-2 text-teal-green" />
                                <span>Thứ 7-CN: 8:00 - 17:00</span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="border-t border-gray-800 pt-6 text-center text-gray-400 text-sm">
                    <p>&copy; 2026 MediCare+. Bản quyền thuộc về MediCare+. Thiết kế bởi Antigravity.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;

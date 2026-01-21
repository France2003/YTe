import React from 'react';
import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';
import { staggerContainer, fadeInUp } from '../animations/pageTransitions';

interface Testimonial {
    name: string;
    role: string;
    rating: number;
    text: string;
    avatar: string;
}

const Testimonials: React.FC = () => {
    const testimonials: Testimonial[] = [
        {
            name: 'Nguyễn Thị Mai',
            role: 'Bệnh nhân',
            rating: 5,
            text: 'Dịch vụ tuyệt vời, bác sĩ rất tận tâm và chuyên nghiệp. Tôi rất hài lòng với sự chăm sóc mà tôi nhận được.',
            avatar: '👩'
        },
        {
            name: 'Trần Văn Hùng',
            role: 'Bệnh nhân',
            rating: 5,
            text: 'Cơ sở vật chất hiện đại, nhân viên thân thiện. Quy trình khám bệnh nhanh chóng và hiệu quả.',
            avatar: '👨'
        },
        {
            name: 'Lê Thị Hương',
            role: 'Bệnh nhân',
            rating: 5,
            text: 'Tôi đã điều trị ở đây được 2 năm, luôn cảm thấy an tâm với đội ngũ y bác sĩ giàu kinh nghiệm.',
            avatar: '👩'
        },
        {
            name: 'Phạm Minh Tuấn',
            role: 'Bệnh nhân',
            rating: 5,
            text: 'Giá cả hợp lý, chất lượng dịch vụ tốt. Đặc biệt là thái độ phục vụ nhiệt tình của toàn bộ nhân viên.',
            avatar: '👨'
        }
    ];

    return (
        <section id="testimonials" className="py-16 bg-sky-blue">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-12"
                >
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4 font-heading">
                        Đánh giá từ bệnh nhân
                    </h2>
                    <p className="text-gray-600 text-lg">
                        Những phản hồi chân thành từ bệnh nhân của chúng tôi
                    </p>
                </motion.div>

                <motion.div
                    variants={staggerContainer}
                    initial="initial"
                    whileInView="animate"
                    viewport={{ once: true, amount: 0.1 }}
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
                >
                    {testimonials.map((testimonial, index) => (
                        <motion.div
                            key={index}
                            variants={fadeInUp}
                            whileHover={{ y: -10, boxShadow: '0 20px 40px rgba(0,0,0,0.1)' }}
                            className="bg-white rounded-xl p-6 shadow-md hover:shadow-xl transition-all duration-300"
                        >
                            <motion.div
                                className="flex items-center mb-4"
                                whileHover={{ scale: 1.1 }}
                            >
                                <Quote className="text-teal-green w-8 h-8 opacity-50" />
                            </motion.div>

                            <div className="flex mb-4">
                                {[...Array(testimonial.rating)].map((_, i) => (
                                    <motion.div
                                        key={i}
                                        initial={{ opacity: 0, scale: 0 }}
                                        whileInView={{ opacity: 1, scale: 1 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: index * 0.1 + i * 0.05 }}
                                    >
                                        <Star className="w-5 h-5 text-yellow-400 fill-current" />
                                    </motion.div>
                                ))}
                            </div>

                            <p className="text-gray-600 mb-6 text-sm leading-relaxed">
                                "{testimonial.text}"
                            </p>

                            <div className="flex items-center">
                                <motion.div
                                    className="text-3xl mr-3"
                                    whileHover={{ scale: 1.2, rotate: 10 }}
                                >
                                    {testimonial.avatar}
                                </motion.div>
                                <div>
                                    <h4 className="font-semibold text-gray-800">{testimonial.name}</h4>
                                    <p className="text-gray-500 text-sm">{testimonial.role}</p>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default Testimonials;

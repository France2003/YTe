import { motion } from 'framer-motion';
import { Calendar, ArrowRight, User } from 'lucide-react';
import { Link } from 'react-router-dom';

const articles = [
    {
        id: 1,
        title: "5 Dấu hiệu cảnh báo bệnh tim mạch bạn không nên bỏ qua",
        excerpt: "Bệnh tim mạch là nguyên nhân gây tử vong hàng đầu. Hãy tìm hiểu 5 dấu hiệu sớm để phòng tránh kịp thời...",
        date: "20/01/2026",
        author: "BS. Nguyễn Văn An",
        image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
        category: "Sức khỏe tim mạch"
    },
    {
        id: 2,
        title: "Chế độ dinh dưỡng khoa học cho người tiểu đường",
        excerpt: "Kiểm soát chế độ ăn uống là chìa khóa vàng giúp người bệnh tiểu đường sống khỏe mạnh và ngăn ngừa biến chứng...",
        date: "18/01/2026",
        author: "BS. Trần Thị Bình",
        image: "https://images.unsplash.com/photo-1490645935967-10de6ba17061?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
        category: "Dinh dưỡng"
    },
    {
        id: 3,
        title: "Tầm quan trọng của việc khám sức khỏe định kỳ",
        excerpt: "Khám sức khỏe tổng quát định kỳ mỗi 6 tháng giúp phát hiện sớm nhiều bệnh lý nguy hiểm tiềm ẩn...",
        date: "15/01/2026",
        author: "BS. Lê Hoàng Cường",
        image: "https://images.unsplash.com/photo-1579154204601-01588f351e67?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
        category: "Y học thường thức"
    }
];

const HealthBlog = () => {
    return (
        <section className="py-20 bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col md:flex-row justify-between items-end mb-12">
                    <div className="max-w-2xl">
                        <motion.span
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            className="text-teal-green font-bold text-sm uppercase tracking-wider"
                        >
                            Tin tức y khoa
                        </motion.span>
                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.1 }}
                            className="text-3xl md:text-4xl font-bold text-gray-900 mt-2"
                        >
                            Cập nhật kiến thức sức khỏe
                        </motion.h2>
                    </div>
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                    >
                        <Link to="/news" className="hidden md:flex items-center text-blue-600 font-medium hover:text-blue-800 transition">
                            Xem tất cả bài viết <ArrowRight className="w-4 h-4 ml-1" />
                        </Link>
                    </motion.div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {articles.map((article, index) => (
                        <motion.article
                            key={article.id}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2 + index * 0.1 }}
                            className="bg-white rounded-2xl shadow-sm hover:shadow-xl transition-all overflow-hidden border border-gray-100 flex flex-col h-full group"
                        >
                            <div className="relative h-48 overflow-hidden">
                                <img
                                    src={article.image}
                                    alt={article.title}
                                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                />
                                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-bold text-teal-700">
                                    {article.category}
                                </div>
                            </div>
                            <div className="p-6 flex-1 flex flex-col">
                                <div className="flex items-center gap-4 text-xs text-gray-500 mb-3">
                                    <div className="flex items-center gap-1">
                                        <Calendar className="w-3 h-3" />
                                        {article.date}
                                    </div>
                                    <div className="flex items-center gap-1">
                                        <User className="w-3 h-3" />
                                        {article.author}
                                    </div>
                                </div>
                                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors line-clamp-2">
                                    <a href="#">{article.title}</a>
                                </h3>
                                <p className="text-gray-600 text-sm mb-4 line-clamp-3">{article.excerpt}</p>
                                <div className="mt-auto pt-4 border-t border-gray-100">
                                    <a href="#" className="inline-flex items-center text-sm font-semibold text-teal-green hover:text-teal-700 transition">
                                        Đọc tiếp <ArrowRight className="w-4 h-4 ml-1" />
                                    </a>
                                </div>
                            </div>
                        </motion.article>
                    ))}
                </div>

                <div className="mt-8 text-center md:hidden">
                    <Link to="/news" className="inline-flex items-center text-blue-600 font-medium hover:text-blue-800 transition">
                        Xem tất cả bài viết <ArrowRight className="w-4 h-4 ml-1" />
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default HealthBlog;

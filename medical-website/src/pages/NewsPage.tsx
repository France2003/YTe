import { motion } from 'framer-motion';
import { Calendar, User, ArrowRight, Search, Tag } from 'lucide-react';
import { pageVariants } from '../animations/pageTransitions';
import SEO from '../components/SEO';
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
    },
    {
        id: 4,
        title: "Bí quyết chăm sóc da mùa hanh khô",
        excerpt: "Thời tiết hanh khô khiến da dễ bị nứt nẻ, lão hóa. Cùng chuyên gia da liễu tìm hiểu cách chăm sóc da đúng cách.",
        date: "12/01/2026",
        author: "BS. Phạm Thị Dung",
        image: "https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
        category: "Da liễu"
    },
    {
        id: 5,
        title: "Các bài tập phục hồi chức năng sau chấn thương",
        excerpt: "Hướng dẫn các bài tập đơn giản tại nhà giúp phục hồi chức năng vận động nhanh chóng và an toàn.",
        date: "10/01/2026",
        author: "BS. Hoàng Minh Đức",
        image: "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
        category: "Vật lý trị liệu"
    },
    {
        id: 6,
        title: "Bảo vệ mắt khi làm việc với máy tính",
        excerpt: "Hội chứng thị giác màn hình đang ngày càng phổ biến. Áp dụng ngay quy tắc 20-20-20 để bảo vệ đôi mắt của bạn.",
        date: "08/01/2026",
        author: "BS. Vũ Thị Hoa",
        image: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
        category: "Nhãn khoa"
    }
];

const categories = ["Tất cả", "Sức khỏe tim mạch", "Dinh dưỡng", "Da liễu", "Nhi khoa", "Y học thường thức"];

const NewsPage = () => {
    return (
        <motion.div
            variants={pageVariants}
            initial="initial"
            animate="animate"
            exit="exit"
        >
            <SEO
                title="Tin tức y khoa"
                description="Cập nhật những thông tin y tế mới nhất, kiến thức chăm sóc sức khỏe từ đội ngũ chuyên gia của MediCare+."
            />

            {/* Hero Section */}
            <section className="bg-gradient-to-r from-teal-50 to-blue-50 py-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <motion.span
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-teal-green font-bold text-sm uppercase tracking-wider"
                    >
                        Kiến thức & Tin tức
                    </motion.span>
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="text-4xl md:text-5xl font-bold text-gray-900 mt-2 mb-6"
                    >
                        Sống khỏe mỗi ngày cùng MediCare+
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="text-gray-600 max-w-2xl mx-auto text-lg"
                    >
                        Nơi chia sẻ kiến thức y khoa chính thống, mẹo chăm sóc sức khỏe và tin tức hoạt động từ bệnh viện.
                    </motion.p>
                </div>
            </section>

            {/* Content Section */}
            <section className="py-16 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    {/* Search & Filter */}
                    <div className="flex flex-col md:flex-row justify-between items-center gap-6 mb-12">
                        <div className="flex flex-wrap gap-2 justify-center md:justify-start">
                            {categories.map((cat, index) => (
                                <button
                                    key={index}
                                    className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${index === 0
                                        ? 'bg-teal-green text-white shadow-md'
                                        : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                                        }`}
                                >
                                    {cat}
                                </button>
                            ))}
                        </div>
                        <div className="relative w-full md:w-72">
                            <input
                                type="text"
                                placeholder="Tìm kiếm bài viết..."
                                className="w-full pl-10 pr-4 py-2 border border-gray-200 rounded-full focus:outline-none focus:ring-2 focus:ring-teal-green focus:border-transparent"
                            />
                            <Search className="w-4 h-4 text-gray-400 absolute left-3 top-1/2 -translate-y-1/2" />
                        </div>
                    </div>

                    {/* Articles Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {articles.map((article, index) => (
                            <motion.article
                                key={article.id}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.1 }}
                                className="bg-white rounded-2xl shadow-sm hover:shadow-xl transition-all overflow-hidden border border-gray-100 flex flex-col h-full group"
                            >
                                <div className="relative h-56 overflow-hidden">
                                    <img
                                        src={article.image}
                                        alt={article.title}
                                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                    />
                                    <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-bold text-teal-700 flex items-center gap-1">
                                        <Tag className="w-3 h-3" />
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
                                        <Link to={`/news/${article.id}`}>{article.title}</Link>
                                    </h3>
                                    <p className="text-gray-600 text-sm mb-4 line-clamp-3">{article.excerpt}</p>
                                    <div className="mt-auto pt-4 border-t border-gray-100">
                                        <Link to={`/news/${article.id}`} className="inline-flex items-center text-sm font-semibold text-teal-green hover:text-teal-700 transition">
                                            Đọc tiếp <ArrowRight className="w-4 h-4 ml-1" />
                                        </Link>
                                    </div>
                                </div>
                            </motion.article>
                        ))}
                    </div>

                    {/* Pagination */}
                    <div className="mt-12 flex justify-center gap-2">
                        <button className="w-10 h-10 rounded-lg flex items-center justify-center bg-teal-green text-white font-bold shadow-md">1</button>
                        <button className="w-10 h-10 rounded-lg flex items-center justify-center bg-gray-100 text-gray-600 hover:bg-gray-200 transition">2</button>
                        <button className="w-10 h-10 rounded-lg flex items-center justify-center bg-gray-100 text-gray-600 hover:bg-gray-200 transition">3</button>
                        <button className="w-10 h-10 rounded-lg flex items-center justify-center bg-gray-100 text-gray-600 hover:bg-gray-200 transition"><ArrowRight className="w-4 h-4" /></button>
                    </div>
                </div>
            </section>
        </motion.div>
    );
};

export default NewsPage;

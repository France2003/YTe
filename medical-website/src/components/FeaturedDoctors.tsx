import { motion } from 'framer-motion';
import { Linkedin, Twitter, Facebook } from 'lucide-react';
import { Link } from 'react-router-dom';

const doctors = [
    {
        name: "BS. Trần Thị Bình",
        specialty: "Nhi khoa",
        image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
        bio: "Chuyên gia với 12 năm kinh nghiệm chăm sóc sức khỏe toàn diện cho trẻ em."
    },
    {
        name: "BS. Nguyễn Văn An",
        specialty: "Tim mạch",
        image: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
        bio: "Trưởng khoa Tim mạch với 15 năm kinh nghiệm điều trị các bệnh lý phức tạp."
    },
    {
        name: "BS. Phạm Thị Dung",
        specialty: "Da liễu",
        image: "https://images.unsplash.com/photo-1594824476967-48c8b964273f?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
        bio: "Bác sĩ tận tâm, chuyên sâu về thẩm mỹ da và điều trị các vấn đề da liễu."
    },
    {
        name: "BS. Hoàng Minh Đức",
        specialty: "Chấn thương chỉnh hình",
        image: "https://images.unsplash.com/photo-1622253692010-333f2da6031d?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
        bio: "Chuyên gia phẫu thuật xương khớp và phục hồi chức năng thể thao."
    }
];

const FeaturedDoctors = () => {
    return (
        <section className="py-20 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12">
                    <motion.span
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        className="text-teal-green font-bold text-sm uppercase tracking-wider"
                    >
                        Đội ngũ của chúng tôi
                    </motion.span>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="text-3xl md:text-4xl font-bold text-gray-900 mt-2"
                    >
                        Bác sĩ chuyên khoa hàng đầu
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="text-gray-600 mt-4 max-w-2xl mx-auto"
                    >
                        Tự hào với đội ngũ y bác sĩ giỏi chuyên môn, giàu y đức và luôn tận tâm với người bệnh.
                    </motion.p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                    {doctors.map((doctor, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2 + index * 0.1 }}
                            whileHover={{ y: -10 }}
                            className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all overflow-hidden border border-gray-100 group"
                        >
                            <div className="relative h-64 overflow-hidden">
                                <img
                                    src={doctor.image}
                                    alt={doctor.name}
                                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end justify-center pb-6">
                                    <div className="flex gap-4 text-white">
                                        <a href="#" className="hover:text-teal-400 transition"><Facebook className="w-5 h-5" /></a>
                                        <a href="#" className="hover:text-teal-400 transition"><Twitter className="w-5 h-5" /></a>
                                        <a href="#" className="hover:text-teal-400 transition"><Linkedin className="w-5 h-5" /></a>
                                    </div>
                                </div>
                            </div>
                            <div className="p-6 text-center">
                                <span className="text-teal-green font-medium text-xs uppercase tracking-wide bg-teal-50 px-2 py-1 rounded-full mb-3 inline-block">
                                    {doctor.specialty}
                                </span>
                                <h3 className="font-bold text-gray-900 text-lg mb-2">{doctor.name}</h3>
                                <p className="text-gray-500 text-sm line-clamp-2">{doctor.bio}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>

                <div className="text-center mt-12">
                    <Link
                        to="/doctors"
                        className="inline-flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-full text-white bg-blue-600 hover:bg-blue-700 md:text-lg transition-all shadow-lg hover:shadow-blue-300"
                    >
                        Xem tất cả bác sĩ
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default FeaturedDoctors;

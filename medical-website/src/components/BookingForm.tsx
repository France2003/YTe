import React, { useState } from 'react';
import { Calendar, User, Phone, Building2, CheckCircle } from 'lucide-react';

interface FormData {
    name: string;
    phone: string;
    department: string;
    date: string;
}

const BookingForm: React.FC = () => {
    const [formData, setFormData] = useState<FormData>({
        name: '',
        phone: '',
        department: '',
        date: ''
    });
    const [isSubmitted, setIsSubmitted] = useState<boolean>(false);

    const departments: string[] = [
        'Nội khoa',
        'Nhi khoa',
        'Tim mạch',
        'Chấn thương chỉnh hình',
        'Da liễu',
        'Mắt',
        'Thần kinh',
        'Dược lâm sàng'
    ];

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (formData.name && formData.phone && formData.department && formData.date) {
            setIsSubmitted(true);
            setTimeout(() => {
                setIsSubmitted(false);
                setFormData({ name: '', phone: '', department: '', date: '' });
            }, 3000);
        }
    };

    return (
        <section id="booking" className="py-16 bg-gradient-to-br from-deep-blue to-blue-800">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                        Đặt lịch khám bệnh
                    </h2>
                    <p className="text-blue-100 text-lg">
                        Điền thông tin để đặt lịch khám với bác sĩ chuyên khoa
                    </p>
                </div>

                <div className="bg-white rounded-2xl shadow-2xl p-8 md:p-10">
                    {isSubmitted ? (
                        <div className="text-center py-12">
                            <div className="flex justify-center mb-4">
                                <CheckCircle className="w-20 h-20 text-teal-green" />
                            </div>
                            <h3 className="text-2xl font-bold text-gray-800 mb-2">Đặt lịch thành công!</h3>
                            <p className="text-gray-600">
                                Chúng tôi sẽ liên hệ với bạn trong thời gian sớm nhất để xác nhận lịch khám.
                            </p>
                        </div>
                    ) : (
                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div>
                                <label className="block text-gray-700 font-medium mb-2">
                                    Họ và tên <span className="text-red-500">*</span>
                                </label>
                                <div className="relative">
                                    <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                                    <input
                                        type="text"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        required
                                        placeholder="Nhập họ và tên của bạn"
                                        className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-deep-blue focus:border-transparent outline-none"
                                    />
                                </div>
                            </div>

                            <div>
                                <label className="block text-gray-700 font-medium mb-2">
                                    Số điện thoại <span className="text-red-500">*</span>
                                </label>
                                <div className="relative">
                                    <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                                    <input
                                        type="tel"
                                        name="phone"
                                        value={formData.phone}
                                        onChange={handleChange}
                                        required
                                        placeholder="Nhập số điện thoại"
                                        className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-deep-blue focus:border-transparent outline-none"
                                    />
                                </div>
                            </div>

                            <div>
                                <label className="block text-gray-700 font-medium mb-2">
                                    Chuyên khoa <span className="text-red-500">*</span>
                                </label>
                                <div className="relative">
                                    <Building2 className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                                    <select
                                        name="department"
                                        value={formData.department}
                                        onChange={handleChange}
                                        required
                                        className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-deep-blue focus:border-transparent outline-none bg-white appearance-none"
                                    >
                                        <option value="">Chọn chuyên khoa</option>
                                        {departments.map((dept, index) => (
                                            <option key={index} value={dept}>{dept}</option>
                                        ))}
                                    </select>
                                </div>
                            </div>

                            <div>
                                <label className="block text-gray-700 font-medium mb-2">
                                    Ngày khám <span className="text-red-500">*</span>
                                </label>
                                <div className="relative">
                                    <Calendar className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                                    <input
                                        type="date"
                                        name="date"
                                        value={formData.date}
                                        onChange={handleChange}
                                        required
                                        min={new Date().toISOString().split('T')[0]}
                                        className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-deep-blue focus:border-transparent outline-none"
                                    />
                                </div>
                            </div>

                            <button
                                type="submit"
                                className="w-full bg-teal-green text-white py-4 rounded-lg font-semibold text-lg hover:bg-teal-600 transition transform hover:scale-105 shadow-lg"
                            >
                                Xác nhận đặt lịch
                            </button>
                        </form>
                    )}
                </div>
            </div>
        </section>
    );
};

export default BookingForm;

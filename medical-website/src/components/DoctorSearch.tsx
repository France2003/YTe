import React, { useState } from 'react';
import { Search, Award } from 'lucide-react';

interface Doctor {
    name: string;
    specialty: string;
    experience: string;
    image: string;
}

const DoctorSearch: React.FC = () => {
    const [searchTerm, setSearchTerm] = useState<string>('');
    const [selectedSpecialty, setSelectedSpecialty] = useState<string>('all');

    const doctors: Doctor[] = [
        {
            name: 'BS. Nguyễn Văn An',
            specialty: 'Tim mạch',
            experience: '15 năm kinh nghiệm',
            image: '👨‍⚕️'
        },
        {
            name: 'BS. Trần Thị Bình',
            specialty: 'Nhi khoa',
            experience: '12 năm kinh nghiệm',
            image: '👩‍⚕️'
        },
        {
            name: 'BS. Lê Hoàng Cường',
            specialty: 'Nội khoa',
            experience: '20 năm kinh nghiệm',
            image: '👨‍⚕️'
        },
        {
            name: 'BS. Phạm Thị Dung',
            specialty: 'Da liễu',
            experience: '10 năm kinh nghiệm',
            image: '👩‍⚕️'
        },
        {
            name: 'BS. Hoàng Minh Đức',
            specialty: 'Chấn thương chỉnh hình',
            experience: '18 năm kinh nghiệm',
            image: '👨‍⚕️'
        },
        {
            name: 'BS. Vũ Thị Hoa',
            specialty: 'Mắt',
            experience: '14 năm kinh nghiệm',
            image: '👩‍⚕️'
        }
    ];

    const specialties: string[] = ['all', 'Tim mạch', 'Nhi khoa', 'Nội khoa', 'Da liễu', 'Chấn thương chỉnh hình', 'Mắt'];

    const filteredDoctors = doctors.filter(doctor => {
        const matchesSearch = doctor.name.toLowerCase().includes(searchTerm.toLowerCase());
        const matchesSpecialty = selectedSpecialty === 'all' || doctor.specialty === selectedSpecialty;
        return matchesSearch && matchesSpecialty;
    });

    return (
        <section id="doctors" className="py-16 bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
                        Đội ngũ bác sĩ
                    </h2>
                    <p className="text-gray-600 text-lg">
                        Tìm kiếm bác sĩ phù hợp với nhu cầu của bạn
                    </p>
                </div>

                {/* Search and Filter */}
                <div className="mb-8 flex flex-col md:flex-row gap-4 max-w-4xl mx-auto">
                    <div className="flex-1 relative">
                        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                        <input
                            type="text"
                            placeholder="Tìm kiếm theo tên bác sĩ..."
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                            className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-deep-blue focus:border-transparent outline-none"
                        />
                    </div>
                    <select
                        value={selectedSpecialty}
                        onChange={(e) => setSelectedSpecialty(e.target.value)}
                        className="px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-deep-blue focus:border-transparent outline-none bg-white"
                    >
                        <option value="all">Tất cả chuyên khoa</option>
                        {specialties.slice(1).map((specialty, index) => (
                            <option key={index} value={specialty}>{specialty}</option>
                        ))}
                    </select>
                </div>

                {/* Doctor Cards */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {filteredDoctors.map((doctor, index) => (
                        <div
                            key={index}
                            className="bg-white rounded-xl p-6 shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
                        >
                            <div className="text-center">
                                <div className="text-6xl mb-4">{doctor.image}</div>
                                <h3 className="text-xl font-semibold text-gray-800 mb-2">{doctor.name}</h3>
                                <p className="text-teal-green font-medium mb-2">{doctor.specialty}</p>
                                <div className="flex items-center justify-center text-gray-600 text-sm">
                                    <Award className="w-4 h-4 mr-1" />
                                    {doctor.experience}
                                </div>
                                <button className="mt-4 w-full bg-deep-blue text-white py-2 rounded-lg hover:bg-blue-800 transition">
                                    Đặt lịch khám
                                </button>
                            </div>
                        </div>
                    ))}
                </div>

                {filteredDoctors.length === 0 && (
                    <div className="text-center py-12">
                        <p className="text-gray-500 text-lg">Không tìm thấy bác sĩ phù hợp</p>
                    </div>
                )}
            </div>
        </section>
    );
};

export default DoctorSearch;

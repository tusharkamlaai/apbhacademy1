import React from 'react';
import teacher from '../../assets/teachers.png';
import growth from '../../assets/growth.png';
import delivery from '../../assets/delivery.png';


import Image from 'next/image'
const LearningJourney = () => {
    return (
        <div className="bg-purple-50  py-16">
            <span className='block text-gray-700 text-2xl text-center mb-[80px] font-semibold'> Start your Learning Journey Today!</span>
            <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">

                <div className="bg-purple-200 rounded-lg p-6 text-center shadow-lg">
                    <div className="mb-4">
                        <Image className=" mx-auto" src={teacher} alt="Description" width={90} height={90} />
                    </div>
                    <h3 className="font-semibold text-lg">World Class Training Centers</h3>
                    <p className="mt-2 text-sm">
                        24 fixed setups present in major metro and tier one towns across the country.
                    </p>
                </div>

                <div className="bg-purple-200 rounded-lg p-6 text-center shadow-lg">
                    <div className="mb-4">
                        <Image className=" mx-auto" src={growth} alt="Description" width={90} height={90} />
                    </div>
                    <h3 className="font-semibold text-lg">Market-Driven Courses</h3>
                    <p className="mt-2 text-sm">
                        Asian Paints, through its courses, aims to impart skill education and enhance
                        productivity of people in paint application.
                    </p>
                </div>

                <div className="bg-purple-200 rounded-lg p-6 text-center shadow-lg">
                    <div className="mb-4">
                        <Image className=" mx-auto" src={delivery} alt="Description" width={90} height={90} />
                    </div>
                    <h3 className="font-semibold text-lg">Mobile Colour Academy</h3>
                    <p className="mt-2 text-sm">
                        53 mobile setups to effectively reach every corner of the country.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default LearningJourney;

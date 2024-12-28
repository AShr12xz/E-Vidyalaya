import React from 'react';
import CountUp from 'react-countup';

const Countup = () => {
    return (
        <div className="bg-gray-50 py-16">
            <div className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-10">
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-10 text-center">
                    {/* Courses CountUp */}
                    <div className="bg-white rounded-lg shadow-lg p-6 transform hover:scale-105 transition-transform duration-300">
                        <h2 className="text-4xl font-bold text-gray-800">
                            <CountUp start={0} end={100} duration={2.5} suffix="+" />
                        </h2>
                        <p className="mt-3 text-lg font-medium text-gray-600">Courses</p>
                    </div>
                    {/* Teachers CountUp */}
                    <div className="bg-white rounded-lg shadow-lg p-6 transform hover:scale-110 transition-transform duration-300">
                        <h2 className="text-4xl font-bold text-gray-800">
                            <CountUp start={0} end={30} duration={2.5} suffix="+" />
                        </h2>
                        <p className="mt-3 text-lg font-medium text-gray-600">Teachers</p>
                    </div>
                    {/* Hours of Studying CountUp */}
                    <div className="bg-white rounded-lg shadow-lg p-6 transform hover:scale-105 transition-transform duration-300">
                        <h2 className="text-4xl font-bold text-gray-800">
                            <CountUp start={0} end={1000} duration={2.5} suffix="+" />
                        </h2>
                        <p className="mt-3 text-lg font-medium text-gray-600">Hours of Studying</p>
                    </div>
                    {/* Students CountUp */}
                    <div className="bg-white rounded-lg shadow-lg p-6 transform hover:scale-105 transition-transform duration-300">
                        <h2 className="text-4xl font-bold text-gray-800">
                            <CountUp start={0} end={1000} duration={2.5} suffix="+" />
                        </h2>
                        <p className="mt-3 text-lg font-medium text-gray-600">Students</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Countup;

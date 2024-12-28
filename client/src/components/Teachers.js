import React, { useState, useEffect } from 'react';
import Card from './Card';

const Teachers = () => {
    // const [showAll, setShowAll] = useState(false);
    const [teachers, setTeachers] = useState([]);

    // Fetch teacher data from the JSON file
    const getData = () => {
        fetch('/utils/teachers.json', {
            headers: {
                'Content-Type': 'application/json',
                Accept: 'application/json',
            },
        })
            .then((response) => {
                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }
                return response.json();
            })
            .then((data) => setTeachers(data))
            .catch((error) => console.error('Error fetching JSON:', error));
    };

    useEffect(() => {
        getData();
    }, []);

    // const visibleTeachers = showAll ? teachers : teachers.slice(0, 8);

    return (
        <div className="container mx-auto px-4 lg:px-20 py-12">
            {/* Header */}
            <h1 className="text-4xl font-bold text-center text-gray-800 mb-10">
                Meet <span className="text-blue-600">Our Teachers</span>
            </h1>

            {/* Teacher Cards */}
            <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {teachers.map((teacher) => (
                    <Card
                        key={teacher.Name}
                        image={teacher.Image}
                        name={teacher.Name}
                        subject={teacher.Subject}
                    />
                ))}
            </div>

            {/* Show More / Show Less Button */}
            {/* <div className="flex justify-center mt-10">
                <button
                    className="px-6 py-3 text-white bg-blue-600 hover:bg-blue-500 rounded-lg shadow-md transition duration-300"
                    onClick={() => setShowAll(!showAll)}
                >
                    {showAll ? 'Show Less' : 'Show All'}
                </button>
            </div> */}
        </div>
    );
};

export default Teachers;

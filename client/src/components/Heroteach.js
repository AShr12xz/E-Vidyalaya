import React from 'react'
import { useState, useEffect } from 'react';
// import { useNavigate } from 'react-router-dom';
import Card from './Card';

const Heroteach = () => {
    const [teacher, setTeacher] = useState([]);
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
            .then((data) => setTeacher(data))
            .catch((error) => console.error('Error fetching JSON:', error));
    }
    useEffect(() => {
        getData();
    }, []);
    const teach = teacher.slice(0, 4);
    return (
        <div>
            <div className="container mx-auto px-4 lg:px-32 py-12">
                {/* Header */}
                <h1 className="text-4xl font-bold text-center text-gray-800 mb-10">
                    Our <span className="text-blue-600">Esteemed Teachers</span>
                </h1>

                {/* Teacher Cards */}
                <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {teach.map((teacher) => (
                        <Card
                            key={teacher.Name}
                            image={teacher.Image}
                            name={teacher.Name}
                            subject={teacher.Subject}
                        />
                    ))}
                </div>
            </div>
            {/* button for see more */}
            <div className="flex justify-center mb-10">
                <button
                    className="bg-blue-200 hover:bg-blue-300 hover:text-gray-800 text-gray-600 font-medium text-lg px-8 py-3 rounded-full shadow-lg transition-transform transform hover:scale-105" onClick={() => (window.location.href = '/teachers')}>
                    See More
                </button>
            </div>
        </div>
    )
}

export default Heroteach

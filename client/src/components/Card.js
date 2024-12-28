const Card = ({ image, name, subject }) => {
    return (
        <div className="bg-white rounded-lg shadow-lg p-2 flex flex-col items-center text-center transition-transform duration-300 hover:scale-105">
            {/* Teacher Image */}
            <img
                src={`/Teachers/${image}`}
                alt={name}
                className="w-64 h-64 mb-4 rounded-lg object-cover"
            />

            {/* Teacher Name */}
            <h3 className="text-lg font-semibold text-gray-600 mb-1" style={{fontFamily: 'Merriweather'}}>{name}</h3>

            {/* Teacher Subject */}
            <p className="text-gray-600 pb-6" style={{fontFamily: "Compact"}}>{subject}</p>
        </div>
    );
};

export default Card;

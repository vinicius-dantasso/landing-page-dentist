function Card({ treatment }) {
    return (
        <div className="group cursor-pointer overflow-hidden rounded-2xl shadow-lg transition-all duration-500 hover:shadow-xl">

            <div className="relative w-full h-72 bg-black/70 flex items-center justify-center">
                <img 
                    src={treatment.image} 
                    alt={treatment.name} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>

                <div className="absolute bottom-0 left-0 w-full p-6 text-white">
                    <h3 className="text-xl md:text-2xl font-bold mb-2">
                        {treatment.name}
                    </h3>

                    <p className="text-gray-200 text-sm md:text-base opacity-0 transform translate-y-4 transition-all duration-500 group-hover:opacity-100 group-hover:translate-y-0">
                        {treatment.description}
                    </p>
                </div>

            </div>

        </div>
    )
}

export default Card
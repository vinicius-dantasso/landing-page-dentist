import Slider from "react-slick"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Utils from '../utils/Utils.jsx'

function Treatments() {

    const settings = {
        dots: true,
        infinite: true,
        speed: 600,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 4000,
        arrows: true,
        pauseOnHover: true,
        adaptiveHeight: true,
        customPaging: (i) => (
            <div className="w-3 h-3 bg-gray-300 rounded-full transition-all duration-300 hover:bg-gray-400"></div>
        ),
        dotsClass: "slick-dots !bottom-6"
    };

    return (
        <section id="treatments" className="py-16 px-6 md:px-12 bg-gray-50">

            <div className="max-w-6xl mx-auto">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Nossos Tratamentos</h2>
                </div>
            </div>

            <div className="max-w-4xl mx-auto">
                <Slider {...settings}>
                    {Utils.treatment.map((treatment, index) => (
                        <div key={index} className="px-4 focus:outline-none">
                            <div className="relative group cursor-pointer overflow-hidden rounded-2xl shadow-lg transition-all duration-500 hover:shadow-xl">

                                <div className="w-full h-80 md:h-[450px] flex items-center justify-center bg-black/70">
                                    <img src={treatment.image} alt={treatment.name} className="max-w-full max-h-full object-contain transition-transform duration-700 group-hover:scale-105" />
                                </div>

                                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>

                                <div className="absolute bottom-0 left-0 w-full p-6 text-white transform transition-transform duration-500 group-hover:translate-y-[-10px]">
                                    <h3 className="text-2xl md:text-3xl font-bold mb-2">
                                        {treatment.name}
                                    </h3>
                                    <p className="text-gray-200 text-lg opacity-0 transform translate-y-4 transition-all duration-500 group-hover:opacity-100 group-hover:translate-y-0">
                                        {treatment.description}
                                    </p>
                                </div>

                            </div>
                        </div>
                    ))}
                </Slider>
            </div>

        </section>
    )
}

export default Treatments
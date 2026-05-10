import Clinic1 from '../assets/Clinic_Entrance.JPG'
import Clinic2 from '../assets/Clinic_Room.JPG'

function Clinic() {
    return (
        <section id="clinic" className="py-14 px-6 md:px-12 bg-[#FAF8F4]">

            {/* Header */}
            <div className="text-center mb-10">
                <div className="flex items-center gap-[18px]">
                    <div className="flex-1 h-px bg-[#E8E2D8]"></div>
                    <h2
                        style={{ fontFamily: "'Cormorant Garamond', serif" }}
                        className="text-[32px] font-light text-[#B8985A]"
                    >
                        Nosso espaço
                    </h2>
                    <div className="flex-1 h-px bg-[#E8E2D8]"></div>
                </div>
            </div>

            {/* Imagens */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-[#E8E2D8]">
                <div className="overflow-hidden">
                    <img
                        src={Clinic1}
                        alt="Consultório - Foto 1"
                        className="w-full h-[360px] object-cover hover:scale-105 transition-transform duration-700"
                    />
                </div>
                <div className="overflow-hidden">
                    <img
                        src={Clinic2}
                        alt="Consultório - Foto 2"
                        className="w-full h-[360px] object-cover hover:scale-105 transition-transform duration-700"
                    />
                </div>
            </div>

        </section>
    )
}

export default Clinic
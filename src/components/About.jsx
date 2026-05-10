import SelfPortrait from '../assets/SelfPortrait.jpg'

function About() {
    return (
        <section id="about" className="grid grid-cols-1 md:grid-cols-2 min-h-[520px]">

            <div className="bg-[#1A1814] px-10 md:px-[52px] py-[72px] flex flex-col justify-center relative overflow-hidden">

                {/* Círculos decorativos */}
                <div className="absolute -top-10 -right-10 w-[220px] h-[220px] rounded-full border border-[#B8985A]/[0.18] pointer-events-none"></div>
                <div className="absolute -bottom-16 -left-16 w-[260px] h-[260px] rounded-full border border-[#B8985A]/[0.12] pointer-events-none"></div>

                {/* Badge */}
                <div
                    style={{ fontFamily: "'Jost', sans-serif" }}
                    className="inline-block text-[10px] tracking-[3px] uppercase text-[#B8985A] border border-[#B8985A] px-[14px] py-[6px] mb-8 w-fit"
                >
                    João Pessoa · Paraíba
                </div>

                {/* Título */}
                <h2
                    style={{ fontFamily: "'Cormorant Garamond', serif" }}
                    className="text-[40px] md:text-[46px] font-light text-white leading-[1.15] mb-6"
                >
                    Sobre <span className='text-[#B8985A]'>Mim</span>
                </h2>

                {/* Descrição */}
                <p
                    style={{ fontFamily: "'Jost', sans-serif" }}
                    className="text-[13px] text-white/60 leading-[1.85] mb-8 font-light"
                >
                    Sou cirurgiã-dentista especialista em reabilitação oral, 
                    com foco em implantes e próteses dentárias. 
                    Minha missão é oferecer tratamentos de alta complexidade com segurança, precisão e um cuidado profundamente humano — porque cada sorriso conta uma história.
                </p>

                <p
                    style={{ fontFamily: "'Jost', sans-serif" }}
                    className='uppercase text-[#B8985A]'
                >
                    CRO-PB 6125
                </p><br/>

                {/* Credenciais */}
                <div className="flex flex-col gap-3">
                    {[
                        "Graduada em Odontologia — Universidade Federal de Campina Grande",
                        "Mestre em Saúde Oral Coletiva — Universidade Federal da Paraíba",
                        "Especialista em Implantes e Prótese sobre Implantes — UNIPE",
                        "Pós-graduada em Cirurgia Oral Menor — UniFIP",
                        "Pós-graduada em Prótese Dentária — ABO/PB",
                    ].map((cred, i) => (
                        <div key={i} className="flex items-start gap-3">
                            <span className="w-[5px] h-[5px] rounded-full bg-[#B8985A] mt-[6px] shrink-0"></span>
                            <p
                                style={{ fontFamily: "'Jost', sans-serif" }}
                                className="text-[12px] text-white/55 font-light leading-relaxed"
                            >
                                {cred}
                            </p>
                        </div>
                    ))}
                </div>

            </div>

            <div className="relative min-h-[420px] md:min-h-0">
                <img
                    src={SelfPortrait}
                    alt="Foto da Dra. Isabella"
                    className="w-full h-full object-cover object-top absolute inset-0"
                />
            </div>

        </section>
    )
}

export default About
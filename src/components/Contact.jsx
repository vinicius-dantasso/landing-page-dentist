import { Instagram, MapPin, MessageCircle } from "lucide-react"

function Contact() {
    return (
        <section id="contact" className="py-14 px-6 md:px-12 bg-white">
            <div className="max-w-5xl mx-auto px-4 text-center">
                
                <div className="max-w-6xl mx-auto text-center">
                    <div className="flex items-center gap-[18px] mb-[14px]">
                        <div className="flex-1 h-px bg-[#E8E2D8]"></div>
                        <h2
                            style={{ fontFamily: "'Cormorant Garamond', serif" }}
                            className="text-[30px] font-light text-[#B8985A]"
                        >
                            Entre em Contato
                        </h2>
                        <div className="flex-1 h-px bg-[#E8E2D8]"></div>
                    </div>
                    <p
                        style={{ fontFamily: "'Jost', sans-serif" }}
                        className="text-[13px] text-[#4A4640] font-light mb-12 max-w-2xl mx-auto leading-relaxed"
                    >
                        Estamos aqui para tirar suas dúvidas e agendar sua consulta. Escolha a melhor forma de entrar em contato!
                    </p>
                </div>

                {/* Container dos ícones */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-[#E8E2D8]">
                    
                    {/* WhatsApp */}
                    <div className="flex flex-col items-center p-9 bg-white hover:bg-[#FAF8F4] transition-colors duration-200">
                        <div className="w-10 h-10 border border-[#B8985A] flex items-center justify-center mb-6">
                            <MessageCircle size={18} className="text-[#B8985A]" strokeWidth={1.5} />
                        </div>
                        <h3
                            style={{ fontFamily: "'Cormorant Garamond', serif" }}
                            className="text-[19px] font-normal text-[#1A1814] mb-3"
                        >
                            WhatsApp
                        </h3>
                        <p
                            style={{ fontFamily: "'Jost', sans-serif" }}
                            className="text-[12px] text-[#8A8680] mb-5"
                        >
                            (83) 99945-7521
                        </p>
                        <a
                            href="https://wa.me/+5583999457521"
                            target="_blank"
                            rel="noopener noreferrer"
                            style={{ fontFamily: "'Jost', sans-serif" }}
                            className="border border-[#B8985A] text-[#B8985A] hover:bg-[#B8985A] hover:text-white text-[11px] tracking-[2px] uppercase px-6 py-[10px] transition-colors duration-200"
                        >
                            Enviar Mensagem
                        </a>
                    </div>

                    {/* Instagram */}
                    <div className="flex flex-col items-center p-9 bg-white hover:bg-[#FAF8F4] transition-colors duration-200">
                        <div className="w-10 h-10 border border-[#B8985A] flex items-center justify-center mb-6">
                            <Instagram size={18} className="text-[#B8985A]" strokeWidth={1.5} />
                        </div>
                        <h3
                            style={{ fontFamily: "'Cormorant Garamond', serif" }}
                            className="text-[19px] font-normal text-[#1A1814] mb-3"
                        >
                            Instagram
                        </h3>
                        <p
                            style={{ fontFamily: "'Jost', sans-serif" }}
                            className="text-[12px] text-[#8A8680] mb-5"
                        >
                            @draisabellapmsotero
                        </p>
                        <a
                            href="https://www.instagram.com/draisabellapmsotero/"
                            target="_blank"
                            rel="noopener noreferrer"
                            style={{ fontFamily: "'Jost', sans-serif" }}
                            className="border border-[#B8985A] text-[#B8985A] hover:bg-[#B8985A] hover:text-white text-[11px] tracking-[2px] uppercase px-6 py-[10px] transition-colors duration-200"
                        >
                            Enviar Direct
                        </a>
                    </div>

                    {/* Localização */}
                    <div className="flex flex-col items-center p-9 bg-white hover:bg-[#FAF8F4] transition-colors duration-200">
                        <div className="w-10 h-10 border border-[#B8985A] flex items-center justify-center mb-6">
                            <MapPin size={18} className="text-[#B8985A]" strokeWidth={1.5} />
                        </div>
                        <h3
                            style={{ fontFamily: "'Cormorant Garamond', serif" }}
                            className="text-[19px] font-normal text-[#1A1814] mb-3"
                        >
                            Consultório
                        </h3>
                        <p
                            style={{ fontFamily: "'Jost', sans-serif" }}
                            className="text-[12px] text-[#8A8680] mb-5"
                        >
                            Av. Pres. Epitácio Pessoa, 735 <br/>João Pessoa - PB
                        </p>
                        <a
                            href="#location"
                            style={{ fontFamily: "'Jost', sans-serif" }}
                            className="border border-[#B8985A] text-[#B8985A] hover:bg-[#B8985A] hover:text-white text-[11px] tracking-[2px] uppercase px-6 py-[10px] transition-colors duration-200"
                        >
                            Como Chegar
                        </a>
                    </div>

                </div>

                {/* Informação adicional */}
                <div className="mt-12 border border-[#E8E2D8] p-6 max-w-2xl mx-auto">
                    <p
                        style={{ fontFamily: "'Jost', sans-serif" }}
                        className="text-[12px] text-[#4A4640]"
                    >
                        <strong
                            style={{ fontFamily: "'Jost', sans-serif" }}
                            className="text-[10px] tracking-[1.5px] uppercase text-[#1A1814] font-medium"
                        >
                            Horário de Atendimento:
                        </strong>{" "}
                        Segunda a Sexta das 8h às 18h · Sábado das 8h às 12h
                    </p>
                </div>

            </div>
        </section>
    )
}

export default Contact
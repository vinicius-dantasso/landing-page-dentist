import { Instagram, MapPin, MessageCircle } from "lucide-react"

function Contact() {
    return (
        <section id="contact" className="py-16 bg-gray-50">
            <div className="max-w-5xl mx-auto px-4 text-center">
                
                <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
                    Entre em Contato
                </h2>
                <p className="text-gray-600 text-lg mb-12 max-w-2xl mx-auto">
                    Estamos aqui para tirar suas dúvidas e agendar sua consulta. Escolha a melhor forma de entrar em contato!
                </p>

                {/* Container dos ícones - CORRIGIDO */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
                    
                    {/* WhatsApp */}
                    <div className="flex flex-col items-center p-6 rounded-2xl bg-white shadow-sm hover:shadow-md transition-all duration-300">
                        <div className="bg-green-100 text-green-600 p-4 rounded-full mb-4">
                            <MessageCircle size={48} />
                        </div>
                        <h3 className="text-xl font-semibold text-gray-800 mb-2">WhatsApp</h3>
                        <p className="text-gray-700 font-medium text-lg mb-3">(83) 99945-7521</p>
                        <a 
                            href="https://wa.me/+5583999457521"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-green-500 hover:bg-green-600 text-white px-6 py-2 rounded-lg transition-colors duration-300 font-medium text-sm"
                        >
                            Enviar Mensagem
                        </a>
                    </div>

                    {/* Instagram */}
                    <div className="flex flex-col items-center p-6 rounded-2xl bg-white shadow-sm hover:shadow-md transition-all duration-300">
                        <div className="bg-blue-100 text-blue-600 p-4 rounded-full mb-4">
                            <Instagram size={48} />
                        </div>
                        <h3 className="text-xl font-semibold text-gray-800 mb-2">Instagram</h3>
                        <p className="text-gray-700 font-medium text-lg mb-3">@draisabellapmsotero</p>
                        <a 
                            href="https://www.instagram.com/draisabellapmsotero/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg transition-colors duration-300 font-medium text-sm"
                        >
                            Enviar Direct
                        </a>
                    </div>

                    {/* Localização */}
                    <div className="flex flex-col items-center p-6 rounded-2xl bg-white shadow-sm hover:shadow-md transition-all duration-300">
                        <div className="bg-red-100 text-red-600 p-4 rounded-full mb-4">
                            <MapPin size={48} />
                        </div>
                        <h3 className="text-xl font-semibold text-gray-800 mb-2">Consultório</h3>
                        <p className="text-gray-700 font-medium text-lg mb-3 text-center">
                            Av. Pres. Epitácio Pessoa, 735<br />João Pessoa - PB
                        </p>
                        <a 
                            href="#location"
                            className="bg-red-500 hover:bg-red-600 text-white px-6 py-2 rounded-lg transition-colors duration-300 font-medium text-sm"
                        >
                            Como Chegar
                        </a>
                    </div>

                </div>

                {/* Informação adicional */}
                <div className="mt-12 p-6 bg-white rounded-2xl shadow-sm max-w-2xl mx-auto">
                    <p className="text-gray-600 text-lg">
                        <strong>Horário de Atendimento:</strong> Segunda a Sexta das 8h às 18h | Sábado das 8h às 12h
                    </p>
                </div>

            </div>
        </section>
    )
}

export default Contact
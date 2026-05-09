
function Local() {
    return (
        <section id='location' className="py-16 bg-white">

            <div className="max-w-6xl mx-auto px-4 text-center">
                <h2 className="text-3xl font-bold mb-8">Localização</h2>
                <p className="text-sm text-gray-600 mb-6">
                    Av. Pres. Epitácio Pessoa, 735 - Sala 01<br/>
                    Bairro dos Estados - João Pessoa - PB - 58030-000
                </p>
            </div>

            <div className="w-full h-96 overflow-hidden rounded-xl shadow-md">
                <iframe
                    title='Mapa da Localização'
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3959.0491628754103!2d-34.865073080508274!3d-7.12030130010888!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x7ace7ff38722961%3A0xaea28259bf5db9a5!2sAv.%20Pres.%20Epit%C3%A1cio%20Pessoa%2C%20735%20-%20Tamba%C3%BA%2C%20Jo%C3%A3o%20Pessoa%20-%20PB%2C%2058030-000!5e0!3m2!1spt-PT!2sbr!4v1760276469137!5m2!1spt-PT!2sbr"
                    width="100%"
                    height="100%"
                    style={{border:0}}
                    allowFullScreen=""
                    loading='lazy'
                    referrerPolicy='no-referrer-when-downgrade'
                ></iframe>
            </div>

        </section>
    )
}

export default Local
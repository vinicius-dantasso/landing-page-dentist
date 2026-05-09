import SelfPortrait from '../assets/SelfPortrait.jpg'

function About() {
    return (
        <section id="about" className="max-w-6xl mx-auto py-16 px-6 md:px-12">

            <div className='w-full text-center mb-12'>
                <h2 className='text-3xl md:text-4xl font-bold text-gray-800'>Sobre Mim</h2>
            </div>
            
            <div className='flex flex-col md:flex-row items-center justify-center gap-10'>
                <div className="flex-1">
                    <img src={SelfPortrait} alt='Foto do profissional' className='w-sm h-auto rounded-2xl shadow-lg object-cover' />
                </div>

                <div className="flex-1 text-center md:text-left">
                    <div className='space-y-6'>
                        
                        <div className='pb-4 border-b border-gray-200'>
                            <p className="text-gray-600 leading-relaxed text-lg font-medium">
                                Graduada em Odontologia - Universidade Federal de Campina Grande
                            </p>
                        </div>

                        <div className='pb-4 border-b border-gray-200'>
                            <p className="text-gray-600 leading-relaxed text-lg font-medium">
                                Mestre em Saúde Oral Coletiva - Universidade Federal da Paraíba
                            </p>
                        </div>

                        <div className='pb-4 border-b border-gray-200'>
                            <p className="text-gray-600 leading-relaxed text-lg font-medium">
                                Especialista em Implantes e Prótese sobre Implantes - UNIPE 
                            </p>
                        </div>

                        <div className='pb-4 border-b border-gray-200'>
                            <p className="text-gray-600 leading-relaxed text-lg font-medium">
                                Pós-graduada em Cirurgia Oral Menor - UniFIP 
                            </p>
                        </div>

                        <div className='pb-4 border-b border-gray-200'>
                            <p className="text-gray-600 leading-relaxed text-lg font-medium">
                                Pós-graduada em Prótese Dentária - ABO/PB
                            </p>
                        </div>

                    </div>
                </div>
            </div>

        </section>
    )
}

export default About
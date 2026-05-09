import NavBar from '../components/NavBar.jsx'
import About from '../components/About.jsx'
import Treatments from '../components/Treatments.jsx'
import Local from '../components/Local.jsx'
import Contact from '../components/Contact.jsx'
import Footer from '../components/Footer.jsx'
import Utils from '../utils/Utils.jsx'

function Home () {
    return (
        <div className="min-h-screen bg-[#F0EDE8] flex justify-center py-10 px-4">
            <div className="w-full max-w-[960px] bg-[#FAF8F4] shadow-[0_8px_48px_rgba(0,0,0,0.12)] relative">
                <NavBar links={Utils.section} />
                <main>
                    <About />
                    <Treatments />
                    <Local />
                    <Contact />
                    <Footer />
                </main>
            </div>
        </div>
    )
}

export default Home
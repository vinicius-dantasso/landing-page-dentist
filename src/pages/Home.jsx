import NavBar from '../components/NavBar.jsx'
import About from '../components/About.jsx'
import Treatments from '../components/Treatments.jsx'
import Local from '../components/Local.jsx'
import Contact from '../components/Contact.jsx'
import Footer from '../components/Footer.jsx'
import Utils from '../utils/Utils.jsx'

function Home () {
    return (
        <div>

            <NavBar links={Utils.section} />

            <main className='pt-16'>
                <About />
                <Treatments />
                <Local />
                <Contact />
                <Footer />
            </main>

        </div>
    )
}

export default Home
import Placeholder from '../assets/placeholder.png'
import Restoration from '../assets/Restoration.png'
import RemovableProsthesis from '../assets/Removable_Prosthesis.jpeg'
import Lens from '../assets/Lens.png'
import FixedProsthesis from '../assets/Fixed_Prosthesis.png'
import Facets from '../assets/Facets.png'
import Implants from '../assets/Implants.png'

const treatments = [
        {
            name: "Lentes de Contatos Dentais",
            image: Lens
        },
        {
            name: "Próteses Fixas",
            image: FixedProsthesis
        },
        {
            name: "Facetas em Resina",
            image: Facets
        },
        {
            name: "Implantes",
            image: Implants
        },
        {
            name: "Restaurações",
            image: Restoration
        },
        {
            name: "Próteses Removíveis",
            image: RemovableProsthesis
        }
    ]

    const links = [
        { label: "Sobre Mim", href: "#about" },
        { label: "Tratamentos", href: "#treatments" },
        { label: "Localização", href: "#location" },
        { label: "Contato", href: "#contact" }
    ]

    const utils = {
        treatment: treatments,
        section:links
    }

export default utils
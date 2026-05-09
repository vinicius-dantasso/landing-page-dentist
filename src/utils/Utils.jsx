import Placeholder from '../assets/placeholder.png'
import Restoration from '../assets/Restoration.png'

const treatments = [
        {
            name: "Lentes de Contatos Dentais",
            image: Placeholder,
            description:"Descrição"
        },
        {
            name: "Próteses Fixas",
            image: Placeholder,
            description:"Descrição"
        },
        {
            name: "Facetas em Resina",
            image: Placeholder,
            description:"Descrição"
        },
        {
            name: "Clareamentos Dentais",
            image: Placeholder,
            description:"Descrição"
        },
        {
            name: "Restaurações",
            image: Restoration,
            description:"Descrição"
        },
        {
            name: "Profilaxias",
            image: Placeholder,
            description:"Descrição"
        },
        {
            name: "Exodontias",
            image: Placeholder,
            description:"Descrição"
        },
        {
            name: "Gengivectomias",
            image: Placeholder,
            description:"Descrição"
        },
        {
            name: "Próteses Removíveis",
            image: Placeholder,
            description:"Descrição"
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
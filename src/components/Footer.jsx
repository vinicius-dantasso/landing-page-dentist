import { Instagram } from "lucide-react"

function Footer() {
    return (
        <footer className="bg-[#1A1814] border-t border-white/[0.07] py-[30px] px-6 md:px-12 flex flex-col md:flex-row items-center justify-between gap-4">
            <div
                style={{ fontFamily: "'Cormorant Garamond', serif" }}
                className="text-[15px] font-light tracking-[3px] uppercase text-white/45"
            >
                Dra. Isabella <span className="text-[#B8985A]">Sotero</span>
            </div>

            <div
                style={{ fontFamily: "'Jost', sans-serif" }}
                className="text-[10px] text-white/30 tracking-[1px]"
            >
                © {new Date().getFullYear()} · CRO-PB · João Pessoa, Paraíba
            </div>

            <div className="flex gap-[10px]">
                <a
                    href="https://www.instagram.com/draisabellapmsotero/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-[30px] h-[30px] border border-white/15 flex items-center justify-center hover:border-[#B8985A] transition-colors duration-200"
                >
                    <Instagram size={13} strokeWidth={1.5} className="text-white opacity-40" />
                </a>
            </div>
        </footer>
    )
}

export default Footer
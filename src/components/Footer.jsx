
function Footer() {
    return (
        <footer className="bg-gray-900 text-gray-300 py-8">
            <div className="max-w-6xl mx-auto px-4 flex justify-center items-center">
                <div className="text-sm text-gray-500 text-center">
                    © {new Date().getFullYear()} Dra. Isabella Sotero — Todos os direitos reservados
                </div>
            </div>
        </footer>
    )
}

export default Footer
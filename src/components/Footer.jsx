import logo_johan from '../assets/img/logo_johan.webp';


const FooterFinanzi = () => {
    return (

        <footer className="border-t border-t-gray-600 text-white px-6 pt-16 pb-8 md:px-20 md:pb-10">
            <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12 text-sm">

                {/* Columna 1 - Logo + descripción */}
                <div>
                    <h2 className="text-4xl text-glow font-extrabold text-[#FB2C36] mb-3 text-center md:text-left">Finanzi</h2>
                    <p className="text-gray-400 leading-relaxed text-base lg:max-w-xs text-center lg:text-left">
                        Tu herramienta de control financiero para ahorrar, salir de deudas e invertir con inteligencia.
                    </p>
                </div>

                {/* Columna 2 - Frase + logo personal */}
                <div className="flex flex-col justify-center items-center">
                    <p className="italic text-gray-400 text-base mb-6">
                        “Domina tus finanzas, domina tu vida.”
                    </p>
                    <a
                        href="https://github.com/JohanBoDev"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <img
                            className="w-44 object-contain opacity-90 hover:opacity-100 transition"
                            src={logo_johan}
                            alt="Logo de Johan Bohorquez"
                        />
                    </a>
                </div>

                {/* Columna 3 - Redes Sociales */}
                <div className="flex flex-col justify-center items-center lg:items-end">
                    <h3 className="text-2xl font-semibold mb-4 text-gray-200">Sígueme</h3>
                    <div className="flex gap-6 text-2xl">
                        <a href="#https://www.facebook.com/profile.php?id=100008195148319" aria-label="Facebook" className="hover:text-[#FB2C36]"><i className="fab fa-facebook-f" /></a>
                        <a href="#https://www.instagram.com/jbohorquezzz/" aria-label="Instagram" className="hover:text-[#FB2C36]"><i className="fab fa-instagram" /></a>
                        <a href="#https://www.linkedin.com/in/johanbodev/" aria-label="LinkedIn" className="hover:text-[#FB2C36]"><i className="fab fa-linkedin-in" /></a>
                        <a href="#https://github.com/JohanBoDev" aria-label="YouTube" className="hover:text-[#FB2C36]"><i className="fab fa-github" /></a>
                    </div>
                </div>
            </div>

            <div className="border-t border-gray-700 mt-12 pt-4 text-center text-xs text-gray-500">
                &copy; {new Date().getFullYear()} Finanzi. Todos los derechos reservados.
            </div>
        </footer>
    );
};

export default FooterFinanzi;

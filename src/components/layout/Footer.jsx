const Footer = () => {
    return (
        <footer className="bg-brand-dark text-white py-12">
            <div className="max-w-7xl mx-auto px-4 text-center md:text-left">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div>
                        <h3 className="text-2xl mb-4 font-mono">[ESPACIO EDUCA]</h3>
                        <p className="text-gray-300 text-sm max-w-xs mx-auto md:mx-0">
                            Transformando el futuro de jóvenes en Venezuela a través de la educación en programación.
                        </p>
                    </div>
                    <div>
                        <h4 className="text-brand-accent mb-4">Contacto</h4>
                        <ul className="space-y-2 text-sm text-gray-300">
                            <li>Caracas, Venezuela</li>
                            <li>info@espacioeduca.org</li>
                            <li>@espacioeduca</li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="text-brand-accent mb-4">Legal</h4>
                        <ul className="space-y-2 text-sm text-gray-300">
                            <li>Privacidad</li>
                            <li>Términos de Uso</li>
                            <li>RIF: J-XXXXXXXX-X</li>
                        </ul>
                    </div>
                </div>
                <div className="border-t border-blue-900 mt-12 pt-8 text-center text-xs text-gray-400">
                    © {new Date().getFullYear()} Espacio Educa. Todos los derechos reservados.
                </div>
            </div>
        </footer>
    );
};

export default Footer;
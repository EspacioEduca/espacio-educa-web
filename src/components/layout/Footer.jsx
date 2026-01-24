import React from 'react';
import { Link } from 'react-router-dom';
import siteData from '../../data/kpis.json';
import { getAssetUrl } from '../../utils/imagePath';

const Footer = () => {
    // Usamos el logo definido en la data, o un fallback
    const logoSrc = getAssetUrl(siteData.hero.footerLogoUrl || "/logos/logo_principal_blanco.svg");

    return (
        <footer className="bg-brand-dark text-white py-12 border-t border-blue-900">
            <div className="max-w-7xl mx-auto px-4 text-center md:text-left">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8">

                    {/* COLUMNA 1: IDENTIDAD */}
                    <div className="flex flex-col items-center md:items-start">
                        {/* Logo Parametrizado */}
                        <div className="mb-6 ">
                            <img
                                src={logoSrc}
                                alt="Espacio Educa Logo"
                                className="h-12 w-auto object-contain" // Filtro para volver el logo blanco si es oscuro
                            />
                        </div>
                        <p className="text-gray-300 text-sm max-w-xs mx-auto md:mx-0 leading-relaxed">
                            Transformando el futuro de jóvenes en Venezuela a través de la educación en programación.
                        </p>
                    </div>

                    {/* COLUMNA 2: CONTACTO */}
                    <div>
                        <h4 className="text-brand-accent mb-6 font-mono font-bold text-lg">Contacto</h4>
                        <ul className="space-y-4 text-sm text-gray-300">
                            <li className="flex items-center justify-center md:justify-start gap-2">
                                <span>📍</span> Caracas, Venezuela
                            </li>
                            <li className="flex items-center justify-center md:justify-start gap-2 hover:text-white transition">
                                <span>✉️</span>
                                <a href="mailto:info@espacioeduca.org">info@espacioeduca.org</a>
                            </li>
                            <li className="flex items-center justify-center md:justify-start gap-2 hover:text-white transition">
                                <span>📱</span>
                                <a href="https://instagram.com/espacio.educa" target="_blank" rel="noreferrer">@espacio.educa</a>
                            </li>
                        </ul>
                    </div>

                    {/* COLUMNA 3: LEGAL (Links Funcionales) */}
                    <div>
                        <h4 className="text-brand-accent mb-6 font-mono font-bold text-lg">Legal</h4>
                        <ul className="space-y-4 text-sm text-gray-300">
                            <li>
                                <Link to="/privacy" className="hover:text-brand-accent hover:underline transition-colors">
                                    Política de Privacidad
                                </Link>
                            </li>
                            <li>
                                <Link to="/terms" className="hover:text-brand-accent hover:underline transition-colors">
                                    Términos de Uso
                                </Link>
                            </li>
                            <li className="opacity-50 cursor-default">
                                RIF: J-506723549
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-white/10 mt-12 pt-8 text-center text-xs text-gray-500 font-mono">
                    <p>© {new Date().getFullYear()} Espacio Educa. Todos los derechos reservados.</p>
                    {/* <p className="mt-2">Desarrollado con ❤️ por nuestros estudiantes.</p> */}
                </div>
            </div>
        </footer>
    );
};

export default Footer;
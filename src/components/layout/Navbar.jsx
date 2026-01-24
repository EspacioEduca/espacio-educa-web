import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import Button from '../ui/Button';
import logoImg from '../../assets/logos/logo_sencillo.png';
import siteData from '../../data/kpis.json';

const Navbar = () => {
    const logoSrc = siteData.hero.logoUrl || "/src/assets/logos/logo_sencillo.png";
    const [isOpen, setIsOpen] = useState(false);

    const navLinks = [
        { name: 'Inicio', path: '/' },
        { name: 'Programas', path: '/programs' }, // Se puede crear esta página luego
        { name: 'Contacto', path: '/contact' },
    ];

    return (
        <nav className="bg-white shadow-sm fixed w-full z-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between h-20 items-center">

                    {/* Logo */}
                    <Link to="/" className="flex-shrink-0">
                        <img
                            className="h-12 w-auto object-contain"
                            src={logoSrc}
                            alt="Logo Espacio Educa"
                        />
                    </Link>

                    {/* Desktop Menu */}
                    <div className="hidden md:flex space-x-8 items-center">
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                to={link.path}
                                className="text-brand-dark hover:text-brand-accent font-sans font-medium transition-colors"
                            >
                                {link.name}
                            </Link>
                        ))}
                        <Link to="/donate">
                            <Button variant="accent" className="py-2 px-4 text-sm">DONAR AHORA</Button>
                        </Link>
                    </div>

                    {/* Mobile Menu Button */}
                    <div className="md:hidden flex items-center">
                        <button onClick={() => setIsOpen(!isOpen)} className="text-brand-primary p-2">
                            {isOpen ? <X size={28} /> : <Menu size={28} />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <div className="md:hidden bg-white border-t border-gray-100 absolute w-full">
                    <div className="px-4 pt-2 pb-6 space-y-2">
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                to={link.path}
                                className="block py-3 text-brand-dark font-sans font-medium border-b border-gray-100"
                                onClick={() => setIsOpen(false)}
                            >
                                {link.name}
                            </Link>
                        ))}
                        <div className="pt-4">
                            <Link to="/donate" onClick={() => setIsOpen(false)}>
                                <Button variant="accent" className="w-full justify-center">DONAR</Button>
                            </Link>
                        </div>
                    </div>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
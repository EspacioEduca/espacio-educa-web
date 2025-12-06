import React from 'react';
import Button from '../components/ui/Button';

const Contact = () => {
    return (
        <div className="pt-28 pb-16 px-4 max-w-2xl mx-auto">
            <div className="text-center mb-10">
                <h1 className="text-3xl text-brand-dark mb-2">Contáctanos</h1>
                <p className="text-gray-600">¿Tienes dudas o quieres ser parte del cambio?</p>
            </div>

            <form className="bg-white p-8 rounded-xl shadow-lg space-y-6 border border-gray-100">

                {/* Nombre */}
                <div>
                    <label className="block text-sm font-bold text-gray-700 mb-1">Nombre Completo</label>
                    <input type="text" className="w-full border border-gray-300 p-3 rounded focus:outline-none focus:border-brand-primary transition" placeholder="Tu nombre" required />
                </div>

                {/* Email */}
                <div>
                    <label className="block text-sm font-bold text-gray-700 mb-1">Correo Electrónico</label>
                    <input type="email" className="w-full border border-gray-300 p-3 rounded focus:outline-none focus:border-brand-primary transition" placeholder="tucorreo@ejemplo.com" required />
                </div>

                {/* Selector Específico (Requisito del Prompt) */}
                <div>
                    <label className="block text-sm font-bold text-brand-primary mb-1">¿Cómo deseas interactuar con nosotros?</label>
                    <select className="w-full border border-gray-300 p-3 rounded focus:outline-none focus:border-brand-primary bg-white cursor-pointer">
                        <option value="" disabled selected>Selecciona una opción</option>
                        <option value="voluntario">Quiero ser Voluntario</option>
                        <option value="alumno">Quiero ser Alumno</option>
                        <option value="colaborar">Quiero colaborar con Espacio Educa</option>
                        <option value="contratar">Quiero contratar a un talento (Egresado)</option>
                        <option value="otro">Otro</option>
                    </select>
                </div>

                {/* Mensaje */}
                <div>
                    <label className="block text-sm font-bold text-gray-700 mb-1">Mensaje</label>
                    <textarea className="w-full border border-gray-300 p-3 rounded focus:outline-none focus:border-brand-primary transition h-32" placeholder="Escribe tu mensaje aquí..." required></textarea>
                </div>

                <Button variant="primary" type="submit" className="w-full">ENVIAR MENSAJE</Button>
            </form>
        </div>
    );
};

export default Contact;
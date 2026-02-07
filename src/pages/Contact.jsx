import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import Button from '../components/ui/Button';
import { Send, CheckCircle, AlertCircle } from 'lucide-react';

const Contact = () => {
    const form = useRef();
    const [status, setStatus] = useState('idle'); // idle, sending, success, error

    const sendEmail = (e) => {
        e.preventDefault();
        setStatus('sending');

        const serviceID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
        const templateID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
        const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

        emailjs.sendForm(serviceID, templateID, form.current, publicKey)
            .then((result) => {
                console.log(result.text);
                setStatus('success');
                form.current.reset(); // Limpiar formulario
            }, (error) => {
                console.log(error.text);
                setStatus('error');
            });
    };

    return (
        <div className="pt-28 pb-16 px-4 max-w-2xl mx-auto">
            <div className="text-center mb-10">
                <h1 className="text-3xl font-mono font-bold text-brand-dark mb-2">Contáctanos</h1>
                <p className="text-gray-600">¿Tienes dudas o quieres ser parte del cambio?</p>
            </div>

            <form ref={form} onSubmit={sendEmail} className="bg-white p-8 rounded-xl shadow-lg space-y-6 border border-gray-100">

                {/* Nombre - name="user_name" debe coincidir con tu template de EmailJS */}
                <div>
                    <label className="block text-sm font-bold text-gray-700 mb-1">Nombre Completo</label>
                    <input 
                        type="text" 
                        name="user_name" 
                        className="w-full border border-gray-300 p-3 rounded focus:outline-none focus:border-brand-primary transition" 
                        placeholder="Tu nombre" 
                        required 
                    />
                </div>

                {/* Email - name="user_email" */}
                <div>
                    <label className="block text-sm font-bold text-gray-700 mb-1">Correo Electrónico</label>
                    <input 
                        type="email" 
                        name="user_email" 
                        className="w-full border border-gray-300 p-3 rounded focus:outline-none focus:border-brand-primary transition" 
                        placeholder="tucorreo@ejemplo.com" 
                        required 
                    />
                </div>

                {/* Selector - name="interaction_type" */}
                <div>
                    <label className="block text-sm font-bold text-brand-primary mb-1">¿Cómo deseas interactuar con nosotros?</label>
                    <select 
                        name="interaction_type" 
                        className="w-full border border-gray-300 p-3 rounded focus:outline-none focus:border-brand-primary bg-white cursor-pointer"
                        defaultValue=""
                        required
                    >
                        <option value="" disabled>Selecciona una opción</option>
                        <option value="Quiero ser Voluntario">Quiero ser Voluntario</option>
                        <option value="Quiero ser Alumno">Quiero ser Alumno</option>
                        <option value="Quiero colaborar con Espacio Educa">Quiero colaborar con Espacio Educa</option>
                        <option value="Quiero contratar a un talento (Egresado)">Quiero contratar a un talento (Egresado)</option>
                        <option value="Otro">Otro</option>
                    </select>
                </div>

                {/* Mensaje - name="message" */}
                <div>
                    <label className="block text-sm font-bold text-gray-700 mb-1">Mensaje</label>
                    <textarea 
                        name="message" 
                        className="w-full border border-gray-300 p-3 rounded focus:outline-none focus:border-brand-primary transition h-32" 
                        placeholder="Escribe tu mensaje aquí..." 
                        required
                    ></textarea>
                </div>

                {/* Botón con Estados */}
                <div className="pt-2">
                    {status === 'sending' && (
                        <Button variant="secondary" className="w-full opacity-75 cursor-wait" disabled>
                            Enviando...
                        </Button>
                    )}
                    
                    {status === 'success' && (
                        <div className="w-full bg-green-100 text-green-700 p-3 rounded flex items-center justify-center gap-2 font-bold">
                            <CheckCircle size={20} /> ¡Mensaje enviado con éxito!
                        </div>
                    )}

                    {status === 'error' && (
                        <div className="w-full bg-red-100 text-red-700 p-3 rounded flex items-center justify-center gap-2 font-bold">
                            <AlertCircle size={20} /> Hubo un error. Intenta de nuevo.
                            <Button variant="primary" onClick={() => setStatus('idle')} className="ml-4 text-xs py-1 px-2">Reintentar</Button>
                        </div>
                    )}

                    {status === 'idle' && (
                        <Button variant="primary" type="submit" className="w-full flex justify-center items-center gap-2">
                            ENVIAR MENSAJE <Send size={18} />
                        </Button>
                    )}
                </div>
            </form>
        </div>
    );
};

export default Contact;
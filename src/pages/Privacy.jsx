import React from 'react';
import Button from '../components/ui/Button';
import { Link } from 'react-router-dom';

const Privacy = () => {
    return (
        <div className="pt-28 pb-16 px-4 max-w-4xl mx-auto">
            <h1 className="text-3xl md:text-4xl font-mono font-bold text-brand-dark mb-8">Política de Privacidad</h1>

            <div className="space-y-6 text-gray-700 text-justify">
                <p><strong>Última actualización: Enero 2025</strong></p>

                <p>En <strong>Espacio Educa</strong>, nos tomamos muy en serio la privacidad de nuestros estudiantes, voluntarios y donantes. Esta política describe cómo recopilamos, usamos y protegemos su información.</p>

                <h3 className="text-xl font-bold text-brand-primary mt-6">1. Información que recopilamos</h3>
                <ul className="list-disc pl-5 space-y-2">
                    <li><strong>Datos de contacto:</strong> Nombres, correos y teléfonos proporcionados en formularios de voluntariado o contacto.</li>
                    {/* <li><strong>Información de donantes:</strong> Datos necesarios para procesar contribuciones (no almacenamos números completos de tarjetas de crédito; estos son procesados por pasarelas de pago seguras).</li> */}
                    <li><strong>Datos de estudiantes:</strong> Información académica y demográfica necesaria para la inscripción y seguimiento educativo.</li>
                </ul>

                <h3 className="text-xl font-bold text-brand-primary mt-6">2. Uso de Imágenes de Menores</h3>
                <p>Dado nuestro enfoque en educación juvenil, a menudo documentamos actividades en fotos y videos. <strong>Espacio Educa</strong> cuenta con autorización expresa a los representantes legales para el uso de la imagen de menores de edad con fines estrictamente institucionales, divulgativos y de recaudación de fondos. Ninguna imagen será utilizada para fines comerciales ajenos a la misión de la organización.</p>

                <h3 className="text-xl font-bold text-brand-primary mt-6">3. Uso de la Información</h3>
                <p>Utilizamos sus datos para: gestionar el voluntariado, en reportes de impacto, mejorar nuestros programas educativos y cumplir con obligaciones legales.</p>

                <h3 className="text-xl font-bold text-brand-primary mt-6">4. Contacto</h3>
                <p>Para ejercer sus derechos de acceso, rectificación o eliminación de datos, contáctenos en: <span className="font-mono bg-gray-100 px-2">info@espacioeduca.org</span></p>
            </div>

            <div className="mt-12">
                <Link to="/">
                    <Button variant="outline">Volver al Inicio</Button>
                </Link>
            </div>
        </div>
    );
};

export default Privacy;
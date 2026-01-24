import React from 'react';
import Button from '../components/ui/Button';
import { Link } from 'react-router-dom';

const Terms = () => {
    return (
        <div className="pt-28 pb-16 px-4 max-w-4xl mx-auto">
            <h1 className="text-3xl md:text-4xl font-mono font-bold text-brand-dark mb-8">Términos de Uso</h1>

            <div className="space-y-6 text-gray-700 text-justify">
                <p>Bienvenido al sitio web de <strong>Espacio Educa</strong>. Al acceder a nuestro sitio, usted acepta los siguientes términos y condiciones.</p>

                <h3 className="text-xl font-bold text-brand-primary mt-6">1. Propiedad Intelectual</h3>
                <p>Todo el contenido de este sitio, incluyendo textos, gráficos, logos, metodologías educativas (CBC y ABP) y código fuente, es propiedad exclusiva de Espacio Educa o sus licenciantes, y está protegido por las leyes de derecho de autor nacionales e internacionales. Está prohibida su reproducción con fines comerciales sin autorización escrita.</p>

                <h3 className="text-xl font-bold text-brand-primary mt-6">2. Naturaleza de los Servicios</h3>
                <p>Espacio Educa es una organización sin fines de lucro. Nuestros cursos y programas buscan mejorar la empleabilidad, pero <strong>no garantizamos</strong> la obtención de empleo ni resultados económicos específicos tras la culminación de los mismos. El éxito depende del esfuerzo individual y las condiciones del mercado.</p>

                <h3 className="text-xl font-bold text-brand-primary mt-6">3. Conducta del Usuario</h3>
                <p>Usted se compromete a utilizar nuestro sitio y canales de comunicación de manera respetuosa. Queda prohibido el uso del sitio para difundir contenido ofensivo, ilegal o que vulnere los derechos de nuestros estudiantes (especialmente menores de edad).</p>

                <h3 className="text-xl font-bold text-brand-primary mt-6">4. Modificaciones</h3>
                <p>Nos reservamos el derecho de modificar estos términos en cualquier momento. El uso continuo del sitio tras los cambios constituye su aceptación.</p>
            </div>

            <div className="mt-12">
                <Link to="/">
                    <Button variant="outline">Volver al Inicio</Button>
                </Link>
            </div>
        </div>
    );
};

export default Terms;
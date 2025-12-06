import React from 'react';
import Button from '../components/ui/Button';

const Donate = () => {
    return (
        <div className="pt-28 pb-16 px-4 bg-gray-50 min-h-screen">
            <div className="max-w-4xl mx-auto text-center mb-12">
                <h1 className="text-3xl md:text-5xl text-brand-dark mb-4">Apoya la Educación Tecnológica</h1>
                <p className="text-xl text-gray-600">Tu aporte permite que más jóvenes accedan a herramientas para transformar su futuro.</p>
            </div>

            <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">

                {/* Opción 1: Pago Móvil / Nacional */}
                <div className="bg-white p-8 rounded-xl shadow-md border-t-4 border-brand-primary">
                    <h2 className="text-2xl text-brand-primary mb-6">Bolívares (Venezuela)</h2>
                    <div className="space-y-4 text-left bg-blue-50 p-6 rounded-lg mb-6 font-mono text-sm">
                        <p><strong>Banco:</strong> Banesco (0134)</p>
                        <p><strong>RIF:</strong> J-00000000-0</p>
                        <p><strong>Teléfono:</strong> 0414-XXX-XXXX</p>
                        <p><strong>Cuenta:</strong> 0134-XXXX-XX-XXXXXXXXXX</p>
                    </div>
                    <p className="text-sm text-gray-500 mb-4">Reporta tu pago vía WhatsApp para emitir tu recibo.</p>
                    <a href="https://wa.me/58414XXXXXXX" target="_blank" rel="noreferrer">
                        <Button variant="outline" className="w-full">Reportar Pago Móvil</Button>
                    </a>
                </div>

                {/* Opción 2: Internacional */}
                <div className="bg-white p-8 rounded-xl shadow-md border-t-4 border-brand-accent">
                    <h2 className="text-2xl text-brand-accent mb-6">Internacional (USD/EUR)</h2>

                    <div className="space-y-4">
                        {/* PayPal */}
                        <div className="border rounded p-4 flex justify-between items-center hover:bg-gray-50 transition">
                            <span className="font-bold text-gray-700">PayPal</span>
                            <a href="https://paypal.me/TU_USUARIO" target="_blank" rel="noreferrer">
                                <Button variant="secondary" className="text-xs px-4 py-2">Donar con PayPal</Button>
                            </a>
                        </div>

                        {/* Zelle */}
                        <div className="border rounded p-4 text-left">
                            <span className="block font-bold text-gray-700 mb-2">Zelle</span>
                            <div className="bg-gray-100 p-2 rounded text-center font-mono text-sm select-all">
                                zelle@espacioeduca.org
                            </div>
                            <p className="text-xs text-gray-400 mt-2 text-center">Titular: Espacio Educa</p>
                        </div>

                        {/* Zinli */}
                        <div className="border rounded p-4 text-left flex justify-between items-center">
                            <span className="font-bold text-gray-700">Zinli</span>
                            <span className="text-sm font-mono">pagos@espacioeduca.org</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Donate;
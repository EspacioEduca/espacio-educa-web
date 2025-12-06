import { Link } from 'react-router-dom';
import programs from '../data/programs.json';
import Button from '../components/ui/Button';
import { Code, Users, Lightbulb, Cpu } from 'lucide-react'; // Iconos para hacerlo visual

const Programs = () => {
    return (
        <div className="pt-20">

            {/* HEADER */}
            <section className="bg-brand-dark text-white py-16 px-4 text-center">
                <h1 className="text-3xl md:text-5xl mb-4">Nuestra Oferta Académica</h1>
                <p className="max-w-2xl mx-auto text-gray-300 text-lg">
                    Un currículo basado en competencias (CBC) diseñado para transformar estudiantes en creadores de tecnología.
                </p>
            </section>

            {/* METODOLOGÍA ( Diferenciador Estratégico ) */}
            <section className="py-16 bg-white">
                <div className="max-w-7xl mx-auto px-4">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl text-brand-primary mb-2">Más que código</h2>
                        <p className="text-gray-600">Nuestra metodología de Aprendizaje Basado en Proyectos (ABP) prepara para la vida real.</p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8 text-center">
                        <div className="p-6">
                            <div className="w-16 h-16 bg-blue-50 rounded-full flex items-center justify-center mx-auto mb-4 text-brand-primary">
                                <Code size={32} />
                            </div>
                            <h3 className="text-xl mb-2 text-brand-dark">Proyectos Reales</h3>
                            <p className="text-sm text-gray-500">No solo teoría. Cada módulo culmina con un proyecto funcional que va al portafolio del alumno.</p>
                        </div>
                        <div className="p-6">
                            <div className="w-16 h-16 bg-orange-50 rounded-full flex items-center justify-center mx-auto mb-4 text-brand-accent">
                                <Users size={32} />
                            </div>
                            <h3 className="text-xl mb-2 text-brand-dark">Habilidades Blandas</h3>
                            <p className="text-sm text-gray-500">Talleres de oratoria, armado de CV, finanzas personales y trabajo en equipo.</p>
                        </div>
                        <div className="p-6">
                            <div className="w-16 h-16 bg-blue-50 rounded-full flex items-center justify-center mx-auto mb-4 text-brand-primary">
                                <Lightbulb size={32} />
                            </div>
                            <h3 className="text-xl mb-2 text-brand-dark">Mentoria y Eventos</h3>
                            <p className="text-sm text-gray-500">Hackathons internos y contacto directo con profesionales del sector tecnológico.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* DETALLE DE CURSOS */}
            <section className="py-16 bg-gray-50">
                <div className="max-w-6xl mx-auto px-4 space-y-12">
                    {programs.map((prog, index) => (
                        <div key={prog.id} className={`flex flex-col md:flex-row gap-8 items-center ${index % 2 !== 0 ? 'md:flex-row-reverse' : ''}`}>

                            {/* Tarjeta Visual del Curso */}
                            <div className="w-full md:w-1/3 bg-white p-8 rounded-2xl shadow-lg border-t-8 border-brand-primary">
                                <span className="bg-brand-accent text-white text-xs font-bold px-2 py-1 rounded uppercase tracking-wide">
                                    {prog.level}
                                </span>
                                <h3 className="text-3xl mt-4 mb-2 text-brand-dark">{prog.title}</h3>
                                <p className="text-sm text-gray-500 font-mono mb-6">{prog.duration}</p>
                                <Link to="/contact">
                                    <Button variant="outline" className="w-full text-sm">Postularme</Button>
                                </Link>
                            </div>

                            {/* Contenido del Syllabus */}
                            <div className="w-full md:w-2/3">
                                <h4 className="text-2xl text-brand-dark mb-4 font-mono">Lo que aprenderás:</h4>
                                <p className="text-gray-600 mb-6 text-lg">{prog.description}</p>

                                <div className="grid sm:grid-cols-2 gap-4">
                                    {prog.modules.map((mod, i) => (
                                        <div key={i} className="flex items-start gap-2">
                                            <div className="mt-1.5 w-2 h-2 rounded-full bg-brand-accent flex-shrink-0"></div>
                                            <span className="text-gray-700">{mod}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>

                        </div>
                    ))}
                </div>
            </section>

            {/* VISIÓN FUTURA (Estratégico) */}
            <section className="py-16 px-4 bg-brand-primary text-white text-center">
                <div className="max-w-4xl mx-auto">
                    <div className="inline-block p-3 bg-white/10 rounded-full mb-4">
                        <Cpu size={32} className="text-brand-accent" />
                    </div>
                    <h2 className="text-3xl md:text-4xl mb-6">El Futuro: Inteligencia Artificial</h2>
                    <p className="text-lg md:text-xl font-light mb-8 opacity-90">
                        Estamos integrando herramientas de IA en nuestro pensum 2025-2026 para que nuestros estudiantes no solo usen la tecnología, sino que la dominen.
                    </p>
                    <Link to="/donate">
                        <Button variant="white">Apoya nuestra Transformación</Button>
                    </Link>
                </div>
            </section>

        </div>
    );
};

export default Programs;
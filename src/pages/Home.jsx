import { Link } from 'react-router-dom';
import kpis from '../data/kpis.json';
import allies from '../data/allies.json';
import programs from '../data/programs.json';
import Button from '../components/ui/Button';

const Home = () => {
    return (
        <div className="pt-20">

            {/* HERO SECTION */}
            <section className="bg-brand-primary text-white py-24 px-4 relative overflow-hidden">
                <div className="max-w-7xl mx-auto text-center relative z-10">
                    <h1 className="text-4xl md:text-6xl mb-6 leading-tight">
                        <span className="text-brand-accent">[</span> CREANDO FUTURO <span className="text-brand-accent">]</span><br />
                        CON CÓDIGO
                    </h1>
                    <p className="text-lg md:text-xl text-gray-100 mb-10 max-w-2xl mx-auto font-light">
                        Somos un Hub Tecnológico que rompe barreras de oportunidad para jóvenes en Venezuela a través de la formación integral para el empleo.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link to="/donate">
                            <Button variant="accent">Hacer una Donación</Button>
                        </Link>
                        <Link to="/contact">
                            <Button variant="white">Quiero ser Voluntario</Button>
                        </Link>
                    </div>
                </div>
                {/* Fondo decorativo abstracto */}
                <div className="absolute top-0 left-0 w-full h-full opacity-10 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>
            </section>

            {/* KPI SECTION */}
            <section className="py-16 bg-white -mt-8 relative z-20">
                <div className="max-w-7xl mx-auto px-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {kpis.map((kpi) => (
                            <div key={kpi.id} className="bg-white p-6 rounded-xl shadow-lg border-b-4 border-brand-accent text-center transform hover:-translate-y-1 transition-transform">
                                <span className="block text-4xl font-mono font-bold text-brand-primary mb-2">{kpi.number}</span>
                                <h3 className="text-sm font-bold uppercase tracking-wider text-gray-600">{kpi.label}</h3>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* PROGRAMS PREVIEW */}
            <section className="py-20 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl text-brand-dark mb-4">Nuestros Programas</h2>
                        <p className="text-gray-600">Formación basada en proyectos y competencias reales.</p>
                    </div>
                    <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                        {programs.map((prog) => (
                            <div key={prog.id} className="bg-white p-8 rounded-lg shadow-sm hover:shadow-md transition border border-gray-100">
                                <h3 className="text-2xl text-brand-primary mb-2">{prog.title}</h3>
                                <span className="bg-brand-accent text-white text-xs px-2 py-1 rounded font-mono">{prog.duration}</span>
                                <p className="mt-4 text-gray-600 mb-6">{prog.description}</p>
                                <div className="flex flex-wrap gap-2">
                                    {prog.skills.map(skill => (
                                        <span key={skill} className="text-xs bg-blue-50 text-brand-dark px-2 py-1 rounded border border-blue-100">{skill}</span>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ALLIES SECTION */}
            <section className="py-16 bg-white border-t border-gray-100">
                <div className="max-w-7xl mx-auto px-4 text-center">
                    <h2 className="text-2xl text-gray-400 mb-10 font-mono">ALIADOS QUE CONFÍAN EN NOSOTROS</h2>
                    <div className="flex flex-wrap justify-center items-center gap-12 opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
                        {allies.map((ally) => (
                            <div key={ally.id} className="w-32 h-20 flex items-center justify-center bg-gray-50 rounded p-2">
                                {/* Aquí iría <img src={ally.logo} /> pero usaremos texto por ahora */}
                                <span className="font-bold text-gray-500 text-sm">{ally.name}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Home;
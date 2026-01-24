import React from 'react';
import siteData from '../data/kpis.json';

const Home = () => {
    const { hero, stats } = siteData;

    return (
        <div className="pt-20 min-h-screen flex flex-col">
            {/* SECCIÓN HERO */}
            <section className="w-full h-[60vh] md:h-[60vh] bg-gray-300 overflow-hidden">
                <img
                    src={hero.mainImage}
                    alt="Espacio Educa Hero"
                    className="w-full h-full object-cover"
                />
            </section>

            {/* CUERPO CENTRAL */}
            <section className="max-w-7xl mx-auto px-6 py-8 md:py-12 grid md:grid-cols-2 gap-8 items-center flex-grow">
                <h1 className="text-3xl md:text-5xl font-mono font-bold text-brand-accent leading-tight">
                    {hero.title}
                </h1>
                <div className="text-gray-800 text-sm md:text-base space-y-4">
                    <p>{hero.description}</p>
                    <p className="font-medium">{hero.subDescription}</p>
                </div>
            </section>

            {/* MÉTRICAS */}
            <section className="bg-brand-primary text-white py-8 md:py-10">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                        {stats.map((stat) => (
                            <div key={stat.id} className="text-center">
                                <div className="text-3xl md:text-5xl font-mono font-bold mb-1">
                                    <span className="text-white opacity-80">[</span>
                                    {stat.number}
                                    <span className="text-white opacity-80">]</span>
                                </div>
                                <p className="text-xs md:text-sm uppercase tracking-wider font-sans opacity-90">
                                    {stat.label}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Home;
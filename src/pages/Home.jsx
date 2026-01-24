import React from 'react';
import { Link } from 'react-router-dom';
import { UserPlus, ExternalLink } from 'lucide-react';
import Button from '../components/ui/Button';

// Data Imports
import kpiData from '../data/kpis.json';
import homeData from '../data/home_sections.json';

// --- SUB-COMPONENT: PROJECT CARD (Sin cambios) ---
const ProjectCard = ({ project }) => (
    <a
        href={project.link}
        target="_blank"
        rel="noopener noreferrer"
        className="group block overflow-hidden rounded-xl bg-gray-200 shadow-md hover:shadow-xl transition-all duration-300"
    >
        <div className="relative h-48 md:h-64 overflow-hidden">
            <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-brand-primary bg-opacity-0 group-hover:bg-opacity-80 transition-all duration-300 flex items-center justify-center">
                <span className="text-white opacity-0 group-hover:opacity-100 flex items-center gap-2 font-mono font-bold">
                    Ver Proyecto <ExternalLink size={18} />
                </span>
            </div>
        </div>
        <div className="p-4 bg-white">
            <h3 className="font-mono font-bold text-brand-dark text-lg">{project.title}</h3>
            <p className="text-sm text-gray-500">{project.student}</p>
        </div>
    </a>
);

// --- SUB-COMPONENT: VOLUNTEER CTA (Sin cambios) ---
const VolunteerSection = ({ data }) => (
    <section className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
            {/* Título Principal Centrado */}
            <h2 className="text-3xl md:text-4xl font-mono font-bold text-center text-brand-black mb-12">
                {data.title}
            </h2>

            <div className="grid md:grid-cols-2 gap-0 md:gap-8 items-center">

                {/* 1. Columna Izquierda: Imagen (Ambiente real) */}
                <div className="w-full h-64 md:h-96 relative rounded-t-xl md:rounded-xl overflow-hidden shadow-lg">
                    <img
                        src={data.image}
                        alt="Voluntarios Espacio Educa"
                        className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                    />
                </div>

                {/* 2. Columna Derecha: Tarjeta de Contenido (Estilo Figma) */}
                <div className="bg-white border border-gray-200 rounded-b-xl md:rounded-xl p-8 md:p-12 shadow-sm flex flex-col justify-center h-full">
                    <h3 className="text-2xl font-mono font-bold text-brand-dark mb-4">
                        {data.cardTitle}
                    </h3>

                    <p className="text-gray-600 text-lg leading-relaxed mb-8">
                        {data.description}
                    </p>

                    <div className="text-left">
                        <Link to={data.link}>
                            <Button variant="primary" className="px-8 py-3 w-full md:w-auto shadow-none hover:shadow-lg transform hover:-translate-y-0.5">
                                {data.buttonText}
                            </Button>
                        </Link>
                    </div>
                </div>

            </div>
        </div>
    </section>
);
// --- SUB-COMPONENT: MEDIA CAROUSEL (Sin cambios) ---
const MediaSection = ({ data }) => (
    <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto text-center">
            <h2 className="text-3xl font-mono text-brand-black mb-12">
                {data.title}
            </h2>

            <div className="grid md:grid-cols-3 gap-8">
                {data.items.map((item) => (
                    <a
                        key={item.id}
                        href={item.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group relative h-64 w-full block overflow-hidden rounded-xl shadow-md hover:shadow-xl transition-all duration-300"
                    >
                        {/* 1. Imagen de Fondo (Grayscale por defecto, color al hover) */}
                        <img
                            src={item.image}
                            alt={`Noticia en ${item.mediaName}`}
                            className="w-full h-full object-cover filter grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700 ease-in-out"
                        />

                        {/* 2. Overlay del Logo (Fondo semitransparente) */}
                        <div className="absolute bottom-0 left-0 right-0 bg-white/80 backdrop-blur-sm py-3 px-4 flex justify-center items-center h-16 transition-colors duration-300">
                            <img
                                src={item.logo}
                                alt={`Logo ${item.mediaName}`}
                                className="h-8 md:h-10 w-auto object-contain opacity-80 group-hover:opacity-100 transition-opacity"
                            />
                        </div>
                    </a>
                ))}
            </div>
        </div>
    </section>
);

// --- MAIN PAGE COMPONENT ---
const Home = () => {
    const { hero, stats } = kpiData;
    const { projects, volunteer, media } = homeData;

    return (
        <div className="pt-20 min-h-screen flex flex-col">

            {/* 1. SECCIÓN HERO */}
            <section className="w-full h-[55vh] md:h-[62vh] bg-gray-300 overflow-hidden relative">
                <img
                    src={hero.mainImage}
                    alt="Espacio Educa Hero"
                    className="w-full h-full object-cover"
                />
                {/* Overlay ligero opcional */}
                <div className="absolute inset-0 bg-black/10"></div>
            </section>

            {/* 2. DESCRIPCIÓN Y TEXTO */}
            <section className="max-w-7xl mx-auto px-6 py-10 w-full">
                <div className="grid md:grid-cols-2 gap-8 md:gap-16 items-start">

                    {/* Columna Izquierda: Título Naranja Grande */}
                    <div className="text-left">
                        <h1 className="text-2xl md:text-4xl font-mono font-bold text-brand-accent leading-tight">
                            {hero.title}
                        </h1>
                    </div>

                    {/* Columna Derecha: Descripción Gris */}
                    <div className="text-left text-gray-700 text-lg space-y-4">
                        <p>{hero.description}</p>
                        <p className="font-medium text-brand-primary">{hero.subDescription}</p>
                    </div>

                </div>
            </section>

            {/* 3. MÉTRICAS */}
            <section className="bg-brand-primary text-white py-12 w-full">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                        {stats.map((stat) => (
                            <div key={stat.id} className="text-center group cursor-default">
                                <div className="text-4xl md:text-6xl font-mono font-bold mb-2 group-hover:scale-110 transition-transform duration-300">
                                    <span className="text-white opacity-40 mr-1">[</span>
                                    {stat.number}
                                    <span className="text-white opacity-40 ml-1">]</span>
                                </div>
                                <p className="text-sm md:text-lg uppercase tracking-wider font-sans font-medium opacity-90 leading-tight">
                                    {stat.label}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 4. PROYECTOS DE ALUMNOS */}
            <section className="py-20 px-4 max-w-7xl mx-auto w-full">
                <h2 className="text-3xl font-mono text-center text-brand-black mb-12">
                    {projects.title}
                </h2>
                <div className="grid md:grid-cols-3 gap-6 md:gap-8">
                    {projects.items.map((proj) => (
                        <ProjectCard key={proj.id} project={proj} />
                    ))}
                </div>
            </section>

            {/* 5. VOLUNTARIADO */}
            <VolunteerSection data={volunteer} />

            {/* 6. MEDIOS */}
            <MediaSection data={media} />

        </div>
    );
};

export default Home;
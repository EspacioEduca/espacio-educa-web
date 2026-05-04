import React from 'react';
import { Link } from 'react-router-dom';
import { UserPlus, ExternalLink, ChevronLeft, ChevronRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect, useCallback } from 'react';
import Button from '../components/ui/Button';

// Data Imports
import kpiData from '../data/kpis.json';
import homeData from '../data/home_sections.json';
// Utility to get asset URLs
import { getAssetUrl } from '../utils/imagePath';

// --- SUB-COMPONENT: PROJECT CARD (Sin cambios) ---
const ProjectCard = ({ project }) => (
    <a
        href={project.link}
        target="_blank"
        rel="noopener noreferrer"
        className="group block overflow-hidden rounded-xl bg-gray-200 shadow-md hover:shadow-xl transition-all duration-300 h-full"
    >
        <div className="relative h-48 md:h-64 overflow-hidden">
            <img
                src={getAssetUrl(project.image)}
                alt={project.title}
                className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-brand-primary bg-opacity-0 group-hover:bg-opacity-80 transition-all duration-300 flex items-center justify-center">
                <span className="text-white opacity-0 group-hover:opacity-100 flex items-center gap-2 font-mono font-bold text-center px-4">
                    Ver Proyecto <ExternalLink size={18} />
                </span>
            </div>
        </div>
        <div className="p-4 bg-white h-full border-t border-gray-100">
            <h3 className="font-mono font-bold text-brand-dark text-lg truncate">{project.title}</h3>
            <p className="text-sm text-gray-500">{project.student}</p>
        </div>
    </a>
);

// --- SUB-COMPONENT: PROJECTS CAROUSEL ---
const ProjectsCarousel = ({ projects }) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [direction, setDirection] = useState(0);
    const [isAutoPlaying, setIsAutoPlaying] = useState(true);
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const checkMobile = () => setIsMobile(window.innerWidth < 768);
        checkMobile();
        window.addEventListener('resize', checkMobile);
        return () => window.removeEventListener('resize', checkMobile);
    }, []);

    const nextProject = useCallback(() => {
        setDirection(1);
        setCurrentIndex((prev) => (prev + 1) % projects.length);
    }, [projects.length]);

    const prevProject = useCallback(() => {
        setDirection(-1);
        setCurrentIndex((prev) => (prev - 1 + projects.length) % projects.length);
    }, [projects.length]);

    useEffect(() => {
        if (!isAutoPlaying) return;
        const interval = setInterval(nextProject, 4000);
        return () => clearInterval(interval);
    }, [isAutoPlaying, nextProject]);

    const variants = {
        enter: (direction) => ({
            x: direction > 0 ? (isMobile ? "100%" : 500) : (isMobile ? "-100%" : -500),
            opacity: 0,
            scale: isMobile ? 1 : 0.9,
            rotateY: isMobile ? 0 : (direction > 0 ? 15 : -15),
        }),
        center: {
            zIndex: 1,
            x: 0,
            opacity: 1,
            scale: 1,
            rotateY: 0,
            transition: isMobile ? {
                x: { type: "spring", stiffness: 350, damping: 35, mass: 0.8 },
                opacity: { duration: 0.2 }
            } : {
                x: { type: "spring", stiffness: 200, damping: 25 },
                opacity: { duration: 0.4 },
                scale: { duration: 0.4 },
                rotateY: { duration: 0.4 }
            }
        },
        exit: (direction) => ({
            zIndex: 0,
            x: direction < 0 ? (isMobile ? "100%" : 500) : (isMobile ? "-100%" : -500),
            opacity: 0,
            scale: isMobile ? 1 : 0.9,
            rotateY: isMobile ? 0 : (direction < 0 ? 15 : -15),
            transition: isMobile ? {
                x: { type: "spring", stiffness: 350, damping: 35, mass: 0.8 },
                opacity: { duration: 0.2 }
            } : {
                x: { type: "spring", stiffness: 200, damping: 25 },
                opacity: { duration: 0.3 }
            }
        })
    };

    const swipeConfidenceThreshold = 10000;
    const swipePower = (offset, velocity) => {
        return Math.abs(offset) * velocity;
    };

    return (
        <div 
            className="relative w-full overflow-hidden perspective-1000 select-none pb-8"
            onMouseEnter={() => setIsAutoPlaying(false)}
            onMouseLeave={() => setIsAutoPlaying(true)}
        >
            <div className="flex gap-6 md:gap-8 px-4 py-8 md:py-12">
                <div className="flex w-full max-w-6xl mx-auto touch-pan-y">
                    <AnimatePresence initial={false} custom={direction} mode="popLayout">
                        {[0, 1, 2].map((offset) => {
                            const index = (currentIndex + offset) % projects.length;
                            const project = projects[index];
                            
                            const visibilityClass = offset === 0 ? "block w-full" : offset === 1 ? "hidden md:block md:w-1/2 lg:w-1/3" : "hidden lg:block lg:w-1/3";

                            return (
                                <motion.div
                                    key={`${project.id}-${index}`}
                                    custom={direction}
                                    variants={variants}
                                    initial="enter"
                                    animate="center"
                                    exit="exit"
                                    drag={offset === 0 ? "x" : false}
                                    dragConstraints={{ left: 0, right: 0 }}
                                    dragElastic={0.2}
                                    onDragStart={() => setIsAutoPlaying(false)}
                                    onDragEnd={(e, { offset, velocity }) => {
                                        setIsAutoPlaying(true);
                                        const swipe = swipePower(offset.x, velocity.x);
                                        if (swipe < -swipeConfidenceThreshold) {
                                            nextProject();
                                        } else if (swipe > swipeConfidenceThreshold) {
                                            prevProject();
                                        }
                                    }}
                                    layout
                                    whileHover={!isMobile ? { 
                                        y: -10,
                                        scale: 1.02,
                                        transition: { type: "spring", stiffness: 400, damping: 10 }
                                    } : {}}
                                    className={`${visibilityClass} px-3 md:px-4 flex-shrink-0 cursor-grab active:cursor-grabbing`}
                                >
                                    <ProjectCard project={project} />
                                </motion.div>
                            );
                        })}
                    </AnimatePresence>
                </div>
            </div>

            {/* Controles Nav - Ocultos en móviles */}
            {!isMobile && (
                <>
                    <button
                        onClick={prevProject}
                        className="absolute left-4 top-1/2 -translate-y-1/2 z-10 bg-white/90 hover:bg-brand-primary hover:text-white p-3 rounded-full shadow-2xl text-brand-primary transition-all duration-300 transform hover:scale-110 active:scale-95"
                    >
                        <ChevronLeft size={28} />
                    </button>
                    <button
                        onClick={nextProject}
                        className="absolute right-4 top-1/2 -translate-y-1/2 z-10 bg-white/90 hover:bg-brand-primary hover:text-white p-3 rounded-full shadow-2xl text-brand-primary transition-all duration-300 transform hover:scale-110 active:scale-95"
                    >
                        <ChevronRight size={28} />
                    </button>
                </>
            )}

            {/* Indicadores Animados */}
            <div className="flex justify-center gap-3 mt-4 md:mt-8">
                {projects.map((_, idx) => (
                    <motion.button
                        key={idx}
                        onClick={() => {
                            setDirection(idx > currentIndex ? 1 : -1);
                            setCurrentIndex(idx);
                        }}
                        animate={{
                            width: currentIndex === idx ? 24 : 10,
                            backgroundColor: currentIndex === idx ? "#003366" : "#cbd5e1"
                        }}
                        transition={{ type: "spring", stiffness: 300, damping: 20 }}
                        className="h-2.5 rounded-full"
                        aria-label={`Ir al proyecto ${idx + 1}`}
                    />
                ))}
            </div>
        </div>
    );
};

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
                        src={getAssetUrl(data.image)}
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
                            src={getAssetUrl(item.image)}
                            alt={`Noticia en ${item.mediaName}`}
                            className="w-full h-full object-cover filter grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700 ease-in-out"
                        />

                        {/* 2. Overlay del Logo (Fondo semitransparente) */}
                        <div className="absolute bottom-0 left-0 right-0 bg-white/80 backdrop-blur-sm py-3 px-4 flex justify-center items-center h-16 transition-colors duration-300">
                            <img
                                src={getAssetUrl(item.logo)}
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
                    src={getAssetUrl(hero.mainImage)}
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

            {/* 4. PROYECTOS DE ALUMNOS (CARRUSEL) */}
            <section className="py-20 px-4 w-full bg-gray-100/50">
                <div className="max-w-7xl mx-auto">
                    <h2 className="text-3xl font-mono text-center text-brand-black mb-12">
                        {projects.title}
                    </h2>
                    <ProjectsCarousel projects={projects.items} />
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
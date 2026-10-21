import { Head } from '@inertiajs/react';
import MainLayout from '@/Layouts/MainLayout';

export default function About() {
    return (
        <MainLayout>
            <Head title="Nosotros | Servitecnet" />

            {/* Cabecera de la página */}
            <div className="bg-slate-900 text-white rounded-[2rem] mx-4 sm:mx-6 lg:mx-8 mt-6 mb-16 px-6 py-20 lg:py-28 text-center shadow-xl relative overflow-hidden">
                <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#cbd5e1_1px,transparent_1px)] [background-size:24px_24px]"></div>
                <div className="relative z-10 max-w-3xl mx-auto">
                    <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-6">Conoce a Servitecnet</h1>
                    <p className="text-lg text-slate-300 leading-relaxed font-medium">
                        Somos especialistas en proveer soluciones técnicas y maquinaria de alto rendimiento para el sector construcción e industria en todo el Perú.
                    </p>
                </div>
            </div>

            {/* Contenido Principal */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-24 grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20 items-center">
                
                {/* Texto: Misión y Visión */}
                <div className="space-y-10">
                    <div className="group">
                        <h2 className="text-3xl font-extrabold text-slate-900 mb-4 flex items-center">
                            <span className="bg-blue-100 text-blue-600 p-2 rounded-lg mr-3 group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300">
                                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg>
                            </span>
                            Nuestra Misión
                        </h2>
                        <p className="text-slate-600 leading-relaxed text-lg">
                            Brindar equipos de primera calidad que optimicen los tiempos y garanticen la seguridad en cada obra, ofreciendo además un servicio de asesoría técnica que asegure el éxito de nuestros clientes.
                        </p>
                    </div>

                    <div className="group">
                        <h2 className="text-3xl font-extrabold text-slate-900 mb-4 flex items-center">
                            <span className="bg-emerald-100 text-emerald-600 p-2 rounded-lg mr-3 group-hover:bg-emerald-600 group-hover:text-white transition-colors duration-300">
                                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                            </span>
                            Nuestra Visión
                        </h2>
                        <p className="text-slate-600 leading-relaxed text-lg">
                            Ser la empresa referente a nivel nacional en la distribución de maquinaria ligera y pesada, destacando por nuestra confiabilidad, innovación y soporte continuo.
                        </p>
                    </div>
                </div>

                {/* Imagen Corporativa (Placeholder elegante) */}
                <div className="bg-slate-100 rounded-3xl aspect-square flex items-center justify-center p-8 ring-1 ring-slate-200 shadow-inner overflow-hidden relative group">
                    <div className="absolute inset-0 bg-blue-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    <svg className="w-32 h-32 text-slate-300 transform group-hover:scale-110 transition-transform duration-700 ease-out" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"></path>
                    </svg>
                </div>
            </div>
        </MainLayout>
    );
}
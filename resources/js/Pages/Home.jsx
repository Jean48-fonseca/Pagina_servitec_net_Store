import { Head, Link } from '@inertiajs/react';
import MainLayout from '@/Layouts/MainLayout';

export default function Home({ categories, featuredProducts }) {
    return (
        <MainLayout>
            <Head title="Inicio | Servitecnet" />

            {/* HERO SECTION */}
            <div className="relative bg-slate-900 overflow-hidden rounded-[2rem] mx-4 sm:mx-6 lg:mx-8 mt-6 mb-16 shadow-[0_32px_64px_-12px_rgba(0,0,0,0.3)]">
                {/* Patrón sutil optimizado */}
                <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#cbd5e1_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none"></div>
                
                <div className="relative max-w-7xl mx-auto px-6 py-24 lg:px-12 lg:py-36 flex flex-col items-center text-center">
                    <span className="text-blue-400 font-bold tracking-[0.15em] uppercase text-xs sm:text-sm mb-6 opacity-90">
                        Maquinaria de Alto Rendimiento
                    </span>
                    <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold text-white tracking-tight mb-8 leading-[1.1] max-w-4xl">
                        Potencia y Precisión para tu Obra
                    </h1>
                    <p className="text-lg md:text-xl text-slate-300 max-w-2xl mb-12 leading-relaxed font-medium">
                        En Servitecnet proveemos equipos técnicos especializados. Encuentra la maquinaria exacta para llevar tus proyectos de construcción al siguiente nivel.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
                        {/* Botón Primario - Feedback Táctil Emil Style */}
                        <Link 
                            href={route('catalog')} 
                            className="bg-blue-600 hover:bg-blue-500 text-white font-bold py-4 px-8 rounded-xl shadow-[0_8px_16px_rgba(37,99,235,0.2)] hover:shadow-[0_16px_32px_rgba(37,99,235,0.3)] active:scale-[0.97] transition-all duration-300 ease-[cubic-bezier(0.23,1,0.32,1)] text-lg w-full sm:w-auto"
                        >
                            Explorar Catálogo
                        </Link>
                        {/* Botón Secundario - Contraste suave */}
                        <Link 
                            href={route('contact')} 
                            className="bg-slate-800/80 hover:bg-slate-700 text-white font-bold py-4 px-8 rounded-xl ring-1 ring-slate-700 hover:ring-slate-500 active:scale-[0.97] transition-all duration-300 ease-[cubic-bezier(0.23,1,0.32,1)] text-lg w-full sm:w-auto backdrop-blur-sm"
                        >
                            Solicitar Asesoría
                        </Link>
                    </div>
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-24">
                
                {/* SECCIÓN: Líneas de Negocio */}
                <div className="mb-24">
                    <div className="flex items-end justify-between mb-8 border-b border-slate-200/60 pb-5">
                        <h2 className="text-3xl font-extrabold text-slate-900 tracking-tight">Líneas de Negocio</h2>
                    </div>
                    
                    {categories && categories.length > 0 ? (
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                            {categories.map((category) => (
                                <div 
                                    key={category.id} 
                                    className="bg-slate-50/50 rounded-2xl p-6 ring-1 ring-slate-200 hover:ring-blue-200 hover:shadow-[0_8px_24px_rgba(0,0,0,0.04)] hover:-translate-y-0.5 transition-all duration-500 ease-[cubic-bezier(0.23,1,0.32,1)] group cursor-default"
                                >
                                    <h3 className="text-xl font-bold text-slate-800 mb-4 group-hover:text-blue-700 transition-colors duration-300">
                                        {category.name}
                                    </h3>
                                    <ul className="space-y-2.5">
                                        {category.subcategories?.map(sub => (
                                            <li key={sub.id} className="text-sm font-medium text-slate-500 flex items-center group-hover:text-slate-600 transition-colors">
                                                <span className="w-1.5 h-1.5 rounded-full bg-slate-300 group-hover:bg-blue-400 mr-3 transition-colors duration-300"></span>
                                                {sub.name}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            ))}
                        </div>
                    ) : (
                        <p className="text-slate-500 italic">No hay categorías configuradas aún.</p>
                    )}
                </div>

                {/* SECCIÓN: Equipos Destacados */}
                <div>
                    <div className="flex items-end justify-between mb-8 border-b border-slate-200/60 pb-5">
                        <div>
                            <h2 className="text-3xl font-extrabold text-slate-900 tracking-tight">Equipos Destacados</h2>
                            <p className="text-slate-500 mt-2 font-medium">Nuestra maquinaria más solicitada del mes.</p>
                        </div>
                        {/* Enlace con microinteracción elástica */}
                        <Link 
                            href={route('catalog')} 
                            className="hidden sm:inline-flex text-blue-600 hover:text-blue-700 font-bold items-center group transition-colors"
                        >
                            Ver todos 
                            <svg className="w-4 h-4 ml-1.5 transform group-hover:translate-x-1.5 transition-transform duration-500 ease-[cubic-bezier(0.34,1.56,0.64,1)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M9 5l7 7-7 7"></path>
                            </svg>
                        </Link>
                    </div>

                    {featuredProducts && featuredProducts.length > 0 ? (
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
                            {featuredProducts.map((product) => (
                                <Link 
                                    key={product.id} 
                                    href={route('product.show', product.slug)}
                                    className="group flex flex-col bg-white rounded-2xl ring-1 ring-slate-200 hover:ring-blue-200 shadow-sm hover:shadow-[0_12px_24px_-4px_rgba(0,0,0,0.05)] transition-all duration-500 ease-[cubic-bezier(0.23,1,0.32,1)] overflow-hidden hover:-translate-y-1 active:scale-[0.98]"
                                >
                                    {/* Imagen optimizada sin saltos de layout */}
                                    <div className="aspect-[4/3] w-full bg-slate-50 flex items-center justify-center p-8 relative overflow-hidden border-b border-slate-100/80">
                                        <img 
                                            src={product.image ? `/storage/${product.image}` : '/img/placeholder.png'} 
                                            alt={product.name} 
                                            className="w-full h-full object-contain transform group-hover:scale-[1.03] transition-transform duration-700 ease-[cubic-bezier(0.23,1,0.32,1)] mix-blend-multiply"
                                        />
                                        <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-md px-3 py-1 rounded-full text-xs font-bold text-slate-700 shadow-sm ring-1 ring-slate-200 uppercase tracking-wider tabular-nums">
                                            {product.model}
                                        </div>
                                    </div>
                                    <div className="p-6 flex flex-col flex-grow">
                                        <h3 className="text-lg font-bold text-slate-900 leading-snug mb-2 group-hover:text-blue-700 transition-colors duration-300">
                                            {product.name}
                                        </h3>
                                        <div className="mt-auto pt-4 flex items-center justify-between border-t border-slate-100/80">
                                            {/* tabular-nums para precios fluidos */}
                                            <span className="text-xl font-extrabold text-slate-900 tabular-nums">
                                                S/. {parseFloat(product.price).toFixed(2)}
                                            </span>
                                            {/* Feedback de acción en el botón inferior */}
                                            <span className="text-blue-600 bg-blue-50 p-2.5 rounded-xl group-hover:bg-blue-600 group-hover:text-white transition-all duration-300 ease-out group-active:scale-95">
                                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                                                </svg>
                                            </span>
                                        </div>
                                    </div>
                                </Link>
                            ))}
                        </div>
                    ) : (
                        <p className="text-slate-500 italic">No hay equipos destacados por el momento.</p>
                    )}
                </div>

            </div>
        </MainLayout>
    );
}
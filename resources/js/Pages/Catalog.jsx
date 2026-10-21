import { Head, Link } from '@inertiajs/react';
import MainLayout from '@/Layouts/MainLayout';

export default function Catalog({ products }) {
    return (
        <MainLayout>
            <Head title="Catálogo de Equipos | Servitecnet" />

            {/* Cabecera Corporativa Sólida */}
            <div className="bg-slate-900 text-slate-50 py-16 px-6 lg:px-8 mb-12 shadow-inner">
                <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-end gap-8">
                    <div className="max-w-2xl">
                        <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-4 text-white">
                            Catálogo de Equipos
                        </h1>
                        <p className="text-slate-400 text-lg leading-relaxed max-w-xl">
                            Soluciones técnicas de alto rendimiento. Encuentra la maquinaria exacta para llevar tu proyecto al siguiente nivel con total seguridad.
                        </p>
                    </div>
                    
                    {/* Filtros Integrados */}
                    <div className="w-full md:w-auto flex flex-col gap-2">
                        <label className="text-sm font-semibold text-slate-400 uppercase tracking-wider">
                            Ordenar catálogo
                        </label>
                        <div className="relative">
                            <select className="w-full md:w-64 appearance-none bg-slate-800 border border-slate-700 text-white py-3 pl-4 pr-10 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all cursor-pointer font-medium shadow-sm">
                                <option>Alfabéticamente, A-Z</option>
                                <option>Alfabéticamente, Z-A</option>
                                <option>Precio: Menor a Mayor</option>
                                <option>Precio: Mayor a Menor</option>
                            </select>
                            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-slate-400">
                                <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                                    <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/>
                                </svg>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Cuadrícula de Productos */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-24">
                {products.data.length > 0 ? (
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-8">
                        {products.data.map((product) => (
                            <Link 
                                key={product.id} 
                                href={route('product.show', product.slug)}
                                className="group flex flex-col bg-white rounded-2xl ring-1 ring-slate-200 hover:ring-blue-300 shadow-sm hover:shadow-xl transition-all duration-300 ease-out overflow-hidden hover:-translate-y-1"
                            >
                                {/* Área de Imagen con fondo teñido y Zoom fluido */}
                                <div className="aspect-[4/3] w-full bg-slate-50 flex items-center justify-center p-8 relative overflow-hidden border-b border-slate-100">
                                    <img 
                                        src={product.image ? `/storage/${product.image}` : '/img/placeholder.png'} 
                                        alt={product.name} 
                                        className="w-full h-full object-contain transform group-hover:scale-105 transition-transform duration-700 ease-out mix-blend-multiply"
                                    />
                                    {/* Etiqueta del Modelo */}
                                    <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-md px-3 py-1 rounded-full text-xs font-bold text-slate-700 shadow-sm border border-slate-100 uppercase tracking-wider">
                                        {product.model}
                                    </div>
                                </div>

                                {/* Detalles Inferiores */}
                                <div className="p-6 flex flex-col flex-grow">
                                    <h3 className="text-lg font-bold text-slate-900 leading-snug mb-2 group-hover:text-blue-700 transition-colors">
                                        {product.name}
                                    </h3>
                                    
                                    <div className="mt-auto pt-4 flex items-center justify-between border-t border-slate-100">
                                        <span className="text-xl font-extrabold text-slate-900">
                                            S/. {parseFloat(product.price).toFixed(2)}
                                        </span>
                                        {/* Botón de acción iconográfico */}
                                        <span className="text-blue-600 bg-blue-50 p-2.5 rounded-lg group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300">
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
                    /* Estado Vacío (Empty State) Profesional */
                    <div className="flex flex-col items-center justify-center py-32 text-center bg-slate-50 rounded-2xl border border-dashed border-slate-300">
                        <div className="text-slate-400 mb-4 bg-white p-4 rounded-full shadow-sm ring-1 ring-slate-100">
                            <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"></path>
                            </svg>
                        </div>
                        <h3 className="text-xl font-bold text-slate-800">Catálogo en actualización</h3>
                        <p className="text-slate-500 mt-2 max-w-md mx-auto">Actualmente estamos preparando nuestro inventario de equipos. Vuelve a revisar pronto.</p>
                    </div>
                )}
            </div>
        </MainLayout>
    );
}
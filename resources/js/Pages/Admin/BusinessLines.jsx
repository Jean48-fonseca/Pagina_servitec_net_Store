import { Head, Link } from '@inertiajs/react';
import MainLayout from '@/Layouts/MainLayout';

export default function BusinessLines() {
    return (
        <MainLayout>
            <Head title="Líneas de Negocio | Admin" />
            
            <div className="max-w-5xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
                
                <div className="mb-10">
                    <Link href={route('admin.dashboard')} className="text-emerald-600 hover:underline text-sm font-semibold mb-4 inline-block">
                        ← Volver al Panel Principal
                    </Link>
                    <h2 className="text-3xl font-extrabold text-slate-900">Gestión de Líneas de Negocio</h2>
                    <p className="mt-2 text-slate-500 text-lg">Elige qué estructura deseas configurar para el catálogo.</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    
                    {/* Botón a Categorías Principales */}
                    <div className="bg-white rounded-2xl p-8 ring-1 ring-slate-200 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group flex flex-col h-full">
                        <div className="bg-emerald-50 w-16 h-16 rounded-xl flex items-center justify-center text-emerald-600 mb-6 group-hover:bg-emerald-600 group-hover:text-white transition-colors">
                            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z"></path>
                            </svg>
                        </div>
                        <h3 className="text-2xl font-bold text-slate-900 mb-3">Categorías Principales</h3>
                        <p className="text-slate-500 mb-8 flex-grow">
                            Administra los grupos mayores (Ej. Maquinaria de Construcción, Herramientas Eléctricas).
                        </p>
                        <Link 
                         href={route('admin.categories.index')} 
                         className="group relative flex justify-center items-center bg-blue-200 hover:bg-blue-600 font-bold py-3 px-6 rounded-lg transition-all duration-300 ease-out shadow-sm"
                        >
                         <span className="text-blue-800 group-hover:text-white transition-colors duration-300">
                          Ir a Categorías
                          </span>
                        </Link>
                    </div>

                    {/* Botón a Subcategorías */}
                    <div className="bg-white rounded-2xl p-8 ring-1 ring-slate-200 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group flex flex-col h-full">
                        <div className="bg-emerald-50 w-16 h-16 rounded-xl flex items-center justify-center text-emerald-600 mb-6 group-hover:bg-emerald-600 group-hover:text-white transition-colors">
                            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z"></path>
                            </svg>
                        </div>
                        <h3 className="text-2xl font-bold text-slate-900 mb-3">Subcategorías (Líneas)</h3>
                        <p className="text-slate-500 mb-8 flex-grow">
                            Administra las líneas específicas y asígnalas a una categoría padre (Ej. Alisadoras, Apisonadoras).
                        </p>
                        <Link 
                            href={route('admin.subcategories.index')} 
                            className="bg-emerald-50 hover:bg-emerald-100 text-emerald-700 font-bold py-3 px-6 rounded-lg text-center transition-colors"
                        >
                            Ir a Subcategorías
                        </Link>
                    </div>

                </div>
            </div>
        </MainLayout>
    );
}
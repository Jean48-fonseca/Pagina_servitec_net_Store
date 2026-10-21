import { Head, Link } from '@inertiajs/react';
import MainLayout from '@/Layouts/MainLayout';

export default function Dashboard({ auth }) {
    return (
        <MainLayout>
            <Head title="Panel de Administración | Servitecnet" />

            <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
                
                {/* Cabecera del Dashboard */}
                <div className="mb-10 bg-white p-8 rounded-2xl ring-1 ring-slate-200 shadow-sm flex flex-col md:flex-row justify-between items-center gap-6">
                    <div>
                        <h2 className="text-3xl font-extrabold text-slate-900 tracking-tight">
                            Panel de Administración
                        </h2>
                        <p className="mt-2 text-lg text-slate-500">
                            Bienvenido, <span className="font-semibold text-blue-600">{auth.user.name}</span>. Desde aquí puedes gestionar el contenido de tu web.
                        </p>
                    </div>
                    <div className="bg-slate-50 border border-slate-100 rounded-lg px-4 py-3 text-sm text-slate-500 font-medium">
                        <i className="fas fa-shield-alt text-blue-500 mr-2"></i> Acceso Nivel Administrador
                    </div>
                </div>

                {/* Tarjetas de Módulos (Acciones Rápidas) */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    
                    {/* Módulo 1: Productos */}
                    <div className="bg-white rounded-2xl p-8 ring-1 ring-slate-200 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 ease-out group">
                        <div className="flex items-center justify-between mb-6">
                            <div className="bg-blue-50 p-4 rounded-xl text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300">
                                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"></path>
                                </svg>
                            </div>
                        </div>
                        <h3 className="text-xl font-bold text-slate-900 mb-2">Catálogo de Equipos</h3>
                        <p className="text-slate-500 text-sm mb-6 leading-relaxed">
                            Agrega nuevas herramientas, edita precios, descripciones o elimina modelos descatalogados.
                        </p>
                        <Link href={route('admin.products.index')} className="inline-flex items-center justify-center w-full bg-slate-50 hover:bg-blue-50 text-blue-600 font-bold py-3 px-4 rounded-lg transition-colors group-hover:ring-1 group-hover:ring-blue-200">
                            Gestionar Equipos
                        </Link>
                    </div>

                    {/* Módulo 2: Categorías */}
                    <div className="bg-white rounded-2xl p-8 ring-1 ring-slate-200 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 ease-out group">
                        <div className="flex items-center justify-between mb-6">
                            <div className="bg-emerald-50 p-4 rounded-xl text-emerald-600 group-hover:bg-emerald-600 group-hover:text-white transition-colors duration-300">
                                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"></path>
                                </svg>
                            </div>
                        </div>
                        <h3 className="text-xl font-bold text-slate-900 mb-2">Líneas de Negocio</h3>
                        <p className="text-slate-500 text-sm mb-6 leading-relaxed">
                            Organiza tu tienda creando nuevas categorías o subcategorías para clasificar la maquinaria.
                        </p>
                        <Link href={route('admin.business-lines')} className="inline-flex items-center justify-center w-full bg-slate-50 hover:bg-emerald-50 text-emerald-600 font-bold py-3 px-4 rounded-lg transition-colors group-hover:ring-1 group-hover:ring-emerald-200">
                        Gestionar Categorías
                        </Link>
                    </div>

                    {/* Módulo 3: Clientes */}
                    <div className="bg-white rounded-2xl p-8 ring-1 ring-slate-200 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 ease-out group">
                        <div className="flex items-center justify-between mb-6">
                            <div className="bg-purple-50 p-4 rounded-xl text-purple-600 group-hover:bg-purple-600 group-hover:text-white transition-colors duration-300">
                                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"></path>
                                </svg>
                            </div>
                        </div>
                        <h3 className="text-xl font-bold text-slate-900 mb-2">Base de Clientes</h3>
                        <p className="text-slate-500 text-sm mb-6 leading-relaxed">
                            Visualiza la lista de usuarios que se han registrado en el portal para realizar consultas.
                        </p>
                        <Link href={route('admin.clients.index')} className="inline-flex items-center justify-center w-full bg-slate-50 hover:bg-purple-50 text-purple-600 font-bold py-3 px-4 rounded-lg transition-colors group-hover:ring-1 group-hover:ring-purple-200">
                         Ver Clientes
                        </Link>
                    </div>

                </div>
            </div>
        </MainLayout>
    );
}
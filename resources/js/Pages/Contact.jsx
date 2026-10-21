import { Head } from '@inertiajs/react';
import MainLayout from '@/Layouts/MainLayout';

export default function Contact() {
    return (
        <MainLayout>
            <Head title="Contactos | Servitecnet" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 mb-16">
                
                <div className="text-center max-w-2xl mx-auto mb-16">
                    <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight mb-4">¿Necesitas asesoría?</h1>
                    <p className="text-lg text-slate-500">
                        Ponte en contacto con nuestros especialistas. Estamos listos para ayudarte a elegir el equipo perfecto para tu obra.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    
                    {/* Tarjeta: WhatsApp */}
                    <a 
                        href="https://wa.me/51922657185" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="bg-white rounded-2xl p-8 ring-1 ring-slate-200 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 ease-out group text-center block"
                    >
                        <div className="w-16 h-16 bg-green-50 text-green-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:bg-green-500 group-hover:text-white transition-colors duration-300">
                            <i className="fab fa-whatsapp text-3xl"></i>
                        </div>
                        <h3 className="text-xl font-bold text-slate-900 mb-2">WhatsApp Directo</h3>
                        <p className="text-slate-500 mb-4">Respuesta rápida para cotizaciones.</p>
                        <span className="text-green-600 font-bold text-lg tabular-nums">+51 922 657 185</span>
                    </a>

                    {/* Tarjeta: Dirección */}
                    <div className="bg-white rounded-2xl p-8 ring-1 ring-slate-200 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 ease-out group text-center cursor-default">
                        <div className="w-16 h-16 bg-blue-50 text-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300">
                            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>
                        </div>
                        <h3 className="text-xl font-bold text-slate-900 mb-2">Visítanos</h3>
                        <p className="text-slate-500 mb-4">Conoce nuestros equipos en persona.</p>
                        <span className="text-slate-800 font-bold text-md">Av. Dirección Servitecnet<br/>Lima, Perú</span>
                    </div>

                    {/* Tarjeta: Email */}
                    <div className="bg-white rounded-2xl p-8 ring-1 ring-slate-200 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 ease-out group text-center cursor-default">
                        <div className="w-16 h-16 bg-purple-50 text-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:bg-purple-600 group-hover:text-white transition-colors duration-300">
                            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
                        </div>
                        <h3 className="text-xl font-bold text-slate-900 mb-2">Correo Electrónico</h3>
                        <p className="text-slate-500 mb-4">Envíanos tus requerimientos formales.</p>
                        <span className="text-slate-800 font-bold text-md">ventas@servitecnet.com</span>
                    </div>

                </div>
            </div>
        </MainLayout>
    );
}
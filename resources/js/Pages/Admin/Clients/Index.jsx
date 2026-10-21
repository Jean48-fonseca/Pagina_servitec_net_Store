import { Head, Link } from '@inertiajs/react';
import MainLayout from '@/Layouts/MainLayout';

export default function Index({ clients }) {
    // Función para formatear la fecha de registro
    const formatDate = (dateString) => {
        const options = { year: 'numeric', month: 'long', day: 'numeric' };
        return new Date(dateString).toLocaleDateString('es-PE', options);
    };

    return (
        <MainLayout>
            <Head title="Base de Clientes | Admin" />
            
            <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
                
                <div className="mb-8">
                    <Link href={route('admin.dashboard')} className="text-purple-600 hover:underline text-sm font-semibold mb-4 inline-block">
                        ← Volver al Panel Principal
                    </Link>
                    <h2 className="text-3xl font-extrabold text-slate-900">Base de Clientes</h2>
                    <p className="mt-1 text-slate-500 font-medium">Usuarios registrados en la plataforma Servitecnet.</p>
                </div>

                <div className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden">
                    <div className="overflow-x-auto">
                        <table className="min-w-full divide-y divide-slate-200">
                            <thead className="bg-slate-50">
                                <tr>
                                    <th className="px-6 py-4 text-left text-xs font-bold text-slate-500 uppercase tracking-wider">Nombre del Cliente</th>
                                    <th className="px-6 py-4 text-left text-xs font-bold text-slate-500 uppercase tracking-wider">Correo Electrónico</th>
                                    <th className="px-6 py-4 text-left text-xs font-bold text-slate-500 uppercase tracking-wider">Fecha de Registro</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-slate-100 bg-white">
                                {clients.data.map((client) => (
                                    <tr key={client.id} className="hover:bg-slate-50 transition-colors">
                                        <td className="px-6 py-4 whitespace-nowrap">
                                            <div className="flex items-center">
                                                <div className="h-10 w-10 flex-shrink-0 bg-purple-100 text-purple-600 rounded-full flex items-center justify-center font-bold text-lg">
                                                    {client.name.charAt(0).toUpperCase()}
                                                </div>
                                                <div className="ml-4">
                                                    <div className="text-sm font-bold text-slate-900">{client.name}</div>
                                                </div>
                                            </div>
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm text-slate-600 font-medium">
                                            {client.email}
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm text-slate-500 tabular-nums">
                                            {formatDate(client.created_at)}
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                    
                    {/* Estado Vacío */}
                    {clients.data.length === 0 && (
                        <div className="text-center py-16">
                            <div className="bg-slate-50 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-slate-400">
                                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"></path></svg>
                            </div>
                            <h3 className="text-lg font-bold text-slate-800">Sin clientes registrados</h3>
                            <p className="text-slate-500 mt-1">Cuando los usuarios creen una cuenta, aparecerán aquí.</p>
                        </div>
                    )}
                </div>

            </div>
        </MainLayout>
    );
}
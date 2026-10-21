import { Head, Link, useForm } from '@inertiajs/react';
import MainLayout from '@/Layouts/MainLayout';

export default function Index({ products }) {
    function handleDelete(id) {
        if (confirm('¿Estás seguro de eliminar este equipo? Esta acción no se puede deshacer.')) {
            router.delete(route('admin.products.destroy', id));
        }
    }
    return (
        <MainLayout>
            <Head title="Gestionar Equipos | Admin" />
            
            <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
                
                {/* Cabecera del CRUD */}
                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-8 gap-4">
                    <div>
                        <h2 className="text-3xl font-extrabold text-slate-900">Catálogo de Equipos</h2>
                        <p className="mt-1 text-slate-500 font-medium">Gestiona el inventario de Servitecnet.</p>
                    </div>
                    {/* Botón para Crear (La ruta la haremos en el siguiente paso) */}
                    <Link 
                       href={route('admin.products.create')} 
                       className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg shadow-sm hover:shadow-md transition-all flex items-center hover:-translate-y-0.5"
                     >
                        <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4v16m8-8H4"></path>
                        </svg>
                        Nuevo Equipo
                    </Link>
                </div>

                {/* Tabla de Productos */}
                <div className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden">
                    <div className="overflow-x-auto">
                        <table className="min-w-full divide-y divide-slate-200">
                            <thead className="bg-slate-50">
                                <tr>
                                    <th className="px-6 py-4 text-left text-xs font-bold text-slate-500 uppercase tracking-wider">Producto</th>
                                    <th className="px-6 py-4 text-left text-xs font-bold text-slate-500 uppercase tracking-wider">Modelo</th>
                                    <th className="px-6 py-4 text-left text-xs font-bold text-slate-500 uppercase tracking-wider">Precio</th>
                                    <th className="px-6 py-4 text-right text-xs font-bold text-slate-500 uppercase tracking-wider">Acciones</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-slate-100 bg-white">
                                {products.data.map((product) => (
                                    <tr key={product.id} className="hover:bg-slate-50 transition-colors group">
                                        <td className="px-6 py-4 whitespace-nowrap">
                                            <div className="flex items-center">
                                                <div className="h-12 w-12 flex-shrink-0 bg-white border border-slate-100 rounded-lg flex items-center justify-center p-1 overflow-hidden shadow-sm">
                                                    <img src={product.image ? `/storage/${product.image}` : '/img/placeholder.png'} alt="" className="max-h-full object-contain mix-blend-multiply group-hover:scale-110 transition-transform" />
                                                </div>
                                                <div className="ml-4">
                                                    <div className="text-sm font-bold text-slate-900">{product.name}</div>
                                                </div>
                                            </div>
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium space-x-4">
                                        <Link 
                                         href={route('admin.products.edit', product.id)} 
                                        className="text-blue-600 hover:text-blue-900 font-bold transition-colors"
                                        >
                                            Editar
                                        </Link>
                                     <button 
                                        onClick={() => handleDelete(product.id)} 
                                  className="text-red-500 hover:text-red-800 font-bold transition-colors"
                                     >
                                            Eliminar
                                     </button>
                                    </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                    {/* Estado vacío por si borras todos los productos */}
                    {products.data.length === 0 && (
                        <div className="text-center py-16 text-slate-500">
                            No hay equipos registrados actualmente.
                        </div>
                    )}
                </div>

            </div>
        </MainLayout>
    );
}
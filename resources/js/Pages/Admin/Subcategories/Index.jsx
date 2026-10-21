import { Head, Link } from '@inertiajs/react';
import MainLayout from '@/Layouts/MainLayout';


export default function Index({ subcategories }) {
    function handleDelete(id) {
        if (confirm('¿Estás seguro de eliminar esta línea de negocio? Se eliminarán también los equipos asociados.')) {
            router.delete(route('admin.subcategories.destroy', id));
        }
    }
    return (
        <MainLayout>
            <Head title="Subcategorías | Admin" />
            <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-8 gap-4">
                    <div>
                        <h2 className="text-3xl font-extrabold text-slate-900">Líneas de Negocio</h2>
                        <p className="mt-1 text-slate-500 font-medium">Gestiona las subcategorías de los equipos.</p>
                    </div>
                    <Link href={route('admin.subcategories.create')} className="bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-3 px-6 rounded-lg shadow-sm transition-all flex items-center">
                        + Nueva Subcategoría
                    </Link>
                </div>

                <div className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden">
                    <table className="min-w-full divide-y divide-slate-200">
                        <thead className="bg-slate-50">
                            <tr>
                                <th className="px-6 py-4 text-left text-xs font-bold text-slate-500 uppercase">Nombre</th>
                                <th className="px-6 py-4 text-left text-xs font-bold text-slate-500 uppercase">Categoría Principal</th>
                                <th className="px-6 py-4 text-right text-xs font-bold text-slate-500 uppercase">Acciones</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-slate-100">
                            {subcategories.data.map((sub) => (
                                <tr key={sub.id} className="hover:bg-slate-50">
                                    <td className="px-6 py-4 font-bold text-slate-900">{sub.name}</td>
                                    <td className="px-6 py-4 text-slate-600">{sub.category?.name}</td>
                                    <td className="px-6 py-4 text-right space-x-4">
                                        <Link href={route('admin.subcategories.edit', sub.id)} className="text-emerald-500 hover:text-emerald-800">
                                            Editar
                                        </Link>
                                        <button onClick={() => handleDelete(sub.id)} className="text-red-500 hover:text-red-800">
                                            Eliminar
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </MainLayout>
    );
}
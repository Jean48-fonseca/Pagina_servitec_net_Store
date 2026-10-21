import { Head, Link, useForm } from '@inertiajs/react';
import MainLayout from '@/Layouts/MainLayout';

export default function Edit({ category }) {
    const { data, setData, put, processing, errors } = useForm({
        name: category.name,
    });

    function handleSubmit(e) {
        e.preventDefault();
        put(route('admin.categories.update', category.id));
    }

    return (
        <MainLayout>
            <Head title="Editar Categoría | Admin" />
            <div className="max-w-2xl mx-auto py-12 px-4">
                <div className="mb-8">
                    <Link href={route('admin.categories.index')} className="text-emerald-600 hover:underline text-sm mb-4 block">← Volver a la lista</Link>
                    <h2 className="text-3xl font-extrabold text-slate-900">Editar Categoría Principal</h2>
                </div>

                <form onSubmit={handleSubmit} className="bg-white rounded-2xl shadow-sm ring-1 ring-slate-200 overflow-hidden">
                    <div className="p-8 space-y-6">
                        <div>
                            <label className="block text-sm font-bold text-slate-700 mb-2">Nombre de la Categoría</label>
                            <input 
                                type="text" 
                                value={data.name} 
                                onChange={e => setData('name', e.target.value)}
                                className="w-full rounded-lg border-slate-300 focus:border-emerald-500 focus:ring-emerald-500"
                            />
                            {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
                        </div>
                    </div>
                    <div className="bg-slate-50 px-8 py-5 border-t border-slate-200 flex justify-end">
                        <button type="submit" disabled={processing} className="bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-3 px-8 rounded-lg shadow-sm disabled:opacity-50">
                            {processing ? 'Actualizando...' : 'Guardar Cambios'}
                        </button>
                    </div>
                </form>
            </div>
        </MainLayout>
    );
}
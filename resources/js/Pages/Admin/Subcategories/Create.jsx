import { Head, Link, useForm } from '@inertiajs/react';
import MainLayout from '@/Layouts/MainLayout';

export default function Create({ categories }) {
    const { data, setData, post, processing, errors } = useForm({
        name: '',
        category_id: '',
    });

    function handleSubmit(e) {
        e.preventDefault();
        post(route('admin.subcategories.store'));
    }

    return (
        <MainLayout>
            <Head title="Nueva Subcategoría | Admin" />
            <div className="max-w-2xl mx-auto py-12 px-4">
                <div className="mb-8">
                    <Link href={route('admin.subcategories.index')} className="text-emerald-600 hover:underline text-sm mb-4 block">← Volver a la lista</Link>
                    <h2 className="text-3xl font-extrabold text-slate-900">Registrar Subcategoría</h2>
                </div>

                <form onSubmit={handleSubmit} className="bg-white rounded-2xl shadow-sm ring-1 ring-slate-200 overflow-hidden">
                    <div className="p-8 space-y-6">
                        <div>
                            <label className="block text-sm font-bold text-slate-700 mb-2">Nombre de la Subcategoría</label>
                            <input 
                                type="text" 
                                value={data.name} 
                                onChange={e => setData('name', e.target.value)}
                                className="w-full rounded-lg border-slate-300 focus:border-emerald-500 focus:ring-emerald-500"
                                placeholder="Ej. Apisonadoras"
                            />
                            {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
                        </div>

                        <div>
                            <label className="block text-sm font-bold text-slate-700 mb-2">Categoría Principal Padre</label>
                            <select 
                                value={data.category_id} 
                                onChange={e => setData('category_id', e.target.value)}
                                className="w-full rounded-lg border-slate-300 focus:border-emerald-500 focus:ring-emerald-500"
                            >
                                <option value="">Seleccione una categoría...</option>
                                {categories.map(cat => (
                                    <option key={cat.id} value={cat.id}>{cat.name}</option>
                                ))}
                            </select>
                            {errors.category_id && <p className="text-red-500 text-sm mt-1">{errors.category_id}</p>}
                        </div>
                    </div>
                    <div className="bg-slate-50 px-8 py-5 border-t border-slate-200 flex justify-end">
                        <button type="submit" disabled={processing} className="bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-3 px-8 rounded-lg shadow-sm disabled:opacity-50">
                            {processing ? 'Guardando...' : 'Guardar Subcategoría'}
                        </button>
                    </div>
                </form>
            </div>
        </MainLayout>
    );
}
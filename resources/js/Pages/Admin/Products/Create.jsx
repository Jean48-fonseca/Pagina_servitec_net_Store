import { Head, Link, useForm } from '@inertiajs/react';
import MainLayout from '@/Layouts/MainLayout';

export default function Create({ subcategories }) {
    const { data, setData, post, processing, errors } = useForm({
        name: '',
        model: '',
        subcategory_id: '',
        price: '',
        description: '',
        image: null,
    });

    function handleSubmit(e) {
        e.preventDefault();
        post(route('admin.products.store'));
    }

    return (
        <MainLayout>
            <Head title="Nuevo Equipo | Admin" />

            <div className="max-w-4xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
                
                <div className="mb-8">
                    <Link href={route('admin.products.index')} className="text-blue-600 hover:underline font-semibold flex items-center text-sm mb-4">
                        ← Volver al inventario
                    </Link>
                    <h2 className="text-3xl font-extrabold text-slate-900">Registrar Nuevo Equipo</h2>
                    <p className="text-slate-500 mt-1">Completa los datos técnicos de la maquinaria.</p>
                </div>

                <form onSubmit={handleSubmit} className="bg-white rounded-2xl shadow-sm ring-1 ring-slate-200 overflow-hidden">
                    <div className="p-8 space-y-6">
                        
                        {/* Fila 1: Nombre y Modelo */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div>
                                <label className="block text-sm font-bold text-slate-700 mb-2">Nombre del Equipo</label>
                                <input 
                                    type="text" 
                                    value={data.name} 
                                    onChange={e => setData('name', e.target.value)}
                                    className="w-full rounded-lg border-slate-300 focus:border-blue-500 focus:ring-blue-500 shadow-sm"
                                    placeholder="Ej. Alisadora de concreto Bonelly"
                                />
                                {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
                            </div>
                            <div>
                                <label className="block text-sm font-bold text-slate-700 mb-2">Modelo Técnico</label>
                                <input 
                                    type="text" 
                                    value={data.model} 
                                    onChange={e => setData('model', e.target.value)}
                                    className="w-full rounded-lg border-slate-300 focus:border-blue-500 focus:ring-blue-500 shadow-sm"
                                    placeholder="Ej. MT24-4"
                                />
                                {errors.model && <p className="text-red-500 text-sm mt-1">{errors.model}</p>}
                            </div>
                        </div>

                        {/* Fila 2: Categoría y Precio */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div>
                                <label className="block text-sm font-bold text-slate-700 mb-2">Subcategoría</label>
                                <select 
                                    value={data.subcategory_id} 
                                    onChange={e => setData('subcategory_id', e.target.value)}
                                    className="w-full rounded-lg border-slate-300 focus:border-blue-500 focus:ring-blue-500 shadow-sm"
                                >
                                    <option value="">Seleccione una línea de negocio</option>
                                    {subcategories.map(sub => (
                                        <option key={sub.id} value={sub.id}>{sub.name}</option>
                                    ))}
                                </select>
                                {errors.subcategory_id && <p className="text-red-500 text-sm mt-1">{errors.subcategory_id}</p>}
                            </div>
                            <div>
                                <label className="block text-sm font-bold text-slate-700 mb-2">Precio (S/.)</label>
                                <input 
                                    type="number" 
                                    step="0.01"
                                    value={data.price} 
                                    onChange={e => setData('price', e.target.value)}
                                    className="w-full rounded-lg border-slate-300 focus:border-blue-500 focus:ring-blue-500 shadow-sm"
                                    placeholder="0.00"
                                />
                                {errors.price && <p className="text-red-500 text-sm mt-1">{errors.price}</p>}
                            </div>
                        </div>

                        {/* Fila 3: Descripción */}
                        <div>
                            <label className="block text-sm font-bold text-slate-700 mb-2">Descripción Detallada</label>
                            <textarea 
                                rows="4" 
                                value={data.description} 
                                onChange={e => setData('description', e.target.value)}
                                className="w-full rounded-lg border-slate-300 focus:border-blue-500 focus:ring-blue-500 shadow-sm"
                                placeholder="Especificaciones, motor, garantías..."
                            />
                            {errors.description && <p className="text-red-500 text-sm mt-1">{errors.description}</p>}
                        </div>

                        {/* Fila 4: Imagen */}
                        <div>
                            <label className="block text-sm font-bold text-slate-700 mb-2">Fotografía del Equipo</label>
                            <input 
                                type="file" 
                                accept="image/*"
                                onChange={e => setData('image', e.target.files[0])}
                                className="w-full text-slate-500 file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100 transition-colors cursor-pointer border border-slate-200 rounded-lg p-1"
                            />
                            {errors.image && <p className="text-red-500 text-sm mt-1">{errors.image}</p>}
                        </div>

                    </div>

                    {/* Pie del Formulario (Botón Guardar) */}
                    <div className="bg-slate-50 px-8 py-5 border-t border-slate-200 flex justify-end">
                        <button 
                            type="submit" 
                            disabled={processing}
                            className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-lg shadow-sm transition-all disabled:opacity-50"
                        >
                            {processing ? 'Guardando...' : 'Guardar Equipo'}
                        </button>
                    </div>
                </form>

            </div>
        </MainLayout>
    );
}
import { Head, Link, useForm } from '@inertiajs/react';
import MainLayout from '@/Layouts/MainLayout';

export default function Edit({ product, subcategories }) {
    
    const { data, setData, post, processing, errors } = useForm({
        _method: 'put',
        name: product.name,
        model: product.model,
        subcategory_id: product.subcategory_id,
        price: product.price,
        description: product.description || '',
        image: null,
    });

    function handleSubmit(e) {
        e.preventDefault();
        
        post(route('admin.products.update', product.id));
    }

    return (
        <MainLayout>
            <Head title="Editar Equipo | Admin" />

            <div className="max-w-4xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
                
                <div className="mb-8">
                    <Link href={route('admin.products.index')} className="text-blue-600 hover:underline font-semibold flex items-center text-sm mb-4">
                        ← Volver al inventario
                    </Link>
                    <h2 className="text-3xl font-extrabold text-slate-900">Editar Equipo</h2>
                    <p className="text-slate-500 mt-1">Actualiza los datos técnicos de {product.name}.</p>
                </div>

                <form onSubmit={handleSubmit} className="bg-white rounded-2xl shadow-sm ring-1 ring-slate-200 overflow-hidden">
                    <div className="p-8 space-y-6">
                        
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div>
                                <label className="block text-sm font-bold text-slate-700 mb-2">Nombre del Equipo</label>
                                <input 
                                    type="text" 
                                    value={data.name} 
                                    onChange={e => setData('name', e.target.value)}
                                    className="w-full rounded-lg border-slate-300 focus:border-blue-500 focus:ring-blue-500 shadow-sm"
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
                                />
                                {errors.model && <p className="text-red-500 text-sm mt-1">{errors.model}</p>}
                            </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div>
                                <label className="block text-sm font-bold text-slate-700 mb-2">Subcategoría</label>
                                <select 
                                    value={data.subcategory_id} 
                                    onChange={e => setData('subcategory_id', e.target.value)}
                                    className="w-full rounded-lg border-slate-300 focus:border-blue-500 focus:ring-blue-500 shadow-sm"
                                >
                                    <option value="">Seleccione una línea de negocio...</option>
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
                                />
                                {errors.price && <p className="text-red-500 text-sm mt-1">{errors.price}</p>}
                            </div>
                        </div>

                        <div>
                            <label className="block text-sm font-bold text-slate-700 mb-2">Descripción Detallada</label>
                            <textarea 
                                rows="4" 
                                value={data.description} 
                                onChange={e => setData('description', e.target.value)}
                                className="w-full rounded-lg border-slate-300 focus:border-blue-500 focus:ring-blue-500 shadow-sm"
                            />
                            {errors.description && <p className="text-red-500 text-sm mt-1">{errors.description}</p>}
                        </div>

                        <div>
                            <label className="block text-sm font-bold text-slate-700 mb-2">Fotografía del Equipo (Opcional)</label>
                            {/* Mostramos una pequeña miniatura de la imagen actual si existe */}
                            {product.image && (
                                <div className="mb-3">
                                    <span className="text-xs text-slate-500 block mb-1">Imagen actual:</span>
                                    <img src={`/storage/${product.image}`} alt="Actual" className="h-16 rounded border border-slate-200" />
                                </div>
                            )}
                            <input 
                                type="file" 
                                accept="image/*"
                                onChange={e => setData('image', e.target.files[0])}
                                className="w-full text-slate-500 file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:text-sm file:font-bold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100 transition-colors cursor-pointer border border-slate-200 rounded-lg p-1"
                            />
                            <p className="text-xs text-slate-500 mt-2">Sube un archivo solo si deseas reemplazar la imagen actual.</p>
                            {errors.image && <p className="text-red-500 text-sm mt-1">{errors.image}</p>}
                        </div>

                    </div>

                    <div className="bg-slate-50 px-8 py-5 border-t border-slate-200 flex justify-end">
                        <button 
                            type="submit" 
                            disabled={processing}
                            className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-lg shadow-sm transition-all disabled:opacity-50"
                        >
                            {processing ? 'Actualizando...' : 'Guardar Cambios'}
                        </button>
                    </div>
                </form>

            </div>
        </MainLayout>
    );
}
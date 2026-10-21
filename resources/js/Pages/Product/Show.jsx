import { Head, Link, usePage } from '@inertiajs/react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';

export default function Show() {
    const { product } = usePage().props;
    return (
        <MainLayout>
            <Head title={product.name} />
            <div className="bg-white rounded-lg shadow-sm border p-8 mt-6">
                <div className="flex flex-col md:flex-row gap-12">
                    
                    {/* Lado Izquierdo: Imagen */}
                    <div className="md:w-1/2 flex justify-center items-center bg-gray-50 rounded-lg p-6">
                        <img 
                            src={product.image ? `/storage/${product.image}` : '/img/placeholder.png'} 
                            alt={product.name} 
                            className="max-w-full h-auto object-contain max-h-96"
                        />
                    </div>

                    {/* Lado Derecho: Detalles del Producto */}
                    <div className="md:w-1/2 flex flex-col justify-center">
                        <h1 className="text-4xl font-extrabold text-gray-900 mb-2">{product.name}</h1>
                        <h2 className="text-xl text-gray-500 font-semibold mb-6">Modelo: {product.model}</h2>
                        
                        <p className="text-3xl font-bold text-blue-700 mb-6">
                            S/. {parseFloat(product.price).toFixed(2)}
                        </p>

                        <div className="prose mb-8 text-gray-700">
                            <h3 className="text-lg font-bold mb-2">Descripción del equipo:</h3>
                            <p>{product.description || "No hay descripción detallada para este producto aún."}</p>
                        </div>

                        {/* Botón de Consultar (Lógica de Autenticación Diferida) */}
                        <div className="mt-auto">
                            {auth.user ? (
                                /* Si el usuario está logueado, el botón lo envía directo a WhatsApp (ruta product.consult) */
                                <a 
                                    href={route('product.consult', product.id)} 
                                    className="block w-full text-center bg-green-500 text-white px-6 py-4 rounded-lg font-bold text-lg hover:bg-green-600 transition shadow-md"
                                >
                                    <i className="fab fa-whatsapp mr-2"></i> Consultar sobre este modelo
                                </a>
                            ) : (
                                /* Si NO está logueado, el botón lo envía al Login */
                                <Link 
                                    href={route('login')} 
                                    className="block w-full text-center bg-green-500 text-white px-6 py-4 rounded-lg font-bold text-lg hover:bg-green-600 transition shadow-md"
                                >
                                    <i className="fas fa-lock mr-2"></i> Inicia sesión para consultar
                                </Link>
                            )}
                            
                            {!auth.user && (
                                <p className="text-sm text-gray-500 text-center mt-3">
                                    ¿Aún no tienes cuenta? <Link href={route('register')} className="text-blue-600 hover:underline">Regístrate aquí</Link>
                                </p>
                            )}
                        </div>
                    </div>

                </div>
            </div>
            
            {/* Botón de regreso */}
            <div className="mt-8">
                <Link href={route('catalog')} className="text-blue-600 hover:underline font-semibold flex items-center">
                    ← Volver al catálogo
                </Link>
            </div>
        </MainLayout>
    );
}
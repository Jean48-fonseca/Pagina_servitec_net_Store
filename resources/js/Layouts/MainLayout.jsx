import { Link, usePage } from '@inertiajs/react';

export default function MainLayout({ children }) {
    // Extraemos el usuario si está logueado para mostrar "Cerrar sesión"
    const { auth } = usePage().props;

    return (
        <div className="min-h-screen bg-gray-50 flex flex-col">
            {/* Barra superior azul */}
            <div className="bg-blue-600 text-white flex justify-between items-center px-4 py-2 text-sm">
                <div className="flex items-center space-x-4">
                    <span>Síguenos!</span>
                    <span className="hidden sm:inline">| Av. Dirección Servitecnet - Lima | Envío a todo el Perú</span>
                </div>
                <div className="flex items-center space-x-4">
                    <span>CONTACTANOS 📞 922 657 185</span>
                    
                    {/* Lógica de Autenticación y Roles */}
                    {auth.user ? (
                        <div className="flex items-center space-x-4 ml-4 pl-4 border-l border-blue-400">
                            <span className="font-semibold text-blue-100">
                                Hola, {auth.user.name}
                            </span>
                            
                            {/* ESTO SOLO LO VE EL ADMINISTRADOR */}
                            {auth.user.role === 'admin' && (
                                <Link 
                                    href={route('admin.dashboard')} // Por ahora apunta al Dashboard por defecto de Breeze
                                    className="bg-blue-800 hover:bg-blue-900 text-white px-3 py-1 rounded text-xs font-bold uppercase tracking-wider transition shadow-sm"
                                >
                                    <i className="fas fa-cog mr-1"></i> Administrar página
                                </Link>
                            )}
                            
                            {/* Botón de cerrar sesión para todos los logueados */}
                            <Link 
                                href={route('logout')} 
                                method="post" 
                                as="button" 
                                className="underline hover:text-gray-200"
                            >
                                Salir
                            </Link>
                        </div>
                    ) : (
                        <div className="space-x-3 ml-4 pl-4 border-l border-blue-400">
                            <Link href={route('login')} className="hover:text-gray-200 font-semibold">Login</Link>
                            <Link href={route('register')} className="hover:text-gray-200 font-semibold">Registro</Link>
                        </div>
                    )}
                </div>
            </div>

            {/* Logotipo y Menú de Navegación */}
            <header className="bg-white shadow-sm sticky top-0 z-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
                    <Link href={route('home')} className="flex items-center">
                        <span className="text-3xl font-bold text-blue-800 tracking-wider">SERVITECNET</span>
                    </Link>
                    <nav className="hidden md:flex space-x-8 font-semibold text-gray-700">
                        <Link href={route('home')} className="hover:text-blue-600">INICIO</Link>
                        <Link href={route('catalog')} className="hover:text-blue-600">CATÁLOGO</Link>
                        <Link href={route('about')} className="hover:text-blue-600">NOSOTROS</Link>
                        <Link href={route('contact')} className="hover:text-blue-600">CONTACTOS</Link>
                    </nav>
                </div>
            </header>

            {/* Contenido Principal de cada página */}
            <main className="flex-grow max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 w-full">
                {children}
            </main>

            {/* Pie de página básico */}
            <footer className="bg-gray-800 text-white text-center py-6 mt-auto">
                <p>&copy; {new Date().getFullYear()} Servitecnet. Todos los derechos reservados.</p>
            </footer>
        {/* BOTÓN FLOTANTE DE WHATSAPP (NUEVO) */}
            <a 
                href="https://wa.me/51922657185?text=Hola%20Servitecnet,%20vengo%20desde%20su%20página%20web%20y%20deseo%20hacer%20una%20consulta%20acerca%20de%20sus%20productos." 
                target="_blank" 
                rel="noopener noreferrer"
                className="fixed bottom-6 right-6 bg-green-500 text-white w-14 h-14 rounded-full flex items-center justify-center shadow-lg hover:bg-green-600 hover:scale-110 hover:-translate-y-1 transition-all duration-300 z-50 group"
                aria-label="Contactar por WhatsApp"
            >
                {/* Ícono SVG de WhatsApp */}
                <svg className="w-8 h-8 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.82 9.82 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.81 11.81 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.88 11.88 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.82 11.82 0 0 0-3.48-8.413Z"/>
                </svg>
                {/* Tooltip al hacer hover */}
                <span className="absolute right-16 bg-slate-800 text-white text-sm font-semibold px-3 py-1.5 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none shadow">
                    ¿Necesitas ayuda?
                </span>
            </a>
        </div>
        
    );
}
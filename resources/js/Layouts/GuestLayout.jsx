import { Link } from '@inertiajs/react';

export default function Guest({ children }) {
    return (
        <div className="min-h-screen flex flex-col sm:justify-center items-center pt-6 sm:pt-0 bg-gray-50">
            {/* Cabecera / Logo corporativo */}
            <div className="mb-8 text-center">
                <Link href="/">
                    <span className="text-4xl font-extrabold text-blue-800 tracking-wider drop-shadow-sm">
                        SERVITECNET
                    </span>
                </Link>
                <p className="text-gray-500 mt-2 font-medium">Accede a tu cuenta para realizar consultas</p>
            </div>

            {/* Tarjeta del formulario */}
            <div className="w-full sm:max-w-md mt-2 px-8 py-10 bg-white shadow-xl overflow-hidden sm:rounded-xl border-t-4 border-blue-600">
                {children}
            </div>

            {/* Pie de página opcional para la vista de login */}
            <div className="mt-8 text-sm text-gray-400">
                &copy; {new Date().getFullYear()} Servitecnet.
            </div>
        </div>
    );
}
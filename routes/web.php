<?php
use App\Http\Controllers\PageController;
use App\Http\Controllers\ProductController;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

// Páginas principales
Route::get('/', [PageController::class, 'home'])->name('home');
Route::get('/nosotros', [PageController::class, 'about'])->name('about');
Route::get('/contactos', [PageController::class, 'contact'])->name('contact');

// Catálogo y Productos
Route::get('/catalogo', [ProductController::class, 'index'])->name('catalog');
Route::get('/producto/{slug}', [ProductController::class, 'show'])->name('product.show');

// Ruta protegida: Solo si inicia sesión podrá consultar
Route::middleware(['auth'])->group(function () {
    Route::get('/producto/{product}/consultar', [ProductController::class, 'consult'])->name('product.consult');
});
// Zona de administración
Route::middleware(['auth'])->prefix('admin')->name('admin.')->group(function (){
Route::get('/clientes', [\App\Http\Controllers\Admin\ClientController::class, 'index'])->name('clients.index');
//El Dashboard
Route::get('/dashboard', function () {
 return Inertia::render('Dashboard');
})->name('dashboard');
//Menú central de Lineas de Negocio
 Route::get('/lineas-de-negocio', function () {
 return Inertia::render('Admin/BusinessLines');
})->name('business-lines');
//CRUD de productos
Route::get('/productos', [\App\Http\Controllers\Admin\ProductController::class, 'index'])->name('products.index');
Route::get('/productos/crear', [\App\Http\Controllers\Admin\ProductController::class, 'create'])->name('products.create');
Route::post('/productos', [\App\Http\Controllers\Admin\ProductController::class, 'store'])->name('products.store');
Route::get('/productos/{product}/editar', [\App\Http\Controllers\Admin\ProductController::class, 'edit'])->name('products.edit');
Route::put('/productos/{product}', [\App\Http\Controllers\Admin\ProductController::class, 'update'])->name('products.update');
Route::delete('/productos/{product}', [\App\Http\Controllers\Admin\ProductController::class, 'destroy'])->name('products.destroy');

// CRUD de Categorías 
Route::get('/categorias', [\App\Http\Controllers\Admin\CategoryController::class, 'index'])->name('categories.index');
Route::get('/categorias/crear', [\App\Http\Controllers\Admin\CategoryController::class, 'create'])->name('categories.create');
Route::post('/categorias', [\App\Http\Controllers\Admin\CategoryController::class, 'store'])->name('categories.store');
Route::get('/categorias/{category}/editar', [\App\Http\Controllers\Admin\CategoryController::class, 'edit'])->name('categories.edit');
Route::put('/categorias/{category}', [\App\Http\Controllers\Admin\CategoryController::class, 'update'])->name('categories.update');
Route::delete('/categorias/{category}', [\App\Http\Controllers\Admin\CategoryController::class, 'destroy'])->name('categories.destroy');
//CRUD de subcategorías
Route::get('/subcategorias', [\App\Http\Controllers\Admin\SubcategoryController::class, 'index'])->name('subcategories.index');
Route::get('/subcategorias/crear', [\App\Http\Controllers\Admin\SubcategoryController::class, 'create'])->name('subcategories.create');
Route::post('/subcategorias', [\App\Http\Controllers\Admin\SubcategoryController::class, 'store'])->name('subcategories.store');
Route::get('/subcategorias/{subcategory}/editar', [\App\Http\Controllers\Admin\SubcategoryController::class, 'edit'])->name('subcategories.edit');
Route::put('/subcategorias/{subcategory}', [\App\Http\Controllers\Admin\SubcategoryController::class, 'update'])->name('subcategories.update');
Route::delete('/subcategorias/{subcategory}', [\App\Http\Controllers\Admin\SubcategoryController::class, 'destroy'])->name('subcategories.destroy');
});

require __DIR__.'/auth.php';

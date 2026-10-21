<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Product;
use Inertia\Inertia;
use Illuminate\Support\Facades\Auth; 

class ProductController extends Controller
{
    public function index()
    {
        $products = Product::paginate(12);
        return Inertia::render('Catalog', [
            'products' => $products
        ]);
    }

    public function show(string $slug)
    {
        $product = Product::where('slug', $slug)->firstOrFail();
        return Inertia::render('Product/Show', [
            'product' => $product
        ]);
    }

    public function consult(Product $product)
    {
        $user = Auth::user();
        $texto = "Hola, Servitecnet, soy {$user->name}. Estoy interesado en el producto: {$product->name}, Modelo: {$product->model}";
        $telefono = "51922657185";
        
        return redirect()->away("https://wa.me/{$telefono}?text=" . urlencode($texto));
    }
}
<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Product;
use App\Models\Subcategory;
use Illuminate\Support\Str;
use Inertia\Inertia;

class ProductController extends Controller
{
    public function index()
    {
        $products = Product::latest()->paginate(10);

        return Inertia::render('Admin/Products/Index',[
            'products' => $products
        ]);
    }
    public function create()
    {
        // Enviamos las subcategorías para el menú desplegable del formulario
        $subcategories = Subcategory::all();
        return Inertia::render('Admin/Products/Create', [
            'subcategories' => $subcategories
        ]);
    }

    public function store(Request $request)
    {
        $validated = $request->validate([
            'name' => 'required|string|max:255',
            'model' => 'required|string|max:255',
            'subcategory_id' => 'required|exists:subcategories,id',
            'price' => 'required|numeric|min:0',
            'description' => 'nullable|string',
            'image' => 'nullable|image|max:5048', // Máximo 2MB
        ]);

        // Generamos un slug único automáticamente basado en el nombre
        $validated['slug'] = Str::slug($validated['name']) . '-' . uniqid();

        // Procesamos la imagen si se subió una
        if ($request->hasFile('image')) {
            $validated['image'] = $request->file('image')->store('products', 'public');
        }

        Product::create($validated);

        // Redirigimos a la tabla con un mensaje de éxito
        return redirect()->route('admin.products.index')->with('success', 'Equipo registrado correctamente.');
    }
    public function edit(Product $product)
    {
        $subcategories = Subcategory::all();
        return Inertia::render('Admin/Products/Edit', [
            'product' => $product,
            'subcategories' => $subcategories
        ]);
    }
    public function update(Request $request, Product $product)
    {
        $validated = $request->validate([
            'name' => 'required|string|max:255',
            'model' => 'required|string|max:255',
            'subcategory_id' => 'required|exists:subcategories,id',
            'price' => 'required|numeric|min:0',
            'description' => 'nullable|string',
            'image' => 'nullable|image|max:5048', // Máximo 2MB
        ]);

        // Generamos un slug único automáticamente basado en el nombre
        $validated['slug'] = Str::slug($validated['name']) . '-' . uniqid();

        // Procesamos la imagen si se subió una nueva
        if ($request->hasFile('image')) {
            $validated['image'] = $request->file('image')->store('products', 'public');
        }

        $product->update($validated);

        return redirect()->route('admin.products.index')->with('success', 'Equipo actualizado correctamente.');
    }
    public function destroy(Product $product)
    {
        $product->delete();
        return redirect()->route('admin.products.index')->with('success', 'Equipo eliminado correctamente.');
    }
}

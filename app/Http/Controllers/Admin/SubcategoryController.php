<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Category;
use App\Models\Subcategory;
use Illuminate\Support\Str;
use Inertia\Inertia;

class SubcategoryController extends Controller
{
    public function index()
    {
        $subcategories = Subcategory::with('category')->latest()->paginate(10);
        return Inertia::render('Admin/Subcategories/Index', [
            'subcategories' => $subcategories
        ]);
    }

    public function create()
    {
        $categories = Category::all();
        return Inertia::render('Admin/Subcategories/Create', [
            'categories' => $categories
        ]);
    }

    public function store(Request $request)
   {
        $validated = $request->validate([
            'name' => 'required|string|max:255',
            'category_id' => 'required|exists:categories,id',
        ]);
       $validated['slug'] = Str::slug($validated['name']) . '-' . uniqid();
        Subcategory::create($validated);

        return redirect()->route('admin.subcategories.index')->with('success', 'Subcategoría creada exitosamente.');
    }
    public function edit(Subcategory $subcategory)
    {
        
        $categories = Category::all();
        return Inertia::render('Admin/Subcategories/Edit', [
            'subcategory' => $subcategory,
            'categories' => $categories
        ]);
    }

    public function update(Request $request, Subcategory $subcategory)
    {
        $validated = $request->validate([
            'name' => 'required|string|max:255',
            'category_id' => 'required|exists:categories,id',
        ]);

        
        if ($subcategory->name !== $validated['name']) {
            $validated['slug'] = Str::slug($validated['name']) . '-' . uniqid();
        }

        $subcategory->update($validated);

        return redirect()->route('admin.subcategories.index')->with('success', 'Subcategoría actualizada correctamente.');
    }
    public function destroy(Subcategory $subcategory)
    {
        $subcategory->delete();
        return redirect()->route('admin.subcategories.index')->with('success', 'Subcategoría eliminada correctamente.');
    }
}

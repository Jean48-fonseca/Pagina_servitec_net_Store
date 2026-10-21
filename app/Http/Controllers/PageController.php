<?php

namespace App\Http\Controllers;
use illuminate\Http\Request;
use App\Models\Category;
use App\Models\Product;
use Inertia\Inertia;

class PageController extends Controller
{
    public function home()
    {
        $categories = Category::with('subcategories')->get();
        $featuredProducts = Product::where('is_featured', true)->take(8)->get();
        return Inertia::render('Home', compact('categories', 'featuredProducts'));
    }
    public function about()
    {
        return Inertia::render('About');
    }
    public function contact()
    {
        return Inertia::render('Contact');
    }
}

<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Hash;
use App\Models\User;
use App\Models\Category;
use App\Models\Subcategory;
use App\Models\Product;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        // 1. Creamos tu usuario administrador de Servitecnet
        User::create([
            'name' => 'Admin',
            'email' => 'admin@servitecnet.com',
            'password' => Hash::make('12345678'), // Contraseña de prueba
            'role' => 'admin',
        ]);

        // 2. Creamos la Categoría Principal
        $categoria = Category::create([
            'name' => 'Maquinaria de Construcción',
            'slug' => 'maquinaria-construccion',
        ]);

        // 3. Creamos la Subcategoría
        $subcategoria = Subcategory::create([
            'category_id' => $categoria->id,
            'name' => 'Alisadoras de Concreto',
            'slug' => 'alisadoras-concreto',
        ]);

        // 4. Insertamos el primer producto de tu imagen (Bonelly 5.5HP)
        Product::create([
            'subcategory_id' => $subcategoria->id,
            'name' => 'Alisadora de concreto Bonelly 5.5HP',
            'slug' => 'alisadora-concreto-bonelly-55hp',
            'model' => 'MT24-4',
            'description' => 'Alisadora de concreto gasolinera con motor Honda GX160. Potencia de 5.5HP. Incluye plato de 24 pulgadas y 2 años de garantía. Ideal para acabados profesionales en superficies de concreto.',
            'price' => 2950.00,
            'image' => null, // Como no tenemos la imagen subida aún, usará el placeholder
            'is_featured' => true,
        ]);

        // 5. Insertamos el segundo producto de tu imagen (Bonelly 6.5HP)
        Product::create([
            'subcategory_id' => $subcategoria->id,
            'name' => 'Alisadora de concreto Bonelly 6.5HP',
            'slug' => 'alisadora-concreto-bonelly-65hp',
            'model' => 'MT36-2',
            'description' => 'Alisadora de concreto gasolinera. Potencia de 6.5HP. Incluye plato de 36 pulgadas y 2 años de garantía. Equipo robusto para trabajo pesado.',
            'price' => 3500.00, 
            'image' => null,
            'is_featured' => true,
        ]);
    }
}
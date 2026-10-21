<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Product extends Model
{
    protected $fillable = ['name', 'slug',
     'description', 'model', 'price', 'subcategory_id', 'image',
     'is_featured'];
    public function subcategory()
    {
        return $this->belongsTo(Subcategory::class);
    }
}

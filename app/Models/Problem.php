<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Concerns\HasUuids;
use Illuminate\Database\Eloquent\Model;

class Problem extends Model
{
    use HasUuids;

    protected $fillable = [
        'title',
        'description',
        'acceptance_rate',
        'solution',
        'difficulty',
    ];
}
<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Cviebrock\EloquentSluggable\Sluggable;

class Post extends Model
{

    use HasFactory;
    use Sluggable;
    protected $fillable = [
        'title',
        'description',
        'post_creator',
        'user_id',
        'created_time',
        'slugtitle',
        'image',
    ];
    public function sluggable(): array
    {
        return [
            'slugtitle' => [
                'source' => 'title'
            ]
        ];
    }
    public function user()
    {
        return $this->belongsTo(User::class);
    }
    public function comments()
    {
        return $this->morphMany(Comment::class, 'commentable');
    }
}

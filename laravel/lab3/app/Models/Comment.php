<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Comment extends Model
{
    use HasFactory;
    protected $fillable = [
        'comment',
        'user_id',
        'created_time',
        'user_creator',
        'commentable_id',
        'commentable_type',
    ];

    public function user()
    {
        return $this->belongsTo(User::class);
    }

    public function commentable() 
    {
        return $this->morphTo();
    }
}

<?php

namespace App\Http\Controllers;
use Carbon\Carbon;
use Illuminate\Http\Request;
use App\Models\Comment;

class CommentController extends Controller
{
    
    public function create(Request $request)
    {
       /* $ldate=Carbon::now();
        Comment::create([
            'comment' => $comment,
            'post_creator' => $comment_creator,
            'user_id' => $user_id,
            'created_time' => $ldate,

        ]);*/
        dd($request);
    }

}

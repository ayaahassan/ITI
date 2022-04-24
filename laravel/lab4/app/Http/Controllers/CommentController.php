<?php

namespace App\Http\Controllers;
use Carbon\Carbon;
use Illuminate\Http\Request;
use App\Models\Comment;
use App\Models\Post;
use App\Models\User;


class CommentController extends Controller
{
    public function create(Request $request)
    {
        $comment = $request->get('comment_creator');

       /* Comment::create([
               'comment' => $request->get('comment'),
               'user_creator' => $request->get('comment_creator'),
               'commentable_id' => (int)$request->get('post_id'),
               'commentable_type' => 'App\\Model\\Post',


           ]);*/
           $users = User::all();
          $post = Post::find((int)$request->get('post_id'));
          $comment=$post->comments()->create([
            'comment' => $request->get('comment'),
               'user_creator' => $request->get('comment_creator'),
               'commentable_id' => (int)$request->get('post_id'),
               'commentable_type' => 'App\\Model\\Post',
  
          ]);
         /* return view('posts.view', [
               'data' => $post,'users' => $users,
           ]);
          // return $comment;*/
          return route('posts.show',(int)$request->get('post_id') );
    }
}

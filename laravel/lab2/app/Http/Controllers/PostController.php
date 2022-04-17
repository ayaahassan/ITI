<?php

namespace App\Http\Controllers;
use Carbon\Carbon;
use Illuminate\Http\Request;
use App\Models\Post;
use App\Models\User;


class PostController extends Controller
{

    public function index()
    {
       
        $posts = Post::paginate(15);
        return view('posts.index', [
            'posts' => $posts,
        ]);
    }

    public function create()
    {
        $users = User::all();

        return view('posts.create', [
            'users' => $users,
        ]);
    }

    public function store()
    {
        $data = request()->all();
        $ldate=Carbon::now();
        
        $ldate = date('Y-m-d ');
        Post::create([
            'title' => $data['title'],
            'description' => $data['description'],
            'post_creator' => $data['post_creator'],
            'created_time' => $ldate,

        ]);
        return to_route('posts.index');
    }
    public function edit($postid)
    {
        $users = User::all();

        return view('posts.edit', [
            'ID' => $postid, 'users' => $users,
        ]);
    }

    public function destory($postid)
    {
        $post = Post::find($postid);

        $post->delete();
        return to_route('posts.index');
    }
    public function update(Request $request)
    {
        $Id = (int)$request->get('ID');

        $post = Post::find($Id);
        $post->title = $request->get('title');
        $post->description = $request->get('description');
        $post->post_creator = $request->get('post_creator');

        $post->save();

        return to_route('posts.index');
    }
    public function show($postId)
    {
        $users = User::all();
        $post = Post::find($postId);
        return view('posts.view', [
            'data' => $post,'users' => $users,
        ]);
    }
}

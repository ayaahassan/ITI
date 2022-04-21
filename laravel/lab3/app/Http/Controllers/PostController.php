<?php

namespace App\Http\Controllers;

use Carbon\Carbon;
use Illuminate\Http\Request;
use App\Models\Post;
use App\Models\User;
use App\Http\Requests\StorePostRequest;
use App\Http\Requests\UpdatePostRequest;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Facades\File; 

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

    public function store(StorePostRequest $request)
    {
        //  $data = request()->all();
        //  dd($data);
        $data = $request->only('title', 'description', 'post_creator', 'created_time', 'image');
        $path = Storage::putFile('local', $request->file('image'));
        //dd($path);
        $name = basename($path);
        // dd($name);
        $ldate = Carbon::now();
        $ldate = date('Y-m-d ');
        $userid = $request->get('post_creator');
        $username = User::where('id', $userid)->first()->name;
        Post::create([
            'title' => $data['title'],
            'description' => $data['description'],
            'post_creator' => $username,
            'created_time' => $ldate,
            'user_id' => $userid,
            'image' => $name,

        ]);
        return to_route('posts.index');
    }
    public function edit($postid)
    {
        $users = User::all();
        $post = Post::find($postid);
        return view('posts.edit', [
            'post' => $post, 'users' => $users,
        ]);
    }

    public function destory($postid)
    {

        $post = Post::find($postid);
       
       // dd( $post->image);
     //  File::delete(public_path($post->image));
       //File::delete($post->image);
       //File::delete('app/public'.$post->image);
      echo "in destory";
       unlink(storage_path('app/local/'.$post->image));
        Storage::delete($post->image);
        $post->delete();

        return to_route('posts.index');
    }
    public function update(UpdatePostRequest $request, $id)
    {

        //  dd($request->all());
        // $Id = (int)$request->get('ID');
        $userid = $request->get('post_creator');
        $username = User::where('id', $userid)->first()->name;
        //dd($user);
        $post = Post::find($id);
        $post->title = $request->get('title');
        $post->description = $request->get('description');
        $post->post_creator = $username;
        $post->user_id = $userid;
        $post->update();

        return to_route('posts.index');
    }
    public function show($postId)
    {
        $users = User::all();
        $post = Post::find($postId);
        return view('posts.view', [
            'data' => $post, 'users' => $users,
        ]);
    }
}

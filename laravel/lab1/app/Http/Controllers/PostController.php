<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
class PostController extends Controller
{
    static $posts = [
        ['id' => 1, 'title' => 'Laravel', 'post_creator' => 'Ahmed', 'created_at' => '2022-04-16 10:37:00'],
        ['id' => 2, 'title' => 'PHP', 'post_creator' => 'Mohamed', 'created_at' => '2022-04-16 10:37:00'],
        ['id' => 3, 'title' => 'Javascript', 'post_creator' => 'Ali', 'created_at' => '2022-04-16 10:37:00'],
    ];
    static $id = 3;
    public function index()
    {
        return view('posts.index', [
            'posts' => self::$posts,
        ]);
    }

    public function create()
    {
        return view('posts.create');
    }

    public function store(Request $request)
    {
        $ldate = date('Y-m-d H:i:s');
        self::$id = self::$id + 1;
        $obj = ['id' => self::$id, 'title' => $request->get('title'), 'post_creator' => $request->get('creator'), 'created_at' => $ldate];
        array_push(self::$posts, $obj);
        return view('posts.index', [
            'posts' => self::$posts,
        ]);
    }
    public function edit($postid,Request $request)
    {
        return view('posts.edit', [
            'ID' => $postid,
        ]);
    }
    public function delete($postid)
    {
        $postid=(int)$postid;
        unset(self::$posts[$postid-1]);   
       //array_splice(self::$posts[$postid-1], 1, 1);
       self::$id=self::$id-1;
       if(self::$id<0)
       self::$id=0;
        return view('posts.index', [
          'posts' => self::$posts,
       ]); 
    }
    public function update(Request $request)
    {
      $ID=(int)$request->get('ID')-1;
      self::$posts[$ID]['title']=$request->get('title');
      self::$posts[$ID]['post_creator']=$request->get('creator');

      return view('posts.index', [
        'posts' => self::$posts,
    ]);
    }
    public function show($postId, $title, $creator, $date)
    {
        $data = ['id' => $postId, 'title' => $title, 'creator' => $creator, 'date' => $date];
        return view('posts.view', [
            'data' => $data,
        ]);
    }
}

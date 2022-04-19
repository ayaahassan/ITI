@extends('layout.app')

@section('view')Index @endsection
@section('content')
<div class="card">
    <div class="card-header">
        Post info
    </div>
    <div class="card-body">
        <div>
            <span style="font-size: 1.2rem; font-weight: bold">Title: &nbsp;</span>{{$data->title}}
        </div>

    </div>
</div><br>
<div class="card">
    <div class="card-header">
        Post creator info
    </div>

    <div class="card-body">
        <div>
            <span  style="font-size: 1.2rem; font-weight: bold">ID:- &nbsp;</span><label id="postid">{{ $data->id }}</label><br>
            <span style="font-size: 1.2rem; font-weight: bold">creator:- &nbsp;</span>{{ $data->post_creator }}<br>
            <span style="font-size: 1.2rem; font-weight: bold">Date:- &nbsp;</span> <strong>{{ \Illuminate\Support\carbon::parse($data->created_at)->isoFormat('MMMM Do YYYY, h:mm:ss a') }}</strong><br>

        </div>

    </div>
</div><br>

@include('posts.commentform') 
@endsection

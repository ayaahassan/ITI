@extends('layout.app')

@section('view')Index @endsection

@section('content')

<!--<table>
<tr class="table-active ">
<thead class="bg-light">
    post creator info
</thead>
</tr>
<tr >
<td>ID :-{{ $data['id'] }}</td>
</tr>
<tr>
<td>Title :-{{ $data['title'] }}</td>
</tr>
<tr>
<td>Creator :-{{ $data['creator'] }}</td>
</tr>
<tr>
<td>Date :-{{ $data['date'] }}</td>
</tr>


</tr>
</table>-->
<div class="card">
        <div class="card-header">
            Post info
        </div>
        <div class="card-body">
            <div>
                <span style="font-size: 1.2rem; font-weight: bold">Title: &nbsp;</span>{{$data["title"]}}
            </div>
           
        </div>
    </div><br>
    <div class="card">
    <div class="card-header">
            Post creator info
        </div>

        <div class="card-body">
            <div>
                <span style="font-size: 1.2rem; font-weight: bold">ID:-  &nbsp;</span>{{ $data['id'] }}<br>
                <span style="font-size: 1.2rem; font-weight: bold">creator:-  &nbsp;</span>{{ $data['creator'] }}<br>
                <span style="font-size: 1.2rem; font-weight: bold">Date:-  &nbsp;</span>{{ $data['date'] }}<br>

            </div>
           
        </div>
    </div>

@endsection
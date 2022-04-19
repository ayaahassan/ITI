<!DOCTYPE html>
<html>
<head>
    <title>Laravel 8 Ajax Request example</title>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link href="//netdna.bootstrapcdn.com/bootstrap/4.2.0/css/bootstrap.min.css" rel="stylesheet">
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/2.1.3/jquery.min.js"></script>
  <meta name="csrf-token" content="{{ csrf_token() }}" />
</head>
<body>
    <div class="container">
        <form method="POST">
            @csrf
            <legend>Add comments</legend>
            <div class="mb-3">
                <label for="disabledTextInput" class="form-label"> comments</label>
                <input type="text" id="TextInput" name="comment" class="form-control" placeholder="comment">
            </div>
            <div class="mb-3">
                <label for="exampleFormControlTextarea1" class="form-label">Post Creator</label>
                <select class="form-control" id="comment_creator" name="comment_creator">

                    @foreach($users as $user)
                    <option name="creator" value="{{$user->name}}">{{$user->name}}</option>
                    @endforeach

                </select>
            </div>

            <button type="submit" class="btn btn-success btn-submit">Submit</button>
        </form>
    </div><br>
    <div class="card">
    <div class="card-header">
        Post creator info
    </div>

    <div class="card-body">
        <div>
            @if($data->comments)
            @foreach ($data->comments as $comment) 
                <span  style="font-size: 1.2rem; font-weight: bold">comment:- &nbsp;</span>{{ $comment->comment }}<br>
               <span style="font-size: 1.2rem; font-weight: bold">creator:- &nbsp;</span>{{ $comment->user_creator }}<br>
               <hr>
            
              @endforeach
          
            @else
              don't have any records!
            @endif
        </div>

    </div>
</div><br>
</body>
<script type="text/javascript">
   /* $.ajaxSetup({

        headers: {

            'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')

        }

    });*/

    $(".btn-submit").click(function(e) {

        e.preventDefault();
        console.log("infunction")
        var comment = document.getElementById("TextInput").value;
        var comment_creator = document.getElementById("comment_creator").value;
        var postid ='{{ $data->id }}';
        
       console.log(comment,comment_creator,postid)
        $.ajax({

            type: 'POST',
            url: "{{ route('comments.create') }}",
            data: {
                comment: comment,
                comment_creator: comment_creator,
                post_id: postid,
                _token: '{!! csrf_token() !!}',
               
            },

            success: function(data) {

                console.log(data);
            },
            error: function(error) {
                console.log(error);
            }
        });

    });
</script>
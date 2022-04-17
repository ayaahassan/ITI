<form >

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
<script type="text/javascript">

    $.ajaxSetup({

        headers: {

            'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')

        }

    });

    $(".btn-submit").click(function(e) {

        e.preventDefault();

        var comment = $("input[comment=comment]").val();
        var comment_creator = document.getElementById("comment_creator");

        $.ajax({

            type: 'POST',
            url: "{{ route('comments.create') }}",
            data: {
                comment: comment,
                comment_creator: comment_creator,
            },

            success: function(data) {

                console.log(response);
            },
            error: function(error) {
                console.log(error);
            }
        });

    });
</script>
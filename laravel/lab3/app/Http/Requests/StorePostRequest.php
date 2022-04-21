<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class StorePostRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {
        return [
        'title'=>['required','min:3','unique:App\Models\Post,title'],
         'description'=>['required','min:10'],
         'image' => 'required|image|mimes:jpeg,png,jpg',
        ];
    }
    public function messages()
    {
        return [
           'title.required'=>'you should add title',
           'title.min'=>'title should not be less than 3 char',
           'title.unique'=>'title already exit',
           'description.required'=>'you should add description',
           'description.min'=>'title should not be less than 10 char',
           'image.required'=>'you should add image',
           'image.mimes'=>'image extention should be jpg or png',
           'image.image'=>'upload image only '

        ];
    }
}

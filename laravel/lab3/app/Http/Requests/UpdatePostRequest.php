<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Validation\Rule;

class UpdatePostRequest extends FormRequest
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
        'title'=>['required','min:3'],
         'description'=>['required','min:10'],

        /* 'user_id' => [
                Rule::exists('users')->where(function ($query) {
                return $query->where('id', $this->);
            }),
        ],*/
        ];
   
        
       }
    public function messages()
    {
        return [
           'title.required'=>'you should add title',
           'title.min'=>'title should not be less than 3 char',
           'title.unique'=>'title already exit',
           'description.required'=>'you should add title',
           'description.min'=>'title should not be less than 10 char',

        ];
    }
}

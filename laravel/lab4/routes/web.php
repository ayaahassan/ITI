<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\PostController;
use App\Http\Controllers\CommentController;
use Illuminate\Support\Facades\Auth;
use Laravel\Socialite\Facades\Socialite;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| HereRoute::post('posts/{post}/commentform', [CommentController::class, 'create'])->name('comments.create');
 is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return view('welcome');
});

Route::get('/posts', [PostController::class, 'index'])->name('posts.index')->middleware('auth');
Route::get('/posts/create/', [PostController::class, 'create'])->name('posts.create')->middleware('auth');
Route::post('/posts', [PostController::class, 'store'])->name('posts.store')->middleware('auth');
Route::put('/posts/update/{id}', [PostController::class, 'update'])->name('posts.update')->middleware('auth');
Route::get('/posts/{post}/edit', [PostController::class, 'edit'])->name('posts.edit')->middleware('auth');
Route::delete('/posts/delete/{post}', [PostController::class, 'destory'])->name('posts.destory')->middleware('auth');
Route::post('posts/commentform', [CommentController::class, 'create'])->name('comments.create')->middleware('auth');
Route::get('/posts/{post}', [PostController::class, 'show'])->name('posts.show')->middleware('auth');



Auth::routes();

Route::get('/home', [App\Http\Controllers\HomeController::class, 'index'])->name('home');
 
Route::get('/auth/redirect', function () {
    return Socialite::driver('github')->redirect();
})->name('github.auth');
 
Route::get('/auth/callback', function () {
    $user = Socialite::driver('github')->user();
 dd($user);
    // $user->token
});

Route::get('/auth/redirect/google', function () {
    return Socialite::driver('google')->redirect();
})->name('google.auth');
 
Route::get('/auth/callback/google', function () {
    $user = Socialite::driver('google')->user();
 dd($user);
    // $user->token
});
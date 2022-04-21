<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\PostController;
use App\Http\Controllers\CommentController;
use Illuminate\Support\Facades\Auth;
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


/*Route::group(function(){
 Route::get('/posts', [PostController::class, 'index'])->name('posts.index');
Route::get('/posts/create/', [PostController::class, 'create'])->name('posts.create');
Route::post('/posts', [PostController::class, 'store'])->name('posts.store');
Route::put('/posts/update/{id}', [PostController::class, 'update'])->name('posts.update');
Route::get('/posts/{post}/edit', [PostController::class, 'edit'])->name('posts.edit');
Route::delete('/posts/delete/{post}', [PostController::class, 'destory'])->name('posts.destory');
Route::post('posts/commentform', [CommentController::class, 'create'])->name('comments.create');
Route::get('/posts/{post}', [PostController::class, 'show'])->name('posts.show');


})->middleware('auth');*/
Route::get('/posts', [PostController::class, 'index'])->name('posts.index')->middleware('auth');
Route::get('/posts/create/', [PostController::class, 'create'])->name('posts.create');
Route::post('/posts', [PostController::class, 'store'])->name('posts.store');
Route::put('/posts/update/{id}', [PostController::class, 'update'])->name('posts.update');
Route::get('/posts/{post}/edit', [PostController::class, 'edit'])->name('posts.edit');
Route::delete('/posts/delete/{post}', [PostController::class, 'destory'])->name('posts.destory');
Route::post('posts/commentform', [CommentController::class, 'create'])->name('comments.create');
Route::get('/posts/{post}', [PostController::class, 'show'])->name('posts.show');



Auth::routes();

Route::get('/home', [App\Http\Controllers\HomeController::class, 'index'])->name('home');

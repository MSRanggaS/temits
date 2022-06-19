<?php
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return view('welcome');
});

//no backend
Route::get('/login', [Controller::class, 'login']);
Route::get('/home', [Controller::class, 'home']);
Route::get('/datapetani', [Controller::class, 'dataPetani']);
Route::get('/dataladang', [Controller::class, 'dataLadang']);
Route::get('/datalumbung', [Controller::class, 'dataLumbung']);

Route::get('/adddata', [Controller::class, 'addData']);
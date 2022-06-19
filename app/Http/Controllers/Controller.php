<?php

namespace App\Http\Controllers;

use Illuminate\Foundation\Auth\Access\AuthorizesRequests;
use Illuminate\Foundation\Bus\DispatchesJobs;
use Illuminate\Foundation\Validation\ValidatesRequests;
use Illuminate\Routing\Controller as BaseController;

class Controller extends BaseController
{
    use AuthorizesRequests, DispatchesJobs, ValidatesRequests;

    public function login() {
      return view('login');
    }

    public function home() {
      return view('home');
    }

    public function dataPetani() {
      return view('datapetani');
    }

    public function dataLadang() {
      return view('dataladang');
    }

    public function dataLumbung() {
      return view('datalumbung');
    }

    public function addData() {
      return view('addform');
    }
}

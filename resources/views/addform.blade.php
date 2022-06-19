@extends('layout.navtop')

@section('style')
<link href='https://cdnjs.cloudflare.com/ajax/libs/dropzone/5.4.0/dropzone.css' type='text/css' rel='stylesheet'>
<style>
  .d-program .text-wrap {
    padding: 1rem;
    background-color: #F6F8FC;
    border-radius: 5px;
  }
  .d-program .text-wrap.font-primary {
    color: #009DFB;
  }
  .d-program .text-wrap p {
    margin: 0;
    color: #888888;
    font-size: 14px
  }
  .doc-img {
    margin-top: -.5rem;
  }
  .doc-img .col div {
    margin-top: 1.5rem;
    display: flex;
    align-items: stretch;
    justify-content: center;
    aspect-ratio: 3/2;
    border-radius: 5px;
    overflow: hidden;
  }
  .doc-img .col img {
    width: 100%;
    min-height: 100%;
  }
  .doc-img .col div button {
    width: 100%;
    height: 100%;
    border: dashed 2px #009DFB;
    color: #009DFB;
    border-radius: 5px;
    font-size: 16px;
    transition: ease-in .3s;
  }
  .doc-img .col div button:hover {
    background-color: #009ffb;
    color: #fff
  }
  .dropzone {
    min-height: 300px;
    border: dashed 2px #009DFB;
    border-radius: 5px;
  }
  .dz-message {
    margin: 126px 0 !important;
  }
  .docslct:checked+div div {
    outline: solid 4px #009DFB;
    transform: .2s;
  }
  .docslct:checked+div label {
    background-color: #009DFB;
    filter: opacity(50%);
  }
</style>
@endsection

@section('content')
<div class="loading-overlay" id="loading-overlay">
  <div><span class="spinner"></span></div>
  <p class="mt-3" style="color: #fff">Sedang Memuat</p>
</div>
<div class="mt-4">
  @include('form.addform')
</div>
@endsection

@section('script')
<script src='https://cdnjs.cloudflare.com/ajax/libs/dropzone/5.4.0/dropzone.js' type='text/javascript'></script>
<script>
    Dropzone.autoDiscover = false;
</script>
@endsection
<div class="nav-side-wrap shadow-sm sidebar" id="navside">
  <a href="/" style="text-decoration: none">
    <div class="mb-4">
        <img src="/src/img/logo.png" alt="" class="d-block mx-auto" style="height: 80px;">
    </div>
  </a>

  <div id="navcont">
    <ul class="nav-side" id="nav">
        <a href="/home">
        <li class="{{ Request::is('*home*') ? 'active' : '' }}">
            <div class=" icon">
            <i class="fa-solid fa-house"></i>
            </div>
            <span>Home</span>
        </li>
        </a>

        <div class="segment-title">
        <span>INFORMATION</span>
        </div>

        <a href="/datapetani">
        <li class="{{ Request::is('*datapetani*') ? 'active' : '' }}">
            <div class="icon">
            <i class="fa-solid fa-tractor"></i>
            </div>
            <span>Data Petani</span>
        </li>
        </a>

        <a href="/dataladang">
        <li class="{{ Request::is('*dataladang*') ? 'active' : '' }}">
            <div class="icon">
            <i class="fa-solid fa-wheat-awn"></i>
            </div>
            <span>Data Ladang</span>
        </li>
        </a>

        <a href="/datalumbung">
        <li class="{{ Request::is('*datalumbung*') ? 'active' : '' }}">
            <div class="icon">
            <i class="fa-solid fa-building-wheat"></i>
            </div>
            <span>Data Lumbung</span>
        </li>
        </a>

    </ul>
    </div>
</div>
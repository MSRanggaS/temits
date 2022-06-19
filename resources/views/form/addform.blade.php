<ul class="nav nav-tabs" id="myTab" role="tablist">
  <li class="nav-item" role="presentation">
    <button class="nav-link active" id="nav-pribadi-tab" data-bs-toggle="tab" data-bs-target="#nav-pribadi" type="button" 
    role="tab" aria-controls="nav-pribadi" aria-selected="true">Profil Pribadi</button>
  </li>
  <li class="nav-item" role="presentation">
    <button class="nav-link" id="nav-keluarga-tab" data-bs-toggle="tab" data-bs-target="#nav-keluarga" type="button" 
    role="tab" aria-controls="nav-keluarga" aria-selected="false">Profil Keluarga</button>
  </li>
  <li class="nav-item" role="presentation">
    <button class="nav-link" id="nav-pendapatan-palawija-tab" data-bs-toggle="tab" data-bs-target="#nav-pendapatan-palawija" type="button" 
    role="tab" aria-controls="nav-pendapatan-palawija" aria-selected="false">Pendapatan</button>
  </li>
  <li class="nav-item" role="presentation">
    <button class="nav-link" id="nav-pendapatan-holtikultura-tab" data-bs-toggle="tab" data-bs-target="#nav-pendapatan-holtikultura" type="button" 
    role="tab" aria-controls="nav-pendapatan-holtikultura" aria-selected="false">Pendapatan</button>
  </li>
  <li class="nav-item" role="presentation">
    <button class="nav-link" id="nav-pendapatan-perkebunan-tab" data-bs-toggle="tab" data-bs-target="#nav-pendapatan-perkebunan" type="button" 
    role="tab" aria-controls="nav-pendapatan-perkebunan" aria-selected="false">Pendapatan</button>
  </li>
  <li class="nav-item" role="presentation">
    <button class="nav-link" id="nav-pendapatan-kehutanan-tab" data-bs-toggle="tab" data-bs-target="#nav-pendapatan-kehutanan" type="button" 
    role="tab" aria-controls="nav-pendapatan-kehutanan" aria-selected="false">Pendapatan</button>
  </li>
  <li class="nav-item" role="presentation">
    <button class="nav-link" id="nav-pendapatan-perikanan-tab" data-bs-toggle="tab" data-bs-target="#nav-pendapatan-perikanan" type="button" 
    role="tab" aria-controls="nav-pendapatan-perikanan" aria-selected="false">Pendapatan</button>
  </li>
  <li class="nav-item" role="presentation">
    <button class="nav-link" id="nav-pendapatan-peternakan-tab" data-bs-toggle="tab" data-bs-target="#nav-pendapatan-peternakan" type="button" 
    role="tab" aria-controls="nav-pendapatan-peternakan" aria-selected="false">Pendapatan</button>
  </li>
</ul>
<div class="tab-content" id="myTabContent">
  <div class="tab-pane fade show active" id="nav-pribadi" role="tabpanel" aria-labelledby="nav-pribadi-tab">
    <section class="p-4" id="sec-umum">
      @include('form.adddata.profilpribadi')

      <div class="d-flex justify-content-end">
        <button type="button" class="btn btn-lg btn-primary"
          onclick="document.getElementById('nav-keluarga-tab').click();">
          Next
          <i class="fas fa-arrow-right ms-2"></i>
        </button>
      </div>
    </section>
  </div>
  <div class="tab-pane fade" id="nav-keluarga" role="tabpanel" aria-labelledby="nav-keluarga-tab">
    <section class="p-4" id="sec-lokasi">
      @include('form.adddata.profilkeluarga')

      <div class="d-flex justify-content-between mt-4">
        <button type="button" class="btn btn-lg btn-primary"
          onclick="document.getElementById('nav-pribadi-tab').click();">
          <i class="fas fa-arrow-left me-2"></i>
          Back
        </button>
        <button type="button" class="btn btn-lg btn-primary"
          onclick="document.getElementById('nav-pendapatan-tab').click();">
          Next
          <i class="fas fa-arrow-right ms-2"></i>
        </button>
      </div>
    </section>
  </div>
  <div class="tab-pane fade" id="nav-pendapatan-palawija" role="tabpanel" aria-labelledby="nav-pendapatan-palawija-tab">
    <section class="p-4" id="sec-toc">
      @include('form.adddata.pendapatan-palawija')

      <div class="d-flex justify-content-between mt-4">
        <button type="button" class="btn btn-lg btn-primary"
          onclick="document.getElementById('nav-keluarga-tab').click();">
          <i class="fas fa-arrow-left me-2"></i>
          Back
        </button>
        <button type="button" class="btn btn-lg btn-primary"
          onclick="document.getElementById('nav-pendapatan-holtikultura-tab').click();">
          Next
          <i class="fas fa-arrow-right ms-2"></i>
        </button>
      </div>
    </section>
  </div>
  <div class="tab-pane fade" id="nav-pendapatan-holtikultura" role="tabpanel" aria-labelledby="nav-pendapatan-holtikultura-tab">
    <section class="p-4" id="sec-toc">
      @include('form.adddata.pendapatan-holtikultura')

      <div class="d-flex justify-content-between mt-4">
        <button type="button" class="btn btn-lg btn-primary"
          onclick="document.getElementById('nav-pendapatan-palawija-tab').click();">
          <i class="fas fa-arrow-left me-2"></i>
          Back
        </button>
        <button type="button" class="btn btn-lg btn-primary"
          onclick="document.getElementById('nav-pendapatan-perkebunan-tab').click();">
          Next
          <i class="fas fa-arrow-right ms-2"></i>
        </button>
      </div>
    </section>
  </div>
  <div class="tab-pane fade" id="nav-pendapatan-perkebunan" role="tabpanel" aria-labelledby="nav-pendapatan-perkebunan-tab">
    <section class="p-4" id="sec-toc">
      @include('form.adddata.pendapatan-perkebunan')

      <div class="d-flex justify-content-between mt-4">
        <button type="button" class="btn btn-lg btn-primary"
          onclick="document.getElementById('nav-pendapatan-holtikultura-tab').click();">
          <i class="fas fa-arrow-left me-2"></i>
          Back
        </button>
        <button type="button" class="btn btn-lg btn-primary"
          onclick="document.getElementById('nav-pendapatan-kehutanan-tab').click();">
          Next
          <i class="fas fa-arrow-right ms-2"></i>
        </button>
      </div>
    </section>
  </div>
  <div class="tab-pane fade" id="nav-pendapatan-kehutanan" role="tabpanel" aria-labelledby="nav-pendapatan-kehutanan-tab">
    <section class="p-4" id="sec-toc">
      @include('form.adddata.pendapatan-kehutanan')

      <div class="d-flex justify-content-between mt-4">
        <button type="button" class="btn btn-lg btn-primary"
          onclick="document.getElementById('nav-pendapatan-perkebunan-tab').click();">
          <i class="fas fa-arrow-left me-2"></i>
          Back
        </button>
        <button type="button" class="btn btn-lg btn-primary"
          onclick="document.getElementById('nav-pendapatan-perikanan-tab').click();">
          Next
          <i class="fas fa-arrow-right ms-2"></i>
        </button>
      </div>
    </section>
  </div>
  <div class="tab-pane fade" id="nav-pendapatan-perikanan" role="tabpanel" aria-labelledby="nav-pendapatan-perikanan-tab">
    <section class="p-4" id="sec-toc">
      @include('form.adddata.pendapatan-perikanan')

      <div class="d-flex justify-content-between mt-4">
        <button type="button" class="btn btn-lg btn-primary"
          onclick="document.getElementById('nav-pendapatan-kehutanan-tab').click();">
          <i class="fas fa-arrow-left me-2"></i>
          Back
        </button>
        <button type="button" class="btn btn-lg btn-primary"
          onclick="document.getElementById('nav-pendapatan-peternakan-tab').click();">
          Next
          <i class="fas fa-arrow-right ms-2"></i>
        </button>
      </div>
    </section>
  </div>
  <div class="tab-pane fade" id="nav-pendapatan-peternakan" role="tabpanel" aria-labelledby="nav-pendapatan-peternakan-tab">
    <section class="p-4" id="sec-toc">
      @include('form.adddata.pendapatan-peternakan')

      <div class="d-flex justify-content-between mt-4">
        <button type="button" class="btn btn-lg btn-primary"
          onclick="document.getElementById('nav-pendapatan-perikanan-tab').click();">
          <i class="fas fa-arrow-left me-2"></i>
          Back
        </button>
        <a href="#" class="btn btn-lg btn-primary">
          <i class="fas fa-save me-2"></i>
          Simpan
        </a>
      </div>
    </section>
  </div>
</div>

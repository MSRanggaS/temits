<div class="tab-line-primary">
  <nav>
    <div class="nav nav-tabs" id="nav-tab" role="tablist">
      <button class="nav-link active" id="nav-umum-tab" data-bs-toggle="tab" data-bs-target="#nav-umum" type="button"
        role="tab" aria-controls="nav-umum" aria-selected="true"><i class="fas fa-th-list me-2"></i> Profil Pribadi</button>
      <button class="nav-link" id="nav-lokasi-tab" data-bs-toggle="tab" data-bs-target="#nav-lokasi" type="button"
        role="tab" aria-controls="nav-lokasi" aria-selected="false" disabled><i class="fas fa-map-marker-alt me-2"></i>
        Profil Keluarga</button>
      <button class="nav-link" id="nav-toc-tab" data-bs-toggle="tab" data-bs-target="#nav-toc" type="button"
        role="tab" aria-controls="nav-toc" aria-selected="false" disabled><i class="fas fa-sync me-2"></i>
        Pendapatan</button>
      <button class="nav-link" id="nav-sdgs-tab" data-bs-toggle="tab" data-bs-target="#nav-sdgs" type="button"
        role="tab" aria-controls="nav-sdgs" aria-selected="false" disabled><i class="fas fa-globe-americas me-2"></i>
        SDGs</button>
      <button class="nav-link" id="nav-stakeholder-tab" data-bs-toggle="tab" data-bs-target="#nav-stakeholder"
        type="button" role="tab" aria-controls="nav-stakeholder" aria-selected="false" disabled><i
          class="fas fa-users me-2"></i>
        Stakeholder / Partner</button>
      <button class="nav-link" id="nav-penerima-tab" data-bs-toggle="tab" data-bs-target="#nav-penerima"
        type="button" role="tab" aria-controls="nav-penerima" aria-selected="false" disabled><i
          class="fas fa-handshake me-2"></i>
        Penerima Manfaat</button>
      <button class="nav-link" id="nav-aktivitas-tab" data-bs-toggle="tab" data-bs-target="#nav-aktivitas"
        type="button" role="tab" aria-controls="nav-aktivitas" aria-selected="false" disabled><i
          class="fas fa-calendar me-2"></i>
        Aktivitas</button>
    </div>
  </nav>

  <div class="tab-content mb-4" id="nav-tabContent">
    <div class="tab-pane fade show active" id="nav-umum" role="tabpanel" aria-labelledby="nav-umum-tab">
      <section class="p-4" id="sec-umum">
        @include('form.adddata.profilpribadi')

        <div class="d-flex justify-content-end">
          <button type="button" class="btn btn-lg btn-primary"
            onclick="document.getElementById('nav-lokasi-tab').click();">
            Next
            <i class="fas fa-arrow-right ms-2"></i>
          </button>
        </div>
      </section>
    </div>

    <div class="tab-pane fade" id="nav-lokasi" role="tabpanel" aria-labelledby="nav-lokasi-tab">
      <section class="p-4" id="sec-lokasi">
        @include('form.adddata.profilkeluarga')

        <div class="d-flex justify-content-between mt-4">
          <button type="button" class="btn btn-lg btn-primary"
            onclick="document.getElementById('nav-umum-tab').click();">
            <i class="fas fa-arrow-left me-2"></i>
            Back
          </button>
          <button type="button" class="btn btn-lg btn-primary"
            onclick="document.getElementById('nav-toc-tab').click();">
            Next
            <i class="fas fa-arrow-right ms-2"></i>
          </button>
        </div>
      </section>
    </div>

    <div class="tab-pane fade" id="nav-toc" role="tabpanel" aria-labelledby="nav-toc-tab">
      <section class="p-4" id="sec-toc">
        @include('form.adddata.pendapatan')

        <div class="d-flex justify-content-between mt-4">
          <button type="button" class="btn btn-lg btn-primary"
            onclick="document.getElementById('nav-lokasi-tab').click();">
            <i class="fas fa-arrow-left me-2"></i>
            Back
          </button>
          <button type="button" class="btn btn-lg btn-primary"
            onclick="document.getElementById('nav-sdgs-tab').click();">
            Next
            <i class="fas fa-arrow-right ms-2"></i>
          </button>
        </div>
      </section>
    </div>

    <div class="tab-pane fade" id="nav-sdgs" role="tabpanel" aria-labelledby="nav-sdgs-tab">
      <section class="p-4" id="sec-sdgs">
        @include('form.adddata.pendapatan')

        <div class="d-flex justify-content-between mt-4">
          <button type="button" class="btn btn-lg btn-primary"
            onclick="document.getElementById('nav-toc-tab').click();">
            <i class="fas fa-arrow-left me-2"></i>
            Back
          </button>
          <button type="button" class="btn btn-lg btn-primary"
            onclick="document.getElementById('nav-stakeholder-tab').click();">
            Next
            <i class="fas fa-arrow-right ms-2"></i>
          </button>
        </div>
      </section>
    </div>

    <div class="tab-pane fade" id="nav-stakeholder" role="tabpanel" aria-labelledby="nav-stakeholder-tab">
      <section class="p-4" id="sec-stakeholder">
        @include('form.adddata.pendapatan')

        <div class="d-flex justify-content-between mt-4">
          <button type="button" class="btn btn-lg btn-primary"
            onclick="document.getElementById('nav-sdgs-tab').click();">
            <i class="fas fa-arrow-left me-2"></i>
            Back
          </button>
          <button type="button" class="btn btn-lg btn-primary"
            onclick="document.getElementById('nav-penerima-tab').click();">
            Next
            <i class="fas fa-arrow-right ms-2"></i>
          </button>
        </div>
      </section>
    </div>

    <div class="tab-pane fade" id="nav-penerima" role="tabpanel" aria-labelledby="nav-penerima-tab">
      <section class="p-4" id="sec-penerima">
        @include('form.adddata.pendapatan')

        <div class="d-flex justify-content-between mt-4">
          <button type="button" class="btn btn-lg btn-primary"
            onclick="document.getElementById('nav-stakeholder-tab').click();">
            <i class="fas fa-arrow-left me-2"></i>
            Back
          </button>
          <button type="button" class="btn btn-lg btn-primary"
            onclick="document.getElementById('nav-aktivitas-tab').click();">
            Next
            <i class="fas fa-arrow-right ms-2"></i>
          </button>
        </div>
      </section>
    </div>

    <div class="tab-pane fade" id="nav-aktivitas" role="tabpanel" aria-labelledby="nav-aktivitas-tab">
      <section class="p-4" id="sec-aktivitas">
        @include('form.adddata.pendapatan')

        <div class="d-flex justify-content-between mt-4">
          <button type="button" class="btn btn-lg btn-primary"
            onclick="document.getElementById('nav-stakeholder-tab').click();">
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

</div>
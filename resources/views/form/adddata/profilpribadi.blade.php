<h5>Profil Pribadi</h5>
<hr style="height: 2px">

<form id="profil-pribadi">
  <div class="row input-data">
    <div class="col-xxl-8">
      <div class="row">
        <div class="col">
          <div class="mb-3">
            <label for="provinsi" class="form-label">Provinsi</label>
            <select class="form-select" name="provinsi" id="provinsi">
              <option value="">Pilih Provinsi</option>
              <option value="1">Jawa Tengah</option>
              <option value="2">Jawa Timur</option>
            </select>
          </div>
        </div>
        <div class="col">
          <div class="mb-3">
            <label for="umum-deskripsi" class="form-label">Kabupaten</label>
            <select class="form-select" name="kabupaten" id="kabupaten"
              aria-label="Default select example">
              <option value="">Pilih Kabupaten</option>
              <option value="">Jombang</option>
              <option value="">Jember</option>
              <option value="">Lamongan</option>
              <option value="">Wonogiri</option>
              <option value="">Rembang</option>
              <option value="">Blora</option>
            </select>
          </div>
        </div>
      </div>
      <div class="mb-3">
        <label for="kecamatan" class="form-label">Kecamatan</label>
        <select class="form-select" name="lokasi-kota" id="lokasi-kota" disabled>
          <option value="">Pilih Kecamatan</option>
        </select>
      </div>
      <div class="mb-3">
        <label for="kecamatan" class="form-label">Desa/Kelurahan</label>
        <select class="form-select" name="lokasi-kota" id="lokasi-kota" disabled>
          <option value="">Pilih Desa/Kelurahan</option>
        </select>
      </div>
      <div class="mb-3">
        <label for="kecamatan" class="form-label">Nama Kepala Rumah Tangga</label>
        <input type="text" class="form-control" name="kecamatan" id="kecamatan"
          placeholder="Nama Kepala Rumah Tangga" required>
      </div>
      <div class="mb-3">
        <label for="kecamatan" class="form-label">No. Hp/Telepon</label>
        <div class="input-group mb-3">
          <span class="input-group-text" id="basic-addon1">+62</span>
          <input type="number" class="form-control" name="telepon" id="telepon"
            placeholder="Masukkan no. telp">
        </div>
      </div>
      <div class="mb-3">
        <label for="kecamatan" class="form-label">Jumlah Anggota Rumah Tangga</label>
        <input type="number" class="form-control" name="kecamatan" id="kecamatan"
          placeholder="Jumlah Anggota Rumah Tangga" required>
      </div>
      <div class="mb-3">
        <label for="kecamatan" class="form-label">Jumlah Anggota Rumah Tangga yang Bekerja</label>
        <input type="number" class="form-control" name="kecamatan" id="kecamatan"
          placeholder="Jumlah Anggota Rumah Tangga yang Bekerja" required>
      </div>
      <div class="mb-3">
        <label for="kecamatan" class="form-label">Alamat Lengkap</label>
        <textarea class="form-control" name="umum-deskripsi" id="umum-deskripsi" rows="4"
          placeholder="Alamat Lengkap" required></textarea>
      </div>
    </div>
  </div>
</form>
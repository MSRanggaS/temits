$(document).ready(function () {
  var url = new URL(window.location.href);
  var p = url.searchParams.get("p");

  // get draft umum
  $.ajax({
    type: "GET",
    url: '/draft_program/umum',
    data: {
      p: p
    },
    success: function (response) {
      if (response.data != null) {
        $('#umum-nama').val(response.data.nama_program);
        $('#umum-deskripsi').val(response.data.deskripsi_program);
        $('#umum-bidang').val(response.data.bidang_program);
        $('#umum-tanggal-kegiatan').val(response.data.tanggal_kegiatan);
        $('#umum-anggaran').val(response.data.anggaran);
        $('#umum-koordinator').val(response.data.nama_koor);
        $('#umum-hpkoordinator').val(response.data.kontak_koor);
        $('#umum-pj').val(response.data.nama_pj);
        $('#umum-hppj').val(response.data.kontak_pj);
      }
    }
  });

  // sdgs
  $.ajax({
    type: "GET",
    url: '/draft_program/sdgs',
    data: {
      p: p
    },
    success: function (response) {
      if (response.data != null) {
        for (let index = 0; index < response.data.length; index++) {
          var data = response.data[index];
          var target = JSON.parse(data.target_no);
          var htmltarget = ``;

          for (let index = 0; index < target.length; index++) {
            const element = target[index];
            htmltarget += `<span class="me-2 mb-2 px-3 py-1" style="background-color: #F6F8FC; border-radius: 3px">` + element + `</span>`;
          }

          var html = `
        <div class="col">
          <div class="card h-100" id="activesdgs-` + data.id_program_sdgs + `" style="border: 1px solid rgba(0, 0, 0, 0.125);">
            <div class="card-body">
              <div class="d-flex justify-content-between align-items-start">
                <img src="/src/img/icon/`+ data.icon + `" alt="" width="60px">
                <button type="button" class="btn-close-round" onclick="delsdgs('` + btoa(data.id_program_sdgs) + `')"><i class="fas fa-times"></i></button>
              </div>
              <h6 class="mt-3">`+ data.nama + `</h6>
              <hr>
              <div class="d-flex flex-wrap">` + htmltarget + `</div>
            </div>
          </div>
        </div>
        `;

          $('#sdgsinputed').append(html);
          $('#sdgsbtn-' + data.sdgs_no).remove();
        }
      }
    }
  });

  // stakeholder
  $.ajax({
    type: "GET",
    url: "/draft_program/stakeholder",
    data: {
      p: p
    },
    success: function (response) {
      for (let index = 0; index < response.data.length; index++) {
        const data = response.data[index];
        $('#stakeholdertable').DataTable().row.add([
          data.nama,
          data.jenis_stakeholder,
          data.posisi_sosial,
          '+62' + data.hp,
          '<button class="btn btn-sm" style="color: #E26161" onclick="delprostake(' + data.id_program_stakeholder + ')"><i class="fas fa-times"></i></button>'
        ]).draw(false);
      }
    }
  });

  // get nota
  $.ajax({
    type: "GET",
    url: "/draft_program/nota",
    data: {
      p: p
    },
    success: function (response) {
      for (let index = 0; index < response.data.nota.length; index++) {
        const data = response.data.nota[index];
        $('#charity-notatable').DataTable().row.add([
          data.keterangan_nota,
          data.anggaran,
          '<img src="/upload/nota/' + data.nota_dir + '" id="imgpreview" style="width: 500px; height: auto; object-fit: cover">',
          '<button class="btn btn-sm" style="color: #E26161" onclick="delnota(' + data.id_program_nota + ')"><i class="fas fa-times"></i></button>'
        ]).draw(false);
      };
      $('#anggaran-nota').text('Rp ' + response.data.anggaran + ',00');
      $('#realisasi-nota').text('Rp ' + response.data.total + ',00');
      $('#persentase-nota').text(response.data.persen + '%');
    }
  });

  // get dokumentasi dokumen
  $.ajax({
    type: "GET",
    url: "/draft_program/dokumentasi/dokumen",
    data: {
      p: p
    },
    success: function (response) {
      for (let index = 0; index < response.data.length; index++) {
        const data = response.data[index];
        $('#dokumentasi-table').DataTable().row.add([
          index + 1,
          data.nama_dokumen,
          '<button class="btn btn-sm" style="color: #E26161" onclick="deldok(' + data.id_program_dokumentasi_dokumen + ')"><i class="fas fa-times"></i></button>'
        ]).draw(false);
      };
    }
  });

  // get dokumentasi foto
  $.ajax({
    type: "GET",
    url: "/draft_program/dokumentasi/foto",
    data: {
      p: p
    },
    success: function (response) {
      for (let index = response.data.length - 1; index >= 0; index--) {
        const data = response.data[index];
        var cardnew = `
        <input type="checkbox" id="photo` + index + `" name="photo[]" class="docslct d-none" value="` + data.id_program_dokumentasi_foto + `" disabled>
        <div class="col">
            <div>
                <label for="` + index + `"><img src="/upload/dokumentasi/` + data.foto_dir + `" alt="` + data.foto_dir + `"></label>
            </div>
        </div>`;
        $("#dokumentasi-foto-card").prepend(cardnew);
      };
    }
  });

  // get publikasi
  $.ajax({
    type: "GET",
    url: "/draft_program/publikasi",
    data: {
      p: p
    },
    success: function (response) {
      for (let index = 0; index < response.data.length; index++) {
        const data = response.data[index];
        var cardnew = `
        <div class="col" id="pub-` + data.id_program_publikasi + `">
            <div class="card" style="border: solid 1px #C0C0C0; border-radius: 5px">
                <div class="p-3">
                    <div class="row">
                        <div class="col" style="max-width: 30%">
                            <div style="aspect-ratio: 1/1; border-radius: 5px; overflow: hidden;">
                                <img src="/upload/publikasi/` + data.foto_dir + `" alt="" style="width: 100%; height: 100%; object-fit: cover">
                            </div>
                        </div>
                        <div class="col">
                            <div>
                                <h6>` + data.judul + `</h6>
                                <button class="btn rounded-circle" style="background-color: #E261611A; color: #E26161" onclick="delpub(` + data.id_program_publikasi + `)"><i class="fas fa-times"></i></button>
                            </div>
                            <hr>
                            <div class="mb-2" style="color: #A7A7A7">
                                <i class="fas fa-calendar-alt" style="width: 24px"></i>
                                <span>` + data.new_tanggal + ` - ` + data.waktu_publikasi + ' ' + data.timezone + `</span>
                            </div>
                            <div style="color: #A7A7A7">
                                <i class="fas fa-bullhorn" style="width: 24px"></i>
                                <span>` + data.media + `</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>`;
        $("#publikasi-card").append(cardnew);
      };
    }
  });

  // get draft lokasi
  $.ajax({
    type: "GET",
    url: '/draft_program/lokasi',
    data: {
      p: p
    },
    success: function (response) {
      if (response.data != null) {
        $('#lokasi-kota').prop("disabled", false);
        $('#lokasi-kecamatan').prop("disabled", false);
        $('#lokasi-kelurahan').prop("disabled", false);

        $('#lokasi-provinsi').val(response.data.id_provinsi);

        $.ajax({
          type: "GET",
          url: '/get_kota/' + response.data.id_provinsi,
          contentType: "application/json; charset=utf-8",
          dataType: "json",
          success: function (data) {
            for (let index = 0; index < data.length; index++) {
              const kota = data[index];
              $('#lokasi-kota').append('<option value="' + kota.id + '">' + kota.nama +
                '</option>');
            }
            $('#lokasi-kota').val(response.data.id_kota);
          }
        });

        $.ajax({
          type: "GET",
          url: '/get_kecamatan/' + response.data.id_kota,
          contentType: "application/json; charset=utf-8",
          dataType: "json",
          success: function (data) {
            for (let index = 0; index < data.length; index++) {
              const kota = data[index];
              $('#lokasi-kecamatan').append('<option value="' + kota.id + '">' + kota.nama +
                '</option>');
            }
            $('#lokasi-kecamatan').val(response.data.id_kecamatan);
          }
        });

        $.ajax({
          type: "GET",
          url: '/get_kelurahan/' + response.data.id_kecamatan,
          contentType: "application/json; charset=utf-8",
          dataType: "json",
          success: function (data) {
            for (let index = 0; index < data.length; index++) {
              const kota = data[index];
              $('#lokasi-kelurahan').append('<option value="' + kota.id + '">' + kota.nama +
                '</option>');
            }
            $('#lokasi-kelurahan').val(response.data.id_kelurahan);
          }
        });

        $('#lokasi-detaillokasi').val(response.data.lokasi_detail);
      }
    }
  });

  // penerima manfaat
  $.ajax({
    type: "GET",
    url: "/draft_program/penerimamanfaat/profilpenerima",
    data: {
      p: p
    },
    success: function (response) {
      for (let index = 0; index < response.data.length; index++) {
        const data = response.data[index];
        var html = `
        <span class="tag tag-primary">
          <i class="fas fa-users me-2"></i>
          ` + data.profile_penerima + `
          <button type="button" class="btn ms-2" style="margin-right: -.8rem; color: #E70B0B" >
            <i class="fas fa-times"></i></button>
        </span>
        `;
        $('#list-profil-penerima').append(html);
      }
    }
  });

  $.ajax({
    type: "GET",
    url: "/draft_program/penerimamanfaat/sasaran",
    data: {
      p: p
    },
    success: function (response) {
      for (let index = 0; index < response.data.length; index++) {
        const data = response.data[index];
        var html = `
        <span class="tag tag-primary">
          <i class="fas fa-users me-2"></i>
          ` + data.sasaran_program + `
          <button type="button" class="btn ms-2" style="margin-right: -.8rem; color: #E70B0B" >
            <i class="fas fa-times"></i></button>
        </span>
        `;
        $('#list-sasaran-program').append(html);
      }
    }
  });

  $.ajax({
    type: "GET",
    url: "/draft_program/penerimamanfaat/penerima",
    data: {
      p: p
    },
    success: function (response) {
      for (let index = 0; index < response.data.length; index++) {
        const data = response.data[index];
        $('#penerimatable').DataTable().row.add([
          data.nama,
          data.nik,
          data.email,
          data.hp,
          '+62' + data.hp,
          data.keterangan,
          '<button class="btn btn-sm" style="color: #E26161"><i class="fas fa-times"></i></button>'
        ]).draw(false);
      }
    }
  });

  $.ajax({
    type: "GET",
    url: "/draft_program/aktivitas",
    data: {
      p: p
    },
    success: function (response) {
      for (let index = 0; index < response.data.length; index++) {
        const data = response.data[index];
        $('#aktivitastable').DataTable().row.add([
          data.nama_aktivitas,
          'Rp ' + data.anggaran,
          '<button class="btn btn-sm" style="color: #E26161"><i class="fas fa-times"></i></button>'
        ]).draw(false);
      }
    }
  });

});
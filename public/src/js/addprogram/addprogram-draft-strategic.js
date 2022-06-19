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
        $('#umum-tanggalmulai').val(response.data.tanggal_mulai);
        $('#umum-tanggalselesai').val(response.data.tanggal_selesai);
        $('#umum-koordinator').val(response.data.nama_koor);
        $('#umum-hpkoordinator').val(response.data.kontak_koor);
        $('#umum-pj').val(response.data.nama_pj);
        $('#umum-hppj').val(response.data.kontak_pj);
      }
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

  // toc
  $.ajax({
    type: "GET",
    url: '/draft_program/toc',
    data: {
      p: p
    },
    success: function (response) {
      if (response.data != null) {
        for (let index = 0; index < response.data.length; index++) {
          var data = response.data[index];
          var id = index + 1;
          var forminput = `
          <div class="d-flex mb-3" id="row` + data.section + id + `">
            <input type="text" class="form-control" id="fieldinput` + id + `" data-toc-field="` + data.section + `" data-toc-token="` + btoa(data.id_program_toc) + `" onchange="input_toc(this)" value="` + data.deskripsi + `"></input>
            <button type="button" class="btn ms-3" id="` + data.section + id + `" style="color: #E26161; width: 40px;" onclick="delinput(this.id)"><i class="fas fa-times"></i></button>
          </div>
          `;

          $('#inputgroup-' + data.section).prepend(forminput);

          $('#list' + data.section).prepend('<li id="list-field' + data.section + id + '">' + data.deskripsi + '</li>');
        }
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
          <div class="col" id="activesdgs-` + data.id_program_sdgs + `">
            <div class="card h-100" style="border: 1px solid rgba(0, 0, 0, 0.125);">
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
          '<button class="btn btn-sm" style="color: #E26161" onclick="delaktivitas(' + data.id_program_aktivitas + ')"><i class="fas fa-times"></i></button>'
        ]).draw(false);
      }
    }
  });
});
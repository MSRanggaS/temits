var url = new URL(window.location.href);
var p = url.searchParams.get("p");

function checkValidityUmum() {
  $.ajax({
    type: "GET",
    url: "/validity/program_umum",
    data: {
      p: p,
    },
    success: function (response) {
      if (response.status == true) {
        $("#nav-lokasi-tab").removeAttr('disabled');
        $("#nav-toc-tab").removeAttr('disabled');
        $("#nav-sdgs-tab").removeAttr('disabled');
        $("#nav-stakeholder-tab").removeAttr('disabled');
        $("#nav-penerima-tab").removeAttr('disabled');
        $("#nav-aktivitas-tab").removeAttr('disabled');
        $("#nav-nota-tab").removeAttr('disabled');
        $("#nav-dokumentasi-tab").removeAttr('disabled');
        $("#nav-publikasi-tab").removeAttr('disabled');
      }
      $('#loading-overlay').remove();
    }
  });
}

// toc in & del
function addinput(field, id) {
  var ret = parseInt(id.replace(field, ''));
  var htmlid = ret + 1;
  var input = $('#field' + id).val();

  var html = `
    <div class="d-flex mb-3" id="row` + field + htmlid + `">
      <input type="text" class="form-control" id="field` + field + htmlid + `" data-toc-field="` + field + `" onchange="input_toc(this)" required>
      <button type="button" class="btn btn-success ms-3" id="` + field + htmlid + `" style="width: 40px;"
        onclick="addinput('` + field + `', this.id)"><i class="fas fa-plus"></i></button>
    </div>
  `;
  $('#inputgroup-' + field).append(html);

  var btn = `
    <button type="button" class="btn ms-3" id="` + id + `" style="color: #E26161; width: 40px;"
      onclick="delinput(this.id)"><i class="fas fa-times"></i></button>
  `;
  $('#' + id).replaceWith(btn);
}

function input_toc(element) {
  var input = $(element).val();
  var token = $(element).data("toc-token");
  var field = $(element).data("toc-field");

  if (input != '') {
    $.ajax({
      type: "POST",
      url: "/store_program/toc",
      headers: { 'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content') },
      data: {
        uuid: p,
        section: field,
        token: token,
        deskripsi: input,
      },
      success: function (response) {
        var id_store = response.id_store;

        var checklist = document.getElementById('list-' + $(element).attr("id"));

        if (checklist == null) {
          $(element).attr('data-toc-token', id_store);
          $('#list' + field).append('<li id="list-' + $(element).attr("id") + '">' + input + '</li>');
        } else {
          $('#list-' + $(element).attr("id")).html(input);
        }
      }
    });
  } else {
    $('#field' + id).focus();
  }
}

function delinput(id) {
  var x = $('#field' + id).data("toc-token");
  $.ajax({
    type: "GET",
    url: "/delete_program/toc",
    headers: { 'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content') },
    data: {
      t: x
    },
    success: function (response) {
      $('#row' + id).remove();
      $('#list-field' + id).remove();
    }
  });
}

// sdgs
function delsdgs(id) {
  $.ajax({
    type: "POST",
    url: "/delete_program/sdgs",
    headers: { 'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content') },
    data: {
      id: id,
    },
    success: function (response) {
      $('#activesdgs-' + response.program_sdgs).remove();
      $('#sdgsbtngroup').html('');

      $.ajax({
        type: "GET",
        url: "/get_sdgs",
        contentType: "application/json; charset=utf-8",
        dataType: "json",
      }).done(function (data) {
        for (let index = 0; index < data.length; index++) {
          const sdgs = data[index];
          var btn = `
          <button type="button" class="btn-sdgs" id="sdgsbtn-`+ sdgs.id_sdgs + `" data-bs-toggle="tooltip" title="` + sdgs.nama + `" onclick="getsdgstarget(` + sdgs.id_sdgs + `)">
            <img src="/src/img/icon/`+ sdgs.icon + `" alt="sdgs-` + sdgs.id_sdgs + `">
          </button>
          `;
          $('#sdgsbtngroup').append(btn);
        }
        $('[data-bs-toggle="tooltip"]').tooltip();
      });

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
              $('#sdgsbtn-' + data.sdgs_no).remove();
            }
          }
        }
      });

      var val = `
      <div class="alert alert-success" role="alert">
        Data berhasil dihapus
      </div>
      `;

      $('#sdgs-selection').html(val);
    }
  });
}

// del program stakeholder
function delprostake(id) {
  $.ajax({
    type: "POST",
    url: "/delete_program/stakeholder",
    headers: { 'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content') },
    data: {
      id: id,
    },
    success: function (response) {
      $.ajax({
        type: "GET",
        url: "/draft_program/stakeholder",
        data: {
          p: p
        },
        success: function (response) {
          $('#stakeholdertable').DataTable().clear().draw(false);
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
    }
  });
}

// del program nota
function delnota(id) {
  $.ajax({
    type: "POST",
    url: "/delete_program/nota",
    headers: { 'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content') },
    data: {
      p: p,
      id: id,
    },
    success: function (response) {
      $.ajax({
        type: "GET",
        url: "/draft_program/nota",
        data: {
          p: p
        },
        success: function (response) {
          $('#charity-notatable').DataTable().clear().draw(false);
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
          $("#display-nota").attr("src", "");
        }
      });
    }
  });
}

// del program dokumen
function deldok(id) {
  $.ajax({
    type: "POST",
    url: "/delete_program/dokumentasi/dokumen",
    headers: { 'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content') },
    data: {
      p: p,
      id: id,
    },
    success: function (response) {
      $.ajax({
        type: "GET",
        url: "/draft_program/dokumentasi/dokumen",
        data: {
          p: p
        },
        success: function (response) {
          $('#dokumentasi-table').DataTable().clear().draw(false);
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
    }
  });
}

// del program publikasi
function delpub(id) {
  $.ajax({
    type: "POST",
    url: "/delete_program/publikasi",
    headers: { 'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content') },
    data: {
      p: p,
      id: id,
    },
    success: function (response) {
      $("#pub-" + response.data).remove();
    }
  });
}

function delaktivitas(id) {
  $.ajax({
    type: "POST",
    url: "/program/aktivitas/delete",
    headers: {
      'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
    },
    data: {
      id_aktivitas: id
    },
    success: function (response) {
      $('#aktivitastable').DataTable().clear().draw();
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
    },
  });
}

// ==========================================

$(document).ready(function () {
  checkValidityUmum();

  var url = new URL(window.location.href);
  var p = url.searchParams.get("p");

  // umum
  $("#form-umum-strategic :input").change(function () {
    var nama = $('#umum-nama').val();
    var deskripsi = $('#umum-deskripsi').val();
    var bidang = $('#umum-bidang').val();
    var tanggalmulai = $('#umum-tanggalmulai').val();
    var tanggalselesai = $('#umum-tanggalselesai').val();
    var namakoor = $('#umum-koordinator').val();
    var kontakkoor = $('#umum-hpkoordinator').val();
    var namapj = $('#umum-pj').val();
    var kontakpj = $('#umum-hppj').val();

    if ($("#form-umum-strategic")[0].checkValidity()) {
      $.ajax({
        type: "POST",
        url: "/store_program/umum_strategic",
        headers: { 'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content') },
        data: {
          uuid: p,
          nama_program: nama,
          deskripsi_program: deskripsi,
          bidang_program: bidang,
          tanggal_mulai: tanggalmulai,
          tanggal_selesai: tanggalselesai,
          nama_koor: namakoor,
          kontak_koor: kontakkoor,
          nama_pj: namapj,
          kontak_pj: kontakpj,
        },
        success: function (response) {
          checkValidityUmum();
        }
      });
    }
    else {
      $("#form-umum-strategic")[0].reportValidity();
    }
  });

  // umum charity
  $("#form-umum-charity :input").change(function () {
    var nama = $('#umum-nama').val();
    var deskripsi = $('#umum-deskripsi').val();
    var bidang = $('#umum-bidang').val();
    var tanggalkegiatan = $('#umum-tanggal-kegiatan').val();
    var anggaran = $('#umum-anggaran').val();
    var namakoor = $('#umum-koordinator').val();
    var kontakkoor = $('#umum-hpkoordinator').val();
    var namapj = $('#umum-pj').val();
    var kontakpj = $('#umum-hppj').val();
    var targetsasaran = $('#umum-targetsasaran').val();

    if ($("#form-umum-charity")[0].checkValidity()) {
      $.ajax({
        type: "POST",
        url: "/store_program/umum_charity",
        headers: { 'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content') },
        data: {
          uuid: p,
          nama_program: nama,
          deskripsi_program: deskripsi,
          bidang_program: bidang,
          tanggal_kegiatan: tanggalkegiatan,
          anggaran: anggaran,
          nama_koor: namakoor,
          kontak_koor: kontakkoor,
          nama_pj: namapj,
          kontak_pj: kontakpj,
          target_sasaran: targetsasaran,
        },
        success: function (response) {
          checkValidityUmum();
        }
      });
    }
    else {
      $("#form-umum-charity")[0].reportValidity();
    }
  });

  // lokasi
  $("#form-lokasi :input").change(function () {
    var id_provinsi = $('#lokasi-provinsi').val();
    var provinsi = $('#lokasi-provinsi option:selected').text();
    var id_kota = $('#lokasi-kota').val();
    var kota = $('#lokasi-kota option:selected').text();
    var id_kecamatan = $('#lokasi-kecamatan').val();
    var kecamatan = $('#lokasi-kecamatan option:selected').text();
    var id_kelurahan = $('#lokasi-kelurahan').val();
    var kelurahan = $('#lokasi-kelurahan option:selected').text();
    var lokasi_detail = $('#lokasi-detaillokasi').val();

    $.ajax({
      type: "POST",
      url: "/store_program/lokasi",
      headers: { 'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content') },
      data: {
        uuid: p,
        id_provinsi: id_provinsi,
        provinsi: provinsi,
        id_kota: id_kota,
        kota: kota,
        id_kecamatan: id_kecamatan,
        kecamatan: kecamatan,
        id_kelurahan: id_kelurahan,
        kelurahan: kelurahan,
        lokasi_detail: lokasi_detail,
      },
      success: function (response) {
      },
    });
  });

  // sdgs
  $("#submittarget").click(function () {
    var form = $('#formsdgs');

    $.ajax({
      type: "POST",
      url: "/store_program/sdgs?p=" + p,
      headers: { 'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content') },
      data: form.serialize(),
      success: function (response) {
        var target = ``;

        for (let index = 0; index < response.target.length; index++) {
          const element = response.target[index];
          target += `<span class="me-2 mb-2 px-3 py-1" style="background-color: #F6F8FC; border-radius: 3px">` + element + `</span>`;
        }

        var html = `
        <div class="col" id="activesdgs-` + response.program_sdgs + `">
          <div class="card h-100" style="border: 1px solid rgba(0, 0, 0, 0.125);">
            <div class="card-body">
              <div class="d-flex justify-content-between align-items-start">
                <img src="/src/img/icon/`+ response.sdgs.icon + `" alt="" width="60px">
                <button type="button" class="btn-close-round" onclick="delsdgs('` + btoa(response.program_sdgs) + `')"><i class="fas fa-times"></i></button>
              </div>
              <h6 class="mt-3">`+ response.sdgs.nama + `</h6>
              <hr>
              <div class="d-flex flex-wrap">` + target + `</div>
            </div>
          </div>
        </div>
        `;

        $('#sdgsinputed').append(html);

        $('#sdgsbtn-' + response.sdgs.id_sdgs).remove();

        var val = `
        <div class="alert alert-success" role="alert">
          Data ditambahkan
        </div>
        `;

        $('#sdgs-selection').html(val);
      }
    });
  });

  $('#submitstakeholder').click(function () {
    var t = $('#stakeholdertable').DataTable();
    var id_stakeholder = $('#selectstakeholder').val();

    $.ajax({
      type: "POST",
      url: "/store_program/stakeholder?p=" + p,
      headers: { 'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content') },
      data: {
        uuid: p,
        id_stakeholder: id_stakeholder,
      },
      success: function (response) {
        $.ajax({
          type: "GET",
          url: "/draft_program/stakeholder",
          data: {
            p: p
          },
          success: function (response) {
            $('#stakeholdertable').DataTable().clear().draw(false);
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
      }
    });
  });

  $('#save-profil-penerima').click(function () {
    $.ajax({
      type: "POST",
      url: "/store_program/pm_profil_penerima",
      headers: { 'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content') },
      data: {
        uuid: p,
        profilepenerima: $('#profil-penerima').val()
      },
      success: function (response) {
        $('#profil-penerima').val('');
        var html = `
        <span class="tag tag-primary">
          <i class="fas fa-users me-2"></i>
          ` + response.data.profile_penerima + `
          <button type="button" class="btn ms-2" style="margin-right: -.8rem; color: #E70B0B" >
            <i class="fas fa-times"></i></button>
        </span>
        `;
        $('#list-profil-penerima').append(html);
      }
    });
  });

  $('#save-sasaran-program').click(function () {
    $.ajax({
      type: "POST",
      url: "/store_program/pm_sasaran",
      headers: { 'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content') },
      data: {
        uuid: p,
        sasaranprogram: $('#sasaran-program').val()
      },
      success: function (response) {
        $('#sasaran-program').val('');
        var html = `
        <span class="tag tag-primary">
          <i class="fas fa-users me-2"></i>
          ` + response.data.sasaran_program + `
          <button type="button" class="btn ms-2" style="margin-right: -.8rem; color: #E70B0B" >
            <i class="fas fa-times"></i></button>
        </span>
        `;
        $('#list-sasaran-program').append(html);
      }
    });
  });

  $('#save-penerima-manfaat').click(function () {
    var form = $('#form-penerima-manfaat');
    var t = $('#penerimatable').DataTable();

    if ($("#form-penerima-manfaat")[0].checkValidity()) {
      $.ajax({
        type: "POST",
        url: "/store_program/pm_penerima_manfaat?p=" + p,
        headers: { 'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content') },
        data: form.serialize(),
        success: function (response) {
          t.row.add([
            response.data.nama,
            response.data.nik,
            response.data.email,
            response.data.hp,
            '+62' + response.data.hp,
            response.data.keterangan,
            '<button class="btn btn-sm" style="color: #E26161"><i class="fas fa-times"></i></button>'
          ]).draw(false);
        }
      });
    }
    else {
      $("#form-penerima-manfaat")[0].reportValidity();
    }
  });

  $('#save-program-aktivitas').click(function () {
    var form = $('#form-aktivitas');
    var at = $('#aktivitastable').DataTable();

    if ($("#form-aktivitas")[0].checkValidity()) {
      $.ajax({
        type: "POST",
        url: "/store_program/aktivitas?p=" + p,
        headers: { 'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content') },
        data: form.serialize(),
        success: function (response) {
          $('#form-aktivitas')[0].reset();
          at.row.add([
            response.data.nama_aktivitas,
            'Rp ' + response.data.anggaran,
            '<button class="btn btn-sm" style="color: #E26161" onclick="delaktivitas(' + response.data.id_program_aktivitas + ')"><i class="fas fa-times"></i></button>'
          ]).draw(false);
        }
      });
    }
    else {
      $("#form-aktivitas")[0].reportValidity();
    }
  });

  $('#charity-nota').change(function (e) {
    var file = $("#charity-nota").get(0).files[0];

    if (file) {
      var reader = new FileReader();

      reader.onload = function () {
        $("#display-nota").attr("src", reader.result);
      }

      reader.readAsDataURL(file);
    }
    // var fileName = e.target.files[0].name;
    // $('#label-charity-nota').html(fileName);
  });

  $('form#nota-form').submit(function (e) {
    e.preventDefault();
    var t = $('#charity-notatable').DataTable();
    var notaForm = $('form#nota-form')[0];
    var fd = new FormData(notaForm);
    fd.append('uuid', p);

    $.ajax({
      type: 'POST',
      url: '/store_program/nota',
      headers: { 'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content') },
      data: fd,
      contentType: false,
      processData: false,
      success: function (response) {
        $('#nota-form')[0].reset();
        $.ajax({
          type: "GET",
          url: "/draft_program/nota",
          data: {
            p: p
          },
          success: function (response) {
            $('#charity-notatable').DataTable().clear().draw(false);
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
            $("#display-nota").attr("src", "");
          }
        });
      },
      error: function () {
      }
    });
  });

  $('#dok-berita-acara').on('change', function (e) {
    var fileName = e.target.files[0].name;
    $('#label-berita-acara').html(fileName);
  });

  $('#dok-daftar-hadir').on('change', function (e) {
    var fileName = e.target.files[0].name;
    $('#label-daftar-hadir').html(fileName);
  });

  $('form#dokumen-hadir-acara').submit(function (e) {
    e.preventDefault();
    var dokForm = $('form#dokumen-hadir-acara')[0];
    var fd = new FormData(dokForm);
    fd.append('uuid', p);

    $.ajax({
      type: 'POST',
      url: '/store_program/dokumentasi/dokumen',
      headers: { 'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content') },
      data: fd,
      contentType: false,
      processData: false,
      success: function (response) {
        $('#dokumen-hadir-acara')[0].reset();
        $.ajax({
          type: "GET",
          url: "/draft_program/dokumentasi/dokumen",
          data: {
            p: p
          },
          success: function (response) {
            $('#dokumentasi-table').DataTable().clear().draw(false);
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
      },
      error: function () {
      }
    });
  });

  $('form#publikasi-form').submit(function (e) {
    e.preventDefault();
    var publikasiForm = $('form#publikasi-form')[0];
    var fd = new FormData(publikasiForm);
    fd.append('uuid', p);

    $.ajax({
      type: 'POST',
      url: '/store_program/charity_publikasi',
      headers: { 'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content') },
      data: fd,
      contentType: false,
      processData: false,
      success: function (response) {
        $('#publikasi-form')[0].reset();
        var cardnew = `
            <div class="col" id="pub-` + response.data.id_program_publikasi + `">
                <div class="card" style="border: solid 1px #C0C0C0; border-radius: 5px">
                    <div class="p-3">
                        <div class="row">
                            <div class="col" style="max-width: 30%">
                                <div style="aspect-ratio: 1/1; border-radius: 5px; overflow: hidden;">
                                    <img src="/upload/publikasi/` + response.data.foto_dir + `" alt="" style="width: 100%; height: 100%; object-fit: cover">
                                </div>
                            </div>
                            <div class="col">
                                <div>
                                    <h6>` + response.data.judul + `</h6>
                                    <button class="btn rounded-circle" style="background-color: #E261611A; color: #E26161" onclick="delpub(` + response.data.id_program_publikasi + `)"><i class="fas fa-times"></i></button>
                                </div>
                                <hr>
                                <div class="mb-2" style="color: #A7A7A7">
                                    <i class="fas fa-calendar-alt" style="width: 24px"></i>
                                    <span>` + response.data.new_tanggal + ` - ` + response.data.waktu_publikasi + ' ' + response.data.timezone + `</span>
                                </div>
                                <div style="color: #A7A7A7">
                                    <i class="fas fa-bullhorn" style="width: 24px"></i>
                                    <span>` + response.data.media + `</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>`;
        $('#publikasi-card').append(cardnew);
      },
      error: function () {
      }
    });
  });

});
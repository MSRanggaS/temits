$(document).ready(function () {
  $.ajax({
    type: "GET",
    url: "/get_provinsi",
    contentType: "application/json; charset=utf-8",
    dataType: "json",
  }).done(function (data) {
    for (let index = 0; index < data.length; index++) {
      const provinsi = data[index];
      $('#lokasi-provinsi').append('<option value="' + provinsi.id + '">' + provinsi.nama +
        '</option>');
    }
  });

  $('#lokasi-provinsi').change(function () {
    const idprov = $('#lokasi-provinsi').val();
    const url = "/get_kota/" + idprov;
    $.ajax({
      type: "GET",
      url: url,
      contentType: "application/json; charset=utf-8",
      dataType: "json",
    }).done(function (data) {
      $('#lokasi-kota').empty();
      $('#lokasi-kota').append('<option selected>Pilih Kabupaten / Kota</option>');
      $('#lokasi-kota').prop("disabled", false);
      for (let index = 0; index < data.length; index++) {
        const kota = data[index];
        $('#lokasi-kota').append('<option value="' + kota.id + '">' + kota.nama +
          '</option>');
      }
    });
  });

  $('#lokasi-kota').change(function () {
    const idprov = $('#lokasi-kota').val();
    const url = "/get_kecamatan/" + idprov;
    $.ajax({
      type: "GET",
      url: url,
      contentType: "application/json; charset=utf-8",
      dataType: "json",
    }).done(function (data) {
      $('#lokasi-kecamatan').empty();
      $('#lokasi-kecamatan').append('<option selected>Pilih Kecamatan</option>');
      $('#lokasi-kecamatan').prop("disabled", false);
      for (let index = 0; index < data.length; index++) {
        const kecamatan = data[index];
        $('#lokasi-kecamatan').append('<option value="' + kecamatan.id + '">' + kecamatan.nama +
          '</option>');
      }
    });
  });

  $('#lokasi-kecamatan').change(function () {
    const idprov = $('#lokasi-kecamatan').val();
    const url = "/get_kelurahan/" + idprov;
    $.ajax({
      type: "GET",
      url: url,
      contentType: "application/json; charset=utf-8",
      dataType: "json",
    }).done(function (data) {
      $('#lokasi-kelurahan').empty();
      $('#lokasi-kelurahan').append('<option selected>Pilih Desa / Kelurahan</option>');
      $('#lokasi-kelurahan').prop("disabled", false);
      for (let index = 0; index < data.length; index++) {
        const kelurahan = data[index];
        $('#lokasi-kelurahan').append('<option value="' + kelurahan.id + '">' + kelurahan.nama +
          '</option>');
      }
    });
  });
});
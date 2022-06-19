$(document).ready(function () {
  $.ajax({
    type: "GET",
    url: "/getall_stakeholder",
    contentType: "application/json; charset=utf-8",
    dataType: "json",
    success: function (response) {
      for (let index = 0; index < response.length; index++) {
        const data = response[index];
        let html = `<option value="` + data.id_stakeholder + `">` + data.nama + `</option>`
        $('#selectstakeholder').append(html);
      }
      $("#selectstakeholder").select2({
        theme: "bootstrap-5",
      });
    }
  });
});

$('#selectstakeholder').change(function () {
  $.ajax({
    type: "GET",
    url: "/get_stakeholder",
    data: {
      s: $('#selectstakeholder').val()
    },
    success: function (response) {
      var img = '';
      if (response.img != '') {
        img = '/upload/stakeholder/' + response.img
      } else {
        img = '/upload/stakeholder/blank_profile.png'
      }
      var html = `
      <div class="col-auto" style="width: calc(250px + 2rem); height: 250px; overflow: hidden;">
        <div style="width: 250px; height: 250px; overflow: hidden; object-fit: cover; border-radius: 5px">
          <img src="`+ img + `" alt="" style="width: 100%; height: 100%; object-fit: cover">
        </div>
      </div>
      <div class="col d-flex flex-column justify-content-between">
        <div>
          <h5>`+ response.nama + `</h5>
          <p><small>`+ response.posisi_sosial + `</small></p>
          <hr>
          <p>+62`+ response.hp + ` / ` + response.email + `</p>
          <span class="badge rounded-pill px-3 py-2" style="background-color: #009DFB; font-weight: 400">`+ response.jenis_stakeholder + `</span>
        </div>
        <div>
          <a href="#" onclick="window.open('/data-master/stakeholder/detail/` + response.id_stakeholder + `','Detail','width=1080,height=600')" type="button" class="btn btn-outline-primary">Lihat Detail</a>
        </div>
      </div>
      `;
      $('#stakeholder_info').html(html);
    }
  });
});
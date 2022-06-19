$(document).ready(function () {
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
});

function getsdgstarget(id) {
  $.ajax({
    type: "GET",
    url: "/get_sdgs_target",
    data: {
      sdgs: id
    },
    contentType: "application/json; charset=utf-8",
    dataType: "json",
    success: function (response) {
      const html = `
      <form id="formsdgs">
        <h6 class="mb-3">` + response.sdgs.id_sdgs + '. ' + response.sdgs.nama + `</h6>
        <input type="hidden" name="sdgs" value="`+ response.sdgs.id_sdgs + `">
      </form>
      `;
      $('#sdgs-selection').html(html);
      for (let index = 0; index < response.target.length; index++) {
        const target = response.target[index];

        const htmlselect = `
        <div class="form-check mb-2">
          <input class="form-check-input" type="checkbox" value="`+ target.no_target + `" name="sdgstarget[]" id="checktarget-` + target.id_sdgs_target + `">
          <label class="form-check-label" for="checktarget-` + target.id_sdgs_target + `">
            ` + target.no_target + ` ` + target.target + `
          </label>
        </div>
        `;
        $('#formsdgs').append(htmlselect);
      }
    },
  });
}
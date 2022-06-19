$(document).ready(function () {
  $('#stakeholdertable').DataTable({
    searching: false,
    paging: false,
    info: false
  });
  $('#penerimatable').DataTable({
    searching: false,
    paging: false,
    info: false
  });
  $('#aktivitastable').DataTable({
    searching: false,
    paging: false,
    info: false
  });
  $('#kegiatantable').DataTable({
    searching: false,
    paging: false,
    info: false
  });
  $('#notatable').DataTable({
    searching: false,
    paging: false,
    info: false
  });
  $('#dokumentasitable').DataTable({
    searching: false,
    paging: false,
    info: false,
    columnDefs: [{
      "width": "100px",
      "targets": [1]
    }]
  });
  $('#dokumentasi-table').DataTable({
    searching: false,
    paging: false,
    info: false
  });
  $('#charity-notatable').DataTable({
    searching: false,
    paging: false,
    info: false
  });
});
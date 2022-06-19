$(document).ready(function () {
    
    deletesellect = document.getElementById("deletesellect");
    deleteaction = document.getElementById("deleteaction");
    warn = document.getElementById("warn");
    checkbox = document.getElementsByClassName("docslct");

    $('#deletesellect').click(function () {
        deletesellect.classList.add("d-none");
        deleteaction.classList.remove("d-none");
        warn.classList.remove("d-none");

        for (let i = 0; i < checkbox.length; i++) {
            checkbox[i].removeAttribute("disabled");
        }
    });

    $('#cancel-del-button').click(function () {
        deletesellect.classList.remove("d-none");
        deleteaction.classList.add("d-none");
        warn.classList.add("d-none");

        for (let i = 0; i < checkbox.length; i++) {
            checkbox[i].checked = false;
            checkbox[i].setAttribute("disabled", false);
        }
    });

    var documentation = new Dropzone(".dropzone", {
        addRemoveLinks: true,
        autoProcessQueue: false,
        parallelUploads: 10
    });

    $('#uploadfiles').click(function () {
        documentation.processQueue();
    });

    $('#closeuploadmodal').click(function () {
        location.reload();
        document.getElementById('nav-dokumentasi-tab').click();
    });
});
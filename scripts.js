var cliccate = 0;

function navigateHome() {
    $("#sezione1").fadeOut();
    $("#sezione2").fadeOut();
    $("#sezione3").fadeOut();
    $("#sezione4").fadeOut();
    $("#sezione5").fadeOut();
    $(".st0").fadeIn();
}

function sez1() {
    $("#sezione1").fadeIn();
    $("#sezione2").fadeOut();
    $("#sezione3").fadeOut();
    $("#sezione4").fadeOut();
    $("#sezione5").fadeOut();
    $(".st0").fadeOut();
}

function sez2() {
    $("#sezione2").fadeIn();
    $("#sezione1").fadeOut();
    $("#sezione3").fadeOut();
    $("#sezione4").fadeOut();
    $("#sezione5").fadeOut();
    $(".st0").fadeOut();
}

function sez3() {
    $("#sezione3").fadeIn();
    $("#sezione2").fadeOut();
    $("#sezione1").fadeOut();
    $("#sezione4").fadeOut();
    $("#sezione5").fadeOut();
    $(".st0").fadeOut();
}

function sez4() {
    $("#sezione4").fadeIn();
    $("#sezione2").fadeOut();
    $("#sezione3").fadeOut();
    $("#sezione1").fadeOut();
    $("#sezione5").fadeOut();
    $(".st0").fadeOut();
}

function sez5() {
    $("#sezione5").fadeIn();
    $("#sezione4").fadeOut();
    $("#sezione2").fadeOut();
    $("#sezione3").fadeOut();
    $("#sezione1").fadeOut();
    $(".st0").fadeOut();
}

function iquadratiruotano() {
    $("#quadrato").addClass("girare");
    $("#quadratino").addClass("rotate2");
    $("#quadrato").removeClass("quadratogrande");
    $("#quadratino").removeClass("quadratopiccolo");
}
function iquadrati2ruotano() {
    $("#quadrato2").addClass("girare");
    $("#quadratino2").addClass("rotate2");
    $("#quadrato2").removeClass("quadratogrande");
    $("#quadratino2").removeClass("quadratopiccolo");
}

function iquadrati3ruotano() {
    $("#quadrato3").addClass("girare");
    $("#quadratino3").addClass("rotate2");
    $("#quadrato3").removeClass("quadratogrande");
    $("#quadratino3").removeClass("quadratopiccolo");
}

function iquadrati4ruotano() {
    $("#quadrato4").addClass("girare");
    $("#quadratino4").addClass("rotate2");
    $("#quadrato4").removeClass("quadratogrande");
    $("#quadratino4").removeClass("quadratopiccolo");
}

function iquadrati5ruotano() {
    $("#quadrato5").addClass("girare");
    $("#quadratino5").addClass("rotate2");
    $("#quadrato5").removeClass("quadratogrande");
    $("#quadratino5").removeClass("quadratopiccolo");
}

function contatore() {
    if (cliccate == 0) {
        iquadratiruotano()
        cliccate = 1
    } else if (cliccate == 1) {
        $("#quadrato").addClass("quadratogrande");
        $("#quadratino").addClass("quadratopiccolo");
        $("#quadrato").removeClass("girare");
        $("#quadratino").removeClass("rotate2");
        cliccate = 0
    }
}

function contatore2() {
    if (cliccate == 0) {
        iquadrati2ruotano()
        cliccate = 1
    } else if (cliccate == 1) {
        $("#quadrato2").addClass("quadratogrande");
        $("#quadratino2").addClass("quadratopiccolo");
        $("#quadrato2").removeClass("girare");
        $("#quadratino2").removeClass("rotate2");
        cliccate = 0
    }
}

function contatore3() {
    if (cliccate == 0) {
        iquadrati3ruotano()
        cliccate = 1
    } else if (cliccate == 1) {
        $("#quadrato3").addClass("quadratogrande");
        $("#quadratino3").addClass("quadratopiccolo");
        $("#quadrato3").removeClass("girare");
        $("#quadratino3").removeClass("rotate2");
        cliccate = 0
    }
}

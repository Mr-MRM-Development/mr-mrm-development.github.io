const coverPP = document.getElementById("coverPP");

function rotateCoverPP() {
    if ((coverPP.src).includes("assets/img/photo-profile.png")) {
        coverPP.src = "assets/img/bocchi.png"
    } else {
        coverPP.src = "assets/img/photo-profile.png"
    }
}

window.rotateCoverPP = rotateCoverPP;
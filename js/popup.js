window.closePopup = closePopup;

const popup = document.querySelector(".popup");

function closePopup() {
    popup.classList.add("hide");
}

function showPopup() {
    popup.classList.remove("hide")
}
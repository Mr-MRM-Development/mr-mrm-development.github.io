const cursorCustom = document.getElementById("cursorCustom");

// document.addEventListener("mouseleave")

document.querySelector("*").addEventListener("mousemove",(e)=>{
    cursorCustom.style.left = (e.pageX + 10) + "px";
    cursorCustom.style.top  = (e.pageY + 10) + "px";
});
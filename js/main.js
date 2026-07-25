import "./cover.js";
import "./liquid.js";
import "./popup.js";

function setCode(code, lang) {
    const codePreview = document.querySelector("#codePreview");

    codePreview.removeAttribute("data-highlighted");

    for (const className of [...codePreview.classList]) {
        if (className.startsWith("language-")) {
            codePreview.classList.remove(className);
        };
    }

    codePreview.textContent = code;
    codePreview.classList.add(`language-${lang}`);
    hljs.highlightElement(codePreview);
}

// setCode(`
// class Video {
//     constructor(main) {
//         this.main = main;
//     }

//     play(src) {
//         const video = document.getElementById("video");
//         video.src = src;
//         video.play();
//     }
// }

// // Play Video
// const video = new Video("void");
// video.play();
// `, "js");


// setTimeout(() => {
//     setCode(`<h1 class="heading">Hello World</h1>`, "html");
// }, 5000)
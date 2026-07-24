import "./cover.js";

// ============================================
// LIQUID NOISE ANIMATION
// ============================================

let t = 0;
const liquidNoise = document.getElementById("liquid-noise");

function liquidAnimate() {
    t += 0.01;

    const x = 0.02 + Math.sin(t) * 0.01;
    const y = 0.03 + Math.cos(t) * 0.01;

    liquidNoise.setAttribute("baseFrequency", `${x}, ${y}`);

    requestAnimationFrame(liquidAnimate);
}

liquidAnimate();
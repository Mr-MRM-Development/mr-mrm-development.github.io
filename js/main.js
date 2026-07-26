import "./cover.js";
import "./liquid.js";
import { showPopup, closePopup } from "./popup.js";

import {
    CodePreview,
    Tabs
} from "./lib/lib-manager.js";



// CodePreview.loadSample("./templates/liquid-flow");

const tabs = new Tabs();

window.openPreview = openPreview;
async function openPreview(source) {
    try {
        await tabs.setTabs("./templates/" + source);
        await tabs.changeTab("html");
        CodePreview.loadSample("./templates/" + source);
        showPopup();
    } catch (error) {
        alert(error);
    }
}

window.changeTab = changeTab;
async function changeTab(opt) {
    try {
        await tabs.changeTab(opt);
    } catch (error) {
        alert(error)
    }
}

window.copyCode = copyCode;
async function copyCode() {
    tabs.copyCode();
}
import CodePreview from "../code-preview/main.js";

class Tabs {
    constructor() {
        this.html = "";
        this.css  = "";
        this.js   = "";

        this.changedTab = "html";
    }

    changeTab(opt) {
        if (opt === "html") {
            CodePreview.setCode(this.html, "html");
        } 
        else if (opt === "css") {
            CodePreview.setCode(this.css,  "css" );
        } 
        else {
            CodePreview.setCode(this.js,  "js"   );
        }

        this.changedTab = opt;
    }

    async setTabs(source) {
        this.html = await CodePreview.getCode(source + "/index.html");
        this.css  = await CodePreview.getCode(source + "/style.css" );
        this.js   = await CodePreview.getCode(source + "/script.js" );
    }

    async copyCode() {
        try {
            if (this.changedTab === "html") {
                navigator.clipboard.writeText(this.html);
            } 
            else if (this.changedTab === "css") {
                navigator.clipboard.writeText(this.css);
            } 
            else {
                navigator.clipboard.writeText(this.js);
            }
            return "Coppied";
        } catch (error) {
            alert(error)
        }
    }
}

export default Tabs;
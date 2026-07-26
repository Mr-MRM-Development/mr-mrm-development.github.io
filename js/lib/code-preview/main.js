class CodePreview {
    static async getCode(source) {
        try {
            return await fetch(source)
                .then(response => response.text())
                .then(text => {
                    return text;
                })
        } catch {
            return "";
        }
    }

    static setCode(code, lang) {
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

    static loadView(source) {
        const iframe = document.getElementById("appFrame");
        iframe.src   = source;
    }
    
    static runView(source) {
        const iframe  = document.getElementById("appFrame");
        
        const { html, css, js } = source;
        
        iframe.srcdoc = `
            <!DOCTYPE html>
            <html lang="en">
            <head>
                <meta charset="UTF-8">
                <meta name="viewport" content="width=device-width, initial-scale=1.0">
                <title>Document</title>
                
                <style>${css}</style>
            </head>
            <body>
                ${html}

                <script>${js}</script>
            </body>
            </html>`
    }

    static async loadSample(source) {
        const html = await this.getCode(source + "/index.html");
        const css  = await this.getCode(source + "/style.css" );
        const js   = await this.getCode(source + "/script.js" );

        this.setCode(html, "html");

        this.runView({
            html: html, 
            css: css, 
            js: js
        })
    }
}

export default CodePreview;
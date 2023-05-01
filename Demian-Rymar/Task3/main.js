class CssClass {
    constructor(className) {
        this.className = className;
        this.styles = {};
    }

    setStyle(prop, value) {
        this.styles[prop] = value;
    }

    removeStyle(prop) {
        delete this.styles[prop];
    }

    getCss() {
        let css = `.${this.className} {\n`;

        for (const prop in this.styles) {
            css += `  ${prop}: ${this.styles[prop]};\n`;
        }

        css += `}\n`;

        return css;
    }
}

const myClass = new CssClass('my-class');
myClass.setStyle('color', 'red');
myClass.setStyle('font-size', '24px');
myClass.removeStyle('color');
console.log(myClass.getCss()); // ".my-class {\n  font-size: 24px;\n}\n"

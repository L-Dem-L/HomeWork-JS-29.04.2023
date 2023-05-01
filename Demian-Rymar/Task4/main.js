class CssClass {
    constructor(className, styles) {
        this.className = className;
        this.styles = styles;
    }

    getCode() {
        return `.${this.className} { ${this.styles} }`;
    }
}

class HtmlElement {
    constructor(tagName, attributes = {}, innerHTML = "") {
        this.tagName = tagName;
        this.attributes = attributes;
        this.innerHTML = innerHTML;
        this.children = [];
    }

    addChild(child) {
        this.children.push(child);
    }

    getCode() {
        const attributes = Object.entries(this.attributes)
            .map(([key, value]) => `${key}="${value}"`)
            .join(" ");

        const children = this.children.map(child => child.getCode()).join("");

        return `<${this.tagName} ${attributes}>${this.innerHTML}${children}</${this.tagName}>`;
    }
}

class HtmlBlock {
    constructor(cssClasses, rootElement) {
        this.cssClasses = cssClasses;
        this.rootElement = rootElement;
    }

    getCode() {
        const styles = this.cssClasses.map(cssClass => cssClass.getCode()).join("");

        const html = this.rootElement.getCode();

        return `<style>${styles}</style>${html}`;
    }
}

// Створення CssClass об'єктів
const wrapfClass = new CssClass("wrapf", "display: flex;");
const blockClass = new CssClass("block", "width: 300px; margin: 10px;");
const imgClass = new CssClass("img", "width: 100%;");
const textClass = new CssClass("text", "text-align: justify;");

// Створення HtmlElement об'єктів
const wrapperDiv = new HtmlElement("div", { id: "wrapper", class: "wrap" });
const blockDiv1 = new HtmlElement("div", { class: "block" });
const blockDiv2 = new HtmlElement("div", { class: "block" });
const h3_1 = new HtmlElement("h3", {}, "What is Lorem Ipsum?");
const h3_2 = new HtmlElement("h3", {}, "what is Lorem Ipsum?");
const img1 = new HtmlElement("img", {
    class: "img",
    src: "lipsum.jpg",
    alt: "Lorem Ipsum"
});
const img2 = new HtmlElement("img", {
    class: "img",
    src: "lipsum.jpg",
    alt: "Lorem Ipsum"
});
const p1 = new HtmlElement(
    "p",
    {},
    `"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum
    has been the industrys standard dummy text ever since the 1500s, when an unknown
    printer took a galley of type and scrambled it to make a type specimen book.
    <a href-"https://www.lipsum.com/"target="_blank">More...</a>`
);
const p2 = new HtmlElement(
    "p",
    {},
    `"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum
    has been the industrys standard dummy text ever since the 1500s, when an unknown
    printer took a galley of type and scrambled it to make a type specimen book.
    <a href-"https://www.lipsum.com/"target="_blank">More...</a>`
);

// Створення HtmlBlock об'єктів
const block1 = new HtmlBlock([blockClass], blockDiv1);
const block2 = new HtmlBlock([blockClass], blockDiv2);
const imgBlock1 = new HtmlBlock([wrapfClass], img1);
const imgBlock2 = new HtmlBlock([wrapfClass], img2);
const textBlock1 = new HtmlBlock([textClass], p1);
const textBlock2 = new HtmlBlock([textClass], p2);

// Додавання дочірніх елементів
blockDiv1.addChild(h3_1);
blockDiv1.addChild(imgBlock1);
blockDiv1.addChild(textBlock1);
blockDiv2.addChild(h3_2);
blockDiv2.addChild(imgBlock2);
blockDiv2.addChild(textBlock2);
wrapperDiv.addChild(block1);
wrapperDiv.addChild(block2);

// Виведення HTML-коду
document.write(wrapperDiv.getCode());

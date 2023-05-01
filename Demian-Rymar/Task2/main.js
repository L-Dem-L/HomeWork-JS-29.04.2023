class HtmlElement {
    constructor(tagName, isSelfClosing = false, textContent = '') {
        this.tagName = tagName;
        this.isSelfClosing = isSelfClosing;
        this.textContent = textContent;
        this.attributes = [];
        this.styles = [];
        this.children = [];
    }

    setAttribute(name, value) {
        this.attributes.push({ name, value });
    }

    setStyle(name, value) {
        this.styles.push({ name, value });
    }

    addChild(child) {
        this.children.push(child);
    }

    prependChild(child) {
        this.children.unshift(child);
    }

    getHtml() {
        let html = `<${this.tagName}`;

        // Додаємо атрибути
        for (const attr of this.attributes) {
            html += ` ${attr.name}="${attr.value}"`;
        }

        // Додаємо стилі
        if (this.styles.length > 0) {
            let style = '';
            for (const s of this.styles) {
                style += `${s.name}:${s.value};`;
            }
            html += ` style="${style}"`;
        }

        if (this.isSelfClosing) {
            // Закриваючий тег не потрібен
            html += ' />';
        } else {
            // Додаємо вкладені елементи
            html += '>';
            for (const child of this.children) {
                html += child.getHtml();
            }
            html += `${this.textContent}</${this.tagName}>`;
        }

        return html;
    }
}

// Створюємо елементи
const wrapper = new HtmlElement('div');
wrapper.setAttribute('id', 'wrapper');
wrapper.setStyle('display', 'flex');

const leftDiv = new HtmlElement('div', false, '\n');
leftDiv.setStyle('width', '300px');
leftDiv.setStyle('margin', '10px');

const leftH3 = new HtmlElement('h3', false, 'What is Lorem Ipsum?');

const leftImg = new HtmlElement('img', true);
leftImg.setAttribute('src', 'lipsum.jpg');
leftImg.setAttribute('alt', 'Lorem Ipsum');
leftImg.setStyle('width', '100%');

const leftP = new HtmlElement('p', false, 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.');
leftP.setStyle('text-align', 'justify');

const leftA = new HtmlElement('a', false, 'More...');
leftA.setAttribute('href', 'https://www.lipsum.com/');
leftA.setAttribute('target', '_blank');

leftP.addChild(leftA);
leftDiv.addChild(leftH3);
leftDiv.addChild(leftImg);
leftDiv.addChild(leftP);

const rightDiv = new HtmlElement('div', false, '\n');
rightDiv.setStyle('width', '300px');
rightDiv.setStyle('margin', '10px');

const rightH3 = new HtmlElement('h3', false, 'What is Lorem Ipsum?');

const rightImg = new HtmlElement('img', true);
rightImg.setAttribute('src', 'lipsum.jpg');
rightImg.setAttribute('alt', 'Lorem Ipsum');
rightImg.setStyle('width', '100%');

const rightP = new HtmlElement('p', false, "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.");

const rightA = new HtmlElement('a', false, 'More...');
rightA.setAttribute('href', 'https://www.lipsum.com/');
rightA.setAttribute('target', '_blank');

rightP.addChild(rightA);
rightDiv.addChild(rightH3);
rightDiv.addChild(rightImg);
rightDiv.addChild(rightP);

wrapper.addChild(leftDiv);
wrapper.addChild(rightDiv);

// Виводимо блок на сторінку
document.write(wrapper.getHtml());

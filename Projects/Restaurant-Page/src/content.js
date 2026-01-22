import alfredoImage from './Resources/Rice.jpg';

function createHome() {
        const content = document.createElement('div');

        const heading = document.createElement('h1');
        heading.textContent = "At Saka's Malevolent Kitchen, We Hear Your Voice";
        content.appendChild(heading);

        const paragraph = document.createElement('p');
        paragraph.textContent = "Contact us at 322-324-234 or using email through Malevolent.Kitchen@example.com"
        content.appendChild(paragraph);

        const image = document.createElement('img');
        image.src = alfredoImage;
        content.appendChild(image);

        return content;
}

export default createHome;
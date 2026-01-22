import alfredoImage from './Resources/Rice.jpg';

function createHome() {
        const content = document.createElement('div');

        const heading = document.createElement('h1');
        heading.textContent = "Welcome to Saka's Malevolent Kitchen";
        content.appendChild(heading);

        const paragraph = document.createElement('p');
        paragraph.textContent = "In Saka's Malevolent Kitchen we strive to provide the beast service in our domain. We provide the highest quality of meat that no human has every tasted before"
        content.appendChild(paragraph);

        const image = document.createElement('img');
        image.src = alfredoImage;
        content.appendChild(image);

        return content;
}

export default createHome;
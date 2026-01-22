import alfredoImage from './Resources/Rice.jpg';
import friedChicken from './Resources/crispy-kentucky-fried-chicken-black-slate.jpg';
import hamburger from './Resources/Hamburger-and-french.jpg'

function createHome() {
        const content = document.createElement('div');

        const heading = document.createElement('h1');
        heading.textContent = "Brows Our Menu";
        content.appendChild(heading);

        const paragraph = document.createElement('p');
        paragraph.textContent = "Check out our menu"
        content.appendChild(paragraph);

        // [Image, Title, Description, Price]
        const menu_items = [
            [alfredoImage, 'Rice', 'The best and highest rated dish from the Malevolent Kitchen', '11$'],
            [friedChicken, 'Crispy Fried Chicken', 'Crispy fried chicken on a black slate', '12$'],
            [hamburger, 'Hamburger', 'Hamburger and french', '9$']
        ];
        
        const orders = document.createElement('div');

        for (const item of menu_items){
            const menu_item_div = document.createElement('div');

            const title = document.createElement('h2');
            title.textContent = item[1];
            menu_item_div.appendChild(title);

            const description = document.createElement('p');
            description.textContent = item[2];
            menu_item_div.appendChild(description);

            const price = document.createElement('p');
            price.textContent = item[3];
            menu_item_div.appendChild(price);

            const image = document.createElement('img');
            image.src = item[0];
            image.classList = 'menu-img';
            menu_item_div.appendChild(image);

            orders.appendChild(menu_item_div);
        }
        content.appendChild(orders);

        return content;
}

export default createHome;
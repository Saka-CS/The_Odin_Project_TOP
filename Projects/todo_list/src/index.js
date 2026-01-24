// src/index.js
import odinImage from "./resources/Rice.jpg";
import "./styles.css";
import { greeting } from "./greeting.js";


console.log(greeting);

const image = document.createElement("img");
image.src = odinImage;
   
document.body.appendChild(image);

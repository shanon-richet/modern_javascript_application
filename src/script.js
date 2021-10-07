import { toggleDark, openShoppingCart } from "./functions";
import  { createMenu, main} from "./menu";
console.log(main)


const darkModeSwitch = document.querySelector('.switch');
darkModeSwitch.addEventListener('click', toggleDark)

const btnShopping = document.querySelector('.btn');
btnShopping.addEventListener('click', openShoppingCart)

createMenu();

import { élève, toggleDark } from "./functions";

console.log(élève)

const darkModeSwitch = document.querySelector('.switch');
darkModeSwitch.addEventListener('click', toggleDark)

export function toggleDark() {
    var element = document.body;
    element.classList.toggle("dark-mode");
}
export function openShoppingCart() {
    const aside = document.querySelector('aside');    
    if (aside.style.display === "none") {
      aside.style.display = "block";
    } else {
      aside.style.display = "none";
    }
}



const menu = document.querySelector("menu");
const pres = document.getElementById("displayNo");


menu.addEventListener(('click'), () => {
    if(pres.getAttribute("id") == "displayNo"){
        pres.className = "display";
        pres.removeAttribute("id");
    } else{
        pres.id = "displayNo";
        pres.removeAttribute("class");
    }
});
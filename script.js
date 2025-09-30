const presentation = document.getElementById("presentation");
const deliverables = document.getElementById("deliverables");
const prototype = document.getElementById("prototype");

const displayerDel = document.getElementById("displayNoDel");
const displayerPre = document.getElementById("displayNoPre");
const displayerPro = document.getElementById("displayNoPro");


presentation.addEventListener(('mouseenter'), () => {
        displayerPre.className = "display";
        displayerPre.removeAttribute("id");
});

presentation.addEventListener(('mouseleave'), () => {
        displayerPre.id = "displayNoPre";
        displayerPre.removeAttribute("class");

});


deliverables.addEventListener(('mouseenter'), () => {
        displayerDel.className = "display";
        displayerDel.removeAttribute("id");
});

deliverables.addEventListener(('mouseleave'), () => {
        displayerDel.id = "displayNoDel";
        displayerDel.removeAttribute("class");

});


prototype.addEventListener(('mouseenter'), () => {
        displayerPro.className = "display";
        displayerPro.removeAttribute("id");
});

prototype.addEventListener(('mouseleave'), () => {
        displayerPro.id = "displayNoPro";
        displayerPro.removeAttribute("class");

});








// https://stockcake.com/i/organized-pantry-shelves_1155144_917047
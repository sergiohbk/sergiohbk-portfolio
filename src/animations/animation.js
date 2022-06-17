export function scrollEffect(){
    const name = document.getElementById("name");

    window.addEventListener("scroll", function(){
        const scroll = window.scrollY;
        name.style.top = scroll + "px";
    });
}
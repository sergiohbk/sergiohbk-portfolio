export function scrollEffect(){
    let imageprofile = document.getElementById("image-profile");
    let name = document.getElementById("name");
    let imagetop = imageprofile.getBoundingClientRect().top;
    let nametop = name.getBoundingClientRect().top;

    window.addEventListener("scroll", function(){
        let scroll = window.scrollY;
        imageprofile.style.top = imagetop + scroll * 0.6 + "px";
        name.style.top = nametop + scroll * 0.6 + "px";
    });
}
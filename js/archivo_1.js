let img = document.getElementById('imgcab');
let c=0;

function fade(){
    img.style.opacity="0"; //[0-1]
    img.style.transition="all 1s ease";
    setTimeout(fadeOut, 1000);
}

function fadeOut(){
    img.style.opacity="1";
    img.style.transition="all 1s ease";
    carrusel();
    setTimeout(fade, 1000);
}

function carrusel(){
    c++;
    if(c>5) c=1;
    img.setAttribute('src', 'img/ban'+c+'.jpg');
}


fade();

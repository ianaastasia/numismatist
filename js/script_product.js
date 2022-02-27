const imgTen = document.querySelector ('.tenmoneta');
imgTen.onclick = function() {
    let srcTen = imgTen.getAttribute('src');
    if (srcTen === '../img/moneta.png'){
        imgTen.setAttribute('src', '../img/chervonets.png');
    }else {
        imgTen.setAttribute('src', '../img/moneta.png');
    }
}
const imgDol = document.querySelector ('.dollar');
imgDol.onclick = function() {
    let srcDol = imgDol.getAttribute('src');
    if (srcDol === '../img/доллар.png'){
        imgDol.setAttribute('src', '../img/1-Dollar.png');
    }else {
        imgDol.setAttribute('src', '../img/доллар.png');
    }
}
const imgRus = document.querySelector ('.mon-russia');
imgRus.onclick = function() {
    let srcRus = imgRus.getAttribute('src');
    if (srcRus === '../img/10-rubl-r23.png'){
        imgRus.setAttribute('src', '../img/10rub.png');
    }else {
        imgRus.setAttribute('src', '../img/10-rubl-r23.png');
    }
}
const imgAlb = document.querySelector ('.album');
imgAlb.onclick = function() {
    let srcAlb = imgAlb.getAttribute('src');
    if (srcAlb === '../img/альбом.png'){
        imgAlb.setAttribute('src', '../img/albom.png');
    }else {
        imgAlb.setAttribute('src', '../img/альбом.png');
    }
}
const imgAks = document.querySelector ('.akses');
imgAks.onclick = function() {
    let srcAks = imgAks.getAttribute('src');
    if (srcAks === '../img/холдер.png'){
        imgAks.setAttribute('src', '../img/zashchitnye.png');
    }else {
        imgAks.setAttribute('src', '../img/холдер.png');
    }
}
const imgCol = document.querySelector ('.collection');
imgCol.onclick = function() {
    let srcCol = imgCol.getAttribute('src');
    if (srcCol === '../img/Mult.png'){
        imgCol.setAttribute('src', '../img/znaki_zod.png');
    }else {
        imgCol.setAttribute('src', '../img/Mult.png');
    }
}

const titleText = document.querySelector('.h1');
titleText.onclick = function(){
    titleText.textContent = 'Рады Вас видеть на нашем сайте!';
}

const visibleP = document.querySelector('.timework-p');
const btnInfo = document.querySelector('.timeworkbtn');
btnInfo.onclick = function(){
    visibleP.classList.toggle('timework-p');
}

textInfo();
function textInfo(){
    setTimeout(one, 100);
    setTimeout(two, 3000);
    setTimeout(three, 6000);
}
function one(){
    document.querySelector('.welcome-js').innerHTML = 'Мы будем рады видеть Вас';
}
function two(){
    document.querySelector('.welcome-js').innerHTML = 'в числе постоянных клиентов';
}
function three(){
    document.querySelector('.welcome-js').innerHTML = 'нашего нумизматического магазина!';
}
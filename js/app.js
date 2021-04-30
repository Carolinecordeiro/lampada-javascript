const btnOn= document.getElementById('btnOn');
const btnOff= document.getElementById('btnOff');
const lamp= document.getElementById('lamp');

function lampOn () {
    lamp.src = './img/ligada.jpg';
}

btnOn.addEventListener( 'click', lampOn)
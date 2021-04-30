const btnOn= document.getElementById('btnOn');
const btnOff= document.getElementById('btnOff');
const lamp= document.getElementById('lamp');
const restartLamp= document.querySelector('.restartLamp')

function lampIsBroken (){
    return lamp.src.indexOf('quebrada') > -1
}

function lampOn () {
    if ( !lampIsBroken ()) { 
    lamp.src = './img/ligada.jpg';
    }
}
function lampOff () {
    if ( !lampIsBroken () ) {
    lamp.src = './img/desligada.jpg';
    }
}

function lampBroken(){
    lamp.src= './img/quebrada.jpg';
    btnOn.style.background= 'lightgray'
    btnOff.style.background='lightgray'
    restartLamp.innerHTML =
     `<p> <strong>A lampada quebrou! </strong></p>
     <p> <strong>Reinicie a página para continuar.</strong></p>`
    restartLamp.style.color= `gray`
}
btnOn.addEventListener( 'click', lampOn)

btnOff.addEventListener ('click', lampOff)

lamp.addEventListener('mouseover', lampOn)
lamp.addEventListener('mouseleave', lampOff)
lamp.addEventListener('dblclick', lampBroken)


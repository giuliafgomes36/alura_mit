
const listaDeTeclas = document.querySelectorAll('.tecla');

for (let contador = 0; contador < listaDeTeclas.length; contador++) {
    let tecla = listaDeTeclas[contador];
    let instrumento = tecla.classList[1]; 

    //template string
    tecla.onclick = function () { tocaSom(`#som_${instrumento}`) };

    tecla.onkeydown = function (evento) { selecionaTecla(evento, tecla); }

    tecla.onkeyup = function (evento) { desselecionaTecla(evento, tecla); }

}

function tocaSom (idElementoAudio) {
   const elemento =  document.querySelector(idElementoAudio);

   console.log(elemento.localName)
   
   if (elemento && elemento.localName === 'audio') {
    elemento.play();
   } 
   else {
    alert('Elemento não encontrado');
   }
}

function selecionaTecla (evento, tecla) {
    if (evento.code === "Enter" || evento.code === "Space") {
        tecla.classList.add('ativa');
    }
}

function desselecionaTecla (evento, tecla) {
    if (evento.code === "Enter" || evento.code === "Space") {
        tecla.classList.remove('ativa');
    }
}

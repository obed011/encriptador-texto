

let matrizEncriptador = [["e", "enter"], ["i", "imes"], ["a", "ain"], ["o", "ober"], ["u", "ufat"]];
function encriptar() {
    let cadenaEncriptar = document.querySelector(".texto").value;
    let mensaje = document.querySelector(".imprimir-texto");
    cadenaEncriptar = cadenaEncriptar.toLowerCase();
    if (cadenaEncriptar == "") {
        mensaje.innerHTML = `<div class="centrar">
       <img class="imagen-encriptador" src="Imagenes/Muñeco.png" alt="Imagen del encriptador">
       <h1>Ningun mensaje fue encontrado</h1>
       <h2>Ingresa el texto que deseas encriptar o desencriptar</h2> 
   </div>`
    }
    else {
        for (let i = 0; i < matrizEncriptador.length; i++) {
            if (cadenaEncriptar.includes(matrizEncriptador[i][0])) {
                cadenaEncriptar = cadenaEncriptar.replaceAll(matrizEncriptador[i][0], matrizEncriptador[i][1]);
            }
        }
        mensaje.innerHTML = `<p>${cadenaEncriptar}</p>
        <button class="copiar">Copiar</button>`;
        document.querySelector(".texto").value = "";
    }
}
function desencriptar() {
    let cadenaEncriptar = document.querySelector(".texto").value;
    let mensaje = document.querySelector(".imprimir-texto");
    cadenaEncriptar = cadenaEncriptar.toLowerCase();
    if (cadenaEncriptar == "") {
        mensaje.innerHTML = `<div class="centrar">
       <img class="imagen-encriptador" src="Imagenes/Muñeco.png" alt="Imagen del encriptador">
       <h1>Ningun mensaje fue encontrado</h1>
       <h2>Ingresa el texto que deseas encriptar o desencriptar</h2> 
   </div>`
    }
    else {
        for (let i = 0; i < matrizEncriptador.length; i++) {
            if (cadenaEncriptar.includes(matrizEncriptador[i][1])) {
                cadenaEncriptar = cadenaEncriptar.replaceAll(matrizEncriptador[i][1], matrizEncriptador[i][0]);
            }
        }
        mensaje.innerHTML = `<p>${cadenaEncriptar}</p>
        <button class="copiar">Copiar</button>`;
        document.querySelector(".texto").value = "";
    }
}
function copiar() {
    let copiarTexto = document.querySelect("#texto-encriptado");
    copiarTexto.select();
    document.execCommand('copy');
}

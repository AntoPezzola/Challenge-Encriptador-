function encriptar() {
    var texto = document.getElementById("textoEncriptado").value.toLowerCase();
    var txtCifrado = texto.replace(/e/igm, "enter");
    var txtCifrado = txtCifrado.replace(/o/igm, "ober");
    var txtCifrado = txtCifrado.replace(/i/igm, "imes");
    var txtCifrado = txtCifrado.replace(/a/igm, "ai");
    var txtCifrado = txtCifrado.replace(/u/igm, "ufat");

   document.getElementById("textoDesencriptado").innerHTML = txtCifrado; 
   document.getElementById("imagen-muñeco").style.display = "none"; 
   document.getElementById("texto-resultado").style.display = "none"; 

   document.getElementById("textoBase").style.display = "none"; 
   document.getElementById("botonCopiar").style.display = "show"; 
   document.getElementById("botonCopiar").style.display = "inherit";

   document.getElementById("textoDesencriptado").style.display = "show"; 
   document.getElementById("textoDesencriptado").style.display = "inherit"
}

function desencriptar() {
    var texto = document.getElementById("textoEncriptado").value.toLowerCase();

    var txtCifrado = texto.replace(/enter/igm, "e");
    var txtCifrado = txtCifrado.replace(/ober/igm , "o");
    var txtCifrado = txtCifrado.replace(/imes/igm, "i");
    var txtCifrado = txtCifrado.replace(/ai/igm, "a");
    var txtCifrado = txtCifrado.replace(/ufat/igm, "u");

   document.getElementById("textoDesencriptado").innerHTML = txtCifrado; 
   document.getElementById("imagen-muñeco").style.display = "none"; 
   document.getElementById("texto-resultado").style.display = "none"; 
   document.getElementById("textoBase").style.display = "none"; 
   document.getElementById("botonCopiar").style.display = "show"; 
   document.getElementById("botonCopiar").style.display = "inherit";

   document.getElementById("textoDesencriptado").style.display = "show"; 
   document.getElementById("textoDesencriptado").style.display = "inherit"

}

function copiar() {
    var contenido = document.querySelector("#textoDesencriptado");
    contenido.select();
    document.execCommand("copy"); 
    alert("se copio"); 
}

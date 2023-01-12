<!DOCTYPE html>

<head>
    <meta charset="UTF-8">
    <title>Encriptador</title>
    <link rel="stylesheet" href="reset.css">
    <link rel="stylesheet" href="style.css"> 
    <script src="https://kit.fontawesome.com/208cbd6b11.js" crossorigin="anonymous"></script>
    <script type="text/javascript" src="script.js"> </script>
</head>

<body class="container"> 
    <header>
        <img src="img/Vector.png" alt="imagenLogo" id="imagenLogo">
    </header>

    <div class="containerEncrip">
        <ul class="area-paraUsuario">
            <li class="area-usuario">
                <textarea name="texto" id="textoEncriptado" cols="20" rows="20" placeholder="Ingrese el texto aqui"></textarea>
            </li>
            <li class="area-resultado">
                <img src="img/Muñeco.png" alt="muñeco" id="imagen-muñeco"> 
                <h2 id="texto-resultado">Ningun mensaje fue encontrado</h2>
                <textarea name="resutaldo" id="textoDesencriptado" cols="20" rows="20"></textarea>  
                <p id="textoBase">Ingresa el texto que desees encriptar o desencriptar</p>
                <button type="button" id="botonCopiar" onclick="copiar()"> Copiar</button> 
            </li>
            <div class="adverencia">
                <i class="fa-solid fa-triangle-exclamation"></i>
                <p>Solo letras minúsculas y sin acentos</p>
            </div>
        </ul>
        <div class="botones">
            <button type="button" id="botonEncriptador" onclick="encriptar()" > Encriptar </button>
            <button type="button" id="botonDesencriptador" onclick="desencriptar()"> Desencriptar</button> 
        </div>
    </div>
    

</body>

<footer>
      <ul class="footerPie">
        <li> 
           <p class="copyright">Antonella Pezzola 2023</p>
        </li>
        <div class="iconos">  
            <li>
            <a id="imagenGitHub" href="https://github.com/AntoPezzola"><i class="fa-brands fa-github" style="color:#0a3871; font-size: 25px;"></i></a> 
            </li>
            <li>
            <a id="imagenLinkde" href="https://www.linkedin.com/in/antonella-pezzola/"><i class="fa-brands fa-linkedin" style="color:#0a3871; font-size: 25px;"></i></a>
            </li>
        </div>
      </ul>
</footer>

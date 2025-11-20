let recuperoStorage= localStorage.getItem("userName")
if (recuperoStorage.length >= 1){
    let usuarioRecuperado = JSON.parse(recuperoStorage)
    let usuarioHeader = document.querySelector(".Usuario_header")
    let headerlog = `<li class="Log_in_header">
                    <p class="Usuario_1_header">BIENVENIDO: ${usuarioRecuperado}</p>"
                    </li>
                    <li class="Registro_header">
                    <a class="Usuario_1_header" href="#" id="logoutLink">LOG OUT</a>
                    </li>`;
    usuarioHeader.innerHTML = headerlog
    let header_menu = document.querySelector(".Menu_header")
    header_menu.style.margin = "0px 10px 0px 0px"
    header_menu.style.width = "790px"
    usuarioHeader.style.margin = "20px 10px 0px 0px"
    usuarioHeader.style.width = "245px"
    let logoutLink = document.querySelector("#logoutLink")
    logoutLink.addEventListener('click', function (e){
        e.preventDefault();
        alert("Cerraste sesion")
        localStorage.removeItem("userName");
        let headerOriginal = `<li class="Log_in_header">
                            <a class="Usuario_1_header" href="./login.html">LOGIN</a>
                            </li>
                            <li class="Registro_header">
                            <a class="Usuario_1_header" href="./registro.html">REGISTRO</a>
                            </li>`;
    usuarioHeader.innerHTML = headerOriginal
    usuarioHeader.style.margin = "auto"
    usuarioHeader.style.width = "198.35px"
    usuarioHeader.style.height = "48.5px"
    });
}
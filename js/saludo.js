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
    usuarioHeader.innerHTML=headerlog
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
    });
}
if (recuperoStorage.length >= 1){
    let logoutLink = document.querySelector("#logoutLink")
    logoutLink.addEventListener('click', function (e){
        e.preventDefault();
        localStorage.removeItem("userName");
        let usuarioHeader = document.querySelector(".Usuario_header")

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
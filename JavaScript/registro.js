// validacion del formulario
function validacion() {
    if (document.Formu.Usuario.value=="") {
        document.getElementById("resultado").innerHTML="Ingresa un Usuario*";
        return false;
    }else if (document.Formu.Usuario.value.length<6) {
        document.getElementById("resultado").innerHTML="Minimo 6 caracteres*";
        return false;
    }else if (document.Formu.Email.value=="") {
        document.getElementById("resultado").innerHTML="Ingresa un Mail*";
        return false;
    }else if (document.Formu.Contraseña.value=="") {
        document.getElementById("resultado").innerHTML="Ingresa una Contraseña*";
        return false;
    }else if (document.Formu.Contraseña.value.length<6) {
        document.getElementById("resultado").innerHTML="Contraseña de 6 Caracteres*";
        return false;
    }else if (document.Formu.Rcontraseña.value=="") {
        document.getElementById("resultado").innerHTML="Repite la Contraseña*";
        return false;
    }else if (document.Formu.Rcontraseña.value !== document.Formu.Contraseña.value) {
        document.getElementById("resultado").innerHTML="Las Contraseñas no Coinciden*";
        return false;
    }else if (document.Formu.Nombre.value=="") {
        document.getElementById("resultado").innerHTML="Ingresa tu Nombre*";
        return false;
    }else if (document.Formu.Apellido.value=="") {
        document.getElementById("resultado").innerHTML="Ingresa tu Apellido*";
        return false;
    }
}
// visualizar contraseñas
const pass = document.getElementById("pass");
const icon = document.querySelector(".cont");

icon.addEventListener("click", e=> {
    if (pass.type === "password") {
        pass.type = "text";
        icon.classList.remove("bx-show-alt")
        icon.classList.add("bx-hide")
    }else {
        pass.type = "password";
        icon.classList.add("bx-show-alt")
        icon.classList.remove("bx-hide")
    }
})

// visualizar repite contraseñas
const pass2 = document.getElementById("rpass");
const icon2 = document.querySelector(".rcont");

icon2.addEventListener("click", e=> {
    if (pass2.type === "password") {
        pass2.type = "text";
        icon2.classList.remove("bx-show-alt")
        icon2.classList.add("bx-hide")
    }else {
        pass2.type = "password";
        icon2.classList.add("bx-show-alt")
        icon2.classList.remove("bx-hide")
    }
})


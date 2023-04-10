function validarForm(){
    const formControl =  document.getElementsByClassName("form-control");
    let usuario=formControl[0];
    let correo=formControl[1];
    let mj=formControl[2];
    let texto="";

    if (usuario.value == "") {
        usuario.style.border = '1px solid red';
        texto = texto + " -Nombre de usuario";
    }
    else
    {
        usuario.style.border = "none";
    }

    if (correo.value == "") {
        correo.style.border = '1px solid red';
        texto = texto + " -Correo";
    }
    else
    {
        correo.style.border = "none";
    }    

    if (mj.value == "") {
        mj.style.border = '1px solid red';
        texto = texto + " -Mensaje";
    }
    else
    {
        mj.style.border = "none";
    }  

    if (texto != "")
    {
        const textoCreado = document.getElementById("textForm");
        textoCreado.innerHTML = "Debe llenar los siguientes campos: "+texto;
        alert("Debe llenar los siguientes campos: "+texto);
    }

}

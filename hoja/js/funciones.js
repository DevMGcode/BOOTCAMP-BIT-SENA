function registro_user() {
    var expresion_correo = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i
    var expresion_numeros = /^([0-9])*$/
        // console.log(expresion_correo.test("meli@correo.com"))
    let nombre = document.getElementById("nombre_user").value
    let apellido = document.getElementById("apellido_user").value
    let correo = document.getElementById("correo_user").value
    let documento = document.getElementById("documento_user").value
    let direccion = document.getElementById("direccion_user").value
    let telefono = document.getElementById("tel_user").value
    let ciudad = document.getElementById("ciudad_user").value
    let departamento = document.getElementById("depart_user").value
    let contraseña = document.getElementById("contraseña_user").value
        // let tyc = document.getElementById("tyc_user")
    console.log(nombre + "  " + apellido + "  " + correo + "  " + documento+ "  " +direccion+ "  " +telefono+ "  " +ciudad+ "  " +departamento+ "  " +contraseña)

    if (nombre == "" || nombre == null || nombre == "undefined") {
        error_validacion("nombre", nombre)
    }

    if (apellido == "" || apellido == null || apellido == "undefined") {
        error_validacion("apellido", apellido)
    }

    //EVALUACION TERNARIA   --->   condicion ? se cumple : no cumple
    expresion_numeros.test(documento) ? "" : error_validacion("documento", documento)
    expresion_correo.test(correo) ? "" : error_validacion("correo", correo)
    expresion_correo.test(direccion) ? "" : error_validacion("direccion", direccion)
    expresion_correo.test(telefono) ? "" : error_validacion("telefono", telefono)
    expresion_correo.test(ciudad) ? "" : error_validacion("ciudad", ciudad)
    expresion_correo.test(departamento) ? "" : error_validacion("departamento", departamento)
    expresion_correo.test(contraseña) ? "" : error_validacion("contraseña", contraseña)


    localStorage.setItem("nombre", nombre)
    localStorage.setItem("apellido", apellido)
    localStorage.setItem("correo", correo)
    localStorage.setItem("documento", documento)
    localStorage.setItem("direccion", direccion)
    localStorage.setItem("telefono", telefono)
    localStorage.setItem("ciudad", ciudad)
    localStorage.setItem("departamento", departamento)
    localStorage.setItem("contraseña", contraseña)


    Swal.fire({
        icon: 'success',
        title: 'Registro correcto',
    })
}

function error_validacion(campo, texto) {
    Swal.fire({
        icon: 'error',
        title: 'Dato invalido',
        text: `El campo ${campo} con el valor ${texto} no es valido para el formulario de registro`,
    })
}
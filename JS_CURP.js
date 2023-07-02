
    let nombre = document.getElementById("txtNombre").value;
    let apellidoP = document.getElementById("txtApellidoP").value;
    let apellidoM = document.getElementById("txtApellidoM").value;
    let fechaNac = document.getElementById("txtFechaNac").value;
    let genero = document.getElementsByName("genero");
    let estado = document.getElementById("txtEstado").value;
    let generoSelected = 0;
    for (let i; i < genero.length; i++) {
        if (genero[i].checked) {
            generoSelected = i;
            break;
        }
    }
    let valor1;
    let valor2;
    let valor3;
    let valor4;
    let valor5;
    let valor6;
    let valor7;
    let valor8;
    let valor9;
    let valor10;
    let valor11;
    let valor12;
    let valor13;
    let valor14;
    
    function primeraLetraApellidoP(){
    // Valores sacado de la primera letra del primer apellido.
        valor1 = apellidoP.substr(0, 1);
        if (valor1 === "ñ" || valor1 === "Ñ"){
            valor1 = "X";}
        return valor1;
    }
    
    function primeraVocalApellidoP() { 
    // Valor sacado de la primera vocal de del primer apellido.
        let pruebaV2 = apellidoP.split("");
        for (let i = 0; i < apellidoP.length; i++) {
            if (pruebaV2[i] === "a" || pruebaV2[i] === "e" || pruebaV2[i] === "i" || pruebaV2[i] === "o" || pruebaV2[i] === "u") {
                valor2 = pruebaV2[i];
                break;
            }
        }
        return valor2;
    }
    
    function primeraLetraApellidoM(){
    // Valor sacado de la primera letra del segundo apellido.
        if (apellidoM === null) {
            valor3 = "x";
        } else {
            valor3 = apellidoM.substr(0, 1);
        }
        if (valor3 === "ñ" || valor3 === "Ñ"){
            valor3 = "X";}
        return valor3;
    }
    
    function primeraLetraNombre(){
    // Valor sacado de la primera letra del primer o segundo nombre (depende el caso).
        let nombreArray = nombre.split(" ");
        if (nombreArray[0] === "José" || nombreArray[0] === "Jose" || nombreArray[0] === "josé" || nombreArray[0] === "jose" ||
                nombreArray[0] === "María" || nombreArray[0] === "Maria" || nombreArray[0] === "maría" || nombreArray[0] === "maria") {
            if (nombreArray[1] === null) {
                valor4 = "x";
            } else {
                valor4 = nombreArray[1].substr(0, 1);
            }
        } else {
            valor4 = nombreArray[0].substr(0, 1);
        }
        if (valor4 === "ñ" || valor4 === "Ñ"){
            valor4 = "X";}
        return valor4;
    }
    
    function valoresFecha() {
    //Los 6 valores sacados de la fecha    
        valor5 = fechaNac.substr(2, 2);
        valor6 = fechaNac.substr(5, 2);
        valor7 = fechaNac.substr(8, 2);
        let valores567 = valor5 + valor6 + valor7;
        return valores567;
    }

    function valorGenero() {
    // Valor sacado del género seleccionado.
        valor8 = genero[generoSelected].value;
        return valor8;
    }
    
    function valorEstado() {
    //Valor sacado del estado de nacimiento. 
        valor9 = estado;
        return valor9;
    }
    
    function primerConsonanteApellidoP() {
    // Valor sacado de la primera consonante interna del primer apellido.
        let pruebaV10 = apellidoP.split("");
        for (let i=1; i < apellidoP.length; i++) {
            if (!(/[aeiou]/.test(pruebaV10[i]))) {
               valor10 = pruebaV10[i];
        break;
            }else {
                valor10 = "X";
            }
        }
        if (valor1 === "ñ" || valor10 === "Ñ"){
            valor10 = "X";}
        return valor10;
    }
    
    function primeraConsonanteApellidoM() {
   // Valor sacado de la primera consonante interna del segundo apellido.
        let pruebaV11 = apellidoM.split("");
        for (let i=1; i < apellidoM.length; i++) {
            if (!(/[aeiou]/.test(pruebaV11[i]))) {
                valor11 = pruebaV11[i];
            break;
            }else {
                valor11 = "X";
            }
        }
        if (valor11 === "ñ" || valor11 === "Ñ"){
            valor11 = "X";}
        return valor11;
    }
    
    function primerConsonanteNombre() {
    // Valor sacado de la primera consonante interna del primer nombre.
        let pruebaV12 = nombre.split("");
        for (let i=1; i < nombre.length; i++) {
            if (!(/[aeiou]/.test(pruebaV12[i]))) {
               valor12 = pruebaV12[i];
            break;
            }else {
               valor12 = "X";
            }
        }
        if (valor12 === "ñ" || valor12 === "Ñ"){
            valor12 = "X";}
        return valor12;
    }
    
    function valorAleatorioUno() {
    // Valor obtenido de manera aleatoria. 
        let caracteresV13 = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ';
        let indiceV13 = Math.floor(Math.random()*caracteresV13.length);
        valor13 = caracteresV13.charAt(indiceV13);
        return valor13;
    }
    
    function valorAleatorioDos() {
    // Valor obtenido de manera aleatroia.
        let caracteresV14 = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ';
        let indiceV14 = Math.floor(Math.random()*caracteresV14.length);
        valor14 = caracteresV14.charAt(indiceV14);
        return valor14;
    }    

    // Calculo final de la curp completa.
    function calcularCURP() {
        let CURP = "";
        CURP = primeraLetraApellidoP() + primeraVocalApellidoP() + primeraLetraApellidoM() + 
            primeraLetraNombre()+ valoresFecha() + valorGenero() + valorEstado() +
            primerConsonanteApellidoP() + primeraConsonanteApellidoM() + primerConsonanteNombre() +
            valorAleatorioUno() + valorAleatorioDos();
        
        CURP = CURP.normalize();
        CURP = CURP.toUpperCase();
        document.getElementById("txtCURP").innerHTML=CURP;
        console.log(CURP);

}
/* 
 let texto = "";
 for (let i = 0; i < personas.length; i++) {
 texto += "Nombre: " + personas[i].name;
 }
 */



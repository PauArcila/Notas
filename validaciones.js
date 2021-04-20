//let notas = [];
var n1, n2, n3, n4, ex;


function calculaPromedio() {
    n1 = parseFloat(document.getElementById("nota1").value);
    n2 = parseFloat(document.getElementById("nota2").value);
    n3 = parseFloat(document.getElementById("nota3").value);
    n4 = parseFloat(document.getElementById("nota4").value);
    ex = parseFloat(document.getElementById("notaEx").value);
    console.log("n1", n1);  console.log("n2", typeof(n2)); console.log("n3", n3); console.log("n4", n4); console.log("ex", ex);
    pond = (((n1 + n2 + n3 + n4)/4)*0.6) + (ex * 0.4);
    console.log("pond", pond);
    return pond;
}

function validaNumeros(){
    n1 = parseFloat(document.getElementById("nota1").value);
    n2 = parseFloat(document.getElementById("nota2").value);
    n3 = parseFloat(document.getElementById("nota3").value);
    n4 = parseFloat(document.getElementById("nota4").value);
    ex = parseFloat(document.getElementById("notaEx").value);
    //console.log("n1", n1);  console.log("n2", typeof(n2)); console.log("n3", n3); console.log("n4", n4); console.log("ex", ex);

    if (isNaN(n1) || (n1 < 1) || (n1 > 7)){
       document.getElementById("alert").style.visibility = 'visible';
        document.getElementById("msj").innerText = "Verifique el valor ingresado en Nota 1";
        //alert("La nota 1 ingresada no es válida");
        console.log("Ingrese nota 1 valida");
    }
    else if (isNaN(n2) || (n2 < 1) || (n2 > 7)){
        document.getElementById("alert").style.visibility = 'visible';
         document.getElementById("msj").innerText = "Verifique el valor ingresado en Nota 2";
         //alert("La nota 2 ingresada no es válida");
         console.log("Ingrese nota 2 valida");
     }
    else if (isNaN(n3) || (n3 < 1) || (n3 > 7)){
        document.getElementById("alert").style.visibility = 'visible';
         document.getElementById("msj").innerText = "Verifique el valor ingresado en Nota 3";
         //alert("La nota 3 ingresada no es válida");
         console.log("Ingrese nota 3 valida");
     }
     else if (isNaN(n4) || (n4 < 1) || (n4 > 7)){
        document.getElementById("alert").style.visibility = 'visible';
         document.getElementById("msj").innerText = "Verifique el valor ingresado en Nota 4";
         //alert("La nota 4 ingresada no es válida");
         console.log("Ingrese nota 4 valida");
     }

     else {//notas ingresadas bien
        if (calculaPromedio()>=4 && calculaPromedio()<=7){
            document.getElementById("alert").style.visibility = 'visible';
            document.getElementById("msj").innerText = "Aprobado con nota: " +calculaPromedio();
            console.log(calculaPromedio());
        }
        else {
            document.getElementById("alert").style.visibility = 'visible';
            document.getElementById("msj").innerText = "Reprobado con nota: " +calculaPromedio();
            console.log(calculaPromedio());
        }
        
     }

     

}
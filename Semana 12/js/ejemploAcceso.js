function calcular(){
    //extraemos los elementos de DOM
    let numero1 = document.getElementById("numero1").value;
    let resultado = document.getElementById("resultado");

    //enviamos informacion al DOM
    resultado.innerHTML="";

    //convierto a entero
    numero1 = parseInt(numero1);

    //crear e inicializar variables auxiliares
    let contador = 1;
    let multiplicar = 0;
    let mostrar ="";

    while(contador<=10){
        multiplicar = contador * numero1;
        mostrar = contador + " x " + numero1 + " = " + multiplicar + "<br/>"
        resultado.innerHTML += mostrar;
        contador ++;
    }
}
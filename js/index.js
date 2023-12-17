// document.getElementById("texto").innerHTML = "Meu primeiro texto <b>JS</b>!";

let x = 10; //aqui é 10

{

    let x = 2; // arqui é 2

    document.getElementById("texto").innerHTML = x;
}

// aqui fora do bloco irá pegar o valor de fora também que é 10.
//document.getElementById("texto").innerHTML = x;
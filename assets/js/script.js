//Instrucciones Desafio
// 1-.Solicitar al usuario las veces que desea que se repita el juego
//consecutivamente, es decir,
// cuántas veces deberá jugar contra la computadora. Por cada juego, se debe
// mostrar el resultado inmediatamente y luego pedir nuevamente una respuesta
// dependiendo de las veces que haya indicado el usuario que desea jugar.

// 2-.Solicitar al usuario que indique su jugada.

// 3-.Generar una jugada automática para la máquina usando 
// la función Math.random() de Javascript.

// 4-.Definir a un ganador considerando la jugada del usuario y
//la generada automáticamente para la máquina.

// 5-.Indicar el resultado de la partida dependiendo del caso

//Datos de entrada
// Variable para saber cuantas veces quiere jugar el usuario
let num_jugadas = Number(prompt("Indique cuantas veces quiere jugar mediante un numero: "));

// Variable que nos servira como acumulador para saber los resultados del usuario
// y mostrarlo en el html.
let historial_resultados = "";

// Creacion de la funcion que nos permite calcular la jugada random del computador.
function jugada_computador() {
    let num_random = Math.floor(Math.random() * 3);
    // En esa parte damos las instrucciones para que segun un numero random
    // de 0 a 2, se le asigne la palabra indicada.
    let computador = "";
    if (num_random === 0) {
        computador = "Piedra";
    } else if (num_random === 1) {
        computador = "Papel";
    } else {
        computador = "Tijera";
    }
    // Retornamos el valor del computador.
    return computador; 
}

//Proceso de datos
// Creamos un ciclo for para lograr que el usuario juegue las veces 
// que nos indico mediante el prompt.
for (let i = 0; i < num_jugadas; i++) {
    // Llamamos la función para obtener la jugada del computador.
    let computador = jugada_computador(); 

    // Aqui le pedimos al usuario que ingrese su jugada y hacemos la logica
    // para comparar lo que ingreso el usuario contra lo que jugo el computador
    // de manera random, y asi obtener quien gano y quien perdio o, si hubo un empate.
    let respuesta = prompt("Ingresa: Piedra, Papel o Tijera");
    if (respuesta === "Piedra" || respuesta === "Papel" || respuesta === "Tijera") {
        let resultado = "";
        switch (true) {
            case respuesta === computador:
                resultado = "Empate! ";
                break;
            case respuesta === "Piedra" && computador === "Tijera":
            case respuesta === "Papel" && computador === "Piedra":
            case respuesta === "Tijera" && computador === "Papel":
                resultado = "Ganaste! :D";
                break;
            default:
                resultado = "Perdiste! :( ";
                break;
        }
        //En esta parte, enviamos el mensaje mediante un alert que nos indica los resultados
        //por vez en cada jugada mediante concatenacion.
        alert("Tu jugada: " + respuesta + "\nJugada del computador: " + computador + "\nResultado: " + resultado);
        //Aqui comenzamos a utilizar nuestro acumulador para obtener posteriormente
        //las jugadas del usuario.
        historial_resultados = historial_resultados + resultado + "<br>";
    } else {
        //Este alert aparece si el usuario no ingresa bien las palabras: Piedra, Papel o Tijera
        alert("Palabra no reconocida, intenta nuevamente recargando la pagina!");
    }
}

//Salida de datos
//Mediante el id=jugadas, logramos que se muestre en el html la variable num_jugadas
//que nos indico el usuario en un comienzo.
document.getElementById("jugadas").innerHTML = num_jugadas;

//Mediante el id=historial_resultados, logramos que se muestre en el html la variable
// historial_resultados que es el acumulador que nos sirve para saber si el usuario gano,
//perdio o empato segun corresponda en cada juego.
document.getElementById("historial_resultados").innerHTML = historial_resultados;

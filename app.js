//pedir cantidad de veces que se repetirá el juego
const movesPlay = prompt("¿Hola retador, cuantas veces quieres jugar?");
const movesPlayQty = Number.parseInt(movesPlay);
  
console.log(`El usuario quiere que el juego se repita ${movesPlayQty} veces`);
  
for (let counter = 1; counter <= movesPlayQty; counter = counter + 1) {
  //pedir jugada usuario
  const userMove = prompt("Ingresa tu mejor jugada: Piedra, Papel o Tijera");
  
  const randomMoveIndex = Math.floor(Math.random() * (4 - 1)) + 1;
  // Asignamos valor Piedra, Papel o Tijera a valor index;
  let machineMove = "";
  
  if (randomMoveIndex === 1) {
    machineMove = "Piedra";
  } else if (randomMoveIndex === 2) {
    machineMove = "Papel";
  } else if (randomMoveIndex === 3) {
    machineMove = "Tijera";
  } else {
    console.error(`La opción randomMoveIndex no es valida: ${randomMoveIndex}`);
  }
  
  // Definimos ganadores 
  let winner = "";
  
  if (machineMove === "Piedra") {
    if (userMove === "Papel") {
      winner = "Usuario";
    } else if (userMove === "Tijera") {
      winner = "Maquina";
    } else {
      winner = "Empate";
    }
    } else if (machineMove === "Papel") {
      if (userMove === "Tijera") {
        winner = "Usuario";
      } else if (userMove === "Piedra") {
        winner = "Maquina";
      } else {
        winner = "Empate";
      }
    } else if (machineMove === "Tijera") {
      if (userMove === "Piedra") {
        winner = "Usuario";
      } else if (userMove === "Papel") {
        winner = "Maquina";
      } else {
        winner = "Empate";
      }
    } else {
      winner = "Deconocido";
    }
  
  // Mostramos resultado
  console.log({ userMove, machineMove });
  console.log(`El ganador es: ${winner}`);
  if (winner === "Usuario" ) {
  console.log("Felicitaciones has Ganado :)");
  } else if (winner === "Maquina") {
  console.log("Lo siento, has perdido contra la maquina");
  } else {
  console.log("Empate, vuelve a intentarlo");
}
  }

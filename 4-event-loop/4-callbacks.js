
console.log("Inicio");

// Función asíncrona simulada con setTimeout 
// Como si fuera una consulta a una BD
function getUserData(id, callback) {
  setTimeout(() => {
    console.log(`Datos obtenidos para el usuario ${id}`);
    callback({ id, name: "Alice", age: 25 });
  }, 2000);
}

// Callback que maneja los datos recibidos
function processUserData(user) {
  console.log(`Procesando usuario: ${user.name}, edad: ${user.age}`);
}

// Llamamos a la función asíncrona
getUserData(1, processUserData); //"dona'm l'usuari 1 i quan el tinguis, processa'l amb processUserData"
//Problema: no es poden fer callbacks infinites perquè es poden anar acumulant i es pot arribar a un callback hell
//Callback hell: quan hi ha molts callbacks anidats i es fa difícil de llegir i mantenir (mirar exemple 5)
//Alternatives: Promises (exemple 7)

console.log("Fin");

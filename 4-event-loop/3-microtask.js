// Call Stack 

function first() {
    console.log("First");
}
  
// Task Queue - MacroTask Queue 
function second() {
    setTimeout(() => { 
        console.log("Second")
    }, 0); 
}

// Job Queue - MicroTask Queue --> li promet q en el futur hi haurà una dada
// Microtask Queue s'executa abans que Macrotask Queue
function third() {
    Promise.resolve().then(() => {
        console.log("Third")
    }) 
}

forth = () => {
    console.log("Forth")
}

first(); // call stack
second(); // macrotask queue
third(); // microtask queue
forth(); // call stack


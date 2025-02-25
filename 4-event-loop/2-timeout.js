// Call Stack
console.log("Hello"); 

// Event Queue
setTimeout(() => { 
    console.log("Time")
}, 0); //"Executa'l a temps 0"

// Call Stack
console.log("World"); 

// Terminal: Hello, World, Time
//Encara q sigui "temps 0" s'executa després de World perquè s'executa en 2n pla i 
//el Call Stack està ocupat amb World
//Quan el Call Stack està buit, s'executen els events de la Event Queue
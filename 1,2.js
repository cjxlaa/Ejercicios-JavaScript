// ----------------------------------------------------
// 1. TIPOS PRIMITIVOS (Paso/copia por valor)
// ----------------------------------------------------
let valorA = 50;
let valorB = valorA; // Se crea una copia independiente del valor

console.log("=== PRIMITIVOS (POR VALOR) ===");
// CORRECCIÓN: Se añadieron las comillas invertidas (`)
console.log(`Inicial -> valorA: ${valorA}, valorB: ${valorB}`);

valorB = 100; // Modificar valorB NO afecta a valorA
// CORRECCIÓN: Se añadieron las comillas invertidas (`)
console.log(`Luego de cambiar valorB = 100 -> valorA: ${valorA}, valorB: ${valorB}`);


// ----------------------------------------------------
// 2. OBJETOS (Referencias y estado compartido en memoria)
// ----------------------------------------------------
let objetoA = { x: 10, y: 20, z: 30 };
let objetoB = objetoA; // Ambas variables apuntan a la MISMA dirección de memoria

console.log("\n=== OBJETOS (POR REFERENCIA) ===");
console.log("objetoA inicial:", objetoA);
console.log("objetoB inicial:", objetoB);

// Modificación de una propiedad interna
objetoB.x = 99; 
console.log("\n-> Después de modificar objetoB.x = 99:");
// Ambas variables reflejan el cambio porque comparten la misma instancia en memoria
console.log("objetoA (afectado por el estado compartido):", objetoA);
console.log("objetoB:", objetoB);

// ----------------------------------------------------
// 3. REASIGNACIÓN DE REFERENCIA
// ----------------------------------------------------
objetoB = { x: 0, y: 0, z: 0 }; // objetoB apunta ahora a una NUEVA dirección de memoria
console.log("\n-> Después de reasignar objetoB con 'new' u otro objeto literal:");
console.log("objetoA (mantiene la referencia original):", objetoA);
console.log("objetoB (apunta a la nueva dirección):", objetoB);
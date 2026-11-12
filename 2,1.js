class SensorPresion {
  // Atributo privado en JavaScript ES6+
  #valorPSI = 0;

  /**
   * @param {number} valorInicial - Presión inicial asignada al sensor
   */
  constructor(valorInicial = 0) {
    // Utiliza el setter implícito para validar el valor desde el momento de instanciación
    this.valorPSI = valorInicial;
  }

  // Métodos de acceso (Getter y Setter)
  get valorPSI() {
    return this.#valorPSI;
  }

  set valorPSI(nuevoValor) {
    if (typeof nuevoValor !== 'number' || Number.isNaN(nuevoValor)) {
      throw new TypeError('El valor de la presión debe ser un número válido.');
    }

    // Validación de invariantes: Rango permitido entre 0 y 200 PSI
    if (nuevoValor < 0 || nuevoValor > 200) {
      // CORRECCIÓN: Se añadieron las comillas invertidas (`)
      throw new RangeError(
        `Presión fuera de rango seguro (${nuevoValor} PSI). Debe estar entre 0 y 200 PSI.`
      );
    }

    this.#valorPSI = nuevoValor;
  }
}

// ----------------------------------------------------
// Demostración y manejo controlado de excepciones
// ----------------------------------------------------

const sensor = new SensorPresion(50);
// CORRECCIÓN: Se añadieron las comillas invertidas (`)
console.log(`Presión actual: ${sensor.valorPSI} PSI`); // 50 PSI

// Asignación válida dentro del rango
sensor.valorPSI = 120;
// CORRECCIÓN: Se añadieron las comillas invertidas (`)
console.log(`Presión actualizada: ${sensor.valorPSI} PSI`); // 120 PSI

// Intento de lectura/escritura directa del campo privado (retorna error sintáctico o undefined)
// console.log(sensor.#valorPSI); // Error de sintaxis: Private field '#valorPSI' must be declared in an enclosing class

// Prueba de validación con excepción para valor menor a 0
try {
  sensor.valorPSI = -15;
} catch (error) {
  // CORRECCIÓN: Se añadieron las comillas invertidas (`)
  console.error(`[Excepción Capturada]: ${error.message}`);
}

// Prueba de validación con excepción para valor mayor a 200
try {
  sensor.valorPSI = 250;
} catch (error) {
  // CORRECCIÓN: Se añadieron las comillas invertidas (`)
  console.error(`[Excepción Capturada]: ${error.message}`);
}
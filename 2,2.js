class CompuertaHidraulica {
  // Estado y temporizadores internos protegidos (privados)
  #estado = 'CERRADA'; // 'CERRADA', 'ABRIENDO', 'ABIERTA', 'CERRANDO'
  #tiempoAperturaMs = 2000; // Temporizador privado de apertura
  #tiempoCierreMs = 2000;   // Temporizador privado de cierre
  #idTemporizador = null;   // Referencia al setTimeout activo

  // Getter de solo lectura para consultar el estado
  get estado() {
    return this.#estado;
  }

  /**
   * Inicia el proceso de apertura de la compuerta.
   */
  abrir() {
    if (this.#estado === 'ABIERTA' || this.#estado === 'ABRIENDO') {
      // CORRECCIÓN: Se añadieron las comillas invertidas (`)
      console.log(`Operación ignorada: La compuerta ya está ${this.#estado.toLowerCase()}.`);
      return;
    }

    this.#limpiarTemporizador();
    this.#estado = 'ABRIENDO';
    console.log('Iniciando proceso de apertura...');

    // Proceso interno protegido gestionado por temporizador
    this.#idTemporizador = setTimeout(() => {
      this.#estado = 'ABIERTA';
      console.log('✓ Compuerta totalmente ABIERTA.');
    }, this.#tiempoAperturaMs);
  }

  /**
   * Inicia el proceso de cierre de la compuerta.
   */
  cerrar() {
    if (this.#estado === 'CERRADA' || this.#estado === 'CERRANDO') {
      // CORRECCIÓN: Se añadieron las comillas invertidas (`)
      console.log(`Operación ignorada: La compuerta ya está ${this.#estado.toLowerCase()}.`);
      return;
    }

    this.#limpiarTemporizador();
    this.#estado = 'CERRANDO';
    console.log('Iniciando proceso de cierre...');

    // Proceso interno protegido gestionado por temporizador
    this.#idTemporizador = setTimeout(() => {
      this.#estado = 'CERRADA';
      console.log('✓ Compuerta totalmente CERRADA.');
    }, this.#tiempoCierreMs);
  }

  // Método privado auxiliar no accesible desde fuera
  #limpiarTemporizador() {
    if (this.#idTemporizador) {
      clearTimeout(this.#idTemporizador);
      this.#idTemporizador = null;
    }
  }
}

// ----------------------------------------------------
// Demostración del comportamiento de caja negra
// ----------------------------------------------------

const compuerta = new CompuertaHidraulica();

// Interfaz pública permitida
// CORRECCIÓN: Se añadieron las comillas invertidas (`)
console.log(`Estado inicial: ${compuerta.estado}`); // CERRADA

compuerta.abrir(); // Inicia la secuencia interna de tiempo

// Un agente externo no puede modificar ni hackear los temporizadores internos:
// compuerta.#tiempoAperturaMs = 0; // SyntaxError: Private field '#tiempoAperturaMs' must be declared in an enclosing class
// compuerta.#estado = 'ABIERTA';   // SyntaxError: Private field '#estado' must be declared in an enclosing class

setTimeout(() => {
  compuerta.cerrar();
}, 3000);
// Ejercicio 4.2 · Desacoplamiento arquitectónico
// Despachador de eventos centralizado que recibe cualquier objeto que
// cumpla con el método actualizarEstado(), demostrando bajo acoplamiento
// (duck typing): el despachador no conoce ni le importa la clase concreta
// de los objetos que maneja, solo que cumplan el "contrato" esperado.

class DespachadorEventos {
  constructor() {
    this.suscriptores = [];
  }

  // Se acepta cualquier objeto con el método actualizarEstado(),
  // sin exigir que herede de una clase en particular.
  suscribir(objeto) {
    if (typeof objeto.actualizarEstado !== "function") {
      throw new Error(
        "El objeto no cumple el contrato requerido: falta actualizarEstado()"
      );
    }
    this.suscriptores.push(objeto);
  }

  despachar(evento, datos) {
    console.log(`\n>> Despachando evento "${evento}"`);
    for (const suscriptor of this.suscriptores) {
      suscriptor.actualizarEstado(evento, datos);
    }
  }
}

// --- Objetos de prueba: completamente distintos entre sí, sin relación
// de herencia alguna, unidos solo por implementar actualizarEstado() ---

class SensorTemperatura {
  constructor(id) {
    this.id = id;
  }

  actualizarEstado(evento, datos) {
    console.log(`[Sensor ${this.id}] Reaccionando a "${evento}":`, datos);
  }
}

class PanelControl {
  constructor(nombre) {
    this.nombre = nombre;
  }

  actualizarEstado(evento, datos) {
    console.log(`[Panel "${this.nombre}"] Actualizando interfaz por "${evento}"`, datos);
  }
}

// Objeto literal (ni siquiera es una clase) que también cumple el contrato
const registroLogs = {
  actualizarEstado(evento, datos) {
    console.log(`[Log] ${new Date().toISOString()} — ${evento}:`, datos);
  },
};

// --- Demostración ---
const despachador = new DespachadorEventos();
despachador.suscribir(new SensorTemperatura("S-01"));
despachador.suscribir(new PanelControl("Panel Principal"));
despachador.suscribir(registroLogs);

despachador.despachar("temperatura_critica", { valor: 38.5 });
despachador.despachar("conexion_perdida", { dispositivo: "CAM-01" });

module.exports = { DespachadorEventos };
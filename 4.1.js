class FiguraGeometrica {
  constructor(nombre) {
    this.nombre = nombre;
  }

  calcularArea() {
    throw new Error("calcularArea() debe ser implementado por la subclase");
  }

  dibujar() {
    // Cada figura decide cómo "renderizarse" y qué cálculo reportar,
    // sin que el código que itera necesite saber de qué tipo es.
    console.log(
      `Dibujando ${this.nombre} → área = ${this.calcularArea().toFixed(2)}`
    );
  }
}

class Circulo extends FiguraGeometrica {
  constructor(radio) {
    super("Círculo");
    this.radio = radio;
  }

  calcularArea() {
    return Math.PI * this.radio ** 2;
  }
}

class Rectangulo extends FiguraGeometrica {
  constructor(base, altura) {
    super("Rectángulo");
    this.base = base;
    this.altura = altura;
  }

  calcularArea() {
    return this.base * this.altura;
  }
}

class Triangulo extends FiguraGeometrica {
  constructor(base, altura) {
    super("Triángulo");
    this.base = base;
    this.altura = altura;
  }

  calcularArea() {
    return (this.base * this.altura) / 2;
  }
}

// --- Simulador de renderizado ---
const figuras = [
  new Circulo(5),
  new Rectangulo(4, 6),
  new Triangulo(8, 3),
  new Circulo(2.5),
];

function renderizarEscena(listaFiguras) {
  console.log("--- Iniciando renderizado de escena ---");
  for (const figura of listaFiguras) {
    figura.dibujar(); // polimorfismo: cada objeto resuelve su propio comportamiento
  }
  console.log("--- Renderizado completo ---");
}

renderizarEscena(figuras);

module.exports = { FiguraGeometrica, Circulo, Rectangulo, Triangulo };
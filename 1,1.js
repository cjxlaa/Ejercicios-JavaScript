class Punto3D {
  /**
   * @param {number} x - Coordenada en el eje X
   * @param {number} y - Coordenada en el eje Y
   * @param {number} z - Coordenada en el eje Z
   */
  constructor(x = 0, y = 0, z = 0) {
    this.x = x;
    this.y = y;
    this.z = z;
  }

  /**
   * Calcula la distancia euclidiana hacia otro punto 3D.
   * Si no se provee otro punto, calcula la distancia al origen (0, 0, 0).
   * @param {Punto3D} [otroPunto] - Punto destino
   * @returns {number} Distancia entre los puntos
   */
  calcularDistancia(otroPunto = new Punto3D(0, 0, 0)) {
    const dx = this.x - otroPunto.x;
    const dy = this.y - otroPunto.y;
    const dz = this.z - otroPunto.z;

    // CORRECCIÓN: Se utiliza ** 2 en todos los ejes para elevar al cuadrado
    return Math.sqrt(dx ** 2 + dy ** 2 + dz ** 2);
  }
}

const punto1 = new Punto3D(3, 4, 12);
const punto2 = new Punto3D(1, 1, 1);

console.log('Instancia punto1:', punto1);
console.log('Instancia punto2:', punto2);
console.log('Distancia de punto1 al origen:', punto1.calcularDistancia()); 
console.log('Distancia entre punto1 y punto2:', punto1.calcularDistancia(punto2).toFixed(2));
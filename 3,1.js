class DispositivoIoT {
  constructor(id, tipoConexion, direccionIp) {
    this.id = id;
    this.tipoConexion = tipoConexion; // ej: "WiFi", "Zigbee", "Bluetooth"
    this.direccionIp = direccionIp;
    this.conectado = false;
  }
 
  conectar() {
    this.conectado = true;
    console.log(
      `[${this.id}] Conectado vía ${this.tipoConexion} (IP: ${this.direccionIp})`
    );
  }
 
  desconectar() {
    this.conectado = false;
    console.log(`[${this.id}] Desconectado de la red`);
  }
 
  estado() {
    return `${this.id} | Conexión: ${this.tipoConexion} | Conectado: ${this.conectado}`;
  }
}
 
class CamaraSeguridad extends DispositivoIoT {
  constructor(id, tipoConexion, direccionIp, resolucion) {
    super(id, tipoConexion, direccionIp); // reutiliza atributos de conexión de red
    this.resolucion = resolucion;
    this.grabando = false;
  }
 
  iniciarGrabacion() {
    this.grabando = true;
    console.log(`[${this.id}] Grabando en resolución ${this.resolucion}`);
  }
 
  detenerGrabacion() {
    this.grabando = false;
    console.log(`[${this.id}] Grabación detenida`);
  }
}
 
class TermostatoInteligente extends DispositivoIoT {
  constructor(id, tipoConexion, direccionIp, temperaturaObjetivo) {
    super(id, tipoConexion, direccionIp); // reutiliza atributos de conexión de red
    this.temperaturaObjetivo = temperaturaObjetivo;
    this.temperaturaActual = temperaturaObjetivo;
  }
 
  ajustarTemperatura(nuevaTemperatura) {
    this.temperaturaObjetivo = nuevaTemperatura;
    console.log(`[${this.id}] Temperatura objetivo ajustada a ${nuevaTemperatura}°C`);
  }
}
 
// --- Demostración ---
const camara = new CamaraSeguridad("CAM-01", "WiFi", "192.168.1.10", "1080p");
const termostato = new TermostatoInteligente("TERM-01", "Zigbee", "192.168.1.20", 22);
 
camara.conectar();
camara.iniciarGrabacion();
console.log(camara.estado());
 
termostato.conectar();
termostato.ajustarTemperatura(24);
console.log(termostato.estado());
 
module.exports = { DispositivoIoT, CamaraSeguridad, TermostatoInteligente };
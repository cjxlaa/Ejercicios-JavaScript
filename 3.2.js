class DispositivoIoT {
  constructor(id, tipoConexion, direccionIp, horasActivoDia) {
    this.id = id;
    this.tipoConexion = tipoConexion;
    this.direccionIp = direccionIp;
    this.horasActivoDia = horasActivoDia;
    this.conectado = false;
  }
 
  conectar() {
    this.conectado = true;
    console.log(`[${this.id}] Conectado vía ${this.tipoConexion}`);
  }
 
  // Consumo base: horas activas por un factor estándar (kWh/h genérico)
  consumoEnergetico() {
    const factorBase = 0.05;
    return this.horasActivoDia * factorBase;
  }
}
 
class CamaraSeguridad extends DispositivoIoT {
  constructor(id, tipoConexion, direccionIp, horasActivoDia, resolucion) {
    super(id, tipoConexion, direccionIp, horasActivoDia);
    this.resolucion = resolucion;
  }
 
  // Especialización: a mayor resolución, mayor factor de consumo
  consumoEnergetico() {
    const factoresPorResolucion = { "720p": 1.1, "1080p": 1.3, "4K": 1.8 };
    const factor = factoresPorResolucion[this.resolucion] ?? 1.2;
    return super.consumoEnergetico() * factor;
  }
}
 
class TermostatoInteligente extends DispositivoIoT {
  constructor(id, tipoConexion, direccionIp, horasActivoDia, temperaturaObjetivo) {
    super(id, tipoConexion, direccionIp, horasActivoDia);
    this.temperaturaObjetivo = temperaturaObjetivo;
  }
 
  // Especialización: a mayor diferencia respecto a una temperatura de confort,
  // mayor esfuerzo energético (factor de ponderación propio)
  consumoEnergetico() {
    const TEMPERATURA_CONFORT = 21;
    const diferencia = Math.abs(this.temperaturaObjetivo - TEMPERATURA_CONFORT);
    const factor = 1 + diferencia * 0.08;
    return super.consumoEnergetico() * factor;
  }
}
 
// --- Demostración ---
const camara = new CamaraSeguridad("CAM-01", "WiFi", "192.168.1.10", 24, "4K");
const termostato = new TermostatoInteligente("TERM-01", "Zigbee", "192.168.1.20", 24, 17);
 
console.log(`${camara.id} consumo: ${camara.consumoEnergetico().toFixed(2)} kWh/día`);
console.log(`${termostato.id} consumo: ${termostato.consumoEnergetico().toFixed(2)} kWh/día`);
 
module.exports = { DispositivoIoT, CamaraSeguridad, TermostatoInteligente };
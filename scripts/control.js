// La clase ctr se encarga de controlar el flujo de decisiones y encaspular las operaciones de manipulación del DOM
import dom from "./dom.js";

class Control {
  controlTipoInscripcion() {
    this.validado = true;
    switch (this.value) {
      case "Estudiante": {
        dom.activarGrupoCampos(document.querySelector("#constancia"));
        dom.desactivarGrupoCampos(document.querySelector("#paper-id-2"));
        break;
      }
      case "Investigador": {
        dom.activarGrupoCampos(document.querySelector("#paper-id-2"));
        dom.desactivarGrupoCampos(document.querySelector("#constancia"));
        break;
      }
    }
  }

  controlSiFacturacion() {
    this.validado = true;
    switch (this.value) {
      case "Si": {
        dom.activarGrupoCampos(document.querySelector("#facturacion"));
        break;
      }
      case "No": {
        dom.desactivarGrupoCampos(document.querySelector("#facturacion"));
        break;
      }
    }
  }
}

export default new Control();

import dom from "./dom.js";

class Validacion {
  validarTamanoArchivo(inputElmt) {
    const size = inputElmt.files[0]?.size / 1024 / 1024;
    if (!size) return;
    if (size < 3) {
      inputElmt.validado = true;
      dom.desactivarElemento(
        inputElmt.parentNode.querySelector("#file-too-big")
      );
    } else {
      inputElmt.validado = false;
      dom.activarElemento(inputElmt.parentNode.querySelector("#file-too-big"));
    }
  }

  validarEsNumero(inputElmt) {
    if (!isNaN(inputElmt.value)) {
      inputElmt.validado = true;
      dom.desactivarElemento(inputElmt.nextElementSibling);
    } else {
      inputElmt.validado = false;
      dom.activarElemento(inputElmt.nextElementSibling);
    }
  }

  validarEsEmail(inputElmt) {
    if (/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(inputElmt.value)) {
      inputElmt.validado = true;
      dom.desactivarElemento(
        inputElmt.parentNode.querySelector("#email-invalido")
      );
    } else {
      inputElmt.validado = false;
      dom.activarElemento(
        inputElmt.parentNode.querySelector("#email-invalido")
      );
    }
  }

  validarLleno(inputElmt) {
    if (inputElmt.value !== "") {
      inputElmt.validado = true;
      dom.desactivarElemento(inputElmt.nextElementSibling);
    } else {
      inputElmt.validado = false;
      dom.activarElemento(inputElmt.nextElementSibling);
    }
  }
}

export default new Validacion();

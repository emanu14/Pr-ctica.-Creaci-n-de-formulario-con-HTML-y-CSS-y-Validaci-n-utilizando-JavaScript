import ctr from "./control.js";
import vld from "./validacion.js";

class App {
  constructor() {
    //                               //
    //              INIT             //
    //                               //

    this.inputLista = document.querySelectorAll("input");
    this.selectLista = document.querySelectorAll("select");
    this.campoLista = [...this.inputLista, ...this.selectLista];

    this.campoLista.forEach((elmt) => {
      elmt.validado = false;
    });

    //                               //
    //    CONTROL DE OPCIONES        //
    //                               //

    let tipoInscripcionSelector = document.querySelector("#tipo-inscripcion");
    tipoInscripcionSelector.addEventListener(
      "change",
      ctr.controlTipoInscripcion
    );
    tipoInscripcionSelector.activo = true;
    tipoInscripcionSelector.requerido = true;

    let siFacturacionSelector = document.querySelector("#facturacion-selector");
    siFacturacionSelector.addEventListener("change", ctr.controlSiFacturacion);
    siFacturacionSelector.activo = true;
    //                   //
    //    VALIDACIÓN     //
    //                   //

    // campo email
    let emailInput = document.querySelector("#email");
    emailInput.addEventListener("change", () => {
      vld.validarEsEmail(emailInput);
    });
    emailInput.activo = true;
    emailInput.requerido = true;

    // campos archivo
    let constanciaArchivoInput = document.querySelector("#constancia-archivo");
    constanciaArchivoInput.addEventListener("change", () => {
      vld.validarTamanoArchivo(constanciaArchivoInput);
    });
    constanciaArchivoInput.activo = false;
    constanciaArchivoInput.requerido = true;

    let fichaArchivoInput = document.querySelector("#ficha-deposito-archivo");
    fichaArchivoInput.addEventListener("change", () => {
      vld.validarTamanoArchivo(fichaArchivoInput);
    });
    fichaArchivoInput.activo = true;
    fichaArchivoInput.requerido = true;

    let rfcArchivoInput = document.querySelector("#rfc-archivo");
    rfcArchivoInput.addEventListener("change", () => {
      vld.validarTamanoArchivo(rfcArchivoInput);
    });
    rfcArchivoInput.activo = false;
    rfcArchivoInput.requerido = true;

    // campo número de folio
    let numeroFolioInput = document.querySelector("#numero-folio-campo");
    numeroFolioInput.addEventListener("change", () => {
      vld.validarEsNumero(numeroFolioInput);
    });
    numeroFolioInput.activo = true;
    numeroFolioInput.requerido = true;

    // campos con validación básica (lleno o no lleno)

    let paperId1Input = document.querySelector("#paper-id-1-field");
    paperId1Input.addEventListener("change", () => {
      vld.validarEsNumero(paperId1Input);
    });
    paperId1Input.activo = true;
    paperId1Input.requerido = true;

    let rfcInput = document.querySelector("#rfc");
    rfcInput.addEventListener("change", () => {
      vld.validarLleno(rfcInput);
    });
    rfcInput.activo = false;
    rfcInput.requerido = true;

    let razonSocialInput = document.querySelector("#razon-social");
    razonSocialInput.addEventListener("change", () => {
      vld.validarLleno(razonSocialInput);
    });
    razonSocialInput.activo = false;
    razonSocialInput.requerido = true;

    let domicilioInput = document.querySelector("#domicilio");
    domicilioInput.addEventListener("change", () => {
      vld.validarLleno(domicilioInput);
    });
    domicilioInput.activo = false;
    domicilioInput.requerido = true;

    let coloniaInput = document.querySelector("#colonia");
    coloniaInput.addEventListener("change", () => {
      vld.validarLleno(coloniaInput);
    });
    coloniaInput.activo = false;
    coloniaInput.requerido = true;

    let cpInput = document.querySelector("#cp");
    cpInput.addEventListener("change", () => {
      vld.validarLleno(cpInput);
    });
    cpInput.activo = false;
    cpInput.requerido = true;

    let ciudadInput = document.querySelector("#ciudad");
    ciudadInput.addEventListener("change", () => {
      vld.validarLleno(ciudadInput);
    });
    ciudadInput.activo = false;
    ciudadInput.requerido = true;

    let estadoInput = document.querySelector("#estado");
    estadoInput.addEventListener("change", () => {
      vld.validarLleno(estadoInput);
    });
    estadoInput.activo = false;
    estadoInput.requerido = true;

    //                   //
    //    REGISTRAR      //
    //                   //

    let botonRegistrar = document.querySelector("#boton-registrar");
    botonRegistrar.addEventListener("click", () => {
      this.enviarFormulario();
    });
  }

  enviarFormulario() {
    const noValidados = [];
    this.campoLista.forEach((elmt) => {
      if (elmt.activo && elmt.requerido && !elmt.validado) {
        noValidados.push(elmt);
      }
    });
    if (!noValidados.length) {
      document.querySelector("form").submit();
      alert("Enviado");
    }
  }
}

new App();

//
// elementos "select" (para escuchar cambios)
const tipoInscripcionSelector = document.querySelector("#tipo-inscripcion");
const facturacionSelector = document.querySelector("#facturacion-selector");

// conjuntos de campos a requerir / no requerir
const paperId2Div = document.querySelector("#paper-id-2");
const constanciaDiv = document.querySelector("#constancia");
const facturacionDiv = document.querySelector("#facturacion");

// campos de archivo (para validación del tamaño)
const constanciaArchivoCampo = document.querySelector("#constancia-archivo");
const fichaDepositoArchivoCampo = document.querySelector(
  "#ficha-deposito-archivo"
);
const rfcArchivoCampo = document.querySelector("#rfc-archivo");

// campos adicionales (validación)
const numeroFolioCampo = document.querySelector("#numero-folio-campo");

// listeners para selectores
tipoInscripcionSelector.addEventListener(
  "change",
  handleTipoInscripcionSeleccion
);

facturacionSelector.addEventListener("change", handleFacturacionSelector);

constanciaArchivoCampo.addEventListener("change", () =>
  validateFileSize(constanciaArchivoCampo)
);

fichaDepositoArchivoCampo.addEventListener("change", () =>
  validateFileSize(fichaDepositoArchivoCampo)
);

rfcArchivoCampo.addEventListener("change", () =>
  validateFileSize(rfcArchivoCampo)
);

numeroFolioCampo.addEventListener("change", () => {
  validateInputIsNumber(numeroFolioCampo, "#folio-invalido");
});

//activa/desactiva partes del formulario en base al tipo de inscripción
function handleTipoInscripcionSeleccion() {
  switch (tipoInscripcionSelector.value) {
    case "Estudiante": {
      activateFieldGroup(constanciaDiv);
      desactivateFieldGroup(paperId2Div);
      break;
    }
    case "Investigador": {
      activateFieldGroup(paperId2Div, false);
      desactivateFieldGroup(constanciaDiv);
      break;
    }
    default: {
      break;
    }
  }
}

//activa/desactiva partes del formulario en base a si se desea facturación
function handleFacturacionSelector() {
  switch (facturacionSelector.value) {
    case "Si": {
      activateFieldGroup(facturacionDiv);
      break;
    }
    case "No": {
      desactivateFieldGroup(facturacionDiv);
      break;
    }
    default: {
      break;
    }
  }
}

//valida que el input file sea menor a 3MB
//limpia el campo si el archivo es > 3MB
//activa/desactiva el mensaje de validación
function validateFileSize(field) {
  const size = field.files[0].size / 1024 / 1024;
  if (size >= 3) {
    field.value = "";
    field.parentNode.querySelector("#file-too-big").style.display = "block";
  } else {
    field.parentNode.querySelector("#file-too-big").style.display = "none";
  }
}

//valida que el input sea un número
//activa/desactiva un mensaje de validación
function validateInputIsNumber(field, messageId) {
  if (isNaN(field.value)) {
    field.parentNode.querySelector(messageId).style.display = "block";
  } else {
    field.parentNode.querySelector(messageId).style.display = "none";
  }
}

// activar un grupo de campos: mostrar y requerir para el envío
function activateFieldGroup(element, setRequired = true) {
  element.style.display = "block";
  element.querySelectorAll("input").forEach((elmt) => {
    elmt.required = setRequired ? true : false;
  });
}

// desactivar un grupo de campos: ocultar y desactivar requerir para el envío
function desactivateFieldGroup(element) {
  element.style.display = "none";
  element.querySelectorAll("input").forEach((elmt) => {
    elmt.required = false;
  });
}

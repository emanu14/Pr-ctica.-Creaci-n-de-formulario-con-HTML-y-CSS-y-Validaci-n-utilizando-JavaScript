class Dom {
  constructor() {}
  activarElemento(elmt) {
    elmt.style.display = "block";
  }

  desactivarElemento(elmt) {
    elmt.style.display = "none";
  }

  activarGrupoCampos(elmt) {
    this.activarElemento(elmt);
    elmt.querySelectorAll("input").forEach((elmt) => {
      this._setRequerido(elmt);
      elmt.activo = true;
    });
  }

  desactivarGrupoCampos(elmt) {
    this.desactivarElemento(elmt);
    elmt.querySelectorAll("input").forEach((elmt) => {
      this._unsetRequerido(elmt);
      elmt.activo = false;
    });
  }

  _setRequerido(elmt) {
    if (elmt.className.includes("requerido")) {
      elmt.required = true;
    }
  }

  _unsetRequerido(elmt) {
    if (elmt.className.includes("requerido")) {
      elmt.required = false;
    }
  }
}

export default new Dom();

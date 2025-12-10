function validar(...valores) {
  if (valores.some(v => v < 0)) {
    throw new Error("Valores devem ser não negativos.");
  }
}

function calcularJurosSimples(capital, taxa, tempo) {
  validar(capital, taxa, tempo);
  return capital * taxa * tempo;
}

function calcularJurosCompostos(capital, taxa, tempo) {
  validar(capital, taxa, tempo);
  return capital * Math.pow(1 + taxa, tempo);
}

function calcularValorFuturo(vp, taxa, tempo) {
  validar(vp, taxa, tempo);
  return vp * Math.pow(1 + taxa, tempo);
}

function calcularValorPresente(vf, taxa, tempo) {
  validar(vf, taxa, tempo);
  return vf / Math.pow(1 + taxa, tempo);
}

module.exports = {
  calcularJurosSimples,
  calcularJurosCompostos,
  calcularValorFuturo,
  calcularValorPresente
};

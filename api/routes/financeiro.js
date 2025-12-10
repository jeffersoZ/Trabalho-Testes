const express = require('express');
const {
  calcularJurosSimples,
  calcularJurosCompostos,
  calcularValorFuturo,
  calcularValorPresente
} = require('../financeiro/calculos');

const router = express.Router();

function params(req) {
  const a = parseFloat(req.query.a);
  const b = parseFloat(req.query.b);
  const c = parseFloat(req.query.c);

  if ([a, b, c].some(v => isNaN(v))) {
    return { erro: "Parâmetros devem ser números reais." };
  }

  return { a, b, c };
}

// Juros Simples
router.get('/juros-simples', (req, res) => {
  const p = params(req);
  if (p.erro) return res.status(400).json({ erro: p.erro });

  try {
    const juros = calcularJurosSimples(p.a, p.b, p.c);
    return res.json({ juros: Number(juros.toFixed(2)) });
  } catch (e) {
    return res.status(400).json({ erro: e.message });
  }
});

// Juros Compostos
router.get('/juros-compostos', (req, res) => {
  const p = params(req);
  if (p.erro) return res.status(400).json({ erro: p.erro });

  try {
    const montante = calcularJurosCompostos(p.a, p.b, p.c);
    return res.json({ montante: Number(montante.toFixed(2)) });
  } catch (e) {
    return res.status(400).json({ erro: e.message });
  }
});

// Valor Futuro
router.get('/valor-futuro', (req, res) => {
  const p = params(req);
  if (p.erro) return res.status(400).json({ erro: p.erro });

  try {
    const vf = calcularValorFuturo(p.a, p.b, p.c);
    return res.json({ valorFuturo: Number(vf.toFixed(2)) });
  } catch (e) {
    return res.status(400).json({ erro: e.message });
  }
});

// Valor Presente
router.get('/valor-presente', (req, res) => {
  const p = params(req);
  if (p.erro) return res.status(400).json({ erro: p.erro });

  try {
    const vp = calcularValorPresente(p.a, p.b, p.c);
    return res.json({ valorPresente: Number(vp.toFixed(2)) });
  } catch (e) {
    return res.status(400).json({ erro: e.message });
  }
});

module.exports = router;

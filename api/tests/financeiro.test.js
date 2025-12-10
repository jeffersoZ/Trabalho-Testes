const request = require('supertest');
const app = require('../../api/index');

describe("API Financeira", () => {

  test("Juros Simples OK", async () => {
    const res = await request(app)
      .get("/financeiro/juros-simples?a=1000&b=0.05&c=10");

    expect(res.status).toBe(200);
    expect(res.body.juros).toBe(500);
  });

  test("Erro quando parâmetro não é número", async () => {
    const res = await request(app)
      .get("/financeiro/juros-simples?a=aaa&b=0.05&c=10");

    expect(res.status).toBe(400);
    expect(res.body.erro).toBe("Parâmetros devem ser números reais.");
  });

  test("Juros Compostos", async () => {
    const res = await request(app)
      .get("/financeiro/juros-compostos?a=1000&b=0.1&c=2");

    expect(res.status).toBe(200);
    expect(res.body.montante).toBeCloseTo(1210, 2);
  });

});

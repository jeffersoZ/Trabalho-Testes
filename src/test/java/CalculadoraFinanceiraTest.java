import Main.CalculadoraFinanceira;
import org.junit.jupiter.api.Test;
import static org.junit.jupiter.api.Assertions.*;

public class CalculadoraFinanceiraTest {

    private final CalculadoraFinanceira calculadora = new CalculadoraFinanceira();
    private static final double DELTA = 0.0001; // Para lidar com precisão em números decimais

    @Test
    public void testCalcularJurosSimples() {
        double capital = 1000.0;
        double taxa = 0.05; // 5% ao mês
        int tempo = 12; // 12 meses

        double resultado = calculadora.calcularJurosSimples(capital, taxa, tempo);

        assertEquals(600.0, resultado, DELTA, "O cálculo de juros simples está incorreto.");
    }

    @Test
    public void testCalcularJurosCompostos() {
        double capital = 1000.0;
        double taxa = 0.05; // 5% ao mês
        int tempo = 12; // 12 meses

        double resultado = calculadora.calcularJurosCompostos(capital, taxa, tempo);

        assertEquals(1795.8563, resultado, DELTA, "O cálculo de juros compostos está incorreto.");
    }

    @Test
    public void testCalcularValorFuturo() {
        double valorPresente = 1000.0;
        double taxa = 0.05; // 5% ao mês
        int tempo = 12; // 12 meses

        double resultado = calculadora.calcularValorFuturo(valorPresente, taxa, tempo);

        assertEquals(1795.8563, resultado, DELTA, "O cálculo do valor futuro está incorreto.");
    }

    @Test
    public void testCalcularValorPresente() {
        double valorFuturo = 1795.8563;
        double taxa = 0.05; // 5% ao mês
        int tempo = 12; // 12 meses

        double resultado = calculadora.calcularValorPresente(valorFuturo, taxa, tempo);

        assertEquals(1000.0, resultado, DELTA, "O cálculo do valor presente está incorreto.");
    }

    @Test
    public void testArgumentosInvalidos() {
        assertThrows(IllegalArgumentException.class, () -> calculadora.calcularJurosSimples(-1000.0, 0.05, 12));
        assertThrows(IllegalArgumentException.class, () -> calculadora.calcularJurosCompostos(1000.0, -0.05, 12));
        assertThrows(IllegalArgumentException.class, () -> calculadora.calcularValorFuturo(1000.0, 0.05, -12));
        assertThrows(IllegalArgumentException.class, () -> calculadora.calcularValorPresente(-1795.8563, 0.05, 12));
    }
}

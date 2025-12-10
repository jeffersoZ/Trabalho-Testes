package Main;

public class CalculadoraFinanceira {

    // Juros simples: juros = capital * taxa * tempo
    public double calcularJurosSimples(double capital, double taxa, int tempo) {
        if (capital < 0 || taxa < 0 || tempo < 0) {
            throw new IllegalArgumentException("Capital, taxa e tempo devem ser valores não negativos.");
        }
        return capital * taxa * tempo;
    }

    // Juros compostos: montante = capital * (1 + taxa)^tempo
    public double calcularJurosCompostos(double capital, double taxa, int tempo) {
        if (capital < 0 || taxa < 0 || tempo < 0) {
            throw new IllegalArgumentException("Capital, taxa e tempo devem ser valores não negativos.");
        }
        return capital * Math.pow((1 + taxa), tempo);
    }

    // Valor futuro: VF = VP * (1 + taxa)^tempo
    public double calcularValorFuturo(double valorPresente, double taxa, int tempo) {
        if (valorPresente < 0 || taxa < 0 || tempo < 0) {
            throw new IllegalArgumentException("Valor presente, taxa e tempo devem ser valores não negativos.");
        }
        return valorPresente * Math.pow((1 + taxa), tempo);
    }

    // Valor presente: VP = VF / (1 + taxa)^tempo
    public double calcularValorPresente(double valorFuturo, double taxa, int tempo) {
        if (valorFuturo < 0 || taxa < 0 || tempo < 0) {
            throw new IllegalArgumentException("Valor futuro, taxa e tempo devem ser valores não negativos.");
        }
        return valorFuturo / Math.pow((1 + taxa), tempo);
    }
}

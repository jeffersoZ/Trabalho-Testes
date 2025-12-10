Relatório Final: Qualidade e Teste de Software
Grupo: Jefferson Ademir Zimmermann e Ana Clara

1. Introdução e Objetivo
  Este relatório descreve o desenvolvimento, os testes e a documentação do Trabalho Final da disciplina de Qualidade e Teste de Software. O objetivo principal do projeto foi construir um peque sistemano de cálculo, implementar testes unitários abrangentes, expor as funcionalidades através de uma API REST e validar sua performance por meio de um teste de carga.

2. Detalhes do Projeto
  O tema escolhido para o desenvolvimento do sistema foi o Tema 2: Cálculos de Finanças Pessoais.

  2.1. Tecnologias Utilizadas
    O sistema foi desenvolvido com o seguinte stack tecnológico, conforme o código implementado:
    Linguagem de Programação: Java
    Framework de API: PENDENTE
    Framework de Teste Unitário: JUnit 5
    Ferramenta de Teste de Carga: (PENDENTE)

3. Classe de Cálculo e Operações
  A lógica central do sistema reside na classe principal de cálculo, Main.CalculadoraFinanceira, que contém as quatro operações obrigatórias relacionadas a finanças pessoais.

  3.1. Operação 1: Juros Simples
    Esta operação calcula os juros com base em capitalização linear.
    Entrada Esperada: capital (float), taxa (float), tempo (int).
    Cálculo: $$juros = capital \cdot taxa \cdot tempo$$
    O resultado final é o valor total dos juros (a API, quando implementada, deve retornar o valor total dos juros e o Montante).


  3.2. Operação 2: Juros Compostos
    Esta operação calcula o montante final em regime de capitalização composta.
    Entrada Esperada: capital (float), taxa (float), tempo (int).
    Cálculo: $$montante = capital \cdot (1 + taxa)^{tempo}$$
    O resultado final é o valor total do Montante.

  3.3. Operação 3: Valor Futuro
    Esta operação determina o valor futuro de um investimento com base em uma taxa de juros e período de tempo.
    Entrada Esperada: valorPresente (float), taxa (float), tempo (int).
    Cálculo: $$VF = VP \cdot (1 + taxa)^{tempo}$$
    O resultado final deve retornar o Valor Futuro.

  3.4. Operação 4: Valor Presente
    Esta operação calcula o valor presente (descontado) necessário para atingir um valor futuro.
    Entrada Esperada: valorFuturo (float), taxa (float), tempo (int).
    Cálculo: $$VP = VF / (1 + taxa)^{tempo}$$
    O resultado final deve retornar o Valor Presente.


4. Implementação da API REST
  A implementação da API REST (PENDENTE) será realizada utilizando o Spring Boot e exporá cada operação de cálculo em um endpoint separado (ex: /api/financas/juros-simples), sem autenticação e com retorno em JSON.
  Endpoint Base: http://localhost:[PORTA]/api/financas/[operacao]
  Exemplo de Acesso (Juros Simples):
  GET http://localhost:[PORTA]/api/financas/juros-simples?capital=1000&taxa=0.1&tempo=2
  Tratamento de Erros: A lógica de validação de argumentos inválidos já está implementada na classe de cálculo e será refletida na API para retornar mensagens de erro em JSON, como exigido.


5. Testes Unitários (CONCLUÍDO)
  Os testes unitários foram completamente implementados na classe CalculadoraFinanceiraTest, utilizando o framework JUnit 5.
  Foi garantida a cobertura de todas as quatro operações de cálculo, totalizando 5 testes que incluem:
  Validação de Casos de Sucesso: Testes para cada operação principal (Juros Simples, Juros Compostos, Valor Futuro, Valor Presente) confirmando a precisão dos resultados.
  Validação de Argumentos Inválidos: Um teste específico que verifica se a exceção IllegalArgumentException é lançada corretamente quando valores negativos são fornecidos como entrada (conforme a lógica implementada).


6. Teste de Carga
  O teste de carga (PENDENTE) será executado com a ferramenta Apache JMeter sobre os quatro endpoints da API. O teste será configurado para simular um mínimo de 50 requisições simultâneas.
  Arquivo do Teste: O script de teste de carga (.jmx ou similar) será adicionado ao repositório após a conclusão da API
  Relatório de Carga: [PREENCHER - Inserir o Screenshot ou PNG do relatório de carga aqui.]


7. Vídeo de Apresentação
  Link do Vídeo no YouTube: [PREENCHER - Link do YouTube]


8. Uso de Inteligência Artificial
  Ferramenta(s) de IA Utilizada(s): GEMINI
  Facilidades Encontradas: Facilitou criar o RADME do GitHub
  Dificuldades Encontradas: [PREENCHER] (Ex: Foi necessário ajustar a sintaxe específica do framework ou corrigir erros na lógica de tratamento de exceções.)

/**
 * Este script cria um Google Form para o "QUIZ DE NIVELAMENTO - MODELAGEM DE SISTEMAS"
 * com base nas especificações fornecidas.
 *
 * Para usar:
 * 1. Abra o Google Apps Script (script.google.com).
 * 2. Crie um novo projeto.
 * 3. Cole este código no arquivo `Code.gs`.
 * 4. Salve o projeto.
 * 5. No menu superior, selecione a função `criarFormularioQuiz`.
 * 6. Clique em "Executar".
 * 7. Você precisará autorizar o script a gerenciar seus Google Forms na primeira vez.
 * 8. O link para o formulário criado e o link para editá-lo aparecerão nos logs de execução.
 */
function criarFormularioQuiz() {
  try {
    Logger.log("Iniciando a criação do formulário...");

    // 1. CRIAR O FORMULÁRIO E DEFINIR CONFIGURAÇÕES GERAIS
    var form = FormApp.create("QUIZ DE NIVELAMENTO - MODELAGEM DE SISTEMAS");
    form.setDescription("DIAGNÓSTICO DE APRENDIZAGEM (NÃO VALE NOTA)");

    // --- Configurações ---
    form.setIsQuiz(true); // Marcar como Quiz
    
    // ⚠️ CONFIGURAÇÃO MANUAL OBRIGATÓRIA APÓS CRIAR O FORMULÁRIO:
    // Após executar este script, você DEVE fazer as seguintes configurações manualmente:
    //
    // 1. Abra o formulário criado (use o link do log de execução)
    // 2. Clique no ícone de ⚙️ CONFIGURAÇÕES
    // 
    // 3. Aba "GERAL":
    //    - Marque: ✅ "Coletar endereços de e-mail"
    //    - Marque: ✅ "Limitar a 1 resposta" (exige login Google)
    //    - Desmarque: ❌ "Permitir edição de resposta"
    //
    // 4. Aba "TESTES":
    //    - Em "Divulgação de notas", selecione: ✅ "Imediatamente após cada envio"
    //    - Marque: ✅ "Respostas corretas"
    //    - Marque: ✅ "Valores em pontos"
    //
    // ❗ A API do Google Forms Apps Script NÃO permite configurar estas opções via código.
    //    Todas essas configurações precisam ser feitas manualmente na interface do Google Forms.

    // NOTA: O limite de tempo de 30 minutos NÃO é um recurso nativo do Google Forms.
    // O professor precisará controlar o tempo manualmente durante a aplicação do quiz.

    // --- Mensagem Final ---
    form.setConfirmationMessage(
      "Obrigado por participar do Quiz de Nivelamento!\n\n" +
      "Este diagnóstico nos ajudará a identificar os pontos que precisam ser reforçados durante os próximos encontros.\n\n" +
      "Lembre-se: esta atividade NÃO vale nota. O objetivo é apenas entender como estamos e onde podemos melhorar.\n\n" +
      "Nos vemos na revisão! 🚀"
    );

    var item; // Variável para reutilizar ao adicionar itens
    var choices;

    // ================================================================================
    // SEÇÃO 1: INFORMAÇÕES DO ALUNO
    // ================================================================================
    Logger.log("Adicionando Seção 1...");
    var secao1 = form.addPageBreakItem();
    secao1.setTitle("SEÇÃO 1: INFORMAÇÕES DO ALUNO");
    secao1.setHelpText(
      "📋 Bem-vindo(a) ao Quiz de Nivelamento!\n\n" +
      "Este é um diagnóstico de aprendizagem para identificarmos juntos:\n" +
      "✓ O que você já domina\n" +
      "✓ Quais conceitos precisam ser reforçados\n" +
      "✓ Como podemos personalizar as próximas aulas\n\n" +
      "⏱️ Tempo estimado: 30 minutos\n" +
      "❗ Importante: Esta atividade NÃO vale nota!\n\n" +
      "Responda com tranquilidade e sinceridade. Vamos começar!"
    );

    // 1. Nome completo
    form.addTextItem()
      .setTitle("1. Nome completo:")
      .setHelpText("Digite seu nome completo para identificação")
      .setRequired(true);

    // 2. Turma
    form.addTextItem()
      .setTitle("2. Turma:")
      .setHelpText("Exemplo: Turma A, Turma B, etc.")
      .setRequired(true);

    // ================================================================================
    // SEÇÃO 2: CONCEITOS FUNDAMENTAIS DE MODELAGEM
    // ================================================================================
    Logger.log("Adicionando Seção 2...");
    form.addPageBreakItem().setTitle("SEÇÃO 2: CONCEITOS FUNDAMENTAIS DE MODELAGEM");

    // 3. O que é Modelagem de Sistemas?
    item = form.addMultipleChoiceItem();
    choices = [
      item.createChoice("Processo de codificação de software", false),
      item.createChoice("Processo de criar abstrações da realidade para representar sistemas", true),
      item.createChoice("Processo de testar software", false),
      item.createChoice("Processo de instalar sistemas em servidores", false)
    ];
    item.setTitle("3. O que é Modelagem de Sistemas?")
        .setChoices(choices)
        .setPoints(1)
        .setRequired(true)
        .setFeedbackForCorrect(FormApp.createFeedback()
          .setText("✅ Correto! Modelagem é o processo de criar abstrações da realidade.")
          .build())
        .setFeedbackForIncorrect(FormApp.createFeedback()
          .setText("❌ Modelagem é o processo de criar abstrações da realidade para representar sistemas de forma simplificada.")
          .build());

    // 4. Qual NÃO é um benefício da modelagem de sistemas?
    item = form.addMultipleChoiceItem();
    choices = [
      item.createChoice("Facilitar a comunicação entre equipes", false),
      item.createChoice("Lidar com problemas complexos", false),
      item.createChoice("Eliminar a necessidade de codificação", true),
      item.createChoice("Guiar o desenvolvimento do sistema", false)
    ];
    item.setTitle("4. Qual NÃO é um benefício da modelagem de sistemas?")
        .setChoices(choices)
        .setPoints(1)
        .setRequired(true);

    // 5. Complete: "Um modelo é uma _____________ da realidade..."
    // NOTA: Resposta esperada: "abstração" (será avaliada manualmente)
    form.addTextItem()
      .setTitle('5. Complete: "Um modelo é uma _____________ da realidade que foca no que é importante em determinado momento."')
      .setHelpText('Dica: a resposta é uma única palavra. Resposta esperada: "abstração"')
      .setRequired(true);

    // ================================================================================
    // SEÇÃO 3: REGRAS de NEGÓCIO
    // ================================================================================
    Logger.log("Adicionando Seção 3...");
    form.addPageBreakItem().setTitle("SEÇÃO 3: REGRAS DE NEGÓCIO");

    // 6. O que é uma Regra de Negócio?
    item = form.addMultipleChoiceItem();
    choices = [
      item.createChoice("Diretriz que define condições ou critérios que precisam ser atendidos", true),
      item.createChoice("Descrição de uma funcionalidade do sistema", false),
      item.createChoice("Requisito relacionado ao desempenho do sistema", false),
      item.createChoice("Processo de validação de código", false)
    ];
    item.setTitle("6. O que é uma Regra de Negócio?")
        .setChoices(choices)
        .setPoints(1)
        .setRequired(true)
        .setFeedbackForCorrect(FormApp.createFeedback()
          .setText("✅ Correto! Regras de Negócio definem condições e critérios que devem ser atendidos.")
          .build())
        .setFeedbackForIncorrect(FormApp.createFeedback()
          .setText("❌ Regras de Negócio são diretrizes que definem CONDIÇÕES, não funcionalidades.")
          .build());

    // 7. Qual é a diferença principal entre Regra de Negócio e Requisito Funcional?
    item = form.addMultipleChoiceItem();
    choices = [
      item.createChoice("Regra = Condições; Requisito = Ações", true),
      item.createChoice("Regra = Ações; Requisito = Condições", false),
      item.createChoice("Não há diferença, são sinônimos", false),
      item.createChoice("Regra é técnica; Requisito é de negócio", false)
    ];
    item.setTitle("7. Qual é a diferença principal entre Regra de Negócio e Requisito Funcional?")
        .setChoices(choices)
        .setPoints(1)
        .setRequired(true)
        .setFeedbackForCorrect(FormApp.createFeedback()
          .setText("✅ Correto! RN = CONDIÇÕES que devem ser atendidas; RF = AÇÕES que o sistema executa.")
          .build())
        .setFeedbackForIncorrect(FormApp.createFeedback()
          .setText("❌ Lembre-se: Regras de Negócio definem CONDIÇÕES, Requisitos Funcionais descrevem AÇÕES/funcionalidades.")
          .build());

    // 8. Analise a afirmação: "A matrícula só será aceita..."
    item = form.addMultipleChoiceItem();
    choices = [
      item.createChoice("Regra de Negócio", true),
      item.createChoice("Requisito Funcional", false),
      item.createChoice("Requisito Não-Funcional", false),
      item.createChoice("Caso de Uso", false)
    ];
    item.setTitle('8. Analise a afirmação: "A matrícula só será aceita se a carga horária total for ≥ 20 horas."\nEsta é uma:')
        .setChoices(choices)
        .setPoints(1)
        .setRequired(true);

    // 9. Quais são os tipos de Regras de Negócio? (Marque TODAS as corretas)
    item = form.addCheckboxItem();
    choices = [
      item.createChoice("Cálculos/Derivações", true),
      item.createChoice("Restrições", true),
      item.createChoice("Habilitações de ação", true),
      item.createChoice("Termos", true),
      item.createChoice("Fatos", true),
      item.createChoice("Codificações", false)
    ];
    item.setTitle("9. Quais são os tipos de Regras de Negócio? (Marque TODAS as corretas)")
        .setChoices(choices)
        .setPoints(1) // Pontos são dados se TODAS as corretas e NENHUMA incorreta forem marcadas
        .setRequired(true);

    // 10. Qual é o formato padrão para identificar uma Regra de Negócio?
    item = form.addMultipleChoiceItem();
    choices = [
      item.createChoice("RF001", false),
      item.createChoice("RN001", true),
      item.createChoice("UC001", false),
      item.createChoice("REQ001", false)
    ];
    item.setTitle("10. Qual é o formato padrão para identificar uma Regra de Negócio?")
        .setChoices(choices)
        .setPoints(1)
        .setRequired(true);

    // ================================================================================
    // SEÇÃO 4: REQUISITOS FUNCIONAIS
    // ================================================================================
    Logger.log("Adicionando Seção 4...");
    form.addPageBreakItem().setTitle("SEÇÃO 4: REQUISITOS FUNCIONAIS");

    // 11. O que são Requisitos Funcionais?
    item = form.addMultipleChoiceItem();
    choices = [
      item.createChoice("Descrevem o que o sistema deve fazer (funcionalidades)", true),
      item.createChoice("Descrevem como o sistema deve se comportar (qualidades)", false),
      item.createChoice("Descrevem as condições de negócio", false),
      item.createChoice("Descrevem a arquitetura técnica", false)
    ];
    item.setTitle("11. O que são Requisitos Funcionais?")
        .setChoices(choices)
        .setPoints(1)
        .setRequired(true)
        .setFeedbackForCorrect(FormApp.createFeedback()
          .setText("✅ Correto! Requisitos Funcionais descrevem O QUE o sistema deve fazer.")
          .build())
        .setFeedbackForIncorrect(FormApp.createFeedback()
          .setText("❌ Requisitos Funcionais descrevem as funcionalidades (O QUE o sistema faz), não qualidades.")
          .build());

    // 12. Qual das alternativas abaixo é um Requisito Funcional?
    item = form.addMultipleChoiceItem();
    choices = [
      item.createChoice("O sistema deve responder em menos de 2 segundos", false),
      item.createChoice("O sistema deve permitir cadastro de usuários", true),
      item.createChoice("O sistema deve ser acessível 24/7", false),
      item.createChoice("O sistema deve ter interface intuitiva", false)
    ];
    item.setTitle("12. Qual das alternativas abaixo é um Requisito Funcional?")
        .setChoices(choices)
        .setPoints(1)
        .setRequired(true);

    // 13. Complete: "RF001: O sistema deve _____________"
    // NOTA: Esta questão será avaliada manualmente pelo professor
    form.addTextItem()
      .setTitle('13. Complete: "RF001: O sistema deve _____________"')
      .setHelpText('Exemplo válido: "permitir login de usuários" ou "registrar empréstimos"')
      .setRequired(true);

    // 14. Um Requisito Funcional pode violar uma Regra de Negócio?
    item = form.addMultipleChoiceItem();
    choices = [
      item.createChoice("Sim, sempre", false),
      item.createChoice("Não, nunca", true),
      item.createChoice("Sim, em casos especiais", false),
      item.createChoice("Depende do contexto", false)
    ];
    item.setTitle("14. Um Requisito Funcional pode violar uma Regra de Negócio?")
        .setChoices(choices)
        .setPoints(1)
        .setRequired(true)
        .setFeedbackForCorrect(FormApp.createFeedback()
          .setText("✅ Correto! Requisitos Funcionais NUNCA devem violar Regras de Negócio. As RN são as restrições!")
          .build())
        .setFeedbackForIncorrect(FormApp.createFeedback()
          .setText("❌ Requisitos Funcionais devem SEMPRE respeitar as Regras de Negócio estabelecidas.")
          .build());

    // 15. Qual sufixo é comumente usado para identificar Requisitos Funcionais?
    item = form.addMultipleChoiceItem();
    choices = [
      item.createChoice("RN", false),
      item.createChoice("RF", true),
      item.createChoice("RNF", false),
      item.createChoice("REQ", false)
    ];
    item.setTitle("15. Qual sufixo é comumente usado para identificar Requisitos Funcionais?")
        .setChoices(choices)
        .setPoints(1)
        .setRequired(true);

    // ================================================================================
    // SEÇÃO 5: REQUISITOS NÃO-FUNCIONAIS
    // ================================================================================
    Logger.log("Adicionando Seção 5...");
    form.addPageBreakItem().setTitle("SEÇÃO 5: REQUISITOS NÃO-FUNCIONAIS");

    // 16. O que são Requisitos Não-Funcionais?
    item = form.addMultipleChoiceItem();
    choices = [
      item.createChoice("Descrevem funcionalidades do sistema", false),
      item.createChoice("Descrevem qualidades e comportamentos do sistema", true),
      item.createChoice("Descrevem regras de negócio", false),
      item.createChoice("Descrevem casos de uso", false)
    ];
    item.setTitle("16. O que são Requisitos Não-Funcionais?")
        .setChoices(choices)
        .setPoints(1)
        .setRequired(true)
        .setFeedbackForCorrect(FormApp.createFeedback()
          .setText("✅ Correto! RNF descrevem COMO o sistema deve se comportar (qualidades como desempenho, segurança).")
          .build())
        .setFeedbackForIncorrect(FormApp.createFeedback()
          .setText("❌ RNF descrevem qualidades e comportamentos do sistema, não funcionalidades diretas.")
          .build());

    // 17. Quais são categorias de Requisitos Não-Funcionais? (Marque TODAS as corretas)
    item = form.addCheckboxItem();
    choices = [
      item.createChoice("Desempenho", true),
      item.createChoice("Segurança", true),
      item.createChoice("Usabilidade", true),
      item.createChoice("Confiabilidade", true),
      item.createChoice("Cadastro", false),
      item.createChoice("Relatórios", false)
    ];
    item.setTitle("17. Quais são categorias de Requisitos Não-Funcionais? (Marque TODAS as corretas)")
        .setChoices(choices)
        .setPoints(1)
        .setRequired(true);

    // 18. Qual das alternativas abaixo é um Requisito Não-Funcional?
    item = form.addMultipleChoiceItem();
    choices = [
      item.createChoice("O sistema deve gerar relatórios mensais", false),
      item.createChoice("O sistema deve ter tempo de resposta inferior a 2 segundos", true),
      item.createChoice("O sistema deve cadastrar produtos", false),
      item.createChoice("O sistema deve enviar notificações por e-mail", false)
    ];
    item.setTitle("18. Qual das alternativas abaixo é um Requisito Não-Funcional?")
        .setChoices(choices)
        .setPoints(1)
        .setRequired(true);

    // 19. "O sistema deve estar disponível 99,9% do tempo"
    item = form.addMultipleChoiceItem();
    choices = [
      item.createChoice("Desempenho", false),
      item.createChoice("Segurança", false),
      item.createChoice("Usabilidade", false),
      item.createChoice("Confiabilidade", true)
    ];
    item.setTitle('19. "O sistema deve estar disponível 99,9% do tempo" - Este é um RNF de qual categoria?')
        .setChoices(choices)
        .setPoints(1)
        .setRequired(true);

    // 20. Qual sufixo é usado para identificar Requisitos Não-Funcionais?
    item = form.addMultipleChoiceItem();
    choices = [
      item.createChoice("RF", false),
      item.createChoice("RN", false),
      item.createChoice("RNF", true),
      item.createChoice("REQ", false)
    ];
    item.setTitle("20. Qual sufixo é usado para identificar Requisitos Não-Funcionais?")
        .setChoices(choices)
        .setPoints(1)
        .setRequired(true);

    // ================================================================================
    // SEÇÃO 6: DIAGRAMA DE CASOS DE USO
    // ================================================================================
    Logger.log("Adicionando Seção 6...");
    form.addPageBreakItem().setTitle("SEÇÃO 6: DIAGRAMA DE CASOS DE USO");

    // 21. Quais são os elementos básicos de um Diagrama de Casos de Uso? (Marque TODAS)
    item = form.addCheckboxItem();
    choices = [
      item.createChoice("Atores", true),
      item.createChoice("Casos de Uso", true),
      item.createChoice("Sistema (limite)", true),
      item.createChoice("Classes", false),
      item.createChoice("Atributos", false)
    ];
    item.setTitle("21. Quais são os elementos básicos de um Diagrama de Casos de Uso? (Marque TODAS)")
        .setChoices(choices)
        .setPoints(1)
        .setRequired(true);

    // 22. Como os atores são representados em um Diagrama de Casos de Uso?
    item = form.addMultipleChoiceItem();
    choices = [
      item.createChoice("Boneco/figura de palito", true),
      item.createChoice("Retângulo", false),
      item.createChoice("Elipse", false),
      item.createChoice("Losango", false)
    ];
    item.setTitle("22. Como os atores são representados em um Diagrama de Casos de Uso?")
        .setChoices(choices)
        .setPoints(1)
        .setRequired(true);

    // 23. Como os casos de uso são representados?
    item = form.addMultipleChoiceItem();
    choices = [
      item.createChoice("Boneco/figura de palito", false),
      item.createChoice("Retângulo", false),
      item.createChoice("Elipse/oval", true),
      item.createChoice("Losango", false)
    ];
    item.setTitle("23. Como os casos de uso são representados?")
        .setChoices(choices)
        .setPoints(1)
        .setRequired(true);

    // 24. O que significa o relacionamento "include" em um Diagrama de Casos de Uso?
    item = form.addMultipleChoiceItem();
    choices = [
      item.createChoice("Um caso de uso sempre inclui outro caso de uso", true),
      item.createChoice("Um caso de uso pode ou não incluir outro", false),
      item.createChoice("Um ator herda características de outro ator", false),
      item.createChoice("Um caso de uso se comunica com outro", false)
    ];
    item.setTitle('24. O que significa o relacionamento "include" em um Diagrama de Casos de Uso?')
        .setChoices(choices)
        .setPoints(1)
        .setRequired(true)
        .setFeedbackForCorrect(FormApp.createFeedback()
          .setText("✅ Correto! 'Include' significa que um caso de uso SEMPRE executa outro caso de uso (obrigatório).")
          .build())
        .setFeedbackForIncorrect(FormApp.createFeedback()
          .setText("❌ 'Include' indica uma inclusão OBRIGATÓRIA. Pense: 'Para fazer login, sempre preciso validar senha'.")
          .build());

    // 25. O que significa o relacionamento "extend" em um Diagrama de Casos de Uso?
    item = form.addMultipleChoiceItem();
    choices = [
      item.createChoice("Um caso de uso sempre inclui outro caso de uso", false),
      item.createChoice("Um caso de uso pode estender outro caso de uso (comportamento opcional)", true),
      item.createChoice("Um ator herda características de outro ator", false),
      item.createChoice("Um caso de uso depende de outro", false)
    ];
    item.setTitle('25. O que significa o relacionamento "extend" em um Diagrama de Casos de Uso?')
        .setChoices(choices)
        .setPoints(1)
        .setRequired(true)
        .setFeedbackForCorrect(FormApp.createFeedback()
          .setText("✅ Correto! 'Extend' indica um comportamento OPCIONAL que pode ou não acontecer.")
          .build())
        .setFeedbackForIncorrect(FormApp.createFeedback()
          .setText("❌ 'Extend' é OPCIONAL. Exemplo: 'Ao fazer pedido, PODE aplicar cupom de desconto'.")
          .build());

    // 26. No Sistema NOA (Controle de Chaves), quem seriam os atores? (Marque TODAS)
    item = form.addCheckboxItem();
    choices = [
      item.createChoice("Aluno", true),
      item.createChoice("Docente", true),
      item.createChoice("Administrador (funcionário)", true),
      item.createChoice("Chave", false),
      item.createChoice("Sistema de Notificação", false)
    ];
    item.setTitle("26. No Sistema NOA (Controle de Chaves), quem seriam os atores? (Marque TODAS)")
        .setChoices(choices)
        .setPoints(1)
        .setRequired(true);

    // ================================================================================
    // SEÇÃO 7: MODELO ENTIDADE-RELACIONAMENTO (MER)
    // ================================================================================
    Logger.log("Adicionando Seção 7...");
    form.addPageBreakItem().setTitle("SEÇÃO 7: MODELO ENTIDADE-RELACIONAMENTO (MER)");

    // 27. O que é uma Entidade no MER?
    item = form.addMultipleChoiceItem();
    choices = [
      item.createChoice("Representação de algo do mundo real sobre o qual se deseja guardar informações (tabela)", true),
      item.createChoice("Relacionamento entre duas tabelas", false),
      item.createChoice("Campo de uma tabela", false),
      item.createChoice("Chave primária", false)
    ];
    item.setTitle("27. O que é uma Entidade no MER?")
        .setChoices(choices)
        .setPoints(1)
        .setRequired(true);

    // 28. O que são Atributos no MER?
    item = form.addMultipleChoiceItem();
    choices = [
      item.createChoice("Tabelas do banco de dados", false),
      item.createChoice("Características/propriedades de uma entidade (campos)", true),
      item.createChoice("Relacionamentos entre entidades", false),
      item.createChoice("Chaves estrangeiras", false)
    ];
    item.setTitle("28. O que são Atributos no MER?")
        .setChoices(choices)
        .setPoints(1)
        .setRequired(true);

    // 29. O que significa a cardinalidade "1:N" em um relacionamento?
    item = form.addMultipleChoiceItem();
    choices = [
      item.createChoice("Um para um", false),
      item.createChoice("Um para muitos", true),
      item.createChoice("Muitos para muitos", false),
      item.createChoice("Nenhum para um", false)
    ];
    item.setTitle('29. O que significa a cardinalidade "1:N" em um relacionamento?')
        .setChoices(choices)
        .setPoints(1)
        .setRequired(true);

    // 30. No relacionamento "Um CLIENTE faz vários PEDIDOS", qual é a cardinalidade?
    item = form.addMultipleChoiceItem();
    choices = [
      item.createChoice("1:1", false),
      item.createChoice("1:N", true),
      item.createChoice("N:M", false),
      item.createChoice("N:1", false)
    ];
    item.setTitle('30. No relacionamento "Um CLIENTE faz vários PEDIDOS", qual é a cardinalidade?')
        .setChoices(choices)
        .setPoints(1)
        .setRequired(true);

    // 31. Como se resolve um relacionamento N:M (muitos para muitos) no banco de dados?
    item = form.addMultipleChoiceItem();
    choices = [
      item.createChoice("Não é possível resolver", false),
      item.createChoice("Com chave primária composta", false),
      item.createChoice("Criando uma tabela associativa intermediária", true),
      item.createChoice("Eliminando o relacionamento", false)
    ];
    item.setTitle("31. Como se resolve um relacionamento N:M (muitos para muitos) no banco de dados?")
        .setChoices(choices)
        .setPoints(1)
        .setRequired(true)
        .setFeedbackForCorrect(FormApp.createFeedback()
          .setText("✅ Correto! Relacionamentos N:M sempre precisam de uma tabela intermediária/associativa.")
          .build())
        .setFeedbackForIncorrect(FormApp.createFeedback()
          .setText("❌ N:M sempre precisa de uma TABELA ASSOCIATIVA. Exemplo: Aluno_Curso para ligar Alunos e Cursos.")
          .build());

    // ================================================================================
    // SEÇÃO 8: METODOLOGIAS ÁGEIS
    // ================================================================================
    Logger.log("Adicionando Seção 8...");
    form.addPageBreakItem().setTitle("SEÇÃO 8: METODOLOGIAS ÁGEIS");

    // 32. Qual é o principal objetivo das Metodologias Ágeis?
    item = form.addMultipleChoiceItem();
    choices = [
      item.createChoice("Criar documentação extensa", false),
      item.createChoice("Entregar valor ao cliente de forma rápida e iterativa", true),
      item.createChoice("Seguir um plano rígido sem mudanças", false),
      item.createChoice("Eliminar a necessidade de testes", false)
    ];
    item.setTitle("32. Qual é o principal objetivo das Metodologias Ágeis?")
        .setChoices(choices)
        .setPoints(1)
        .setRequired(true)
        .setFeedbackForCorrect(FormApp.createFeedback()
          .setText("✅ Correto! Metodologias Ágeis focam em entregas rápidas e iterativas de valor ao cliente.")
          .build())
        .setFeedbackForIncorrect(FormApp.createFeedback()
          .setText("❌ Ágil = entregas rápidas e adaptação contínua, não documentação pesada ou planos rígidos.")
          .build());

    // 33. Quais são metodologias ágeis? (Marque TODAS as corretas)
    item = form.addCheckboxItem();
    choices = [
      item.createChoice("Scrum", true),
      item.createChoice("Kanban", true),
      item.createChoice("XP (Extreme Programming)", true),
      item.createChoice("Waterfall (Cascata)", false),
      item.createChoice("MER", false)
    ];
    item.setTitle("33. Quais são metodologias ágeis? (Marque TODAS as corretas)")
        .setChoices(choices)
        .setPoints(1)
        .setRequired(true);

    // 34. O que é uma Sprint no Scrum?
    item = form.addMultipleChoiceItem();
    choices = [
      item.createChoice("Reunião diária da equipe", false),
      item.createChoice("Período fixo de tempo (geralmente 2-4 semanas) para desenvolver funcionalidades", true),
      item.createChoice("Documento de requisitos", false),
      item.createChoice("Ferramenta de modelagem", false)
    ];
    item.setTitle("34. O que é uma Sprint no Scrum?")
        .setChoices(choices)
        .setPoints(1)
        .setRequired(true);

    // 35. Qual é a função do Product Owner no Scrum?
    item = form.addMultipleChoiceItem();
    choices = [
      item.createChoice("Gerenciar a equipe técnica", false),
      item.createChoice("Representar o cliente e priorizar o backlog", true),
      item.createChoice("Testar o software", false),
      item.createChoice("Codificar as funcionalidades", false)
    ];
    item.setTitle("35. Qual é a função do Product Owner no Scrum?")
        .setChoices(choices)
        .setPoints(1)
        .setRequired(true);

    // 36. O que é o Quadro Kanban?
    item = form.addMultipleChoiceItem();
    choices = [
      item.createChoice("Ferramenta visual para gerenciar fluxo de trabalho (To Do, Doing, Done)", true),
      item.createChoice("Diagrama de banco de dados", false),
      item.createChoice("Documento de requisitos", false),
      item.createChoice("Tipo de metodologia cascata", false)
    ];
    item.setTitle("36. O que é o Quadro Kanban?")
        .setChoices(choices)
        .setPoints(1)
        .setRequired(true);

    // ================================================================================
    // SEÇÃO 9: SISTEMA DE INFORMAÇÃO
    // ================================================================================
    Logger.log("Adicionando Seção 9...");
    form.addPageBreakItem().setTitle("SEÇÃO 9: SISTEMA DE INFORMAÇÃO");

    // 37. O que é um Sistema de Informação?
    item = form.addMultipleChoiceItem();
    choices = [
      item.createChoice("Sistema que coleta, armazena, processa e dissemina informações", true),
      item.createChoice("Qualquer programa de computador", false),
      item.createChoice("Banco de dados", false),
      item.createChoice("Rede de computadores", false)
    ];
    item.setTitle("37. O que é um Sistema de Informação?")
        .setChoices(choices)
        .setPoints(1)
        .setRequired(true);

    // 38. Qual é o fluxo básico de um Sistema de Informação?
    item = form.addMultipleChoiceItem();
    choices = [
      item.createChoice("Saída → Processamento → Entrada", false),
      item.createChoice("Entrada → Processamento → Saída", true),
      item.createChoice("Armazenamento → Entrada → Saída", false),
      item.createChoice("Processamento → Armazenamento → Entrada", false)
    ];
    item.setTitle("38. Qual é o fluxo básico de um Sistema de Informação?")
        .setChoices(choices)
        .setPoints(1)
        .setRequired(true);

    // ================================================================================
    // SEÇÃO 10: APLICAÇÃO PRÁTICA
    // ================================================================================
    Logger.log("Adicionando Seção 10...");
    form.addPageBreakItem().setTitle("SEÇÃO 10: APLICAÇÃO PRÁTICA");

    // 39. No contexto do Sistema NOA (Controle de Chaves), identifique a Regra de Negócio:
    item = form.addMultipleChoiceItem();
    choices = [
      item.createChoice("O sistema deve registrar empréstimos", false),
      item.createChoice("Docentes podem emprestar até 3 equipamentos simultaneamente", true),
      item.createChoice("O sistema deve ter interface web", false),
      item.createChoice("O sistema deve enviar notificações", false)
    ];
    item.setTitle("39. No contexto do Sistema NOA (Controle de Chaves), identifique a Regra de Negócio:")
        .setChoices(choices)
        .setPoints(1)
        .setRequired(true);

    // 40. No contexto do Sistema NOA, identifique o Requisito Funcional:
    item = form.addMultipleChoiceItem();
    choices = [
      item.createChoice("O sistema deve permitir cadastro de chaves", true),
      item.createChoice("O sistema deve responder em menos de 2 segundos", false),
      item.createChoice("Alunos podem emprestar apenas 1 chave", false),
      item.createChoice("O sistema deve ser disponível 24/7", false)
    ];
    item.setTitle("40. No contexto do Sistema NOA, identifique o Requisito Funcional:")
        .setChoices(choices)
        .setPoints(1)
        .setRequired(true);

    // 41. No contexto do Sistema NOA, identifique o Requisito Não-Funcional:
    item = form.addMultipleChoiceItem();
    choices = [
      item.createChoice("O sistema deve registrar devoluções", false),
      item.createChoice("Prazo máximo de empréstimo é 7 dias", false),
      item.createChoice("O sistema deve ser acessível para pessoas com deficiência", true),
      item.createChoice("O sistema deve gerar relatórios", false)
    ];
    item.setTitle("41. No contexto do Sistema NOA, identifique o Requisito Não-Funcional:")
        .setChoices(choices)
        .setPoints(1)
        .setRequired(true);

    // ================================================================================
    // SEÇÃO 11: REFLEXÃO FINAL
    // ================================================================================
    Logger.log("Adicionando Seção 11...");
    form.addPageBreakItem().setTitle("SEÇÃO 11: REFLEXÃO FINAL");

    // 42. Em uma escala de 1 a 5, como você avalia sua compreensão sobre Regras de Negócio?
    // NOTA: Esta questão NÃO vale pontos - é apenas autoavaliação
    item = form.addMultipleChoiceItem();
    choices = [
      item.createChoice("1 - Não entendi nada"),
      item.createChoice("2 - Entendi pouco"),
      item.createChoice("3 - Entendi mais ou menos"),
      item.createChoice("4 - Entendi bem"),
      item.createChoice("5 - Domino completamente")
    ];
    item.setTitle("42. Em uma escala de 1 a 5, como você avalia sua compreensão sobre Regras de Negócio?")
        .setChoices(choices)
        .setRequired(true);
    // NÃO definir .setPoints() - esta questão não vale pontos

    // 43. Em uma escala de 1 a 5, como você avalia sua compreensão sobre Requisitos (RF e RNF)?
    // NOTA: Esta questão NÃO vale pontos - é apenas autoavaliação
    item = form.addMultipleChoiceItem();
    choices = [
      item.createChoice("1 - Não entendi nada"),
      item.createChoice("2 - Entendi pouco"),
      item.createChoice("3 - Entendi mais ou menos"),
      item.createChoice("4 - Entendi bem"),
      item.createChoice("5 - Domino completamente")
    ];
    item.setTitle("43. Em uma escala de 1 a 5, como você avalia sua compreensão sobre Requisitos (RF e RNF)?")
        .setChoices(choices)
        .setRequired(true);
    // NÃO definir .setPoints() - esta questão não vale pontos

    // 44. Em uma escala de 1 a 5, como você avalia sua compreensão sobre Diagrama de Casos de Uso?
    // NOTA: Esta questão NÃO vale pontos - é apenas autoavaliação
    item = form.addMultipleChoiceItem();
    choices = [
      item.createChoice("1 - Não entendi nada"),
      item.createChoice("2 - Entendi pouco"),
      item.createChoice("3 - Entendi mais ou menos"),
      item.createChoice("4 - Entendi bem"),
      item.createChoice("5 - Domino completamente")
    ];
    item.setTitle("44. Em uma escala de 1 a 5, como você avalia sua compreensão sobre Diagrama de Casos de Uso?")
        .setChoices(choices)
        .setRequired(true);
    // NÃO definir .setPoints() - esta questão não vale pontos

    // 45. Qual conteúdo você gostaria que fosse revisado com mais atenção? (Resposta aberta)
    // NOTA: Esta questão NÃO vale pontos - é apenas feedback
    form.addParagraphTextItem()
      .setTitle("45. Qual conteúdo você gostaria que fosse revisado com mais atenção? (Resposta aberta)")
      .setRequired(false); // Deixando como opcional - NÃO vale pontos

    // 46. Você tem alguma dúvida específica sobre os conteúdos ministrados até agora? (Resposta aberta)
    // NOTA: Esta questão NÃO vale pontos - é apenas feedback
    form.addParagraphTextItem()
      .setTitle("46. Você tem alguma dúvida específica sobre os conteúdos ministrados até agora? (Resposta aberta)")
      .setRequired(false); // Deixando como opcional - NÃO vale pontos

    // ================================================================================
    // FINALIZAÇÃO
    // ================================================================================
    Logger.log("Formulário criado com sucesso!");
    Logger.log("Link para responder: " + form.getPublishedUrl());
    Logger.log("Link para editar: " + form.getEditUrl());

  } catch (e) {
    Logger.log("Ocorreu um erro: " + e.message);
    Logger.log("Stack: " + e.stack);
  }
}

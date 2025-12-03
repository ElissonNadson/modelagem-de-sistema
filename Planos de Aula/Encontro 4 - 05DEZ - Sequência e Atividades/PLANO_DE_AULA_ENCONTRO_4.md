# PLANO DE AULA - ENCONTRO 4
## Diagrama de Sequência (Aprofundamento) + Diagrama de Atividades

**Curso:** Técnico em Desenvolvimento de Sistemas  
**UC:** Modelagem de Sistemas | **Módulo:** II  
**Carga Horária:** 4h/aula | **Data:** 05/12/2025 (Quinta-feira)  
**Docente:** Elisson Nadson

---

## CONTEXTO

Este é o **quarto encontro** da sequência final. Até agora, a turma estudou:
- **Encontro 1 (13/11):** Apresentação, diagnóstico e revisão
- **Encontro 2 (14/11):** Diagrama de Classes Parte 1 (estrutura, relacionamentos)
- **Encontro 3 (04/12):** Diagrama de Classes Parte 2 (herança, interfaces) + Introdução ao Diagrama de Sequência

Os alunos já dominam:
- Estrutura e relacionamentos em Diagrama de Classes
- Herança, classes abstratas, interfaces, polimorfismo
- Fundamentos de Diagrama de Sequência (objetos, mensagens, linhas de vida)

Hoje **aprofundaremos o Diagrama de Sequência** com conceitos avançados (mensagens síncronas/assíncronas, fragmentos) e introduziremos o **Diagrama de Atividades**, fundamental para modelar processos de negócio e fluxos algorítmicos.

---

## OBJETIVO GERAL

Capacitar os alunos a criar Diagramas de Sequência completos e avançados, compreender diferentes tipos de mensagens e fragmentos, e introduzir o Diagrama de Atividades como ferramenta para modelar fluxos de trabalho, decisões, paralelismo e processos de negócio.

---

## CAPACIDADES A DESENVOLVER

### Capacidades Técnicas:
- **CT1:** Distinguir e aplicar mensagens síncronas e assíncronas
- **CT2:** Utilizar fragmentos em Diagramas de Sequência (alt, loop, opt)
- **CT3:** Modelar interações complexas entre objetos
- **CT4:** Criar Diagramas de Atividades básicos e intermediários
- **CT5:** Representar fluxos sequenciais, decisões e condições
- **CT6:** Modelar paralelismo e concorrência (fork/join)
- **CT7:** Utilizar raias (swimlanes) para organizar responsabilidades
- **CT8:** Integrar Diagramas de Sequência e Atividades para documentar sistemas

### Capacidades Socioemocionais:
- **CSE1:** Demonstrar pensamento analítico na decomposição de processos
- **CSE2:** Aplicar raciocínio lógico em fluxos condicionais
- **CSE3:** Trabalhar colaborativamente em modelagem de cenários complexos
- **CSE4:** Demonstrar organização na representação de processos

---

## CONHECIMENTOS RELACIONADOS

### 1. Diagrama de Sequência - Conceitos Avançados

#### 1.1 Tipos de Mensagens
- **Síncrona (→):** Remetente espera resposta antes de continuar
  - Notação: Seta cheia
  - Exemplo: chamar método que retorna valor
  
- **Assíncrona (→):** Remetente não espera resposta, continua imediatamente
  - Notação: Seta aberta
  - Exemplo: enviar email, notificação push
  
- **Retorno (←):** Resposta de uma mensagem síncrona
  - Notação: Seta tracejada
  - Pode ser implícita (não desenhar) ou explícita
  
- **Criação:** Mensagem que cria novo objeto
  - Seta apontando para novo objeto
  
- **Destruição:** Marca fim de existência do objeto
  - Símbolo: X no fim da linha de vida

#### 1.2 Fragmentos (Combined Fragments)
- **alt (alternative):** Condicional (if-else)
  - Representa escolha entre fluxos alternativos
  - Exemplo: Se login válido → continuar, Senão → erro
  
- **opt (optional):** Condicional opcional (if)
  - Executa apenas se condição for verdadeira
  - Exemplo: Se item em estoque → adicionar ao carrinho
  
- **loop:** Repetição
  - Executa bloco N vezes ou enquanto condição for verdadeira
  - Exemplo: Para cada item do pedido → calcular subtotal
  
- **par (parallel):** Execução paralela
  - Fragmentos executam simultaneamente
  
- **ref (reference):** Referência a outro diagrama
  - Evita repetição, mantém diagramas limpos

### 2. Diagrama de Atividades - Fundamentos

#### 2.1 Objetivo
- Modelar fluxo de trabalho (workflow)
- Representar processos de negócio
- Mostrar algoritmos e lógica
- Documentar comportamento de métodos/casos de uso

#### 2.2 Componentes Principais

**Estado Inicial:** ● (círculo preto)
- Início do fluxo

**Atividade/Ação:** □ (retângulo arredondado)
- Representa uma tarefa/ação
- Exemplo: "Validar CPF", "Calcular Total"

**Fluxo de Controle:** → (seta)
- Conecta atividades
- Indica sequência

**Decisão (Decision Node):** ◇ (losango)
- Representa escolha/condição
- Saídas: [condição verdadeira], [condição falsa]
- Exemplo: "Estoque disponível?"

**Merge:** ◇ (losango)
- Unifica fluxos alternativos
- Múltiplas entradas, uma saída

**Fork (Divisão):** ═══ (barra horizontal grossa)
- Inicia execução paralela
- 1 entrada, N saídas

**Join (União):** ═══ (barra horizontal grossa)
- Sincroniza execução paralela
- N entradas, 1 saída

**Estado Final:** ◎ (círculo com borda)
- Fim do fluxo

**Swimlanes (Raias):** Divisões verticais/horizontais
- Organiza atividades por responsável
- Exemplo: Raias para Cliente, Sistema, Funcionário

#### 2.3 Boas Práticas
- Nomear atividades com verbos (ação)
- Manter fluxo claro e legível
- Usar decisões para condicionais
- Indicar claramente início e fim
- Usar raias para clarificar responsabilidades

---

## CRONOGRAMA DETALHADO

### MOMENTO 1: Revisão e Correção (25min)

**Objetivos:**
- Revisar Diagrama de Sequência básico
- Corrigir atividades para casa
- Esclarecer dúvidas

**Atividades:**

**1.1 Revisão Rápida (10min)**
Projetar slide resumindo Diagrama de Sequência:
- Objetos/Atores (retângulos no topo)
- Linhas de vida (tracejadas verticais)
- Mensagens (setas horizontais)
- Ativação (retângulos finos)
- Tempo flui de cima para baixo

**Perguntas rápidas:**
- Qual a diferença entre Diagrama de Classes e Sequência?
- O que representa uma linha de vida?
- Como o tempo é representado?

**1.2 Correção de Atividades (15min)**
- Selecionar 2-3 alunos para apresentar Diagrama de Sequência (Login NOA)
- Feedback coletivo
- Discutir variações e soluções

---

### MOMENTO 2: Diagrama de Sequência Avançado - Mensagens (30min)

**Objetivos:**
- Diferenciar mensagens síncronas e assíncronas
- Compreender quando usar cada tipo
- Aplicar em exemplos práticos

**Atividades:**

**2.1 Tipos de Mensagens (15min)**

**Mensagem Síncrona:**
```
Cliente          Sistema
   │  ──validar()──>  ┌─┐
   │                  │ │ (processa)
   │  <──resultado──  └─┘
   │  (espera aqui)
```
- Remetente **bloqueia** e espera resposta
- Seta cheia: →
- Exemplo: consulta banco de dados, cálculo matemático

**Mensagem Assíncrona:**
```
Cliente          Sistema
   │  ─-enviarEmail()→  │
   │  (continua)        │
   │                    │ (processa em background)
   │                    │
```
- Remetente **não espera**, continua imediatamente
- Seta aberta: →
- Exemplo: enviar notificação, log, fila de mensagens

**Retorno:**
```
   │  ──metodo()──>  │
   │                 │
   │  <--resultado-- │ (tracejada)
```
- Resposta de mensagem síncrona
- Pode ser implícita (não desenhar sempre)

**Criação:**
```
   │  ──new()──> ●────┐
                      │ NovoObjeto
```
- Cria novo objeto durante execução

**Destruição:**
```
   │
   │  ──destroy()──> │
                     X (fim da linha de vida)
```

**2.2 Exemplo Prático - Sistema NOA (15min)**

**Cenário:** Solicitação de chave com notificação

```
Aluno    Sistema    Funcionário    Email
  │         │            │          │
  │─solicitar()→         │          │
  │         │            │          │
  │         │─validar()→─┐          │
  │         │           │           │
  │         │←──ok──────┘           │
  │         │                       │
  │         │─registrar()→          │
  │         │            │          │
  │         │←──salvo────┘          │
  │         │                       │
  │         │─-enviar()→───→───→───→│ (assíncrona!)
  │         │  (não espera email)   │
  │         │                       │
  │←sucesso─│                       │
  │         │                       │
                        (email enviado em background)
```

**Discussão:**
- Por que `enviar()` é assíncrona?
- O que aconteceria se fosse síncrona?
- Quando usar cada tipo?

---

### MOMENTO 3: Fragmentos em Diagrama de Sequência (35min)

**Objetivos:**
- Compreender fragmentos (alt, opt, loop)
- Aplicar em cenários condicionais e iterativos

**Atividades:**

**3.1 Fragmento ALT - Alternative (12min)**

**Conceito:** Condicional (if-else)

**Notação:**
```
┌─ alt ──────────────────────────┐
│ [condição verdadeira]          │
│   Objeto1 → Objeto2: ação1     │
├────────────────────────────────┤
│ [condição falsa]               │
│   Objeto1 → Objeto2: ação2     │
└────────────────────────────────┘
```

**Exemplo - Login NOA:**
```
┌─ alt ──────────────────────────────────┐
│ [credenciais válidas]                  │
│   Sistema → Usuario: autenticar()      │
│   Sistema → Interface: exibirDashboard()│
├────────────────────────────────────────┤
│ [credenciais inválidas]                │
│   Sistema → Interface: exibirErro()    │
└────────────────────────────────────────┘
```

**3.2 Fragmento OPT - Optional (8min)**

**Conceito:** Condicional opcional (if, sem else)

**Notação:**
```
┌─ opt ──────────────────────────┐
│ [condição]                     │
│   Objeto1 → Objeto2: ação      │
└────────────────────────────────┘
```

**Exemplo - Multa por Atraso:**
```
┌─ opt ───────────────────────────────┐
│ [devolução atrasada]                │
│   Sistema → Emprestimo: calcularMulta()│
│   Sistema → Aluno: notificarMulta() │
└─────────────────────────────────────┘
```

**3.3 Fragmento LOOP (8min)**

**Conceito:** Repetição

**Notação:**
```
┌─ loop ─────────────────────────┐
│ [para cada item]               │
│   Sistema → Item: processar()  │
└────────────────────────────────┘
```

**Exemplo - Carrinho de Compras:**
```
┌─ loop ─────────────────────────────────┐
│ [para cada produto no carrinho]        │
│   Carrinho → Produto: obterPreco()     │
│   Carrinho → Carrinho: somarTotal()    │
└────────────────────────────────────────┘
```

**3.4 Prática Rápida em Duplas (7min)**

**Tarefa:** Adicionar fragmentos ao diagrama de login do Sistema NOA

**Requisitos:**
- Usar `alt` para credenciais válidas/inválidas
- Usar `opt` para "Se usuário esqueceu senha, oferecer recuperação"
- Desenhar rápido no papel ou Draw.io

---

### INTERVALO (15min)

---

### MOMENTO 4: Prática Integrada - Sequência Completa (30min)

**Objetivos:**
- Consolidar Diagrama de Sequência avançado
- Modelar fluxo completo do Sistema NOA

**Atividade:**

**4.1 Apresentação do Cenário (5min)**

**Fluxo Completo: Retirada e Devolução de Chave no Sistema NOA**

**Etapas:**
1. Aluno faz login
2. Aluno solicita chave de sala específica
3. Sistema verifica disponibilidade
4. Se disponível → Sistema registra empréstimo, notifica Funcionário
5. Funcionário entrega chave fisicamente
6. (Tempo passa...)
7. Aluno retorna para devolver chave
8. Funcionário recebe chave
9. Sistema verifica atraso
10. Se atrasado → Sistema calcula multa, notifica Aluno
11. Sistema registra devolução
12. Sistema atualiza status da chave (disponível)

**4.2 Modelagem Colaborativa (20min)**

Projetar Draw.io e construir diagrama junto com a turma:

**Objetos:**
- Aluno
- Interface
- Sistema
- BancoDeDados
- Funcionário
- Chave
- Email (para notificações)

**Diagrama (simplificado):**
```
Aluno  Interface  Sistema   BD  Funcionário Chave Email
  │       │         │        │       │        │    │
  │──login()→       │        │       │        │    │
  │       │─validar()→       │       │        │    │
  │       │         │──consultar()→  │        │    │
  │       │         │←─resultado─┘   │        │    │
┌─alt────────────────────────────────────────────────┐
││[válido]                                           │
││      │←─sucesso─│                                 │
││      │         │                                  │
││      │─solicitar(sala)→                           │
││      │         │──verificar()──────→              │
││      │         │←─disponível───────┘              │
││      │         │─-notificar()────→  │             │
││      │         │                    │             │
││      │         │──registrar()→      │             │
││      │         │←─ok────────┘       │             │
│├──────────────────────────────────────────────────┤
││[inválido]                                         │
││      │←─erro────│                                 │
│└──────────────────────────────────────────────────┘
│       │         │                                  │
│       │         │    ... (tempo passa) ...         │
│       │         │                                  │
│─devolver()→     │                                  │
│       │─registrar()→                               │
│       │         │──verificarAtraso()→              │
│       │         │←─resultado────────┘              │
┌─opt────────────────────────────────────────────────┐
││[há atraso]                                        │
││      │         │──calcularMulta()→                │
││      │         │←─valor────────┘                  │
││      │         │─-notificar()──────────→          │ (assíncrono)
│└──────────────────────────────────────────────────┘
│       │         │──atualizarStatus()─────→         │
│       │←─OK─────│                                  │
```

**4.3 Discussão (5min)**
- Onde usar fragmentos?
- Mensagens síncronas vs assíncronas?
- Como melhorar o diagrama?

---

### MOMENTO 5: Introdução ao Diagrama de Atividades (40min)

**Objetivos:**
- Compreender objetivo do Diagrama de Atividades
- Identificar componentes principais
- Diferenciar de Diagrama de Sequência

**Atividades:**

**5.1 Contextualização (10min)**

**Por que Diagrama de Atividades?**

| Diagrama de Sequência | Diagrama de Atividades |
|-----------------------|------------------------|
| Foco em OBJETOS | Foco em ATIVIDADES |
| Interação entre objetos | Fluxo de trabalho |
| Linha do tempo explícita | Sequência lógica |
| Melhor para: APIs, protocolos | Melhor para: processos, algoritmos |

**Exemplo:**
- **Sequência:** Como objetos interagem no login (Aluno, Sistema, BD)
- **Atividades:** Processo de fazer login (validar, autenticar, redirecionar)

**Quando usar Diagrama de Atividades:**
- Modelar processo de negócio
- Documentar workflow
- Representar algoritmo/lógica
- Mostrar fluxo de um caso de uso
- Identificar pontos de decisão

**5.2 Componentes Básicos (15min)**

**1. Estado Inicial e Final:**
```
● (início)  →  [atividades]  →  ◎ (fim)
```

**2. Atividade (Ação):**
```
┌─────────────────┐
│ Validar CPF     │ (retângulo arredondado)
└─────────────────┘
```
- Nome: verbo no infinitivo
- Representa tarefa/ação

**3. Fluxo de Controle:**
```
Atividade1  →  Atividade2  →  Atividade3
```
- Seta indica sequência

**4. Decisão (Decision Node):**
```
        ◇
       / \
[sim] /   \ [não]
     /     \
Ação1     Ação2
     \     /
      \   /
        ◇ (merge)
```
- Losango
- Representa condicional (if)
- Saídas rotuladas: [condição]

**5. Fork e Join (Paralelismo):**
```
      Ação1
        │
      ═════ (fork - divisão)
      │   │
    Ação2 Ação3 (executam em paralelo)
      │   │
      ═════ (join - união)
        │
      Ação4
```
- Barra horizontal grossa
- Fork: inicia execução paralela
- Join: sincroniza (espera todas terminarem)

**5.3 Exemplo Completo (15min)**

**Processo: Retirada de Chave - Sistema NOA**

```
        ●
        │
   ┌────────────┐
   │Fazer Login │
   └────────────┘
        │
        ◇ [Autenticado?]
       /│\
  [não]/  \[sim]
      /    \
┌─────────┐ \
│Exibir   │  │
│  Erro   │  │
└─────────┘  │
      │      │
      ◎      │
             │
   ┌─────────────────┐
   │Selecionar Sala  │
   └─────────────────┘
             │
   ┌─────────────────────┐
   │Verificar Disponib.  │
   └─────────────────────┘
             │
             ◇ [Disponível?]
            /│\
       [não]/ │\[sim]
           /  │ \
┌──────────┐  │  \
│Informar  │  │   │
│Indisponi.│  │   │
└──────────┘  │   │
      │       │   │
      ◎       │   │
              │   │
              │  ┌────────────────┐
              │  │Registrar Emprest│
              │  └────────────────┘
              │          │
              │  ┌────────────────┐
              │  │Notificar Func. │
              │  └────────────────┘
              │          │
              │  ┌────────────────┐
              │  │Confirmar Sucesso│
              │  └────────────────┘
              │          │
              └──────────◎
```

**Discussão:**
- Decisões: Autenticado? Disponível?
- Fluxos alternativos claros
- Início e fim bem definidos

---

### MOMENTO 6: Prática - Diagrama de Atividades (35min)

**Objetivos:**
- Criar Diagramas de Atividades autônomos
- Aplicar decisões e fluxos

**Atividade:**

**6.1 Exercício em Duplas (25min)**

**Cenário:** Processo de Devolução de Chave (Sistema NOA)

**Descrição:**
1. Aluno chega ao NOA
2. Aluno entrega chave ao Funcionário
3. Funcionário verifica número da chave
4. Sistema registra devolução
5. Sistema calcula tempo de uso
6. SE houver atraso:
   - Sistema calcula multa
   - Sistema notifica Aluno sobre multa
   - Aluno pode pagar multa OU contestar
7. SENÃO:
   - Sistema finaliza empréstimo
8. Sistema atualiza status da chave (disponível)
9. Fim

**Tarefa:**
- Criar Diagrama de Atividades completo
- Incluir: início, atividades, decisão (atraso?), merge, fim
- Usar notação UML correta
- Desenhar no Draw.io ou papel

**6.2 Socialização (10min)**
- 2-3 duplas apresentam seus diagramas
- Discussão coletiva: soluções diferentes, pontos de melhoria

---

### MOMENTO 7: Fechamento e Orientações (20min)

**Atividades:**

**7.1 Recapitulação (10min)**

**O que aprendemos hoje:**

**Diagrama de Sequência Avançado:**
- ✅ Mensagens síncronas (→) vs assíncronas (→)
- ✅ Fragmentos: alt (if-else), opt (if), loop (repetição)
- ✅ Modelagem de fluxos complexos
- ✅ Prática completa: Sistema NOA

**Diagrama de Atividades:**
- ✅ Modela fluxo de trabalho/processo
- ✅ Componentes: início (●), atividades, decisão (◇), fim (◎)
- ✅ Fork/Join para paralelismo
- ✅ Diferença de Diagrama de Sequência

**Comparação:**
| Sequência | Atividades |
|-----------|------------|
| Objetos interagindo | Fluxo de tarefas |
| Tempo explícito | Sequência lógica |
| APIs, protocolos | Processos, workflows |

**7.2 Tarefa para Casa (7min)**

**Atividade Individual:**

**Criar 2 Diagramas para o Sistema NOA:**

**1. Diagrama de Sequência: Processo de Reserva de Sala**
- **Cenário:** Professor reserva sala para aula futura
- **Objetos:** Professor, Sistema, BancoDeDados, Agenda
- **Fluxo:**
  1. Professor faz login
  2. Professor seleciona sala e data/hora
  3. Sistema verifica disponibilidade na agenda
  4. SE disponível → registra reserva, envia confirmação
  5. SENÃO → informa conflito, sugere alternativas
- **Requisitos:** Usar fragmento `alt`, pelo menos 4 objetos, mensagens síncronas

**2. Diagrama de Atividades: Processo Completo de Empréstimo de Chave**
- **Processo:** Desde login até entrega física da chave
- **Incluir:**
  - Decisão: Autenticado?
  - Decisão: Chave disponível?
  - Paralelismo (fork/join): Registrar empréstimo + Notificar Funcionário (paralelo)
  - Atividades: Login, Selecionar Sala, Verificar, Registrar, Notificar, Entregar Chave
- **Requisitos:** Início, fim, pelo menos 2 decisões, 1 fork/join

**Entrega:**
- 2 diagramas em PDF ou PNG
- Arquivo: `SEU_NOME_Encontro4.pdf`
- Prazo: Até **12/12** (próxima aula)
- Pontuação: 10 pontos (5 cada)

**7.3 Próxima Aula (3min)**

**12/12 (Quinta):** Conectividade, Interoperabilidade, PDCA e Canvas

**Tópicos:**
- APIs e Web Services
- Integração de sistemas
- Ciclo PDCA aplicado à modelagem
- Business Model Canvas

**Mudança de foco:** Sairemos de diagramas UML para tópicos de gestão e integração!

**O que trazer:**
- Notebook
- Atividades para casa
- Mente aberta para novos conceitos

---

## ESTRATÉGIAS DE ENSINO

- **Exposição dialogada:** Momentos 2, 3, 5 (conceitos teóricos)
- **Demonstração prática:** Momento 4 (modelagem Sistema NOA)
- **Aprendizagem colaborativa:** Momentos 3.4, 6 (práticas em duplas)
- **Comparação e contraste:** Diferenças entre Sequência e Atividades
- **Modelagem incremental:** Construir diagramas progressivamente
- **Situação-problema:** Cenários reais do Sistema NOA
- **Progressão gradual:** Do simples (mensagens) ao complexo (fragmentos, paralelismo)

---

## CRITÉRIOS DE AVALIAÇÃO

### Avaliação Formativa (Observacional):
- Compreensão de tipos de mensagens
- Aplicação correta de fragmentos
- Capacidade de modelar processos
- Participação nas discussões
- Colaboração em duplas
- Uso adequado de ferramentas

### Indicadores de Aprendizagem:
- ✅ Diferencia mensagens síncronas de assíncronas
- ✅ Aplica fragmentos (alt, opt, loop) corretamente
- ✅ Cria Diagramas de Sequência complexos
- ✅ Cria Diagramas de Atividades com decisões e paralelismo
- ✅ Compreende diferença entre Sequência e Atividades

### Atividade Para Casa (Somativa):

**Diagrama de Sequência (5 pontos):**
- Objetos identificados: 1,0
- Fragmento `alt` correto: 1,5
- Mensagens e ordem: 2,0
- Notação UML: 0,5

**Diagrama de Atividades (5 pontos):**
- Decisões corretas: 1,5
- Fork/Join correto: 1,5
- Atividades e fluxo: 1,5
- Notação UML: 0,5

**Total:** 10,0 pontos

---

## RECURSOS NECESSÁRIOS

### Ambientes:
- Sala com projetor
- Laboratório de informática (ideal)

### Equipamentos:
- Computador com internet
- Projetor multimídia
- Quadro branco + marcadores
- Notebooks dos alunos

### Softwares:
- Draw.io (https://app.diagrams.net)
- Lucidchart (opcional)

### Materiais Didáticos:
- Slides (Sequência avançada + Atividades)
- Handout com notações UML
- Cenários para exercícios
- Exemplos de diagramas profissionais

---

## REFERÊNCIAS

1. **BEZERRA, Eduardo.** Princípios de Análise e Projeto de Sistemas com UML. 3ª ed. Elsevier, 2015. **Capítulos 7 e 8.**
2. **FOWLER, Martin.** UML Essencial. 3ª ed. Bookman, 2005. **Capítulos 4 e 11.**
3. **GUEDES, Gilleanes T. A.** UML 2: Uma Abordagem Prática. 3ª ed. Novatec, 2018.
4. **UML Activity Diagrams.** https://www.uml-diagrams.org/activity-diagrams.html
5. **UML Sequence Diagrams - Combined Fragments.** https://www.uml-diagrams.org/sequence-diagrams.html

---

## OBSERVAÇÕES E ADAPTAÇÕES

### Pontos de Atenção:
- Fragmentos podem confundir inicialmente
- Paralelismo (fork/join) é conceito abstrato
- Transição entre Sequência e Atividades exige mudança de perspectiva
- Garantir compreensão das diferenças entre os diagramas

### Estratégias de Diferenciação:
**Para alunos com dificuldade:**
- Templates de diagramas
- Exemplos extras anotados
- Acompanhamento próximo
- Simplificar cenários

**Para alunos avançados:**
- Propor fragmentos adicionais (par, break, critical)
- Desafiar a usar raias (swimlanes) em Atividades
- Modelar casos de uso mais complexos
- Integrar múltiplos diagramas

### Continuidade:
- Registrar conceitos com mais dúvidas
- Preparar transição para tópicos de gestão (PDCA, Canvas)
- Revisar todos os diagramas UML na aula de revisão (18/12)

---

**Elaboração:** Elisson Nadson  
**Data:** Novembro/2025  
**Versão:** 1.0  
**Status:** Plano completo para execução

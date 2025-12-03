# PLANO DE AULA - ENCONTRO 3
## UML - Diagrama de Classes (Parte 2) + Introdução ao Diagrama de Sequência

**Curso:** Técnico em Desenvolvimento de Sistemas  
**UC:** Modelagem de Sistemas | **Módulo:** II  
**Carga Horária:** 4h/aula | **Data:** 04/12/2025 (Quarta-feira)  
**Docente:** Elisson Nadson

---

## CONTEXTO

Este é o **terceiro encontro** da sequência final. Nos encontros anteriores:
- **Encontro 1 (13/11):** Apresentação, diagnóstico e revisão de Casos de Uso
- **Encontro 2 (14/11):** Diagrama de Classes Parte 1 (estrutura, relacionamentos básicos)

A turma já domina:
- Estrutura de classes (nome, atributos, métodos)
- Visibilidade (+, -, #, ~)
- Relacionamentos: associação, agregação, composição
- Multiplicidade

Hoje daremos continuidade ao Diagrama de Classes, aprofundando conceitos avançados como **herança, polimorfismo, classes abstratas e interfaces**. Também iniciaremos o estudo do **Diagrama de Sequência**, que modela interações dinâmicas entre objetos ao longo do tempo.

---

## OBJETIVO GERAL

Capacitar os alunos a criar Diagramas de Classes completos utilizando herança e generalização, compreender o conceito de polimorfismo, classes abstratas e interfaces, e introduzir o Diagrama de Sequência como ferramenta para modelar comportamento dinâmico de sistemas.

---

## CAPACIDADES A DESENVOLVER

### Capacidades Técnicas:
- **CT1:** Aplicar herança (generalização/especialização) em diagramas de classes
- **CT2:** Identificar e modelar classes abstratas
- **CT3:** Definir e utilizar interfaces em modelagem
- **CT4:** Compreender e aplicar polimorfismo
- **CT5:** Refinar diagramas de classes com conceitos avançados
- **CT6:** Criar Diagramas de Sequência básicos
- **CT7:** Identificar objetos, mensagens e linhas de vida em interações
- **CT8:** Modelar fluxos temporais de comunicação entre objetos

### Capacidades Socioemocionais:
- **CSE1:** Demonstrar raciocínio abstrato na identificação de hierarquias
- **CSE2:** Aplicar pensamento crítico na escolha entre herança e composição
- **CSE3:** Trabalhar colaborativamente na análise de cenários complexos
- **CSE4:** Demonstrar organização na documentação de modelos

---

## CONHECIMENTOS RELACIONADOS

### 1. Herança (Generalização/Especialização)
- **Conceito:** Mecanismo onde uma classe (subclasse) herda características de outra (superclasse)
- **Notação:** Seta com triângulo vazio apontando para a superclasse
- **Terminologia:**
  - Superclasse = classe pai = classe base = generalização
  - Subclasse = classe filha = classe derivada = especialização
- **Benefícios:** Reutilização de código, hierarquia lógica, especialização
- **Exemplo:** Animal → Cachorro, Gato, Pássaro

### 2. Polimorfismo
- **Conceito:** Capacidade de objetos de classes diferentes responderem à mesma mensagem de formas distintas
- **Tipos:**
  - **Sobrescrita (override):** Subclasse redefine método da superclasse
  - **Sobrecarga (overload):** Múltiplos métodos com mesmo nome, parâmetros diferentes
- **Exemplo:** Método `emitirSom()` implementado diferentemente em Cachorro, Gato, Pássaro

### 3. Classes Abstratas
- **Conceito:** Classes que não podem ser instanciadas, servem apenas como modelo para subclasses
- **Notação:** Nome em *itálico* ou com `{abstract}`
- **Uso:** Quando a superclasse é muito genérica para ter instâncias concretas
- **Exemplo:** Classe `Forma` (abstrata) → Círculo, Quadrado, Triângulo (concretas)

### 4. Interfaces
- **Conceito:** Contrato que define métodos que classes devem implementar
- **Notação:** `<<interface>>` acima do nome ou retângulo com linha tracejada
- **Relacionamento:** Seta tracejada (realização)
- **Diferença de classe abstrata:** Interface não tem implementação, classe pode implementar múltiplas interfaces
- **Exemplo:** Interface `Pagável` → implementada por Funcionário, Fornecedor

### 5. Diagrama de Sequência - Fundamentos
- **Objetivo:** Modelar interações entre objetos ao longo do tempo
- **Componentes:**
  - **Objetos/Atores:** Retângulos no topo
  - **Linha de vida:** Linha tracejada vertical
  - **Mensagens:** Setas entre linhas de vida
  - **Ativação:** Retângulo fino sobre linha de vida
- **Eixos:** Horizontal (objetos), Vertical (tempo)
- **Tipos de mensagens:**
  - Síncrona (seta cheia): chamador espera resposta
  - Assíncrona (seta aberta): chamador não espera
  - Retorno (seta tracejada): resposta de volta

---

## CRONOGRAMA DETALHADO

### MOMENTO 1: Revisão e Correção de Atividades (30min)

**Objetivos:**
- Retomar conceitos da aula anterior
- Corrigir/discutir atividades para casa
- Esclarecer dúvidas pendentes

**Atividades:**

**1.1 Revisão Rápida (10min)**
- Projetar slide com resumo da Aula 2:
  - Estrutura de classe (nome, atributos, métodos)
  - Visibilidade: + (public), - (private), # (protected)
  - Associação (linha), Agregação (◇), Composição (◆)
  - Multiplicidade: 1, 0..1, 0..*, 1..*

**Perguntas rápidas para a turma:**
- Qual a diferença entre agregação e composição?
- O que significa a multiplicidade `1..*`?
- Por que atributos costumam ser privados?

**1.2 Apresentação de Atividades (15min)**
- Selecionar 3 alunos para apresentar rapidamente suas atividades (Sistema de Locação, Estoque ou Consultas Médicas)
- Cada apresentação: 3-4 minutos
- Feedback coletivo: pontos positivos e melhorias

**1.3 Discussão de Dúvidas Comuns (5min)**
- Abordar erros frequentes observados nas atividades
- Esclarecer dúvidas recorrentes
- Reforçar boas práticas

---

### MOMENTO 2: Herança e Generalização (40min)

**Objetivos:**
- Compreender conceito de herança
- Identificar hierarquias de classes
- Aplicar notação UML para herança

**Atividades:**

**2.1 Introdução à Herança (15min)**

**Conceito:**
"Herança permite que uma classe (filha) receba atributos e métodos de outra classe (pai), promovendo reutilização e especialização."

**Exemplo do Cotidiano:**
```
         Veículo
        /   |   \
    Carro Moto Caminhão
```

**Classe Pai: Veículo**
- Atributos comuns: marca, modelo, ano, cor
- Métodos comuns: ligar(), desligar(), acelerar()

**Classes Filhas:**
- **Carro:** adiciona `numeroPortas`, `temArCondicionado`
- **Moto:** adiciona `cilindradas`, `tipoGuidao`
- **Caminhão:** adiciona `capacidadeCarga`, `numeroEixos`

**Notação UML:**
```
         ┌──────────────┐
         │   Veículo    │
         ├──────────────┤
         │ - marca      │
         │ - modelo     │
         └──────────────┘
                △
                │ (seta com triângulo vazio)
         ┌──────┼──────┐
         │      │      │
    ┌────────┐ │ ┌─────────┐
    │ Carro  │ │ │  Moto   │
    └────────┘ │ └─────────┘
               │
          ┌─────────┐
          │Caminhão │
          └─────────┘
```

**Terminologia:**
- **Superclasse/Classe Pai/Classe Base:** Veículo
- **Subclasse/Classe Filha/Classe Derivada:** Carro, Moto, Caminhão
- **Generalização:** Processo de identificar características comuns (Veículo)
- **Especialização:** Processo de adicionar características específicas (Carro, Moto)

**Benefícios:**
- ✅ Reutilização de código
- ✅ Organização hierárquica
- ✅ Manutenibilidade
- ✅ Extensibilidade

**2.2 Exemplo Aplicado - Sistema NOA (15min)**

**Contexto:** No Sistema NOA temos diferentes tipos de usuários: Aluno, Professor, Funcionário.

**Identificar características comuns:**
- Todos têm: id, nome, cpf, email, telefone
- Todos podem: autenticar(), atualizarDados()

**Solução com Herança:**

```
                ┌────────────────────┐
                │     Usuario        │  ← Superclasse
                ├────────────────────┤
                │ - id: int          │
                │ - nome: string     │
                │ - cpf: string      │
                │ - email: string    │
                ├────────────────────┤
                │ + autenticar()     │
                │ + atualizar()      │
                └────────────────────┘
                         △
                         │
           ┌─────────────┼─────────────┐
           │             │             │
    ┌──────────┐  ┌──────────┐  ┌───────────┐
    │  Aluno   │  │Professor │  │Funcionario│
    ├──────────┤  ├──────────┤  ├───────────┤
    │-matricula│  │-titulacao│  │ -setor    │
    │ -curso   │  │-area     │  │-matricula │
    ├──────────┤  ├──────────┤  ├───────────┤
    │+solicitar│  │+ministrar│  │+registrar │
    │ Chave()  │  │ Aula()   │  │Emprestimo│
    └──────────┘  └──────────┘  └───────────┘
```

**Vantagens:**
- Atributos comuns definidos apenas uma vez (em Usuario)
- Mudanças em dados de usuário afetam todas subclasses automaticamente
- Código mais organizado e manutenível

**2.3 Prática Rápida em Duplas (10min)**

**Tarefa:** Identificar hierarquia de herança

**Cenário:** Sistema de Funcionários de uma Empresa

**Classes:**
- Gerente
- Desenvolvedor
- Estagiário
- Diretor
- Analista

**Perguntas:**
1. Qual seria a superclasse?
2. Que atributos/métodos estariam na superclasse?
3. Que atributos/métodos seriam específicos de cada subclasse?

**Solução esperada:**
```
Superclasse: Funcionario
- Atributos comuns: id, nome, cpf, salario, dataAdmissao
- Métodos comuns: calcularSalario(), baterPonto()

Subclasses:
- Gerente: equipe, bonus, aprovarDespesas()
- Desenvolvedor: linguagens, tecnologias, commitarCodigo()
- Estagiário: supervisor, bolsa, entregar Relatorio()
- Diretor: area, gratificacao, aprovarOrcamento()
- Analista: especialidade, projetos, analisarRequisitos()
```

---

### INTERVALO (15min)

---

### MOMENTO 3: Classes Abstratas, Interfaces e Polimorfismo (45min)

**Objetivos:**
- Compreender classes abstratas
- Diferenciar classes abstratas de interfaces
- Entender polimorfismo

**Atividades:**

**3.1 Classes Abstratas (15min)**

**Problema:** E se a superclasse for genérica demais para ser instanciada?

**Exemplo:**
```java
Forma f = new Forma(); // Isso faz sentido?
```
Uma "Forma" genérica não tem significado concreto. Só fazem sentido formas específicas: Círculo, Quadrado, Triângulo.

**Solução: Classe Abstrata**

**Conceito:** Classe que não pode ser instanciada, serve apenas como modelo para subclasses.

**Notação UML:** Nome em *itálico* ou `{abstract}`

```
          ┌────────────────┐
          │    «Forma»     │  ← Classe abstrata
          ├────────────────┤
          │ - cor: string  │
          │ - x: double    │
          │ - y: double    │
          ├────────────────┤
          │ + calcularArea()│ ← Método abstrato (sem implementação)
          │ + desenhar()   │
          └────────────────┘
                  △
                  │
         ┌────────┼────────┐
         │        │        │
    ┌────────┐ ┌──────┐ ┌──────────┐
    │Círculo │ │Quadrado│ │Triângulo│
    ├────────┤ ├──────┤ ├──────────┤
    │ -raio  │ │ -lado│ │-base     │
    │        │ │      │ │-altura   │
    ├────────┤ ├──────┤ ├──────────┤
    │+calcular│ │+calcular│ │+calcular│
    │ Area() │ │Area()│ │Area()    │
    └────────┘ └──────┘ └──────────┘
```

**Características:**
- Não pode ser instanciada: `Forma f = new Forma();` ❌
- Pode ter métodos abstratos (sem implementação)
- Pode ter métodos concretos (com implementação)
- Subclasses DEVEM implementar métodos abstratos

**Quando usar:**
- Quando a superclasse é muito genérica
- Quando você quer forçar subclasses a implementarem certos métodos
- Quando há comportamento comum E específico

**3.2 Interfaces (15min)**

**Conceito:** Contrato que define quais métodos uma classe deve implementar, sem especificar COMO.

**Diferença de Classe Abstrata:**
| Classe Abstrata | Interface |
|-----------------|-----------|
| Pode ter atributos | Não tem atributos (só constantes) |
| Pode ter métodos implementados | Só métodos abstratos (Java 7) |
| Herança simples (1 pai) | Implementação múltipla (N interfaces) |
| Representa "É UM" | Representa "PODE FAZER" |

**Notação UML:**
- Estereótipo `<<interface>>`
- Seta tracejada com triângulo (realização)

**Exemplo:**

```
        ┌──────────────────┐
        │  <<interface>>   │
        │    Pagável       │
        ├──────────────────┤
        │ + calcularPagamento(): double │
        │ + realizarPagamento(): void   │
        └──────────────────┘
                  △
                  │ (seta tracejada)
         ┌────────┴────────┐
         │                 │
    ┌──────────────┐  ┌──────────────┐
    │ Funcionario  │  │ Fornecedor   │
    ├──────────────┤  ├──────────────┤
    │ - salario    │  │ - valorNota  │
    ├──────────────┤  ├──────────────┤
    │ + calcular   │  │ + calcular   │
    │   Pagamento()│  │   Pagamento()│
    └──────────────┘  └──────────────┘
```

**Quando usar:**
- Quando classes não relacionadas precisam compartilhar comportamento
- Quando você quer definir capacidades sem herança
- Quando precisa de "herança múltipla" de comportamentos

**Exemplos práticos:**
- Interface `Autenticável`: implementada por Usuario, API, Sistema
- Interface `Imprimível`: implementada por Relatório, Nota Fiscal, Boleto
- Interface `Exportável`: implementada por Dados, Planilha, Gráfico

**3.3 Polimorfismo (15min)**

**Conceito:** "Muitas formas". Capacidade de objetos de classes diferentes responderem à mesma mensagem de maneiras distintas.

**Exemplo Conceitual:**
```java
Animal animal1 = new Cachorro();
Animal animal2 = new Gato();
Animal animal3 = new Pássaro();

animal1.emitirSom(); // "Au au!"
animal2.emitirSom(); // "Miau!"
animal3.emitirSom(); // "Piu piu!"
```

Mesma mensagem (`emitirSom()`), comportamentos diferentes!

**Tipos:**

**1. Sobrescrita (Override):**
Subclasse redefine método da superclasse

```
Superclasse Animal:
  + emitirSom(): void

Subclasse Cachorro:
  + emitirSom(): void  ← Sobrescreve (override)
      implementação: print("Au au!")
```

**2. Sobrecarga (Overload):**
Métodos com mesmo nome, parâmetros diferentes

```
Classe Calculadora:
  + somar(a: int, b: int): int
  + somar(a: double, b: double): double
  + somar(a: int, b: int, c: int): int
```

**Benefício:**
- Flexibilidade
- Código genérico
- Extensibilidade

**Exemplo Sistema NOA:**
```
Usuario:
  + solicitarChave(sala: string): boolean

Aluno:
  + solicitarChave(sala: string): boolean
      ← Verifica se está matriculado, horário permitido

Professor:
  + solicitarChave(sala: string): boolean
      ← Verifica se tem aula agendada, permissão especial
```

---

### MOMENTO 4: Prática Integrada - Refinando Sistema NOA (35min)

**Objetivos:**
- Aplicar herança, classes abstratas e interfaces
- Refinar diagrama criado na Aula 2
- Consolidar conhecimentos

**Atividade:**

**4.1 Apresentação do Desafio (5min)**

Vamos **refinar o Diagrama de Classes do Sistema NOA** aplicando conceitos avançados:

**Requisitos adicionais:**
1. Usuario é classe abstrata (não existem usuários genéricos)
2. Criar interface `Notificável` (classes que podem receber notificações)
3. Implementar polimorfismo em `solicitarChave()`
4. Adicionar hierarquia: Aluno → AlunoRegular, AlunoMonitor

**4.2 Modelagem Colaborativa (25min)**

**Passo 1: Transformar Usuario em classe abstrata**
```
          ┌────────────────────┐
          │   «Usuario»        │  ← abstrata (itálico)
          ├────────────────────┤
          │ # id: int          │  ← protected (herança)
          │ # nome: string     │
          │ # cpf: string      │
          ├────────────────────┤
          │ + autenticar()     │
          │ + atualizar()      │
          │ + {abstract} solicitarChave() │ ← abstrato
          └────────────────────┘
```

**Passo 2: Criar interface Notificável**
```
     ┌───────────────────────┐
     │   <<interface>>       │
     │    Notificável        │
     ├───────────────────────┤
     │ + enviarNotificacao(msg: string): void │
     │ + receberNotificacao(): List<Notif>    │
     └───────────────────────┘
              △
              │ (implementam)
     ┌────────┼────────┐
     │        │        │
   Aluno  Professor  Funcionario
```

**Passo 3: Adicionar especialização de Aluno**
```
         ┌─────────────┐
         │    Aluno    │
         ├─────────────┤
         │ -matricula  │
         │ -curso      │
         └─────────────┘
                △
                │
         ┌──────┴──────┐
         │             │
   ┌───────────┐  ┌──────────┐
   │AlunoRegular│ │AlunoMonitor│
   ├───────────┤  ├──────────┤
   │ -turma    │  │-laboratorio│
   │           │  │-chavePermit│
   ├───────────┤  ├──────────┤
   │+solicitar │  │+abrirLab() │
   │ Chave()   │  │+fecharLab()│
   └───────────┘  └──────────┘
```

**Diagrama Final Refinado** (projetar na tela)

**4.3 Discussão (5min)**
- Por que Usuario é abstrata?
- Vantagens da interface Notificável?
- Como polimorfismo ajuda em `solicitarChave()`?

---

### MOMENTO 5: Introdução ao Diagrama de Sequência (40min)

**Objetivos:**
- Compreender objetivo do Diagrama de Sequência
- Identificar componentes principais
- Criar diagramas simples

**Atividades:**

**5.1 Contextualização (10min)**

**Por que mais um diagrama?**
- Diagrama de Classes: estrutura ESTÁTICA (classes, atributos, relacionamentos)
- Diagrama de Sequência: comportamento DINÂMICO (o que acontece ao longo do tempo)

**Exemplo:** Restaurante
- **Diagrama de Classes:** Cliente, Garçom, Cozinheiro, Pedido (estrutura)
- **Diagrama de Sequência:** Processo de fazer um pedido (sequência de ações)

**Quando usar Diagrama de Sequência:**
- Modelar caso de uso específico
- Entender fluxo de interações
- Documentar comunicação entre objetos
- Identificar gargalos de desempenho

**5.2 Componentes do Diagrama (15min)**

**1. Objetos/Atores:**
```
┌──────────┐    ┌──────────┐
│  :Cliente│    │ :Sistema │
└──────────┘    └──────────┘
     │               │
```
- Retângulos no topo
- Formato: `:NomeClasse` ou `nomeObjeto:NomeClasse`
- Representam participantes da interação

**2. Linha de Vida:**
```
┌──────────┐
│  :Cliente│
└──────────┘
     │  ← Linha tracejada vertical
     │
     │
```
- Tempo flui de cima para baixo
- Representa existência do objeto

**3. Mensagens:**
```
  Objeto1          Objeto2
     │ ──mensagem──> │
     │ <──resposta── │
```
- Seta horizontal entre linhas de vida
- Tipos:
  - **Síncrona:** ────> (seta cheia) - espera resposta
  - **Assíncrona:** ----> (seta aberta) - não espera
  - **Retorno:** <---- (seta tracejada) - resposta
  - **Criação:** ────> (seta para objeto novo)
  - **Destruição:** X (marca fim da linha de vida)

**4. Ativação (Foco de Controle):**
```
     │
     │ ──mensagem──>  ┌─┐
     │                │ │ ← Retângulo fino
     │ <──resposta──  └─┘
     │
```
- Retângulo fino sobre linha de vida
- Indica que objeto está processando

**5.3 Exemplo Completo (15min)**

**Cenário:** Aluno solicita chave no Sistema NOA

**Participantes:**
- Aluno
- Sistema
- Funcionário NOA
- Chave

**Fluxo:**
1. Aluno faz login
2. Sistema valida credenciais
3. Aluno solicita chave da sala
4. Sistema verifica disponibilidade
5. Sistema notifica Funcionário
6. Funcionário registra empréstimo
7. Funcionário entrega chave
8. Sistema confirma para Aluno

**Diagrama:**
```
Aluno     Sistema    Funcionário    Chave
  │          │            │           │
  │──login()─>│            │           │
  │          │            │           │
  │<─válido──│            │           │
  │          │            │           │
  │solicitar─>│            │           │
  │  Chave() │            │           │
  │          │            │           │
  │          │─verificar()─>          │
  │          │            │           │
  │          │<─disponível┘           │
  │          │            │           │
  │          │─notificar()─>          │
  │          │            │           │
  │          │            │─registrar()
  │          │            │           │
  │          │            │<─ok───────┘
  │          │            │           │
  │          │<─confirmado┘           │
  │          │            │           │
  │<─sucesso─│            │           │
  │          │            │           │
```

**Observações:**
- Tempo flui de cima para baixo
- Cada seta é uma mensagem (chamada de método)
- Retornos podem ser implícitos ou explícitos
- Mostra ordem temporal das interações

---

### MOMENTO 6: Prática Rápida - Diagrama de Sequência (20min)

**Objetivos:**
- Praticar criação de Diagrama de Sequência
- Consolidar aprendizado

**Atividade:**

**6.1 Exercício em Duplas (15min)**

**Cenário:** Devolução de Chave no Sistema NOA

**Descrição:**
1. Aluno retorna ao NOA para devolver chave
2. Funcionário recebe a chave
3. Sistema verifica se há atraso
4. Se houver atraso, Sistema calcula multa
5. Funcionário registra devolução
6. Sistema atualiza status da chave (disponível)
7. Se houver multa, Sistema notifica Aluno

**Tarefa:**
- Desenhar Diagrama de Sequência (papel ou Draw.io)
- Identificar objetos participantes
- Definir mensagens trocadas
- Indicar ordem temporal

**6.2 Socialização (5min)**
- 2 duplas apresentam seus diagramas
- Discutir variações e soluções

---

### MOMENTO 7: Fechamento e Orientações (15min)

**Atividades:**

**7.1 Recapitulação (7min)**

**O que aprendemos hoje:**

**Parte 1: Diagrama de Classes Avançado**
- ✅ Herança (generalização/especialização)
- ✅ Notação: seta com triângulo vazio (△)
- ✅ Classes Abstratas: não podem ser instanciadas
- ✅ Interfaces: contratos de comportamento
- ✅ Polimorfismo: mesma mensagem, comportamentos diferentes

**Parte 2: Diagrama de Sequência**
- ✅ Modela comportamento dinâmico
- ✅ Componentes: objetos, linhas de vida, mensagens, ativação
- ✅ Tempo flui de cima para baixo
- ✅ Mostra ordem temporal de interações

**Conceitos-chave:**
- Herança = "É UM" (Aluno É UM Usuario)
- Composição = "TEM UM" (Pedido TEM ItensPedido)
- Interface = "PODE FAZER" (Usuario PODE SER Notificável)

**7.2 Tarefa para Casa (5min)**

**Atividade Individual:**

**Parte 1: Diagrama de Classes com Herança**
Escolha UM dos sistemas:
1. Sistema de Loja Online (Produto → Livro, Eletrônico, Roupa)
2. Sistema Bancário (Conta → ContaCorrente, ContaPoupança, ContaSalário)
3. Sistema de Veículos (Veículo → Terrestre, Aquático, Aéreo)

**Requisitos:**
- Criar hierarquia com pelo menos 1 superclasse e 3 subclasses
- Definir atributos/métodos comuns (superclasse) e específicos (subclasses)
- Aplicar pelo menos 1 classe abstrata OU 1 interface
- Notação UML correta

**Parte 2: Diagrama de Sequência**
Modelar o processo de **Login no Sistema NOA**:
- Objetos: Aluno, Interface de Login, Sistema, Banco de Dados
- Fluxo: inserir credenciais, validar, consultar BD, retornar resultado

**Entrega:**
- 2 diagramas (Classes + Sequência)
- Formato: PDF ou PNG (Draw.io)
- Prazo: Até **05/12** (próxima aula)
- Pontuação: 10 pontos (5 cada diagrama)

**7.3 Próxima Aula (3min)**

**05/12 (Quinta):** Diagrama de Sequência (aprofundamento) + Diagrama de Atividades

**Tópicos:**
- Mensagens síncronas/assíncronas
- Fragmentos (alt, loop, opt)
- Diagrama de Atividades (fluxos, decisões, paralelismo)
- Modelagem de processos de negócio

**O que trazer:**
- Notebook
- Atividades para casa concluídas
- Dúvidas anotadas

---

## ESTRATÉGIAS DE ENSINO

- **Exposição dialogada:** Momentos 2, 3, 5 (herança, interfaces, sequência)
- **Correção participativa:** Momento 1 (atividades casa)
- **Aprendizagem colaborativa:** Momentos 2.3, 4, 6 (práticas em duplas)
- **Demonstração prática:** Momento 4 (refinamento Sistema NOA)
- **Analogias:** Exemplos do cotidiano (veículos, formas, animais)
- **Progressão gradual:** Revisão → conceitos simples → conceitos complexos → prática
- **Modelagem incremental:** Partir de diagrama básico e refinar progressivamente

---

## CRITÉRIOS DE AVALIAÇÃO

### Avaliação Formativa (Observacional):
- Compreensão de hierarquias de classes
- Capacidade de abstrair características comuns
- Identificação correta de relacionamentos
- Participação nas discussões
- Colaboração em atividades de dupla
- Uso adequado de ferramentas

### Indicadores de Aprendizagem:
- ✅ Identifica hierarquias de herança em cenários reais
- ✅ Aplica notação UML para herança corretamente
- ✅ Diferencia classes abstratas de interfaces
- ✅ Compreende polimorfismo
- ✅ Cria Diagramas de Sequência básicos
- ✅ Identifica objetos e mensagens em interações

### Atividade Para Casa (Somativa):
**Diagrama de Classes (5 pontos):**
- Hierarquia de herança: 2,0
- Atributos/métodos (comuns e específicos): 1,5
- Classe abstrata OU interface: 1,0
- Notação UML: 0,5

**Diagrama de Sequência (5 pontos):**
- Objetos identificados: 1,5
- Mensagens corretas: 2,0
- Ordem temporal: 1,0
- Notação UML: 0,5

**Total:** 10,0 pontos

---

## RECURSOS NECESSÁRIOS

### Ambientes:
- Sala de aula com projetor
- Laboratório de informática (ideal)

### Equipamentos:
- Computador do professor com internet
- Projetor multimídia
- Quadro branco + marcadores (cores diferentes para hierarquias)
- Notebooks dos alunos

### Softwares:
- Draw.io (https://app.diagrams.net)
- Lucidchart (opcional)
- StarUML (opcional)

### Materiais Didáticos:
- Slides da aula (Herança, Interfaces, Polimorfismo, Sequência)
- Handout com notações UML avançadas
- Exemplos de código mostrando herança (Java/Python)
- Cenários para exercícios práticos
- Atividades para casa (impressas ou digitais)

---

## REFERÊNCIAS

### Bibliográficas:
1. **BEZERRA, Eduardo.** Princípios de Análise e Projeto de Sistemas com UML. 3ª ed. Elsevier, 2015. **Capítulos 4 e 7.**
2. **FOWLER, Martin.** UML Essencial. 3ª ed. Bookman, 2005. **Capítulos 3 e 4.**
3. **GUEDES, Gilleanes T. A.** UML 2: Uma Abordagem Prática. 3ª ed. Novatec, 2018.
4. **BOOCH, Grady; RUMBAUGH, James; JACOBSON, Ivar.** UML: Guia do Usuário. 2ª ed. Elsevier, 2006.
5. **SENAI.** Metodologia SENAI de Educação Profissional. SENAI/DN, 2019.

### Online:
6. **UML Sequence Diagrams.** https://www.uml-diagrams.org/sequence-diagrams.html
7. **Visual Paradigm - UML Inheritance.** https://www.visual-paradigm.com/guide/uml-unified-modeling-language/uml-aggregation-vs-composition/
8. **Lucidchart - Sequence Diagram Tutorial.** https://www.lucidchart.com/pages/uml-sequence-diagram

---

## OBSERVAÇÕES E ADAPTAÇÕES

### Pontos de Atenção:
- Herança é conceito abstrato: usar muitos exemplos concretos
- Diferença entre classe abstrata e interface pode confundir
- Diagrama de Sequência exige mudança de perspectiva (tempo)
- Garantir que todos acompanhem transição entre tópicos

### Estratégias de Diferenciação:
**Para alunos com dificuldade:**
- Fornecer templates de diagramas
- Exemplos extras com anotações
- Acompanhamento mais próximo nas práticas
- Sugerir vídeos complementares sobre POO

**Para alunos avançados:**
- Propor hierarquias mais complexas (multinível)
- Desafiar a usar múltiplas interfaces
- Introduzir fragmentos no Diagrama de Sequência (alt, loop)
- Solicitar engenharia reversa (código → diagrama)

### Adaptações Possíveis:
**Se o tempo for insuficiente:**
- Reduzir tempo de correção de atividades (apenas apresentações rápidas)
- Simplificar prática do Sistema NOA (fazer coletivamente em vez de duplas)
- Deixar parte de Diagrama de Sequência para próxima aula

**Se a turma demonstrar muita dificuldade:**
- Reforçar revisão de POO antes de herança
- Usar mais exemplos do cotidiano
- Fazer mais exercícios guiados antes das práticas autônomas
- Simplificar atividade para casa

**Se houver facilidade:**
- Introduzir composição de interfaces
- Abordar padrões de projeto simples (Strategy, Template Method)
- Apresentar fragmentos de Diagrama de Sequência (alt, loop, opt)
- Desafiar a modelar casos de uso complexos

### Continuidade:
**Registrar:**
- Conceitos que geraram mais dúvidas
- Exemplos que funcionaram melhor
- Tempo real gasto em cada momento
- Alunos que precisam atenção especial

**Preparar para próxima aula:**
- Revisar rapidamente Diagrama de Sequência
- Trazer exemplos de processos (para Diagrama de Atividades)
- Preparar cenário integrado (NOA completo)

---

## PARA O PRÓXIMO ENCONTRO (05/12)

### Preparar:
- ✅ Slides sobre Diagrama de Sequência avançado (fragmentos)
- ✅ Slides sobre Diagrama de Atividades (raias, decisões, paralelismo)
- ✅ Cenário completo: fluxo de retirada e devolução de chave (NOA)
- ✅ Correção/feedback das atividades para casa
- ✅ Exercício integrado (ambos diagramas)

### Solicitar aos alunos:
- ✅ Concluir atividades para casa (2 diagramas)
- ✅ Revisar conceitos de hoje
- ✅ Pesquisar: "O que é um diagrama de atividades?"
- ✅ Trazer notebook

---

**Elaboração:** Elisson Nadson  
**Data:** Novembro/2025  
**Versão:** 1.0  
**Status:** Plano completo para execução

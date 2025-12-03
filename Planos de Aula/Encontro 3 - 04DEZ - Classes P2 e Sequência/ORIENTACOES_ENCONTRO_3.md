# ORIENTAÇÕES - ENCONTRO 3
## Diagrama de Classes P2 + Diagrama de Sequência 🎯🔄

**Data:** 04 de dezembro de 2025 (Quarta-feira)  
**Tema:** Herança, Classes Abstratas, Interfaces, Polimorfismo e Introdução ao Diagrama de Sequência

---

## PARA OS ALUNOS

### Hoje vamos ao próximo nível! 🚀

Na aula passada você aprendeu os fundamentos do Diagrama de Classes. Hoje vamos **aprofundar** com conceitos avançados que fazem toda a diferença na modelagem profissional!

Além disso, você conhecerá o **Diagrama de Sequência**, que mostra como objetos interagem ao longo do tempo. É a transição de **estrutura** (classes) para **comportamento** (sequência)!

---

## O QUE ACONTECERÁ HOJE

### 1. Revisão e Correção de Atividades (30min)
- Revisão rápida da Aula 2
- Apresentação de 3 atividades para casa
- Discussão de dúvidas comuns

### 2. Herança e Generalização (40min)
**Conceitos:**
- O que é herança (superclasse, subclasse)
- Notação UML: seta com triângulo vazio (△)
- Generalização vs Especialização
- Benefícios da herança

**Exemplo:** Veículo → Carro, Moto, Caminhão

**Prática em duplas:** Hierarquia de funcionários de empresa

### 3. Classes Abstratas, Interfaces e Polimorfismo (45min)
**Classes Abstratas:**
- Não podem ser instanciadas
- Servem como modelo para subclasses
- Exemplo: Forma → Círculo, Quadrado, Triângulo

**Interfaces:**
- Contrato de comportamento
- Classes implementam múltiplas interfaces
- Exemplo: Interface Pagável → Funcionário, Fornecedor

**Polimorfismo:**
- "Muitas formas"
- Mesma mensagem, comportamentos diferentes
- Exemplo: `emitirSom()` em Cachorro, Gato, Pássaro

### 4. Prática Integrada - Sistema NOA (35min)
- Refinar Diagrama de Classes do NOA
- Aplicar herança (Usuario → Aluno, Professor, Funcionário)
- Adicionar interface Notificável
- Especializar Aluno → AlunoRegular, AlunoMonitor

### 5. Introdução ao Diagrama de Sequência (40min)
**O que é:**
- Modela comportamento dinâmico
- Mostra interação entre objetos ao longo do tempo

**Componentes:**
- Objetos/Atores (retângulos no topo)
- Linha de vida (linha tracejada vertical)
- Mensagens (setas horizontais)
- Ativação (retângulo fino)

**Exemplo:** Processo de solicitar chave no Sistema NOA

### 6. Prática - Diagrama de Sequência (20min)
- Modelar devolução de chave no NOA
- Trabalho em duplas
- Apresentações rápidas

### 7. Fechamento e Tarefa (15min)
- Recapitulação do dia
- Atividade para casa (2 diagramas)
- Orientações para próxima aula

---

## CRONOGRAMA DO DIA

| Horário | Atividade | Duração |
|---------|-----------|---------|
| 18:30 - 19:00 | Revisão e Correção | 30min |
| 19:00 - 19:40 | Herança e Generalização | 40min |
| 19:40 - 19:55 | **INTERVALO** | 15min |
| 19:55 - 20:40 | Classes Abstratas, Interfaces, Polimorfismo | 45min |
| 20:40 - 21:15 | Prática Integrada - Sistema NOA | 35min |
| 21:15 - 21:55 | Introdução ao Diagrama de Sequência | 40min |
| 21:55 - 22:15 | Prática Diagrama de Sequência | 20min |
| 22:15 - 22:30 | Fechamento e Tarefa | 15min |

**Total:** 4h/aula (240min incluindo intervalo)

---

## O QUE TRAZER HOJE

### ✅ Obrigatório:
- **Atividade da aula passada** (diagrama de classes: Locação, Estoque ou Consultas Médicas)
- **Notebook** (se tiver) - para práticas
- Caderno e caneta
- Material de apoio da aula anterior

### 📱 Recomendado:
- Draw.io aberto: https://app.diagrams.net
- Lápis/caneta de cores diferentes (para desenhar hierarquias)
- Régua (opcional, se preferir desenhar à mão)

---

## ATIVIDADE PARA CASA

### 📝 Duas atividades integradas

---

### **PARTE 1: Diagrama de Classes com Herança**

**Escolha UM dos sistemas:**

#### Opção 1: Sistema de Loja Online
**Contexto:** E-commerce que vende diferentes tipos de produtos

**Hierarquia sugerida:**
```
Produto (superclasse abstrata)
  ├─ Livro
  ├─ Eletrônico
  └─ Roupa
```

**Requisitos:**
- Atributos comuns em Produto: id, nome, preço, estoque
- Atributos específicos:
  - Livro: autor, ISBN, editora, numeroPaginas
  - Eletrônico: marca, garantia, voltagem
  - Roupa: tamanho, cor, tecido, genero
- Métodos: calcularDesconto(), aplicarPromocao(), verificarEstoque()
- Interface: `Promocionável` (produtos que podem ter desconto)

---

#### Opção 2: Sistema Bancário
**Contexto:** Banco com diferentes tipos de conta

**Hierarquia sugerida:**
```
Conta (superclasse abstrata)
  ├─ ContaCorrente
  ├─ ContaPoupança
  └─ ContaSalário
```

**Requisitos:**
- Atributos comuns: numero, agencia, saldo, titular
- Atributos específicos:
  - ContaCorrente: limite, taxaManutencao
  - ContaPoupança: taxaRendimento, aniversario
  - ContaSalário: empresa, valorSalario
- Métodos: depositar(), sacar(), transferir(), calcularRendimento()
- Interface: `Investível` (contas que rendem)

---

#### Opção 3: Sistema de Veículos
**Contexto:** Concessionária com diferentes tipos de veículos

**Hierarquia sugerida:**
```
Veiculo (superclasse abstrata)
  ├─ Terrestre (Carro, Moto, Caminhão)
  ├─ Aquático (Barco, Jetski)
  └─ Aéreo (Avião, Helicóptero)
```

**Requisitos:**
- Atributos comuns: marca, modelo, ano, preço
- Atributos específicos por categoria:
  - Terrestre: numeroRodas, combustivel
  - Aquático: capacidadePassageiros, tipoMotor
  - Aéreo: autonomiaVoo, capacidadeCarga
- Métodos: ligar(), desligar(), calcularConsumo()
- Interface: `Rastreável` (veículos com GPS)

---

### **Requisitos do Diagrama de Classes:**
- ✅ Pelo menos 1 superclasse e 3 subclasses
- ✅ Herança claramente indicada (seta com △)
- ✅ Atributos comuns na superclasse
- ✅ Atributos específicos nas subclasses
- ✅ Métodos comuns e específicos
- ✅ **1 classe abstrata OU 1 interface**
- ✅ Visibilidade correta (+, -, #)
- ✅ Notação UML padrão

**Pontuação:** 5,0 pontos

---

### **PARTE 2: Diagrama de Sequência - Login no Sistema NOA**

**Cenário:** Usuário faz login no Sistema NOA

**Participantes (objetos):**
1. **Aluno** (ou Professor/Funcionário)
2. **InterfaceLogin** (tela de login)
3. **Sistema** (controlador)
4. **BancoDeDados** (repositório)

**Fluxo esperado:**
1. Aluno acessa Interface de Login
2. Aluno insere matrícula e senha
3. Interface envia dados para Sistema
4. Sistema valida formato dos dados
5. Sistema consulta Banco de Dados
6. Banco de Dados retorna resultado
7. Sistema processa resposta
8. Sistema retorna mensagem para Interface
9. Interface exibe resultado para Aluno (sucesso ou erro)

---

### **Requisitos do Diagrama de Sequência:**
- ✅ 4 objetos/atores identificados
- ✅ Linhas de vida (tracejadas)
- ✅ Mensagens na ordem correta (tempo de cima para baixo)
- ✅ Setas com rótulos descritivos
- ✅ Retornos indicados (opcional mas recomendado)
- ✅ Notação UML padrão

**Pontuação:** 5,0 pontos

---

### **Como Entregar:**
- **Formato:** PDF ou PNG (Draw.io recomendado)
- **Arquivo:** `SEU_NOME_Encontro3.pdf` contendo os 2 diagramas
- **Enviar para:** _[indicar plataforma]_
- **Prazo:** Até **05/12/2025** (próxima aula)

**Pontuação Total:** 10,0 pontos (5,0 + 5,0)

---

## CONCEITOS-CHAVE DA AULA

### 🏗️ Herança (Generalização/Especialização)

**Conceito:**
- Subclasse herda atributos e métodos da superclasse
- Promove reutilização de código
- Cria hierarquia lógica

**Notação:**
```
       Superclasse
            △
            │ (seta com triângulo vazio)
            │
       Subclasse
```

**Exemplo:**
```
      Usuario (pai)
       /    \
   Aluno  Professor (filhos)
```

**Terminologia:**
- **Superclasse** = classe pai = classe base = generalização
- **Subclasse** = classe filha = classe derivada = especialização

**Quando usar:**
- Há características comuns entre classes
- Relação "É UM" (Aluno É UM Usuario)
- Quer reutilizar código

---

### 🎨 Classe Abstrata

**Conceito:**
- Classe que NÃO pode ser instanciada
- Serve apenas como modelo para subclasses
- Pode ter métodos abstratos (sem implementação)

**Notação:**
- Nome em *itálico* ou `{abstract}`

**Exemplo:**
```
      «Forma» (abstrata)
       /    |    \
  Círculo Quadrado Triângulo (concretas)
```

**Quando usar:**
- Superclasse é muito genérica para existir sozinha
- Quer forçar subclasses a implementarem certos métodos

---

### 🔌 Interface

**Conceito:**
- Contrato que define métodos que classes DEVEM implementar
- Não tem atributos (só constantes)
- Não tem implementação de métodos
- Classe pode implementar múltiplas interfaces

**Notação:**
```
┌────────────────┐
│ <<interface>>  │
│   Notificável  │
├────────────────┤
│ + enviarNotif()│
└────────────────┘
        △
        │ (seta tracejada = realização)
        │
    Usuario
```

**Diferença de Classe Abstrata:**
| Classe Abstrata | Interface |
|-----------------|-----------|
| Pode ter atributos | Só constantes |
| Pode ter métodos implementados | Só assinaturas |
| Herança simples (1 pai) | Múltipla implementação |
| Relação "É UM" | Relação "PODE FAZER" |

**Quando usar:**
- Classes não relacionadas precisam compartilhar comportamento
- Quer garantir que classes implementem certos métodos
- Precisa de "herança múltipla" de comportamentos

---

### 🎭 Polimorfismo

**Conceito:**
"Muitas formas". Objetos de classes diferentes respondem à mesma mensagem de formas distintas.

**Exemplo:**
```java
Animal a1 = new Cachorro();
Animal a2 = new Gato();

a1.emitirSom(); // "Au au!"
a2.emitirSom(); // "Miau!"
```

**Tipos:**
1. **Sobrescrita (Override):** Subclasse redefine método da superclasse
2. **Sobrecarga (Overload):** Métodos com mesmo nome, parâmetros diferentes

**Benefícios:**
- Flexibilidade
- Código mais genérico
- Facilita extensão do sistema

---

### ⏱️ Diagrama de Sequência

**Objetivo:**
Modelar comportamento DINÂMICO do sistema (o que acontece ao longo do tempo)

**Diferença do Diagrama de Classes:**
| Diagrama de Classes | Diagrama de Sequência |
|---------------------|-----------------------|
| Estrutura ESTÁTICA | Comportamento DINÂMICO |
| Mostra classes e relacionamentos | Mostra interações temporais |
| "Como é o sistema" | "O que o sistema faz" |

**Componentes:**

**1. Objetos/Atores:**
```
┌────────────┐
│  :Cliente  │  ← retângulo no topo
└────────────┘
```

**2. Linha de Vida:**
```
     │  ← linha tracejada vertical
     │     (tempo desce)
     │
```

**3. Mensagens:**
```
 ────>  Síncrona (seta cheia) - espera resposta
 ---->  Assíncrona (seta aberta) - não espera
 <----  Retorno (tracejada) - resposta
```

**4. Ativação:**
```
   ┌─┐  ← retângulo fino
   │ │     (objeto processando)
   └─┘
```

**Leitura:**
- Eixo horizontal: objetos participantes
- Eixo vertical: tempo (flui de cima para baixo)
- Setas: mensagens (chamadas de métodos)

---

## PERGUNTAS FREQUENTES

### 1. Qual a diferença entre herança e composição?
**Herança:** "É UM" - Aluno É UM Usuario (herança)  
**Composição:** "TEM UM" - Pedido TEM ItensPedido (composição)

**Regra:** Prefira composição quando possível. Use herança quando houver relação "É UM" clara.

### 2. Quando usar classe abstrata vs interface?
**Classe Abstrata:** Quando há comportamento comum entre subclasses  
**Interface:** Quando quer definir capacidades sem herança

**Exemplo:**
- Classe Abstrata: `Animal` (tem comportamento comum: respirar, mover)
- Interface: `Voável` (capacidade que alguns animais têm)

### 3. Uma classe pode ter múltiplas heranças?
**Não em Java e muitas linguagens!** Mas pode implementar múltiplas interfaces.

### 4. Como sei quais classes devem ser abstratas?
Pergunte: "Faz sentido criar um objeto dessa classe?"
- Se SIM → classe concreta
- Se NÃO → classe abstrata

**Exemplo:**
- `Forma` abstrata (forma genérica não faz sentido)
- `Círculo` concreta (círculo específico faz sentido)

### 5. Diagrama de Sequência é obrigatório para todo caso de uso?
Não! Use para:
- Casos de uso complexos
- Fluxos que envolvem muitos objetos
- Quando precisa entender ordem temporal
- Documentação de APIs

### 6. Posso misturar conceitos? Classe abstrata + Interface?
**SIM!** É comum. Exemplo:
```
Usuario (abstrata) implementa Notificável (interface)
  ├─ Aluno
  └─ Professor
```

### 7. Quantas mensagens devo incluir no Diagrama de Sequência?
**Depende da complexidade!** Inclua as mensagens essenciais para entender o fluxo. Não precisa detalhar tudo.

---

## DICAS PARA FAZER BEM A ATIVIDADE

### Diagrama de Classes com Herança:

**Passo 1:** Escolha o sistema que você mais entende

**Passo 2:** Liste as classes
- Identifique a superclasse (características comuns)
- Identifique subclasses (especializações)

**Passo 3:** Para cada classe, defina:
- Atributos (o que ela TEM)
- Métodos (o que ela FAZ)
- Visibilidade (+ público, - privado, # protegido)

**Passo 4:** Adicione classe abstrata ou interface
- Classe abstrata: se a superclasse for muito genérica
- Interface: se houver comportamento compartilhado sem herança

**Passo 5:** Desenhe no Draw.io
- Use seta com triângulo para herança
- Use seta tracejada para interface
- Mantenha notação UML correta

**Passo 6:** Revise
- Atributos comuns estão na superclasse?
- Atributos específicos estão nas subclasses?
- Notação está correta?

---

### Diagrama de Sequência - Login:

**Passo 1:** Liste os participantes
- Aluno, InterfaceLogin, Sistema, BancoDeDados

**Passo 2:** Escreva o fluxo em texto (passo a passo)
1. Aluno insere dados
2. Interface valida
3. Sistema consulta BD
4. etc.

**Passo 3:** Desenhe os objetos no topo

**Passo 4:** Desenhe linhas de vida (tracejadas)

**Passo 5:** Adicione mensagens (setas) na ordem do fluxo
- Tempo desce!
- Cada seta = uma ação/chamada

**Passo 6:** Opcional: adicione retornos (setas tracejadas voltando)

**Passo 7:** Revise
- Ordem faz sentido?
- Todos os passos estão representados?
- Notação está correta?

---

## RECURSOS COMPLEMENTARES

### 📹 Vídeos Recomendados:

**Herança e Polimorfismo:**
1. "Herança em POO" - Curso em Vídeo (Gustavo Guanabara)
2. "Polimorfismo Explicado" - Bóson Treinamentos

**Diagrama de Sequência:**
3. "UML - Diagrama de Sequência" - Curso em Vídeo
4. "Sequence Diagram Tutorial" - Lucidchart

---

### 📚 Leituras:

1. **BEZERRA, Eduardo.** "Princípios de Análise e Projeto com UML"
   - Capítulo 4 (Herança)
   - Capítulo 7 (Diagrama de Sequência)

2. **Sites:**
   - https://www.uml-diagrams.org/class-diagrams.html
   - https://www.uml-diagrams.org/sequence-diagrams.html

---

## PREPARAÇÃO PARA PRÓXIMA AULA (05/12)

### 📅 O que estudaremos:

**Diagrama de Sequência (aprofundamento):**
- Mensagens síncronas vs assíncronas
- Fragmentos (alt, loop, opt)
- Cenários complexos

**Diagrama de Atividades:**
- Fluxos de processos
- Decisões e condições
- Paralelismo
- Raias (swimlanes)

---

### 🎒 O que trazer:

- ✅ Notebook
- ✅ Atividades para casa concluídas (2 diagramas)
- ✅ Dúvidas anotadas
- ✅ Revisão: Diagramas de Classes e Sequência

---

### 📖 Leitura prévia (opcional):

**Tema:** Diagrama de Atividades

**Perguntas para pesquisar:**
- O que é um Diagrama de Atividades?
- Qual a diferença entre Diagrama de Sequência e Atividades?
- O que são "raias" (swimlanes)?

---

## CHECKLIST DO DIA

### Antes de sair de casa:
- [ ] Atividade da aula passada (diagrama de classes)
- [ ] Notebook carregado
- [ ] Caderno e caneta
- [ ] Material de apoio da aula anterior

### Durante a aula:
- [ ] Apresentar atividade (se selecionado)
- [ ] Participar da prática de herança (duplas)
- [ ] Refinar Sistema NOA com conceitos avançados
- [ ] Praticar Diagrama de Sequência (devolução de chave)
- [ ] Anotar exemplos e dúvidas

### Ao final da aula:
- [ ] Entender herança, classes abstratas, interfaces
- [ ] Compreender polimorfismo
- [ ] Saber criar Diagrama de Sequência básico
- [ ] Ter clareza sobre atividade para casa

### Durante a semana:
- [ ] Fazer 2 diagramas (Classes + Sequência)
- [ ] Revisar conceitos da aula
- [ ] Assistir vídeos complementares
- [ ] Pesquisar sobre Diagrama de Atividades

---

## MOTIVAÇÃO 💪

### Você está dominando UML! 🎉

Hoje você aprende conceitos que **separam iniciantes de profissionais**:

✅ **Herança:** Fundamental em POO, usado em TODOS os sistemas orientados a objetos  
✅ **Polimorfismo:** Princípio que torna código flexível e extensível  
✅ **Diagrama de Sequência:** Essencial para documentar APIs, sistemas distribuídos, microserviços

**Mercado de Trabalho:**
- Entrevistas técnicas cobram herança e polimorfismo
- Documentação de sistemas exige Diagramas de Sequência
- Arquitetos de software usam esses conceitos diariamente

**Você está construindo um portfólio valioso! 🚀📚**

---

**Bons estudos e nos vemos na aula! 🎯**

---

**Elaboração:** Elisson Nadson  
**Data:** Novembro/2025  
**Versão:** 1.0

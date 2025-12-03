# PLANO DE AULA - ENCONTRO 2
## UML - Diagrama de Classes (Parte 1)

**Curso:** Técnico em Desenvolvimento de Sistemas  
**UC:** Modelagem de Sistemas | **Módulo:** II  
**Carga Horária:** 4h/aula | **Data:** 14/11/2025 (Quinta-feira)  
**Docente:** Elisson Nadson

---

## CONTEXTO

Este é o **segundo encontro** da sequência final da UC. No encontro anterior (13/11), foi realizada apresentação, diagnóstico e revisão de Casos de Uso. A turma possui conhecimento prévio sobre:
- Regras de Negócio, Requisitos (RF/RNF)
- Casos de Uso (introdução)
- MER (Modelagem Entidade-Relacionamento)
- Metodologias Ágeis

Agora iniciaremos o estudo aprofundado de **UML** (Unified Modeling Language), começando pelo diagrama mais fundamental: **Diagrama de Classes**. Este diagrama é essencial para a modelagem orientada a objetos e será a base para os próximos diagramas (Sequência, Atividades).

---

## OBJETIVO GERAL

Capacitar os alunos a compreender e criar Diagramas de Classes básicos, modelando a estrutura estática de um sistema através da identificação de classes, atributos, métodos, visibilidade e relacionamentos básicos (associação, agregação, composição).

---

## CAPACIDADES A DESENVOLVER

### Capacidades Técnicas:
- **CT1:** Identificar classes a partir de requisitos e casos de uso
- **CT2:** Definir atributos e métodos apropriados para cada classe
- **CT3:** Aplicar conceitos de visibilidade (+, -, #, ~)
- **CT4:** Estabelecer relacionamentos entre classes (associação, agregação, composição)
- **CT5:** Definir multiplicidade em relacionamentos
- **CT6:** Criar diagramas de classes utilizando notação UML padrão
- **CT7:** Utilizar ferramentas de modelagem (Draw.io, Lucidchart, StarUML)

### Capacidades Socioemocionais:
- **CSE1:** Demonstrar organização na estruturação de modelos
- **CSE2:** Aplicar raciocínio lógico na abstração de conceitos
- **CSE3:** Trabalhar colaborativamente em atividades práticas
- **CSE4:** Demonstrar autonomia na resolução de problemas de modelagem

---

## CONHECIMENTOS RELACIONADOS

1. **Fundamentos de Orientação a Objetos**
   - Conceito de classe e objeto
   - Diferença entre classe (molde) e objeto (instância)
   - Abstração e encapsulamento

2. **Estrutura de uma Classe**
   - Atributos (características, propriedades)
   - Métodos (comportamentos, operações)
   - Construtor
   - Visibilidade (public, private, protected, package)

3. **Notação UML para Classes**
   - Retângulo dividido em 3 partes
   - Nome da classe (CamelCase)
   - Atributos com tipo
   - Métodos com parâmetros e tipo de retorno
   - Símbolos de visibilidade: + (public), - (private), # (protected), ~ (package)

4. **Relacionamentos Básicos**
   - **Associação:** conexão geral entre classes
   - **Agregação:** relacionamento "tem um" (parte pode existir sem o todo)
   - **Composição:** relacionamento "é composto de" (parte não existe sem o todo)
   - **Multiplicidade:** quantos objetos de uma classe se relacionam com outra

5. **Boas Práticas**
   - Nomes significativos e descritivos
   - Coesão de classes (responsabilidade única)
   - Encapsulamento adequado
   - Documentação clara

---

## CRONOGRAMA DETALHADO

### MOMENTO 1: Contextualização e Fundamentos (40min)

**Objetivos:**
- Situar o Diagrama de Classes no contexto de UML
- Revisar fundamentos de Orientação a Objetos
- Apresentar a importância do diagrama

**Atividades:**

**1.1 Introdução à UML (10min)**
- O que é UML? (Unified Modeling Language)
- História breve: criada nos anos 90 por Booch, Rumbaugh e Jacobson
- Por que UML é importante? Linguagem universal de modelagem
- Tipos de diagramas UML:
  - **Estruturais:** Classes, Objetos, Componentes, Implantação, Pacotes
  - **Comportamentais:** Casos de Uso, Atividades, Sequência, Estados, Comunicação
- Foco da aula: **Diagrama de Classes** (estrutural)

**1.2 Revisão de Orientação a Objetos (15min)**
- **Classe vs Objeto:**
  - Classe = molde, template, projeto
  - Objeto = instância, exemplo concreto
  - Analogia: Planta baixa (classe) vs Casa construída (objeto)
  
- **Exemplo prático - Classe Carro:**
  ```
  Classe: Carro
  Atributos: marca, modelo, ano, cor, placa
  Métodos: ligar(), desligar(), acelerar(), frear()
  
  Objetos:
  - carro1: marca="Fiat", modelo="Uno", ano=2020, cor="branco", placa="ABC-1234"
  - carro2: marca="Ford", modelo="Ka", ano=2022, cor="prata", placa="XYZ-5678"
  ```

- **Abstração:** focar no essencial, ignorar detalhes irrelevantes
- **Encapsulamento:** esconder detalhes internos, expor apenas o necessário

**1.3 Importância do Diagrama de Classes (15min)**
- **Para desenvolvedores:** guia para implementação de código
- **Para arquitetos:** visão da estrutura do sistema
- **Para equipe:** documentação compartilhada
- **Relação com banco de dados:** classes frequentemente viram tabelas
- **Relação com código:** diagrama pode gerar código automaticamente (engenharia forward)
- **Exemplo real:** mostrar um código Java/Python e o diagrama correspondente

**Recursos:**
- Slides com exemplos visuais
- Quadro branco para desenhos rápidos
- Código fonte simples como exemplo

---

### MOMENTO 2: Estrutura de uma Classe em UML (35min)

**Objetivos:**
- Ensinar a notação UML para classes
- Praticar criação de classes simples
- Entender visibilidade

**Atividades:**

**2.1 Notação UML - Anatomia de uma Classe (15min)**

Apresentar na lousa/slide:

```
┌─────────────────────┐
│   NomeDaClasse      │  ← Nome (CamelCase, sem espaços)
├─────────────────────┤
│ - atributo1: tipo   │  ← Atributos (características)
│ - atributo2: tipo   │
│ + atributo3: tipo   │
├─────────────────────┤
│ + metodo1(): tipo   │  ← Métodos (comportamentos)
│ - metodo2(param)    │
│ + metodo3(): void   │
└─────────────────────┘
```

**Detalhamento:**

- **Nome da classe:**
  - Sempre começa com letra maiúscula
  - CamelCase (PalavrasJuntas)
  - Substantivo singular: `Cliente`, `Pedido`, `Produto`
  - Evitar abreviações confusas

- **Atributos:**
  - Formato: `visibilidade nome: tipo`
  - Exemplos: `- cpf: string`, `+ idade: int`, `# salario: double`
  - Tipos comuns: string, int, double, boolean, Date
  - Valor padrão opcional: `- ativo: boolean = true`

- **Métodos:**
  - Formato: `visibilidade nomeMetodo(parametros): tipoRetorno`
  - Exemplos: 
    - `+ calcularTotal(): double`
    - `- validarCPF(cpf: string): boolean`
    - `+ cadastrar(): void`
  - Construtor (opcional): `+ Cliente(nome, cpf)`

**2.2 Visibilidade (10min)**

Explicar os 4 níveis:

| Símbolo | Visibilidade | Significado | Exemplo |
|---------|--------------|-------------|---------|
| **+** | public | Acessível por qualquer classe | `+ getNome()` |
| **-** | private | Acessível apenas dentro da própria classe | `- cpf: string` |
| **#** | protected | Acessível pela classe e subclasses | `# validar()` |
| **~** | package | Acessível por classes do mesmo pacote | `~ processar()` |

**Regra de ouro:** Atributos normalmente são **private** (-), métodos de acesso são **public** (+)

**Por quê?** Encapsulamento! Proteger dados internos.

**2.3 Exercício Rápido - Individual (10min)**

**Tarefa:** Modelar a classe `Aluno` do SENAI

**Requisitos:**
- Atributos: matrícula (string), nome (string), dataNascimento (Date), ativo (boolean)
- Métodos: matricular(), trancar(), calcularIdade()

**Solução esperada:**
```
┌────────────────────────────────┐
│          Aluno                 │
├────────────────────────────────┤
│ - matricula: string            │
│ - nome: string                 │
│ - dataNascimento: Date         │
│ - ativo: boolean               │
├────────────────────────────────┤
│ + matricular(): void           │
│ + trancar(): void              │
│ + calcularIdade(): int         │
│ + getMatricula(): string       │
│ + getNome(): string            │
└────────────────────────────────┘
```

Circular pela sala, observar dificuldades, esclarecer dúvidas.

---

### INTERVALO (15min)

---

### MOMENTO 3: Relacionamentos Entre Classes (45min)

**Objetivos:**
- Ensinar os 3 tipos principais de relacionamento
- Diferenciar associação, agregação e composição
- Praticar multiplicidade

**Atividades:**

**3.1 Associação (15min)**

**Conceito:** Relacionamento estrutural genérico entre classes. Indica que objetos de uma classe estão conectados a objetos de outra.

**Notação:** Linha simples conectando duas classes

**Exemplo:**
```
Cliente ────── Pedido
```
"Um Cliente faz Pedidos"

**Multiplicidade:** Indica quantos objetos se relacionam

```
Cliente  1───────0..*  Pedido
```
"1 Cliente pode fazer 0 ou vários Pedidos"

**Tipos de multiplicidade:**
- `1` : exatamente um
- `0..1` : zero ou um
- `0..*` ou `*` : zero ou vários
- `1..*` : um ou vários
- `m..n` : de m até n

**Navegabilidade:** Seta indica a direção do acesso
```
Cliente  ────────>  Pedido
```
"Cliente conhece Pedido, mas Pedido não conhece Cliente"

**Exemplo completo:**
```
┌─────────────┐  1     0..*   ┌──────────────┐
│  Cliente    │───────────────│   Pedido     │
├─────────────┤               ├──────────────┤
│ - cpf       │               │ - numero     │
│ - nome      │               │ - data       │
├─────────────┤               ├──────────────┤
│ + comprar() │               │ + calcular() │
└─────────────┘               └──────────────┘
```

**3.2 Agregação (15min)**

**Conceito:** Relacionamento "tem um" ou "contém". A parte pode existir independentemente do todo.

**Notação:** Linha com **losango vazio** na classe "todo"

**Exemplo:**
```
Departamento  ◇───────  Funcionario
```
"Departamento tem Funcionários, mas Funcionário pode existir sem Departamento"

**Analogia:** 
- Uma turma tem alunos
- Se a turma acabar, os alunos continuam existindo
- Alunos podem mudar de turma

**Exemplo completo:**
```
┌──────────────┐  1     1..*  ┌───────────────┐
│  Turma       │◇──────────────│  Aluno        │
├──────────────┤               ├───────────────┤
│ - codigo     │               │ - matricula   │
│ - nome       │               │ - nome        │
├──────────────┤               ├───────────────┤
│ + abrir()    │               │ + estudar()   │
└──────────────┘               └───────────────┘
```

**3.3 Composição (15min)**

**Conceito:** Relacionamento "é composto de". A parte NÃO pode existir sem o todo. Se o todo é destruído, as partes também são.

**Notação:** Linha com **losango preenchido** na classe "todo"

**Exemplo:**
```
Pedido  ◆───────  ItemPedido
```
"Pedido é composto de ItensPedido. Se o Pedido for excluído, os itens também são."

**Analogia:**
- Uma casa tem cômodos
- Se a casa for demolida, os cômodos deixam de existir
- Cômodos não existem sem a casa

**Diferença Agregação vs Composição:**
| Agregação (◇) | Composição (◆) |
|---------------|----------------|
| Parte independente | Parte dependente |
| Ciclo de vida separado | Ciclo de vida acoplado |
| "Tem um" | "É composto de" |
| Turma ◇── Aluno | Pedido ◆── ItemPedido |

**Exemplo completo:**
```
┌──────────────────┐  1     1..*  ┌────────────────────┐
│  Pedido          │◆────────────│  ItemPedido        │
├──────────────────┤               ├────────────────────┤
│ - numero         │               │ - produto          │
│ - data           │               │ - quantidade       │
│ - total          │               │ - precoUnit        │
├──────────────────┤               ├────────────────────┤
│ + adicionar()    │               │ + calcularSubtot() │
│ + calcularTotal()│               └────────────────────┘
└──────────────────┘
```

**Resumo Visual (projetar slide):**

```
ASSOCIAÇÃO:        A ────── B        (genérico)
AGREGAÇÃO:         A ◇───── B        (tem, parte independente)
COMPOSIÇÃO:        A ◆───── B        (composto, parte dependente)
```

---

### MOMENTO 4: Prática Guiada - Sistema NOA (40min)

**Objetivos:**
- Aplicar conhecimentos em caso real
- Modelar sistema conhecido pela turma
- Trabalhar com ferramenta de modelagem

**Contexto:**
Os alunos já conhecem o **Sistema NOA** (Núcleo de Orientação e Apoio) usado nas práticas anteriores. É um sistema de controle de chaves de laboratórios/salas.

**Atividade:**

**4.1 Apresentação do Cenário (5min)**

**Requisitos do Sistema NOA:**
- Funcionários do NOA controlam chaves de salas/laboratórios
- Alunos/Professores solicitam retirada de chaves
- Sistema registra: quem retirou, quando retirou, qual chave, quando devolveu
- Cada chave pertence a uma sala específica
- Pode haver multa por atraso na devolução

**4.2 Identificação de Classes (10min) - Coletivo**

Projetar na tela e construir junto com a turma:

**Perguntas norteadoras:**
- Quais são as "coisas" principais do sistema? (substantivos)
- Quem são os atores? (viram classes)
- Que objetos precisam ser armazenados?

**Classes identificadas:**
1. `Usuario` (ou `Pessoa` - superclasse)
2. `Funcionario` (do NOA)
3. `Aluno`
4. `Professor`
5. `Chave`
6. `Sala`
7. `Emprestimo` (ou `Retirada`)

**4.3 Modelagem Colaborativa (25min)**

Abrir Draw.io projetado e modelar junto com os alunos:

**Passo 1: Classe Usuario (superclasse)**
```
┌──────────────────────────┐
│       Usuario            │
├──────────────────────────┤
│ - id: int                │
│ - nome: string           │
│ - cpf: string            │
│ - email: string          │
│ - telefone: string       │
├──────────────────────────┤
│ + autenticar(): boolean  │
│ + atualizarDados(): void │
└──────────────────────────┘
```

**Passo 2: Funcionario**
```
┌──────────────────────────┐
│      Funcionario         │
├──────────────────────────┤
│ - matricula: string      │
│ - setor: string          │
├──────────────────────────┤
│ + registrarEmprestimo()  │
│ + registrarDevolucao()   │
└──────────────────────────┘
```

**Passo 3: Aluno**
```
┌──────────────────────────┐
│         Aluno            │
├──────────────────────────┤
│ - matricula: string      │
│ - curso: string          │
│ - turma: string          │
├──────────────────────────┤
│ + solicitarChave()       │
│ + devolverChave()        │
└──────────────────────────┘
```

**Passo 4: Chave e Sala**
```
┌──────────────────────┐        ┌──────────────────────┐
│       Sala           │◆───────│       Chave          │
├──────────────────────┤ 1   1  ├──────────────────────┤
│ - codigo: string     │        │ - numero: int        │
│ - nome: string       │        │ - disponivel: bool   │
│ - tipo: string       │        ├──────────────────────┤
├──────────────────────┤        │ + retirar(): void    │
│ + reservar()         │        │ + devolver(): void   │
└──────────────────────┘        └──────────────────────┘

"Sala é composta de Chave" (composição: se a sala for desativada, a chave também)
```

**Passo 5: Emprestimo**
```
┌────────────────────────────┐
│       Emprestimo           │
├────────────────────────────┤
│ - id: int                  │
│ - dataRetirada: DateTime   │
│ - dataDevolucao: DateTime  │
│ - dataPrevista: DateTime   │
│ - multa: double            │
├────────────────────────────┤
│ + calcularMulta(): double  │
│ + finalizarEmprestimo()    │
└────────────────────────────┘
```

**Passo 6: Relacionamentos**
```
Usuario  1 ────── 0..* Emprestimo
Chave    1 ────── 0..* Emprestimo
Funcionario (registra) ─────> Emprestimo
```

**Diagrama final** (simplificado):
```
        ┌─────────────┐
        │   Usuario   │
        └─────────────┘
              △
              │ (herança - próxima aula)
     ┌────────┼────────┐
     │        │        │
┌─────────┐   │  ┌──────────┐
│  Aluno  │    │  │Professor │
└─────────┘    │  └──────────┘
              │
        ┌────────────┐
        │Funcionario │
        └────────────┘
        
┌──────────┐ 1    1..* ┌────────────┐ 0..*  1 ┌────────┐
│   Sala   │◆───────────│   Chave    │─────────│Emprest.│
└──────────┘            └────────────┘         └────────┘
                                                    │
                                                    │ 1
                                                ┌────────┐
                                                │Usuario │
                                                └────────┘
```

**Discussão:**
- Por que Sala e Chave têm composição?
- Qual a multiplicidade entre Usuario e Emprestimo?
- Que atributos/métodos poderíamos adicionar?

---

### MOMENTO 5: Prática Autônoma em Duplas (35min)

**Objetivos:**
- Consolidar aprendizado
- Desenvolver autonomia
- Praticar uso de ferramenta

**Atividade:**

**5.1 Apresentação do Desafio (5min)**

**Cenário:** Sistema de Biblioteca SENAI

**Requisitos:**
- Alunos e Professores podem emprestar livros
- Cada livro pertence a uma categoria (Tecnologia, Administração, etc.)
- Biblioteca tem vários exemplares de cada livro
- Empréstimos têm prazo de devolução (7 dias para alunos, 14 dias para professores)
- Sistema registra histórico de empréstimos
- Pode haver reserva de livros
- Multa por atraso: R$ 2,00/dia

**5.2 Tarefa em Duplas (25min)**

**O que fazer:**
1. Formar duplas
2. Identificar classes principais (mínimo 5)
3. Definir atributos e métodos para cada classe
4. Estabelecer relacionamentos (associação, agregação ou composição)
5. Definir multiplicidades
6. Criar diagrama no Draw.io ou papel

**Critérios de avaliação:**
- Classes identificadas corretamente
- Atributos e métodos apropriados
- Relacionamentos adequados
- Uso correto de multiplicidade
- Notação UML correta

**5.3 Socialização (5min)**

- 2-3 duplas apresentam rapidamente seus diagramas
- Colegas e professor dão feedback
- Identificar soluções criativas

**Solução de referência (não mostrar antes):**
```
┌─────────────┐     ┌────────────┐ 1    0..* ┌──────────────┐
│  Usuario    │     │  Categoria │◇───────────│    Livro     │
└─────────────┘     └────────────┘            └──────────────┘
      △                                               ◇
      │                                               │
  ┌───┴───┐                                     ┌─────┴─────┐
  │       │                                 1   │         1..*
┌────┐ ┌────────┐                        ┌──────────────────┐
│Aluno│ │Professor│                      │    Exemplar      │
└────┘ └────────┘                        └──────────────────┘
  │                                              │
  │ 1                                            │ 1
  │                                              │
  └─────────── 0..* ────────────────────────────┘
                  ┌──────────────┐
                  │  Emprestimo  │
                  └──────────────┘
```

---

### MOMENTO 6: Ferramentas de Modelagem (10min)

**Objetivos:**
- Apresentar ferramentas profissionais
- Ensinar operações básicas
- Preparar para trabalhos futuros

**Atividades:**

**6.1 Demonstração de Ferramentas (10min)**

**Draw.io (https://app.diagrams.net)**
- Gratuito, online, sem cadastro obrigatório
- Interface simples
- Exporta para PNG, PDF, XML
- **Demonstração ao vivo:** criar uma classe rápida

**Lucidchart (https://lucidchart.com)**
- Gratuito para estudantes (com email institucional)
- Mais recursos visuais
- Colaboração em tempo real
- Templates prontos

**StarUML (http://staruml.io)**
- Software desktop (Windows, Mac, Linux)
- Mais profissional
- Gera código a partir do diagrama
- Gratuito (com marca d'água) ou pago

**Outras opções:**
- PlantUML (código para diagrama)
- Visual Paradigm
- Enterprise Architect

**Dica:** Para este curso, **Draw.io é suficiente e recomendado**.

---

### MOMENTO 7: Fechamento e Orientações (10min)

**Atividades:**

**7.1 Recapitulação (5min)**

**O que aprendemos hoje:**
- ✅ Fundamentos de UML e Diagrama de Classes
- ✅ Estrutura de uma classe (nome, atributos, métodos)
- ✅ Visibilidade (+, -, #, ~)
- ✅ Relacionamentos: associação, agregação, composição
- ✅ Multiplicidade
- ✅ Ferramentas de modelagem
- ✅ Prática com Sistema NOA e Biblioteca

**Principais conceitos:**
- Classe = molde, Objeto = instância
- Associação (──), Agregação (◇), Composição (◆)
- Multiplicidade: 1, 0..1, 0..*, 1..*

**7.2 Tarefa para Casa (2min)**

**Atividade individual:**
Criar o Diagrama de Classes de um dos sistemas abaixo (escolher 1):
1. Sistema de Locação de Veículos
2. Sistema de Controle de Estoque de uma Loja
3. Sistema de Agendamento de Consultas Médicas

**Requisitos:**
- Mínimo 5 classes
- Atributos e métodos definidos
- Pelo menos 3 relacionamentos
- Multiplicidades corretas
- Notação UML correta
- Entregar em PDF ou PNG (Draw.io)

**Prazo:** Até 04/12 (próxima aula)

**7.3 Próxima Aula (3min)**

**04/12 (Quarta):** Diagrama de Classes Parte 2 + Introdução ao Diagrama de Sequência

**Tópicos:**
- Herança (generalização/especialização)
- Polimorfismo
- Classes abstratas e interfaces
- Dependência e realização
- Introdução ao Diagrama de Sequência

**O que trazer:**
- Notebook
- Atividade para casa concluída
- Dúvidas anotadas

---

## ESTRATÉGIAS DE ENSINO

- **Exposição dialogada:** Momentos 1, 2, 3 (fundamentos e relacionamentos)
- **Demonstração prática:** Momento 4 (modelagem Sistema NOA)
- **Aprendizagem colaborativa:** Momento 5 (prática em duplas)
- **Hands-on tecnológico:** Momentos 4, 5, 6 (uso de ferramentas)
- **Situação-problema:** Momentos 4 e 5 (cenários reais do SENAI)
- **Analogias e metáforas:** Uso constante de exemplos do cotidiano
- **Progressão gradual:** Do simples (estrutura de classe) ao complexo (relacionamentos)

---

## CRITÉRIOS DE AVALIAÇÃO

### Avaliação Formativa (Observacional):
- **Participação:** Envolvimento nas discussões e exercícios
- **Compreensão conceitual:** Qualidade das perguntas e respostas
- **Aplicação prática:** Desempenho nas atividades práticas
- **Colaboração:** Trabalho em dupla no exercício da biblioteca
- **Autonomia:** Uso das ferramentas de modelagem

### Indicadores de Aprendizagem:
- ✅ Identifica classes a partir de requisitos
- ✅ Define atributos e métodos apropriados
- ✅ Aplica visibilidade corretamente
- ✅ Diferencia associação, agregação e composição
- ✅ Define multiplicidade adequadamente
- ✅ Cria diagramas usando notação UML padrão
- ✅ Utiliza ferramentas de modelagem

### Atividade Para Casa (Somativa):
**Critérios de correção:**
- Classes identificadas: 2,0 pontos
- Atributos e métodos: 2,0 pontos
- Relacionamentos: 2,0 pontos
- Multiplicidades: 2,0 pontos
- Notação UML: 2,0 pontos
- **Total:** 10,0 pontos (compõe nota parcial)

---

## RECURSOS NECESSÁRIOS

### Ambientes:
- Sala de aula com projetor
- Laboratório de informática (ideal) OU alunos com notebooks

### Equipamentos:
- Computador do professor com internet
- Projetor multimídia
- Quadro branco + marcadores coloridos
- Notebooks dos alunos (se possível)

### Softwares:
- Navegador web (Chrome, Firefox, Edge)
- Draw.io online (https://app.diagrams.net)
- Conta Lucidchart (opcional)
- StarUML instalado (opcional)

### Materiais Didáticos:
- Slides da aula (formato PDF)
- Handout com notação UML (impresso ou digital)
- Guia rápido de multiplicidades
- Exemplos de diagramas prontos
- Cenários das atividades práticas

### Materiais de Apoio:
- Papel sulfite para rascunhos
- Lápis/caneta
- Régua (para quem preferir desenhar à mão)

---

## REFERÊNCIAS

### Bibliográficas:
1. **BEZERRA, Eduardo.** Princípios de Análise e Projeto de Sistemas com UML. 3ª ed. Rio de Janeiro: Elsevier, 2015.
2. **BOOCH, Grady; RUMBAUGH, James; JACOBSON, Ivar.** UML: Guia do Usuário. 2ª ed. Rio de Janeiro: Elsevier, 2006.
3. **FOWLER, Martin.** UML Essencial: Um Breve Guia para Linguagem-Padrão de Modelagem de Objetos. 3ª ed. Porto Alegre: Bookman, 2005.
4. **GUEDES, Gilleanes T. A.** UML 2: Uma Abordagem Prática. 3ª ed. São Paulo: Novatec, 2018.
5. **SENAI.** Metodologia SENAI de Educação Profissional. Brasília: SENAI/DN, 2019.

### Online:
6. **UML Diagrams.** Disponível em: https://www.uml-diagrams.org
7. **Draw.io.** Disponível em: https://app.diagrams.net
8. **Lucidchart - UML Tutorial.** Disponível em: https://www.lucidchart.com/pages/uml
9. **Visual Paradigm - UML Class Diagram Tutorial.** Disponível em: https://www.visual-paradigm.com/guide/uml-unified-modeling-language/uml-class-diagram-tutorial/

---

## OBSERVAÇÕES E ADAPTAÇÕES

### Pontos de Atenção:
- **Heterogeneidade da turma:** Alguns alunos podem ter mais facilidade com abstração que outros
- **Conhecimento prévio de POO:** Nem todos podem ter estudado Orientação a Objetos formalmente
- **Ritmo de aprendizado:** Conceito de relacionamentos pode exigir mais tempo
- **Uso de ferramentas:** Garantir que todos consigam usar Draw.io ou alternativa

### Estratégias de Diferenciação:
- **Para alunos com dificuldade:**
  - Disponibilizar exemplos extras
  - Fazer acompanhamento mais próximo nas práticas
  - Sugerir vídeos complementares
  - Simplificar cenários se necessário

- **Para alunos avançados:**
  - Propor desafios extras (modelar sistema mais complexo)
  - Incentivar uso de ferramentas profissionais (StarUML)
  - Pedir para auxiliar colegas com dificuldade
  - Apresentar conceitos avançados (padrões de projeto)

### Adaptações Possíveis:
- **Se não houver computadores suficientes:**
  - Trabalhar em trios em vez de duplas
  - Fazer mais exercícios no papel/quadro
  - Demonstrar ferramenta apenas no projetor
  
- **Se o tempo for insuficiente:**
  - Priorizar associação e composição (agregar para próxima aula)
  - Reduzir exercício da biblioteca (fazer coletivamente em vez de duplas)
  - Simplificar modelagem do Sistema NOA
  
- **Se a turma demonstrar facilidade:**
  - Introduzir herança já nesta aula (adiantar parte da aula 3)
  - Propor exercício adicional mais complexo
  - Discutir anti-padrões e erros comuns

### Continuidade:
- **Registrar:**
  - Dificuldades mais comuns da turma
  - Alunos que precisam reforço
  - Tópicos que exigiram mais tempo que o previsto
  
- **Preparar para próxima aula:**
  - Revisar rapidamente conceitos desta aula
  - Trazer exemplos de herança do cotidiano
  - Preparar exercício integrado (classes com herança)

### Integração com Outras UCs:
- **Programação Orientada a Objetos:** Classes modeladas podem ser implementadas em código
- **Banco de Dados:** Diagrama de Classes se relaciona com modelo de dados
- **Projeto Integrador:** Diagramas servirão para documentar projeto final

---

## PARA O PRÓXIMO ENCONTRO (04/12)

### Preparar:
- ✅ Slides sobre Herança, Polimorfismo, Classes Abstratas, Interfaces
- ✅ Exemplos práticos de hierarquias de classes
- ✅ Introdução ao Diagrama de Sequência (slides iniciais)
- ✅ Exercício integrado (Sistema NOA com herança)
- ✅ Correção/feedback das atividades para casa

### Solicitar aos alunos:
- ✅ Concluir atividade para casa (diagrama de classes)
- ✅ Revisar conceitos desta aula
- ✅ Trazer notebook
- ✅ Pesquisar sobre "herança em programação" (leitura prévia)

### Material de Apoio a Disponibilizar:
- PDF dos slides de hoje
- Handout de referência rápida UML
- Links de tutoriais complementares
- Vídeo-aula sobre Diagrama de Classes (YouTube)
- Template Draw.io para facilitar trabalhos

---

## AUTOAVALIAÇÃO DO DOCENTE

Após a aula, refletir sobre:
- ✅ Os objetivos de aprendizagem foram alcançados?
- ✅ O tempo foi bem distribuído?
- ✅ As explicações foram claras?
- ✅ Os exemplos foram adequados?
- ✅ Os alunos conseguiram acompanhar o ritmo?
- ✅ As atividades práticas foram efetivas?
- ✅ Houve participação ativa da turma?
- ✅ Que ajustes fazer para próxima aula?

### Registro de Melhorias:
_[Espaço para anotações pós-aula]_

---

**Elaboração:** Elisson Nadson  
**Data:** Novembro/2025  
**Versão:** 1.0  
**Status:** Plano completo para execução

**Aprovação Pedagógica:** _____________________  
**Data:** ___/___/___

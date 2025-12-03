# Roteiro da Aula: Modelagem de Classes com UML

## 1. Introdução e Contextualização
- **Revisão:** Relembrar conceitos fundamentais da Orientação a Objetos (OO) vistos na aula anterior (Classes, Objetos, Mensagens).
- **Objetivo da Aula:** Aprofundar no aspecto **estrutural (estático)** do sistema através do Modelo de Classes.
- **Importância:** O Modelo de Classes é central no projeto de sistemas OO, descrevendo a estrutura interna necessária para suportar as funcionalidades (Casos de Uso).

## 2. O Modelo de Classes
- **Definição:** Composto pelo **Diagrama de Classes** (visual) + **Dicionário de Classes** (descrição textual).
- **Evolução do Modelo:**
    1.  **Análise:** Foco no "O QUE" o sistema faz (domínio do problema, sem detalhes técnicos).
    2.  **Especificação (Projeto):** Foco no "COMO" funciona (refinamento, adição de detalhes de solução).
    3.  **Implementação:** O código fonte em si (linguagem de programação).

## 3. Elementos do Diagrama de Classes
### 3.1. A Classe
- Representação gráfica (retângulo com até 3 compartimentos):
    1.  **Nome:** Singular, CamelCase (ex: `ContaCorrente`).
    2.  **Atributos:** Características/Dados (ex: `saldo`, `numero`).
    3.  **Métodos:** Ações/Comportamentos (ex: `sacar()`, `depositar()`).
- **Visibilidade:**
    - `+` Público (Public)
    - `-` Privado (Private)
    - `#` Protegido (Protected - para herança)
    - `~` Pacote (Package)

### 3.2. Relacionamentos (Associações)
- **Associação Binária:** Relacionamento simples entre duas classes distintas (ex: `Cliente` ↔ `ContaCorrente`).
- **Multiplicidade:** Define quantos objetos participam da relação.
    - `1` (Um e apenas um)
    - `0..1` (Zero ou um)
    - `*` ou `0..*` (Zero ou muitos)
    - `1..*` (Um ou muitos)
- **Associação Reflexiva (Unária):** Objeto se relaciona com outros da MESMA classe (ex: `Funcionário` (chefe) ↔ `Funcionário` (subordinado)).
- **Classe Associativa:** Quando a relação possui atributos próprios (ex: `Venda` ↔ `Produto` gera `ItemVenda` com `quantidade` e `valor`).

### 3.3. Relações Todo-Parte
- **Agregação (Losango Branco ◇):**
    - Relação "tem um", mas fraca.
    - A parte existe sem o todo (ex: `Turma` ◇— `Aluno`). Se a turma acaba, o aluno continua existindo.
- **Composição (Losango Preto ◆):**
    - Relação forte, de dependência existencial.
    - A parte NÃO existe sem o todo (ex: `Revista` ◆— `Edição`). Se a revista deixa de existir, as edições também deixam.

### 3.4. Dependência
- Relação de uso temporário (seta tracejada). Uma mudança na classe fornecedora afeta a cliente.

## 4. Hierarquia de Classes (Herança)
- **Conceito:** Generalização (superclasse) e Especialização (subclasse).
- **Herança:** Subclasses herdam atributos, métodos e associações da superclasse.
- **Classe Abstrata:** Não gera objetos (instâncias), serve apenas de base/modelo (ex: `Pessoa`, `Forma`). Nome em *itálico*.
- **Polimorfismo:**
    - **Redefinição (Override):** Reescrever um método herdado na subclasse (mesma assinatura).
    - **Sobrecarga (Overload):** Múltiplos métodos com mesmo nome na mesma classe, mas parâmetros diferentes.

## 5. Identificação de Classes (Prática)
- **Fontes:** Requisitos Funcionais e Cenários de Casos de Uso.
- **Técnica:** Análise gramatical (substantivos = classes candidatas, verbos = métodos candidatos).
- **Foco Inicial:** Classes de Entidade (dados gerenciados pelo sistema).
    - Ex: "Cadastrar Cliente" → Classe `Cliente`.
    - Não criar classes para processos (ex: não criar classe "Cadastrar").

## 6. Dicionário de Classes
- **Função:** Documentar detalhadamente o que não cabe no diagrama.
- **Conteúdo Típico:**
    - Nome e descrição da classe.
    - Lista detalhada de atributos (nome, tipo, descrição).
    - Lista detalhada de métodos (nome, retorno, parâmetros, descrição).
    - Relacionamentos.

## 7. Conclusão
- A modelagem é iterativa: começa na análise, refina no projeto e finaliza na implementação.
- O Diagrama e o Dicionário devem andar juntos para um entendimento completo do sistema.

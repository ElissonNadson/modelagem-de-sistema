# ORIENTAÇÕES - ENCONTRO 2
## UML - Diagrama de Classes (Parte 1) 📐

**Data:** 14 de novembro de 2025 (Quinta-feira)  
**Tema:** Estrutura de Classes, Atributos, Métodos e Relacionamentos Básicos

---

## PARA OS ALUNOS

### Hoje é o dia do diagrama mais importante! 🎯

O **Diagrama de Classes** é o coração da modelagem orientada a objetos. É o diagrama mais usado no mercado de trabalho e a base para os demais diagramas UML.

Hoje você aprenderá a **visualizar sistemas como classes** e entenderá como objetos do mundo real são traduzidos para modelos que podem virar código!

---

## O QUE ACONTECERÁ HOJE

### 1. Contextualização e Fundamentos (40min)
**O que você vai aprender:**
- O que é UML e por que é importante
- Revisão de Orientação a Objetos (Classe vs Objeto)
- Importância do Diagrama de Classes
- Como este diagrama se relaciona com código e banco de dados

**Por que isso importa:**
- UML é linguagem universal em TI
- Empresas exigem documentação visual de sistemas
- Diagramas facilitam comunicação entre equipes

---

### 2. Estrutura de uma Classe (35min)
**O que você vai aprender:**
- Notação UML para classes (retângulo de 3 partes)
- Como definir nome, atributos e métodos
- Visibilidade: +public, -private, #protected, ~package
- Tipos de dados

**Prática rápida:**
- Você vai modelar a classe `Aluno` do SENAI
- Individual, 10 minutos
- Primeira experiência criando uma classe em UML

---

### 3. Relacionamentos Entre Classes (45min)
**O que você vai aprender:**
- **Associação:** relacionamento genérico entre classes
- **Agregação (◇):** relacionamento "tem um" (parte independente)
- **Composição (◆):** relacionamento "é composto de" (parte dependente)
- **Multiplicidade:** 1, 0..1, 0..*, 1..*

**Exemplos práticos:**
- Cliente e Pedido (associação)
- Turma e Aluno (agregação)
- Pedido e ItemPedido (composição)

---

### 4. Prática Guiada - Sistema NOA (40min)
**Relembrar Sistema NOA:**
Você já conhece! É o sistema de controle de chaves que foi usado em práticas anteriores.

**O que faremos:**
- Identificar classes do Sistema NOA
- Modelar juntos, passo a passo
- Definir atributos, métodos e relacionamentos
- Usar ferramenta Draw.io ao vivo

**Classes que modelaremos:**
- Usuario, Funcionario, Aluno, Professor
- Chave, Sala
- Emprestimo

---

### 5. Prática Autônoma em Duplas (35min)
**Desafio:** Modelar o Sistema de Biblioteca SENAI

**Cenário:**
- Alunos e Professores podem emprestar livros
- Livros pertencem a categorias
- Biblioteca tem vários exemplares de cada livro
- Empréstimos têm prazo (7 dias alunos, 14 dias professores)
- Há multa por atraso

**O que sua dupla deve fazer:**
1. Identificar pelo menos 5 classes
2. Definir atributos e métodos
3. Estabelecer relacionamentos
4. Criar diagrama no Draw.io (ou papel)
5. Apresentar para a turma

**Tempo:** 25 minutos de trabalho + 5 minutos de apresentações

---

### 6. Ferramentas de Modelagem (10min)
**Conhecer as ferramentas profissionais:**
- **Draw.io** (gratuito, online) ← RECOMENDADO!
- **Lucidchart** (gratuito para estudantes)
- **StarUML** (desktop, mais profissional)

**Demonstração ao vivo:**
O professor vai mostrar como usar Draw.io para criar diagramas rapidamente.

---

### 7. Fechamento e Tarefa (10min)
**Recapitulação do dia**
**Atividade para casa** (entregar em 04/12)
**Orientações para próxima aula**

---

## CRONOGRAMA DO DIA

| Horário | Atividade | Duração |
|---------|-----------|---------|
| 18:30 - 19:10 | Contextualização e Fundamentos | 40min |
| 19:10 - 19:45 | Estrutura de uma Classe | 35min |
| 19:45 - 20:00 | **INTERVALO** | 15min |
| 20:00 - 20:45 | Relacionamentos Entre Classes | 45min |
| 20:45 - 21:25 | Prática Guiada - Sistema NOA | 40min |
| 21:25 - 22:00 | Prática em Duplas - Biblioteca | 35min |
| 22:00 - 22:10 | Ferramentas de Modelagem | 10min |
| 22:10 - 22:20 | Fechamento e Orientações | 10min |

**Total:** 4h/aula (240min incluindo intervalo)

---

## O QUE TRAZER HOJE

### ✅ Obrigatório:
- **Notebook** (se tiver) - para usar Draw.io
- Caderno e caneta
- Material da aula anterior (revisão)

### 📱 Recomendado:
- Notebook com navegador atualizado (Chrome, Firefox, Edge)
- Acesso ao Draw.io: https://app.diagrams.net
- Criar conta no Draw.io (opcional, mas facilita salvar trabalhos)

### 📋 Alternativa se não tiver notebook:
- Papel sulfite e lápis/caneta
- Régua (para desenhar retângulos e linhas)
- Você pode trabalhar em trio com colegas que tenham notebook

---

## ATIVIDADE PARA CASA

### 📝 Criar um Diagrama de Classes completo

**Escolha UM dos sistemas abaixo:**

#### Opção 1: Sistema de Locação de Veículos
**Requisitos:**
- Clientes alugam veículos por período
- Veículos podem ser: carro, moto, caminhonete
- Há diferentes categorias de veículos (econômico, luxo, SUV)
- Locação tem seguro incluído
- Multa por atraso ou avarias

#### Opção 2: Sistema de Controle de Estoque de Loja
**Requisitos:**
- Loja vende produtos de várias categorias
- Produtos têm fornecedores
- Estoque controla quantidade disponível
- Vendas registram itens vendidos
- Há clientes cadastrados com histórico de compras

#### Opção 3: Sistema de Agendamento de Consultas Médicas
**Requisitos:**
- Pacientes agendam consultas com médicos
- Médicos têm especialidades
- Consultas ocorrem em horários específicos
- Há salas de atendimento
- Sistema gera receitas médicas

---

### 📋 Requisitos da Atividade:

**O diagrama deve ter:**
- ✅ **Mínimo 5 classes** bem definidas
- ✅ **Atributos** com tipos (ex: `nome: string`, `idade: int`)
- ✅ **Métodos** com parâmetros e retornos
- ✅ **Visibilidade correta** (+, -, #)
- ✅ **Pelo menos 3 relacionamentos** (associação, agregação ou composição)
- ✅ **Multiplicidades** definidas (1, 0..1, 0..*, 1..*)
- ✅ **Notação UML correta**

**Como entregar:**
- Criar no Draw.io (recomendado)
- Exportar como **PDF** ou **PNG**
- Nomear arquivo: `SEU_NOME_DiagramaClasses.pdf`
- Enviar por: _[indicar plataforma: email, Teams, AVA]_

**Prazo:** Até **04/12/2025** (próxima aula)

**Pontuação:** 10 pontos (compõe nota parcial)

---

### 🎯 Critérios de Avaliação:

| Critério | Pontos |
|----------|--------|
| Classes identificadas corretamente | 2,0 |
| Atributos e métodos apropriados | 2,0 |
| Relacionamentos adequados | 2,0 |
| Multiplicidades corretas | 2,0 |
| Notação UML correta | 2,0 |
| **TOTAL** | **10,0** |

---

## PREPARAÇÃO ANTES DA AULA

### 🎓 Revisar conceitos:

Se você tiver tempo, revise estes conceitos (ajudará MUITO):

**1. O que é uma Classe?**
- Classe = molde, template
- Objeto = instância da classe
- Exemplo: Classe `Carro` → Objetos: carro1, carro2, carro3

**2. O que é um Atributo?**
- Características de uma classe
- Exemplo: Carro tem atributos: marca, modelo, cor, ano

**3. O que é um Método?**
- Ações que uma classe pode realizar
- Exemplo: Carro pode: ligar(), desligar(), acelerar(), frear()

**4. Orientação a Objetos:**
- Abstração: focar no essencial
- Encapsulamento: esconder detalhes internos
- Herança: veremos na próxima aula!
- Polimorfismo: veremos na próxima aula!

---

### 🔧 Configurar ferramentas:

**Draw.io (RECOMENDADO):**
1. Acesse: https://app.diagrams.net
2. Clique em "Create New Diagram"
3. Escolha "Blank Diagram"
4. Na barra lateral esquerda, veja: "UML" → arraste "Class" para área de trabalho
5. Clique duplo na classe para editar nome, atributos, métodos

**Dica:** Assista a este tutorial rápido (5min): https://www.youtube.com/results?search_query=draw.io+uml+class+diagram

---

## CONCEITOS-CHAVE DA AULA

### 📐 Notação UML para Classe:

```
┌─────────────────────────────┐
│      NomeDaClasse           │  ← CamelCase, singular
├─────────────────────────────┤
│ - atributo1: tipo           │  ← Atributos
│ + atributo2: tipo           │  ← Visibilidade + nome + tipo
│ # atributo3: tipo           │
├─────────────────────────────┤
│ + metodo1(): tipo           │  ← Métodos
│ - metodo2(param: tipo)      │  ← Visibilidade + nome + params + retorno
│ + metodo3(): void           │
└─────────────────────────────┘
```

---

### 🔒 Visibilidade:

| Símbolo | Nome | Significado |
|---------|------|-------------|
| **+** | public | Acessível por qualquer classe |
| **-** | private | Acessível apenas na própria classe |
| **#** | protected | Acessível na classe e subclasses |
| **~** | package | Acessível no mesmo pacote |

**Regra de ouro:** Atributos = private (-), Métodos = public (+)

---

### 🔗 Relacionamentos:

#### Associação (linha simples):
```
Cliente ────── Pedido
```
Relacionamento genérico. Cliente faz Pedidos.

#### Agregação (losango vazio ◇):
```
Turma ◇────── Aluno
```
"Turma tem Alunos". Aluno pode existir sem Turma.

#### Composição (losango cheio ◆):
```
Pedido ◆────── ItemPedido
```
"Pedido é composto de ItensPedido". ItemPedido não existe sem Pedido.

---

### 🔢 Multiplicidade:

```
Cliente  1 ────── 0..* Pedido
```

| Notação | Significado |
|---------|-------------|
| `1` | Exatamente um |
| `0..1` | Zero ou um |
| `0..*` ou `*` | Zero ou vários |
| `1..*` | Um ou vários |
| `2..5` | De dois a cinco |

**Leitura:** "1 Cliente pode ter 0 ou vários Pedidos"

---

## DICAS PARA HOJE

### ✅ Durante a aula:

**1. Participação ativa:**
- Faça perguntas quando não entender
- Compartilhe ideias durante as práticas
- Ajude colegas com dificuldade

**2. Atenção especial:**
- Diferença entre agregação (◇) e composição (◆) - costuma confundir!
- Multiplicidade - pense na lógica do negócio
- Visibilidade - lembre: atributos privados, métodos públicos

**3. Durante o exercício prático:**
- Leia o cenário com calma
- Identifique substantivos (viram classes)
- Identifique verbos (viram métodos)
- Discuta com sua dupla antes de desenhar

**4. Use o intervalo:**
- Tire dúvidas pessoais com o professor
- Teste a ferramenta Draw.io no seu notebook
- Troque ideias com colegas

---

### ✅ Para fazer bem a atividade de casa:

**Passo 1:** Escolha o sistema que você mais entende
**Passo 2:** Liste as "coisas" principais (substantivos)
**Passo 3:** Para cada "coisa", pergunte:
- Que características ela tem? (atributos)
- Que ações ela faz? (métodos)
- Com quem ela se relaciona? (relacionamentos)

**Passo 4:** Desenhe no Draw.io
**Passo 5:** Revise se usou notação UML correta
**Passo 6:** Peça para alguém ler seu diagrama (teste de compreensão)

---

## PERGUNTAS FREQUENTES

### 1. Preciso saber programação para fazer Diagrama de Classes?
**Não!** Diagrama de Classes é sobre modelagem, não código. Mas se souber POO, ficará mais fácil.

### 2. Qual ferramenta devo usar?
**Draw.io** é a mais recomendada: gratuita, simples, online e atende perfeitamente.

### 3. Posso usar papel em vez do computador?
**Sim!** Mas para entregar a atividade, precisa ser digital (PDF ou imagem).

### 4. Como sei se devo usar agregação ou composição?
**Pergunte:** "Se o todo for destruído, a parte sobrevive?"
- **SIM** → Agregação (◇) - Ex: Turma e Aluno
- **NÃO** → Composição (◆) - Ex: Pedido e ItemPedido

### 5. E se eu errar a multiplicidade?
**Não tem problema!** O importante é pensar na lógica de negócio. Professor dará feedback.

### 6. Posso fazer a atividade em grupo?
**Não.** A atividade para casa é **individual**. Mas você pode tirar dúvidas com colegas.

### 7. Quantos atributos e métodos cada classe deve ter?
**Mínimo 2-3 atributos e 2-3 métodos.** Seja realista: não exagere, mas também não seja simplista demais.

---

## RECURSOS COMPLEMENTARES

### 📹 Vídeos recomendados:

1. **"UML - Diagrama de Classes"** (Curso em Vídeo - Gustavo Guanabara)
   - Excelente explicação em português
   - Cerca de 30min

2. **"Associação, Agregação e Composição"** (Bóson Treinamentos)
   - Foca nas diferenças entre relacionamentos
   - Cerca de 15min

3. **"Draw.io Tutorial - UML Class Diagram"** (YouTube)
   - Tutorial prático da ferramenta
   - Cerca de 10min

---

### 📚 Leituras recomendadas:

1. **BEZERRA, Eduardo.** "Princípios de Análise e Projeto de Sistemas com UML"
   - Capítulo 4: Diagrama de Classes
   - Disponível na biblioteca do SENAI

2. **UML-Diagrams.org**
   - Site com exemplos visuais
   - https://www.uml-diagrams.org/class-diagrams.html

---

### 🔗 Links úteis:

- **Draw.io:** https://app.diagrams.net
- **Lucidchart:** https://lucidchart.com
- **StarUML:** http://staruml.io
- **UML Cheat Sheet:** [buscar "uml cheat sheet pdf" no Google]

---

## PARA A PRÓXIMA AULA (04/12)

### 📅 O que estudaremos:

**Diagrama de Classes Parte 2:**
- Herança (generalização/especialização)
- Polimorfismo
- Classes abstratas
- Interfaces
- Dependência

**+ Introdução ao Diagrama de Sequência**

---

### 🎒 O que trazer:

- ✅ Notebook
- ✅ Atividade para casa concluída (diagrama de classes)
- ✅ Dúvidas anotadas
- ✅ Revisão dos conceitos de hoje

---

### 📖 Leitura prévia (opcional, mas recomendada):

**Tema:** Herança em Programação Orientada a Objetos

**Perguntas para pesquisar:**
- O que é herança?
- O que é uma superclasse e uma subclasse?
- Exemplo de herança no mundo real

**Sugestão:** Pesquise "herança programação orientada a objetos exemplos" e leia pelo menos 1 artigo.

---

## MOTIVAÇÃO 💪

### Por que o Diagrama de Classes é TÃO importante?

**1. É o diagrama mais usado na indústria**
- 80% dos projetos de software usam Diagrama de Classes
- É exigido em documentações técnicas
- Facilita manutenção de sistemas

**2. Ponte entre análise e código**
- Do diagrama, você gera código automaticamente
- Do código, você pode gerar diagrama (engenharia reversa)
- Ferramentas profissionais fazem isso

**3. Comunicação universal**
- Qualquer desenvolvedor do mundo entende UML
- Não importa a linguagem de programação
- É como uma "planta baixa" do software

**4. Facilita trabalho em equipe**
- Time todo visualiza a mesma estrutura
- Reduz mal-entendidos
- Agiliza desenvolvimento

---

### 🎯 Meta de hoje:

Ao final da aula, você será capaz de:
- ✅ Criar um Diagrama de Classes básico
- ✅ Diferenciar associação, agregação e composição
- ✅ Usar notação UML corretamente
- ✅ Modelar sistemas reais

**Você está construindo uma habilidade ESSENCIAL para sua carreira em TI! 🚀**

---

## CHECKLIST DO DIA

### Antes de sair de casa:
- [ ] Notebook carregado e funcionando
- [ ] Caderno e caneta
- [ ] Acesso ao Draw.io testado
- [ ] Material da aula anterior revisado

### Durante a aula:
- [ ] Participar ativamente das discussões
- [ ] Fazer exercício individual (Classe Aluno)
- [ ] Trabalhar em dupla (Sistema Biblioteca)
- [ ] Anotar dúvidas e exemplos importantes
- [ ] Testar Draw.io durante a prática

### Ao final da aula:
- [ ] Entender diferença entre agregação e composição
- [ ] Saber usar Draw.io para criar diagramas
- [ ] Ter o cenário da atividade para casa
- [ ] Saber o que estudar para próxima aula

### Durante a semana:
- [ ] Fazer atividade para casa
- [ ] Revisar conceitos da aula
- [ ] Assistir vídeos complementares (opcional)
- [ ] Pesquisar sobre herança (leitura prévia)

---

## CONTATO E SUPORTE

**Dúvidas antes ou depois da aula:**
- Professor Elisson Nadson: _[inserir email/contato]_
- Coordenação Pedagógica: _[inserir contato]_
- Colegas da turma: _[grupo do WhatsApp/Teams]_

**Horário de atendimento:**
- _[Definir horários disponíveis]_

---

## MENSAGEM FINAL

Hoje você dá um passo gigante na sua formação como **Analista de Sistemas** e **Desenvolvedor**!

O Diagrama de Classes é usado por:
- 🏢 Grandes empresas (Google, Microsoft, Amazon)
- 🏦 Bancos e fintechs
- 🏥 Sistemas de saúde
- 🏪 E-commerces
- 🎮 Indústria de games

**Dominar este diagrama abre portas no mercado de trabalho!**

Aproveite a aula, faça muitas perguntas, pratique bastante e, principalmente: **DIVIRTA-SE APRENDENDO!** 🎉

---

**Bons estudos e nos vemos na aula! 📚🚀**

---

**Elaboração:** Elisson Nadson  
**Data:** Novembro/2025  
**Versão:** 1.0

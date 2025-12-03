# PLANO DE AULA - ENCONTRO 7
## AVALIAÇÃO FINAL

**Curso:** Técnico em Desenvolvimento de Sistemas  
**UC:** Modelagem de Sistemas | **Módulo:** II  
**Carga Horária:** 4h/aula | **Data:** 19/12/2025 (Quinta-feira)  
**Docente:** Elisson Nadson

---

## CONTEXTO

Este é o **último encontro** da disciplina Modelagem de Sistemas. Ao longo de agosto a dezembro, os alunos desenvolveram capacidades técnicas e socioemocionais relacionadas à modelagem de sistemas computacionais. Hoje aplicarão de forma integradora todos os conhecimentos adquiridos através de uma avaliação final composta por parte teórica e prática.

---

## OBJETIVO GERAL

Avaliar de forma integradora o desenvolvimento das capacidades técnicas e socioemocionais trabalhadas ao longo da UC Modelagem de Sistemas, verificando a apropriação dos conhecimentos e a capacidade de aplicá-los em situações-problema.

---

## CAPACIDADES A SEREM AVALIADAS

### Capacidades Técnicas:
- Identificar requisitos funcionais e não-funcionais
- Identificar e documentar regras de negócio
- Interpretar requisitos levantados
- **Aplicar linguagem UML para modelagem de sistemas**
- Reconhecer requisitos de qualidade, usabilidade e segurança
- Integrar sistemas para conectividade e interoperabilidade
- Reconhecer sistemas de interface para usuários (UX)
- Definir tecnologias conforme requisitos

### Capacidades Socioemocionais:
- Demonstrar iniciativa
- Aplicar princípios de organização
- Trabalhar com autonomia

---

## CONHECIMENTOS A SEREM AVALIADOS

### Conteúdos de Agosto-Outubro (já ministrados):
1. Regras de Negócio
2. Requisitos Funcionais e Não-Funcionais
3. Técnicas de análise de requisitos
4. Modelagem de Entidades e Relacionamento (MER)
5. Metodologias Ágeis

### Conteúdos de Novembro-Dezembro (7 encontros):
6. UML - Diagrama de Casos de Uso
7. UML - Diagrama de Classes
8. UML - Diagrama de Sequência
9. UML - Diagrama de Atividades
10. Conectividade e Interoperabilidade (APIs)
11. Ciclo PDCA
12. Business Model Canvas
13. Fundamentos de UX/UI

---

## CRONOGRAMA DETALHADO

### MOMENTO 1: Acolhimento e Orientações (20min)

**Atividades:**
1. Recepção dos alunos (5min)
   - Conferir presença
   - Verificar se todos têm material necessário

2. Orientações gerais sobre a avaliação (15min)
   - Estrutura da prova (teórica + prática)
   - Tempo de cada parte
   - Regras (sem consulta, sem celular)
   - Gestão do tempo
   - Onde entregar
   - Como será a correção
   - Critérios de aprovação
   - Recuperação (se necessário)

---

### MOMENTO 2: AVALIAÇÃO TEÓRICA (120min)

**Objetivo:** Avaliar conhecimentos conceituais

**Formato:**
- Questões dissertativas (60%)
- Questões de múltipla escolha (40%)
- Análise de cenários
- Sem consulta a material

**Conteúdos avaliados:**

**1. Regras de Negócio (10 pontos)**
- Definição e importância
- Diferença entre RN, RF e RNF
- Tipos de regras de negócio
- Estrutura de documentação
- Aplicação em cenário prático

**2. Requisitos de Software (15 pontos)**
- Requisitos Funcionais: definição e exemplos
- Requisitos Não-Funcionais: definição e exemplos
- Técnicas de elicitação
- Classificar requisitos em um cenário
- Documentação de requisitos

**3. UML - Conceitos Gerais (10 pontos)**
- O que é UML?
- Importância da modelagem
- Tipos de diagramas
- Quando usar cada diagrama

**4. UML - Diagrama de Casos de Uso (15 pontos)**
- Elementos: ator, caso de uso, sistema
- Relacionamentos: include, extend, generalização
- Identificar atores e casos de uso em cenário
- Notação correta

**5. UML - Diagrama de Classes (20 pontos)**
- Estrutura: nome, atributos, métodos
- Visibilidade (+, -, #)
- Relacionamentos: associação, agregação, composição, herança
- Multiplicidade
- Análise de diagrama (identificar erros)

**6. UML - Diagrama de Sequência (10 pontos)**
- Elementos: objetos, mensagens, linhas de vida
- Diferença entre síncrona e assíncrona
- Ordenação de mensagens

**7. UML - Diagrama de Atividades (10 pontos)**
- Elementos: início, fim, atividade, decisão
- Fluxos e paralelismo
- Análise de diagrama

**8. Conectividade e Interoperabilidade (5 pontos)**
- O que são APIs?
- Importância da integração de sistemas
- Conceitos de REST, JSON

**9. PDCA (5 pontos)**
- 4 etapas do ciclo
- Aplicação na modelagem de sistemas

**10. Canvas (5 pontos)**
- 9 blocos do Business Model Canvas
- Importância antes da modelagem

**11. UX/UI (5 pontos)**
- Diferença entre UX e UI
- Princípios de usabilidade
- Acessibilidade básica

**TOTAL PARTE TEÓRICA: 100 pontos**

---

### INTERVALO (15min)

---

### MOMENTO 3: AVALIAÇÃO PRÁTICA (120min)

**Objetivo:** Avaliar aplicação prática dos conhecimentos

**Formato:**
- Cenário descritivo fornecido
- Criar diagramas UML
- Documentar requisitos
- Material permitido: lápis, borracha, régua, caneta

**CENÁRIO DA PROVA PRÁTICA:**

---

**Sistema de Empréstimo de Equipamentos do SENAI**

O SENAI Feira de Santana precisa de um sistema para gerenciar empréstimos de equipamentos (notebooks, projetores, câmeras, etc.) para docentes e alunos.

**Regras do Negócio:**
- Docentes podem emprestar até 3 equipamentos simultaneamente
- Alunos podem emprestar até 1 equipamento
- Prazo máximo: 7 dias para docentes, 3 dias para alunos
- Equipamento deve estar disponível e em boas condições
- Usuário não pode ter pendências (atrasos anteriores)
- Reserva antecipada é possível (até 15 dias)

**Funcionalidades:**
- Fazer empréstimo de equipamento
- Devolver equipamento
- Renovar empréstimo
- Consultar disponibilidade
- Fazer reserva
- Gerar relatórios (administrador)
- Cadastrar equipamentos (administrador)
- Cadastrar usuários (administrador)
- Enviar notificações de atraso

**Atores:**
- Aluno
- Docente
- Administrador (funcionário responsável)
- Sistema (envio automático de notificações)

**Requisitos Não-Funcionais:**
- Sistema deve ser acessível via web
- Interface intuitiva (UX/UI)
- Tempo de resposta < 2 segundos
- Disponibilidade 24/7
- Dados seguros (LGPD)
- Acessível para pessoas com deficiência

---

**TAREFAS DA PROVA PRÁTICA:**

**1. Documentar Regras de Negócio (15 pontos)**
- Escolher 3 regras de negócio principais
- Documentar formalmente (ID, Nome, Descrição)

**2. Listar Requisitos (15 pontos)**
- Listar 5 Requisitos Funcionais
- Listar 3 Requisitos Não-Funcionais
- Formato: ID + Descrição clara

**3. Diagrama de Casos de Uso (25 pontos)**
- Identificar todos os atores
- Identificar casos de uso principais (mínimo 6)
- Desenhar diagrama completo
- Notação UML correta
- Relacionamentos (se houver: include, extend)

**4. Diagrama de Classes (30 pontos)**
- Identificar classes principais (mínimo 5)
- Definir atributos e métodos de cada classe
- Estabelecer relacionamentos entre classes
- Indicar multiplicidade
- Notação UML correta

**5. Diagrama de Sequência OU Atividades (15 pontos)**
- **Opção A:** Diagrama de Sequência do fluxo "Fazer Empréstimo"
- **Opção B:** Diagrama de Atividades do fluxo "Fazer Empréstimo"
- Escolha apenas UMA opção
- Notação correta

**TOTAL PARTE PRÁTICA: 100 pontos**

---

### MOMENTO 4: Fechamento (15min)

**Atividades:**
1. Recolhimento das provas (5min)
2. Feedback sobre a disciplina (5min)
   - Como foi a experiência?
   - O que mais gostaram?
   - Sugestões de melhoria

3. Informações finais (5min)
   - Data de divulgação das notas
   - Procedimentos de recuperação (se necessário)
   - Agradecimentos e encerramento da UC

---

## CRITÉRIOS DE AVALIAÇÃO

### Composição da Nota Final:
- **Parte Teórica:** 50% da nota (100 pontos → 50%)
- **Parte Prática:** 50% da nota (100 pontos → 50%)
- **Nota Final:** (Teórica + Prática) / 2

### Critérios de Aprovação:
- **Nota Final:** ≥ 7,0
- **Frequência:** ≥ 75% (conforme regimento SENAI)

### Recuperação:
- Alunos com nota entre 5,0 e 6,9: recuperação
- Alunos com nota < 5,0: reprovação (avaliar caso a caso)
- Processo conforme regimento da escola

---

## CORREÇÃO DA PROVA

### Parte Teórica:
- Questões objetivas: gabarito
- Questões dissertativas: rubrica com critérios claros
- Conceitos corretos + argumentação lógica

### Parte Prática:
**Regras de Negócio:**
- Identificação correta (5 pts)
- Estrutura de documentação (5 pts)
- Clareza e completude (5 pts)

**Requisitos:**
- RF corretamente classificados (8 pts)
- RNF corretamente classificados (7 pts)

**Diagrama de Casos de Uso:**
- Atores corretos (5 pts)
- Casos de uso identificados (8 pts)
- Notação UML (7 pts)
- Relacionamentos (5 pts)

**Diagrama de Classes:**
- Classes identificadas (8 pts)
- Atributos e métodos (8 pts)
- Relacionamentos (8 pts)
- Multiplicidade (3 pts)
- Notação UML (3 pts)

**Diagrama de Sequência/Atividades:**
- Lógica correta do fluxo (8 pts)
- Notação UML (7 pts)

---

## RECURSOS NECESSÁRIOS

### Ambientes:
- Sala de aula silenciosa e organizada

### Equipamentos:
- Nenhum (prova escrita)

### Materiais:
- **Prova teórica** (impressa, 1 por aluno)
- **Prova prática** (impressa, 1 por aluno)
- **Folhas de resposta** (se necessário)
- **Papel rascunho** (para esboços)
- Lista de presença
- Relógio visível

### Permitido aos alunos:
- Caneta (azul ou preta)
- Lápis, borracha, régua
- Água

### Proibido:
- Celular (desligado na mochila)
- Consulta a material
- Comunicação entre alunos
- Fones de ouvido

---

## OBSERVAÇÕES IMPORTANTES

### Antes da Prova:
- Imprimir provas com antecedência
- Conferir quantidade de cópias
- Preparar sala (mesas espaçadas)
- Relógio visível na sala
- Avisar coordenação que é dia de prova

### Durante a Prova:
- Circular pela sala observando
- Esclarecer dúvidas de interpretação (se necessárias)
- Controlar tempo
- Avisar 30min antes do fim de cada parte
- Garantir silêncio

### Gestão de Tempo:
- Reforçar que alunos gerenciem bem o tempo
- Sugerir: 1h por hora de prova
- Parte teórica: 2h para 100 pontos
- Parte prática: 2h para 100 pontos

### Cola/Plágio:
- Seguir regimento escolar
- Prova zerada em caso de cola
- Registrar ocorrência se necessário

---

## RECUPERAÇÃO (Se necessário)

### Formato:
- Prova substitutiva (teórica + prática)
- Abordando os mesmos conteúdos
- Nova data (coordenar com coordenação)

### Quem tem direito:
- Alunos com nota entre 5,0 e 6,9
- Frequência ≥ 75%

### Cálculo da nota final:
- Média entre nota original e nota de recuperação
- OU nota de recuperação substitui (conforme regimento)

---

## FEEDBACK AOS ALUNOS

### Devolutiva:
- Divulgar notas até: ___/___/_____
- Disponibilizar gabarito comentado
- Marcar horário para revisão de prova (quem quiser)
- Feedback individualizado (se solicitado)

### Análise pedagógica:
- Identificar conceitos com mais erros
- Relatar à coordenação pedagógica
- Sugestões para próximas turmas

---

## ENCERRAMENTO DA UC

### Mensagem Final aos Alunos:

"Parabéns por chegarem até aqui! Vocês desenvolveram capacidades importantes para a carreira de desenvolvedor de sistemas:

✅ Sabem documentar regras de negócio  
✅ Sabem levantar e classificar requisitos  
✅ Dominam UML (5 diagramas!)  
✅ Conhecem MER e bancos de dados  
✅ Entendem APIs e integração  
✅ Aplicam metodologias de melhoria (PDCA)  
✅ Pensam estrategicamente (Canvas)  
✅ Consideram a experiência do usuário (UX/UI)

**Vocês estão prontos para modelar sistemas complexos!**

Boa sorte na prova e na carreira de vocês! 🚀💻"

---

**Elaboração:** Elisson Nadson  
**Data:** Novembro/2025  
**Status:** Plano completo para execução

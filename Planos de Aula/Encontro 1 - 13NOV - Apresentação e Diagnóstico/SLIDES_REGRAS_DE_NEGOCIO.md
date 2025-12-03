# REGRAS DE NEGÓCIO
## Aula de Modelagem de Sistemas

---

## 📋 SLIDE 1: O QUE SÃO REGRAS DE NEGÓCIO?

### **Definição:**
> Regras de Negócio são **diretrizes que definem CONDIÇÕES ou CRITÉRIOS** que precisam ser atendidos para que uma operação seja realizada.

### **Características:**
- ✅ Definem **RESTRIÇÕES**
- ✅ Estabelecem **LIMITES**
- ✅ Determinam **CONDIÇÕES** para ações
- ✅ Não descrevem funcionalidades, mas **REGEM** as funcionalidades

### **Exemplo Simples:**
```
RN001: A matrícula só será aceita se a carga horária total for ≥ 20 horas
```

---

## 🆚 SLIDE 2: RN vs RF - QUAL A DIFERENÇA?

### **REGRA DE NEGÓCIO (RN)**
- 🔒 Define **CONDIÇÕES**
- 🚫 Estabelece **RESTRIÇÕES**
- ⚖️ Determina **CRITÉRIOS**
- 📏 Impõe **LIMITES**

**Formato:** `RN001`

**Palavras-chave:** "só pode", "não pode", "deve ter", "limite de", "máximo de"

### **REQUISITO FUNCIONAL (RF)**
- ⚙️ Descreve **AÇÕES**
- 🎯 Define **FUNCIONALIDADES**
- 🔧 Especifica "O QUE" o sistema **FAZ**

**Formato:** `RF001`

**Palavras-chave:** "deve permitir", "deve registrar", "deve enviar", "deve cadastrar"

---

## 📊 SLIDE 3: EXEMPLOS PRÁTICOS - SISTEMA NOA

### **🔴 REGRAS DE NEGÓCIO:**
```
RN001: Alunos podem emprestar no máximo 1 chave simultaneamente
RN002: Docentes podem emprestar até 3 equipamentos simultaneamente
RN003: Prazo máximo de empréstimo é de 7 dias corridos
RN004: Não é permitido empréstimo com pendências ativas
RN005: Empréstimos devem ser aprovados por um funcionário
```

### **🟢 REQUISITOS FUNCIONAIS:**
```
RF001: O sistema deve permitir cadastro de chaves
RF002: O sistema deve registrar empréstimos
RF003: O sistema deve registrar devoluções
RF004: O sistema deve enviar notificações de vencimento
RF005: O sistema deve gerar relatórios de empréstimos
```

---

## 🏗️ SLIDE 4: TIPOS DE REGRAS DE NEGÓCIO

### **1. 🧮 CÁLCULOS/DERIVAÇÕES**
Definem como calcular ou derivar valores
```
RN001: O valor total é a soma de todos os itens com desconto aplicado
RN002: A média final é calculada como (Nota1 + Nota2 + Nota3) / 3
```

### **2. 🚫 RESTRIÇÕES**
Limitam ou proíbem ações
```
RN003: Alunos não podem fazer matrícula em turmas cheias
RN004: Não é permitido cadastrar produtos sem estoque
```

### **3. 🔓 HABILITAÇÕES DE AÇÃO**
Definem quando uma ação pode ser executada
```
RN005: Empréstimo só pode ser feito se não houver pendências
RN006: Compra só pode ser finalizada após validação de pagamento
```

### **4. 📖 TERMOS**
Definem conceitos e nomenclaturas
```
RN007: "Aluno Regular" é aquele com matrícula ativa e sem débitos
```

### **5. 📝 FATOS**
Informações verdadeiras sobre o negócio
```
RN008: A empresa opera de segunda a sexta, das 8h às 18h
```

---

## ✍️ SLIDE 5: COMO IDENTIFICAR UMA REGRA DE NEGÓCIO?

### **Perguntas para identificar RN:**

1. ❓ **É uma CONDIÇÃO ou RESTRIÇÃO?**
   - Se SIM → É Regra de Negócio

2. ❓ **Define LIMITES ou CRITÉRIOS?**
   - Se SIM → É Regra de Negócio

3. ❓ **Usa palavras como "só pode", "não pode", "máximo", "mínimo"?**
   - Se SIM → É Regra de Negócio

4. ❓ **Impede ou permite uma ação baseado em condições?**
   - Se SIM → É Regra de Negócio

### **⚠️ ATENÇÃO:**
Se descreve **O QUE o sistema FAZ** → É Requisito Funcional (RF)

---

## 🎯 SLIDE 6: FORMATO PADRÃO DE DOCUMENTAÇÃO

### **Estrutura de uma Regra de Negócio:**

```
┌─────────────────────────────────────────────────────┐
│ ID: RN001                                           │
├─────────────────────────────────────────────────────┤
│ TIPO: Restrição                                     │
├─────────────────────────────────────────────────────┤
│ DESCRIÇÃO:                                          │
│ Alunos podem emprestar no máximo 1 chave           │
│ simultaneamente                                     │
├─────────────────────────────────────────────────────┤
│ JUSTIFICATIVA:                                      │
│ Garantir disponibilidade de chaves para todos      │
│ os alunos e evitar perda de equipamentos           │
└─────────────────────────────────────────────────────┘
```

### **Boas práticas:**
- ✅ Use identificador único (RN001, RN002...)
- ✅ Seja claro e objetivo
- ✅ Especifique valores quando necessário
- ✅ Justifique a razão da regra

---

## 🧪 SLIDE 7: EXERCÍCIO PRÁTICO - IDENTIFIQUE

### **Analise as afirmações abaixo:**

**A)** O sistema deve permitir cadastro de clientes
**B)** Clientes devem ter CPF válido para se cadastrar
**C)** O sistema deve enviar e-mail de confirmação
**D)** Desconto máximo permitido é de 15%
**E)** O sistema deve gerar relatórios mensais

### **🤔 Quais são Regras de Negócio?**

<details>
<summary>👉 Clique para ver a resposta</summary>

**RESPOSTAS:**
- A) ❌ RF (Requisito Funcional)
- B) ✅ **RN (Regra de Negócio - Restrição)**
- C) ❌ RF (Requisito Funcional)
- D) ✅ **RN (Regra de Negócio - Restrição)**
- E) ❌ RF (Requisito Funcional)

</details>

---

## 🔗 SLIDE 8: RELAÇÃO RN → RF

### **As Regras de Negócio REGEM os Requisitos Funcionais**

```
┌─────────────────────────────────────────┐
│ RN001: Alunos podem emprestar           │
│ no máximo 1 chave simultaneamente       │
└───────────────┬─────────────────────────┘
                │ REGE
                ▼
┌─────────────────────────────────────────┐
│ RF001: O sistema deve registrar         │
│ empréstimos de chaves                   │
│                                          │
│ → Validando que o aluno não possui      │
│   empréstimos ativos antes de permitir  │
│   novo empréstimo                        │
└─────────────────────────────────────────┘
```

### **❗ IMPORTANTE:**
Um Requisito Funcional **NUNCA** pode violar uma Regra de Negócio!

---

## 📚 SLIDE 9: EXEMPLO COMPLETO - BIBLIOTECA

### **CENÁRIO:**
Sistema de controle de empréstimos de livros

### **REGRAS DE NEGÓCIO:**
```
RN001: Alunos podem emprestar no máximo 3 livros simultaneamente
RN002: Prazo de empréstimo é de 14 dias
RN003: Livros em atraso geram multa de R$ 2,00 por dia
RN004: Não é permitido novo empréstimo com multas pendentes
RN005: Livros podem ser renovados 1 vez, se não houver reserva
```

### **REQUISITOS FUNCIONAIS RELACIONADOS:**
```
RF001: O sistema deve permitir registrar empréstimos (RN001, RN002, RN004)
RF002: O sistema deve calcular multas automaticamente (RN003)
RF003: O sistema deve permitir renovação de empréstimos (RN005)
RF004: O sistema deve bloquear empréstimos com pendências (RN004)
```

---

## 💡 SLIDE 10: DICAS IMPORTANTES

### **✅ FAÇA:**
- Identifique RN antes de definir RF
- Documente todas as restrições e limites
- Use linguagem clara e objetiva
- Especifique valores numéricos quando necessário
- Justifique as regras para o cliente entender

### **❌ NÃO FAÇA:**
- Confundir RN com RF
- Criar RF que violam RN
- Deixar regras implícitas (não documentadas)
- Usar linguagem vaga ("alguns", "muitos", "às vezes")
- Esquecer de validar RN com o cliente

---

## 🎯 SLIDE 11: RESUMO - CHECKLIST

### **Como identificar e documentar RN:**

- [ ] **1.** Identifica CONDIÇÕES e RESTRIÇÕES?
- [ ] **2.** Define LIMITES ou CRITÉRIOS?
- [ ] **3.** Usa formato padrão RN001, RN002...?
- [ ] **4.** Está clara e objetiva?
- [ ] **5.** Especifica valores quando necessário?
- [ ] **6.** Foi validada com o cliente/stakeholder?
- [ ] **7.** Está relacionada aos RF que ela rege?

### **Fórmula mágica:**
```
Se DEFINE CONDIÇÕES → É RN
Se DESCREVE AÇÕES → É RF
```

---

## 📖 SLIDE 12: REFERÊNCIAS E PRÓXIMOS PASSOS

### **Materiais de Estudo:**
- 📘 Princípios de Análise e Projeto - Eduardo Bezerra
- 📗 PMBOK - Gerenciamento de Requisitos
- 📙 Manual SENAI - Modelagem de Sistemas

### **Próxima Aula:**
- Requisitos Funcionais (RF) - Aprofundamento
- Requisitos Não-Funcionais (RNF)
- Relação RN ↔ RF ↔ RNF

### **Atividade Prática:**
Identificar e documentar as Regras de Negócio do **Sistema NOA**

---

## ❓ DÚVIDAS?

**Professor:** [Seu Nome]  
**E-mail:** [seu.email@senai.br]  
**Sala/Turma:** [Turma]

**💬 Perguntas frequentes:**
- "Como diferenciar RN de RF?"
- "Toda restrição é uma RN?"
- "Posso ter RF sem RN?"

---

## FIM
### Obrigado! 🚀

**Próximo encontro:**
Diagrama de Casos de Uso

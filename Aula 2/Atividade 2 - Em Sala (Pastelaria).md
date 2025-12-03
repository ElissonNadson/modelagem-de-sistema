# 📚 Atividade 2 - Em Sala

## Dicionário de Classes: Sistema de Pastelaria

**Disciplina:** Análise e Projeto de Sistemas  
**Tipo:** Atividade em Sala  
**Tempo estimado:** 50 minutos

---

## 🎯 Objetivo

Praticar a elaboração de um **Dicionário de Classes** a partir de um cenário descritivo de um sistema para uma pastelaria.

---

## 📖 Cenário: Sistema da Pastelaria "Sabor & Massa"

A pastelaria "Sabor & Massa" deseja informatizar seu processo de vendas e gestão. O sistema deverá controlar:

### Descrição do Negócio

A pastelaria trabalha com diversos **produtos** como pastéis (diversos sabores), bebidas (sucos, refrigerantes, água) e sobremesas. Cada produto possui um código, nome, descrição, preço unitário e categoria (pastel, bebida, sobremesa).

Os **pastéis** são produtos especiais que possuem informações adicionais como tipo de massa (tradicional, integral, sem glúten) e recheio principal.

Os **clientes** podem fazer **pedidos** no balcão ou por delivery. Cada pedido contém a data/hora, o status (aguardando, em preparo, pronto, entregue), o tipo (balcão ou delivery) e o valor total. Um pedido pode conter vários produtos, e para cada produto no pedido é registrada a quantidade.

Para pedidos **delivery**, é necessário registrar o endereço de entrega, taxa de entrega e telefone de contato.

Os **funcionários** da pastelaria são identificados por matrícula, nome, CPF, telefone e cargo (atendente, cozinheiro, entregador). Cada pedido é atendido por um funcionário.

A pastelaria também controla seu **estoque de ingredientes**, registrando o nome do ingrediente, quantidade disponível, unidade de medida e quantidade mínima para alerta.

---

## 📋 Sua Tarefa

Com base no cenário apresentado, elabore o **Dicionário de Classes** completo para o sistema.

### Classes Identificadas (preencha o dicionário para cada uma):

1. **Produto**
2. **Pastel** (especialização de Produto)
3. **Cliente**
4. **Pedido**
5. **PedidoDelivery** (especialização de Pedido)
6. **ItemPedido** (classe associativa entre Pedido e Produto)
7. **Funcionario**
8. **Ingrediente**

---

## 📝 Modelo para Preenchimento

### CLASSE: Produto

| Campo | Valor |
|-------|-------|
| **Descrição** | *[Descreva o propósito desta classe]* |

**Atributos:**

| Nome | Tipo | Visibilidade | Descrição |
|------|------|--------------|-----------|
| codigo | | | |
| nome | | | |
| descricao | | | |
| precoUnitario | | | |
| categoria | | | |

**Métodos:**

| Nome | Retorno | Visibilidade | Descrição |
|------|---------|--------------|-----------|
| | | | |

**Relacionamentos:**
- *[Liste os relacionamentos desta classe]*

---

### CLASSE: Pastel

| Campo | Valor |
|-------|-------|
| **Descrição** | *[Descreva o propósito desta classe]* |

**Atributos:**

| Nome | Tipo | Visibilidade | Descrição |
|------|------|--------------|-----------|
| tipoMassa | | | |
| recheioPrincipal | | | |

**Métodos:**

| Nome | Retorno | Visibilidade | Descrição |
|------|---------|--------------|-----------|
| | | | |

**Relacionamentos:**
- *[Liste os relacionamentos desta classe]*

---

### CLASSE: Cliente

| Campo | Valor |
|-------|-------|
| **Descrição** | *[Descreva o propósito desta classe]* |

**Atributos:**

| Nome | Tipo | Visibilidade | Descrição |
|------|------|--------------|-----------|
| | | | |
| | | | |
| | | | |

**Métodos:**

| Nome | Retorno | Visibilidade | Descrição |
|------|---------|--------------|-----------|
| | | | |

**Relacionamentos:**
- *[Liste os relacionamentos desta classe]*

---

### CLASSE: Pedido

| Campo | Valor |
|-------|-------|
| **Descrição** | *[Descreva o propósito desta classe]* |

**Atributos:**

| Nome | Tipo | Visibilidade | Descrição |
|------|------|--------------|-----------|
| | | | |
| | | | |
| | | | |
| | | | |

**Métodos:**

| Nome | Retorno | Visibilidade | Descrição |
|------|---------|--------------|-----------|
| | | | |

**Relacionamentos:**
- *[Liste os relacionamentos desta classe]*

---

### CLASSE: PedidoDelivery

| Campo | Valor |
|-------|-------|
| **Descrição** | *[Descreva o propósito desta classe]* |

**Atributos:**

| Nome | Tipo | Visibilidade | Descrição |
|------|------|--------------|-----------|
| | | | |
| | | | |
| | | | |

**Métodos:**

| Nome | Retorno | Visibilidade | Descrição |
|------|---------|--------------|-----------|
| | | | |

**Relacionamentos:**
- *[Liste os relacionamentos desta classe]*

---

### CLASSE: ItemPedido (Classe Associativa)

| Campo | Valor |
|-------|-------|
| **Descrição** | *[Descreva o propósito desta classe]* |

**Atributos:**

| Nome | Tipo | Visibilidade | Descrição |
|------|------|--------------|-----------|
| | | | |
| | | | |

**Métodos:**

| Nome | Retorno | Visibilidade | Descrição |
|------|---------|--------------|-----------|
| | | | |

**Relacionamentos:**
- *[Liste os relacionamentos desta classe]*

---

### CLASSE: Funcionario

| Campo | Valor |
|-------|-------|
| **Descrição** | *[Descreva o propósito desta classe]* |

**Atributos:**

| Nome | Tipo | Visibilidade | Descrição |
|------|------|--------------|-----------|
| | | | |
| | | | |
| | | | |
| | | | |
| | | | |

**Métodos:**

| Nome | Retorno | Visibilidade | Descrição |
|------|---------|--------------|-----------|
| | | | |

**Relacionamentos:**
- *[Liste os relacionamentos desta classe]*

---

### CLASSE: Ingrediente

| Campo | Valor |
|-------|-------|
| **Descrição** | *[Descreva o propósito desta classe]* |

**Atributos:**

| Nome | Tipo | Visibilidade | Descrição |
|------|------|--------------|-----------|
| | | | |
| | | | |
| | | | |
| | | | |

**Métodos:**

| Nome | Retorno | Visibilidade | Descrição |
|------|---------|--------------|-----------|
| | | | |

**Relacionamentos:**
- *[Liste os relacionamentos desta classe]*

---

## 🔍 Perguntas para Reflexão

Após completar o dicionário, responda:

1. **Qual é a diferença entre Pedido e PedidoDelivery?** Por que usamos herança neste caso?

2. **Por que ItemPedido é uma classe associativa?** O que acontece se um pedido for excluído?

3. **Qual tipo de relacionamento (agregação ou composição) existe entre Pedido e ItemPedido?** Justifique.

4. **Identifique as multiplicidades** dos seguintes relacionamentos:
   - Cliente — Pedido: ______
   - Pedido — ItemPedido: ______
   - Funcionario — Pedido: ______

---

## ✅ Critérios de Avaliação

| Critério | Pontuação |
|----------|-----------|
| Preenchimento correto dos atributos (nome e tipo) | 3,0 |
| Visibilidade adequada | 1,0 |
| Descrições claras e objetivas | 2,0 |
| Identificação correta dos relacionamentos | 2,0 |
| Respostas às perguntas de reflexão | 2,0 |
| **Total** | **10,0** |

---

## 💡 Lembrete de Visibilidade

| Símbolo | Visibilidade | Significado |
|---------|--------------|-------------|
| `-` | Privada | Apenas a própria classe acessa |
| `+` | Pública | Qualquer classe pode acessar |
| `#` | Protegida | Classe e subclasses acessam |

---

**Mãos à obra!** 🥟

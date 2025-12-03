# 📋 ANÁLISE: REQUISITOS FUNCIONAIS vs NÃO-FUNCIONAIS

## 🎯 TEMPLATES DE ESCRITA

### REQUISITOS FUNCIONAIS (RF)
**Template:**
```
"O sistema deve [VERBO] [OBJETO] [COMPLEMENTO]"
```

**Características:**
- ✅ Sempre começa com verbo (ação)
- ✅ Descreve comportamento observável
- ✅ Pode ser testado e validado
- ✅ Responde: **"O QUE o sistema faz?"**

---

### REQUISITOS NÃO-FUNCIONAIS (RNF)
**Template:**
```
"O sistema deve [PROTEGER/GARANTIR] [O QUÊ] usando/através de [MECANISMO]"
```

**Características:**
- ✅ Descreve qualidade/atributo do sistema
- ✅ Define **COMO** o sistema se comporta
- ✅ Especifica restrições e padrões
- ✅ Responde: **"COMO o sistema deve se comportar?"**

---

## 🔍 ANÁLISE DOS REQUISITOS

### 1️⃣ "O sistema deve permitir que usuários façam upload de fotos"

```
O sistema deve [PERMITIR] [que usuários façam upload de fotos] [sem complemento]
       └─────┬─────┘      └────────────┬────────────┘
           VERBO               OBJETO
```

**Classificação:** ✅ **RF (Requisito Funcional)**

**Por quê?**
- Define uma **funcionalidade** (ação que o sistema realiza)
- Responde "O QUE o sistema faz?" → Permite upload
- É uma **ação observável** e testável

---

### 2️⃣ "O sistema deve carregar a página inicial em menos de 2 segundos"

```
O sistema deve [CARREGAR] [a página inicial] [em menos de 2 segundos]
       └─────┬──────┘  └───────┬──────┘  └──────────┬──────────┘
           VERBO          OBJETO          RESTRIÇÃO DE QUALIDADE
```

**Classificação:** ✅ **RNF (Requisito Não-Funcional)**

**Por quê?**
- Define uma **qualidade** (desempenho/tempo de resposta)
- Responde "COMO o sistema deve se comportar?" → Rápido (< 2s)
- Estabelece um **atributo de qualidade** mensurável
- Categoria: **DESEMPENHO**

---

### 3️⃣ "O sistema deve enviar notificações por e-mail e SMS"

```
O sistema deve [ENVIAR] [notificações] [por e-mail e SMS]
       └────┬─────┘  └──────┬──────┘  └────────┬────────┘
          VERBO         OBJETO            MECANISMO
```

**Classificação:** ✅ **RF (Requisito Funcional)**

**Por quê?**
- Define uma **funcionalidade** (envio de notificações)
- Responde "O QUE o sistema faz?" → Envia notificações
- É uma **ação concreta** que o sistema executa
- Os canais (e-mail/SMS) são parte da funcionalidade

---

### 4️⃣ "O sistema deve funcionar em português, inglês e espanhol"

```
O sistema deve [FUNCIONAR] [em português, inglês e espanhol] [sem complemento]
             └─────┬──────┘  └────────────┬────────────┘
               VERBO           RESTRIÇÃO/ATRIBUTO
```

**Classificação:** ✅ **RNF (Requisito Não-Funcional)**

**Por quê?**
- Define uma **qualidade** (internacionalização/portabilidade)
- Responde "COMO o sistema deve se comportar?" → Multilíngue
- Estabelece uma **restrição de suporte**
- Categoria: **PORTABILIDADE / USABILIDADE**

---

### 5️⃣ "O sistema deve gerar relatórios de vendas mensais"

```
O sistema deve [GERAR] [relatórios de vendas mensais] [sem complemento]
             └───┬────┘  └──────────┬──────────┘
                 VERBO            OBJETO
```

**Classificação:** ✅ **RF (Requisito Funcional)**

**Por quê?**
- Define uma **funcionalidade** (geração de relatórios)
- Responde "O QUE o sistema faz?" → Gera relatórios
- É uma **ação observável** com resultado concreto

---

### 6️⃣ "O sistema deve ter interface acessível para daltônicos"

```
O sistema deve [TER] [interface acessível] [para daltônicos]
             └──┬───┘  └────────┬────────┘  └──────┬──────┘
               VERBO      ATRIBUTO         CONTEXTO/RESTRIÇÃO
```

**Classificação:** ✅ **RNF (Requisito Não-Funcional)**

**Por quê?**
- Define uma **qualidade** (acessibilidade)
- Responde "COMO o sistema deve se comportar?" → Acessível
- Estabelece um **atributo de qualidade** da interface
- Categoria: **USABILIDADE / ACESSIBILIDADE**

---

## 📊 RESUMO DA CLASSIFICAÇÃO

| # | Requisito | Tipo | Categoria |
|---|-----------|------|-----------|
| 1 | Upload de fotos | ✅ **RF** | Funcionalidade |
| 2 | Carregar em < 2s | ⚡ **RNF** | Desempenho |
| 3 | Enviar notificações | ✅ **RF** | Funcionalidade |
| 4 | Funcionar em 3 idiomas | 🌐 **RNF** | Portabilidade |
| 5 | Gerar relatórios | ✅ **RF** | Funcionalidade |
| 6 | Interface acessível | ♿ **RNF** | Usabilidade |

---

## 🎓 DICA PRÁTICA PARA DIFERENCIAR

### ❓ PERGUNTA-CHAVE

**É Requisito Funcional (RF)?**
- ✅ Responda: "O sistema **FAZ** isso?" → **SIM = RF**

**É Requisito Não-Funcional (RNF)?**
- ✅ Responda: "Isso define **COMO/QUAL QUALIDADE** o sistema tem?" → **SIM = RNF**

---

### 🔑 PALAVRAS-CHAVE

**Indicam RF:**
- Permitir, cadastrar, enviar, gerar, calcular, exibir, processar
- **Ações concretas**

**Indicam RNF:**
- Em menos de X segundos, disponível X%, em X idiomas, acessível para
- **Qualidades, restrições, atributos**

---

## 📝 EXEMPLOS ADICIONAIS

### ✅ FUNCIONAIS (RF)
```
RF01: O sistema deve [CADASTRAR] [novos usuários] [com CPF e e-mail]
RF02: O sistema deve [CALCULAR] [o frete] [baseado no CEP]
RF03: O sistema deve [EXIBIR] [histórico de compras] [dos últimos 12 meses]
```

### ⚡ NÃO-FUNCIONAIS (RNF)
```
RNF01: O sistema deve [PROCESSAR] [transações] [em menos de 3 segundos]
RNF02: O sistema deve [ESTAR DISPONÍVEL] [99,9% do tempo] [24/7]
RNF03: O sistema deve [CRIPTOGRAFAR] [dados pessoais] [usando AES-256]
```

---

## 🎯 EXERCÍCIO DE FIXAÇÃO

**Classifique os requisitos abaixo:**

1. "O sistema deve suportar 1000 usuários simultâneos" → **[ ] RF  [ ] RNF**
2. "O sistema deve permitir cancelamento de pedidos" → **[ ] RF  [ ] RNF**
3. "O sistema deve ter interface responsiva para mobile" → **[ ] RF  [ ] RNF**
4. "O sistema deve importar dados em formato CSV e Excel" → **[ ] RF  [ ] RNF**
5. "O sistema deve ter tempo de recuperação inferior a 1 hora" → **[ ] RF  [ ] RNF**

---

## ✅ GABARITO

1. **RNF** - Desempenho (capacidade)
2. **RF** - Funcionalidade (ação)
3. **RNF** - Usabilidade (qualidade da interface)
4. **RF** - Funcionalidade (importação)
5. **RNF** - Confiabilidade (recuperação)

---

**📚 Material criado para: Encontro 1 - Modelagem de Sistemas**  
**👨‍🏫 Professor: Elisson Nadson**  
**📅 Data: 13 de novembro de 2025**

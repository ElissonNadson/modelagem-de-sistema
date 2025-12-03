# 📋 GUIA: COMO CRIAR O QUIZ NO GOOGLE FORMS

## OPÇÃO 1: IMPORTAR CSV (MAIS RÁPIDO) ⚡

Infelizmente o Google Forms não aceita importação direta de CSV. Use a **OPÇÃO 2** abaixo.

---

## OPÇÃO 2: CRIAR MANUALMENTE (RECOMENDADO) ✅

### PASSO 1: Criar novo formulário
1. Acesse: https://forms.google.com
2. Clique em **"+ Novo formulário"** (ícone +)
3. Clique na engrenagem ⚙️ (Configurações) no topo
4. Ative:
   - ✅ **"Transformar em um teste"**
   - ✅ Liberar nota: **"Mais tarde, manualmente"**
   - ⬜ **NÃO** marcar "Coletar endereços de e-mail" (opcional)
5. Em **"Geral"**:
   - ✅ Limitar a 1 resposta
   - ✅ Não permitir edição após envio

---

### PASSO 2: Configurar Título e Descrição

**Título:** Quiz de Nivelamento - Modelagem de Sistemas

**Descrição:**
```
📚 DIAGNÓSTICO DE APRENDIZAGEM (NÃO VALE NOTA)

Bem-vindo(a) ao Quiz de Nivelamento!

Este quiz tem como objetivo identificar os conhecimentos que você já domina e os pontos que precisam ser reforçados.

⏰ Tempo estimado: 30 minutos
📊 Total de questões: 46
💡 Dica: Responda com sinceridade - queremos saber o que você LEMBRA, não o que você consegue pesquisar!

Boa sorte! 🚀
```

---

### PASSO 3: Criar Seções

Clique em **"Adicionar seção"** (ícone com duas barras) para organizar:

#### SEÇÃO 1: Informações do Aluno
1. **Nome completo** (Resposta curta, obrigatória)
2. **Turma** (Resposta curta, obrigatória)

#### SEÇÃO 2: Conceitos Fundamentais
_(Use o arquivo QUIZ_NIVELAMENTO_GOOGLEFORMS.txt como referência)_

---

### PASSO 4: Tipos de Questão no Google Forms

**Para questões de múltipla escolha (uma resposta):**
1. Selecione: **"Múltipla escolha"**
2. Digite a pergunta
3. Adicione as 4 alternativas
4. Clique em **"Chave de resposta"** (embaixo)
5. Selecione a resposta correta
6. Defina pontos: **1 ponto**
7. Marque como **"Obrigatória"**

**Para questões de seleção múltipla (várias respostas):**
1. Selecione: **"Caixas de seleção"**
2. Digite a pergunta
3. Adicione todas as opções
4. Clique em **"Chave de resposta"**
5. Marque TODAS as respostas corretas
6. Defina pontos: **1 ponto**
7. Marque como **"Obrigatória"**

**Para questões de resposta curta:**
1. Selecione: **"Resposta curta"**
2. Digite a pergunta
3. Clique em **"Chave de resposta"**
4. Digite a resposta esperada (ex: "abstração")
5. Defina pontos: **1 ponto**
6. Marque como **"Obrigatória"**

**Para questões de autoavaliação (escala):**
1. Selecione: **"Escala linear"**
2. Configure: de **1** a **5**
3. Rótulo 1: "Não entendi nada"
4. Rótulo 5: "Domino completamente"
5. **NÃO** definir pontos (sem gabarito)
6. Marque como **"Obrigatória"**

**Para questões abertas:**
1. Selecione: **"Parágrafo"**
2. Digite a pergunta
3. **NÃO** definir pontos (análise qualitativa)
4. Marcar como **"Opcional"**

---

## OPÇÃO 3: COPIAR E COLAR RÁPIDO 🚀

Abra o arquivo **QUIZ_NIVELAMENTO_GOOGLEFORMS.txt** e vá copiando questão por questão:

### TEMPLATE PARA COPIAR:

**QUESTÃO DE MÚLTIPLA ESCOLHA:**
```
Tipo: Múltipla escolha
Pergunta: [Cole a pergunta aqui]
Opções:
( ) [Opção 1]
( ) [Opção 2]
( ) [Opção 3]
( ) [Opção 4]
Resposta correta: [A marcada com X]
Pontos: 1
Obrigatória: Sim
```

---

## DICAS IMPORTANTES 💡

### Configurações Finais:
1. **Tema visual:** Escolha uma cor SENAI (azul)
2. **Mensagem de confirmação:**
   ```
   Obrigado por participar do Quiz de Nivelamento! 🎉
   
   Este diagnóstico nos ajudará a identificar os pontos que precisam 
   ser reforçados durante os próximos encontros.
   
   Lembre-se: esta atividade NÃO vale nota!
   
   Nos vemos na revisão! 🚀
   ```

3. **Limitar tempo (opcional):**
   - Clique em ⚙️ Configurações
   - Na aba "Apresentação"
   - **NÃO** há opção nativa de tempo no Google Forms
   - Alternativa: Use a extensão **"FormLimiter"** (gratuita)

---

## ESTRUTURA COMPLETA DO QUIZ

### 📊 Total: 46 questões

| Seção | Questões | Tipo |
|-------|----------|------|
| Informações | 2 | Resposta curta |
| Conceitos Fundamentais | 3 | Múltipla escolha + Curta |
| Regras de Negócio | 5 | Múltipla escolha + Seleção múltipla |
| Requisitos Funcionais | 5 | Múltipla escolha + Curta |
| Requisitos Não-Funcionais | 5 | Múltipla escolha |
| Casos de Uso | 6 | Múltipla escolha + Seleção múltipla |
| MER | 5 | Múltipla escolha |
| Metodologias Ágeis | 5 | Múltipla escolha + Seleção múltipla |
| Sistemas de Informação | 2 | Múltipla escolha |
| Aplicação Prática (NOA) | 3 | Múltipla escolha |
| Reflexão/Autoavaliação | 5 | Escala + Parágrafo |

---

## ALTERNATIVA: USAR IA PARA ACELERAR 🤖

1. Copie todo o conteúdo do arquivo **QUIZ_NIVELAMENTO_GOOGLEFORMS.txt**
2. Abra o ChatGPT ou Claude
3. Cole este prompt:

```
Transforme estas questões em um formato que eu possa copiar 
e colar rapidamente no Google Forms. Para cada questão, 
forneça no formato:

QUESTÃO X:
Tipo: [tipo]
Pergunta: [pergunta]
Opções: [liste as opções]
Resposta: [resposta correta]
Pontos: 1

[COLE AQUI TODO O CONTEÚDO DO ARQUIVO]
```

---

## APÓS CRIAR O FORMULÁRIO

### Teste antes de enviar:
1. Clique no ícone 👁️ (Visualizar)
2. Responda o formulário como se fosse aluno
3. Verifique se:
   - Todas as questões aparecem
   - As respostas corretas estão marcadas
   - A pontuação está configurada
   - Mensagens aparecem corretamente

### Compartilhar com alunos:
1. Clique em **"Enviar"**
2. Copie o link
3. Cole no slide 6 do arquivo **SLIDES_ENCONTRO_1.txt**
4. Compartilhe com os alunos no dia 13/11

---

## ESTIMATIVA DE TEMPO

- ⏱️ Criação manual: **60-90 minutos**
- ⏱️ Com IA auxiliando: **30-45 minutos**
- ⏱️ Alunos responderem: **25-30 minutos**

---

## APOIO EXTRA

Se precisar de ajuda durante a criação:
1. Vá questão por questão do arquivo .txt
2. Configure tipo, pergunta, opções, gabarito
3. Não se preocupe com perfeição - pode editar depois!

**Sucesso na criação do quiz! 🎯📝**

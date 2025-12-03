# 📚 Atividade 1 - Para Casa

## Modelagem de Sistema Orientado a Objetos

**Disciplina:** Análise e Projeto de Sistemas  
**Tipo:** Atividade Individual  
**Prazo de Entrega:** _____________

---

## 🎯 Objetivo

Aplicar os conceitos de análise e modelagem de sistemas orientados a objetos no projeto que você está desenvolvendo, utilizando as técnicas de documentação e diagramação estudadas em aula.

---

## 📋 Instruções

Utilizando o **projeto que você está desenvolvendo**, elabore os seguintes artefatos:

### 1. Requisitos do Sistema

#### 1.1 Requisitos Funcionais (RF)
Liste pelo menos **8 requisitos funcionais** do seu sistema, seguindo o padrão:

| Código | Descrição | Prioridade |
|--------|-----------|------------|
| RF01 | O sistema deve permitir... | Alta/Média/Baixa |
| RF02 | O sistema deve permitir... | Alta/Média/Baixa |
| ... | ... | ... |

**Dica:** Lembre-se de incluir requisitos operacionais (CRUD - Cadastrar, Consultar, Alterar, Excluir) para as principais entidades do sistema.

#### 1.2 Requisitos Não Funcionais (RNF)
Liste pelo menos **5 requisitos não funcionais**, categorizando-os:

| Código | Categoria | Descrição |
|--------|-----------|-----------|
| RNF01 | Usabilidade | O sistema deve... |
| RNF02 | Desempenho | O sistema deve... |
| RNF03 | Segurança | O sistema deve... |
| ... | ... | ... |

**Categorias sugeridas:** Usabilidade, Desempenho, Segurança, Confiabilidade, Portabilidade, Manutenibilidade.

---

### 2. Diagrama de Caso de Uso

Elabore o **Diagrama de Caso de Uso** do seu sistema contendo:

- [ ] Pelo menos **2 atores** identificados
- [ ] Pelo menos **10 casos de uso**
- [ ] Relacionamentos entre atores e casos de uso
- [ ] Relacionamentos entre casos de uso (include, extend) quando aplicável
- [ ] Limite do sistema (retângulo)

**Ferramenta sugerida:** Astah, Lucidchart, Draw.io, StarUML ou similar.

---

### 3. Diagrama de Classes

Elabore o **Diagrama de Classes de Análise** do seu sistema contendo:

- [ ] Pelo menos **6 classes** identificadas
- [ ] **Atributos** de cada classe (nome e tipo)
- [ ] **Métodos** principais de cada classe
- [ ] **Associações** entre as classes com multiplicidades
- [ ] Pelo menos **1 generalização/especialização** (herança)
- [ ] Identificar **classes abstratas** (se houver)
- [ ] Utilizar **agregação ou composição** quando apropriado

**Lembre-se:**
- Utilize a notação correta da UML
- Indique as multiplicidades (1, 0..1, *, 1..*, etc.)
- Classes abstratas devem ter o nome em *itálico*

---

### 4. Dicionário de Classes

Para **cada classe** do seu diagrama, elabore o dicionário seguindo o modelo:

#### Modelo de Dicionário de Classe

```
┌─────────────────────────────────────────────────────────────┐
│ CLASSE: [Nome da Classe]                                    │
├─────────────────────────────────────────────────────────────┤
│ DESCRIÇÃO: [Breve descrição do propósito da classe]         │
├─────────────────────────────────────────────────────────────┤
│ ATRIBUTOS:                                                  │
│ ┌──────────────┬──────────┬─────────────┬─────────────────┐ │
│ │ Nome         │ Tipo     │ Visibilidade│ Descrição       │ │
│ ├──────────────┼──────────┼─────────────┼─────────────────┤ │
│ │ atributo1    │ String   │ - (privado) │ Descrição...    │ │
│ │ atributo2    │ Integer  │ - (privado) │ Descrição...    │ │
│ └──────────────┴──────────┴─────────────┴─────────────────┘ │
├─────────────────────────────────────────────────────────────┤
│ MÉTODOS:                                                    │
│ ┌──────────────┬──────────┬─────────────┬─────────────────┐ │
│ │ Nome         │ Retorno  │ Visibilidade│ Descrição       │ │
│ ├──────────────┼──────────┼─────────────┼─────────────────┤ │
│ │ metodo1()    │ void     │ + (público) │ Descrição...    │ │
│ │ metodo2()    │ boolean  │ + (público) │ Descrição...    │ │
│ └──────────────┴──────────┴─────────────┴─────────────────┘ │
├─────────────────────────────────────────────────────────────┤
│ RELACIONAMENTOS:                                            │
│ - Associação com [Classe X] - multiplicidade: 1..*          │
│ - Herda de [Classe Y]                                       │
└─────────────────────────────────────────────────────────────┘
```

---

## 📝 Formato de Entrega

1. **Documento Word ou PDF** contendo:
   - Capa com identificação
   - Requisitos Funcionais e Não Funcionais
   - Dicionário de Classes

2. **Imagens dos Diagramas** (PNG ou PDF):
   - Diagrama de Caso de Uso
   - Diagrama de Classes

---

## ✅ Critérios de Avaliação

| Critério | Pontuação |
|----------|-----------|
| Requisitos Funcionais completos e bem descritos | 2,0 |
| Requisitos Não Funcionais adequados | 1,0 |
| Diagrama de Caso de Uso correto e completo | 2,5 |
| Diagrama de Classes com notação correta | 2,5 |
| Dicionário de Classes detalhado | 2,0 |
| **Total** | **10,0** |

---

## 💡 Dicas

1. **Identifique classes** a partir dos requisitos funcionais operacionais (dados gerenciados)
2. **Revise os conceitos** de associação, agregação, composição e herança
3. **Seja consistente** na nomenclatura (substantivos no singular para classes)
4. **Verifique as multiplicidades** - elas indicam a cardinalidade do relacionamento

---

**Bom trabalho!** 🚀

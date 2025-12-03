# PLANO DE AULA - ENCONTRO 5
## Conectividade, Interoperabilidade, PDCA e Canvas

**Curso:** Técnico em Desenvolvimento de Sistemas  
**UC:** Modelagem de Sistemas | **Módulo:** II  
**Carga Horária:** 4h/aula | **Data:** 12/12/2025 (Quinta-feira)  
**Docente:** Elisson Nadson

---

## CONTEXTO

Este é o quinto encontro dos sete restantes. Até aqui os alunos já estudaram:
- **Encontro 1 (13/11):** Apresentação + Diagnóstico + Revisão
- **Encontro 2 (14/11):** Diagrama de Classes Parte 1
- **Encontro 3 (04/12):** Diagrama de Classes Parte 2 + Sequência
- **Encontro 4 (05/12):** Sequência + Atividades

Hoje abordaremos três tópicos importantes da ementa que ainda não foram trabalhados:
- **Item 5:** Projeção de Sistemas para Conectividade e Interoperabilidade
- **Item 9:** Ciclo PDCA (Organização de Dados)
- **Item 10:** Modelagem de Negócios (Canvas)

---

## OBJETIVO GERAL

Capacitar os estudantes a compreender conceitos de integração de sistemas, aplicar o ciclo PDCA na melhoria de processos de modelagem e utilizar o Business Model Canvas para visualizar modelos de negócio.

---

## CAPACIDADES A DESENVOLVER

### Capacidades Técnicas:
- **Integrar sistemas orientados para conectividade e interoperabilidade**
- **Reconhecer requisitos de qualidade, integridade e segurança da informação**
- Identificar necessidades de integração entre sistemas
- Aplicar metodologias de melhoria contínua (PDCA)
- Utilizar ferramentas de modelagem de negócios (Canvas)

### Capacidades Socioemocionais:
- **Demonstrar iniciativa** na resolução de problemas
- **Aplicar princípios de organização** no planejamento de projetos
- Trabalhar de forma autônoma e colaborativa

---

## CONHECIMENTOS RELACIONADOS

### 1. CONECTIVIDADE E INTEROPERABILIDADE
- Definição e importância
- APIs (Application Programming Interface)
- Web Services (REST, SOAP)
- Protocolos de comunicação (HTTP, HTTPS, JSON, XML)
- Integração de sistemas
- Arquitetura de microsserviços (conceito básico)

### 2. CICLO PDCA
- Plan (Planejar)
- Do (Executar)
- Check (Verificar)
- Act (Agir)
- Aplicação na modelagem de sistemas
- Melhoria contínua

### 3. BUSINESS MODEL CANVAS
- Nove blocos do Canvas
- Como preencher cada bloco
- Aplicação em projetos de software
- Relação com modelagem de sistemas

---

## CRONOGRAMA DETALHADO

### MOMENTO 1: Acolhimento e Contextualização (20min)

**Atividades:**
1. Recepção da turma (5min)
2. Recapitular aulas anteriores (10min)
   - Diagramas UML trabalhados até agora
   - Sistema NOA modelado
3. Apresentar objetivos do encontro (5min)
   - Visão geral dos 3 tópicos
   - Importância na prática profissional

---

### MOMENTO 2: Conectividade e Interoperabilidade (50min)

**Objetivo:** Compreender como sistemas se comunicam

**Atividades:**

1. **Exposição dialogada (25min)**
   
   **Conectividade:**
   - O que é conectividade entre sistemas?
   - Por que sistemas precisam se comunicar?
   - Exemplos práticos:
     - Sistema de pagamento integrado com banco
     - Sistema acadêmico integrado com biblioteca
     - App de delivery integrado com restaurante
   
   **Interoperabilidade:**
   - Capacidade de sistemas diferentes trabalharem juntos
   - Padrões e protocolos comuns
   - Exemplos: Sistema A (Java) conversando com Sistema B (Python)

   **APIs (Application Programming Interface):**
   - O que é uma API?
   - Analogia: API como "menu de restaurante" (você pede, o sistema entrega)
   - Tipos de APIs: REST (mais comum), SOAP
   
   **REST API:**
   - Métodos HTTP: GET, POST, PUT, DELETE
   - Exemplo prático: API de consulta de CEP
   - JSON como formato de dados

   **Exemplo no quadro:**
   ```
   GET https://api.sistema-noa.senai.br/chaves
   Resposta (JSON):
   {
     "chaves": [
       {"id": 1, "numero": "101", "sala": "Lab Informática"},
       {"id": 2, "numero": "102", "sala": "Lab Redes"}
     ]
   }
   ```

2. **Demonstração prática (15min)**
   - Acessar uma API pública (exemplo: ViaCEP)
   - Mostrar requisição e resposta
   - Navegador ou ferramenta Postman
   - URL: https://viacep.com.br/ws/44000000/json/

3. **Discussão em grupo (10min)**
   - "Como o Sistema NOA poderia se integrar com outros sistemas do SENAI?"
   - Exemplos: Sistema Acadêmico, Sistema de Controle de Acesso, etc.

---

### INTERVALO (15min)

---

### MOMENTO 3: Ciclo PDCA (45min)

**Objetivo:** Aplicar metodologia de melhoria contínua

**Atividades:**

1. **Apresentação do PDCA (20min)**
   
   **O que é PDCA?**
   - Metodologia de gestão de qualidade
   - Ciclo contínuo de melhoria
   - Criado por William Deming
   
   **As 4 Etapas:**
   
   **PLAN (Planejar):**
   - Identificar problema
   - Analisar causas
   - Definir objetivos
   - Criar plano de ação
   
   **DO (Executar):**
   - Implementar o plano
   - Registrar ações
   - Coletar dados
   
   **CHECK (Verificar):**
   - Analisar resultados
   - Comparar com objetivos
   - Identificar desvios
   
   **ACT (Agir):**
   - Padronizar (se deu certo)
   - Corrigir (se deu errado)
   - Reiniciar o ciclo

   **Diagrama circular no quadro:**
   ```
        PLAN ─→ DO
         ↑       ↓
        ACT ←─ CHECK
   ```

2. **PDCA aplicado à Modelagem (15min)**
   
   **Exemplo prático:**
   - **PLAN:** Planejar modelagem do Sistema NOA
   - **DO:** Criar diagramas UML
   - **CHECK:** Validar com stakeholder (funcionária NOA)
   - **ACT:** Corrigir/melhorar diagramas baseado no feedback
   
   **Outro exemplo:**
   - **PLAN:** Definir requisitos com cliente
   - **DO:** Documentar RF e RNF
   - **CHECK:** Revisar com cliente
   - **ACT:** Ajustar requisitos

3. **Exercício rápido (10min)**
   - Em duplas: aplicar PDCA a um problema de modelagem
   - Exemplo: "O diagrama de classes está confuso"
   - Preencher template PDCA (fornecido)

---

### MOMENTO 4: Business Model Canvas (50min)

**Objetivo:** Visualizar modelo de negócio de forma estratégica

**Atividades:**

1. **Apresentação do Canvas (25min)**
   
   **O que é Business Model Canvas?**
   - Ferramenta visual para desenhar modelos de negócio
   - Criado por Alexander Osterwalder
   - 9 blocos que descrevem como uma empresa cria e entrega valor
   
   **Os 9 Blocos:**
   
   1. **Segmentos de Clientes:** Para quem criamos valor?
   2. **Proposta de Valor:** Que problema resolvemos?
   3. **Canais:** Como entregamos a proposta de valor?
   4. **Relacionamento com Clientes:** Como nos relacionamos?
   5. **Fontes de Receita:** Como ganhamos dinheiro?
   6. **Recursos Principais:** O que precisamos?
   7. **Atividades-Chave:** O que fazemos?
   8. **Parcerias Principais:** Quem nos ajuda?
   9. **Estrutura de Custos:** Quais são os custos?

   **Mostrar exemplo visual do Canvas (projetar ou desenhar no quadro)**

2. **Exemplo: Sistema NOA como produto (10min)**
   
   Preencher Canvas considerando Sistema NOA como um produto interno:
   
   - **Segmentos:** Docentes, Colaboradores, NOA
   - **Proposta de Valor:** Controle eficiente de chaves, redução de perdas
   - **Canais:** App web, App mobile
   - **Relacionamento:** Suporte técnico, treinamentos
   - **Receita:** Economia de tempo, redução de custos operacionais
   - **Recursos:** Servidor, banco de dados, desenvolvedores
   - **Atividades:** Desenvolvimento, manutenção, suporte
   - **Parcerias:** Infraestrutura TI SENAI, Fornecedores de hardware
   - **Custos:** Desenvolvimento, hospedagem, manutenção

3. **Discussão (15min)**
   - Como o Canvas ajuda antes de modelar um sistema?
   - Relação entre Canvas e levantamento de requisitos
   - Canvas define O QUE, Modelagem define COMO

---

### MOMENTO 5: Prática Integradora (60min)

**Objetivo:** Aplicar os 3 conceitos em uma atividade única

**Cenário:**
"Você foi contratado para melhorar o Sistema NOA. Ele precisa se integrar com o Sistema Acadêmico do SENAI e você deve aplicar PDCA para planejar essa integração."

**Tarefa em grupos (3-4 pessoas):**

1. **Canvas do Sistema NOA melhorado (20min)**
   - Preencher os 9 blocos considerando a integração
   - Usar template fornecido (papel A3 ou digital)

2. **Planejar Integração usando PDCA (15min)**
   - **PLAN:** Como integrar NOA com Sistema Acadêmico?
   - **DO:** Que ações seriam executadas?
   - **CHECK:** Como verificar se a integração funcionou?
   - **ACT:** O que fazer se houver problemas?

3. **Desenhar Integração (15min)**
   - Diagrama simples mostrando:
     - Sistema NOA
     - Sistema Acadêmico
     - API de integração (seta entre eles)
     - Dados trocados (JSON)

4. **Apresentação de 2-3 grupos (10min)**
   - 3min por grupo
   - Feedback do docente

---

### MOMENTO 6: Fechamento (20min)

**Atividades:**
1. Sistematização dos aprendizados (10min)
   - Conectividade e Interoperabilidade: integração de sistemas
   - PDCA: melhoria contínua
   - Canvas: visualização do modelo de negócio
   - Como os 3 conceitos se relacionam

2. Conexão com próxima aula (5min)
   - **18/12:** UX/UI (interfaces para usuários) + Revisão Geral
   - Como a interface do sistema é a "cara" que o usuário vê
   - Preparação para prova final (19/12)

3. Espaço para dúvidas (5min)

---

## ESTRATÉGIAS DE ENSINO

- **Exposição dialogada:** Momentos 2, 3 e 4
- **Demonstração prática:** Momento 2 (API real)
- **Trabalho em grupo:** Momentos 3 e 5
- **Estudo de caso:** Sistema NOA (integrador)
- **Aprendizagem baseada em problemas:** Momento 5

---

## CRITÉRIOS DE AVALIAÇÃO

### Avaliação Formativa (observacional):
- Compreensão dos conceitos de API e integração
- Aplicação correta do ciclo PDCA
- Preenchimento adequado do Canvas
- Qualidade da proposta de integração
- Participação e colaboração em grupo

### Evidências:
- Canvas do Sistema NOA (em grupo)
- Planejamento PDCA (em grupo)
- Diagrama de integração (em grupo)

---

## RECURSOS NECESSÁRIOS

### Ambientes:
- Sala de aula ou laboratório com internet

### Equipamentos:
- Computador + projetor
- Acesso à internet (demonstração API)
- Quadro branco + marcadores

### Materiais:
- Slides de apresentação
- Template Canvas (A3 impresso ou digital)
- Template PDCA (impresso ou digital)
- Papel para desenhos
- Post-its (opcional, para Canvas)

### Tecnologias:
- Navegador web (para acessar APIs)
- Canva ou Miro (opcional, para Canvas digital)
- Exemplos de APIs públicas: ViaCEP, OpenWeather, etc.

---

## REFERÊNCIAS

1. **Conectividade e APIs:**
   - RICHARDSON, Leonard; RUBY, Sam. **RESTful Web Services.** O'Reilly, 2007.
   - Documentação APIs públicas (ViaCEP, etc.)

2. **PDCA:**
   - DEMING, W. Edwards. **Out of the Crisis.** MIT Press, 1986.
   - CAMPOS, Vicente Falconi. **TQC: Controle da Qualidade Total.** INDG, 2004.

3. **Canvas:**
   - OSTERWALDER, Alexander; PIGNEUR, Yves. **Business Model Generation.** Wiley, 2010.
   - Disponível em: https://www.strategyzer.com/

4. **Geral:**
   - SENAI. **Metodologia SENAI de Educação Profissional.** Brasília: SENAI/DN, 2019.
   - Ementa da UC Modelagem de Sistemas

---

## OBSERVAÇÕES E ADAPTAÇÕES

### Pontos de Atenção:
- Conceitos de API podem ser novos para muitos alunos
- Usar analogias do cotidiano (API = menu de restaurante)
- PDCA é simples conceitualmente, mas requer prática
- Canvas pode parecer "fora do técnico", mas é estratégico
- Conectar sempre com o Sistema NOA (fio condutor)

### Adaptações Possíveis:
- Se alunos não conhecem APIs: ampliar explicação com mais exemplos
- Se internet instável: preparar vídeos ou capturas de tela da demonstração
- Se tempo curto: reduzir número de apresentações de grupos
- Canvas em papel (low-tech) funciona tão bem quanto digital

### Continuidade:
- Guardar Canvas e planejamento PDCA dos grupos
- Podem ser usados como referência na revisão (18/12)
- Conceitos de integração voltam na prova final

---

## ATIVIDADE COMPLEMENTAR (Opcional)

**Para casa:**
- Pesquisar 3 exemplos de APIs públicas interessantes
- Pensar como o Sistema NOA poderia usar essas APIs
- Exemplo: API de geolocalização para rastrear chaves

---

## CONEXÃO COM A EMENTA

Este encontro cobre explicitamente:
- ✅ **Item 5:** Projeção de Sistemas para Conectividade e Interoperabilidade
- ✅ **Item 9.4:** Análise de informações e dados
- ✅ **Item 9.5:** Ciclo de PDCA
- ✅ **Item 10.1:** Canvas

---

**Elaboração:** Elisson Nadson  
**Data:** Novembro/2025  
**Status:** Plano completo para execução

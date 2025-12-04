# Dicionário de Classes - Pastelaria "Tio do Pastel"

Este documento descreve as classes, atributos e métodos do diagrama de classes do sistema.

---

## 1. Produto (Classe Abstrata/Superclasse)
Representa qualquer item vendável na pastelaria.
*   **Atributos**:
    *   `+ id: int`: Identificador único do produto.
    *   `+ nome: String`: Nome comercial do produto.
    *   `+ preco: float`: Preço base de venda.
    *   `+ descricao: String`: Detalhes sobre o produto.
*   **Métodos**:
    *   `+ getPreco(): float`: Retorna o preço atual do produto.

### 1.1. Pastel (Subclasse)
Especialização de Produto.
*   **Atributos**:
    *   `+ sabor: String`: Recheio principal (ex: Carne, Queijo).
    *   `+ tamanho: String`: Tamanho (Pequeno, Médio, Grande, Especial).
    *   `+ frito_na_hora: boolean`: Indica se é frito na hora ou assado.

### 1.2. Bebida (Subclasse)
Especialização de Produto.
*   **Atributos**:
    *   `+ volume_ml: int`: Volume em mililitros.
    *   `+ gelada: boolean`: Se deve ser servida gelada.
    *   `+ alcoolica: boolean`: Se é bebida para maiores de 18 anos.

### 1.3. Sobremesa (Subclasse)
Especialização de Produto.
*   **Atributos**:
    *   `+ calorias: int`: Quantidade aproximada de calorias.
    *   `+ contem_gluten: boolean`: Alerta para alérgicos.

---

## 2. Pedido (Superclasse)
Representa uma venda realizada.
*   **Atributos**:
    *   `+ numero: int`: Número do pedido.
    *   `+ data_hora: DateTime`: Data e hora da realização.
    *   `+ status: String`: Estado atual (Aberto, Preparando, Pronto, Entregue, Cancelado).
*   **Métodos**:
    *   `+ calcularTotal(): float`: Soma os subtotais de todos os itens.
    *   `+ fecharPedido()`: Finaliza o pedido e gera cobrança.

### 2.1. PedidoDelivery (Subclasse)
Pedido para entrega externa.
*   **Atributos**:
    *   `+ endereco_entrega: String`: Endereço completo para o motoboy.
    *   `+ taxa_entrega: float`: Valor adicional do frete.
    *   `+ entregador: String`: Nome do responsável pela entrega.
*   **Métodos**:
    *   `+ calcularTempoEntrega()`: Estima o tempo baseado na distância.

### 2.2. PedidoBalcao (Subclasse)
Pedido para consumo no local ou retirada.
*   **Atributos**:
    *   `+ numero_mesa: int`: Mesa onde o cliente está (opcional).
    *   `+ numero_pager: int`: Número do dispositivo de chamada (se houver).

---

## 3. ItemPedido (Classe Associativa)
Liga o Pedido ao Produto, definindo quantidade e especificidades.
*   **Atributos**:
    *   `+ quantidade: int`: Quantas unidades do produto.
    *   `+ preco_unitario: float`: Preço cobrado no momento da venda (histórico).
    *   `+ observacao: String`: Personalizações (ex: "Sem cebola", "Com gelo e limão").
*   **Métodos**:
    *   `+ calcularSubtotal(): float`: Retorna `quantidade * preco_unitario`.

---

## 4. Atores e Estoque

### 4.1. Cliente
Pessoa que realiza a compra.
*   **Atributos**:
    *   `+ nome: String`: Nome do cliente.
    *   `+ telefone: String`: Contato principal (chave para delivery).
    *   `+ endereco: String`: Endereço padrão.
*   **Métodos**:
    *   `+ realizarPedido()`: Inicia um novo pedido.

### 4.2. Funcionario
Pessoa que opera o sistema.
*   **Atributos**:
    *   `+ matricula: int`: Código funcional.
    *   `+ nome: String`: Nome do funcionário.
    *   `+ cargo: String`: Função (Atendente, Caixa, Cozinheiro).
*   **Métodos**:
    *   `+ registrarPedido()`: Lança o pedido no sistema.

### 4.3. Ingrediente
Insumos utilizados para fazer os pastéis.
*   **Atributos**:
    *   `+ nome: String`: Nome do insumo (Farinha, Carne Moída).
    *   `+ qtd_estoque: float`: Quantidade atual.
    *   `+ unidade_medida: String`: Kg, Litro, Unidade.
    *   `+ estoque_minimo: float`: Ponto de pedido para alerta.
*   **Métodos**:
    *   `+ verificarEstoque()`: Retorna se precisa comprar mais.
    *   `+ reporEstoque()`: Adiciona quantidade ao saldo.

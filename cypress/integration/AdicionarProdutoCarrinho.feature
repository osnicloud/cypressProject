Feature: Adicionar produtos ao carrinho de compras
Eu como cliente da loja
Quero adicionar produtos ao carrinho de compras 
Para que eu possa compra-los
    Scenario: Adicionar produto ao carrinho  
        Given Estou na pagina inicial
        When Eu busco por "Faded Short Sleeve"
        And Adiciono ao carrinho o primeiro produto comprável
        And Prossigo com checkout
        Then O item é inserido no meu carrinho de compras



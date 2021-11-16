import HomeElements from "../../support/elements/HomeElements"
import CartElements from "../../support/elements/CartElements"

const homeElements = new HomeElements
const cartElements = new CartElements

class AddCartPage{
   
    acessarSite(){
        cy.visit('/')
    }

    buscarProduto(){
        cy.get(homeElements.campoTextoBusca()).click().type('Faded Short Sleeve')
	    cy.get(homeElements.botaoPesquisar()).click().should('be.visible')
    }

    addCarrinho(){
        cy.get('span').contains('Add to cart').click().should('be.visible')
    }

    prosseguirCheckout(){
        cy.get('span').contains('Proceed to checkout').click().should('be.visible')
    }

    visualizaProdutoCarrinho(){
        cy.get(cartElements.produtoNome()).should('contain', 'Faded Short Sleeve')
    }
}
    
    
export default AddCartPage
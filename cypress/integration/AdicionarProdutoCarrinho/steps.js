import AddCartPage from "./AddCartPage";
const addCartPage = new AddCartPage

Given(/^Estou na pagina inicial$/, () => {
	addCartPage.acessarSite();
});

When(/^Eu busco por "([^"]*)"$/, (args1) => {
     addCartPage.buscarProduto()
})

And(/^Adiciono ao carrinho o primeiro produto comprável$/, () => {
	addCartPage.addCarrinho()
});

And(/^Prossigo com checkout$/, () => {
	addCartPage.prosseguirCheckout()

});

Then(/^O item é inserido no meu carrinho de compras$/, () => {
	addCartPage.visualizaProdutoCarrinho()
});

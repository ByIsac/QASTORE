import HomePage from "../support/Home/HomePage";
import InformationPage from "../support/Information/InformationPage";
import CartPage from "../support/Cart/CartPage";

describe('Funcionalidade Cupom', () => {

  context('Cenário de teste válido, Teste funcional', () => {
   
    beforeEach ('Acessando o site', function () {

      cy.window().then((win) => {
        win.sessionStorage.clear()
      });
      cy.clearCookies()
      cy.clearLocalStorage()
      HomePage.go()
      
    })

      it('1 - Fluxo de compra adicionando um cupom de frete grátis', () => {

        const CupomAplicado = {

          Cupom : 'FRETEGRATIS'
      
        }


        // Clica em um item aleatório
        HomePage.SelectItem();
        
        // Clica no botão "Comprar" na tela de informações
        InformationPage.SelectItem();

        // Adiciona o CEP para calcular o frete
        CartPage.FormCEP();

        // Clicar em calcular o frete
        CartPage.SubmmitCEP();

        // Adiciona o cupom de frete grátis
        CartPage.FormCupom(CupomAplicado)

        // Clica em "Usar cupom"
        CartPage.SubmmitCupom();

        // Verifica se o preço do frete foi atualizado para grátis
        cy.get('.cupom-valor > .cor-secundaria').should('have.text', 'Frete Grátis');

        

        // cy.contains('span', 'Bem-vindo, ').should('be.visible')
        })

      it('2 - Fluxo de compra adicionando um cupom de desconto com preço específico', () => {

        const CupomAplicado = {
  
          Cupom : '30REAIS'
      
        }
  
  
         // Clica em um item aleatório
        HomePage.SelectItem();
        
        // Clica no botão "Comprar" na tela de informações
        InformationPage.SelectItem();
  
        // Adiciona o CEP para calcular o frete
        CartPage.FormCEP();
  
        // Clicar em calcular o frete
        CartPage.SubmmitCEP();
  
        // Adiciona o cupom de frete grátis
        CartPage.FormCupom(CupomAplicado)
  
        // Clica em "Usar cupom"
        CartPage.SubmmitCupom();
  
        // Verifica se o preço do frete foi atualizado para grátis
        cy.get('#cupom_desconto').should('contain', 'R$ 30,0')

  
        
  
        // cy.contains('span', 'Bem-vindo, ').should('be.visible')
        })

        
      it('3 - Fluxo de compra adicionando um cupom vencido', () => {

        const CupomAplicado = {
  
          Cupom : 'CUPOMVENCIDO'
      
        }
  
  
         // Clica em um item aleatório
        HomePage.SelectItem();
        
        // Clica no botão "Comprar" na tela de informações
        InformationPage.SelectItem();
  
        // Adiciona o CEP para calcular o frete
        CartPage.FormCEP();
  
        // Clicar em calcular o frete
        CartPage.SubmmitCEP();
  
        // Adiciona o cupom de frete grátis
        CartPage.FormCupom(CupomAplicado)
  
        // Clica em "Usar cupom"
        CartPage.SubmmitCupom();
  
        // Verifica se o preço do frete foi atualizado para grátis
        cy.get('.alert-danger').should('contain', 'O cupom não é válido.')

        })

        


  })


})
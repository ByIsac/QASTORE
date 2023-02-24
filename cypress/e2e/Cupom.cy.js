import HomePage from "../support/Home/HomePage";
import InformationPage from "../support/Information/InformationPage";
import CartPage from "../support/Cart/CartPage";
import { el } from "../support/Cart/Elements";

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
  
        // Verifica se o benefício do desconto do valor foi inserido
        cy.get('#cupom_desconto').should('contain', 'R$ 30,0')

  
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
  
        // Verifica se o informa se o cupom é válido ou não
        cy.get('.alert-danger').should('contain', 'O cupom não é válido.')

        })
      
      it('4 - Fluxo de compra excluindo cupom', () => {

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
  
        // Verifica se o benefício do desconto do valor foi inserido
        cy.get('#cupom_desconto').should('contain', 'R$ 30,0')

        // Deleta o cupom da compra
        CartPage.DeleteCupom();

        // Verifica se o botão aplicar cupom está visível
        cy.get(el.ButtonCupom).should('be.visible')

  
        })

        it('6 - Fluxo de compra adicionando um cupom de desconto por porcentagem', () => {

          const CupomAplicado = {
    
            Cupom : '10OFF'
        
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
    
          // Verifica se o benefício do desconto por porcentagem foi inserido
          cy.get('#cupom_desconto').should('contain', ' 10 %')
  
          })
  })


})
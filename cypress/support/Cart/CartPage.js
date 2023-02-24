import { el } from "./Elements";


class InformationPage {


    FormCEP (){

        cy.get(el.CEP)
        .type('60750000');

    }

    SubmmitCEP (){

        cy.get(el.ButtonCEP)
        .click();

    }

    FormCupom (CupomAplicado){

        cy.get(el.Cupom)
        .type(CupomAplicado.Cupom);

    }

    SubmmitCupom (){

        cy.get(el.ButtonCupom)
        .click();

    }




}
export default new InformationPage()
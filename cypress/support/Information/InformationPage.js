import { el } from "./Elements";


class InformationPage {


    SelectItem (){

        cy.get(el.ButtonComprar)
        .click();

    }





}
export default new InformationPage()
import { el } from "./Elements";

class HomePage {

    go () {
        cy.window().then((win) => {
            win.sessionStorage.clear()
          });
        cy.visit('/')
    }

    SelectItem (){

        cy.get(el.SelectItem)
        .eq(2)
        .click();

    }





}
export default new HomePage()
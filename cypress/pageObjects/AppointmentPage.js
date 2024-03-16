import { BasePage } from "./BasePage";
import { LoginPage } from "./LoginPage";

export class AppointmentPage extends BasePage {
  static get url() {
    return "/#/appointment";
  }

  static get facilitySelector() {
    return cy.get("select#combo_facility");
  }

  static get applyLabelCheckBox() {
    return cy.get(`label[for="chk_hospotal_readmission"]`);
  }

  static healthProgramRadioButtonWithText(text) {
    return cy.get(`label > input#radio_program_${text.toLowerCase()}`);
  }

  static get visitDateField() {
    return cy.get("input#txt_visit_date");
  }

  static get monthDay() {
    return cy.get(`td.day`);
  }

  static get textAreaComments() {
    return cy.get("textarea#txt_comment");
  }

  static get bookAppontmentButton() {
    return cy.get("button#btn-book-appointment");
  }

  static setDemoUsernameAndPassword() {
    LoginPage.demoUsernameInputField.invoke("val").then($username => {
      LoginPage.usernameInputField.type($username);
    });
    LoginPage.demoPasswordInputField.invoke("val").then($password => {
      LoginPage.passwordInputField.type($password);
    });
  }
}

import { BasePage } from "./BasePage";

export class LoginPage extends BasePage {
  static get url() {
    return "/login";
  }

  static get demoUsernameInputField() {
    return cy.get(`input[aria-describedby="demo_username_label"]`);
  }
  static get demoPasswordInputField() {
    return cy.get(`input[aria-describedby="demo_password_label"`);
  }

  static get usernameInputField() {
    return cy.get("input#txt-username");
  }

  static get passwordInputField() {
    return cy.get("input#txt-password");
  }

  static get loginButton() {
    return cy.get("button#btn-login");
  }
}

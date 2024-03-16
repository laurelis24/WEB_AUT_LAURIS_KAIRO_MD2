import { BasePage } from "./BasePage";

export class HistoryPage extends BasePage {
  static get url() {
    return "/#/history";
  }

  static get noAppointmentContainer() {
    return cy.get("section#history > div.container > div.row > div.col-sm-12.text-center > p");
  }
}

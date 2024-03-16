import { BasePage } from "./BasePage";
import { getDate } from "../helper_functions/date";

export class SummaryPage extends BasePage {
  static get url() {
    return "/#/summary";
  }

  static get summaryFacility() {
    return cy.get("p#facility");
  }

  static get summaryApply() {
    return cy.get("p#hospital_readmission");
  }

  static get summaryHealthCare() {
    return cy.get("p#program");
  }

  static get summaryDate() {
    return cy.get("p#visit_date");
  }

  static get summaryComment() {
    return cy.get("p#comment");
  }

  static validatePreviousValues({ facility, apply, radioBtn, day, comment }) {
    this.summaryFacility.should("contain", facility);
    this.summaryApply.should("contain", apply);
    this.summaryHealthCare.should("contain", radioBtn);
    this.summaryDate.should("contain", getDate(day));
    this.summaryComment.should("contain", comment);
  }
}

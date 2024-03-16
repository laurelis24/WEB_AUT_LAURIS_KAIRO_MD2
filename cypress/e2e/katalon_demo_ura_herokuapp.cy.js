import { AppointmentPage } from "../pageObjects/AppointmentPage";
import { BasePage } from "../pageObjects/BasePage";
import { HistoryPage } from "../pageObjects/HistoryPage";
import { HomePage } from "../pageObjects/HomePage";
import { LoginPage } from "../pageObjects/LoginPage";
import { SummaryPage } from "../pageObjects/SummaryPage";

describe("Cypress testing MD2", () => {
  context("Appoinment testing", () => {
    beforeEach(() => {
      // Open https://katalon-demo-cura.herokuapp.com/
      BasePage.visit();
    });

    it("Scenario 1 - Make an Appointment", () => {
      const values = {
        facility: "Seoul CURA Healthcare Center",
        apply: "Yes",
        radioBtn: "Medicaid",
        day: 30,
        comment: "CURA Healthcare Service",
      };

      // Click - Make Appointment
      HomePage.makeAppontmentLink.click();

      // Set username and password fields with the demo account credentials
      AppointmentPage.setDemoUsernameAndPassword();

      // Click - Login
      LoginPage.loginButton.click();

      // Set the following values:
      AppointmentPage.facilitySelector.select(values.facility);
      AppointmentPage.applyLabelCheckBox.click(); // Es nezināju kā ir pareizi šajā gadījumā, jo var pārbaudīt tikai uz checkbox un arī uz label, jo klikšķina uz label parasti;
      AppointmentPage.healthProgramRadioButtonWithText(values.radioBtn).click();
      AppointmentPage.visitDateField.click();
      AppointmentPage.monthDay.contains(values.day).click();
      AppointmentPage.monthDay.contains(values.day).should("have.class", "active");
      AppointmentPage.textAreaComments.type(values.comment);
      AppointmentPage.bookAppontmentButton.click();
      // Validate that previously set values are correct
      SummaryPage.validatePreviousValues(values);
    });

    it("Scenario 2 - Appointment history empty", () => {
      // Click - Make Appointment
      HomePage.makeAppontmentLink.click();

      // Set username and password fields with the demo account credentials
      AppointmentPage.setDemoUsernameAndPassword();

      // Click - Login
      LoginPage.loginButton.click();

      // Click - Menu/Stack/Burger icon
      HomePage.expandMenuToggle.click();

      // Validate that the sidebar is active
      HomePage.sideBar.should("have.class", "active");

      // Click - History
      HomePage.sideBar.get(`nav#sidebar-wrapper > ul > li a[href="history.php#history"]`).click();

      // Validate that - No appointment - is visible
      HistoryPage.noAppointmentContainer.should("contain", "No appointment.");
    });
  });
});

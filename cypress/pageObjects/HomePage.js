import { BasePage } from "./BasePage";

export class HomePage extends BasePage {
  static get url() {
    return "/#/login";
  }

  static get makeAppontmentLink() {
    return cy.get("a#btn-make-appointment");
  }

  static get expandMenuToggle() {
    return cy.get("a#menu-toggle");
  }

  static get sideBar() {
    return cy.get(`nav#sidebar-wrapper`);
  }

  static get sideBarOptionHistory() {
    // return cy.get(`nav#sidebar-wrapper > ul > li a[href="history.php#history"]`);
  }
}

/*
<nav id="sidebar-wrapper" class="active">
  <ul class="sidebar-nav">
    <a id="menu-close" href="#" class="btn btn-light btn-lg pull-right toggle">
      <i class="fa fa-times"></i>
    </a>
    <li class="sidebar-brand">
      <a href="./" onclick="$('#menu-close').click();">
        CURA Healthcare
      </a>
    </li>
    <li>
      <a href="./" onclick="$('#menu-close').click();">
        Home
      </a>
    </li>
    <li>
      <a href="history.php#history" onclick="$('#menu-close').click();">
        History
      </a>
    </li>
    <li>
      <a href="profile.php#profile" onclick="$('#menu-close').click();">
        Profile
      </a>
    </li>
    <li>
      <a href="authenticate.php?logout" onclick="$('#menu-close').click();">
        Logout
      </a>
    </li>
  </ul>
</nav>;
*/

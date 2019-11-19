class Internet {
  // page objects
  get logoImage() {
    return $(".logo-w img");
  }
  get authHeader() {
    return $("h4.auth-header");
  }
  get formLabelUsername() {
    return $(".form-group:nth-child(1) label");
  }
  get formLabelPassword() {
    return $(".form-group:nth-child(2) label");
  }
  get username() {
    return $("#username");
  }
  get password() {
    return $("#password");
  }
  get password() {
    return $("#password");
  }
  get userMaleCircle() {
    return $(".os-icon-user-male-circle");
  }
  get fingerprint() {
    return $(".os-icon-fingerprint");
  }
  get loginButton() {
    return $("#log-in");
  }
  get checkbox() {
    return $(".form-check-input");
  }
  get checkboxLabel() {
    return $(".form-check-label");
  }
  get twitterButton() {
    return $(".buttons-w div:nth-child(3) a:nth-child(1) img");
  }
  get facebookButton() {
    return $(".buttons-w div:nth-child(3) a:nth-child(2) img");
  }
  get linkedinButton() {
    return $(".buttons-w div:nth-child(3) a:nth-child(3) img");
  }
  get loginError() {
    return $(".alert-warning");
  }
  get userAvatar() {
    return $(".logged-user-w img");
  }
  get table() {
    return $("tbody");
  }
  get tableRows() {
    return this.table.$$("tr");
  }
  get tableColumns() {
    return this.table.$$("td:nth-child(5)");
  }
  get headerAmountSort() {
    return $("thead th:nth-child(5)");
  }
  get compareExpenses() {
    return $("#showExpensesChart");
  }
  get addDataSet() {
    return $("#addDataset");
  }
  get flashSale1() {
    return $("#flashSale img")
  }
  get flashSale2() {
    return $("#flashSale2 img")
  }


  // functions
  getColumnText() {
    let tableArrayColumn = [];
    this.tableColumns.forEach(element => {
      console.log(element.getText());
      let tableColumnCurr = element.getText();
      let tableColumnNum = tableColumnCurr.replace(/[^0-9-\.]+/g, "");
      tableArrayColumn.push(tableColumnNum);
    });
    return tableArrayColumn;
  }
  getColumnTextSorted() {
    let sorted = this.getColumnText().sort(function(a, b) {
      return a - b;
    });
    // // TODO: rmv for test verification ONLY
    // sorted.pop();
    // sorted.push(20.00);
    // //
    return sorted;
  }
  getColumnTextClick() {
    let tableArrayColumnClick = [];
    this.headerAmountSort.click();
    this.tableColumns.forEach(element => {
      // console.log(element.getText());
      let tableColumnCurrClick = element.getText();
      let tableColumnNumClick = tableColumnCurrClick.replace(/[^0-9-\.]+/g, "");
      tableArrayColumnClick.push(tableColumnNumClick);
    });
    return tableArrayColumnClick;
  }
  getRowText() {
    let tableArrayRow = [];
    this.tableRows.forEach(element => {
      // console.log(element.getText());
      let tableRow = element.getText();
      tableArrayRow.push(tableRow);
    });
    return tableArrayRow;
  }
  getRowTextSorted() {
    let tableArraySorted = [];
    this.headerAmountSort.click();
    this.tableRows.forEach(element => {
      // console.log(element.getText());
      let tableRow = element.getText();
      tableArraySorted.push(tableRow);
    });
    // // TODO: rmv for test verification ONLY
    // tableArraySorted.pop();
    // tableArraySorted.push(
    //   "Jan 9th7:45pm Pending Templates Inc Business + 340.00 USD"
    // );
    // //
    return tableArraySorted;
  }
  areArraysEqualSets(a1, a2) {
    let superSet = {};
    for (let i = 0; i < a1.length; i++) {
      const e = a1[i] + typeof a1[i];
      superSet[e] = 1;
    }

    for (let i = 0; i < a2.length; i++) {
      const e = a2[i] + typeof a2[i];
      if (!superSet[e]) {
        return false;
      }
      superSet[e] = 2;
    }

    for (let e in superSet) {
      if (superSet[e] === 1) {
        return false;
      }
    }
    return true;
  }
  //////
  /**
   *
   * @param {string} text username to be entered
   */
  enterUsername(text) {
    // this.username.waitForVisible();
    this.username.waitForDisplayed();
    this.username.click();
    this.username.setValue(text);
  }
  /**
   *
   * @param {string} text password to be entered
   */
  enterPassword(text) {
    // this.password.waitForVisible();
    this.password.waitForDisplayed();
    this.password.click();
    this.password.setValue(text);
  }
  /**
   * click the login button
   */
  clickLoginButton() {
    // this.loginButton.waitForVisible();
    this.loginButton.waitForDisplayed();
    this.loginButton.click();
  }
}
module.exports = new Internet();

class Internet {
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
}
module.exports = new Internet();

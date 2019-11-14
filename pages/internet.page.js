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
  get login() {
    return $("#log-in");
  }
  get checkbox() {
    return $(".form-check-input");
  }
  get checkboxLabel() {
    return $(".form-check-label");
  }
}
module.exports = new Internet();

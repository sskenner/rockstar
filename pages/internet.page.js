class Internet {
  get logoImage() { return $('.logo-w img') }
  get authHeader() { return $('h4.auth-header')}
  get formLabelUsername() { return $('.form-group:nth-child(1) label')}
  get formLabelPassword() { return $('.form-group:nth-child(2) label')}
  get username() {
    return $("#username");
  }
  get password() {
    return $("#password");
  }
}
module.exports = new Internet()
class Internet {
  get logoImage() { return $('.logo-w img') }
  get authHeader() { return $('h4.auth-header')}
  
}
module.exports = new Internet()
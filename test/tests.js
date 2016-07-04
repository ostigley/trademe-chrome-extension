var path = require('path')

module.exports = {
  'fill in a form' : function (browser) {
    browser
      .url('http://www.trademe.co.nz')
      .waitForElementVisible('body', 3000)
      .pause(1000)
      .end()
  },

  'clicking a button' : function (browser) {

  }

}
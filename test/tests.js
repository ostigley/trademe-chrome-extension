var path = require('path')

module.exports = {
  'fill in a form' : function (browser) {
    browser
      .url('http://www.trademe.co.nz')
      .waitForElementVisible('body',500)
      .setValue('input[id=searchString]', ['rugby balls', browser.Keys.ENTER])
      .pause('3000')
      .click(".tile-4")
      .pause('3000')
      
      .end()
  },

  'clicking a button' : function (browser) {

  }

}
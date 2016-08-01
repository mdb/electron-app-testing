var Application = require('spectron').Application,
    os = require('os'),
    assert = require('assert'),
    pry = require('pryjs'),
    app = new Application({
      path: `${__dirname}/../build/HelloWorld-${os.platform()}-${os.arch()}/HelloWorld.app/Contents/MacOS/HelloWorld`
    });

app.start().then(function() {
  return app.browserWindow.isVisible()
}).then(function (isVisible) {
  assert.equal(isVisible, true);
}).then(function() {
  return app.client.windowByIndex(1).getText('h1')
}).then(function(title) {
  assert.equal(title, 'Hello World!');
}).then(function() {
  return app.stop();
}).catch(function(error) {
  console.error('Test failed', error.message);
  return app.stop();
});

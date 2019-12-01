const Server = require('../src/');
const expect = require('chai').expect;
const server = new Server();

describe('Server tests', function() {

  context('Check for health checks', function() {
    it('shoyld be able start with no issues    ght', function() {
      server.serve(5000, () => {
          console.log(`server started`);
      });
    });
  });

});

after(function () {
    server.kill();
});
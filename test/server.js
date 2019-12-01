const request = require('request');
const expect = require('chai').expect;

const Server = require('../src/');

const server = new Server();
const PORT = 5000;

describe('Server tests', function() {

  context('Server', function() {

    it('should be able start with no issues', () => {
      server.serve(PORT, () => {});
    });

    it('check if health endpoint is working', () => {
        request.get(`http://127.0.0.1:${PORT}/health`, (err, res, body) => {
            expect(res.statusCode).to.equal(200);
            expect(body).to.equal('OK');
        });
    });

  });

});

after(function () {
    server.kill();
});
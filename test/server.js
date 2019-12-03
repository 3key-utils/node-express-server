const request = require('request');
const expect = require('chai').expect;

const Server = require('../src/');

const server = new Server();
const PORT = 5000;

describe('Server tests', function() {

  context('Server', function() {

    it('should be able start with no issues', () => {
      server.route({
        action: 'get',
        path: '/path',
        handler: (req, res, next) => {
          res.send('/path');
        }
      });
      server.serve(PORT, () => {});
    });

    it('check if health endpoint is working', () => {
        request.get(`http://127.0.0.1:${PORT}/health`, (err, res, body) => {
            expect(res.statusCode).to.equal(200);
            expect(body).to.equal('OK');
        });
    });


    it('check if added route() is working', () => {
      request.get(`http://127.0.0.1:${PORT}/path`, (err, res, body) => {
          expect(res.statusCode).to.equal(200);
          expect(body).to.equal('/path');
      });
  });

  });

});

after(function () {
    server.kill();
});
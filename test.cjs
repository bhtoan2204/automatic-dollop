async function main() {
  const chai = await import('chai');
  const chaiHttp = await import('chai-http');
  const app = await import('./app.js');

  chai.default.use(chaiHttp.default);
  chai.default.should();

  describe('GET /', () => {
    it('should return Hello, World! and status 200', async () => {
      const res = await chai.default.request(app.default).get('/');
      res.should.have.status(200);
      res.text.should.be.eql('Hello, World!');
    });
  });

  run();
}

main();

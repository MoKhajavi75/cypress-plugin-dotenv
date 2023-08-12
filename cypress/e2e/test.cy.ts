describe('cypress-plugin-dotenv', () => {
  it('should load .env variables correctly', () => {
    expect(Cypress.env('IS_THIS_PLUGIN_AWESOME')).to.be.equal('Yes!');
  });
});

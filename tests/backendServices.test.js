const expect = require('chai').expect;
const backendServices = require('./../services/backendServices');

describe('backendServices', function() {
  describe('getTemplates', function() {
    it('should return an array of string', function() {
      return backendServices.getTemplates().then((res)=>{
        expect(res).to.be.an('array');
        expect(res).to.not.be.empty;
      }).catch((err) => {
        expect.fail(0, 1, 'Promise Error');
      });
    });
  });
});

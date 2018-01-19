var expect = require('chai').expect;
var fs = require("fs");
var fg = require("../fileGenerator.js");

describe('GIVEN readme with the extention', function() {
  //test de la fonction
  var eleve = {};
  var date = [];
  var chaine;
  date[0] = 12;
  date[1] = 10;
  date[2] = 1992;
  eleve.nom = "Dupont";
  eleve.prenom = "Jean";
  eleve.dateNaissance = date;
  chaine = JSON.stringify(eleve);
  fg.fileGenerator("md", chaine)
  it('WHEN the client request the fileGenerator function THEN xx are returned', function() {
	var data = fs.readFileSync('README.md');
	console.log(data.toString());    
	expect(data.toString()).to.equal(chaine);
  })
});

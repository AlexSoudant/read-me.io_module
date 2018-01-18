//fonction en cours de réalisation
exports.fileGenerator = function(ext, chaine) {
  var fs = require("fs");
  fs.writeFileSync("fichierEleve3"+ext, JSON.stringify(chaine), "UTF-8");
}
var fileGenerator = function(ext, chaine) {
  var fs = require("fs");
  fs.writeFileSync("README."+ext, chaine, "UTF-8");
}

module.exports = {
  fileGenerator : fileGenerator};

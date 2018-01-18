exports.fileGenerator = function(ext, chaine) {
  var fs = require("fs");
  fs.writeFileSync("readme"+ext, chaine, "UTF-8");
}
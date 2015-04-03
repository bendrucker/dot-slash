'use strict';

exports.has = hasPrefix;
function hasPrefix (path) {
  return /^\.\//.test(path);
}

exports.normalize = function normalize (sourcePath, matchPath) {
  var sourceHas = hasPrefix(sourcePath);
  var matchHas = hasPrefix(matchPath);
  if (sourceHas === matchHas) return sourcePath;
  if (!sourceHas && matchHas) return './' + sourcePath;
  if (sourceHas && !matchHas) return sourcePath.substr(2, sourcePath.length);
};

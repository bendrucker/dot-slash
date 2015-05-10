'use strict';

exports.has = hasPrefix;
function hasPrefix (path) {
  return /^\.\//.test(path);
}

exports.enforce = enforce;
function enforce (path, prefix) {
  if (typeof prefix === 'undefined') prefix = true;
  var has = hasPrefix(path);
  if (has && prefix) return path;
  if (!has && prefix) return './' + path;
  if (has && !prefix) return path.substring(2, path.length);
  return path;
}

exports.normalize = function normalize (sourcePath, matchPath) {
  return enforce(sourcePath, hasPrefix(matchPath));
};

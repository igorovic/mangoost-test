const path = require('path');

module.exports = {
    outDir: 'public',
    projectRoot: path.join("/", ...path.resolve('package.json').split(path.sep).slice(0,-1))
}
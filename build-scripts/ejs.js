//const fs = require("fs-extra");
//const path = require('path');
require('dotenv').config()

const { build } = require('mangoost');

/* function renderTemplate(filename, data={}, options={}){
    
    let srcFile = path.join(config.projectRoot, 'templates', filename);
    console.log("DEBUG renderTemplate", srcFile)
    return render(srcFile, data, options);
} */

if (require.main === module) {
    //console.log(listPages());
    //renderPage('index.ejs', {user: "Igor"});    
    //renderPage('cms/index.ejs', {user: "Igor"});    
    build();
}


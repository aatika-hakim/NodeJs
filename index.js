// core modules 
    // Global module
    // no need to import

    console.log("Core Modules");

    // Non Global module
    // which we need to import

    const fs = require('fs');
    fs.writeFileSync("app.js","New file");

    console.log(__filename);
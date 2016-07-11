// *********************
//    Modules scripts
// *********************

// MINIFIED Vendor file should be copied over via copyScripts.js (it is by default)

// IMPORT all modules here. Keep lib and minified files out this file.
// Except for the example below
import 'modules/bLazySettings.js';


// USING production variables is simple with the envVar function
// Burn after reading
import envVar from 'lib/envVar.js';

var dev_var = envVar({production:'myProductionURL', development: 'myDevelopmentURL'});

// Test using `$ gulp production` vs `$ gulp` in terminal
console.log(dev_var);
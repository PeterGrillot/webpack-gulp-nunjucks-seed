// *********************
//    Modules scripts
// *********************

// MINIFIED Vendor file should be copied over via copyScripts.js (it is by default)

// USING production variables is simple
// Burn after reading
if(process.env.NODE_ENV === 'development'){
	var dev_var = 'url/to/dev';
	
}
if(process.env.NODE_ENV === 'production'){
	var dev_var = 'url/to/prod';
	
}
console.log(dev_var);

// IMPORT all modules here. Keep lib and minified files out this file.
import 'modules/bLazySettings.js';
// CommonJS, every file is a module (by default)
// Modules - Encapsulated Code (only share minimum)
const { korinna, maria} = require('./4-names');
const sayHi = require('./5-utils');
const data = require('./6.alternative-export');
// const sum = require('./7-mind-granade');
require('./7-mind-granade');

sayHi('K');
sayHi(korinna);
sayHi(maria);
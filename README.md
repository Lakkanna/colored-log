# consolemessage javascript library 
[![version](https://img.shields.io/npm/v/consolemessage.svg)](https://www.npmjs.org/package/consolemessage)
### Javascript library to write colored logs on console. You can find more about this in [npm](https://www.npmjs.com/package/consolemessage)

---

```js
npm install -g consolemessage
```


### include in you javascript file
```js
// yourfile.js

var console = require('consolemessage');

console.log('success message', SUCCESS);    // Green color
console.log('debug message', DEBUG);        // Grey color
console.log('info message', INFO);          // Blue color
console.log('warning message', WARNING);    // Yellow color
console.log('error message', ERROR);        // Red color
console.log('critical message', CRITICAL);  // Red color
console.log('normal message');              // Black color
```

#### [github.com/lakkanna/colored-log](https://github.com/Lakkanna/colored-log)
#### @credits [colors](https://www.npmjs.com/package/colors) 

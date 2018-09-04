# consolemessage javascript library 
[![version](https://img.shields.io/npm/v/consolemessage.svg)](https://www.npmjs.org/package/consolemessage)
### Javascript library to write colored logs on console. You can find more about this in [npm.](https://www.npmjs.com/package/consolemessage)

---

```js
npm install -g consolemessage
```


### include in you javascript file
```js
// yourfile.js

var console = require('consolemessage');

console.log('success message', conosle.success);    // Green color
console.log('debug message', console.debug);        // Grey color
console.log('info message', console.info);          // Blue color
console.log('warning message', console.warning);    // Yellow color
console.log('error message', console.error);        // Red color
console.log('critical message', console.critical);  // Magenta color
console.log('normal message');              // Black color
```

# License
MIT


#### [github.com/lakkanna/colored-log](https://github.com/Lakkanna/colored-log)
#### @credits [colors](https://www.npmjs.com/package/colors) 

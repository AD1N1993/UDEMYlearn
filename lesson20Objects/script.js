'use strict';

const options = {
    name: 'test',
    width: 1024,
    height: 1024,
    colors: {
        border: 'black',
        bg: 'red',
    },
    makeTest: function () {
        console.log('test');
    }
};


// console.log(options['colors']['border']);
// console.log(options.colors.border);

// delete options.name;

// console.log(options);
// let counter = 0;
// for (let key in options) {
//     if (typeof (options[key]) === 'object') {
//         for (let keyObj in options[key]) {
//             console.log(`Свойство ${keyObj} имеет значение: ${options[key][keyObj]}`);
//         }
//     } else {
//     console.log(`Свойство ${key} имеет значение: ${options[key]}`);
//     }
// }

// console.log(Object.keys(options).length);

// options.makeTest();
const {border, bg} = options.colors;

console.log(border);
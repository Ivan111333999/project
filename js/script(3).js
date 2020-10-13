"use strict";

console.log('arr' + ' - object');
console.log(4 + '5');

let incr = 10,
    decr = 10;

/* ++incr; */           // Оператор инкримента    = 11; Если ставим перед знач. назыв. - Префиксной. После - Постфиксной
/* --decr; */           // Оператор декремента    = 9;  Если ставим перед знач. назыв. - Префиксной  После - Постфиксной

console.log(++incr);
console.log(--decr);

console.log(5%2);

console.log(2 + 2 * 2 !== '6');

const isChecket = false,
      isClose = false;

      console.log(isChecket || !isClose);
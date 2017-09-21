let dragon =
  name =>
    size =>
      element =>
        name + ' is a ' +
        size + ' dragon that breathes ' +
        element + '!';

let fluffykinsDragon = dragon('fluffykins');
console.log(fluffykinsDragon('tiny')('lightning'))

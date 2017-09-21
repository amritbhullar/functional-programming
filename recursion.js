// TREE-LIKE EXAMPLE
const categories = [
  { id: 'animals', parent: null },
  { id: 'mammals', parent: 'animals' },
  { id: 'cats', parent: 'mammals' },
  { id: 'dogs', parent: 'mammals' },
  { id: 'chihuaua', parent: 'dogs' },
  { id: 'fluffycat', parent: 'cats' }
]

const makeTree = (categories, parent) => {
  let node = {};
  categories
    .filter(c => c.parent === parent)
    .forEach(c => {
      console.log(c.id); // displays which order the categories are being processed
      node[c.id] = makeTree(categories, c.id)
    })
  return node;
}

console.log(JSON.stringify(
  makeTree(categories, null), null, 3
));


// SIMPLE EXAMPLE
// let countdownFrom = (num) => {
//   if (num === 0) return;
//   console.log(num);
//   countdownFrom(num-1)
// }
//
// countdownFrom(10);

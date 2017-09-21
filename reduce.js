var fs = require('fs');

const output = fs.readFileSync('baker-details.txt', 'utf8')
  .trim()
  .split('\n')
  .map(line => line.split(' '))
  .reduce((customers, line) => {
    customers[line[0]] = [];
    customers[line[0]].push({
      name: line[1],
      price: line[2],
      quantity: line[3]
    })
    return customers
  }, {})

console.log(output);


/*
{
  'Amrit Bhullar': [
    { name: 'Jumbo Chocolate Chip', price: '3', quantity: '2' },
    { name: 'Peanut Butter Chip',   price: '4', quantity: '1' },
    { name: 'Salted Caramel',       price: '5', quantity: '3' }
  ],
  'Default Baker': [
    { name: 'Original Chocolate Chip', price: '3', quantity: '2' },
    { name: 'Double Chocolate',        price: '3', quantity: '2' },
    { name: 'Snickerdoodle Swirl',     price: '3', quantity: '1' },
  ]
}
*/

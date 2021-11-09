let result = [];

const insertItem = (item) => {
  result.push(item)

  return item;
};

const deleteItem = (item) => {
  const index = result.indexOf(item);
  if (index > -1) {
    result.splice(index, 1);
  }
  
  return item;
};

const lookupItem = (index) => {
  if (index < 0) {
    return null
  }

  if(index < 0 || index < result.length) {
    const item = result[index]
    deleteItem(item)
    return item
  }

  return null

};

const printItems = () => {
  let string = ''

  result.forEach(item => 
    {string += (String(item)+', ')})

  return string
};

insertItem(1);
insertItem(2);
insertItem(3);
insertItem(2);
insertItem(1);
console.log(printItems());
expected: '1, 2, 3, 2, 1'
console.log(lookupItem(1));
// expected: 2
console.log(printItems());
// expected: '1, 3, 2, 1'

deleteItem(1);
console.log(printItems());
// expected: '3, 2, 1'
console.log(lookupItem(2));
// expected: 1
console.log(printItems());
// expected: '3, 2'

deleteItem(-1);
console.log(lookupItem(-1));
// expected: null
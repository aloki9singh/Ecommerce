//Reduce

const hello = [1, 2, 3, 4, 5, 6];

const result = hello.reduce((acc, preval, index) => {
  const obj = {};
  obj[index] = preval;
  return Object.assign(acc, obj);
}, {});

console.log(result);//{ '0': 1, '1': 2, '2': 3, '3': 4, '4': 5, '5': 6 }

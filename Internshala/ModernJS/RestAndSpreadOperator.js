// const person = {
//   name: "AJ",
//   age: 20,
//   hobby: "games",
// };

// const {name,...RestPerson}=person

// console.log(nipata,RestPerson)

// rest -accumulates/folds
// spread - unfolds

const someArr=[5,4,6,7,8]
const [first,second,...theRestArr]=someArr

console.log(theRestArr)  //[ 6, 7, 8 ]
// ----------------------------------------------------------

// Spread

// unfolds values joins two obj aor array
//unfold first and then second object
const obj1={
    name:"AJ"
}
const obj2={
    place:"Orai"
}
const obj={...obj1,...obj2}
console.log(obj);
// { name: 'AJ', place: 'Or
// ai' }
const obj3={
    name:"AJ"
}
const obj4={
    place:"Orai",
    obj3
}

console.log(obj4);

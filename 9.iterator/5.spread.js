// Spread 연산자, 전개구문
// 모든 Interable은 Spread 될 수 있다
// 순회가 가능한 모든 것들은 촤르르르륵 펼쳐질 수 있다
// func(...iterable)
// [...iterable]
// { ...obj }
// EcmaScript 2018
function add(a, b, c) {
  return a + b + c;
}

const nums = [1, 2, 3];
console.log(add(...nums));

// Restparameters
function sum(first, second, ...nums) {
  console.log(nums);
}
sum(1, 2, 0, 1, 2, 4);

// Array Concat
const fruits1 = ['🍏', '🥝'];
const fruits2 = ['🍓', '🍌'];
let arr = fruits1.concat(fruits2);
console.log(arr);
arr = [...fruits1, '🍓', ...fruits2];
console.log(arr);

// Object
const ellie = { name: 'Ellie', age: 20 };
const updated = {
  ...ellie,
  job: 's/w engineer',
};
console.log(ellie);
console.log(updated);

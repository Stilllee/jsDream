// 동결! Object.freeze 추가 ❌, 삭제 ❌, 쓰기 ❌, 속성 재정의 ❌
// (단, 얕은 꽁꽁 얼림!)
const woodstock = { name: "우드스탁" };
const dog = { name: "스누피", emoji: "🐶", friend: woodstock };
Object.freeze(dog);

dog.name = "스눕독";
console.log(dog); // { name: '스누피', emoji: '🐶', friend: { name: '우드스탁' } }

dog.age = 345;
console.log(dog); // { name: '스누피', emoji: '🐶', friend: { name: '우드스탁' } }

delete dog.name;
console.log(dog); // { name: '스누피', emoji: '🐶', friend: { name: '우드스탁' } }

woodstock.name = "우디";
console.log(dog); // { name: '스누피', emoji: '🐶', friend: { name: '우디' } }

// 밀봉! Object.seal 값의 수정 ✅, 추가 ❌, 삭제 ❌, 속성 재정의 ❌
const cat = { ...dog };
// Object.assign(cat, dog);
Object.seal(cat);
console.log(cat); // { name: '스누피', emoji: '🐶', friend: { name: '우디' } }

cat.name = "가필드";
console.log(cat); // { name: '가필드', emoji: '🐶', friend: { name: '우디' } }
delete cat.emoji; // 삭제 안됨
console.log(cat); // { name: '가필드', emoji: '🐶', friend: { name: '우디' } }

console.log(Object.isFrozen(dog)); // true
console.log(Object.isSealed(cat)); // true

// 확장 금지 preventExtensions 추가 ❌
const mouse = { name: "시골쥐" };
Object.preventExtensions(mouse);
console.log(Object.isExtensible(mouse)); // false

mouse.name = "서울쥐";
console.log(mouse); // { name: '서울쥐' }

delete mouse.name;
console.log(mouse); // {}

mouse.age = 1; // 추가 안됨
console.log(mouse); // {}

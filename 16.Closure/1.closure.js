const text = "hello";
function func() {
  console.log(text);
}
func(); // hello

/* 
function outer() {
  const x = 0;
  function inner() {
    console.log(`inside inner: ${x}`);
  }
  inner();
}
outer(); // inside inner: 0 
*/

function outer() {
  const x = 0;
  function inner() {
    console.log(`inside inner: ${x}`);
  }
  return inner;
}
const func1 = outer(); // outer 함수 실행 후, inner 함수 반환
func1(); // inside inner: 0

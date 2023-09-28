function loopVar() {
  const array = [];

  // 'var' 사용: 함수 스코프. for 루프 끝나면 i는 5.
  // push된 함수 모두 i가 5를 참조.
  for (var i = 0; i < 5; i++) {
    array.push(function () {
      console.log(i);
    });
  }
  return array;
}

function loopLet() {
  const array = [];

  // 'let' 사용: 블록 스코프. 각 루프마다 새로운 i 값이 "기억"됨.
  for (let i = 0; i < 5; i++) {
    array.push(function () {
      console.log(i);
    });
  }
  return array;
}

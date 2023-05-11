const a = () => {
  return 1;
};

const b = () => {
  return a() + 1;
};

const c = () => {
  return b() + 1;
};

const result = c();
console.log(result);

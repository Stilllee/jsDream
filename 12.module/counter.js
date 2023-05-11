let count = 0;
/* 
export function increase() {
  count++;
  console.log(count);
} 

export function getCount() {
  return count;
}
*/

const increase = () => {
  count++;
  console.log(count);
};

const getCount = () => count;

export { increase, getCount };

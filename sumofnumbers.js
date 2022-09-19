function sumFor(list) {
  let sum = 0;
  for (const num of list) sum += num;
  return sum;
}

function sumWhile(list) {
  let sum = 0;
  let i = 0;
  while (i < list.length) {
    sum += list[i];
    i++;
  }
  return sum;
}

function sumRecursion(list) {
  if (list.length === 0) {
    return 0;
  }
  // eslint-disable-next-line no-param-reassign
  return list[0] += sumRecursion(list.splice(1));
}

function sumTheSimpleWay(list) {
  return _.reduce(list, function (memo, num) { return memo + num; }, 0);
}
const list = [1, 2, 3, 4];

console.log(sumFor(list));
console.log(sumWhile(list));
console.log(sumRecursion(list));
console.log(sumTheSimpleWay(list));

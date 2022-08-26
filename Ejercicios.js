const arr = [1, 2, 3, 4, 5, 6];

let dup_arr = arr.map(e => e * 2);

let even_arr = arr.filter(e => e % 2 === 0);

let sum_arr = arr.reduce((a, b) => a + b, 0);

console.log(dup_arr, even_arr, sum_arr);
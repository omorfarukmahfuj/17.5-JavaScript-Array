const numbers = [2, 22, 5, 55, 6, 66];
console.log(numbers);

numbers.unshift(7);
numbers.unshift(77);
numbers.unshift(8, 88, 100);
console.log(numbers);

numbers.shift();
numbers.shift();
console.log(numbers);
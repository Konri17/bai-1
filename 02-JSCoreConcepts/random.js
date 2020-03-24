x = 5;
y = 20;

arr = [];

arr = Array.from({length: 10}, () => Math.floor( Math.random() * (y-x+1)) + x)

console.log(arr)
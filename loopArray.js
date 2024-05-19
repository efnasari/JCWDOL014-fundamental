const fruits = ["Apple", "Orange", "Plum"]

for (let fruit of fruits) {
    console.log(fruit)
}
console.log("---------------")
for (let i = 0; i < fruits.length; i++) {
    console.log(fruits[i])
}
console.log("---------------")
fruits.forEach((fruit) => {
    console.log(fruit)
})
console.log("---------------")
const numbers = [1, 5, 6, 8, 9, 3];

numbers.forEach((elemen, index) => {
  numbers[index] = elemen + 2;
});

console.log(numbers); // [ 3, 7, 8, 10, 11, 5 ]
console.log("---------------")
let str = "Apple, Banana, Kiwi";
let part = str.substring(7, 13);
console.log(part)
// let num1 = 10;
// let num2 = 5; // "10";

// console.log(num1 === num2);
// console.log(num1 > num2);
// console.log(num1 >= num2);
// console.log(num1 < num2);
// console.log(num1 <= num2);
// console.log(num1 == num2);

// and or not

// let age = 16;
// let addr = "Gazipur";

// console.log(age > 16 && addr == "Gazipur");
// console.log(age > 16 || addr == "Gazipur");

// let num1 = 19;
// let num2 = 32;

// console.log(!false);
// console.log(!true);

// let age = 11;
// let greet = age > 17 ? "Welcome" : "Get Out";

// console.log(greet);

// -------------
// for, while

// for (let i = 1; i <= 10; i++) {
//   console.log(i);
// }
// console.log("i: " + i);

// let i;

// for (i = 1; i <= 10; i++) {
//   console.log(i);
// }
// console.log("i: " + i);

// for (let i = 1000000; i >= 1; --i) {
//   console.log(i);
// }

// counter variable, condition variable, incre/decre

// let i = 1;
// while (i <= 10) {
//   console.log(i);
//   i++;
// }

// console.log("baire theke i: " + i);

// let num = 10;

// while (num++) {
//   if (num == 20) break;
//   console.log(num);
// }

// console.log("baire theke num: ", num);
// // 10 - 9
// 9 - 8
// 7 - 6

// let age = 12;

// do {
//   console.log(age);
// } while (age >= 18);

// let names = ["John", "Alice", "Bob", "David"];

// names.forEach((el) => {
//   console.log(el);
// });

// for (name of names) {
//   console.log(name);
// }

// for (let i = 0; i < names.length; i++) {
//   console.log(names[i]);
// }

for (let i = 0; i < 10; i++) {
  if (i == 5) continue;
  console.log(i);
}

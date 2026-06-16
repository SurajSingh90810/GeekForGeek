// let arr=[11,222,33,66,55,44,888,99]
// console.log(arr.indexOf(66));

// ------------------------------------------------------------------------------------------------------------------------------------------

// let arr = [3, 6, 1, 9, 7, 7];
// let large = arr[0];
// for (let i = 1; i < arr.length; i++) {
//   if (large < arr[i]) {
//     large = arr[i];
//   }
// }
// console.log(large);

// ------------------------------------------------------------------------------------------------------------------------------------------

// function isSubset(a, b) {
//   for (let i = 0; i < b.length; i++) {
//     let found = false;
//     for (let j = 0; j < a.length; j++) {
//       if (b[i] === a[j]) {
//         found = true;
//         break;
//       }
//     }
//     if (!found) {
//       return false;
//     }
//   }
//   return true;
// }
// console.log(isSubset([1, 2, 3, 4, 5], [1, 2, 3]));

// ------------------------------------------------------------------------------------------------------------------------------------------

// function isSubset(a, b) {
//   for (let i = 0; i < b.length; i++) {
//     if (!a.includes(b[i])) {
//       return false;
//     }
//   }
//   return true;
// }
// console.log(isSubset([1, 2, 3, 4, 5], [1, 2, 3, 3]));

// ----------------------------------------------------------------------------------------------------------------------------------------

// function isSubset(a, b) {
//     let map = new Map();
//     for (let num of a) {
//         map.set(num, (map.get(num) || 0) + 1);
//     }
//     for (let num of b) {
//         if (!map.has(num) || map.get(num) === 0) {
//             return false;
//         }
//         map.set(num, map.get(num) - 1);
//     }
//     return true;
// }
// console.log(isSubset([1, 2, 3, 4, 5], [1, 2, 3, 3])); // false

//-----------------------------------------------------------------------------------------------------------------------------------------

// let arr = [11, 22, 33, 44, 55, 66];
// function search(num) {
//   return arr.indexOf(num);
// }
// console.log(search(44));

//-----------------------------------------------------------------------------------------------------------------------------------------

// let arr = [11, 12, 13, 14, 15, 16, 17, 18, 19, 20];
// let result = [];
// function Check(num) {
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] < num) {
//       result.push(arr[i]);
//     }
//   }
//   return result;
// }
// console.log(Check(15));

//-----------------------------------------------------------------------------------------------------------------------------------------

// let num = 1005;
// let str = num.toString();
// let result = "";
// for (let i = 0; i < str.length; i++) {
//   if (str[i] == "0") {
//     result += "5";
//   } else {
//     result += str[i];
//   }
// }
// console.log(Number(result));

//-----------------------------------------------------------------------------------------------------------------------------------------

// let num = 100008;
// let str = num.toString().replaceAll("0", "5");
// console.log(str);

//-----------------------------------------------------------------------------------------------------------------------------------------

// let arr = [1, 2, 3, 4, 5, 6];
// arr.splice(6, 0, 90)
// console.log(arr);

//-----------------------------------------------------------------------------------------------------------------------------------------

// let arr = [2, 12, 40, 6, 13, 15, 20, 17];
// let count = 0;
// for (let i = 0; i < arr.length; i++) {
//   if (arr[i] % 2 == 0) {
//     count++;
//   }
// }
// let odd = arr.length - count;
// console.log(odd);
// console.log(count);

//-----------------------------------------------------------------------------------------------------------------------------------------

// let arr = [
//   11, 22, 22, 22, 33, 33, 33, 33, 44, 55, 55, 55, 55, 55, 99, 99, 99, 99, 99,
//   99,
// ];

// let map = new Map();
// for (let i = 0; i < arr.length; i++) {
//   map.set(arr[i], (map.get(arr[i]) || 0) + 1);
// }
// let maxCount = 0;
// let maxNum = [];
// for (let [num, count] of map) {
//   if (count > maxCount) {
//     maxCount = count;
//     maxNum = [num];
//   } else if (count === maxCount) {
//     maxNum.push(num);
//   }
// }
// console.log("Number(s):", maxNum);
// console.log("Frequency:", maxCount);

//-----------------------------------------------------------------------------------------------------------------------------------------

// let arr = [
//   11, 22, 22, 22, 33, 33, 33, 33, 44, 55, 55, 55, 55, 55, 99, 99, 99, 99, 99,
//   99,
// ];
// let obj = {};
// for (let i = 0; i < arr.length; i++) {
//   obj[arr[i]] = (obj[arr[i]] || 0) + 1;
// }
// console.log(obj);
// let number = [];
// let value = 0;
// for (let key in obj) {
//   if (obj[key] > number) {
//     number = obj[key];
//     value = key;
//   }
// }
// console.log(number);
// console.log(value);

//-----------------------------------------------------------------------------------------------------------------------------------------

// let arr = [54, 43, 2, 1, 5];
// let result = "";
// for (let i = 0; i < arr.length; i++) {
//     result += arr[i] + " ";
// }
// console.log(result);

//-----------------------------------------------------------------------------------------------------------------------------------------

// let arr = ["Geek", "Geeks", "Geeksfor", "GeeksforGeek", "GeeksforGeeks"];
// let long = arr[0];
// for (let i = 0; i < arr.length; i++) {
//   if (arr[i].length > arr[0].length) {
//     long = arr[i];
//   }
// }
// console.log(long);

//-----------------------------------------------------------------------------------------------------------------------------------------

// let arr = [10, 5, 6, 66, 100, 85];
// let start = 0;
// let end = arr.length - 1;
// while (start < end) {
//   if (arr[start] > arr[end]) {
//     start++;
//   } else {
//     end--;
//   }
// }
// console.log(arr[start]);

//-----------------------------------------------------------------------------------------------------------------------------------------

// let arr = [10, 20, 30, 40, 50, 60, 70, 80];
// function Swap(a) {
//   let result = [];
//   let endIndex = arr.length - a;
//   let start = arr[a];
//   let end = arr[endIndex];
//   for (let i = 0; i < arr.length; i++) {
//     if (i === a) {
//       result.push(end);
//     } else if (i === endIndex) {
//       result.push(start);
//     } else {
//       result.push(arr[i]);
//     }
//   }
//   return result;
// }
// console.log(Swap(3));

//-----------------------------------------------------------------------------------------------------------------------------------------

// function rotateArray(arr, num) {
//   let result = [];
//   for (let i = num; i < arr.length; i++) {
//     result.push(arr[i]);
//   }
//   for (let i = 0; i < num; i++) {
//     result.push(arr[i]);
//   }
//   return result;
// }

// console.log(rotateArray([5, 6, 7, 8, 9, 10, 2, 3], 4));

//-----------------------------------------------------------------------------------------------------------------------------------------

// let arr = [2, 8, 7, 1, 5];
// let hello = arr.sort((a, b) => a - b);
// console.log(hello);

// function last(num) {
//   let result = [];

//   for (let i = 0; i < hello.length - num; i++) {
//     result.push(hello[i]);
//   }
//   return result;
// }
// console.log(last(2));

//-----------------------------------------------------------------------------------------------------------------------------------------

// let arr = [0, 0, 0, 0, 1, 0, 0];
// for (let i = 0; i < arr.length; i++) {
//   if (arr[i] == 1) {
//     console.log(arr.indexOf(arr[i]));
//   }
// }

//-----------------------------------------------------------------------------------------------------------------------------------------

// let car = [2375, 7682, 2325, 2352];
// let fine = [250, 500, 350, 200];
// function Fined(date) {
//   let amount = [];
//   if (date % 2 === 0) {
//     for (let i = 0; i < car.length; i++) {
//       if (car[i] % 2 === 0) {
//         console.log(car[i]);
//         amount.push(fine[i]);
//       }
//     }
//     console.log(amount);
//   } else {
//     for (let i = 0; i < car.length; i++) {
//       if (car[i] % 2 !== 0) {
//         console.log(car[i]);
//         amount.push(fine[i]);
//       }
//     }
//   }
//   let amount1 = amount.reduce((a, b) => a + b);
//   return amount1;
// }

// console.log(Fined(11));

//-----------------------------------------------------------------------------------------------------------------------------------------

// let arr = [4, 6, 2, 3, 1];
// while (true) {
//   let allZero = true;
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] > 0) {
//       arr[i]--;
//       allZero = false;
//     }
//   }
//   console.log(arr);
//   if (allZero) {
//     break;
//   }
// }

//-----------------------------------------------------------------------------------------------------------------------------------------

// let arr = [4, 6, 2, 3, 1];
// while (arr.some(value => value > 0)) {
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] > 0) {
//       arr[i]--;
//     }
//   }
//   console.log(arr);
// }

//-----------------------------------------------------------------------------------------------------------------------------------------

// let arr = [4, 5, 6, 7, 8, 9, 10, 2];
// function Multi(num) {
//   let mul = 1;

//   for (let i = 0; i <= num; i++) {
//     mul *= arr[i];
//   }
//   return mul;
// }
// console.log(Multi(5));

//-----------------------------------------------------------------------------------------------------------------------------------------

// let arr = [4, 5, 6, 7, 8, 9, 10, 2];
// function Multi(num) {
//   return arr.slice(0, num + 1).reduce((a, b) => a * b, 1);
// }
// console.log(Multi(2));

//-----------------------------------------------------------------------------------------------------------------------------------------

// let arr = [12, 12, 12, 13, 13, 14, 14, 14, 14, 14, 5];
// let map = new Map();
// for (let value of arr) {
//   map.set(value, (map.get(value) || 0) + 1);
// }
// console.log(map);
// let num = 2;
// for (let [key, value] of map) {
//   if (value < num) {
//     console.log(key);
//   }
// }

//-----------------------------------------------------------------------------------------------------------------------------------------

// let arr = [2, 40, 8, 5, 9, 13, 17];
// for (let i = 0; i < arr.length; i++) {
//   if (arr[i] % 2 === 0) {
//     console.log("Even", arr[i]);
//   } else if (arr[i] % 2 !== 0) {
//     {
//       console.log("Odd", arr[i]);
//     }
//   }
// }

//-----------------------------------------------------------------------------------------------------------------------------------------

// let arr = [2, 40, 8, 5, 9, 13, 17];
// let result = [];
// for (let i = 0; i < arr.length; i++) {
//   if (arr[i] % 2 === 0) {
//     console.log("Even", arr[i]);
//     result.push(arr[i]);
//   } else if (arr[i] % 2 !== 0) {
//     {
//       console.log("Odd", arr[i]);
//       result.push(arr[i]);
//     }
//   }
// }
// console.log(result);

//-----------------------------------------------------------------------------------------------------------------------------------------

// let arr = [10, 2, 3, 4, 5, 6, 86, 9, 7];
// let result = [];
// function Movement(l1, r2) {
//   for (let i = 0; i < l1; i++) {
//     result.push(arr[i]);
//   }
//   for (let i = r2; i >= l1; i--) {
//     result.push(arr[i]);
//   }
//   for (let i = r2 + 1; i < arr.length; i++) {
//     result.push(arr[i]);
//   }
//   return result;
// }
// Movement(2, 6);
// console.log(result);

//-----------------------------------------------------------------------------------------------------------------------------------------

// let arr1 = [11, 12, 13, 14, 15];
// let arr2 = [16, 17, 18, 19, 20];
// function Sums(num) {
//     let result = [];
//     for (let i = 0; i < arr1.length; i++) {
//         for (let j = 0; j < arr2.length; j++) {
//             if (num === arr1[i] + arr2[j]) {
//                 result.push(arr1[i]);
//                 result.push(arr2[j]);
//             }
//         }
//     }
//     return result;
// }
// console.log(Sums(28));

//-----------------------------------------------------------------------------------------------------------------------------------------

// let arr = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100];
// let odd = arr.length / 2;
// let even = arr.length;
// console.log(odd);
// let sum = 1;
// let sum1 = 1;
// for (let i = 0; i <= arr.length / 2 - 1; i++) {
//   sum *= arr[i];
// }
// for (let i = arr.length / 2; i < arr.length; i++) {
//   sum1 *= arr[i];
// }
// console.log(sum);
// console.log(sum1);
// console.log(sum+sum1);

//-----------------------------------------------------------------------------------------------------------------------------------------

// let arr = [10, 56, 42, 22, 79, 100, 36, 45, 95];
// let sortArr = arr.sort((a, b) => a - b);
// let result = [];
// let start = 0;
// let end = sortArr.length - 1;
// console.log(sortArr);
// for (let i = 0; i < sortArr.length; i++) {
//   if (i % 2 === 0) {
//     result.push(sortArr[start]);
//     start++;
//   }
//   if (i % 2 !== 0) {
//     result.push(sortArr[end]);
//     end--;
//   }
// }
// console.log(result);

//-----------------------------------------------------------------------------------------------------------------------------------------

// let arr = [11, 12, 13, 14, 15, 16, 11, 12];
// let set = new Set(arr);
// console.log(set);

//-----------------------------------------------------------------------------------------------------------------------------------------

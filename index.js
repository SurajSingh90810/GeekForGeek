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

// let arr = [4, 2, 1, 10, 6];
// let result = [];
// function Range(num1, num2) {
//   const leftIndex = arr.indexOf(num1);
//   const rightIndex = arr.lastIndexOf(num2);
//   for (let i = leftIndex + 1; i < rightIndex; i++) {
//     result.push(arr[i]);
//   }
//   return result;
// }
// console.log(Range(4, 6));

//-----------------------------------------------------------------------------------------------------------------------------------------

// let arr = [1, 2, 3, 4, 5, 6, 7, 7, 6, 8, 9, 10];
// let result = [];
// for (let i = 0; i < arr.length; i++) {
//   if (!result.includes(arr[i])) {
//     result.push(arr[i]);
//   }
// }
// let result1 = result.reduce((a, b) => a + b);
// console.log(result1);

//-----------------------------------------------------------------------------------------------------------------------------------------

// let arr = [1, 2, 3, 4, 5, 6, 7, 8];
// let arr1 = [1, 2, 3, 4, 5, 6, 7, 8];
// function Same(arr, arr1) {
//   if (arr.length !== arr1.length) {
//     return false;
//   }
//   for (let i = 0; i < arr.length; i++) {
//     if (!arr1.includes(arr[i])) {
//       return false;
//     }
//   }
//   return true;
// }
// console.log(Same(arr, arr1));

//-----------------------------------------------------------------------------------------------------------------------------------------

// let arr = [10, 11, 11, 11, 11, 22, 22, 22, 55, 55, 55, 66, 99, 77, 77];
// let map = new Map();
// for (let value of arr) {
//   map.set(value, (map.get(value) || 0) + 1);
// }
// let maxKey, minKey;
// let maxCount = -Infinity;
// let minCount = Infinity;
// for (let [key, count] of map) {
//   if (count > maxCount) {
//     maxCount = count;
//     maxKey = key;
//   }
//   if (count < minCount) {
//     minCount = count;
//     minKey = key;
//   }
// }
// console.log("Most repeated:", maxKey, "=>", maxCount);
// console.log("Least repeated:", minKey, "=>", minCount);

//-----------------------------------------------------------------------------------------------------------------------------------------

// let arr = [1, 2, 3, 3, 4];
// let set = new Set(arr);
// let arr1 = [...set];
// for (let i = 0; i < arr1.length; i++) {
//   if (arr1[i - 1] && arr1[i + 1]) {
//     console.log(arr1[i]);
//   }
// }

//-----------------------------------------------------------------------------------------------------------------------------------------

// let arr = [5, 7, 4, 3, 2, 6, 1];
// function moveToFront(num) {
//   let move = arr.length;
//   for (let i = arr.length - 1; i >= 0; i--) {
//     if (arr[i] === move) {
//       move--;
//     }
//   }
//   return move;
// }
// console.log(moveToFront(arr));

//-----------------------------------------------------------------------------------------------------------------------------------------

// let arr = [7, 7, 7, 7, 7, 7, -1, -1, -1, 0, 0];
// let count = 0;
// let minus = 0;
// let val = 20;
// let zero = 0;
// for (let i = 0; i < arr.length; i++) {
//   if (arr[i] > 0) {
//     count++;
//   }
//   if (arr[i] < 0) {
//     minus++;
//   }
//   if (arr[i] == 0) {
//     zero++;
//   }
// }
// let divide = val / count;
// let minuss = val / minus;
// let zeros = val / zero;
// console.log(divide);
// console.log(minuss);
// console.log(zeros);

//-----------------------------------------------------------------------------------------------------------------------------------------

// let arr = [4, 7, 3, 6, 7];
// let result = [...arr];
// let current = [...arr];
// while (current.length > 1) {
//   let next = [];
//   for (let i = 0; i < current.length - 1; i++) {
//     next.push(current[i] + current[i + 1]);
//   }
//   result = [...next, ...result];
//   current = next;
// }
// console.log(result);

//-----------------------------------------------------------------------------------------------------------------------------------------

// let arr = [4, 5, 6, 7, 8, 9, 10];
// function Multiply(arr, num) {
//   if (num == arr.length) {
//     return arr.reduce((a, b) => a * b);
//   } else {
//     return console.log("Wrong Input");
//   }
// }
// Multiply(arr, 8);

//-----------------------------------------------------------------------------------------------------------------------------------------

// let arr = [4, 8, 9, 10, 12];
// let pairs = [];
// for (let i = 0; i < arr.length - 1; i++) {
//   pairs.push([arr[i], arr[i + 1]]);
// }
// let count = 0;
// for (let [a, b] of pairs) {
//   if (a % 2 == 0 && b % 2 == 0) {
//     pairs[count].splice(1, 0, 1);
//   }
//   count++;
// }
// console.log(pairs);

//-----------------------------------------------------------------------------------------------------------------------------------------

// let arr = [3, 6, 4, 8, 9];
// let sum = 0;
// for (let i = 0; i < arr.length; i++) {
//   sum += arr[i];
// }
// for (let i = 0; i < arr.length; i++) {
//   arr[i] = sum - arr[i];
// }
// console.log(arr);

//-----------------------------------------------------------------------------------------------------------------------------------------

// arr1 = [11, 1, 8];
// arr2 = [10, 11];

// let result = [...arr1, ...arr2];
// let set = new Set(result);
// let array = Array(...set);
// console.log(array);

//-----------------------------------------------------------------------------------------------------------------------------------------

// let arr = [4, 4, 4, 9, 6, 8, 7, 7, 1, 1, 8, 9];
// function Repeated(arr, a) {
//   let map = new Map();
//   let keys = [];
//   for (let val of arr) {
//     map.set(val, (map.get(val) || 0) + 1);
//   }
//   console.log(map);
//   for (let [key, value] of map) {
//     if (value == a) {
//       keys.push(key);
//     }
//   }
//   let pops = keys.pop();
//   return pops;
// }
// console.log(Repeated(arr, 2));

//-----------------------------------------------------------------------------------------------------------------------------------------

// let arr = [4, 2, 7, 9];
// let max = 0;
// let result = [];
// for (let i = 0; i < arr.length - 2; i++) {
//   for (let j = i + 1; j < arr.length - 1; j++) {
//     for (let k = j + 1; k < arr.length; k++) {
//       console.log(arr[i], arr[j], arr[[k]]);
//       let sum = arr[i] + arr[j] + arr[k];
//       result.push(sum);
//       if (sum > max) {
//         max = sum;
//       }
//     }
//   }
// }
// console.log(max);
// console.log(result);

//-----------------------------------------------------------------------------------------------------------------------------------------

// let arr = [1, 2, 3, 4, 5, 9, 10];
// let k = 5;
// let arr1 = arr
//   .sort((a, b) => b - a)
//   .slice(0, k)
//   .reduce((a, b) => a * b);
// console.log(arr1);

//-----------------------------------------------------------------------------------------------------------------------------------------

// function Operation(array, num) {
//   let numbers = [];
//   for (let i = 0; i < array.length; i++) {
//     if (array[i] >= num) {
//       numbers.push(array[i]);
//     }
//   }
//   let hello = numbers.filter((val) => val - num < 5).length;
//   return hello;
// }
// console.log(Operation([5, 3, 2, 6, 8, 30], 4));

//-----------------------------------------------------------------------------------------------------------------------------------------

// function maxPerimeter(arr) {
//   arr.sort((a, b) => b - a);
//   for (let i = 0; i < arr.length - 2; i++) {
//     let a = arr[i];
//     let b = arr[i + 1];
//     let c = arr[i + 2];
//     if (b + c > a) {
//       return a + b + c;
//     }
//   }
//   return 0;
// }
// let arr = [6, 1, 6, 5, 8, 4];
// console.log(maxPerimeter(arr));

//-----------------------------------------------------------------------------------------------------------------------------------------

// let arr = [1, 2, 3, 4, 5];
// let maxSum = 0;
// let first, second;
// for (let i = 0; i < arr.length - 1; i++) {
//     let sum = arr[i] + arr[i + 1];
//     if (sum > maxSum) {
//         maxSum = sum;
//         first = arr[i];
//         second = arr[i + 1];
//     }
// }
// console.log("Maximum Sum:", maxSum);
// console.log("Numbers:", first, second);

//-----------------------------------------------------------------------------------------------------------------------------------------

// let arr = [7, 9, 10, 8, 11, 2, 20, 1, 5];
// let res = [];
// for (let i = 0; i < arr.length - 2; i++) {
//   if (arr[i] > arr[i + 1] && arr[i + 1] > arr[i + 2]) {
//     res.push(arr[i], arr[i + 1], arr[i + 2]);
//   } else {
//     console.log(arr[i], arr[i + 1], arr[i + 2]);
//   }
// }

//-----------------------------------------------------------------------------------------------------------------------------------------

// function isPerfect(arr) {
//   let i = 0;
//   let n = arr.length;
//   while (i < n - 1 && arr[i] < arr[i + 1]) {
//     i++;
//   }
//   if (i === 0) {
//     return false;
//   }
//   while (i < n - 1 && arr[i] === arr[i + 1]) {
//     i++;
//   }
//   while (i < n - 1 && arr[i] > arr[i + 1]) {
//     i++;
//   }
//   return i === n - 1;
// }
// console.log(isPerfect([1, 8, 8, 8, 3, 2]));
// console.log(isPerfect([1, 1, 2, 2, 1]));

//-----------------------------------------------------------------------------------------------------------------------------------------

// function countElements(arr) {
//   let count = 1;
//   let max = arr[0];
//   for (let i = 1; i < arr.length; i++) {
//     if (arr[i] > max) {
//       count++;
//       max = arr[i];
//     }
//   }
//   return count;
// }
// console.log(countElements([10, 40, 23, 35, 50, 7])); // 3
// console.log(countElements([5, 4, 1])); // 1

//-----------------------------------------------------------------------------------------------------------------------------------------

// function minimumTime(arr1, arr2) {
//   let n = arr1.length;
//   let dp1 = arr1[0]; // Start with train 1
//   let dp2 = arr2[0]; // Start with train 2
//   for (let i = 1; i < n; i++) {
//     let newDp1 = Math.min(
//       dp1 + arr1[i], // Stay on train 1
//       dp2 + 1 + arr1[i], // Switch from train 2
//     );
//     let newDp2 = Math.min(
//       dp2 + arr2[i], // Stay on train 2
//       dp1 + 1 + arr2[i], // Switch from train 1
//     );
//     dp1 = newDp1;
//     dp2 = newDp2;
//   }
//   return Math.min(dp1, dp2);
// }
// console.log(minimumTime([2, 1, 2], [3, 2, 1])); // 5
// console.log(minimumTime([1, 3, 1, 2], [2, 2, 3, 1])); // 5

//-----------------------------------------------------------------------------------------------------------------------------------------

// function winner(arr, m, n) {
//   let ram = 0;
//   let rohan = 0;
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] % m === 0) {
//       ram++;
//     } else if (arr[i] % n === 0) {
//       rohan++;
//     }
//   }
//   if (ram > rohan) {
//     return "Ram";
//   } else if (rohan > ram) {
//     return "Rohan";
//   } else {
//     return "Tie";
//   }
// }
// console.log(winner([4, 5, 7, 6, 9, 10, 14], 2, 3));
// console.log(winner([1, 9, 9, 10, 9, 18], 5, 3));

//-----------------------------------------------------------------------------------------------------------------------------------------

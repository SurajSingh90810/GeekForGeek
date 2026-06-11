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

// ------------------------------------------------------------------------------------------------------------------------------------------

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
function getCompute(arr) {
    if (arr.lenght === 0) {
        return arr;
    }
    const firstItem = arr[0];
    arr.shift(); // 1 chi  qiymatni uchirmoqda.
    arr.push(firstItem); // (0) chi index qiymatni oxiridan qushsin.
    return arr;
}
const inputArray = ['h','e','l','l','o'];
const result = getCompute(inputArray);
console.log(result);

//                              Task - F
//
// const getReverse = function(str) {
//     for(let i = 0; i <= str.length; i++) {
//         for(let a = i+1; a <= str.length; a++) {
//             if(str[a] === str[i]) {
//                 return true;
//             }
//         }
//     }
//     return false;
// }
//
// const input = "hello";
// const result = getReverse(input);
// console.log(result)
//




//                               Task - E

// function reverse (str) {
//     if (str === "")
//         return "";
//     else
//         return reverse(str.substring(1)) + str.charAt(0);
// }
// let str = "hello";
// const output = reverse(str);
// console.log(output);
//




// console.log("Jack Ma maslahatlari");
// const list = [
//     'yaxshi talaba boling', //0-20
//      'togri boshiq tanlang va koproq hato qiling', // 20-30
//      'oz ishingizni boshlang', // 30-40
//      'siz kuchli bolgan narsalarni qiling', //40-50
//      'yoshlarga investitsiya qiling', // 50-60
//      'endi dam oling, foydasi yoq'
//  ];


// function maslahatbering (a, callback) {
//     if ( typeof a !== "number") callback("insert a number", null);
//     else if (a <= 20) callback(null, list[0]);
//     else if (a > 20 && a <= 30) callback(null, list[1]);
//     else if (a > 30 && a <= 40) callback(null, list[2]);
//     else if (a > 40 && a <= 50) callback(null, list[3]);
//     else if (a > 50 && a <= 60) callback(null, list[4]);
//     else {
//         setTimeout(function () {
//             callback(null, list[5]);
//         }, 5000);
//     }
// }


// console.log("passed here 0")
// maslahatbering(25, (err, data) => {
//     if(err) console.log("ERROR:", err)
//     else {
//         console.log("javob:", data);
//     }
// })

//  console.log("passed here 1");
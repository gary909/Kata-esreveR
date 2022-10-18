// Can't use built in functions :-(
// function reverse(array) {
//     return array.reverse();
// }

function reverse(array) {
    let myArr = [];
    for (let i = 0; i < array.length; i++) {
        myArr.unshift(array[i]);
    }
    return myArr;
}

console.log(reverse([1, 2, 3])); // [3,2,1]
console.log(reverse([1, null, 14, "two"])); // ["two",14,null,1]
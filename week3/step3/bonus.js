function uniqueArray(arr){
    let unique = [...new Set(arr)];
    return unique;
}

let arr = ['a', 'b', 'c', 'd', 'a', 'e', 'f', 'c'];
console.log(uniqueArray(arr));
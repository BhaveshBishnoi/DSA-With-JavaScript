let arr = [1, 3, 4, 6, 4, 6, 7, 3, 8, 3];
let newArr = []

for (let i = 0; i < arr.length; i++) {

    if(newArr.indexOf(arr[i])===-1){
        newArr.push(arr[i])
    }
}

console.log(newArr);

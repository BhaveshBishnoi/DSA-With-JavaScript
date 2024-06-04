let arr = []
let len = arr.length;

function push(val){
    arr[len]=val;
    len++
}

push(10);
push(58);
push(16);
push(97);
push(18);
console.log(arr);

function pop() {
    if(len>0){
        len = len-1
        arr.length = len
    }else{
        alert('Array is already Empty')
    }
}

pop()
console.log(arr);

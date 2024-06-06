let arr=[1,2,3,4,5,6,7,8,9,10,34,54,65,66,72,81,91,95,96,97]
let even = 0;
let odd = 0;


for(let i=0;i<arr.length;i++){
if(arr[i]%2==0){
    even +=arr[i]
}else{
    odd +=arr[i]
}
}

console.log('Odd', odd);
console.log('Even', even);

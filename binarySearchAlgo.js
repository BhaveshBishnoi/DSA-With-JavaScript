let arr=[1,2,3,4,5,6,7,8,9,10,34,54,65,66,72,81,91,95,96,97]
let find=2;
let start = 0;

let end = arr.length-1;
position = undefined;

while(start<=end){
    let mid = Math.floor((start + end)/2)
    if (arr[mid]==find) {
        position = mid;       
        break;
    }else if(arr[mid]<find){
        start = mid+1
    }else{
        end=mid-1;
    }

}
console.log(position);

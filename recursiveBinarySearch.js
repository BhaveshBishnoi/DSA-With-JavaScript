let arr=[1,2,3,4,5,6,7,8,9,10,34,54,65,66,72,81,91,95,96,97]
let start = 0;
let end = arr.length-1;
let find = 65;
let position =undefined;

function recursiveBinarySearch(data,start,end){
    let mid = Math.floor((start+end)/2);
    if(data[mid]==find){
        position=mid;
        return true;
    } else if(data[mid]<find){
        recursiveBinarySearch(data,mid+1,end);
    }else{
        recursiveBinarySearch(data,start,mid-1)
    }

}

recursiveBinarySearch(arr,start,end)
console.log(position);

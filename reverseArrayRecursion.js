let arr = [10,35,74,64,36,24,73]

function arrayReverse(array,start,end){
    console.log(arr);
if(start<=end){
    let temp = arr[start]
    arr[start] = arr[end];
    arr[end] = temp;
    arrayReverse(array, start+1, end-1);
}

}

arrayReverse(arr,0,arr.length-1)

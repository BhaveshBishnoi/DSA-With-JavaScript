let str = 'levely';
let start =0;
let end = str.length-1;
let result = true;
function isStringPelimdrome(data){
    while(start<end){
        if(data[start] !== data[end]){
            result = false;
        }
            start++;
            end--;
    }
    return result;
}
isStringPelimdrome(str)
console.log(result);

let str = "Hello this is Bhavesh and you are watching DSA tutorial";
let obj = {};
let maxKey = "";

for (let i = 0; i < str.length; i++) {
    // console.log(str[i]);
    let key = str[i];
    if(key==' '){
        continue;
    }
    if(!obj[key]){
        obj[key]= 0
    }
    obj[key]++;
    if(maxKey == '' || obj[key]>obj[maxKey]){
maxKey=key;
    }
    
}

console.log(obj);
console.log(maxKey);

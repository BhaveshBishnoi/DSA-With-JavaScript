let str1 = 'hello';
let str2 = 'ohell'
let strObj = {}

function isStringAnagram(str1,str2){
if(str1.length == str2.length){
    for(i of str1){
        strObj[i] = (strObj[i] || 0)+1;
    }
    // console.log(strObj);

    for(i of str2){
        if(!strObj[i]){
            return 'This is not Anagram CN2';
        } else{
            strObj[i]--
            // console.log(strObj);
            
            }
    }
    console.log('this is Anagram');
}else{
    return 'This is not Anagram CN1'
}

}

isStringAnagram(str1, str2);

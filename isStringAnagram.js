let str1='bhavesh';
let str2 = 'bahvesh'
let obj = {}
let ans = true;
function isAnagram(st1,st2){
    if(st1.length != st2.length){
        ans= false;
        return;
    }
    for(i of st1){
        obj[i]=(obj[i] || 0) +1 ;
        
    }
    for(j of st2){
        if(!obj[j]){
            ans = false;
            return;
        }
        obj[j]--;
    }

}

isAnagram(str1,str2)
console.log(ans);
// console.log(obj);

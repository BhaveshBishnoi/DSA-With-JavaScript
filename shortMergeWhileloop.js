let arr1 = [1,3,6,34,63,22,53,38]
let arr2 = [13,37,20,92]
let arr3 = []

let a1=0
let a2=0
let a3=0

while(arr1.length>a1 && arr2.length>a2){
    if(arr1[a1]<arr2[a2]){
        arr3[a3]=arr1[a1]
        a1++;
    }else{
        arr3[a3]=arr2[a2]
        a2++;
    }
    a3++;

}
while(arr1.length+arr2.length!=arr3.length){
    if(arr1.length!=a1){
        console.log('arr1 Value');
        arr3[a3]=arr1[a1]
    a1++;
    a3++;
    } if(arr2.length!=a2){
    console.log('arr2 value');
    arr3[a3]=arr2[a2]
    a2++;
    a3++;
    }
}
console.log(arr3);

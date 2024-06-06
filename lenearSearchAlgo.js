let arr = [10,30,39,10,39,28,93,84,47,39,39,27,29,9,10,39,28,93,84,47];
let find = 39;
let position = []
let apearTimes = 0;

for(let i=0;i<arr.length;i++){
    if(find==arr[i]){
        position.push(i)
        apearTimes = position.length;
    }
}
console.log(position);
console.log(apearTimes);

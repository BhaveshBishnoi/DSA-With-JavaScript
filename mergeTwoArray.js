let data = [89,35,63,74,73,84,81,39,62]
let data1 = [2,4,65,87,45,76]
let data2 = [];

// using Shortcut Method Push Method
for(let i=0; i<data.length;i++){
    data1.push(data[i])
}
console.log(data1);

//Using Main Method

for(let i=0; i<data.length;i++){
    data2[i]=data[i]
}
for(let i=0; i<data1.length;i++){
    data2[data.length+i]=data1[i]
}
console.log(data2);

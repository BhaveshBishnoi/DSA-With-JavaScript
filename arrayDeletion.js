let data = [89,35,63,74,73,84,81,39,62]
let position = 0;
console.log(data);
for(let i =position; i<data.length-1; i++){
    data[i]=data[i+1]
}
data.length = data.length-1

console.log(data);

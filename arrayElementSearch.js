let data = [89,35,63,74,73,84,81,39,62]
let item = 84;
let index = undefined;

for(let i =0; i<data.length-1; i++){
    if(data[i]==item){
        index = i
    }    
}
console.log(index);

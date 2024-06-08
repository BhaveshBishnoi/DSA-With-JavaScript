let data = {
    name:'bhavesh',
    age:20,
    email:'bhavesh@gmail.com',
    gender:'male'
}
// delete data.gender
data.city='dehradun';
data['isWorking'] = true;
// console.log(data);
// console.log(data.name);
for(i in data){
    // console.log(i,':',data[i]);
}
console.log(Object.keys(data));
console.log(Object.values(data));
console.log(Object.entries(data));

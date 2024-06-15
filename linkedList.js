let head = {value:100,
    next:null
}
let tail = head;
let listSize = 1;
console.log(head);

function appendList(node){
node = {
    value : node,
    next : null
}
tail.next = node;
tail = node
listSize++;
}

appendList(200)
appendList(300)
appendList(400)
appendList(500)

console.log(head);
console.log(tail);
console.log(listSize);

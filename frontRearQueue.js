let queue = [];
let currentSize = queue.length;
let maxSize = 10;

function enQueue(input){
    if(currentSize<maxSize){
        queue[currentSize]=input
        currentSize++;
    }else{
        alert('Queue is Full')
    }
}

function deQueue(){
    for (let i = 0; i < queue.length; i++) {
        queue[i]=queue[i+1]        
    }
    currentSize--;
    queue.length = currentSize;
}

function front(){
    console.log(queue[0])
}

function rear(){
    console.log(queue[currentSize-1]);
}

function display(){
    console.log(queue);
}

enQueue(10);
enQueue(20);
enQueue(30);
enQueue(40);
display()
deQueue()
display()
front();
rear();

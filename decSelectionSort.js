let Arr = [95,3,23,36,32,64,76,45,35]

function selectionSort(data){

    for (let i = 0; i < data.length; i++) {
        let min = i;
        for (let j = i + 1; j < data.length; j++) {
            
            if(data[min]<data[j]){
                min = j;
            }
                        
        }
        let temp = data[i];
        data[i]=data[min];
        data[min]=temp;   
    }
}

selectionSort(Arr);
console.log(Arr);

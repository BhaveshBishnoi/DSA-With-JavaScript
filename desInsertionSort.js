let arr = [8, 4, 6, 2, 9];

function insertionSort(data) {
  let i, j, current;
  for (i = 1; i < data.length; i++) {
    current = data[i];
    j = i - 1;
    while (j >= 0 && data[j] < current) {
      data[j + 1] = data[j];
      j--;
    }
    data[j + 1] = current;
  }
}

insertionSort(arr);
console.log(arr);

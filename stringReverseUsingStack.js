let arr = [];
let str = "Bhavesh";
str = str.split("");
let len = arr.length;
let lastDigit = "";

function push(val) {
  arr[len] = val;
  len++;
}

function pop() {
  if (len > 0) {
    lastDigit = arr[len - 1];
    len = len - 1;
    arr.length = len;
    return lastDigit;
  } else {
    alert("Array is already Empty");
  }
}
function revString(data) {
  for (let i = 0; i < data.length; i++) {
    push(data[i]);
  }
  for (let i = 0; i < data.length; i++) {
    data[i] = pop();
  }
}

revString(str);
console.log(str);
str = str.join('')
console.log(str);

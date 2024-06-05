class Stack {
  arr = [];
  arrLen;
  maxLen;
  constructor() {
    console.log("Call");
    this.arrLen = this.arr.length;
    this.maxLen = 10;
  }
  push(val) {
    this.arr[this.arrLen] = val;
    this.arrLen++;
  }
  pop() {
    this.arrLen--;
    this.arr.length = this.arrLen;
  }
  display() {
    // this.pop()
    console.log(this.arr);
  }
}

st = new Stack();
st.push(20)
st.push(30)
st.push(40)
console.log(st.arr);
st.display()

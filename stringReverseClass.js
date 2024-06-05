class StringReverse {
  arr = [];
  currentSize;
  curRemovedItem;
  str = "rahul";

  constructor() {
    // console.log("Constructor Call");
    this.currentSize = this.arr.length;
    this.str = this.str.split("");
    this.strReverse(this.str);
    this.str = this.arr.join("");
  }
  push(val) {
    this.arr[this.currentSize] = val;
    this.currentSize++;
  }
  pop() {
    if (this.currentSize > 0) {
      this.curRemovedItem = this.arr[this.currentSize - 1];
      this.currentSize--;
      this.arr.length = this.currentSize;
      return this.curRemovedItem;
    } else {
      console.warn("Queue is Empty");
    }
  }

  strReverse(data) {
    for (let i = 0; i < data.length; i++) {
      this.push(data[i]);
    }
    // console.log('data',data);
    // console.log('arr',this.arr);
    for (let i = 0; i < data.length; i++) {
      data[i] = this.pop();
    }
    this.arr = data;
    // console.log(data);
  }
  display() {
    console.log(this.str);
  }
}
let Sr = new StringReverse();
Sr.display();

// Tạo đối tượng máy tính gồm 3 phương thức
// a. Read(): nhận hai giá trị và lưu chúng dưới dạng thuộc tính đối tượng
// b. Sum(): trả về tổng giá trị đã lưu
// c. Mul(): trả về tích các giá trị đã lưu
let calculator = {
  value1: 0,
  value2: 0,
  read(value1, value2) {
    this.value1 = value1;
    this.value2 = value2;
  },
  sum() {
    return this.value1 + this.value2;
  },
  mul() {
    return this.value1 * this.value2;
  },
};
console.log(calculator);
calculator.read(5, 10);
console.log(calculator.sum()); // 15
console.log(calculator.mul()); // 50

// Xây dựng đối tượng chứa tiền lương của các nhân viên trong phòng. Viết
// hàm tính tổng lương của các nhân viên trong phòng
let salary = {
  employeeA: 500,
  employeeB: 1500,
  employeeC: 300,
  employeeD: 480,
  employeeE: 1010,
};
function calcSumSalary(object) {
  let sumSalary = 0;
  let objValue = Object.values(object);
  for (let i = 0; i < objValue.length; i++) {
    sumSalary += objValue[i];
  }
  return sumSalary;
}
console.log(calcSumSalary(salary));

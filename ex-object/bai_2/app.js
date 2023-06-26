// Viết hàm checkEmpty kiểm tra đối tượng có thuộc tính không? Có thì trả
// về true, ngược lại trả về false
let obj1 = {};
let obj2 = { fistName: "Nguyễn Văn", lastName: "A" };
function checkEmpty(object) {
  const listObj = Object.keys(object); // trả về 1 array và check length của mảng đó
  if (listObj.length == 0) {
    return false;
  } else {
    return true;
  }
}
console.log(checkEmpty(obj1));
console.log(checkEmpty(obj2));

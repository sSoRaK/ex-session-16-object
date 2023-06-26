// Xây dựng các chức năng sau:
// a. Thêm dữ liệu sách và lưu vào mảng
// b. Hiển thị thông tin các sách
// c. Cho phép cập nhật thông tin sách
// d. Cho phép xóa sách
// e. Cho phép sắp xếp sách theo giá sách tăng dần
// f. Cho phép tìm kiếm sách theo tên sách
let arrBooks = [];
class Book {
  constructor() {
    this.inputData = function () {
      this.bookId = document.getElementById("bookId").value;
      this.bookName = document.getElementById("bookName").value;
      this.price = document.getElementById("price").value;
    };
    this.display = function () {
      console.log("Thông tin sách: ", this.bookId, this.bookName, this.price);
    };
  }
}


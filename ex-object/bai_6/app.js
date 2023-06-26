// Xây dựng đối tượng book gồm các thuộc tính và phương thức sau:
// a. bookId: mã sách
// b. bookName: tên sách
// c. price: giá sách
// d. author: Các tác giả sách
// e. bookStatus: trạng thái sách
// f. inputData: cho phép nhập thông tin sách
// g. displayData: cho phép hiển thị các thông tin sách
let book = {
  bookId: "",
  bookName: "",
  price: 0,
  author: "",
  bookStatus: "",
  inputData(id, name, price, author, status) {
    this.bookId = id;
    this.bookName = name;
    this.price = price;
    this.author = author;
    this.bookStatus = status;
  },
  displayData() {
    console.log("Mã sách:", this.bookId);
    console.log("Tên sách:", this.bookName);
    console.log("Giá sách:", this.price);
    console.log("Tác giả:", this.author);
    console.log("Tình trạng:", this.bookStatus);
  },
};

console.log(book);
book.inputData("#001", "Mèo Đi Hia", 25000, "Charles Perrault", "New");
book.displayData();
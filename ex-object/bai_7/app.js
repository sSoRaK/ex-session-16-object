let action = "create";
function Book() {
  this.inputData = function () {
    this.bookId = document.getElementById("bookId").value;
    this.bookName = document.getElementById("bookName").value;
    this.price = Number(document.getElementById("price").value);
    this.author = document.getElementById("author").value;
    this.status = document.querySelector("input[type='radio']:checked").value;
  };
  this.displayData = function () {
    document.getElementById("content").innerHTML += `
    <tr>
        <td>${this.bookId}</td>
        <td>${this.bookName}</td>
        <td>${this.price}</td>
        <td>${this.author}</td>
        <td>${this.status}</td>
        <td>
          <button onclick="editBook('${this.bookId}')">Edit</button>
          <button onclick="deleteBook('${this.bookId}')">Delete</button>
        </td>
  </tr>
    `;
  };
}
let arrBooks = [];
// duyệt qua các phần tử là Object để hiển thị lên table
function displayListBook() {
  document.getElementById("content").innerHTML = "";
  for (let i = 0; i < arrBooks.length; i++) {
    arrBooks[i].displayData();
  }
}

// tạo event cho btnSubmit
let btnSubmit = document.getElementById("btnSubmit");
btnSubmit.addEventListener("click", function (event) {
  event.preventDefault();
  if (action == "create") {
    let newBook = new Book();
    newBook.inputData();
    arrBooks.push(newBook);
    displayListBook();
    resetForm();
  } else {
    let updateBook = new Book();
    updateBook.inputData();
    // tạo 1 biến tại đó (index) là vị trí của Object Book
    // vd: tìm đc bookId là B002 có (index) i = 1 trong arrBooks
    let indexUpdate = getBookByBookId(updateBook.bookId);
    // nếu index (vị trí của object) < 0 -> không chạy vào if
    if (indexUpdate > -1) {
      // Giá trị ở arrBooks[indexUpdate] (index chứa bookId mà mình cần edit)
      // Object Book chứa trong mảng arrBooks có vị trí index = 1 (arrBooks[1]) sẽ được thay đổi giá trị bởi Object có tên là updateBook, trong đó các giá trị đã được nhập thông qua updateBook.inputData() "object.inputData()"
      arrBooks[indexUpdate] = updateBook;
    }
    // hiển thị Book()
    displayListBook();
    // reset lại form
    resetForm();
    // sau khi submit -> resetForm -> set lại flags action = "create" và bookId.readOnly= false
    action = "create";
    document.getElementById("bookId").readOnly = false;
  }
});

// format dữ liệu form -> empty
function resetForm() {
  document.getElementById("bookId").value = "";
  document.getElementById("bookName").value = "";
  document.getElementById("price").value = "";
  document.getElementById("author").value = "";
  document.getElementById("active").checked = true;
}

window.onload = displayListBook();

// edit dữ liệu khi click vào edit đưa dữ liệu lên form
// để edit, phải tìm bookId (id) của book
function editBook(bookId) {
  for (let i = 0; i < arrBooks.length; i++) {
    if (arrBooks[i].bookId == bookId) {
      document.getElementById("bookId").value = arrBooks[i].bookId;
      document.getElementById("bookName").value = arrBooks[i].bookName;
      document.getElementById("price").value = arrBooks[i].price;
      document.getElementById("author").value = arrBooks[i].author;
      if (arrBooks[i].status == "active") {
        document.getElementById("active").checked = true;
      } else {
        document.getElementById("inActive").checked = true;
      }
    }
    action = "edit";
    document.getElementById("bookId").readOnly = true;
  }
}

// tìm book theo bookId có trong arrBooks
function getBookByBookId(bookId) {
  for (let i = 0; i < arrBooks.length; i++) {
    if (arrBooks[i].bookId == bookId) {
      return i; // nếu đúng trả về vị trí index của Object trong arrBook
    }
  }
  return -1;
}

// xóa dữ liệu sách
function deleteBook(bookId) {
  // tạo biến chứa giá trị (index) i tìm được từ bookId trong hàm getBookByBookId()
  let indexDelete = getBookByBookId(arrBooks.bookId);
  let btnConfirm = confirm("Bạn có muốn xóa thông tin sách không ?");
  if (btnConfirm) {
    // array.splice(startIndex,deleteCount)  deleteCount: giá trị cần xóa, vd: bằng 2 thì xóa 2 giá trị của nó
    // array = [{Book1()},{Book2()}]
    arrBooks.splice(indexDelete, 1);
  }
  // sau khi xóa hiển thị lại List Books
  displayListBook();
}

// sắp xếp giá của sách theo thứ tự tăng dần
let btnSort = document.getElementById("btnSort");
btnSort.addEventListener("click", function () {
  // sắp xếp Object theo kiểu giá trị ( key chứa value: giá trị )
  arrBooks.sort((a, b) => a.price - b.price);
  displayListBook();
});

//  Tìm kiếm sách theo tên sách
let btnSearch = document.getElementById("btnSearch");
btnSearch.addEventListener("click", function () {
  // lấy dữ liệu trong ô search
  let searchBookName = document.getElementById("searchBookName").value;
  // tìm những sách chứa searchBookName ở trong mảng
  document.getElementById("content").innerHTML = "";
  for (let i = 0; i < arrBooks.length; i++) {
    if (arrBooks[i].bookName.includes(searchBookName)) {
      document.getElementById("content").innerHTML += `
    <tr>
        <td>${arrBooks[i].bookId}</td>
        <td>${arrBooks[i].bookName}</td>
        <td>${arrBooks[i].price}</td>
        <td>${arrBooks[i].author}</td>
        <td>${arrBooks[i].status}</td>
        <td>
        <button onclick="functionEdit('${arrBooks[i].bookId}')">Edit</button>
        <button onclick="functionDelete('${arrBooks[i].bookId}')">Delete</button>
        </td>
  </tr>
    `;
    }
  }
});

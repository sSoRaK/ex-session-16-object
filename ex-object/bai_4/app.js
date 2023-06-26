// Tạo đối tượng menu gồm các thuộc tính width, height và title.
//  Xây dựng hàm nhân 2 giá trị các thuộc tính có giá trị là number
let menu = {
  width: 1280,
  title: "This is title of menu",
  height: 720,
};

function multipleValues(object) {
  // lấy các value trong object
  let listObject = Object.values(object); // [1920, "This is title of menu", 1080]
  let result = 1;
  for (let i = 0; i < listObject.length; i++) {
    // kiểm tra từng value của mỗi key có phải là number
    if (!isNaN(listObject[i])) {
      result *= listObject[i];
    }
  }
  return result;
}
console.log(multipleValues(menu));

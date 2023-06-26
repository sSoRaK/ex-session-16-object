// 1-a. Thêm thuộc tính firstName và lastName với giá trị là “Nguyễn Văn”
// và “Bình”
let person = {};
person.firstName = "Nguyễn Văn";
person.lastName = "Bình";
console.log(person);
// 1-b. Thay đổi giá trị lastName là “Hòa”
person.lastName = "Hòa";
console.log(person.lastName);
// 1-c.Xóa thuộc tính lastName khỏi đối tượng
delete person.lastName;
console.log(person.lastName);

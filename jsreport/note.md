* Biến (Variables)
var, let, const

var là biến có phạm vi toàn cục, tái khai báo cũng có thể gán lại giá trị 

let biến cục bộ, gán lại giá trị k tái khai báo và khi khai báo chỉ trong đoạn code cần khai báo 

const biến cục bộ, không gán không khai báo lại. giá trị ko thay đổi khi thực hiện. phải khởi tạo giá trị lúc khai báo khi cho message có thể thay đổi thuộc tính message. khai báo biến, mảng, function, pattern(regexp)
+ có thể thay đổi thuộc tính của object
https://caodang.fpt.edu.vn/tin-tuc-poly/phan-biet-su-khac-nhau-giua-var-let-va-const-trong-lap-trinh-es6.html


* operator (toán tử)

<!-- số học với gán
- số học: chia lấy nguyên /; chia lấy dư %
- gán: chia lấy nguyên xong gán /=; chia lấy dư xong gán %=
- toán tử logic: 
&& và
true: 2 giá trị true
false: 2 giá trị false hoặc 1 false, 1 true
|| hoặc là
true: 2 giá trị true, hoặc 1 false 1 true
false: 2 giá trị false, ho
!(not)
trả giá trị ngược lại -->

* toán so sánh

<!-- === giống hệt nhau
!= không bằng
== ép kiểu xảy ra trong khi so sánh còn === thì không cho kiểm tra toán hạng -->
https://viettuts.vn/javascript/toan-tu-trong-javascript


- optional channing 
obj?.prop trả về prop nếu tồn tại còn ko thì undefined
obj?.[prop]  trả về [prop] nếu tồn tại còn ko thì undefined
cũng như method
-> luôn luôn trả về undefined

- nullish coalesing: toán tử logic có diều kiện, trả giá trị bên phải null hoặc undefined còn ko thì trả về trái như thường

- có cả chức năng gọi hàm
https://viblo.asia/p/optional-chaining-va-nullish-coalescing-operator-trong-javascript-V3m5WQYwZO7

* kiểu dữ liệu
number: 10,
string: 'ten';
object: {nameNumber: 'ten',...}

boolean: true or false

* Objects

objectName.propertyName or objectName["propertyName"]
x = new String();        // Declares x as a String object
y = new Number();        // Declares y as a Number object
z = new Boolean();       // Declares z as a Boolean object

* Strings
- so sánh hai object  với từ khoá new luôn trả về false khi dùng ===
- từ khoá "new": tạo ra đối tượng rỗng thừa kế prototype và khởi tạo constructor(hàm khởi tạo thường đi với this)


- methods: 
str.slice()  hàm dùng để trích xuất một số phần tử (index) trong mảng js.

str.substring() giống slice nhưng sẽ không lấy âm

str.substr() các ký tụ trong 1 chuõi bđ với vị tsi đã cho với ký tự xác định//

text.replace() thay thế nó bằng một giá trị được cấp

- search trong js:

indexOf(item,start) tìm kiếm phần tử trong mảng (dò từ đầu mảng đến cuối mảng, phần tử nào bằng với giá trị truyền vào thì sẽ được trả về.)

lastindexOf: trả về vị trị của phần tử cuối cùng được tìm thấy, trả về -1 nếu không tìm thấy.

string.startwith(): kiểm tra chuỗi có bắt đầu bằng ký tự chỉ định hay không. KQ trả về true hoặc false shorturl.at/jxJ79/

 include(): kiểm tra một mảng để xem nó có bao gồm giá trị cụ thể mà bạn đã cung cấp (tham chiếu start để ktra) shorturl.at/cBGUW

 * string nhiều dòng template (sử dụng nháy đơn)
 sử dụng multiple-line string, biến, biểu thức, hàm bên trong String mà không phải thông qua phép cộng String.

- nội suy:
 Một biểu thức có thể được nhúng trong một placeholder. syntax ${} shorturl.at/eCGYZ, shorturl.at/ehEKP


* Numbers: chuyển số thành chuỗi ép kiểu num.toString()

num.toExponential() chuyển đổi giá trị thành số mũ với e+2 tương đương với 10^2 
shorturl.at/jnzE8

num.toFixed() xác định bao nhiêu số đằng sau dấu thập phân 
shorturl.at/iAEL8

num.toPercision() độ chính xác là một giá trị ko nguyên, làm tròn thành số nguyên gần nhất.

- Number() có chức năng chuyển đổi một đối tượng thành một số. 

parseInt(): phân tích một chuỗi và trả về một số nguyên nếu có
parseFloat(): phân tích một chuỗi được cung cấp và trả về một giá trị số


* array (mảng) array là đối tượng (obj)
convert mảng ra chuỗi arr.toString()

arr.length trả độ dài của mảng


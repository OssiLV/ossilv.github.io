---
title: "C cheatsheet"
desc: "__"
author: ossilv # references `src/contents/authors/ossilv.json`
relatedPosts: []
prevPost: none
nextPost: none
pubDate: 2025-03-30
updatedDate: 2025-03-30
tags: ["programing language", "c", "cheatsheet"]
categories:
    - name: "Programing Language"
      subcategories: ["C", "CheatSheet"]
---

# Kiểu Dữ Liệu

## Kiểu Nguyên Thuỷ (Primary Data Types)

Đây là những kiểu dữ liệu cơ bản được tích hợp sẵn trong C.

| **Kiểu dữ liệu**     | **Kích thước (byte)** | **Giá trị có thể lưu**    | **Giới hạn có thể lưu**                                | **Đặc tả (Format Specifier)** |
| -------------------- | --------------------- | ------------------------- | ------------------------------------------------------ | ----------------------------- |
| `short`              | 2 byte                | Số nguyên                 | -32,768 → 32,767                                       | `%hi`                         |
| `unsigned short`     | 2 byte                | Số nguyên không âm        | 0 → 65,535                                             | `%hu`                         |
| `int`                | 4 byte                | Số nguyên                 | -2,147,483,648 → 2,147,483,647                         | `%d`                          |
| `unsigned int`       | 4 byte                | Số nguyên không âm        | 0 → 4,294,967,295                                      | `%u`                          |
| `long long`          | 8 byte                | Số nguyên lớn             | -9,223,372,036,854,775,808 → 9,223,372,036,854,775,807 | `%lld`                        |
| `unsigned long long` | 8 byte                | Số nguyên không âm lớn    | 0 → 18,446,744,073,709,551,615                         | `%llu`                        |
| `char`               | 1 byte                | Số nguyên, Ký tự          | -128 → 127                                             | `%c`                          |
| `unsigned char`      | 1 byte                | Số nguyên không âm, Ký tự | 0 → 255                                                | `%c`                          |
| `float`              | 4 byte                | Số thực                   | ~3.4E-38 → ~3.4E+38                                    | `%f`                          |
| `double`             | 8 byte                | Số thực chính xác cao     | ~1.7E-308 → ~1.7E+308                                  | `%lf`                         |

🔥 **Lưu ý:**

-   `signed` mặc định được áp dụng cho `int`, `char`, `long`, v.v.
-   `sizeof(type)` có thể thay đổi tùy vào hệ thống hoặc trình biên dịch.
-   `%f` hiển thị số thực, `%lf` dành cho `double`.
-   Khi sử dụng `printf()` và `scanf()`, hãy chọn đúng format specifier để tránh lỗi! 🚀

**In kích thước của các kiểu dữ liệu**

```c
#include <stdio.h>

int main() {
    printf("Kich thuoc cua cac kieu du lieu trong C (byte):\n");
    printf("---------------------------------------------\n");
    printf("short: %zu byte\n", sizeof(short));
    printf("unsigned short: %zu byte\n", sizeof(unsigned short));
    printf("int: %zu byte\n", sizeof(int));
    printf("unsigned int: %zu byte\n", sizeof(unsigned int));
    printf("long long: %zu byte\n", sizeof(long long));
    printf("unsigned long long: %zu byte\n", sizeof(unsigned long long));
    printf("char: %zu byte\n", sizeof(char));
    printf("unsigned char: %zu byte\n", sizeof(unsigned char));
    printf("float: %zu byte\n", sizeof(float));
    printf("double: %zu byte\n", sizeof(double));

    return 0;
}
```

**In tất cả các kiểu dữ liệu cơ bản cùng với format specifier tương ứng kèm giá trị lớn nhất của từng kiểu dữ liệu**

```c
#include <stdio.h>
#include <limits.h>
#include <float.h>

int main() {
    // Số nguyên
    short s = SHRT_MAX;
    unsigned short us = USHRT_MAX;
    int i = INT_MAX;
    unsigned int ui = UINT_MAX;
    long long ll = LLONG_MAX;
    unsigned long long ull = ULLONG_MAX;

    // Ký tự
    char c = 'A';
    unsigned char uc = 255;

    // Số thực
    float f = FLT_MAX;
    double d = DBL_MAX;

    printf("Kieu du lieu | Gia tri | Format Specifier\n");
    printf("-----------------------------------------\n");

    printf("short: %hi | %%hi\n", s);
    printf("unsigned short: %hu | %%hu\n", us);
    printf("int: %d | %%d\n", i);
    printf("unsigned int: %u | %%u\n", ui);
    printf("long long: %lld | %%lld\n", ll);
    printf("unsigned long long: %llu | %%llu\n", ull);

    printf("char: %c | %%c\n", c);
    printf("unsigned char: %c (%u) | %%c / %%u\n", uc, uc);

    printf("float: %f | %%f\n", f);
    printf("double: %lf | %%lf\n", d);

    return 0;
}
```

---

# Comments

## Comment 1 Dòng

```c
// Comment 1 dòng code
```

## Comment Nhiều Dòng

```c
/* comment
nhiều dòng
code
*/
```

---

# Escape Sequences Trong C

Escape sequences là các ký tự đặc biệt trong C, được bắt đầu bằng dấu `\` và có ý nghĩa riêng biệt.

## Danh Sách Các Escape Sequences Phổ Biến

| Escape Sequence | Ý Nghĩa              | Mô Tả                                   |
| --------------- | -------------------- | --------------------------------------- |
| `\n`            | Newline (Xuống dòng) | Di chuyển con trỏ xuống dòng mới        |
| `\t`            | Tab ngang            | Thêm khoảng cách bằng một tab           |
| `\r`            | Carriage return      | Đưa con trỏ về đầu dòng (có thể ghi đè) |
| `\b`            | Backspace            | Xóa một ký tự trước đó                  |
| `\f`            | Form feed            | Chuyển sang trang mới trong in ấn       |
| `\v`            | Vertical tab         | Tab dọc (ít sử dụng)                    |
| `\\`            | Backslash (`\`)      | In dấu `\` trong chuỗi                  |
| `\'`            | Single quote (`'`)   | In dấu nháy đơn                         |
| `\"`            | Double quote (`"`)   | In dấu nháy kép                         |
| `\?`            | Question mark (`?`)  | Tránh trùng với `??` (trigraph)         |
| `\0`            | Null character       | Ký tự NULL (`'\0'`) kết thúc chuỗi      |
| `\a`            | Alert (Beep)         | Phát ra tiếng bíp nếu terminal hỗ trợ   |

## Escape Sequences Cho ASCII & Unicode

| Escape Sequence | Ý Nghĩa                                           |
| --------------- | ------------------------------------------------- |
| `\xhh`          | Giá trị ASCII dạng **hex** (VD: `\x41` = `'A'`)   |
| `\ooo`          | Giá trị ASCII dạng **octal** (VD: `\101` = `'A'`) |
| `\uXXXX`        | Ký tự Unicode 16-bit (VD: `\u03A9` = `Ω`)         |
| `\UXXXXXXXX`    | Ký tự Unicode 32-bit (VD: `\U0001F600` = 😀)      |

---

# Cấu Trúc Điều Kiện (Conditional Instructions)

Trong C, các câu lệnh điều kiện giúp kiểm tra các điều kiện logic và thực hiện hành động tương ứng.

## Câu Lệnh `if`

```c
if (condition) {
    // Thực thi nếu điều kiện đúng (true)
}
```

## Câu Lệnh `if-else`

```c
if (condition) {
    // Thực thi nếu condition đúng (true)
} else {
    // Thực thi nếu condition sai (false)
}
```

## Câu Lệnh `if-else if-else`

```c
if (condition1) {
    // Thực thi nếu condition1 đúng
} else if (condition2) {
    // Thực thi nếu condition2 đúng
} else {
    // Thực thi nếu không có điều kiện nào đúng
}
```

## Câu Lệnh `switch-case`

```c
switch (variable) {
    case value1:
        // Thực thi nếu variable == value1
        break;
    case value2:
        // Thực thi nếu variable == value2
        break;
    default:
        // Thực thi nếu không có case nào khớp
}
```

📌 Lưu ý:

-   `break` ngăn chặn việc thực hiện tiếp các case khác. [Tìm hiểu thêm cách dùng `break` trong vòng lặp](#lệnh-break-dừng-vòng-lặp)
-   `default` chạy khi không có case nào khớp.

## Toán Tử Ba Ngôi `(? :)`

```c
condition ? expression1 : expression2;
```

## Câu Lệnh `goto` (Tránh Sử Dụng)

```c
goto label;
...
label:
    // Code ở đây sẽ được thực thi
```

📌 Lưu ý:

-   `goto` có thể làm code khó đọc và dễ gây lỗi, không nên lạm dụng.

---

# Câu Lệnh Lặp (Iterative Statements)

Cung cấp các vòng lặp giúp thực hiện một đoạn mã **lặp đi lặp lại** khi điều kiện vẫn đúng.

## Vòng Lặp `for`

```c
for (khởi_tạo; điều_kiện; cập_nhật) {
    // Code được thực thi khi điều kiện đúng
}
```

## Vòng Lặp `while`

```c
while (điều_kiện) {
    // Code được thực thi khi điều kiện đúng
}
```

📌 Lưu ý:

-   Điều kiện được kiểm tra **trước** mỗi lần lặp.
-   Nếu điều kiện **sai ngay từ đầu**, vòng lặp sẽ **không chạy lần nào**.

## Vòng Lặp `do-while`

```c
do {
    // Code luôn được thực thi ít nhất 1 lần
} while (điều_kiện);
```

📌 Lưu ý:

-   Chạy ít nhất một lần, ngay cả khi điều kiện sai ngay từ đầu.

## Lệnh `break` (Dừng Vòng Lặp)

```c
#include <stdio.h>

int main() {
    for (int i = 0; i < 10; i++) {
        if (i == 5) {
            break; // Dừng vòng lặp khi i == 5
        }
        printf("i = %d\n", i);
    }
    return 0;
}
```

📌 Output:

```c
i = 0
i = 1
i = 2
i = 3
i = 4
```

📌 Lưu ý:

-   `break` dừng hoàn toàn vòng lặp ngay khi gặp điều kiện. [Tìm hiểu thêm dùng `break` để thoát khỏi vòng lặp vô hạn.](#lặp-vô-hạn)

## Lệnh `continue` (Bỏ Qua Lần Lặp Hiện Tại)

```c
#include <stdio.h>

int main() {
    for (int i = 0; i < 5; i++) {
        if (i == 2) {
            continue; // Bỏ qua khi i == 2
        }
        printf("i = %d\n", i);
    }
    return 0;
}

```

📌 Output:

```c
i = 0
i = 1
i = 3
i = 4
```

📌 Lưu ý:

-   `continue` bỏ qua phần còn lại của vòng lặp, nhảy thẳng đến lần lặp tiếp theo.

# Hàm Và Đệ Quy (Funtion & Recursion)

## Hàm (Functions)

Hàm là một nhóm các câu lệnh thực hiện một công việc cụ thể.

### Cấu Trúc Một Hàm

```c
return_type function_name(parameter_list) {
    // Code xử lý
    return value;
}
```

### Hàm Không Trả Về Giá Trị (`void`)

```c
#include <stdio.h>

// Hàm in một thông báo
void sayHello() {
    printf("Xin chào!\n");
}

int main() {
    sayHello(); // Gọi hàm
    return 0;
}

```

📌 Output:

```c
Xin chào!
```

### Hàm Không Có Tham Số & Trả Về Giá Trị

```c
#include <stdio.h>

// Hàm trả về số nguyên cố định
int getNumber() {
    return 10;
}

int main() {
    printf("Số: %d\n", getNumber());
    return 0;
}
```

📌 Output:

```c
Số: 10
```

### Hàm Có Tham Số & Trả Về Giá Trị

```c
#include <stdio.h>

// Hàm nhân hai số
float multiply(float x, float y) {
    return x * y;
}

int main() {
    float result = multiply(3.5, 2.0);
    printf("Kết quả: %.2f\n", result);
    return 0;
}

```

📌 Output:

```c
Kết quả: 7.00
```

### Hàm Gọi Bằng Tham Chiếu (Call by Reference)

Khi truyền bằng con trỏ, giá trị thực sự bị thay đổi.

```c
#include <stdio.h>

void changeValue(int *x) {
    *x = 100; // Thay đổi giá trị thật
}

int main() {
    int a = 50;
    changeValue(&a);
    printf("Giá trị sau khi gọi hàm: %d\n", a); // Giá trị thay đổi
    return 0;
}
```

📌 Output:

```c
Giá trị sau khi gọi hàm: 100
```

## Đệ Quy (Recursion)

Hàm gọi chính nó để giải quyết bài toán lặp lại.

### Ví dụ: Tính Giai Thừa

```c
#include <stdio.h>

int factorial(int n) {
    if (n == 0) return 1; // Điều kiện dừng
    return n * factorial(n - 1);
}

int main() {
    int num = 5;
    printf("Giai thừa của %d là %d\n", num, factorial(num));
    return 0;
}

```

📌 Output:

```c
Giai thừa của 5 là 120

```

### Ví dụ: Dãy Fibonacci

```c
#include <stdio.h>

int fibonacci(int n) {
    if (n <= 1) return n; // Điều kiện dừng
    return fibonacci(n - 1) + fibonacci(n - 2);
}

int main() {
    int num = 6;
    printf("Fibonacci(%d) = %d\n", num, fibonacci(num));
    return 0;
}
```

📌 Output:

```c
Fibonacci(6) = 8
```

## Tổng Hợp So Sánh

| Loại Hàm                     | Trả Về Giá Trị? | Nhận Tham Số? | Ghi Chú                                     |
| ---------------------------- | --------------- | ------------- | ------------------------------------------- |
| `void function()`            | ❌ Không        | ❌ Không      | Hàm không trả về giá trị                    |
| `void function(int x)`       | ❌ Không        | ✅ Có         | Hàm nhận tham số nhưng không trả về         |
| `int function()`             | ✅ Có           | ❌ Không      | Hàm trả về giá trị nhưng không nhận tham số |
| `int function(int x, int y)` | ✅ Có           | ✅ Có         | Hàm có tham số và trả về giá trị            |
| **Đệ Quy (Recursion)**       | ✅ Có           | ✅ Có         | Hàm tự gọi chính nó                         |

---

# Mảng (Array)

## Khai Báo & Khởi Tạo Mảng

### Mảng Một Chiều

```c
int arr[5]; // Khai báo mảng 5 phần tử (chưa khởi tạo)
int arr[5] = {1, 2, 3, 4, 5}; // Khởi tạo đầy đủ
int arr[] = {10, 20, 30}; // Kích thước tự động là 3
```

### Mảng Hai Chiều (Ma trận)

```c
int matrix[2][3] = { {1, 2, 3}, {4, 5, 6} };
```

## Truy Cập & Duyệt Mảng

```c
#include <stdio.h>

int main() {
    int arr[] = {10, 20, 30, 40, 50};
    int size = sizeof(arr) / sizeof(arr[0]); // Tính số phần tử

    for (int i = 0; i < size; i++) {
        printf("%d ", arr[i]);
    }
    return 0;
}
```

📌 Output:

```c
10 20 30 40 50
```

## Mảng và Con Trỏ

```c
#include <stdio.h>

int main() {
    int arr[] = {10, 20, 30};
    printf("%d\n", *arr);   // In giá trị đầu tiên (10)
    printf("%d\n", *(arr+1)); // In giá trị thứ hai (20)
    return 0;
}
```

📌 Output:

```c
10
20
```

## Truyền Mảng vào Hàm

```c
#include <stdio.h>

void printArray(int arr[], int size) {
    for (int i = 0; i < size; i++) {
        printf("%d ", arr[i]);
    }
    printf("\n");
}

int main() {
    int nums[] = {1, 2, 3, 4, 5};
    int size = sizeof(nums) / sizeof(nums[0]);
    printArray(nums, size);
    return 0;
}
```

📌 Output:

```c
1 2 3 4 5
```

## Mảng Hai Chiều & Duyệt Mảng

```c
#include <stdio.h>

int main() {
    int matrix[2][3] = { {1, 2, 3}, {4, 5, 6} };

    for (int i = 0; i < 2; i++) {
        for (int j = 0; j < 3; j++) {
            printf("%d ", matrix[i][j]);
        }
        printf("\n");
    }
    return 0;
}
```

📌 Output:

```c
1 2 3
4 5 6
```

## So Sánh Tổng Hợp

| Loại Mảng           | Khai Báo          | Truy Cập     | Truyền vào Hàm            | Ghi Chú                            |
| ------------------- | ----------------- | ------------ | ------------------------- | ---------------------------------- |
| **Mảng Một Chiều**  | `int arr[5];`     | `arr[i]`     | `void func(int arr[])`    | Dùng chỉ số để truy cập            |
| **Mảng Hai Chiều**  | `int arr[2][3];`  | `arr[i][j]`  | `void func(int arr[][N])` | Cần biết số cột khi truyền vào hàm |
| **Mảng và Con Trỏ** | `int *ptr = arr;` | `*(arr + i)` | `void func(int *arr)`     | Con trỏ có thể duyệt mảng          |

---

# Chuỗi (Strings)

## Khai Báo & Khởi Tạo Chuỗi

```c
char str1[] = "Hello";  // Chuỗi có thể thay đổi
char str2[6] = "World"; // Kích thước cố định (5 ký tự + 1 ký tự null '\0')
char *str3 = "C Language"; // Con trỏ chuỗi (không thể thay đổi nội dung)
```

## Nhập & Xuất Chuỗi

### Dùng `printf` & `scanf`

```c
#include <stdio.h>

int main() {
    char name[20];
    printf("Nhập tên: ");
    scanf("%s", name); // Không nhập được chuỗi có dấu cách
    printf("Chào, %s!\n", name);
    return 0;
}
```

📌 Lưu ý: `scanf("%s", name);` không nhập được chuỗi có dấu cách.

### Dùng `gets` & `fgets`

```c
#include <stdio.h>

int main() {
    char sentence[50];
    printf("Nhập câu: ");
    fgets(sentence, sizeof(sentence), stdin); // Nhập cả dấu cách
    printf("Bạn đã nhập: %s", sentence);
    return 0;
}
```

📌 Lưu ý:

-   `gets()` không an toàn, nên dùng `fgets()`.
-   `fgets()` giữ lại ký tự xuống dòng `\n`.

---

# Struct

## Khai Báo & Khởi Tạo & Truy Cập

### Khai Báo

```c
struct Person {
    char name[50];
    int age;
    float height;
};
```

### Khởi Tạo Biến `struct`

```c
struct Person p1 = {"Alice", 25, 1.65};  // Gán giá trị trực tiếp
struct Person p2;  // Khai báo nhưng chưa gán giá trị
p2.age = 30;       // Gán từng thành phần
```

### Truy Cập `struct`

```c
#include <stdio.h>

struct Person {
    char name[50];
    int age;
    float height;
};

int main() {
    struct Person p1 = {"Alice", 25, 1.65};
    printf("Tên: %s, Tuổi: %d, Chiều cao: %.2f m\n", p1.name, p1.age, p1.height);
    return 0;
}
```

📌 Output:

```c
Tên: Alice, Tuổi: 25, Chiều cao: 1.65 m
```

## `struct` Và Con Trỏ

```c
#include <stdio.h>

struct Person {
    char name[50];
    int age;
};

int main() {
    struct Person p1 = {"Bob", 28};
    struct Person *ptr = &p1;

    // Truy cập thành viên qua con trỏ
    printf("Tên: %s, Tuổi: %d\n", ptr->name, ptr->age);
    return 0;
}
```

📌 Output:

```c
Tên: Bob, Tuổi: 28
```

📌 Lưu ý:

-   Dùng `p1.name` nếu dùng biến thông thường.
-   Dùng `ptr->name` nếu dùng con trỏ đến `struct`.

## `typedef` Và `struct`

```c
typedef struct {
    char model[50];
    int year;
} Car;

int main() {
    Car car1 = {"Toyota", 2022};
    printf("Mẫu xe: %s, Năm: %d\n", car1.model, car1.year);
    return 0;
}
```

📌 Ghi chú: `typedef` giúp rút gọn, không cần viết `struct`.

## Mảng `struct`

```c
#include <stdio.h>

struct Student {
    char name[50];
    int id;
};

int main() {
    struct Student students[2] = {{"Alice", 101}, {"Bob", 102}};

    for (int i = 0; i < 2; i++) {
        printf("SV: %s, ID: %d\n", students[i].name, students[i].id);
    }
    return 0;
}
```

📌 Output:

```c
SV: Alice, ID: 101
SV: Bob, ID: 102
```

## `struct` Lồng Nhau

```c
#include <stdio.h>

struct Date {
    int day, month, year;
};

struct Student {
    char name[50];
    struct Date dob;  // Ngày sinh là một `struct`
};

int main() {
    struct Student s1 = {"Alice", {15, 8, 2000}};
    printf("SV: %s, Ngày sinh: %d/%d/%d\n", s1.name, s1.dob.day, s1.dob.month, s1.dob.year);
    return 0;
}
```

📌 Output:

```c
SV: Alice, Ngày sinh: 15/8/2000
```

---

# Tương Tác Với File Trong C

## Các Chế Độ Mở File

| Chế Độ  | Mô Tả                                                                                                               |
| ------- | ------------------------------------------------------------------------------------------------------------------- |
| `"r"`   | Mở file để đọc. Nếu mở thành công, con trỏ file trỏ đến ký tự đầu tiên. Nếu không tồn tại, `fopen()` trả về `NULL`. |
| `"rb"`  | Mở file để đọc ở chế độ nhị phân. Nếu file không tồn tại, `fopen()` trả về `NULL`.                                  |
| `"w"`   | Mở file để ghi. Nếu file tồn tại, nội dung sẽ bị ghi đè. Nếu không tồn tại, file mới sẽ được tạo.                   |
| `"wb"`  | Mở file để ghi ở chế độ nhị phân. Nếu file tồn tại, nội dung bị ghi đè. Nếu không tồn tại, file mới được tạo.       |
| `"a"`   | Mở file để ghi tiếp (append). Nếu file tồn tại, con trỏ file trỏ đến cuối. Nếu không tồn tại, file mới được tạo.    |
| `"ab"`  | Mở file để ghi tiếp ở chế độ nhị phân. Nếu file không tồn tại, sẽ tạo file mới.                                     |
| `"r+"`  | Mở file để đọc và ghi. File phải tồn tại, nếu không `fopen()` trả về `NULL`.                                        |
| `"rb+"` | Mở file để đọc và ghi ở chế độ nhị phân. File phải tồn tại, nếu không `fopen()` trả về `NULL`.                      |
| `"w+"`  | Mở file để đọc và ghi. Nếu file tồn tại, nội dung bị ghi đè. Nếu không tồn tại, tạo file mới.                       |
| `"wb+"` | Mở file để đọc và ghi ở chế độ nhị phân. Nếu file tồn tại, nội dung bị ghi đè. Nếu không tồn tại, tạo file mới.     |
| `"a+"`  | Mở file để đọc và ghi, nhưng nội dung mới sẽ thêm vào cuối file. Nếu file không tồn tại, tạo file mới.              |
| `"ab+"` | Mở file để đọc và ghi tiếp ở chế độ nhị phân. Nếu file không tồn tại, tạo file mới.                                 |

## Mở & Đóng File

```c
#include <stdio.h>

int main() {
    FILE *fp = fopen("data.txt", "r");  // Mở file để đọc
    if (fp == NULL) {
        printf("Không thể mở file!\n");
        return 1;
    }
    fclose(fp);  // Đóng file
    return 0;
}
```

📌 Lưu ý: Luôn kiểm tra `NULL` khi mở file và đóng file với `fclose(fp);`.

## Danh Sách Hàm Đọc File

| Hàm        | Mô Tả                                                        |
| ---------- | ------------------------------------------------------------ |
| `fscanf()` | Đọc dữ liệu từ file theo định dạng và danh sách đối số biến. |
| `fgets()`  | Đọc một dòng văn bản từ file.                                |
| `fgetc()`  | Đọc một ký tự từ file.                                       |
| `fgetw()`  | Đọc một số nguyên từ file.                                   |
| `fread()`  | Đọc số byte dữ liệu từ file nhị phân theo chỉ định.          |

## Danh Sách Hàm Ghi File

| Hàm         | Mô Tả                                                           |
| ----------- | --------------------------------------------------------------- |
| `fprintf()` | Tương tự `printf()`, ghi dữ liệu có định dạng vào file.         |
| `fputs()`   | Ghi một dòng văn bản vào file, thường có ký tự xuống dòng `\n`. |
| `fputc()`   | Ghi một ký tự vào file.                                         |
| `fputw()`   | Ghi một số nguyên vào file.                                     |
| `fwrite()`  | Ghi một lượng byte dữ liệu vào file nhị phân theo chỉ định.     |

## `fseek()` Trong C

```c
int fseek(FILE *stream, long offset, int position);
```

-   `stream`: Con trỏ file.
-   `offset`: Số byte cần di chuyển con trỏ file.
-   `position`: Vị trí bắt đầu di chuyển con trỏ file, có thể là:
    -   `SEEK_SET` - Bắt đầu từ đầu file.
    -   `SEEK_CUR` - Tính từ vị trí hiện tại.
    -   `SEEK_END` - Tính từ cuối file.

📌 Giá trị trả về:

-   `0` nếu thành công.
-   `-1` nếu có lỗi.

Ví dụ

```c
#include <stdio.h>

int main() {
    FILE *fp = fopen("example.txt", "r");
    if (fp == NULL) {
        printf("Không thể mở file!\n");
        return 1;
    }

    fseek(fp, 0, SEEK_END);  // Nhảy đến cuối file
    long size = ftell(fp);   // Lấy vị trí hiện tại (chính là kích thước file)
    printf("Kích thước file: %ld bytes\n", size);

    fclose(fp);
    return 0;
}
```

📌 Chú ý: `ftell(fp)` lấy vị trí con trỏ file.

## Danh Sách Hàm File Handling Khác

| Hàm         | Mô Tả                                       |
| ----------- | ------------------------------------------- |
| `fopen()`   | Tạo hoặc mở một file.                       |
| `fclose()`  | Đóng file.                                  |
| `fgets()`   | Đọc một dòng từ file.                       |
| `fprintf()` | Ghi dữ liệu có định dạng vào file.          |
| `fscanf()`  | Đọc dữ liệu có định dạng từ file.           |
| `getc()`    | Đọc một ký tự từ file.                      |
| `putc()`    | Ghi một ký tự vào file.                     |
| `fseek()`   | Di chuyển con trỏ file đến vị trí xác định. |
| `ftell()`   | Lấy vị trí hiện tại của con trỏ file.       |
| `rewind()`  | Đưa con trỏ file về đầu file.               |
| `putw()`    | Ghi một số nguyên vào file.                 |
| `getw()`    | Đọc một số nguyên từ file.                  |

---

# Cấp Phát Bộ Nhớ Động (Dynamic Memory Allocation)

**Cấp phát bộ nhớ động** giúp cấp phát bộ nhớ trong **Heap** thay vì Stack, cho phép quản lý bộ nhớ linh hoạt hơn.

## Danh Sách Hàm

| Hàm         | Mô Tả                                                                   |
| ----------- | ----------------------------------------------------------------------- |
| `malloc()`  | Cấp phát một khối bộ nhớ với kích thước cụ thể. Không khởi tạo giá trị. |
| `calloc()`  | Cấp phát bộ nhớ với nhiều phần tử và tự động khởi tạo giá trị về `0`.   |
| `realloc()` | Thay đổi kích thước bộ nhớ đã cấp phát trước đó.                        |
| `free()`    | Giải phóng bộ nhớ đã cấp phát để tránh rò rỉ bộ nhớ (Memory Leak).      |

## Ví Dụ Minh Họa

### Sử Dụng `malloc()`

```c
#include <stdio.h>
#include <stdlib.h>

int main() {
    int *ptr;

    // Cấp phát bộ nhớ động cho 5 số nguyên
    ptr = (int *)malloc(5 * sizeof(int));

    if (ptr == NULL) {
        printf("Không đủ bộ nhớ!\n");
        return 1;
    }

    // Gán giá trị
    for (int i = 0; i < 5; i++) {
        ptr[i] = i + 1;
    }

    // In giá trị
    for (int i = 0; i < 5; i++) {
        printf("%d ", ptr[i]);
    }

    free(ptr); // Giải phóng bộ nhớ
    return 0;
}
```

📌 Chú ý: Nếu không giải phóng bộ nhớ bằng `free()`, có thể gây rò rỉ bộ nhớ **(Memory Leak)**.

### Sử Dụng `calloc()`

```c
#include <stdio.h>
#include <stdlib.h>

int main() {
    int *ptr;

    // Cấp phát bộ nhớ cho 5 số nguyên và khởi tạo về 0
    ptr = (int *)calloc(5, sizeof(int));

    if (ptr == NULL) {
        printf("Không đủ bộ nhớ!\n");
        return 1;
    }

    // In giá trị đã được khởi tạo về 0
    for (int i = 0; i < 5; i++) {
        printf("%d ", ptr[i]);  // Output: 0 0 0 0 0
    }

    free(ptr);
    return 0;
}
```

📌 Chú ý: `calloc()` tương tự `malloc()`, nhưng tất cả giá trị ban đầu là `0`.

### Sử Dụng `realloc()`

```c
#include <stdio.h>
#include <stdlib.h>

int main() {
    int *ptr;

    // Cấp phát bộ nhớ động cho 3 số nguyên
    ptr = (int *)malloc(3 * sizeof(int));
    if (ptr == NULL) {
        printf("Không đủ bộ nhớ!\n");
        return 1;
    }

    for (int i = 0; i < 3; i++) {
        ptr[i] = i + 1;
    }

    // Mở rộng bộ nhớ lên 5 số nguyên
    ptr = (int *)realloc(ptr, 5 * sizeof(int));

    if (ptr == NULL) {
        printf("Không đủ bộ nhớ!\n");
        return 1;
    }

    ptr[3] = 4;
    ptr[4] = 5;

    for (int i = 0; i < 5; i++) {
        printf("%d ", ptr[i]);
    }

    free(ptr);
    return 0;
}
```

📌 Chú ý: `realloc()` giúp mở rộng hoặc thu nhỏ kích thước bộ nhớ đã cấp phát trước đó.

### Giải Phóng Bộ Nhớ với `free()`

```c
#include <stdio.h>
#include <stdlib.h>

int main() {
    int *ptr = (int *)malloc(10 * sizeof(int));

    if (ptr == NULL) {
        printf("Không đủ bộ nhớ!\n");
        return 1;
    }

    // Gán giá trị cho mảng
    for (int i = 0; i < 10; i++) {
        ptr[i] = i * 2;
    }

    free(ptr);  // Giải phóng bộ nhớ
    ptr = NULL; // Tránh lỗi truy cập vùng nhớ không hợp lệ

    return 0;
}
```

📌 Chú ý: Luôn gán `NULL` cho con trỏ sau khi `free()` để tránh lỗi truy cập bộ nhớ không hợp lệ.

## So Sánh `malloc()` `calloc()` `realloc()`

| Thuộc tính            | `malloc()`                       | `calloc()`                                    | `realloc()`                            |
| --------------------- | -------------------------------- | --------------------------------------------- | -------------------------------------- |
| **Khởi tạo giá trị?** | ❌ Không                         | ✅ Có (tất cả về `0`)                         | ❌ Không                               |
| **Cấp phát bộ nhớ?**  | ✅ Có                            | ✅ Có                                         | ✅ Có (thay đổi kích thước)            |
| **Trả về giá trị?**   | Con trỏ đến bộ nhớ được cấp phát | Con trỏ đến bộ nhớ được cấp phát              | Con trỏ đến bộ nhớ đã được thay đổi    |
| **Kích thước?**       | Tự xác định số byte              | Xác định số phần tử và kích thước mỗi phần tử | Thay đổi kích thước bộ nhớ đã cấp phát |
| **Tốc độ?**           | ⚡ Nhanh hơn `calloc()`          | 🐢 Chậm hơn `malloc()` do khởi tạo 0          | ⚡ Tùy vào tình huống sử dụng          |

---

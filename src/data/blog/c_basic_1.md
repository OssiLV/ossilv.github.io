---
title: "Ngôn ngữ C #1 (cơ bản)"
desc: "Ngôn ngữ lập trình C cơ bản"
author: ossilv # references `src/data/authors/ossilv.json`
relatedPosts: []
prevPost: none
nextPost: c_basic_2
pubDate: 2025-03-29
updatedDate: 2025-03-29
tags: ["programing language", "c"]
categories:
    - name: "Programing Language"
      subcategories: ["C"]
---

# Giới thiệu

## C là gì

C là ngôn ngữ lập trình đa năng được tạo ra bởi Dennis Ritchie tại Phòng thí nghiệm Bell năm 1972.

## Sự khác biệt giữa C và C++

-   C ++ được phát triển như một phần mở rộng của C và cả hai ngôn ngữ có cùng một cú pháp
-   Sự khác biệt chính giữa C và C ++ là C ++ hỗ trợ các lớp và đối tượng, trong khi C thì không.

# Cú pháp (Syntax)

```c
#include <stdio.h>

int main() {
    printf("%c\n", a);
    printf("%c\n", b);
    printf("Hello, World!\n");
    return 0;
}
```

## Giải thích

**Dòng 1:** #include <stdio.h> là thư viện tệp tiêu đề cho phép làm việc với các chức năng đầu vào và đầu ra, chẳng hạn như printf () (được sử dụng trong dòng 4). Các tập tin tiêu đề Thêm chức năng cho các chương trình C.

**Dòng 2:** Một dòng trống. C bỏ qua không gian trắng. Nó làm cho mã dễ đọc hơn.

**Dòng 3:** Một điều khác luôn xuất hiện trong chương trình C là Main (). Điều này được gọi là một **function**. Bất kỳ mã nào bên trong dấu ngoặc của nó {} sẽ được thực thi.

> Lưu ý rằng: Mỗi câu lệnh C kết thúc bằng dấu chấm phẩy;
>
> Lưu ý: Cơ thể của int main () cũng có thể được viết là:
>
> ```c
>   int main () {printf ("hello world!"); return 0;}
> ```
>
> Hãy nhớ rằng: Trình biên dịch bỏ qua không gian trắng.

**Dòng 5:** return 0 kết thúc main() function.

**Dòng 6:** Đừng quên thêm ngoặc đóng **}** để thực sự kết thúc main() funtion.

## C Statements (câu lệnh)

Một chương trình máy tính là danh sách các **hướng dẫn (instructions)** sẽ được **thực thi (executed)** bởi máy tính.

Trong ngôn ngữ lập trình, các **instructions** này được gọi là **câu lệnh (statements)**.

Câu lệnh sau **hướng dẫn** trình biên dịch (compiler) để in văn bản "Hello World" lên màn hình:

```c
printf("Hello World!");
```

Luôn kết thúc câu lệnh bằng dấu **;**

## Nhiều câu lệnh

```c
printf("Hello World!");
printf("Have a good day!");
return 0;
```

### Giải thích

Từ ví dụ trên ta có 3 câu lệnh sau:

> Mỗi câu lệnh kết thúc bằng dấu **;**

1. printf("Hello World!");
2. printf("Have a good day!");
3. return 0;

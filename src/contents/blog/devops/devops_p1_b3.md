---
title: "Thử nghiệm liên tục"
desc: "__"
author: ossilv # references `src/contents/authors/ossilv.json`
relatedPosts: []
prevPost: devops_p1_b2
nextPost: devops_p1_b4
pubDate: 2025-06-24
updatedDate: 2025-06-24
tags: ["DevOps"]
categories:
    - name: "Software Development Methodologies"
      subcategories: ["DevOps"]
---

---

[Trở về DevOps Ultimate](/blog/devops)

---

# Thử nghiệm liên tục (Continuous Testing)

## 1. Giới thiệu

Trong bài học này, chúng ta sẽ tìm hiểu về **thử nghiệm liên tục** – giai đoạn thứ hai trong vòng đời sản phẩm theo phương pháp DevOps. Ở bài trước, chúng ta đã học về **phát triển liên tục (Continuous Development)**. Tiếp nối quy trình đó, thử nghiệm liên tục đóng vai trò quan trọng nhằm đảm bảo chất lượng phần mềm trong quá trình phát triển nhanh và liên tục.

## 2. Vị trí của thử nghiệm liên tục trong DevOps

- Trong vòng đời sản phẩm DevOps, **thử nghiệm liên tục** bao gồm hai giai đoạn chính:
  - **Build sản phẩm**
  - **Kiểm thử sản phẩm**

Khi lập trình viên hoàn tất việc lập trình và đẩy code lên kho lưu trữ (repository), có thể là một nhánh tính năng hoặc nhánh tích hợp như `master` hoặc `main`. Từ nhánh này, hệ thống sẽ **build ứng dụng** và thực hiện **kiểm thử tự động** để xác minh chất lượng build.

## 3. Quy trình thử nghiệm liên tục

Giả sử bạn làm trong một dự án với khoảng 40–50 lập trình viên. Mỗi ngày, các lập trình viên đẩy mã nguồn lên repository trung tâm. Tùy vào chính sách tổ chức, hệ thống có thể tự động:
- Build sản phẩm mỗi ngày, hoặc
- Build sau mỗi khoảng thời gian (6h, 8h,...)

Ví dụ: nếu sản phẩm được build mỗi ngày, sau khi lập trình viên hoàn tất công việc và đẩy code, hệ thống build sẽ thực hiện:
- Build ứng dụng
- Kiểm thử tự động thông qua **Jenkins**, một CI server
  - **Selenium** cho kiểm thử giao diện (UI)
  - **Rest Assured** cho kiểm thử API/backend

Nếu các bài test **pass**, thì build được xem là **ổn định**. Nếu **fail**, thì hệ thống sẽ thông báo rằng phiên bản code mới **gây lỗi cho phần code cũ**.

## 4. Lợi ích của thử nghiệm liên tục

- Giúp phát hiện sớm lỗi khi tích hợp code mới
- Ngăn ngừa tình trạng "build xanh" hôm nay nhưng đã **gây lỗi ngầm** cho các tính năng đã tồn tại
- Cảnh báo sớm cho lập trình viên về các thay đổi ảnh hưởng tới phần còn lại của hệ thống
- Cho phép đội ngũ phát triển phản hồi nhanh và **khắc phục sự cố sớm**, giảm thiểu rủi ro trong mỗi sprint

## 5. Công nghệ sử dụng

- **Jenkins**: công cụ CI thực thi pipeline tự động
- **Selenium**: kiểm thử giao diện người dùng
- **Rest Assured**: kiểm thử REST API
- Kết hợp với Git/GitHub để quản lý version mã nguồn và trigger build tự động

## 6. Kết luận

**Thử nghiệm liên tục (Continuous Testing)** là một phần không thể thiếu trong chu trình DevOps hiện đại. Nó giúp đảm bảo mỗi thay đổi đều được kiểm thử tự động và liên tục, góp phần duy trì chất lượng sản phẩm ở mức cao nhất.

Ở bài học tiếp theo, chúng ta sẽ tìm hiểu về **Tích hợp liên tục (Continuous Integration)**.

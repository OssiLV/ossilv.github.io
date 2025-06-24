---
title: "Phát triển liên tục"
desc: "__"
author: ossilv # references `src/data/authors/ossilv.json`
relatedPosts: []
prevPost: devops_p1_b1
nextPost: devops_p1_b3
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

# Phát triển liên tục (Continuous Development)

## 1. Tổng quan về Continuous Development

**Continuous Development (Phát triển liên tục)** là giai đoạn đầu tiên trong quy trình DevOps, bao gồm:
- **Lập kế hoạch (Planning)**
- **Lập trình/viết mã (Coding)**

DevOps là một quy trình phát triển phần mềm hiện đại bao gồm các giai đoạn:

1. Continuous Development – Phát triển liên tục
2. Continuous Testing – Kiểm thử liên tục
3. Continuous Integration – Tích hợp liên tục
4. Continuous Deployment – Triển khai liên tục
5. Continuous Monitoring – Giám sát liên tục

Các giai đoạn này được thực hiện lặp đi lặp lại trong toàn bộ vòng đời phát triển phần mềm.

---

## 2. Phân chia các giai đoạn trong vòng đời DevOps

- **Planning + Coding → Continuous Development**
- **Build + Test → Continuous Testing**
- **Integration → Continuous Integration**
- **Deployment + Operations → Continuous Deployment**
- **Monitoring → Continuous Monitoring**

Sau mỗi chu kỳ, nếu phát hiện lỗi trong quá trình giám sát, hệ thống quay lại vòng phát triển để sửa lỗi và tiếp tục chu trình.

---

## 3. Phát triển phần mềm theo sprint

Trong DevOps, sản phẩm được chia thành các **sprint** – chu kỳ phát triển ngắn (thường từ 1 đến 3 tuần):
- Mỗi sprint tập trung phát triển một hoặc một vài tính năng cụ thể.
- **Sprint planning**: giai đoạn lập kế hoạch để xác định nội dung cần thực hiện trong sprint.

### Ví dụ về phân phiên bản:
- Phiên bản đầu tiên: `v1.0`
- Sau đó là `v1.1`, `v1.2`, v.v. tương ứng với các lần cập nhật, thêm tính năng

---

## 4. Ngôn ngữ lập trình và hệ thống quản lý phiên bản

### a. Ngôn ngữ lập trình
- DevOps không bắt buộc dùng một ngôn ngữ cố định.
- Một ứng dụng có thể sử dụng nhiều ngôn ngữ lập trình khác nhau tùy nhu cầu (Java, Python, JavaScript, v.v.)

### b. Hệ thống quản lý phiên bản (Version Control System - VCS)
- VCS giúp:
  - Lưu lại lịch sử các phiên bản của mã nguồn
  - Khôi phục lại mã cũ nếu có lỗi
  - Hợp tác giữa nhiều lập trình viên

> **Git** là công cụ quản lý mã phổ biến nhất hiện nay.  
> **GitHub**, **GitLab**, **Bitbucket** là các nền tảng lưu trữ mã dùng Git.

---

## 5. Lợi ích của việc versioning (quản lý phiên bản mã nguồn)

- Giúp truy vết lỗi dễ dàng và nhanh chóng rollback (quay lại bản trước)
- Có thể quản lý nhiều nhánh (branch) code cho các môi trường khác nhau
- Cho phép nhóm vận hành (Ops) lấy chính xác mã để triển khai
- Hỗ trợ phân quyền và bảo mật tốt hơn khi làm việc nhóm

---

## 6. Hệ thống quản lý mã phân tán – Distributed Version Control System

### Mô hình 3 lớp:
1. **Working copy (bản sao làm việc):** trên máy của lập trình viên
2. **Staging area (khu vực tạm):** nơi chứa thay đổi trước khi commit
3. **Remote repository (kho từ xa):** nơi lưu trữ mã nguồn chính

![Mô hình Git](https://wac-cdn.atlassian.com/dam/jcr:8501c1fc-3ecb-4c49-9f8d-60ebf9baf65e/hero.svg?cdnVersion=1348)

> Lợi ích: Nếu máy chủ gặp sự cố, có thể lấy lại toàn bộ mã từ bất kỳ máy tính nào của lập trình viên vì dữ liệu được phân phối đều.

---

## 7. Kết luận

- Continuous Development là bước đầu tiên của DevOps – nền tảng cho mọi bước sau.
- Lập kế hoạch và phát triển tính năng diễn ra liên tục theo sprint.
- Git và GitHub là công cụ không thể thiếu trong quản lý mã nguồn hiện đại.

Trong bài học tiếp theo, bạn sẽ được tìm hiểu về **Continuous Testing** – giai đoạn kiểm thử liên tục trong DevOps.
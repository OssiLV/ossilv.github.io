---
course: devops_ultimate
module: module_2
title: "Cài đặt Git trên Linux"
order: 4
pubDate: 2025-06-26
updatedDate: 2025-06-26
---

## 1. Cài đặt Git trên Ubuntu/Debian

``` bash
sudo apt update
sudo apt install git
```

Giải thích:

- sudo apt update: Cập nhật danh sách gói phần mềm.
- sudo apt install git: Cài đặt Git.

Sau khi cài đặt, kiểm tra phiên bản Git:

``` bash
git --version
```

## 2. Cài đặt Git trên Fedora

```bash
sudo dnf install git
```

Giải thích:

- dnf là trình quản lý gói của Fedora, thay thế cho yum trong các phiên bản cũ.

Kiểm tra phiên bản Git:

```bash
git --version
```

## 3. Cài đặt Git trên CentOS/RHEL

```bash
sudo yum install git
```

- **Lưu ý**: Nếu sử dụng CentOS 8 hoặc RHEL 8, bạn có thể dùng dnf thay vì yum:
  ```bash
  sudo dnf install git
  ```

Kiểm tra phiên bản Git:

```bash
git --version
```

### Lưu ý

- Đảm bảo bạn có quyền sudo hoặc tài khoản root để cài đặt phần mềm. 
- Nếu gặp lỗi, hãy kiểm tra kết nối mạng hoặc cập nhật hệ thống trước khi thử lại. 
- Tài liệu chính thức của Git: https://git-scm.com/.
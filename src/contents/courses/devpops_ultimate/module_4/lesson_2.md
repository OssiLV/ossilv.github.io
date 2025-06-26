---
course: devpops_ultimate
module: module_4
title: "Tạo Kho Lưu Trữ Từ Xa trên GitHub và Đồng Bộ với Máy Cục Bộ"
order: 2
pubDate: 2025-06-25
updatedDate: 2025-06-25
---

## 1. Tạo Kho Lưu Trữ trên GitHub
Để bắt đầu, bạn cần có tài khoản GitHub và thực hiện các bước sau để tạo một kho lưu trữ từ xa.

- **Truy cập GitHub**:
    - Mở trình duyệt và đi đến [github.com](https://github.com).
    - Đăng nhập vào tài khoản GitHub của bạn. Nếu chưa có tài khoản, nhấp vào **Sign Up** để tạo một tài khoản mới.

- **Tạo kho lưu trữ mới**:
    - Trên trang chủ GitHub, nhấp vào nút **New** (màu xanh lá cây) hoặc biểu tượng dấu cộng (+) ở góc trên bên phải và chọn **New repository**.
    - Điền thông tin cho kho lưu trữ:
        - **Owner**: Chọn tài khoản hoặc tổ chức của bạn.
        - **Repository name**: Đặt tên độc đáo, ví dụ: `git_training_v3`.
        - **Description** (tùy chọn): Thêm mô tả, ví dụ: "Đây là kho lưu trữ cho mục đích học Git và GitHub."
        - **Public/Private**:
            - **Public**: Bất kỳ ai trên internet cũng có thể xem kho lưu trữ, nhưng chỉ những người được cấp quyền mới có thể ghi (commit).
            - **Private**: Chỉ những người được bạn mời mới có thể xem và ghi. Lưu ý: Tính đến năm 2025, kho private miễn phí cho cá nhân với số lượng người cộng tác giới hạn; các tính năng nâng cao có thể yêu cầu gói trả phí.
        - **Initialize this repository with**:
            - **README**: Tạo tệp `README.md` để mô tả dự án (tên tác giả, mục đích, cách cài đặt, v.v.).
            - **.gitignore**: Thêm tệp `.gitignore` để chỉ định các tệp/thư mục mà Git không cần theo dõi (ví dụ: tệp chứa thông tin nhạy cảm như thông tin đăng nhập).
            - **License** (tùy chọn): Chọn giấy phép (ví dụ: MIT, Apache) để quy định cách người khác sử dụng mã của bạn.
        - Chọn template `.gitignore` (nếu cần), ví dụ: chọn template cho Python nếu dự án của bạn sử dụng Python.
    - Nhấp vào **Create repository** để tạo kho.

- **Kết quả**:
    - Kho lưu trữ mới (`git_training_v3`) được tạo, chứa tệp `README.md` và `.gitignore` (nếu được chọn).
    - GitHub cung cấp URL của kho, ví dụ: `https://github.com/username/git_training_v3.git`.

## 2. Sao chép (Clone) Kho Lưu Trữ về Máy Cục Bộ
Để làm việc với kho lưu trữ từ xa trên máy cục bộ, bạn cần sao chép (clone) nó.

- **Sao chép kho**:
    - Trên trang kho lưu trữ GitHub, nhấp vào nút **Code** (biểu tượng tải xuống) và sao chép URL HTTPS (ví dụ: `https://github.com/username/git_training_v3.git`).
    - Mở terminal (Linux/Mac) hoặc Git Bash (Windows) và điều hướng đến thư mục mong muốn:
      ```bash
      cd /đường/dẫn/đến/thư/mục
      ```
    - Chạy lệnh clone:
      ```bash
      git clone --branch main https://github.com/username/git_training_v3.git
      ```
        - `--branch main`: Chỉ định nhánh chính (thường là `main` theo tiêu chuẩn hiện đại).
    - Kết quả: Một thư mục `git_training_v3` được tạo, chứa các tệp như `README.md` và `.gitignore`.

- **Kiểm tra nội dung**:
    - Điều hướng vào thư mục:
      ```bash
      cd git_training_v3
      ```
    - Liệt kê nội dung:
      ```bash
      ls
      ```
      Kết quả: `README.md .gitignore`.
    - Kiểm tra trạng thái Git:
      ```bash
      git status
      ```
      Kết quả:
      ```
      On branch main
      Your branch is up to date with 'origin/main'.
      nothing to commit, working tree clean
      ```

## 3. Đồng Bộ H
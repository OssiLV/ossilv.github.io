---
course: devpops_ultimate
module: module_3
title: "Tạo kho lưu trữ (Repository) đầu tiên"
order: 2
pubDate: 2025-06-26
updatedDate: 2025-06-26
---


## 1. Chuẩn bị trước khi tạo kho Git

Trước khi bắt đầu, bạn cần đảm bảo rằng Git đã được cài đặt và cấu hình trên máy tính của bạn. Nếu chưa thực hiện, hãy làm theo các bước sau:

- **Cài đặt Git**: Tải và cài đặt Git từ trang chính thức (https://git-scm.com/). Hiện nay, Git đã được cải tiến với các phiên bản mới (tính đến năm 2025, phiên bản Git mới nhất là khoảng 2.45 hoặc cao hơn), hỗ trợ nhiều tính năng hiện đại như `git sparse-checkout` và cải thiện hiệu suất.
- **Cấu hình thông tin người dùng**: Đảm bảo bạn đã thiết lập tên và email cho Git bằng các lệnh sau:

  ```bash
  git config --global user.name "Tên của bạn"
  git config --global user.email "email@example.com"
  ```

  Điều này giúp gắn thông tin của bạn vào các commit trong kho Git.

## 2. Tạo thư mục dự án

Để bắt đầu, bạn cần xác định nơi sẽ tạo dự án mới. Dưới đây là các bước chi tiết:

- **Xác định vị trí thư mục**:

    - Mở terminal (trên Linux/Mac) hoặc Git Bash (trên Windows).
    - Sử dụng lệnh `pwd` để kiểm tra thư mục hiện tại:

      ```bash
      pwd
      ```

      Lệnh này sẽ hiển thị đường dẫn thư mục hiện tại, ví dụ: `/home/user` trên Linux hoặc `C:\Users\YourName` trên Windows.
    - Nếu bạn muốn tạo dự án trong một thư mục cụ thể, điều hướng đến thư mục đó bằng lệnh:

      ```bash
      cd /đường/dẫn/đến/thư/mục
      ```

- **Tạo thư mục dự án**:

    - Tạo một thư mục mới cho dự án, ví dụ: `git_training_v1`. Bạn có thể sử dụng lệnh sau:

      ```bash
      mkdir git_training_v1
      ```
    - Điều hướng vào thư mục vừa tạo:

      ```bash
      cd git_training_v1
      ```
    - Kiểm tra lại vị trí hiện tại bằng `pwd` để đảm bảo bạn đang ở đúng thư mục.

## 3. Khởi tạo kho Git

Sau khi đã có thư mục dự án, bạn có thể khởi tạo kho Git bằng các bước sau:

- **Chạy lệnh khởi tạo Git**:

    - Trong thư mục dự án (`git_training_v1`), chạy lệnh:

      ```bash
      git init
      ```
    - Lệnh này sẽ tạo một kho Git rỗng và hiển thị thông báo như:

      ```
      Initialized empty Git repository in /đường/dẫn/đến/git_training_v1/.git/
      ```

- **Hiểu về thư mục** `.git`:

    - Lệnh `git init` tạo một thư mục ẩn có tên `.git` trong thư mục dự án. Đây là nơi Git lưu trữ toàn bộ cơ sở dữ liệu của kho, bao gồm lịch sử commit, nhánh, và cấu hình.
    - Thư mục `.git` là ẩn theo mặc định, vì vậy bạn sẽ không thấy nó khi liệt kê nội dung thư mục bằng lệnh `ls` hoặc `dir` (trên Windows).
    - Để xem các thư mục ẩn:
        - Trên Linux/Mac, sử dụng:

          ```bash
          ls -a
          ```

          Bạn sẽ thấy thư mục `.git` trong danh sách.
        - Trên Windows, bạn cần bật tùy chọn hiển thị tệp ẩn trong File Explorer:
            1. Mở File Explorer.
            2. Vào **View &gt; Options &gt; Change folder and search options**.
            3. Trong tab **View**, chọn **Show hidden files, folders, and drives**.
            4. Nhấn **Apply** và **OK**.
        - **Lưu ý quan trọng**: Không xóa hoặc chỉnh sửa thư mục `.git`, vì nó chứa toàn bộ cơ sở dữ liệu Git của dự án. Việc xóa thư mục này sẽ làm mất lịch sử Git của dự án.

## 4. Kiểm tra trạng thái kho Git

Sau khi khởi tạo, bạn có thể kiểm tra trạng thái của kho Git bằng lệnh:

```bash
git status
```

Lệnh này sẽ hiển thị thông tin về trạng thái hiện tại của kho, ví dụ như không có tệp nào được theo dõi (tracked) vì bạn chưa thêm bất kỳ tệp nào.

## 5. Lưu ý về thực tiễn hiện đại (Cập nhật 2025)

Một số thực tiễn và công cụ liên quan đến Git đã được cải thiện. Dưới đây là một số cập nhật để phù hợp với DevOps hiện đại:

- **Sử dụng nhánh chính là** `main` **thay vì** `master`:

    - Trước đây, nhánh mặc định của Git thường là `master`. Tuy nhiên, từ năm 2020, cộng đồng đã chuyển sang sử dụng `main` làm tên nhánh mặc định để tránh các thuật ngữ nhạy cảm. Khi khởi tạo kho Git mới, bạn có thể đặt tên nhánh chính là `main` bằng lệnh:

      ```bash
      git branch -M main
      ```

      Sau khi chạy `git init`, nhánh mặc định sẽ được đổi từ `master` sang `main`.

- **Kết nối với kho lưu trữ từ xa**:

    - Ngày nay, các dự án thường được lưu trữ trên các nền tảng như GitHub, GitLab, hoặc Bitbucket. Sau khi khởi tạo kho Git cục bộ, bạn có thể kết nối với một kho từ xa bằng cách:
        1. Tạo một kho mới trên nền tảng (ví dụ: GitHub).
        2. Liên kết kho cục bộ với kho từ xa:

           ```bash
           git remote add origin <URL_kho_từ_xa>
           ```
        3. Đẩy (push) mã lên kho từ xa:

           ```bash
           git push -u origin main
           ```

- **Công cụ hỗ trợ Git**:

    - Hiện nay, các công cụ như Visual Studio Code, IntelliJ IDEA, hoặc GitLens cung cấp giao diện đồ họa để quản lý Git dễ dàng hơn. Bạn có thể sử dụng các công cụ này để thay thế hoặc bổ sung cho lệnh terminal/Git Bash.
    - Các công cụ CI/CD như GitHub Actions, Jenkins, hoặc GitLab CI/CD thường được tích hợp với Git để tự động hóa quy trình triển khai.

## 6. Các bước tiếp theo

Sau khi khởi tạo kho Git, bạn có thể:

- Tạo các tệp trong dự án (ví dụ: `README.md`, mã nguồn, v.v.).
- Thêm tệp vào Git bằng:

  ```bash
  git add .
  ```
- Tạo commit đầu tiên:

  ```bash
  git commit -m "Khởi tạo dự án"
  ```
- Tiếp tục phát triển dự án và sử dụng Git để quản lý các thay đổi.

Bằng cách làm theo các bước trên, bạn đã thiết lập thành công kho Git đầu tiên cho dự án của mình!
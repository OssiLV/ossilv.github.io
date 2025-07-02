---
course: devops_ultimate
module: module_5
title: "So sánh Thư mục Làm việc và Khu vực Staging trong Git"
order: 1
pubDate: 2025-06-25
updatedDate: 2025-06-25
---

## 1. Các khu vực trong Git
Git quản lý mã nguồn qua ba khu vực chính:

- **Thư mục làm việc (Working Directory)**: Chứa các tệp bạn đang chỉnh sửa trên máy cục bộ. Đây là trạng thái hiện tại của các tệp trong thư mục dự án.
- **Khu vực staging (Staging Area)**: Nơi lưu trữ các thay đổi đã được đánh dấu (bằng `git add`) để chuẩn bị cho cam kết (commit).
- **Kho lưu trữ (Repository)**: Chứa lịch sử cam kết, được lưu trữ sau khi bạn chạy `git commit`.

Lệnh `git diff` giúp so sánh các thay đổi giữa các khu vực này, đặc biệt là giữa thư mục làm việc và khu vực staging.

## 2. Kiểm tra Trạng thái và Thay đổi
Hãy thực hành trong dự án `git_training_v3` để xem cách sử dụng `git diff`.

- **Kiểm tra trạng thái ban đầu**:
    - Điều hướng đến thư mục dự án:
      ```bash
      cd git_training_v3
      ```
    - Kiểm tra trạng thái:
      ```bash
      git status
      ```
      Kết quả (giả sử):
      ```
      On branch main
      Your branch is up to date with 'origin/main'.
      nothing to commit, working tree clean
      ```
      Điều này cho biết không có thay đổi nào trong thư mục làm việc hoặc khu vực staging.

- **Tạo thay đổi trong thư mục làm việc**:
    - Sửa đổi `sample_test_file1.txt`, thêm nội dung:
      ```
      Đây là tệp mẫu 1
      This is comparison lecture
      ```
    - Sửa đổi `sample_test_file2.txt`, thêm nội dung:
      ```
      Đây là tệp mẫu 2
      This is comparison lecture change in file 2
      ```
    - Kiểm tra trạng thái:
      ```bash
      git status
      ```
      Kết quả:
      ```
      On branch main
      Changes not staged for commit:
        modified:   sample_test_file1.txt
        modified:   sample_test_file2.txt
      ```
      Hai tệp đã được sửa đổi trong thư mục làm việc nhưng chưa được thêm vào khu vực staging.

## 3. Sử dụng `git diff` để So sánh
Lệnh `git diff` hiển thị sự khác biệt giữa các tệp trong thư mục làm việc và khu vực staging.

- **So sánh thay đổi trong một tệp cụ thể**:
    - Chạy lệnh để xem thay đổi trong `sample_test_file1.txt`:
      ```bash
“

System: ```bash
    git diff sample_test_file1.txt
    ```
Kết quả (ví dụ):
```
diff --git a/sample_test_file1.txt b/sample_test_file1.txt
index abc123..def456 100644
--- a/sample_test_file1.txt
+++ b/sample_test_file1.txt
@@ -1 +1,2 @@
 Đây là tệp mẫu 1
+This is comparison lecture
```
**Giải thích**:
- Dòng bắt đầu bằng `+` (màu xanh lá trong terminal) là nội dung được thêm vào (`This is comparison lecture`).
- Không có dòng bắt đầu bằng `-` (màu đỏ), nghĩa là không có nội dung bị xóa.

- **So sánh tất cả thay đổi giữa thư mục làm việc và khu vực staging**:
    - Chạy:
      ```bash
      git diff
      ```
      Kết quả (ví dụ):
      ```
      diff --git a/sample_test_file1.txt b/sample_test_file1.txt
      index abc123..def456 100644
      --- a/sample_test_file1.txt
      +++ b/sample_test_file1.txt
      @@ -1 +1,2 @@
       Đây là tệp mẫu 1
      +This is comparison lecture
      diff --git a/sample_test_file2.txt b/sample_test_file2.txt
      index ghi789..jkl012 100644
      --- a/sample_test_file2.txt
      +++ b/sample_test_file2.txt
      @@ -1 +1,2 @@
       Đây là tệp mẫu 2
      +This is comparison lecture change in file 2
      ```
      **Giải thích**:
        - Hiển thị tất cả thay đổi trong thư mục làm việc so với khu vực staging.
        - Cả hai tệp đều có nội dung mới được thêm (các dòng `+`).

## 4. Sau khi Thêm vào Khu vực Staging
Khi bạn thêm tệp vào khu vực staging bằng `git add`, lệnh `git diff` sẽ không hiển thị thay đổi nữa vì các thay đổi đã được chuyển từ thư mục làm việc sang khu vực staging.

- **Thêm tệp vào staging**:
    - Chạy:
      ```bash
      git add sample_test_file1.txt sample_test_file2.txt
      ```
    - Kiểm tra trạng thái:
      ```bash
      git status
      ```
      Kết quả:
      ```
      On branch main
      Changes to be committed:
        modified:   sample_test_file1.txt
        modified:   sample_test_file2.txt
      ```

- **Kiểm tra lại với `git diff`**:
    - Chạy:
      ```bash
      git diff
      ```
      Kết quả: Không có đầu ra, vì các thay đổi đã được thêm vào khu vực staging.
    - Để so sánh khu vực staging với kho lưu trữ (commit cuối cùng), sử dụng:
      ```bash
      git diff --staged
      ```
      Kết quả (ví dụ):
      ```
      diff --git a/sample_test_file1.txt b/sample_test_file1.txt
      index abc123..def456 100644
      --- a/sample_test_file1.txt
      +++ b/sample_test_file1.txt
      @@ -1 +1,2 @@
       Đây là tệp mẫu 1
      +This is comparison lecture
      diff --git a/sample_test_file2.txt b/sample_test_file2.txt
      index ghi789..jkl012 100644
      --- a/sample_test_file2.txt
      +++ b/sample_test_file2.txt
      @@ -1 +1,2 @@
       Đây là tệp mẫu 2
      +This is comparison lecture change in file 2
      ```
      **Giải thích**: `--staged` (hoặc `--cached`) so sánh khu vực staging với cam kết gần nhất.

- **Cam kết và đẩy thay đổi**:
    - Cam kết:
      ```bash
      git commit -m "Thêm thay đổi cho bài giảng so sánh"
      ```
    - Đẩy lên GitHub:
      ```bash
      git push origin main
      ```

## 5. Thực tiễn hiện đại (Cập nhật 2025)

- **Sử dụng công cụ trực quan**:
    - Các IDE như Visual Studio Code tích hợp GitLens hoặc các tiện ích mở rộng để hiển thị `git diff` trực quan, giúp dễ dàng xem các thay đổi bằng giao diện đồ họa.
    - Sử dụng lệnh `git difftool` với công cụ như `meld` hoặc `Beyond Compare`:
      ```bash
      git difftool sample_test_file1.txt
      ```

- **Tích hợp với GitHub**:
    - Khi đẩy mã lên GitHub, các thay đổi được hiển thị trong Pull Requests, với giao diện so sánh trực quan (dòng thêm/xóa được tô màu).
    - Sử dụng GitHub CLI để xem thay đổi:
      ```bash
      gh pr diff
      ```

## 6. Tầm quan trọng của `git diff`
- **Kiểm tra trước khi cam kết**: `git diff` giúp bạn xem lại các thay đổi để đảm bảo chỉ những thay đổi mong muốn được thêm vào khu vực staging.
- **Hỗ trợ làm việc nhóm**: So sánh thay đổi giúp phát hiện lỗi hoặc xung đột trước khi đẩy mã lên kho từ xa.
- **Tăng cường chất lượng mã**: Kết hợp với code review trong Pull Requests, `git diff` đảm bảo mã được kiểm tra kỹ lưỡng.

Bằng cách sử dụng `git diff`, bạn có thể dễល hành quản lý các thay đổi trong Git một cách hiệu quả, đảm bảo mã nguồn sạch và sẵn sàng để tích hợp vào dự án!
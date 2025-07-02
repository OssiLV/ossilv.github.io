---
course: devops_ultimate
module: module_6
title: "So sánh các Cam kết (Commits) trong Git"
order: 2
pubDate: 2025-06-25
updatedDate: 2025-06-25
---

## 1. So sánh Cam kết trong Git

Lệnh `git diff` không chỉ dùng để so sánh giữa thư mục làm việc (working directory) và khu vực staging, mà còn có thể so sánh giữa hai cam kết bất kỳ trong lịch sử Git. Điều này rất hữu ích khi bạn muốn:

- Xác định các thay đổi cụ thể giữa hai phiên bản của dự án.
- Kiểm tra những tệp nào đã được chỉnh sửa, thêm hoặc xóa giữa hai cam kết.
- Hỗ trợ xem xét mã (code review) hoặc khắc phục lỗi bằng cách phân tích lịch sử thay đổi.

## 2. Thực hành So sánh Cam kết

Hãy thực hành trong dự án `git_training_v3` để xem cách sử dụng `git diff` để so sánh các cam kết.

- **Đảm bảo tất cả thay đổi đã được cam kết và đẩy lên GitHub**:

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
    - Nếu có thay đổi chưa cam kết, thêm và cam kết:

      ```bash
      git add .
      git commit -m "Cam kết các thay đổi còn lại"
      ```
    - Đẩy lên GitHub:

      ```bash
      git push origin main
      ```

- **Xem lịch sử cam kết**:

    - Chạy lệnh để liệt kê các cam kết ở định dạng ngắn gọn:

      ```bash
      git log --oneline
      ```

      Kết quả (ví dụ):

      ```
      abc1234 (HEAD -> main, origin/main) Thêm thay đổi cho bài giảng so sánh
      def5678 Revert commit revert 1
      v764 Hợp nhất nhánh develop vào main
      f2fb35b Thêm tệp mẫu trên nhánh main
      7370 Thêm các tệp mẫu trên nhánh develop
      199173 Khởi tạo dự án
      ```

- **So sánh giữa hai cam kết**:

    - Giả sử bạn muốn so sánh cam kết mới nhất (`abc1234`) với cam kết trước đó thứ hai (`v764`):

      ```bash
      git diff v764 abc1234
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
        - Hai tệp `sample_test_file1.txt` và `sample_test_file2.txt` đã được sửa đổi.
        - Dòng bắt đầu bằng `+` (màu xanh lá trong terminal) chỉ nội dung được thêm vào (ví dụ: `This is comparison lecture`).

- **So sánh các cam kết khác**:

    - Để so sánh giữa hai cam kết khác (ví dụ: `f2fb35b` và `7370`):

      ```bash
      git diff 7370 f2fb35b
      ```

      Kết quả (ví dụ):

      ```
      diff --git a/sample_file_main1.txt b/sample_file_main1.txt
      index 000000..xyz789 100644
      --- /dev/null
      +++ b/sample_file_main1.txt
      @@ -0,0 +1 @@
      +Đây là tệp mẫu trên nhánh main
      ```

      **Giải thích**:
        - Tệp `sample_file_main1.txt` được thêm vào trong cam kết `f2fb35b`, không tồn tại trong cam kết `7370`.

## 3. Cách sử dụng `git diff` để So sánh Cam kết

- **Cú pháp**:

  ```bash
  git diff <commit-id-1> <commit-id-2>
  ```

    - `<commit-id-1>`: Cam kết đầu tiên (trạng thái trước).
    - `<commit-id-2>`: Cam kết thứ hai (trạng thái sau).
    - Kết quả hiển thị các thay đổi từ `<commit-id-1>` đến `<commit-id-2>` (thêm, xóa, sửa đổi).

- **Mẹo**:

    - Sử dụng `git log --oneline` để lấy danh sách commit ID nhanh chóng.
    - Sử dụng `--name-only` để chỉ hiển thị tên tệp thay đổi:

      ```bash
      git diff v764 abc1234 --name-only
      ```

      Kết quả:

      ```
      sample_test_file1.txt
      sample_test_file2.txt
      ```

## 4. Thực tiễn hiện đại (Cập nhật 2025)

- **Sử dụng công cụ trực quan**:

    - Các IDE như Visual Studio Code với GitLens hiển thị sự khác biệt giữa các cam kết bằng giao diện đồ họa, dễ dàng theo dõi các thay đổi.
    - Sử dụng `git difftool` với công cụ như `meld` hoặc `Beyond Compare`:

      ```bash
      git difftool v764 abc1234
      ```

- **Tích hợp với GitHub**:

    - Khi tạo Pull Request trên GitHub, bạn có thể xem sự khác biệt giữa các cam kết trực tiếp trong tab **Files changed**.
    - Sử dụng GitHub CLI để xem thay đổi:

      ```bash
      gh pr diff --commit
      ```

- **Thông điệp cam kết chuẩn hóa**:

    - Sử dụng **Conventional Commits** (ví dụ: `feat: thêm tính năng`, `fix: sửa lỗi`) để dễ dàng nhận diện mục đích của các cam kết khi so sánh.

## 5. Tầm quan trọng của So sánh Cam kết

- **Xem xét mã (Code Review)**: So sánh cam kết giúp xác định chính xác những thay đổi được thực hiện, hỗ trợ kiểm tra chất lượng mã trước khi hợp nhất.
- **Khắc phục lỗi**: Phân tích sự khác biệt giữa các cam kết giúp tìm ra nguyên nhân của lỗi hoặc thay đổi không mong muốn.
- **Hỗ trợ làm việc nhóm**: Cung cấp cái nhìn rõ ràng về các thay đổi, giúp các thành viên trong nhóm hiểu và phối hợp tốt hơn.

Bằng cách sử dụng `git diff` để so sánh các cam kết, bạn có thể quản lý lịch sử dự án một cách hiệu quả, đảm bảo mã nguồn được kiểm soát chặt chẽ và phù hợp với các tiêu chuẩn DevOps hiện đại!
---
course: devops_ultimate
module: module_5
title: "Hợp nhất Nhánh (Branches) trong Git"
order: 2
pubDate: 2025-06-28
updatedDate: 2025-06-28
---

## 1. Hợp nhất Nhánh trong Git là gì?

Hợp nhất (merge) là quá trình tích hợp các thay đổi từ một nhánh (ví dụ: `develop`) vào một nhánh khác (ví dụ: `main`). Điều này cho phép đưa các tính năng mới, sửa lỗi hoặc cập nhật từ nhánh phụ vào nhánh chính của dự án.

- **Mục đích**:
    - Kết hợp mã nguồn từ nhánh tính năng, sửa lỗi (hotfix), hoặc phát triển (`develop`) vào nhánh chính (`main`).
    - Đảm bảo nhánh chính luôn chứa mã nguồn mới nhất và ổn định.

- **Các loại hợp nhất**:
    - **Fast-forward merge**: Nếu nhánh đích (`main`) không có cam kết mới, con trỏ của nhánh sẽ di chuyển để bao gồm các cam kết từ nhánh nguồn.
    - **Merge commit**: Nếu cả hai nhánh đều có cam kết mới, Git tạo một cam kết hợp nhất để kết hợp lịch sử.

- **Xung đột hợp nhất (Merge Conflicts)**:
    - Xảy ra khi cùng một phần của tệp được chỉnh sửa khác nhau trên hai nhánh.
    - Cần được giải quyết thủ công bằng cách chọn hoặc kết hợp các thay đổi.

## 2. Thực hành Hợp nhất Nhánh

Hãy thực hành hợp nhất nhánh `main` vào `develop` và ngược lại trong dự án `git_training_v3`, đồng thời xử lý xung đột nếu có.

### 2.1. Chuẩn bị và Kiểm tra Trạng thái
- **Điều hướng đến thư mục dự án**:
  ```bash
  cd git_training_v3
  ```

- **Liệt kê các nhánh**:
  ```bash
  git branch -a
  ```
  Kết quả (ví dụ):
  ```
  * main
    develop
    remotes/origin/main
    remotes/origin/develop
  ```

- **Chuyển sang nhánh `develop`**:
  ```bash
  git switch develop
  ```
  Kết quả: `Switched to branch 'develop'`
    - Xác nhận nhánh hiện tại:
      ```bash
      git branch
      ```
      Kết quả:
      ```
        main
      * develop
      ```

- **Kiểm tra nội dung**:
  ```bash
  ls
  ```
  Kết quả: `README.md sample_file_main1.txt sample_test_file1.txt sample_test_file2.txt test_file.txt`

### 2.2. Tạo Thay đổi trên Nhánh `develop`
- **Sửa đổi `sample_test_file1.txt`**:
    - Mở tệp và thêm nội dung:
      ```
      Đây là tệp mẫu 1
      This is comparison lecture
      Added text for merge on develop
      ```
    - Kiểm tra trạng thái:
      ```bash
      git status
      ```
      Kết quả:
      ```
      On branch develop
      Changes not staged for commit:
        modified:   sample_test_file1.txt
      ```

- **Kiểm tra thay đổi**:
  ```bash
  git diff sample_test_file1.txt
  ```
  Kết quả (ví dụ):
  ```
  diff --git a/sample_test_file1.txt b/sample_test_file1.txt
  index abc123..def456 100644
  --- a/sample_test_file1.txt
  +++ b/sample_test_file1.txt
  @@ -1,2 +1,3 @@
   Đây là tệp mẫu 1
   This is comparison lecture
  +Added text for merge on develop
  ```

- **Cam kết và đẩy thay đổi**:
  ```bash
  git add sample_test_file1.txt
  git commit -m "Sample merge on develop"
  git push origin develop
  ```

### 2.3. So sánh Nhánh `main` và `develop`
- **Kiểm tra nội dung trên nhánh `main`**:
    - Chuyển sang nhánh `main`:
      ```bash
      git switch main
      ```
    - Xem nội dung `sample_test_file1.txt`:
      ```bash
      cat sample_test_file1.txt
      ```
      Kết quả:
      ```
      Đây là tệp mẫu 1
      This is comparison lecture
      ```
    - Xem nội dung `sample_test_file2.txt`:
      ```bash
      cat sample_test_file2.txt
      ```
      Kết quả:
      ```
      Đây là tệp mẫu 2
      This is comparison lecture change in file 2
      Additional line in main
      ```

- **Kiểm tra lịch sử cam kết**:
    - Trên nhánh `main`:
      ```bash
      git log --oneline --graph
      ```
      Kết quả (ví dụ):
      ```
      * abc1234 (HEAD -> main, origin/main) Thêm thay đổi cho bài giảng so sánh
      * v764 Hợp nhất nhánh develop vào main
      * f2fb35b Thêm tệp mẫu trên nhánh main
      * 7370 Thêm các tệp mẫu trên nhánh develop
      * 199173 Khởi tạo dự án
      ```
    - Chuyển sang nhánh `develop`:
      ```bash
      git switch develop
      ```
    - Xem lịch sử:
      ```bash
      git log --oneline --graph
      ```
      Kết quả (ví dụ):
      ```
      * xyz7890 (HEAD -> develop, origin/develop) Sample merge on develop
      * v764 Hợp nhất nhánh develop vào main
      * 7370 Thêm các tệp mẫu trên nhánh develop
      * 199173 Khởi tạo dự án
      ```
    - **Quan sát**: Nhánh `develop` có cam kết mới (`xyz7890`) không có trên `main`, và `main` có các thay đổi khác (ví dụ: thêm dòng trong `sample_test_file2.txt`).

### 2.4. Hợp nhất Nhánh `main` vào `develop`
- **Thực hiện hợp nhất**:
    - Đảm bảo đang ở nhánh `develop`:
      ```bash
      git switch develop
      ```
    - Chạy lệnh hợp nhất:
      ```bash
      git merge main -m "Merging main into develop"
      ```
      Kết quả (ví dụ):
      ```
      Auto-merging sample_test_file1.txt
      CONFLICT (content): Merge conflict in sample_test_file1.txt
      Auto-merging sample_test_file2.txt
      Automatic merge failed; fix conflicts and then commit the result.
      ```

- **Phân tích xung đột**:
    - Xung đột xảy ra ở `sample_test_file1.txt` vì cả hai nhánh (`main` và `develop`) đều chỉnh sửa cùng tệp ở các dòng khác nhau.
    - Không có xung đột ở `sample_test_file2.txt` vì Git tự động hợp nhất (auto-merge) các thay đổi (thêm dòng từ `main`).

- **Kiểm tra tệp xung đột**:
    - Mở `sample_test_file1.txt`:
      ```
      Đây là tệp mẫu 1
      <<<<<<< HEAD
      Added text for merge on develop
      =======
      This is comparison lecture
      >>>>>>> main
      ```
      **Giải thích**:
        - `<<<<<<< HEAD`: Nội dung từ nhánh hiện tại (`develop`): `Added text for merge on develop`.
        - `=======`: Dấu phân cách giữa hai phiên bản.
        - `>>>>>>> main`: Nội dung từ nhánh `main`: `This is comparison lecture`.

- **Giải quyết xung đột**:
    - Quyết định giữ nội dung nào:
        - Giữ cả hai:
          ```
          Đây là tệp mẫu 1
          This is comparison lecture
          Added text for merge on develop
          ```
        - Hoặc chọn một phiên bản (ví dụ: chỉ giữ nội dung của `develop`).
    - Sửa tệp `sample_test_file1.txt` để giữ cả hai dòng, xóa các ký hiệu xung đột (`<<<<<<<`, `=======`, `>>>>>>>`).
    - Lưu tệp.

- **Hoàn tất hợp nhất**:
    - Thêm tệp đã sửa:
      ```bash
      git add sample_test_file1.txt
      ```
    - Cam kết:
      ```bash
      git commit
      ```
      Git sử dụng thông điệp mặc định: `Merging main into develop`.
    - Kiểm tra lịch sử:
      ```bash
      git log --oneline --graph
      ```
      Kết quả (ví dụ):
      ```
      *   merge123 (HEAD -> develop) Merging main into develop
      |\
      | * abc1234 (origin/main, main) Thêm thay đổi cho bài giảng so sánh
      * | xyz7890 Sample merge on develop
      |/
      * v764 Hợp nhất nhánh develop vào main
      * 7370 Thêm các tệp mẫu trên nhánh develop
      * 199173 Khởi tạo dự án
      ```
    - Đẩy lên GitHub:
      ```bash
      git push origin develop
      ```

### 2.5. Hợp nhất Nhánh `develop` vào `main`
- **Chuyển sang nhánh `main`**:
  ```bash
  git switch main
  ```

- **Kiểm tra nội dung**:
  ```bash
  cat sample_test_file1.txt
  ```
  Kết quả:
  ```
  Đây là tệp mẫu 1
  This is comparison lecture
  ```

- **Thực hiện hợp nhất**:
  ```bash
  git merge develop -m "Merging develop into main"
  ```
  Kết quả: Không có xung đột, vì `main` không có thay đổi mới tại cùng vị trí với `develop`.
    - Git thực hiện fast-forward hoặc merge commit tùy thuộc vào lịch sử.

- **Cam kết và đẩy**:
  ```bash
  git add .
  git commit
  git push origin main
  ```

- **Kiểm tra nội dung**:
  ```bash
  cat sample_test_file1.txt
  ```
  Kết quả:
  ```
  Đây là tệp mẫu 1
  This is comparison lecture
  Added text for merge on develop
  ```

- **Kiểm tra lịch sử**:
  ```bash
  git log --oneline --graph
  ```
  Kết quả (ví dụ):
  ```
  *   merge123 (HEAD -> main, origin/develop) Merging main into develop
  |\
  | * abc1234 Thêm thay đổi cho bài giảng so sánh
  * | xyz7890 Sample merge on develop
  |/
  * v764 Hợp nhất nhánh develop vào main
  * 7370 Thêm các tệp mẫu trên nhánh develop
  * 199173 Khởi tạo dự án
  ```

## 3. Xử lý Xung đột Hợp nhất

- **Nguyên nhân xung đột**:
    - Xung đột xảy ra khi cùng một dòng trong một tệp được chỉnh sửa khác nhau trên hai nhánh (ví dụ: `sample_test_file1.txt` trên `main` và `develop`).
    - Git không thể tự động quyết định giữ phiên bản nào, nên yêu cầu người dùng giải quyết thủ công.

- **Cách giải quyết**:
    - Mở tệp xung đột và chọn nội dung giữ lại (phiên bản của `HEAD`, nhánh khác, hoặc kết hợp cả hai).
    - Xóa các ký hiệu xung đột (`<<<<<<<`, `=======`, `>>>>>>>`).
    - Thêm tệp đã sửa vào khu vực staging (`git add`) và hoàn tất cam kết (`git commit`).

- **Mẹo**:
    - Sử dụng công cụ như Visual Studio Code hoặc `git mergetool` để giải quyết xung đột trực quan:
      ```bash
      git mergetool
      ```

## 4. Thực tiễn hiện đại (Cập nhật 2025)

- **Sử dụng Pull Requests**:
    - Thay vì hợp nhất trực tiếp trên máy cục bộ, sử dụng Pull Requests trên GitHub để xem xét mã và xử lý xung đột:
      ```bash
      gh pr create --base main --head develop --title "Merging develop into main"
      ```
    - GitHub cung cấp giao diện trực quan để xem và giải quyết xung đột trong trình duyệt.

- **Quy tắc bảo vệ nhánh**:
    - Thiết lập **branch protection rules** trên GitHub để yêu cầu:
        - Pull Request trước khi hợp nhất.
        - Phê duyệt từ ít nhất một người đánh giá.
        - Kiểm tra CI/CD thành công.

- **Thông điệp cam kết chuẩn hóa**:
    - Sử dụng **Conventional Commits** (ví dụ: `feat: thêm tính năng`, `fix: sửa lỗi`) để mô tả rõ ràng mục đích của cam kết hợp nhất.

## 5. Tầm quan trọng của Hợp nhất Nhánh

- **Tích hợp mã nguồn**: Hợp nhất đưa các tính năng mới hoặc sửa lỗi từ nhánh phụ vào nhánh chính, sẵn sàng cho triển khai.
- **Quản lý xung đột**: Học cách xử lý xung đột giúp duy trì mã nguồn sạch và tránh lỗi.
- **Hỗ trợ làm việc nhóm**: Kết hợp với Pull Requests, hợp nhất đảm bảo mã được xem xét kỹ lưỡng trước khi tích hợp.
- **Kiểm soát phiên bản**: Cho phép duy trì các phiên bản mã ổn định (trong `main`) trong khi phát triển song song trên các nhánh khác.

Bằng cách sử dụng lệnh `git merge` và Pull Requests trên GitHub, bạn có thể hợp nhất nhánh một cách hiệu quả, xử lý xung đột một cách chuyên nghiệp, và duy trì quy trình phát triển phù hợp với các tiêu chuẩn DevOps hiện đại!
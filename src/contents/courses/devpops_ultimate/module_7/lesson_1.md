---
course: devpops_ultimate
module: module_7
title: "Git Stash: Lưu trữ Tạm thời Thay đổi trong Git"
order: 1
pubDate: 2025-06-28
updatedDate: 2025-06-28
---

## 1. Git Stash là gì?

`git stash` là một lệnh trong Git cho phép tạm thời lưu trữ các thay đổi trong **thư mục làm việc (working directory)** và **khu vực staging (staging area)** vào một ngăn xếp (stack) tạm thời. Sau đó, bạn có thể khôi phục các thay đổi này khi cần tiếp tục công việc.

- **Mục đích**:
    - Lưu trữ các thay đổi chưa hoàn chỉnh để tránh cam kết mã không hoàn thiện vào nhánh hiện tại.
    - Chuyển đổi nhanh chóng giữa các nhiệm vụ (ví dụ: từ phát triển tính năng sang sửa lỗi khẩn cấp).
    - Giữ cho nhánh hiện tại "sạch" (clean) trước khi thực hiện các thay đổi khác.

- **Ứng dụng**:
    - Khi đang làm việc trên một tính năng nhưng cần chuyển sang sửa lỗi khẩn cấp.
    - Khi muốn kiểm tra một nhánh khác mà không mất các thay đổi hiện tại.
    - Khi cần tạm dừng công việc để đồng bộ hóa với nhánh chính (`main`).

## 2. Thực hành Git Stash

Hãy thực hành sử dụng `git stash` trong dự án `git_training_v3`.

### 2.1. Chuẩn bị và Kiểm tra Trạng thái
- **Điều hướng đến thư mục dự án**:
  ```bash
  cd git_training_v3
  ```

- **Kiểm tra trạng thái**:
  ```bash
  git status
  ```
  Kết quả (giả sử):
  ```
  On branch main
  Your branch is up to date with 'origin/main'.
  nothing to commit, working tree clean
  ```

- **Đồng bộ hóa với kho từ xa**:
  ```bash
  git pull origin main
  ```
  Kết quả: `Already up to date.`

- **Liệt kê nội dung**:
  ```bash
  ls
  ```
  Kết quả: `README.md sample_file_main1.txt sample_test_file1.txt sample_test_file2.txt test_file.txt`

### 2.2. Tạo Thay đổi Chưa Hoàn thiện
Giả sử bạn đang làm việc trên một tính năng và sửa đổi một số tệp, nhưng chưa sẵn sàng để cam kết.

- **Sửa đổi `sample_test_file1.txt`**:
    - Thêm nội dung:
      ```
      Đây là tệp mẫu 1
      This is comparison lecture
      This is stash lecture change in file 1
      ```

- **Sửa đổi `sample_test_file2.txt`**:
    - Thêm nội dung:
      ```
      Đây là tệp mẫu 2
      This is stash lecture change in file 2
      ```

- **Kiểm tra trạng thái**:
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

- **Kiểm tra thay đổi**:
  ```bash
  git diff
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
  +This is stash lecture change in file 1
  diff --git a/sample_test_file2.txt b/sample_test_file2.txt
  index ghi789..jkl012 100644
  --- a/sample_test_file2.txt
  +++ b/sample_test_file2.txt
  @@ -1 +1,2 @@
   Đây là tệp mẫu 2
  +This is stash lecture change in file 2
  ```

### 2.3. Lưu trữ Thay đổi bằng `git stash`
Giả sử bạn nhận được yêu cầu sửa lỗi khẩn cấp và cần tạm dừng công việc hiện tại.

- **Lưu trữ thay đổi**:
  ```bash
  git stash
  ```
  Kết quả:
  ```
  Saved working directory and index state WIP on main: abc1234 Thêm thay đổi cho bài giảng so sánh
  ```

- **Kiểm tra trạng thái**:
  ```bash
  git status
  ```
  Kết quả:
  ```
  On branch main
  Your branch is up to date with 'origin/main'.
  nothing to commit, working tree clean
  ```

- **Kiểm tra tệp**:
  ```bash
  cat sample_test_file1.txt
  ```
  Kết quả:
  ```
  Đây là tệp mẫu 1
  This is comparison lecture
  ```
    - Các thay đổi (`This is stash lecture change in file 1`) đã được lưu vào stash và không còn trong thư mục làm việc.

### 2.4. Thực hiện Sửa lỗi Khẩn cấp
- **Sửa đổi `sample_file_main1.txt`**:
    - Thêm nội dung:
      ```
      Đây là tệp mẫu trên nhánh main
      Urgent fix change
      ```

- **Kiểm tra trạng thái**:
  ```bash
  git status
  ```
  Kết quả:
  ```
  On branch main
  Changes not staged for commit:
    modified:   sample_file_main1.txt
  ```

- **Cam kết và đẩy**:
  ```bash
  git add sample_file_main1.txt
  git commit -m "Urgent fix change"
  git push origin main
  ```

### 2.5. Khôi phục Thay đổi từ Stash
Sau khi hoàn thành sửa lỗi, khôi phục các thay đổi đã lưu trữ.

- **Xem danh sách stash**:
  ```bash
  git stash list
  ```
  Kết quả:
  ```
  stash@{0}: WIP on main: abc1234 Thêm thay đổi cho bài giảng so sánh
  ```

- **Khôi phục thay đổi**:
  ```bash
  git stash apply
  ```
  Kết quả:
  ```
  On branch main
  Changes not staged for commit:
    modified:   sample_test_file1.txt
    modified:   sample_test_file2.txt
  ```

- **Kiểm tra tệp**:
  ```bash
  cat sample_test_file1.txt
  ```
  Kết quả:
  ```
  Đây là tệp mẫu 1
  This is comparison lecture
  This is stash lecture change in file 1
  ```
    - Các thay đổi trước đó đã được khôi phục.

- **Cam kết thay đổi**:
  ```bash
  git add .
  git commit -m "Stash changes restored"
  git push origin main
  ```

### 2.6. Xóa Stash
Sau khi áp dụng stash, bạn có thể xóa nó để giữ ngăn xếp sạch sẽ.

- **Kiểm tra danh sách stash**:
  ```bash
  git stash list
  ```
  Kết quả: Vẫn hiển thị `stash@{0}`, vì `git stash apply` không xóa stash.

- **Xóa stash**:
  ```bash
  git stash drop
  ```
  Kết quả: `Dropped stash@{0}`

- **Kiểm tra lại**:
  ```bash
  git stash list
  ```
  Kết quả: Không còn stash nào.

## 3. Các Lệnh Git Stash Quan trọng

- **Lưu trữ thay đổi**:
  ```bash
  git stash
  ```
    - Lưu trữ cả thay đổi trong thư mục làm việc và khu vực staging.
    - Có thể thêm thông điệp:
      ```bash
      git stash push -m "Lưu tính năng chưa hoàn chỉnh"
      ```

- **Xem danh sách stash**:
  ```bash
  git stash list
  ```

- **Áp dụng stash**:
  ```bash
  git stash apply
  ```
    - Áp dụng stash mới nhất (`stash@{0}`).
    - Để áp dụng stash cụ thể:
      ```bash
      git stash apply stash@{1}
      ```

- **Xóa stash**:
  ```bash
  git stash drop
  ```
    - Xóa stash mới nhất.
    - Để xóa stash cụ thể:
      ```bash
      git stash drop stash@{1}
      ```

- **Xóa tất cả stash**:
  ```bash
  git stash clear
  ```

- **Áp dụng và xóa cùng lúc**:
  ```bash
  git stash pop
  ```
    - Tương đương `git stash apply` sau đó `git stash drop`.

## 4. Thực tiễn hiện đại (Cập nhật 2025)

- **Quản lý stash hiệu quả**:
    - Luôn thêm thông điệp khi lưu stash để dễ nhận diện:
      ```bash
      git stash push -m "Tạm dừng tính năng X"
      ```
    - Sử dụng Visual Studio Code hoặc GitLens để xem và quản lý stash trực quan.

- **Tích hợp với GitHub**:
    - Khi làm việc với nhánh từ xa, đảm bảo đồng bộ hóa trước khi stash:
      ```bash
      git pull --rebase
      ```
    - Sử dụng GitHub CLI để kiểm tra trạng thái:
      ```bash
      gh repo sync
      ```

- **Tự động hóa kiểm tra**:
    - Sử dụng GitHub Actions để kiểm tra mã trước khi cam kết hoặc áp dụng stash:
      ```yaml
      name: Stash Validation
      on:
        push:
          branches: [ main ]
      jobs:
        validate:
          runs-on: ubuntu-latest
          steps:
            - uses: actions/checkout@v3
            - name: Check code
              run: echo "Kiểm tra mã nguồn sau khi áp dụng stash"
      ```

## 5. Tầm quan trọng của Git Stash

- **Linh hoạt trong công việc**: Cho phép tạm dừng và chuyển đổi giữa các nhiệm vụ mà không làm lộn xộn nhánh hiện tại.
- **Tránh cam kết không hoàn chỉnh**: Giúp giữ nhánh sạch bằng cách lưu trữ mã chưa sẵn sàng để cam kết.
- **Hỗ trợ làm việc khẩn cấp**: Cho phép xử lý các sửa lỗi hoặc nhiệm vụ ưu tiên cao mà không mất tiến độ công việc hiện tại.
- **Hỗ trợ làm việc nhóm**: Đảm bảo bạn có thể đồng bộ hóa với nhánh chính hoặc chuyển nhánh mà không làm mất thay đổi cục bộ.

Bằng cách sử dụng `git stash`, bạn có thể quản lý các thay đổi chưa hoàn thiện một cách hiệu quả, đảm bảo quy trình phát triển linh hoạt và phù hợp với các tiêu chuẩn DevOps hiện đại!
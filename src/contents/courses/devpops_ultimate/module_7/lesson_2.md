---
course: devpops_ultimate
module: module_7
title: "Git Stash với Tệp Không được Theo dõi (Untracked Files)"
order: 2
pubDate: 2025-06-27
updatedDate: 2025-06-27
---

## 1. Tệp Được Theo dõi và Không Được Theo dõi trong Git

Git quản lý mã nguồn qua ba khu vực: **thư mục làm việc (working directory)**, **khu vực staging (staging area)**, và **kho lưu trữ (repository)**. Các tệp trong thư mục làm việc được chia thành hai loại:

- **Tệp được theo dõi (Tracked Files)**:
    - Là các tệp đã được Git quản lý, tức là đã được cam kết (committed) hoặc thêm vào khu vực staging bằng `git add`.
    - Git ghi nhận lịch sử thay đổi của các tệp này.

- **Tệp không được theo dõi (Untracked Files)**:
    - Là các tệp mới trong thư mục làm việc mà Git chưa quản lý, vì chúng chưa được thêm vào (`git add`) hoặc cam kết (`git commit`).
    - Ví dụ: Tệp mới tạo hoặc tệp không nằm trong lịch sử Git.

Mặc định, lệnh `git stash` chỉ lưu trữ các thay đổi của **tệp được theo dõi**. Trong bài học này, chúng ta sẽ học cách sử dụng `git stash` để lưu trữ cả **tệp không được theo dõi**.

## 2. Thực hành Git Stash với Tệp Không Được Theo dõi

Hãy thực hành trong dự án `git_training_v3` để hiểu cách stash cả tệp được theo dõi và không được theo dõi.

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

### 2.2. Tạo Thay đổi trên Tệp Được Theo dõi và Không Được Theo dõi
- **Sửa đổi tệp được theo dõi (`sample_test_file1.txt`)**:
    - Thêm nội dung:
      ```
      Đây là tệp mẫu 1
      This is comparison lecture
      This is stash lecture change for untracked files in file 1
      ```

- **Tạo tệp không được theo dõi (`sample_test_file3.txt`)**:
    - Tạo tệp mới và thêm nội dung:
      ```
      This is stash lecture change for untracked files in file 3
      ```
    - Liệt kê nội dung:
      ```bash
      ls
      ```
      Kết quả: `README.md sample_file_main1.txt sample_test_file1.txt sample_test_file2.txt sample_test_file3.txt test_file.txt`

- **Kiểm tra trạng thái**:
  ```bash
  git status
  ```
  Kết quả:
  ```
  On branch main
  Changes not staged for commit:
    modified:   sample_test_file1.txt
  Untracked files:
    sample_test_file3.txt
  ```
    - **Giải thích**:
        - `sample_test_file1.txt`: Tệp được theo dõi, đã sửa đổi.
        - `sample_test_file3.txt`: Tệp không được theo dõi, mới tạo và chưa được thêm vào Git.

### 2.3. Sử dụng `git stash` Mặc định
- **Lưu trữ thay đổi với `git stash`**:
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
  Untracked files:
    sample_test_file3.txt
  ```
    - **Giải thích**:
        - Thay đổi trong `sample_test_file1.txt` (tệp được theo dõi) đã được lưu vào stash.
        - `sample_test_file3.txt` (tệp không được theo dõi) vẫn còn trong thư mục làm việc, vì `git stash` mặc định không lưu trữ tệp không được theo dõi.

### 2.4. Sử dụng `git stash` với Tệp Không Được Theo dõi
- **Lưu trữ cả tệp được theo dõi và không được theo dõi**:
  ```bash
  git stash -u
  ```
    - Lưu ý: Tùy chọn `-u` (hoặc `--include-untracked`) yêu cầu Git lưu cả tệp không được theo dõi.
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
    - **Giải thích**: Cả `sample_test_file1.txt` và `sample_test_file3.txt` đã được lưu vào stash.

- **Kiểm tra danh sách stash**:
  ```bash
  git stash list
  ```
  Kết quả:
  ```
  stash@{0}: WIP on main: abc1234 Thêm thay đổi cho bài giảng so sánh
  stash@{1}: WIP on main: abc1234 Thêm thay đổi cho bài giảng so sánh
  ```

### 2.5. Khôi phục Thay đổi với `git stash apply` và `git stash pop`
- **Khôi phục bằng `git stash apply`**:
    - Áp dụng stash mới nhất (`stash@{0}`):
      ```bash
      git stash apply
      ```
      Kết quả:
      ```
      On branch main
      Changes not staged for commit:
        modified:   sample_test_file1.txt
      Untracked files:
        sample_test_file3.txt
      ```
    - Kiểm tra danh sách stash:
      ```bash
      git stash list
      ```
      Kết quả: Vẫn hiển thị `stash@{0}` và `stash@{1}`, vì `apply` không xóa stash.

- **Khôi phục bằng `git stash pop`**:
    - Chuyển sang stash trước đó (`stash@{1}`):
      ```bash
      git stash pop stash@{1}
      ```
      Kết quả:
      ```
      On branch main
      Changes not staged for commit:
        modified:   sample_test_file1.txt
      Dropped stash@{1}
      ```
    - Kiểm tra danh sách stash:
      ```bash
      git stash list
      ```
      Kết quả:
      ```
      stash@{0}: WIP on main: abc1234 Thêm thay đổi cho bài giảng so sánh
      ```
    - **Giải thích**:
        - `git stash apply`: Khôi phục thay đổi nhưng giữ stash trong ngăn xếp.
        - `git stash pop`: Khôi phục thay đổi và xóa stash khỏi ngăn xếp.

- **Kiểm tra nội dung tệp**:
  ```bash
  cat sample_test_file1.txt
  ```
  Kết quả:
  ```
  Đây là tệp mẫu 1
  This is comparison lecture
  This is stash lecture change for untracked files in file 1
  ```
  ```bash
  cat sample_test_file3.txt
  ```
  Kết quả:
  ```
  This is stash lecture change for untracked files in file 3
  ```

### 2.6. Cam kết Thay đổi
- **Cam kết các thay đổi đã khôi phục**:
  ```bash
  git add .
  git commit -m "Stash changes restored including untracked files"
  git push origin main
  ```

- **Xóa stash còn lại**:
  ```bash
  git stash drop
  ```
  Kết quả: `Dropped stash@{0}`
    - Kiểm tra lại:
      ```bash
      git stash list
      ```
      Kết quả: Không còn stash nào.

## 3. Các Lệnh Git Stash Liên quan đến Tệp Không Được Theo dõi

- **Lưu trữ cả tệp được theo dõi và không được theo dõi**:
  ```bash
  git stash -u
  ```
    - Hoặc:
      ```bash
      git stash --include-untracked
      ```

- **Lưu trữ tất cả (bao gồm tệp bị bỏ qua - ignored files)**:
  ```bash
  git stash -a
  ```
    - Tùy chọn `-a` (hoặc `--all`) lưu cả tệp không được theo dõi và tệp bị bỏ qua (như `.gitignore`).

- **Khôi phục và xóa stash**:
  ```bash
  git stash pop
  ```

- **Xem nội dung stash**:
    - Kiểm tra thay đổi trong stash cụ thể:
      ```bash
      git stash show stash@{0}
      ```
    - Xem chi tiết:
      ```bash
      git stash show -p stash@{0}
      ```

## 4. Thực tiễn hiện đại (Cập nhật 2025)

- **Quản lý stash hiệu quả**:
    - Luôn sử dụng thông điệp khi stash để dễ nhận diện:
      ```bash
      git stash push -u -m "Lưu tính năng chưa hoàn chỉnh và tệp mới"
      ```
    - Sử dụng Visual Studio Code với GitLens để xem và quản lý stash trực quan.

- **Tích hợp với GitHub**:
    - Trước khi stash, đảm bảo đồng bộ hóa với nhánh từ xa:
      ```bash
      git pull --rebase
      ```
    - Sử dụng GitHub CLI để kiểm tra trạng thái kho:
      ```bash
      gh repo sync
      ```

## 5. Tầm quan trọng của Git Stash với Tệp Không Được Theo dõi

- **Linh hoạt trong quản lý tệp**: Cho phép lưu trữ cả tệp được theo dõi và không được theo dõi, giúp xử lý các tình huống phức tạp như thêm tệp mới vào dự án.
- **Tránh cam kết không hoàn chỉnh**: Đảm bảo nhánh sạch khi cần chuyển đổi nhiệm vụ mà không bỏ sót các tệp mới.
- **Hỗ trợ làm việc khẩn cấp**: Giúp tạm dừng công việc hiện tại (bao gồm tệp mới) để xử lý sửa lỗi hoặc nhiệm vụ ưu tiên.
- **Sự khác biệt giữa `apply` và `pop`**:
    - `git stash apply`: Giữ stash để sử dụng lại nếu cần.
    - `git stash pop`: Xóa stash ngay sau khi khôi phục, phù hợp khi chắc chắn không cần stash nữa.

Bằng cách sử dụng `git stash -u` và các lệnh liên quan, bạn có thể quản lý cả tệp được theo dõi và không được theo dõi một cách hiệu quả, đảm bảo quy trình phát triển linh hoạt và phù hợp với các tiêu chuẩn DevOps hiện đại!
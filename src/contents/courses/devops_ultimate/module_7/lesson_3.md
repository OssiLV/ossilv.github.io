---
course: devops_ultimate
module: module_7
title: "Quản lý Nhiều Stash trong Git"
order: 3
pubDate: 2025-06-28
updatedDate: 2025-06-28
---

## 1. Quản lý Nhiều Stash trong Git

`git stash` cho phép lưu trữ nhiều bộ thay đổi tạm thời (stashes) trong một ngăn xếp (stack). Để quản lý nhiều stash, bạn có thể:

- **Lưu stash với thông điệp**: Gắn thông điệp để dễ nhận diện mục đích của stash.
- **Xem nội dung stash**: Kiểm tra các thay đổi trong một stash cụ thể.
- **Áp dụng hoặc xóa stash cụ thể**: Chọn stash cụ thể để khôi phục hoặc xóa thay vì sử dụng stash mới nhất.

## 2. Thực hành Quản lý Nhiều Stash

Hãy thực hành trong dự án `git_training_v3` để quản lý nhiều stash, bao gồm cả tệp được theo dõi (tracked files) và không được theo dõi (untracked files).

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
  Changes not staged for commit:
    modified:   sample_test_file1.txt
  Untracked files:
    sample_test_file3.txt
  ```
    - `sample_test_file1.txt`: Tệp được theo dõi, đã sửa đổi.
    - `sample_test_file3.txt`: Tệp không được theo dõi, mới tạo.

### 2.2. Lưu Stash với Thông điệp
- **Lưu trữ tệp được theo dõi với thông điệp**:
    - Sửa đổi `sample_test_file1.txt`:
      ```
      Đây là tệp mẫu 1
      This is comparison lecture
      Change in sample_test_file1.txt for stash
      ```
    - Lưu stash:
      ```bash
      git stash push -m "Change in sample_test_file1.txt"
      ```
      Kết quả:
      ```
      Saved working directory and index state "Change in sample_test_file1.txt" on main: abc1234 Thêm thay đổi cho bài giảng so sánh
      ```

- **Kiểm tra trạng thái**:
  ```bash
  git status
  ```
  Kết quả:
  ```
  On branch main
  Untracked files:
    sample_test_file3.txt
  ```
    - **Giải thích**: Chỉ tệp được theo dõi (`sample_test_file1.txt`) được lưu vào stash; tệp không được theo dõi (`sample_test_file3.txt`) vẫn còn.

- **Lưu trữ cả tệp được theo dõi và không được theo dõi**:
    - Sửa đổi lại `sample_test_file1.txt` (thêm dòng mới):
      ```
      Đây là tệp mẫu 1
      This is comparison lecture
      Second change in sample_test_file1.txt for stash
      ```
    - Tạo hoặc đảm bảo `sample_test_file3.txt` tồn tại:
      ```
      This is stash lecture change for untracked files in file 3
      ```
    - Lưu stash với tùy chọn `-u` (bao gồm tệp không được theo dõi):
      ```bash
      git stash push -u -m "Change in sample_test_file3.txt"
      ```
      Kết quả:
      ```
      Saved working directory and index state "Change in sample_test_file3.txt" on main: abc1234 Thêm thay đổi cho bài giảng so sánh
      ```

- **Kiểm tra danh sách stash**:
  ```bash
  git stash list
  ```
  Kết quả:
  ```
  stash@{0}: Change in sample_test_file3.txt
  stash@{1}: Change in sample_test_file1.txt
  ```

### 2.3. Xem Nội dung Stash
- **Xem thay đổi trong stash cụ thể**:
    - Xem stash `stash@{1}` (chỉ chứa tệp được theo dõi):
      ```bash
      git stash show stash@{1}
      ```
      Kết quả:
      ```
      sample_test_file1.txt | 1 +
      1 file changed, 1 insertion(+)
      ```
    - Xem chi tiết thay đổi:
      ```bash
      git stash show -p stash@{1}
      ```
      Kết quả:
      ```
      diff --git a/sample_test_file1.txt b/sample_test_file1.txt
      index abc123..def456 100644
      --- a/sample_test_file1.txt
      +++ b/sample_test_file1.txt
      @@ -1,2 +1,3 @@
       Đây là tệp mẫu 1
       This is comparison lecture
      +Change in sample_test_file1.txt for stash
      ```

    - Xem stash `stash@{0}` (chứa cả tệp không được theo dõi):
      ```bash
      git stash show stash@{0}
      ```
      Kết quả:
      ```
      sample_test_file1.txt | 1 +
      sample_test_file3.txt | 1 +
      2 files changed, 2 insertions(+)
      ```
    - **Giải thích**:
        - Lệnh `git stash show` hiển thị tóm tắt các tệp được thay đổi trong stash.
        - Với tệp không được theo dõi, `git stash show` vẫn liệt kê chúng, nhưng chi tiết thay đổi (`-p`) chỉ hiển thị rõ ràng cho tệp được theo dõi.

### 2.4. Áp dụng hoặc Xóa Stash Cụ thể
- **Áp dụng stash cụ thể**:
    - Áp dụng `stash@{1}`:
      ```bash
      git stash apply stash@{1}
      ```
      Kết quả:
      ```
      On branch main
      Changes not staged for commit:
        modified:   sample_test_file1.txt
      ```
    - Kiểm tra tệp:
      ```bash
      cat sample_test_file1.txt
      ```
      Kết quả:
      ```
      Đây là tệp mẫu 1
      This is comparison lecture
      Change in sample_test_file1.txt for stash
      ```
    - Kiểm tra danh sách stash:
      ```bash
      git stash list
      ```
      Kết quả: Vẫn hiển thị cả `stash@{0}` và `stash@{1}`, vì `apply` không xóa stash.

- **Xóa và áp dụng stash cụ thể với `pop`**:
    - Áp dụng và xóa `stash@{1}`:
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
      stash@{0}: Change in sample_test_file3.txt
      ```
    - **Giải thích**: `git stash pop stash@{1}` khôi phục thay đổi và xóa stash khỏi ngăn xếp.

- **Áp dụng stash chứa tệp không được theo dõi**:
    - Áp dụng `stash@{0}`:
      ```bash
      git stash pop
      ```
      Kết quả:
      ```
      On branch main
      Changes not staged for commit:
        modified:   sample_test_file1.txt
      Untracked files:
        sample_test_file3.txt
      Dropped stash@{0}
      ```
    - Kiểm tra tệp:
      ```bash
      cat sample_test_file3.txt
      ```
      Kết quả:
      ```
      This is stash lecture change for untracked files in file 3
      ```

### 2.5. Cam kết Thay đổi
- **Cam kết các thay đổi đã khôi phục**:
  ```bash
  git add .
  git commit -m "Restored stash changes including untracked files"
  git push origin main
  ```

- **Kiểm tra danh sách stash**:
  ```bash
  git stash list
  ```
  Kết quả: Không còn stash nào.

## 3. Các Lệnh Git Stash Quan trọng

- **Lưu stash với thông điệp**:
  ```bash
  git stash push -m "Thông điệp mô tả"
  ```
    - Bao gồm tệp không được theo dõi:
      ```bash
      git stash push -u -m "Thông điệp mô tả"
      ```

- **Xem danh sách stash**:
  ```bash
  git stash list
  ```

- **Xem nội dung stash**:
    - Tóm tắt:
      ```bash
      git stash show stash@{n}
      ```
    - Chi tiết:
      ```bash
      git stash show -p stash@{n}
      ```

- **Áp dụng stash cụ thể**:
  ```bash
  git stash apply stash@{n}
  ```

- **Xóa và áp dụng stash cụ thể**:
  ```bash
  git stash pop stash@{n}
  ```

- **Xóa stash cụ thể**:
  ```bash
  git stash drop stash@{n}
  ```

- **Xóa tất cả stash**:
  ```bash
  git stash clear
  ```

## 4. Thực tiễn hiện đại (Cập nhật 2025)

- **Sử dụng thông điệp stash**: Luôn thêm thông điệp để dễ nhận diện:
  ```bash
  git stash push -u -m "Lưu tính năng X và tệp mới"
  ```

- **Công cụ trực quan**:
    - Sử dụng Visual Studio Code với GitLens để xem danh sách stash và nội dung thay đổi trực quan.
    - Sử dụng `git difftool` để so sánh stash:
      ```bash
      git difftool stash@{0}^ stash@{0}
      ```

- **Tích hợp với GitHub**:
    - Đảm bảo đồng bộ hóa nhánh trước khi stash:
      ```bash
      git pull --rebase
      ```
    - Sử dụng GitHub CLI để kiểm tra trạng thái:
      ```bash
      gh repo sync
      ```

## 5. Tầm quan trọng của Quản lý Nhiều Stash

- **Tổ chức thay đổi**: Sử dụng thông điệp stash giúp dễ dàng nhận diện và quản lý nhiều bộ thay đổi.
- **Linh hoạt trong công việc**: Cho phép lưu trữ và khôi phục nhiều trạng thái công việc (bao gồm cả tệp không được theo dõi) mà không làm lộn xộn nhánh hiện tại.
- **Hỗ trợ làm việc nhóm**: Đảm bảo bạn có thể tạm dừng công việc, đồng bộ hóa với nhánh từ xa, và khôi phục thay đổi một cách chính xác.
- **Sự khác biệt giữa `apply` và `pop`**:
    - `git stash apply`: Giữ stash trong ngăn xếp, phù hợp khi cần thử nghiệm thay đổi.
    - `git stash pop`: Xóa stash sau khi khôi phục, phù hợp khi chắc chắn không cần stash nữa.

Bằng cách sử dụng các lệnh `git stash` với thông điệp, xem nội dung stash, và áp dụng/xóa stash cụ thể, bạn có thể quản lý nhiều bộ thay đổi một cách hiệu quả, đảm bảo quy trình phát triển linh hoạt và phù hợp với các tiêu chuẩn DevOps hiện đại!
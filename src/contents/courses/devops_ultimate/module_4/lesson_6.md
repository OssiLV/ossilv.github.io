---
course: devops_ultimate
module: module_4
title: "Hoàn tác Thay đổi trong Git: Git Revert và Git Reset"
order: 6
pubDate: 2025-06-25
updatedDate: 2025-06-25
---

## 1. Hoàn tác Thay đổi trong Git là gì?

Hoàn tác thay đổi trong Git có nghĩa là khôi phục trạng thái của kho lưu trữ về một thời điểm trước đó, loại bỏ các thay đổi không mong muốn. Có hai cách chính để thực hiện:

- **Git Reset**: Xóa các cam kết (commits) và đưa kho lưu trữ về trạng thái trước đó.
- **Git Revert**: Tạo một cam kết mới để hủy bỏ hiệu ứng của một cam kết trước đó mà không xóa lịch sử.

Mặc dù cả hai lệnh đều giúp hoàn tác thay đổi, cách tiếp cận và tác động của chúng khác nhau, và việc chọn lệnh phù hợp phụ thuộc vào bối cảnh.

## 2. Sự khác biệt giữa Git Reset và Git Revert

Hiểu rõ sự khác biệt giữa `git reset` và `git revert` là rất quan trọng để tránh mất dữ liệu hoặc gây rối lịch sử cam kết.

- **Git Reset**:

    - **Cách hoạt động**: Di chuyển con trỏ nhánh (branch pointer) về một cam kết trước đó, xóa các cam kết sau đó khỏi lịch sử.
    - **Tác động**:
        - Thay đổi lịch sử cam kết (commit history).
        - Có thể xóa cả nội dung tệp (tùy thuộc vào loại reset).
    - **Các loại reset**:
        - `--soft`: Chỉ xóa cam kết khỏi lịch sử, giữ lại các thay đổi trong khu vực staging và working directory.
        - `--hard`: Xóa cam kết và cả các thay đổi trong tệp, khôi phục hoàn toàn về trạng thái của cam kết được chỉ định.
    - **Khi sử dụng**:
        - Thích hợp cho các thay đổi chưa được đẩy (push) lên kho từ xa (remote repository).
        - Dùng khi bạn muốn hoàn tác các cam kết cục bộ mà không cần giữ lịch sử.

- **Git Revert**:

    - **Cách hoạt động**: Tạo một cam kết mới để hủy bỏ các thay đổi của một cam kết cụ thể, giữ nguyên lịch sử cam kết.
    - **Tác động**:
        - Không xóa lịch sử cam kết, mà thêm một cam kết mới để khôi phục trạng thái tệp.
        - An toàn hơn khi làm việc với kho từ xa đã được chia sẻ với nhóm.
    - **Khi sử dụng**:
        - Thích hợp khi các cam kết đã được đẩy lên kho từ xa.
        - Đảm bảo lịch sử cam kết được duy trì, hỗ trợ làm việc nhóm và quy trình GitHub.

- **Khi nào chọn gì?**:

    - Sử dụng `git revert` nếu cam kết đã được đẩy lên kho từ xa, vì việc xóa lịch sử bằng `git reset` có thể gây xung đột với các nhà phát triển khác.
    - Sử dụng `git reset` cho các thay đổi cục bộ chưa được đẩy, khi bạn muốn xóa hoàn toàn cam kết hoặc thay đổi mà không cần giữ lịch sử.

## 3. Thực hành Git Reset

Hãy thực hành `git reset` trong dự án `git_training_v3` để hoàn tác các cam kết cục bộ.

- **Kiểm tra trạng thái hiện tại**:

    - Điều hướng đến thư mục dự án:

      ```bash
      cd git_training_v3
      ```
    - Kiểm tra nhánh hiện tại:

      ```bash
      git branch
      ```

      Kết quả:

      ```
      * main
      ```
    - Liệt kê nội dung:

      ```bash
      ls
      ```

      Kết quả: `README.md sample_file_main1.txt sample_test_file1.txt sample_test_file2.txt test_file.txt`

- **Xem lịch sử cam kết**:

    - Chạy:

      ```bash
      git log --oneline
      ```

      Kết quả (ví dụ):

      ```
      v764 (HEAD -> main) Hợp nhất nhánh develop vào main
      f2fb35b Thêm tệp mẫu trên nhánh main
      7370 Thêm các tệp mẫu trên nhánh develop
      199173 Khởi tạo dự án
      ```

- **Tạo cam kết mới để thử nghiệm**:

    - Sửa đổi `sample_test_file1.txt`, thêm nội dung:

      ```
      Đây là tệp mẫu 1
      Testing reset commit 1
      ```
    - Sửa đổi `sample_test_file2.txt`, thêm nội dung:

      ```
      Đây là tệp mẫu 2
      Testing reset commit 2
      ```
    - Thêm và cam kết:

      ```bash
      git add .
      git commit -m "Commit reset 1"
      ```
    - Tạo một cam kết khác cho `sample_test_file2.txt`:

      ```bash
      git add sample_test_file2.txt
      git commit -m "Commit reset 2"
      ```
    - Kiểm tra lịch sử:

      ```bash
      git log --oneline
      ```

      Kết quả (ví dụ):

      ```
      4348840 (HEAD -> main) Commit reset 2
      f2fb35b Commit reset 1
      v764 Hợp nhất nhánh develop vào main
      7370 Thêm các tệp mẫu trên nhánh develop
      199173 Khởi tạo dự án
      ```

- **Thực hiện** `git reset --soft`:

    - Hoàn tác cam kết mới nhất (`4348840`):

      ```bash
      git reset --soft f2fb35b
      ```
    - Kiểm tra lịch sử:

      ```bash
      git log --oneline
      ```

      Kết quả:

      ```
      f2fb35b (HEAD -> main) Commit reset 1
      v764 Hợp nhất nhánh develop vào main
      7370 Thêm các tệp mẫu trên nhánh develop
      199173 Khởi tạo dự án
      ```
    - Kiểm tra trạng thái:

      ```bash
      git status
      ```

      Kết quả:

      ```
      On branch main
      Changes to be committed:
        modified:   sample_test_file2.txt
      ```

      **Giải thích**: `--soft` xóa cam kết `4348840` khỏi lịch sử nhưng giữ các thay đổi trong tệp (`Testing reset commit 2`) trong khu vực staging.

- **Thực hiện** `git reset --hard`:

    - Hoàn tác cam kết `f2fb35b` và xóa cả thay đổi trong tệp:

      ```bash
      git reset --hard v764
      ```
    - Kiểm tra lịch sử:

      ```bash
      git log --oneline
      ```

      Kết quả:

      ```
      v764 (HEAD -> main) Hợp nhất nhánh develop vào main
      7370 Thêm các tệp mẫu trên nhánh develop
      199173 Khởi tạo dự án
      ```
    - Kiểm tra nội dung tệp:

      ```bash
      cat sample_test_file1.txt
      ```

      Kết quả:

      ```
      Đây là tệp mẫu 1
      ```

      ```bash
      cat sample_test_file2.txt
      ```

      Kết quả:

      ```
      Đây là tệp mẫu 2
      ```

      **Giải thích**: `--hard` xóa cam kết `f2fb35b` và các thay đổi trong tệp (`Testing reset commit 1` và `Testing reset commit 2`), khôi phục trạng thái về cam kết `v764`.

## 4. Thực hành Git Revert

Bây giờ, hãy thực hành `git revert` để hoàn tác các thay đổi đã được đẩy lên kho từ xa.

- **Tạo cam kết mới và đẩy lên GitHub**:

    - Sửa đổi `sample_test_file1.txt`, thêm nội dung:

      ```
      Đây là tệp mẫu 1
      Git revert change 1
      ```
    - Sửa đổi `sample_test_file2.txt`, thêm nội dung:

      ```
      Đây là tệp mẫu 2
      Git revert change 2
      ```
    - Thêm và cam kết:

      ```bash
      git add .
      git commit -m "Commit revert 1"
      ```
    - Đẩy lên GitHub:

      ```bash
      git push origin main
      ```
    - Kiểm tra lịch sử:

      ```bash
      git log --oneline
      ```

      Kết quả (ví dụ):

      ```
      abc1234 (HEAD -> main, origin/main) Commit revert 1
      v764 Hợp nhất nhánh develop vào main
      7370 Thêm các tệp mẫu trên nhánh develop
      199173 Khởi tạo dự án
      ```

- **Kiểm tra trên GitHub**:

    - Truy cập kho `git_training_v3` trên GitHub (`https://github.com/username/git_training_v3`).
    - Xem nhánh `main`: Các tệp `sample_test_file1.txt` và `sample_test_file2.txt` có nội dung mới (`Git revert change 1` và `Git revert change 2`).

- **Thực hiện** `git revert`:

    - Hoàn tác cam kết mới nhất (`abc1234`):

      ```bash
      git revert HEAD
      ```
    - Git sẽ mở trình soạn thảo (như `vim`) để nhập thông điệp cam kết. Nhấn `i` để chỉnh sửa, nhập thông điệp (ví dụ: `Revert commit revert 1`), sau đó nhấn `Esc`, gõ `:wq` và nhấn Enter để lưu.
    - Kiểm tra lịch sử:

      ```bash
      git log --oneline
      ```

      Kết quả (ví dụ):

      ```
      def5678 (HEAD -> main) Revert commit revert 1
      abc1234 Commit revert 1
      v764 Hợp nhất nhánh develop vào main
      7370 Thêm các tệp mẫu trên nhánh develop
      199173 Khởi tạo dự án
      ```
    - Kiểm tra nội dung tệp:

      ```bash
      cat sample_test_file1.txt
      ```

      Kết quả:

      ```
      Đây là tệp mẫu 1
      ```

      ```bash
      cat sample_test_file2.txt
      ```

      Kết quả:

      ```
      Đây là tệp mẫu 2
      ```

      **Giải thích**: `git revert` tạo một cam kết mới (`def5678`) để hủy bỏ các thay đổi của cam kết `abc1234`, khôi phục nội dung tệp về trạng thái trước đó.

- **Đẩy cam kết revert lên GitHub**:

    - Chạy:

      ```bash
      git push origin main
      ```
    - Kiểm tra trên GitHub:
        - Xem tab **Commits**: Cam kết mới nhất là `Revert commit revert 1`, với các thay đổi hủy bỏ nội dung `Git revert change 1` và `Git revert change 2`.

## 5. Thực tiễn hiện đại (Cập nhật 2025)

- **Sử dụng** `git revert` **trong quy trình làm việc nhóm**:

    - Khi làm việc với kho từ xa được chia sẻ, `git revert` là lựa chọn an toàn vì nó không xóa lịch sử, tránh gây rối cho các nhà phát triển khác.
    - Sử dụng Pull Requests để xem xét các cam kết `revert` trước khi hợp nhất vào nhánh chính.

- **Quản lý xung đột**:

    - Nếu `git revert` hoặc `git reset` gây xung đột (merge conflicts), sử dụng công cụ như Visual Studio Code để giải quyết:

      ```bash
      git mergetool
      ```

- **Công cụ hỗ trợ**:

    - Sử dụng **GitHub CLI** để thực hiện revert:

      ```bash
      gh pr create --title "Revert commit revert 1" --body "Hoàn tác cam kết không mong muốn"
      ```

## 6. Tầm quan trọng của Git Revert và Git Reset

- **Git Reset**:
    - Hữu ích cho các thay đổi cục bộ chưa được chia sẻ.
    - Cẩn thận với `--hard`, vì nó xóa cả nội dung tệp, có thể dẫn đến mất dữ liệu nếu không được sao lưu.
- **Git Revert**:
    - Lý tưởng cho kho từ xa, giữ lịch sử cam kết để đảm bảo minh bạch và dễ dàng theo dõi.
    - Hỗ trợ quy trình làm việc nhóm, đặc biệt trong các dự án lớn.
- **Hiểu rõ mục đích**:
    - Sử dụng `git reset --soft` để giữ lại thay đổi trong tệp nhưng xóa cam kết.
    - Sử dụng `git reset --hard` khi muốn xóa hoàn toàn cam kết và thay đổi.
    - Sử dụng `git revert` để hoàn tác một cách an toàn và chuyên nghiệp trong môi trường cộng tác.

Bằng cách sử dụng `git revert` và `git reset` một cách phù hợp, bạn có thể quản lý và hoàn tác các thay đổi trong Git một cách hiệu quả, đảm bảo quy trình phát triển mượt mà và phù hợp với các tiêu chuẩn DevOps hiện đại!
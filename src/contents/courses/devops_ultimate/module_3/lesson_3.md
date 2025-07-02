---
course: devops_ultimate
module: module_3
title: " Commit mã vào Git"
order: 3
pubDate: 2025-06-26
updatedDate: 2025-06-26
---

## 1. Kiểm tra trạng thái thư mục làm việc

Trước khi bắt đầu cam kết mã, bạn cần kiểm tra trạng thái của thư mục làm việc (working directory) để hiểu những gì đang xảy ra trong kho Git.

- **Mở terminal hoặc Git Bash**:

    - Trên Linux/Mac, sử dụng terminal.
    - Trên Windows, sử dụng Git Bash để thực hiện các lệnh Git.

- **Kiểm tra thư mục hiện tại**:

    - Chạy lệnh sau để xem bạn đang ở đâu:

      ```bash
      pwd
      ```

      Ví dụ: Nếu bạn đang ở trong thư mục `git_training_v1`, kết quả sẽ là `/home/user/git_training_v1` (Linux/Mac) hoặc `C:\Users\YourName\git_training_v1` (Windows).

- **Liệt kê nội dung thư mục**:

    - Chạy lệnh:

      ```bash
      ls
      ```

      hoặc trên Windows (Git Bash):

      ```bash
      dir
      ```

      Nếu thư mục `git_training_v1` rỗng, bạn sẽ không thấy tệp nào được liệt kê.

- **Kiểm tra trạng thái Git**:

    - Chạy lệnh:

      ```bash
      git status
      ```

      Nếu chưa có tệp nào được theo dõi, bạn sẽ thấy thông báo như:

      ```
      On branch main
      No commits yet
      nothing to commit (create/copy files and use "git add" to track)
      ```

      **Lưu ý**: Nhánh mặc định hiện nay thường là `main` thay vì `master` (theo tiêu chuẩn từ năm 2020). Nếu kho của bạn vẫn sử dụng nhánh `master`, bạn có thể đổi sang `main` bằng lệnh:

      ```bash
      git branch -M main
      ```

## 2. Hiểu về Git Commit

Cam kết (commit) trong Git là quá trình lưu lại các thay đổi từ thư mục làm việc vào cơ sở dữ liệu Git. Dưới đây là các khái niệm cơ bản:

- **Thư mục làm việc (Working Directory)**: Đây là thư mục dự án của bạn (ví dụ: `git_training_v1`), nơi chứa các tệp mã nguồn hoặc tài liệu.
- **Khu vực staging (Staging Area)**: Đây là nơi bạn chuẩn bị các tệp trước khi cam kết. Các tệp trong staging area sẽ được Git theo dõi khi bạn thực hiện commit.
- **Git Commit**: Lệnh `git commit` chuyển các thay đổi từ khu vực staging vào cơ sở dữ liệu Git, tạo ra một bản ghi (commit) với lịch sử thay đổi.

## 3. Tạo và thêm tệp vào Git

Để minh họa quá trình cam kết, chúng ta sẽ tạo một tệp mới và thêm nó vào Git.

- **Tạo một tệp mới**:

    - Trong thư mục dự án (`git_training_v1`), tạo một tệp mới, ví dụ: `first_file.txt`. Bạn có thể làm điều này bằng cách:
        - Sử dụng trình chỉnh sửa văn bản (như VS Code, Notepad) hoặc lệnh terminal:

          ```bash
          touch first_file.txt
          ```
        - Mở tệp và thêm nội dung, ví dụ:

          ```
          Đây là tệp đầu tiên của tôi.
          ```
        - Lưu tệp.

- **Kiểm tra trạng thái**:

    - Chạy lệnh:

      ```bash
      git status
      ```

      Kết quả sẽ hiển thị:

      ```
      On branch main
      No commits yet
      Untracked files:
        (use "git add <file>..." to include in what will be committed)
          first_file.txt
      ```

      Tệp `first_file.txt` được liệt kê là **untracked** (chưa được Git theo dõi).

- **Thêm tệp vào khu vực staging**:

    - Để Git bắt đầu theo dõi tệp, chạy lệnh:

      ```bash
      git add first_file.txt
      ```
    - Kiểm tra lại trạng thái:

      ```bash
      git status
      ```

      Kết quả sẽ hiển thị:

      ```
      On branch main
      No commits yet
      Changes to be committed:
        (use "git rm --cached <file>..." to unstage)
          new file:   first_file.txt
      ```

      Tệp giờ đây đã ở trong khu vực staging, sẵn sàng để cam kết.

- **Thêm tất cả các tệp**:

    - Nếu bạn có nhiều tệp cần thêm, bạn có thể thêm tất cả cùng lúc bằng:

      ```bash
      git add .
      ```

      Lệnh này thêm tất cả các tệp (bao gồm cả tệp mới và tệp đã chỉnh sửa) trong thư mục hiện tại vào khu vực staging.

## 4. Thực hiện cam kết (Commit)

Sau khi thêm tệp vào khu vực staging, bạn có thể cam kết chúng vào kho Git.

- **Cam kết với thông điệp**:

    - Chạy lệnh:

      ```bash
      git commit -m "Cam kết tệp đầu tiên"
      ```
        - `-m` cho phép bạn thêm một thông điệp mô tả mục đích của commit. Thông điệp nên ngắn gọn nhưng rõ ràng, ví dụ: "Thêm tệp first_file.txt" hoặc "Cập nhật nội dung ban đầu".
    - Kết quả sẽ hiển thị:

      ```
      [main (root-commit) abc1234] Cam kết tệp đầu tiên
       1 file changed, 1 insertion(+)
       create mode 100644 first_file.txt
      ```

- **Kiểm tra trạng thái sau commit**:

    - Chạy lại:

      ```bash
      git status
      ```

      Kết quả sẽ là:

      ```
      On branch main
      nothing to commit, working tree clean
      ```

      Điều này cho thấy thư mục làm việc và khu vực staging đang "sạch" (không có thay đổi nào cần cam kết).

## 5. Theo dõi và kiểm tra thay đổi

Sau khi cam kết, nếu bạn chỉnh sửa tệp, Git sẽ theo dõi các thay đổi.

- **Chỉnh sửa tệp**:

    - Mở `first_file.txt` và thêm nội dung mới, ví dụ:

      ```
      Đây là tệp đầu tiên của tôi.
      Hãy là sự thay đổi mà bạn muốn thấy.
      ```
    - Lưu tệp.

- **Kiểm tra trạng thái**:

    - Chạy:

      ```bash
      git status
      ```

      Kết quả sẽ hiển thị:

      ```
      On branch main
      Changes not staged for commit:
        (use "git add <file>..." to update what will be committed)
        modified:   first_file.txt
      ```

      Git nhận ra rằng `first_file.txt` đã bị chỉnh sửa.

- **Xem sự khác biệt**:

    - Để xem chi tiết những thay đổi trong tệp, chạy:

      ```bash
      git diff
      ```

      Kết quả sẽ hiển thị:

      ```
      diff --git a/first_file.txt b/first_file.txt
      index abc123..def456 100644
      --- a/first_file.txt
      +++ b/first_file.txt
      @@ -1 +1,2 @@
       Đây là tệp đầu tiên của tôi.
      +Hãy là sự thay đổi mà bạn muốn thấy.
      ```

      Dấu `+` biểu thị dòng được thêm vào.

- **Cam kết thay đổi mới**:

    - Thêm tệp đã chỉnh sửa vào khu vực staging:

      ```bash
      git add first_file.txt
      ```
    - Cam kết thay đổi:

      ```bash
      git commit -m "Thêm dòng mới vào first_file.txt"
      ```

      Kết quả:

      ```
      [main def4567] Thêm dòng mới vào first_file.txt
       1 file changed, 1 insertion(+)
      ```

## 6. Thực tiễn hiện đại (Cập nhật 2025)

Dưới đây là các cập nhật để phù hợp với DevOps hiện đại:

- **Thông điệp commit rõ ràng**:

    - Sử dụng thông điệp commit theo chuẩn Conventional Commits (ví dụ: `feat: thêm tính năng mới`, `fix: sửa lỗi giao diện`). Điều này giúp các công cụ như Semantic Release tự động hóa việc tạo phiên bản.
    - Ví dụ:

      ```bash
      git commit -m "feat: thêm tệp first_file.txt với nội dung ban đầu"
      ```

- **Tích hợp với CI/CD**:

    - Trong các dự án hiện đại, sau khi cam kết, mã thường được đẩy (push) lên kho từ xa (như GitHub, GitLab) để chạy các pipeline CI/CD. Ví dụ:

      ```bash
      git push origin main
      ```
    - Các công cụ như GitHub Actions hoặc GitLab CI/CD có thể tự động kiểm tra mã, chạy thử nghiệm, hoặc triển khai.

- **Sử dụng công cụ hỗ trợ**:

    - Các trình chỉnh sửa như Visual Studio Code tích hợp Git với giao diện đồ họa, giúp dễ dàng xem trạng thái, thêm tệp, và cam kết mà không cần dùng terminal.
    - Các lệnh như `git log --oneline` hoặc `git log --graph` có thể giúp bạn xem lịch sử commit một cách trực quan.

## 7. Tầm quan trọng của Git trong DevOps

Git là một công cụ mạnh mẽ để quản lý mã nguồn, đặc biệt trong các dự án lớn:

- **Theo dõi thay đổi**: Git giúp bạn biết chính xác những gì đã thay đổi trong mã nguồn, ai đã thay đổi, và khi nào.
- **Hỗ trợ làm việc nhóm**: Nhiều nhà phát triển có thể làm việc trên cùng một dự án mà không xung đột, nhờ các nhánh (branches) và lệnh merge.
- **Hỗ trợ dự án lớn**: Trong các dự án có hàng nghìn tệp, các lệnh như `git status` và `git diff` giúp bạn dễ dàng xác định và xem xét các thay đổi trước khi cam kết.

Bằng cách thực hiện các bước trên, bạn đã học cách sử dụng `git add`, `git commit`, `git status`, và `git diff` để quản lý và theo dõi mã nguồn trong Git!
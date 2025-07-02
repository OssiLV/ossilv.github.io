---
course: devops_ultimate
module: module_3
title: "Theo dõi (Tracking) Tệp và Xem Nhật ký (Log) Git"
order: 4
pubDate: 2025-06-26
updatedDate: 2025-06-26
---

## 1. Theo dõi Tệp trong Git
Git cho phép bạn theo dõi các tệp trong dự án, giúp quản lý các thay đổi và đảm bảo mọi thứ được lưu trữ đúng cách trong kho Git.

- **Kiểm tra thư mục làm việc**:
    - Mở terminal (trên Linux/Mac) hoặc Git Bash (trên Windows).
    - Đảm bảo bạn đang ở trong thư mục dự án, ví dụ: `git_training_v1`. Kiểm tra bằng lệnh:
      ```bash
      pwd
      ```
      Kết quả sẽ hiển thị đường dẫn, ví dụ: `/home/user/git_training_v1` (Linux/Mac) hoặc `C:\Users\YourName\git_training_v1` (Windows).

- **Liệt kê nội dung thư mục**:
    - Chạy lệnh:
      ```bash
      ls
      ```
      hoặc trên Windows (Git Bash):
      ```bash
      dir
      ```
      Giả sử bạn đã có tệp `first_file.txt` từ các bài học trước. Bây giờ, chúng ta sẽ tạo thêm một tệp mới.

- **Tạo tệp mới**:
    - Tạo một tệp mới, ví dụ: `second_file.txt`, bằng lệnh:
      ```bash
      touch second_file.txt
      ```
    - Kiểm tra lại nội dung thư mục:
      ```bash
      ls
      ```
      Kết quả sẽ hiển thị: `first_file.txt  second_file.txt`.

- **Chỉnh sửa tệp hiện có**:
    - Mở tệp `first_file.txt` và thêm nội dung mới, ví dụ:
      ```
      Đây là tệp đầu tiên của tôi.
      Hãy là sự thay đổi mà bạn muốn thấy.
      Đây là câu lệnh giả lập để kiểm tra.
      ```
    - Lưu tệp.

- **Kiểm tra trạng thái Git**:
    - Chạy lệnh:
      ```bash
      git status
      ```
      Kết quả sẽ hiển thị:
      ```
      On branch main
      Changes not staged for commit:
        (use "git add <file>..." to update what will be committed)
        modified:   first_file.txt
      Untracked files:
        (use "git add <file>..." to include in what will be committed)
          second_file.txt
      ```
        - `first_file.txt` được liệt kê là **modified** (đã chỉnh sửa) vì nó đã được Git theo dõi từ trước.
        - `second_file.txt` được liệt kê là **untracked** (chưa được theo dõi) vì đây là tệp mới.

- **Hiểu về theo dõi tệp**:
    - Các tệp mới hoặc thư mục được thêm vào thư mục làm việc **không tự động** được Git theo dõi. Bạn cần thêm chúng vào khu vực staging để Git bắt đầu quản lý.
    - Để thêm tệp vào khu vực staging, sử dụng:
      ```bash
      git add second_file.txt
      ```
      hoặc để thêm tất cả các tệp:
      ```bash
      git add .
      ```

- **Kiểm tra lại trạng thái**:
    - Sau khi thêm tệp, chạy lại:
      ```bash
      git status
      ```
      Kết quả sẽ hiển thị:
      ```
      On branch main
      Changes to be committed:
        (use "git restore --staged <file>..." to unstage)
          modified:   first_file.txt
          new file:   second_file.txt
      ```
      Cả hai tệp giờ đây đều nằm trong khu vực staging, sẵn sàng để cam kết.

- **Cam kết các thay đổi**:
    - Chạy lệnh:
      ```bash
      git commit -m "Thêm second_file.txt và cập nhật first_file.txt"
      ```
      Kết quả sẽ hiển thị thông tin về cam kết, ví dụ:
      ```
      [main abc1234] Thêm second_file.txt và cập nhật first_file.txt
       2 files changed, 3 insertions(+), 0 deletions(-)
       create mode 100644 second_file.txt
      ```
    - Kiểm tra trạng thái sau cam kết:
      ```bash
      git status
      ```
      Kết quả sẽ là:
      ```
      On branch main
      nothing to commit, working tree clean
      ```
      Điều này cho thấy thư mục làm việc và khu vực staging đang "sạch" (không có thay đổi nào cần cam kết).

## 2. Sử dụng Git Log để Xem Lịch sử Cam kết
Lệnh `git log` cho phép bạn xem lịch sử các cam kết trong kho Git, bao gồm thông tin chi tiết như ID cam kết, tác giả, ngày giờ, và thông điệp cam kết.

- **Chạy lệnh Git Log**:
    - Chạy:
      ```bash
      git log
      ```
      Kết quả sẽ hiển thị danh sách các cam kết, ví dụ:
      ```
      commit abc1234567890abcdef1234567890abcdef123 (HEAD -> main)
      Author: Anshul Johanne <anshul@example.com>
      Date:   Sat Feb 27 14:30:00 2021 +0000
  
          Thêm second_file.txt và cập nhật first_file.txt
  
      commit def4567890abcdef1234567890abcdef1234
      Author: Anshul Johanne <anshul@example.com>
      Date:   Sat Feb 27 14:00:00 2021 +0000
  
          Cam kết tệp đầu tiên
      ```
      Mỗi cam kết bao gồm:
        - **Commit ID**: Một chuỗi mã duy nhất (SHA-1 hash) để xác định cam kết.
        - **Author**: Tên và email của người thực hiện cam kết (được cấu hình bằng `git config`).
        - **Date**: Ngày và giờ cam kết.
        - **Message**: Thông điệp mô tả mục đích của cam kết.

- **Lợi ích của Git Log**:
    - Giúp bạn theo dõi lịch sử thay đổi của dự án.
    - Hữu ích trong các dự án lớn với nhiều nhà phát triển, nơi bạn cần biết ai đã thực hiện thay đổi nào và khi nào.

## 3. Lọc Nhật ký Git
Trong các dự án lớn, có thể có hàng trăm hoặc hàng nghìn cam kết từ nhiều nhà phát triển. Git cung cấp các bộ lọc để tìm kiếm cam kết cụ thể.

- **Lọc theo tác giả**:
    - Để xem các cam kết của một tác giả cụ thể, sử dụng:
      ```bash
      git log --author="Anshul Johanne"
      ```
      Kết quả sẽ chỉ hiển thị các cam kết của tác giả có tên "Anshul Johanne".
    - Bạn cũng có thể lọc bằng email:
      ```bash
      git log --author="anshul@example.com"
      ```
      Kết quả tương tự, hiển thị các cam kết của tác giả với email này.

- **Lọc không tìm thấy**:
    - Nếu bạn tìm kiếm một tác giả không tồn tại, ví dụ:
      ```bash
      git log --author="Matt Leo"
      ```
      Git sẽ không trả về kết quả nào, vì không có cam kết nào từ tác giả này.

- **Lưu ý về cấu hình tác giả**:
    - Tên và email của tác giả được lấy từ cấu hình Git toàn cục, được thiết lập bằng:
      ```bash
      git config --global user.name "Your Name"
      git config --global user.email "your.email@example.com"
      ```
    - Việc cấu hình này rất quan trọng, đặc biệt trong các dự án nhóm, để xác định ai đã thực hiện các thay đổi.

## 4. Thực tiễn hiện đại (Cập nhật 2025)
Dưới đây là các cập nhật để phù hợp với DevOps hiện đại:

- **Sử dụng nhánh `main`**:
    - Nhánh mặc định hiện nay thường là `main` thay vì `master`. Đảm bảo bạn đang làm việc trên nhánh `main` bằng:
      ```bash
      git branch -M main
      ```

- **Các tùy chọn Git Log nâng cao**:
    - Để xem lịch sử cam kết một cách ngắn gọn:
      ```bash
      git log --oneline
      ```
      Kết quả hiển thị mỗi cam kết trên một dòng, ví dụ:
      ```
      abc1234 Thêm second_file.txt và cập nhật first_file.txt
      def4567 Cam kết tệp đầu tiên
      ```
    - Để xem lịch sử dưới dạng đồ thị (hữu ích khi làm việc với nhiều nhánh):
      ```bash
      git log --graph --oneline --all
      ```

- **Tích hợp với công cụ hiện đại**:
    - Các nền tảng như GitHub, GitLab, hoặc Bitbucket cung cấp giao diện trực quan để xem lịch sử cam kết, thay vì chỉ dùng `git log` trên terminal.
    - Các công cụ CI/CD như GitHub Actions hoặc GitLab CI/CD có thể sử dụng thông tin từ `git log` để tự động hóa quy trình kiểm tra và triển khai.

- **Bảo mật thông tin tác giả**:
    - Trong các dự án hiện đại, việc sử dụng email thực và tên chính xác trong `git config` là cần thiết để đảm bảo tính minh bạch và bảo mật. Một số tổ chức sử dụng GPG signing để xác minh cam kết:
      ```bash
      git commit -S -m "Cam kết có chữ ký"
      ```

## 5. Tầm quan trọng của Theo dõi và Nhật ký Git
- **Theo dõi tệp**: Lệnh `git status` và `git add` giúp bạn quản lý các tệp trong dự án, đảm bảo chỉ những thay đổi cần thiết được cam kết.
- **Nhật ký Git**: Lệnh `git log` cung cấp cái nhìn tổng quan về lịch sử dự án, giúp bạn theo dõi tiến trình phát triển và xác định các thay đổi cụ thể, đặc biệt trong các dự án nhóm lớn.
- **Hỗ trợ làm việc nhóm**: Các bộ lọc như `--author` giúp bạn dễ dàng tìm kiếm đóng góp của một cá nhân trong số hàng trăm nhà phát triển.

Bằng cách sử dụng các lệnh như `git status`, `git add`, `git commit`, và `git log`, bạn có thể quản lý hiệu quả các tệp và theo dõi lịch sử thay đổi trong dự án Git của mình!
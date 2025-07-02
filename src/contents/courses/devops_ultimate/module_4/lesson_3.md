---
course: devops_ultimate
module: module_4
title: "Thiết lập Xác thực giữa Máy Cục bộ và Tài khoản GitHub"
order: 3
pubDate: 2025-06-25
updatedDate: 2025-06-25
---

## 1. Vấn đề với Xác thực Dựa trên Tên Người dùng và Mật khẩu

Khi thực hiện lệnh `git push` để đẩy mã lên GitHub, bạn có thể được yêu cầu nhập tên người dùng và mật khẩu (hoặc Personal Access Token - PAT). Điều này trở nên bất tiện nếu bạn đẩy mã nhiều lần trong ngày. Giải pháp là thiết lập xác thực tự động bằng khóa SSH, cho phép GitHub nhận diện máy cục bộ của bạn mà không cần nhập thông tin xác thực mỗi lần.

## 2. Tạo và Thêm Khóa SSH vào GitHub

Dưới đây là các bước chi tiết để tạo khóa SSH và thêm nó vào tài khoản GitHub.

- **Kiểm tra khóa SSH hiện có**:

    - Mở terminal (Linux/Mac) hoặc Git Bash (Windows).
    - Kiểm tra xem máy của bạn đã có khóa SSH hay chưa:

      ```bash
      ls -al ~/.ssh
      ```

      Nếu thấy các tệp như `id_rsa`, `id_ed25519`, hoặc `id_ed25519.pub`, bạn đã có khóa SSH. Nếu không, tiến hành tạo khóa mới.

- **Tạo khóa SSH mới**:

    - Chạy lệnh sau để tạo khóa SSH (thay `your.email@example.com` bằng email liên kết với tài khoản GitHub của bạn):

      ```bash
      ssh-keygen -t ed25519 -C "your.email@example.com"
      ```
        - **Lưu ý**: Nếu hệ thống của bạn không hỗ trợ `ed25519`, sử dụng `rsa`:

          ```bash
          ssh-keygen -t rsa -b 4096 -C "your.email@example.com"
          ```
    - Khi được hỏi về vị trí lưu khóa:
        - Nhấn **Enter** để sử dụng vị trí mặc định (`~/.ssh/id_ed25519` hoặc `~/.ssh/id_rsa`).
    - Khi được hỏi về passphrase:
        - Nhấn **Enter** để bỏ qua (không sử dụng passphrase) hoặc nhập passphrase để tăng cường bảo mật (nhưng bạn sẽ cần nhập passphrase khi sử dụng khóa).
    - Kết quả: Hai tệp được tạo:
        - Khóa riêng (private key): `~/.ssh/id_ed25519`.
        - Khóa công khai (public key): `~/.ssh/id_ed25519.pub`.

- **Hiển thị khóa công khai**:

    - Xem nội dung khóa công khai:

      ```bash
      cat ~/.ssh/id_ed25519.pub
      ```
    - Sao chép toàn bộ nội dung khóa công khai (bắt đầu bằng `ssh-ed25519` và kết thúc bằng email của bạn).

- **Thêm khóa SSH vào GitHub**:

    - Truy cập github.com và đăng nhập.
    - Vào **Settings** (Cài đặt) &gt; **SSH and GPG keys** &gt; **New SSH key** hoặc **Add SSH key**.
    - Điền thông tin:
        - **Title**: Đặt tên cho khóa, ví dụ: `MacBook SSH Key`.
        - **Key type**: Chọn **Authentication Key**.
        - **Key**: Dán nội dung khóa công khai đã sao chép.
    - Nhấp vào **Add SSH key** để lưu.

## 3. Kiểm tra Kết nối SSH

Sau khi thêm khóa SSH, bạn cần kiểm tra xem kết nối giữa máy cục bộ và GitHub có hoạt động hay không.

- **Kiểm tra kết nối**:

    - Chạy lệnh:

      ```bash
      ssh -T git@github.com
      ```
    - Kết quả mong đợi:

      ```
      Hi username! You've successfully authenticated, but GitHub does not provide shell access.
      ```

      Điều này xác nhận rằng kết nối SSH đã được thiết lập thành công.

- **Lưu ý cho người dùng Windows**:

    - Luôn sử dụng **Git Bash** thay vì Command Prompt để chạy các lệnh SSH, vì Command Prompt không hỗ trợ đầy đủ các lệnh SSH.

## 4. Cấu hình Kho Cục bộ để Sử dụng SSH

Để sử dụng SSH cho các thao tác Git, bạn cần cập nhật URL của kho từ xa từ HTTPS sang SSH.

- **Kiểm tra URL hiện tại**:

    - Trong thư mục dự án (`git_training_v3`), chạy:

      ```bash
      git remote -v
      ```

      Kết quả sẽ hiển thị URL, ví dụ:

      ```
      origin  https://github.com/username/git_training_v3.git (fetch)
      origin  https://github.com/username/git_training_v3.git (push)
      ```

- **Chuyển sang SSH**:

    - Cập nhật URL kho từ xa:

      ```bash
      git remote set-url origin git@github.com:username/git_training_v3.git
      ```
    - Kiểm tra lại:

      ```bash
      git remote -v
      ```

      Kết quả:

      ```
      origin  git@github.com:username/git_training_v3.git (fetch)
      origin  git@github.com:username/git_training_v3.git (push)
      ```

## 5. Thử Đẩy Mã với Xác thực SSH

Sau khi thiết lập SSH, bạn có thể đẩy mã mà không cần nhập tên người dùng hoặc mật khẩu.

- **Chỉnh sửa tệp**:

    - Trong thư mục dự án (`git_training_v3`), mở tệp `test_file.txt` và thêm nội dung mới:

      ```
      Đây là tệp kiểm tra cho mục đích tải xuống mẫu.
      Đây là cam kết khác từ máy cục bộ.
      Đây là kết nối SSH.
      ```
    - Lưu tệp.

- **Kiểm tra trạng thái**:

    - Chạy:

      ```bash
      git status
      ```

      Kết quả:

      ```
      On branch main
      Changes not staged for commit:
        modified:   test_file.txt
      ```

- **Cam kết thay đổi**:

    - Thêm và cam kết:

      ```bash
      git add test_file.txt
      git commit -m "Cập nhật test_file.txt với kết nối SSH"
      ```

      Hoặc sử dụng lệnh kết hợp:

      ```bash
      git commit -am "Cập nhật test_file.txt với kết nối SSH"
      ```

      **Lưu ý**: Lệnh `-am` chỉ hoạt động với các tệp đã được theo dõi (tracked). Các tệp mới (untracked) cần được thêm bằng `git add` trước.

- **Đẩy mã lên GitHub**:

    - Chạy:

      ```bash
      git push origin main
      ```
    - Nếu SSH được thiết lập đúng, lệnh này sẽ chạy mà không yêu cầu tên người dùng hoặc mật khẩu.

## 6. Xác thực với Kho Private

- **Kho công khai (Public Repository)**:
    - Với kho công khai, bạn không cần xác thực khi kéo mã (`git pull`), nhưng cần xác thực khi đẩy mã (`git push`). SSH giúp tự động hóa quá trình này.
- **Kho riêng tư (Private Repository)**:
    - Cả `git pull` và `git push` đều yêu cầu xác thực. Đảm bảo bạn được thêm vào danh sách cộng tác viên (collaborators) của kho.

## 7. Thực tiễn hiện đại (Cập nhật 2025)

Các phương pháp xác thực và thực tiễn GitHub đã được cải thiện:

- **Bỏ xác thực bằng mật khẩu**:
    - Từ năm 2021, GitHub không còn hỗ trợ xác thực bằng tên người dùng và mật khẩu cho các thao tác Git. Thay vào đó, sử dụng:
        - **Personal Access Token (PAT)** cho HTTPS.
        - **SSH keys** (khuyến nghị) cho xác thực an toàn và tiện lợi.
- **Sử dụng GitHub CLI**:
    - GitHub CLI (`gh`) cung cấp cách xác thực dễ dàng:

      ```bash
      gh auth login
      ```

      Lệnh này hướng dẫn bạn đăng nhập và thiết lập xác thực (HTTPS hoặc SSH) qua giao diện dòng lệnh.
- **Xác thực hai yếu tố (2FA)**:
    - GitHub yêu cầu 2FA cho tài khoản để tăng cường bảo mật. Đảm bảo bạn đã kích hoạt 2FA trong **Settings** &gt; **Security**.
- **Quản lý khóa SSH**:
    - Kiểm tra và xóa khóa SSH cũ hoặc không sử dụng trong **Settings** &gt; **SSH and GPG keys** để tránh xung đột.
    - Sử dụng khóa `ed25519` thay vì `rsa` vì nó an toàn hơn và được hỗ trợ rộng rãi.

## 8. Tầm quan trọng của Xác thực SSH

- **Tiện lợi**: Xác thực SSH loại bỏ nhu cầu nhập thông tin xác thực mỗi khi đẩy hoặc kéo mã.
- **Bảo mật**: Khóa SSH cung cấp phương pháp xác thực an toàn hơn so với tên người dùng/mật khẩu hoặc PAT.
- **Hiệu quả**: Trong các dự án lớn, nơi bạn có thể đẩy mã nhiều lần mỗi ngày, SSH giúp tiết kiệm thời gian và giảm rủi ro lỗi nhập liệu.

Bằng cách thiết lập xác thực SSH, bạn đã tạo ra một quy trình làm việc mượt mà giữa máy cục bộ và GitHub, sẵn sàng cho các dự án DevOps hiệu quả và an toàn!
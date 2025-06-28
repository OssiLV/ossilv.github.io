---
course: devpops_ultimate
module: module_4
title: "Tạo Kho Lưu Trữ Từ Xa trên GitHub và Đồng Bộ với Máy Cục Bộ"
order: 2
pubDate: 2025-06-25
updatedDate: 2025-06-25
---
## 1. Tạo Kho Lưu Trữ Từ Xa trên GitHub

### 1.1. Đăng nhập vào GitHub

- Truy cập GitHub và đăng nhập vào tài khoản của bạn.
- Nếu chưa có tài khoản, hãy tạo một tài khoản miễn phí trước khi tiếp tục.

### 1.2. Tạo Kho Mới

- **Bắt đầu tạo kho**:

    - Trên trang chính của GitHub, nhấp vào nút **New** (màu xanh lá) hoặc biểu tượng **+** ở góc trên bên phải và chọn **New repository**.

- **Cấu hình kho**:

    - **Tên kho**: Đặt tên duy nhất, ví dụ: `git_training_v3`.
    - **Mô tả (Description)**: (Tùy chọn) Thêm mô tả, ví dụ: `Đây là kho lưu trữ cho mục đích đào tạo Git và GitHub`.
    - **Loại kho**:
        - **Public**: Bất kỳ ai trên internet đều có thể xem kho, nhưng chỉ những người được cấp quyền mới có thể đẩy mã.
        - **Private**: Chỉ những người được cấp quyền mới có thể xem và đẩy mã. Lưu ý: Kho private có thể yêu cầu gói trả phí trên GitHub.
        - Chọn **Public** cho bài học này.
    - **Khởi tạo kho**:
        - **Add a README file**: Tạo tệp `README.md` để mô tả dự án (tác giả, mục đích, cách sử dụng, v.v.).
        - **Add .gitignore**: Thêm tệp `.gitignore` để chỉ định các tệp/thư mục không muốn Git theo dõi (ví dụ: tệp chứa thông tin nhạy cảm như thông tin đăng nhập).
            - Chọn template `.gitignore` (ví dụ: `Python`, `Node`), nhưng để đơn giản, chọn **None** cho bài học này.
        - **Choose a license**: (Tùy chọn) Thêm giấy phép để xác định quyền sử dụng mã (ví dụ: MIT License). Chọn **None** cho bài học này.
    - Nhấp **Create repository** để tạo kho.

- **Kết quả**:

    - Kho `git_training_v3` được tạo với tệp `README.md` và (nếu chọn) `.gitignore`.
    - Trang kho hiển thị liên kết HTTPS/SSH, mô tả, và nhánh mặc định (`main`).

## 2. Đồng bộ Kho Từ Xa với Máy Cục Bộ

### 2.1. Sao chép (Clone) Kho về Máy Cục Bộ

- **Lấy URL kho**:

    - Trên trang kho, nhấp vào nút **Code** (màu xanh lá) và sao chép liên kết HTTPS:

      ```
      https://github.com/<username>/git_training_v3.git
      ```

- **Sao chép kho**:

    - Mở terminal và điều hướng đến thư mục mong muốn:

      ```bash
      cd ~/path/to/parent/directory
      ```
    - Chạy lệnh clone:

      ```bash
      git clone -b main https://github.com/<username>/git_training_v3.git
      ```
        - Tùy chọn `-b main` chỉ định nhánh `main` (nhánh mặc định của kho). Kết quả:

      ```
      Cloning into 'git_training_v3'...
      done.
      ```

- **Kiểm tra nội dung**:

  ```bash
  cd git_training_v3
  ls
  ```

  Kết quả: `README.md`

    - Nếu đã chọn `.gitignore` hoặc giấy phép, các tệp này cũng sẽ xuất hiện.

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

### 2.2. Đồng bộ Thay đổi giữa Kho Cục Bộ và Từ Xa

Giả sử một nhà phát triển khác trong tổ chức đã thêm tệp mới vào kho từ xa, và bạn muốn đồng bộ hóa.

- **Kéo (Pull) thay đổi từ kho từ xa**:

    - Giả sử tệp `test_file.txt` được thêm vào kho từ xa với nội dung:

      ```
      This is test file for sample download
      ```
    - Chạy:

      ```bash
      git pull origin main
      ```

      Kết quả:

      ```
      remote: Enumerating objects: 4, done.
      remote: Counting objects: 100% (4/4), done.
      remote: Compressing objects: 100% (3/3), done.
      remote: Total 3 (delta 0), reused 0 (delta 0)
      Unpacking objects: 100% (3/3), done.
      From https://github.com/<username>/git_training_v3
       * branch            main       -> FETCH_HEAD
         abc1234..def5678  main       -> origin/main
      Updating abc1234..def5678
      Fast-forward
       test_file.txt | 1 +
       1 file changed, 1 insertion(+)
       create mode 100644 test_file.txt
      ```
    - Kiểm tra:

      ```bash
      ls
      ```

      Kết quả: `README.md test_file.txt`

- **Tạo và đẩy (Push) thay đổi từ máy cục bộ**:

    - Sửa đổi `test_file.txt`:

      ```
      This is test file for sample download
      This is another commit from local machine
      ```

    - Kiểm tra trạng thái:

      ```bash
      git status
      ```

      Kết quả:

      ```
      On branch main
      Your branch is up to date with 'origin/main'.
      Changes not staged for commit:
        modified:   test_file.txt
      ```

    - **Thêm và cam kết trong một lệnh**:

      ```bash
      git commit -am "Commit message 2"
      ```

      Kết quả:

      ```
      [main xyz7890] Commit message 2
       1 file changed, 1 insertion(+)
      ```

        - **Lưu ý**: Lệnh `git commit -am` chỉ hoạt động với **tệp được theo dõi**. Đối với tệp không được theo dõi (untracked), bạn phải chạy `git add` trước, sau đó `git commit`.

    - **Đẩy thay đổi lên kho từ xa**:

      ```bash
      git push origin main
      ```

## 3. Xử lý Xác thực (Authentication) khi Đẩy Mã

Từ năm 2021, GitHub đã ngừng hỗ trợ xác thực bằng tên người dùng và mật khẩu qua HTTPS. Thay vào đó, bạn cần sử dụng **Personal Access Token (PAT)** hoặc **SSH** để xác thực.

### 3.1. Sử dụng Personal Access Token (PAT)

- **Tạo PAT**:

    - Truy cập GitHub &gt; Settings &gt; Developer settings &gt; Personal access tokens &gt; Tokens (classic) &gt; Generate new token.
    - Chọn quyền: `repo`, `workflow` (nếu cần).
    - Sao chép token (ví dụ: `ghp_xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx`).

- **Sử dụng PAT khi đẩy**:

    - Khi chạy `git push`, nhập:
        - Username: Tên người dùng GitHub của bạn.
        - Password: Dán PAT thay vì mật khẩu.
    - Để tránh nhập PAT mỗi lần, lưu trữ thông tin xác thực:

      ```bash
      git config credential.helper store
      ```
        - Lưu ý: Lệnh này lưu PAT trong tệp văn bản thuần trên máy, không an toàn cho máy tính dùng chung. Thay vào đó, sử dụng trình quản lý thông tin xác thực (credential manager) của hệ điều hành.

### 3.2. Sử dụng SSH (Khuyến nghị)

- **Tạo khóa SSH**:

  ```bash
  ssh-keygen -t ed25519 -C "your_email@example.com"
  ```

    - Nhấn Enter để sử dụng các giá trị mặc định.
    - Khóa công khai được lưu tại: `~/.ssh/id_ed25519.pub`.

- **Thêm khóa SSH vào GitHub**:

    - Sao chép khóa công khai:

      ```bash
      cat ~/.ssh/id_ed25519.pub
      ```
    - Truy cập GitHub &gt; Settings &gt; SSH and GPG keys &gt; New SSH key, dán khóa và lưu.

- **Cấu hình Git để sử dụng SSH**:

    - Sao chép URL SSH từ kho:

      ```
      git@github.com:<username>/git_training_v3.git
      ```
    - Cập nhật remote URL:

      ```bash
      git remote set-url origin git@github.com:<username>/git_training_v3.git
      ```

- **Đẩy mã với SSH**:

  ```bash
  git push origin main
  ```

    - Không cần nhập thông tin xác thực sau khi cấu hình SSH.

### 3.3. Sử dụng GitHub CLI (Hiện đại hơn)

- Cài đặt GitHub CLI:

  ```bash
  sudo apt install gh  # Linux
  brew install gh      # macOS
  winget install --id GitHub.cli  # Windows
  ```

- Đăng nhập:

  ```bash
  gh auth login
  ```

    - Chọn HTTPS hoặc SSH, sau đó làm theo hướng dẫn để xác thực.

- Clone kho:

  ```bash
  gh repo clone <username>/git_training_v3
  ```

- Đẩy mã:

  ```bash
  git push origin main
  ```

    - GitHub CLI tự động xử lý xác thực.

## 4. Thực tiễn hiện đại (Cập nhật 2025)

- **Sử dụng GitHub CLI**: Tăng hiệu quả với các lệnh như `gh repo create` để tạo kho trực tiếp từ terminal:

  ```bash
  gh repo create git_training_v3 --public --description "Đây là kho lưu trữ cho mục đích đào tạo Git và GitHub" --add-readme
  ```

- **Tệp** `.gitignore`:

    - Luôn thêm `.gitignore` phù hợp với loại dự án (ví dụ: `Python` cho dự án Python để bỏ qua `*.pyc`, `__pycache__`).
    - Sử dụng template từ GitHub hoặc gitignore.io.

- **Quy tắc bảo vệ nhánh**:

    - Thiết lập **branch protection rules** trên GitHub để yêu cầu Pull Requests và kiểm tra CI/CD trước khi đẩy mã vào `main`.

- **Tự động hóa với GitHub Actions**:

    - Tạo workflow để kiểm tra mã khi đẩy:

      ```yaml
      name: CI Check
      on:
        push:
          branches: [ main ]
        pull_request:
          branches: [ main ]
      jobs:
        validate:
          runs-on: ubuntu-latest
          steps:
            - uses: actions/checkout@v3
            - name: Check code
              run: echo "Kiểm tra mã nguồn khi đẩy"
      ```

## 5. Tầm quan trọng của Kho Từ Xa trên GitHub

- **Hợp tác nhóm**: Kho từ xa cho phép nhiều nhà phát triển làm việc cùng lúc, đồng bộ hóa mã qua `git pull` và `git push`.
- **Lưu trữ an toàn**: GitHub lưu trữ mã nguồn trên đám mây, đảm bảo an toàn ngay cả khi máy cục bộ gặp sự cố.
- **Kiểm soát phiên bản**: Cho phép theo dõi lịch sử thay đổi và quản lý các phiên bản dự án.
- **Tích hợp DevOps**: Hỗ trợ quy trình CI/CD, code review qua Pull Requests, và tự động hóa với GitHub Actions.

Bằng cách tạo kho từ xa trên GitHub, sử dụng xác thực an toàn (PAT hoặc SSH), và tích hợp các công cụ hiện đại như GitHub CLI, bạn có thể xây dựng một quy trình phát triển hiệu quả, phù hợp với các tiêu chuẩn DevOps hiện đại!
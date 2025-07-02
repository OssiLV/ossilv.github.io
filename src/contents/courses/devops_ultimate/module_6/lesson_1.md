---
course: devops_ultimate
module: module_6
title: "Khái niệm về Nhánh (Branches) trong Git"
order: 1
pubDate: 2025-06-28
updatedDate: 2025-06-28
---

## 1. Nhánh trong Git là gì?

Nhánh trong Git là một con trỏ độc lập đến một chuỗi các cam kết (commits), cho phép bạn phát triển các phiên bản khác nhau của dự án một cách song song.

- **Nhánh mặc định (`main`)**: Khi khởi tạo một kho Git (`git init`), Git tự động tạo nhánh mặc định, thường là `main` (hoặc `master` trong các phiên bản cũ). Đây là nơi chứa mã nguồn chính, ổn định và sẵn sàng triển khai.
- **Nhánh khác**: Bạn có thể tạo các nhánh như nhánh tính năng (feature), nhánh sửa lỗi (hotfix), hoặc nhánh phát hành (release) để làm việc trên các nhiệm vụ cụ thể.

Nhánh là nền tảng của hệ thống kiểm soát phiên bản, giúp quản lý các phiên bản mã nguồn (ví dụ: phiên bản 1.0, 2.0) và hỗ trợ phát triển song song.

## 2. Tại sao cần Nhánh trong Git?

Nhánh giúp tổ chức và quản lý mã nguồn hiệu quả, đặc biệt trong các dự án có nhiều nhà phát triển hoặc nhiều giai đoạn phát triển.

- **Cách ly thay đổi**:
    - Các nhánh riêng (như `feature/login`, `hotfix/bug-123`) cho phép phát triển tính năng hoặc sửa lỗi mà không ảnh hưởng đến nhánh `main`.
    - Ví dụ: Nhánh `release/1.0` chứa mã đã được kiểm tra và ổn định, trong khi nhánh `main` tiếp tục phát triển các tính năng mới.

- **Quản lý phiên bản**:
    - Nhánh phát hành (release branches) như `release/1.0` hoặc `release/2.0` được tạo để "đóng băng" (freeze) mã nguồn tại một thời điểm, đảm bảo mã không thay đổi trừ khi được hợp nhất (merge) một cách rõ ràng.
    - Nhánh `main` tiếp tục phát triển, trong khi các nhánh phát hành lưu giữ các phiên bản cụ thể.

- **Hỗ trợ làm việc nhóm**:
    - Mỗi nhà phát triển hoặc nhóm có thể làm việc trên nhánh riêng, sau đó hợp nhất mã vào nhánh `main` thông qua Pull Requests (PRs).
    - Điều này giảm thiểu xung đột và đảm bảo chất lượng mã thông qua code review.

- **Minh họa bằng sơ đồ**:
    - Nhánh `main`: Chứa mã chính, tiếp tục phát triển với các cam kết mới.
    - Nhánh `release/1.0`: Được tạo từ `main` tại một thời điểm, chứa mã đã kiểm tra và đóng băng cho phiên bản 1.0.
    - Nhánh `release/2.0`: Được tạo sau khi thêm các tính năng mới, đóng băng mã cho phiên bản 2.0.
    - Các nhánh này độc lập, nhưng có thể được hợp nhất lại với `main` nếu cần.

## 3. Các Lệnh Quản lý Nhánh trong Git

Dưới đây là các lệnh cơ bản để làm việc với nhánh trong Git:

- **Liệt kê nhánh**:
    - Chạy:
      ```bash
      git branch -a
      ```
        - Hiển thị tất cả nhánh cục bộ và từ xa.
        - Dấu `*` chỉ nhánh hiện tại.

- **Tạo nhánh mới**:
    - Chạy:
      ```bash
      git branch <branch-name>
      ```
      Ví dụ: `git branch hotfix`

- **Chuyển đổi nhánh**:
    - Chạy:
      ```bash
      git switch <branch-name>
      ```
      Hoặc sử dụng lệnh cũ:
      ```bash
      git checkout <branch-name>
      ```
      Ví dụ: `git switch hotfix`

- **Đổi tên nhánh**:
    - Chạy:
      ```bash
      git branch -m <old-name> <new-name>
      ```
      Ví dụ: `git branch -m hotfix hot_fix_1`

- **Xóa nhánh**:
    - Chạy:
      ```bash
      git branch -d <branch-name>
      ```
        - Lưu ý: Không thể xóa nhánh đang được checkout. Cần chuyển sang nhánh khác trước.
        - Để xóa nhánh từ xa:
          ```bash
          git push origin --delete <branch-name>
          ```

## 4. Thực hành Quản lý Nhánh

Hãy thực hành các lệnh liên quan đến nhánh trong dự án `git_training_v3`.

- **Kiểm tra trạng thái hiện tại**:
    - Điều hướng đến thư mục dự án:
      ```bash
      cd git_training_v3
      ```
    - Liệt kê các nhánh:
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
        - Nhánh `main` đang được checkout (dấu `*`).
        - Các nhánh từ xa (`remotes/origin/*`) hiển thị các nhánh trên GitHub.

- **Liệt kê nội dung**:
    - Chạy:
      ```bash
      ls
      ```
      Kết quả: `README.md sample_file_main1.txt sample_test_file1.txt sample_test_file2.txt test_file.txt`

- **Tạo nhánh mới**:
    - Tạo nhánh `hotfix`:
      ```bash
      git branch hotfix
      ```
    - Kiểm tra lại:
      ```bash
      git branch -a
      ```
      Kết quả:
      ```
      * main
        develop
        hotfix
        remotes/origin/main
        remotes/origin/develop
      ```

- **Chuyển sang nhánh `hotfix`**:
    - Chạy:
      ```bash
      git switch hotfix
      ```
      Kết quả: `Switched to branch 'hotfix'`
    - Kiểm tra nhánh hiện tại:
      ```bash
      git branch -a
      ```
      Kết quả:
      ```
        develop
      * hotfix
        main
        remotes/origin/main
        remotes/origin/develop
      ```
    - Liệt kê nội dung:
      ```bash
      ls
      ```
      Kết quả: `README.md sample_file_main1.txt sample_test_file1.txt sample_test_file2.txt test_file.txt`
        - Nhánh `hotfix` kế thừa toàn bộ tệp từ `main` tại thời điểm tạo.

- **Đổi tên nhánh**:
    - Đổi tên `hotfix` thành `hot_fix_1`:
      ```bash
      git branch -m hotfix hot_fix_1
      ```
    - Kiểm tra:
      ```bash
      git branch -a
      ```
      Kết quả:
      ```
        develop
      * hot_fix_1
        main
        remotes/origin/main
        remotes/origin/develop
      ```

- **Xóa nhánh**:
    - Thử xóa nhánh `hot_fix_1` khi đang checkout:
      ```bash
      git branch -d hot_fix_1
      ```
      Kết quả:
      ```
      error: Cannot delete branch 'hot_fix_1' checked out at '/path/to/git_training_v3'
      ```
    - Chuyển sang nhánh `main`:
      ```bash
      git switch main
      ```
    - Xóa nhánh `hot_fix_1`:
      ```bash
      git branch -d hot_fix_1
      ```
      Kết quả: `Deleted branch hot_fix_1`
    - Kiểm tra lại:
      ```bash
      git branch -a
      ```
      Kết quả:
      ```
        develop
      * main
        remotes/origin/main
        remotes/origin/develop
      ```

## 5. Thực tiễn hiện đại (Cập nhật 2025)

- **Chiến lược nhánh (Branching Strategies)**:
    - **Git Flow**: Sử dụng nhánh `main` cho sản phẩm chính, nhánh `develop` cho tích hợp, nhánh `release/*` cho các phiên bản phát hành, và nhánh `feature/*` hoặc `hotfix/*` cho các nhiệm vụ cụ thể.
    - **GitHub Flow**: Tạo nhánh tính năng từ `main`, đẩy mã, tạo Pull Request, và hợp nhất sau khi xem xét mã (code review).

- **Công cụ hỗ trợ**:
    - Sử dụng **GitHub CLI** để quản lý nhánh:
      ```bash
      gh branch create hotfix
      gh branch delete hot_fix_1
      ```
    - Sử dụng Visual Studio Code với GitLens để trực quan hóa và quản lý nhánh.

- **Quy tắc bảo vệ nhánh**:
    - Thiết lập **branch protection rules** trên GitHub để yêu cầu Pull Requests và kiểm tra CI/CD trước khi hợp nhất vào `main`.

## 6. Tầm quan trọng của Nhánh trong Git

- **Kiểm soát phiên bản**: Nhánh cho phép lưu trữ các phiên bản mã nguồn (release branches) để triển khai hoặc lưu trữ.
- **Phát triển song song**: Các nhà phát triển có thể làm việc trên nhánh riêng mà không ảnh hưởng đến nhánh chính.
- **Đóng băng mã**: Nhánh phát hành đảm bảo mã ổn định cho các phiên bản cụ thể, trong khi nhánh `main` tiếp tục phát triển.
- **Hỗ trợ làm việc nhóm**: Nhánh kết hợp với Pull Requests giúp quản lý mã nguồn hiệu quả, với quy trình code review chặt chẽ.

Nhánh là yếu tố cốt lõi giúp Git trở thành một hệ thống kiểm soát phiên bản mạnh mẽ, hỗ trợ phát triển phần mềm quy mô lớn và phức tạp!
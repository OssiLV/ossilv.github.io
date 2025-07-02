---
course: devops_ultimate
module: module_4
title: "Khám phá Git với GitHub"
order: 1
pubDate: 2025-06-25
updatedDate: 2025-06-25
---

## 1. GitHub là gì?
GitHub là một dịch vụ dựa trên đám mây (cloud-based service) giúp các nhà phát triển lưu trữ và quản lý mã nguồn. Dưới đây là các đặc điểm chính của GitHub:

- **Nền tảng web**: GitHub là một cổng web (web-based portal) mà bạn có thể truy cập thông qua trình duyệt tại địa chỉ [github.com](https://github.com).
- **Kho lưu trữ từ xa (Remote Repository)**: GitHub cung cấp một kho lưu trữ chung (centralized repository) nơi nhiều nhà phát triển có thể đẩy (push) và kéo (pull) mã nguồn.
- **Hỗ trợ cộng tác**: GitHub cho phép nhiều nhà phát triển làm việc cùng nhau trên một dự án, quản lý các phiên bản mã nguồn và theo dõi các thay đổi.
- **Tích hợp với Git**: Git, một hệ thống kiểm soát phiên bản (version control system), được sử dụng để tương tác với GitHub, giúp quản lý các phiên bản mã nguồn và thực hiện các thao tác như đẩy và kéo mã.

## 2. Mối quan hệ giữa Git và GitHub
Git và GitHub phối hợp với nhau để tạo thành một hệ thống kiểm soát phiên bản phân tán (distributed version control system). Dưới đây là cách chúng hoạt động cùng nhau:

- **Git cục bộ (Local Git Repository)**:
    - Mỗi nhà phát triển làm việc trên máy tính cá nhân của mình, nơi họ có một kho Git cục bộ (local repository).
    - Họ phát triển mã nguồn trong thư mục làm việc (working directory), thêm các thay đổi vào khu vực staging, và cam kết (commit) vào kho Git cục bộ bằng các lệnh như:
      ```bash
      git add .
      git commit -m "Thông điệp cam kết"
      ```

- **GitHub (Kho từ xa)**:
    - GitHub lưu trữ một kho lưu trữ từ xa (remote repository) chung, nơi tất cả các nhà phát triển đẩy mã của họ để chia sẻ và đồng bộ hóa.
    - Các nhà phát triển sử dụng các lệnh Git để:
        - **Đẩy mã** lên GitHub:
          ```bash
          git push origin main
          ```
        - **Kéo mã** từ GitHub về máy cục bộ:
          ```bash
          git pull origin main
          ```

- **Hệ thống phân tán**:
    - Git là một hệ thống phân tán, nghĩa là mỗi nhà phát triển có một bản sao đầy đủ của kho lưu trữ trên máy cục bộ. Nếu máy tính của một nhà phát triển gặp sự cố, mã nguồn vẫn an toàn trên GitHub và trên các máy khác.
    - GitHub đóng vai trò là kho lưu trữ chung, giúp các nhà phát triển đồng bộ hóa mã nguồn và cộng tác hiệu quả.

## 3. Minh họa quy trình làm việc với Git và GitHub
Hãy tưởng tượng một dự án với nhiều nhà phát triển, mỗi người làm việc trên máy tính riêng:

1. **Nhà phát triển 1**:
    - Làm việc trên máy cục bộ, tạo và chỉnh sửa mã nguồn.
    - Cam kết mã vào kho Git cục bộ:
      ```bash
      git add .
      git commit -m "Thêm tính năng mới"
      ```
    - Đẩy mã lên GitHub:
      ```bash
      git push origin main
      ```

2. **Nhà phát triển 2**:
    - Kéo mã từ GitHub để cập nhật kho cục bộ:
      ```bash
      git pull origin main
      ```
    - Thực hiện các thay đổi, cam kết, và đẩy lại lên GitHub.

3. **Nhiều nhà phát triển**:
    - Nhiều nhà phát triển có thể làm việc đồng thời, đẩy và kéo mã từ cùng một kho GitHub.
    - GitHub đảm bảo tất cả các thay đổi được đồng bộ hóa và lịch sử mã nguồn được lưu trữ an toàn.

## 4. Bắt đầu với GitHub
Để sử dụng GitHub, bạn cần tạo một tài khoản và làm quen với giao diện của nó.

- **Truy cập GitHub**:
    - Mở trình duyệt và truy cập [github.com](https://github.com).
    - Nếu chưa có tài khoản, nhấp vào **Sign Up** để tạo tài khoản mới. Bạn sẽ cần cung cấp email, mật khẩu và tên người dùng.
    - Nếu đã có tài khoản, nhấp vào **Sign In** để đăng nhập.

- **Giao diện GitHub**:
    - Sau khi đăng nhập, bạn sẽ thấy bảng điều khiển (dashboard) hiển thị các kho lưu trữ (repositories) mà bạn đã tạo hoặc có quyền truy cập.
    - Đối với người dùng mới, bảng điều khiển có thể hiển thị thông tin mặc định hoặc các gợi ý để bắt đầu.
    - Bạn có thể tạo một kho lưu trữ mới bằng cách nhấp vào **New Repository** và làm theo các bước hướng dẫn.

- **Tạo kho lưu trữ trên GitHub**:
    - Đặt tên cho kho lưu trữ, ví dụ: `git_training_v1`.
    - Chọn chế độ công khai (public) hoặc riêng tư (private).
    - Có thể thêm tệp `README.md`, `.gitignore`, hoặc giấy phép (license) ngay khi tạo kho.

## 5. Kết nối Git cục bộ với GitHub
Để tích hợp kho Git cục bộ với GitHub, bạn cần liên kết kho cục bộ với kho từ xa trên GitHub.

- **Tạo kho trên GitHub**:
    - Sau khi tạo kho trên GitHub, bạn sẽ nhận được một URL kho từ xa, ví dụ: `https://github.com/username/git_training_v1.git`.

- **Liên kết kho cục bộ**:
    - Trong thư mục dự án cục bộ (`git_training_v1`), chạy lệnh:
      ```bash
      git remote add origin https://github.com/username/git_training_v1.git
      ```
      Lệnh này liên kết kho cục bộ với kho từ xa trên GitHub.

- **Đẩy mã lên GitHub**:
    - Đảm bảo bạn đã cam kết các thay đổi:
      ```bash
      git add .
      git commit -m "Cam kết ban đầu"
      ```
    - Đẩy mã lên GitHub:
      ```bash
      git push -u origin main
      ```
      Lưu ý: `-u` thiết lập nhánh `main` làm nhánh mặc định để đẩy và kéo mã.

- **Kéo mã từ GitHub**:
    - Để cập nhật kho cục bộ với các thay đổi từ GitHub, chạy:
      ```bash
      git pull origin main
      ```

## 6. Thực tiễn hiện đại (Cập nhật 2025)
Dưới đây là một số cập nhật:

- **Tính năng GitHub hiện đại**:
    - **GitHub Actions**: Một công cụ CI/CD tích hợp, cho phép tự động hóa quy trình kiểm tra, xây dựng và triển khai mã nguồn trực tiếp từ GitHub.
    - **Pull Requests (PRs)**: GitHub hỗ trợ quy trình xem xét mã (code review) thông qua PRs, nơi các nhà phát triển có thể thảo luận và phê duyệt thay đổi trước khi hợp nhất (merge) vào nhánh chính.
    - **Codespaces**: Một môi trường phát triển dựa trên đám mây, cho phép lập trình viên làm việc trực tiếp trên GitHub mà không cần thiết lập môi trường cục bộ.
    - **Bảo mật nâng cao**: GitHub cung cấp các tính năng như quét bảo mật mã nguồn (Dependabot, CodeQL) để phát hiện lỗ hổng và đề xuất sửa lỗi.

- **Quy trình làm việc nhóm**:
    - Sử dụng nhánh (branches) để phát triển tính năng mới, ví dụ: tạo nhánh `feature/login` và hợp nhất vào `main` thông qua Pull Request.
    - Áp dụng **Conventional Commits** (ví dụ: `feat: thêm tính năng đăng nhập`) để chuẩn hóa thông điệp cam kết, hỗ trợ tự động hóa versioning.

- **Tích hợp với công cụ DevOps**:
    - GitHub tích hợp với các công cụ như Docker, Kubernetes, và các nền tảng CI/CD (Jenkins, GitLab CI/CD) để triển khai ứng dụng.
    - Sử dụng GitHub CLI (`gh`) để quản lý kho lưu trữ từ terminal:
      ```bash
      gh repo create git_training_v1
      ```

## 7. Tầm quan trọng của GitHub trong DevOps
- **Cộng tác nhóm**: GitHub cho phép nhiều nhà phát triển làm việc cùng lúc trên một dự án mà không gây xung đột, nhờ các nhánh và Pull Requests.
- **Sao lưu mã nguồn**: Kho từ xa trên GitHub đảm bảo mã nguồn được an toàn, ngay cả khi máy cục bộ gặp sự cố.
- **Tự động hóa**: Với GitHub Actions và các tích hợp CI/CD, các quy trình phát triển và triển khai được tự động hóa, tăng hiệu suất làm việc.

Bằng cách kết hợp Git và GitHub, bạn có thể xây dựng một quy trình phát triển phần mềm mạnh mẽ, phân tán và hiệu quả, phù hợp với các yêu cầu của DevOps hiện đại!
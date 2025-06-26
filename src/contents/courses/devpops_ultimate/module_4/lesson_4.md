---
course: devpops_ultimate
module: module_4
title: "Làm việc với Nhánh (Branching) trong Git và GitHub"
order: 4
pubDate: 2025-06-25
updatedDate: 2025-06-25
---

## 1. Nhánh trong Git là gì?
Nhánh (branch) trong Git là một con trỏ độc lập đến một chuỗi các cam kết (commits), cho phép bạn phát triển mã nguồn song song mà không làm thay đổi nhánh chính (thường là `main`). Mỗi nhánh có thể chứa một tập hợp tệp và lịch sử cam kết riêng biệt.

- **Nhánh chính (`main`)**: Đây là nhánh mặc định của dự án, thường chứa mã nguồn ổn định và sẵn sàng triển khai.
- **Nhánh tính năng (feature branches)**: Được tạo để phát triển các tính năng mới, sửa lỗi, hoặc thử nghiệm, sau đó hợp nhất lại vào nhánh `main`.

## 2. Kiểm tra và Tạo Nhánh
Hãy bắt đầu bằng cách làm việc với nhánh trong dự án `git_training_v3`.

- **Kiểm tra nhánh hiện tại**:
    - Mở terminal (Linux/Mac) hoặc Git Bash (Windows) và điều hướng đến thư mục dự án:
      ```bash
      cd git_training_v3
      ```
    - Chạy lệnh để xem nhánh hiện tại:
      ```bash
      git branch
      ```
      Kết quả:
      ```
      * main
      ```
      Dấu `*` chỉ ra rằng bạn đang ở nhánh `main`. Đây là nhánh mặc định của kho.

- **Liệt kê nội dung thư mục**:
    - Chạy:
      ```bash
      ls
      ```
      Kết quả: `README.md  test_file.txt`
      Hiện tại, thư mục dự án có hai tệp: `README.md` và `test_file.txt`.

- **Tạo nhánh mới**:
    - Tạo một nhánh mới có tên `develop`:
      ```bash
      git branch develop
      ```
    - Kiểm tra lại danh sách nhánh:
      ```bash
      git branch
      ```
      Kết quả:
      ```
        develop
      * main
      ```
      Nhánh `develop` đã được tạo, nhưng bạn vẫn đang ở nhánh `main`.

- **Chuyển sang nhánh `develop`**:
    - Chuyển sang nhánh `develop`:
      ```bash
      git switch develop
      ```
      Hoặc sử dụng lệnh cũ hơn:
      ```bash
      git checkout develop
      ```
    - Kiểm tra nhánh hiện tại:
      ```bash
      git branch
      ```
      Kết quả:
      ```
      * develop
        main
      ```
    - Liệt kê nội dung:
      ```bash
      ls
      ```
      Kết quả: `README.md  test_file.txt`
      Các tệp giống hệt nhánh `main`, vì nhánh `develop` được tạo từ nhánh `main` và kế thừa toàn bộ lịch sử cam kết của nó.

## 3. Làm việc trên Nhánh Develop
Khi làm việc trên nhánh `develop`, các thay đổi sẽ chỉ ảnh hưởng đến nhánh này cho đến khi bạn hợp nhất nó vào nhánh khác.

- **Tạo tệp mới trên nhánh `develop`**:
    - Tạo hai tệp mới:
      ```bash
      touch sample_test_file1.txt sample_test_file2.txt
      ```
    - Thêm nội dung vào `sample_test_file1.txt`:
      ```
      Đây là tệp mẫu 1
      ```
    - Thêm nội dung vào `sample_test_file2.txt`:
      ```
      Đây là tệp mẫu 2
      ```
    - Kiểm tra nội dung thư mục:
      ```bash
      ls
      ```
      Kết quả: `README.md  sample_test_file1.txt  sample_test_file2.txt  test_file.txt`

- **Kiểm tra trạng thái**:
    - Chạy:
      ```bash
      git status
      ```
      Kết quả:
      ```
      On branch develop
      Untracked files:
        (use "git add <file>..." to include in what will be committed)
          sample_test_file1.txt
          sample_test_file2.txt
      ```

- **Thêm và cam kết tệp**:
    - Thêm tất cả các tệp:
      ```bash
      git add .
      ```
    - Cam kết:
      ```bash
      git commit -m "Thêm các tệp mẫu trên nhánh develop"
      ```

- **Đẩy nhánh `develop` lên GitHub**:
    - Chạy:
      ```bash
      git push origin develop
      ```
      Nếu đây là lần đầu đẩy nhánh `develop`, bạn có thể gặp lỗi:
      ```
      fatal: The current branch develop has no upstream branch.
      ```
    - Để thiết lập nhánh từ xa (upstream):
      ```bash
      git push --set-upstream origin develop
      ```
      Kết quả: Nhánh `develop` được tạo trên GitHub, cùng với các tệp mới.

## 4. Kiểm tra Nhánh trên GitHub
- Truy cập kho lưu trữ trên GitHub (`https://github.com/username/git_training_v3`).
- Nhấp vào tab **Branches** hoặc **View all branches** để thấy các nhánh: `main` và `develop`.
- Chuyển sang nhánh `develop` trên GitHub, bạn sẽ thấy các tệp: `README.md`, `test_file.txt`, `sample_test_file1.txt`, `sample_test_file2.txt`.
- Chuyển sang nhánh `main`, bạn chỉ thấy: `README.md`, `test_file.txt`.

**Lưu ý**: Mỗi nhánh có tập hợp tệp riêng, dựa trên lịch sử cam kết của nó. Các tệp được thêm vào `develop` không xuất hiện trên `main` cho đến khi được hợp nhất.

## 5. Làm việc trên Nhánh Main
Hãy thử thêm tệp mới trên nhánh `main` để so sánh.

- **Chuyển về nhánh `main`**:
    - Chạy:
      ```bash
      git switch main
      ```
    - Kiểm tra nội dung:
      ```bash
      ls
      ```
      Kết quả: `README.md  test_file.txt`
      Các tệp `sample_test_file1.txt` và `sample_test_file2.txt` không có trên nhánh `main`.

- **Tạo tệp mới**:
    - Tạo tệp:
      ```bash
      touch sample_file_main1.txt
      ```
    - Thêm nội dung:
      ```
      Đây là tệp mẫu trên nhánh main
      ```
    - Thêm và camis:
      ```bash
      git add sample_file_main1.txt
      git commit -m "Thêm tệp mẫu trên nhánh main"
      ```
    - Đẩy lên GitHub:
      ```bash
      git push origin main
      ```

- **Kiểm tra trên GitHub**:
    - Truy cập nhánh `main` trên GitHub, bạn sẽ thấy tệp mới `sample_file_main1.txt` cùng với `README.md` và `test_file.txt`.
    - Nhánh `develop` vẫn chứa các tệp khác (`sample_test_file1.txt` và `sample_test_file2.txt`) và không có `sample_file_main1.txt`.

## 6. Hợp nhất Nhánh với Pull Requests
Để đưa các thay đổi từ nhánh `develop` vào nhánh `main` (hoặc ngược lại), bạn sử dụng Pull Request (PR) trên GitHub.

- **Tạo Pull Request**:
    - Truy cập kho `git_training_v3` trên GitHub.
    - Nhấp vào tab **Pull requests** > **New pull request**.
    - Chọn:
        - **Base branch**: `main` (nhánh đích).
        - **Compare branch**: `develop` (nhánh nguồn).
    - Xem các thay đổi:
        - GitHub hiển thị các tệp khác biệt, ví dụ: thêm `sample_test_file1.txt` và `sample_test_file2.txt`.
    - Nhấp vào **Create pull request**, thêm tiêu đề (ví dụ: "Hợp nhất develop vào main") và mô tả, sau đó nhấp **Create**.
    - Nhấp **Merge pull request** > **Confirm merge** để hợp nhất `develop` vào `main`.

- **Hợp nhất ngược lại (từ `main` vào `develop`)**:
    - Tương tự, tạo một Pull Request từ `main` sang `develop` để đồng bộ hóa các tệp như `sample_file_main1.txt`.
    - Xem các thay đổi: GitHub hiển thị thêm `sample_file_main1.txt`.
    - Nhấp **Create pull request** > **Merge pull request** > **Confirm merge**.
    - Kết quả: Nhánh `develop` giờ đây bao gồm `sample_file_main1.txt` từ nhánh `main`, nhưng `main` vẫn chưa có `sample_test_file1.txt` và `sample_test_file2.txt` cho đến khi bạn hợp nhất `develop` vào `main`.

- **Cập nhật kho cục bộ**:
    - Sau khi hợp nhất trên GitHub, cập nhật nhánh `develop` cục bộ:
      ```bash
      git switch develop
      git pull origin develop
      ```
    - Kiểm tra nội dung:
      ```bash
      ls
      ```
      Kết quả: `README.md  sample_file_main1.txt  sample_test_file1.txt  sample_test_file2.txt  test_file.txt`
      Tệp `sample_file_main1.txt` từ nhánh `main` giờ đã có trên nhánh `develop`.

## 7. Chiến lược Nhánh và Quy trình Làm việc
Nhánh cho phép các đội hoặc nhà phát triển làm việc song song trên các tính năng hoặc sửa lỗi khác nhau.

- **Cấu trúc nhánh**:
    - **Nhánh `main`**: Chứa mã ổn định, thường được sử dụng cho triển khai sản phẩm.
    - **Nhánh tính năng (`develop`, `feature/*`, v.v.)**: Được tạo từ `main` để phát triển tính năng mới hoặc sửa lỗi.
    - Các đội (Team A, Team B, v.v.) hoặc nhà phát triển có thể làm việc trên nhánh riêng, giữ đồng bộ với `main` bằng cách kéo (pull) mã thường xuyên:
      ```bash
      git pull origin main
      ```

- **Quy trình làm việc**:
    - Nhà phát triển kéo mã từ `main` để bắt đầu làm việc trên nhánh tính năng.
    - Sau khi hoàn thành, mã được đẩy lên nhánh từ xa (ví dụ: `develop`) và tạo Pull Request để hợp nhất vào `main`.
    - Sau khi hợp nhất, nhánh tính năng có thể được xóa nếu không còn cần thiết:
      ```bash
      git push origin --delete develop
      ```

## 8. Thực tiễn hiện đại (Cập nhật 2025)
Kể từ khi khóa học này được tạo (khoảng 10 năm trước), các thực tiễn liên quan đến nhánh và GitHub đã được cải thiện:

- **Chiến lược nhánh (Branching Strategies)**:
    - **Git Flow**: Sử dụng nhánh `main` cho sản phẩm chính, nhánh `develop` cho tích hợp, và các nhánh tính năng (feature branches) cho các thay đổi cụ thể.
    - **GitHub Flow**: Tạo nhánh tính năng trực tiếp từ `main`, hợp nhất qua Pull Requests sau khi xem xét mã (code review).
    - Áp dụng quy tắc bảo vệ nhánh (branch protection rules) trên GitHub để yêu cầu PR và kiểm tra CI/CD trước khi hợp nhất.

- **Tự động hóa với GitHub Actions**:
    - Sử dụng GitHub Actions để tự động chạy kiểm tra, xây dựng, và triển khai mã khi hợp nhất nhánh.
    - Ví dụ: Tạo workflow để kiểm tra mã trên nhánh `develop` trước khi hợp nhất vào `main`.

- **Thông điệp cam kết chuẩn hóa**:
    - Sử dụng **Conventional Commits** (ví dụ: `feat: thêm tệp mẫu`, `fix: sửa lỗi`) để tự động hóa versioning và tạo changelog.

- **Công cụ hỗ trợ**:
    - Sử dụng Visual Studio Code hoặc GitHub CLI (`gh`) để quản lý nhánh và PR:
      ```bash
      gh pr create --base main --head develop --title "Hợp nhất develop vào main"
      ```

## 9. Tầm quan trọng của Nhánh
- **Phát triển song song**: Nhánh cho phép nhiều nhà phát triển làm việc trên các tính năng khác nhau mà không xung đột.
- **Kiểm soát chất lượng**: Pull Requests và code review đảm bảo mã được kiểm tra trước khi hợp nhất vào nhánh chính.
- **Tính linh hoạt**: Nhánh tính năng giúp thử nghiệm ý tưởng mới mà không ảnh hưởng đến mã sản phẩm chính.
- **Hỗ trợ làm việc nhóm**: Các đội có thể làm việc độc lập trên nhánh riêng, đồng bộ hóa với nhánh chính khi cần thiết.

Bằng cách sử dụng nhánh và Pull Requests, bạn có thể tổ chức quy trình phát triển hiệu quả, an toàn và phù hợp với các dự án DevOps hiện đại!
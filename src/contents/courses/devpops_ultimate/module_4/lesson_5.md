---
course: devpops_ultimate
module: module_4
title: "Hợp nhất (Merging) trong Git và GitHub"
order: 5
pubDate: 2025-06-25
updatedDate: 2025-06-25
---

## 1. Hợp nhất (Merging) trong Git là gì?
Hợp nhất (merge) là quá trình tích hợp các thay đổi từ một nhánh (thường là nhánh tính năng hoặc sửa lỗi) vào một nhánh khác (thường là nhánh chính `main`). Đây là bước quan trọng để đưa mã nguồn đã hoàn thiện hoặc sửa lỗi vào dự án chính.

- **Mục đích của hợp nhất**:
    - Kết hợp các tính năng mới, sửa lỗi, hoặc cập nhật từ nhánh tính năng vào nhánh `main`.
    - Đảm bảo mã nguồn chính được cập nhật mà không làm lẫn lộn các thay đổi chưa hoàn thiện.

- **Lợi ích của việc sử dụng nhánh riêng**:
    - **Cách ly công việc**: Mỗi nhánh tập trung vào một nhiệm vụ cụ thể (ví dụ: sửa lỗi, phát triển tính năng dài hạn, hoặc hotfix).
    - **Giữ mã sạch**: Chỉ mã đã được xác thực và hoàn thiện mới được hợp nhất, tránh đưa mã chưa hoàn chỉnh vào sản phẩm chính.
    - **Hỗ trợ làm việc nhóm**: Nhiều nhà phát triển có thể làm việc trên các nhánh riêng mà không gây xung đột.

- **Ví dụ minh họa**:
    - Giả sử nhánh `main` có các commit: `C0`, `C1`, `C2`.
    - Bạn tạo nhánh `hotfix` từ `C2` và thêm commit `C3` để sửa lỗi.
    - Trước khi hợp nhất, `main` dừng ở `C2`, còn `hotfix` ở `C3`.
    - Sau khi hợp nhất `hotfix` vào `main`, cả hai nhánh đều trỏ đến `C3`, nghĩa là `main` giờ bao gồm các thay đổi từ `hotfix`.

## 2. Thực hành Hợp nhất Nhánh
Hãy thực hiện hợp nhất nhánh `develop` vào nhánh `main` trong dự án `git_training_v3`, dựa trên các bước từ bài học trước.

- **Kiểm tra trạng thái hiện tại**:
    - Mở terminal (Linux/Mac) hoặc Git Bash (Windows) và điều hướng đến thư mục dự án:
      ```bash
      cd git_training_v3
      ```
    - Kiểm tra nhánh hiện tại:
      ```bash
      git branch
      ```
      Kết quả:
      ```
        develop
      * main
      ```
    - Liệt kê nội dung thư mục trên nhánh `main`:
      ```bash
      ls
      ```
      Kết quả: `README.md  test_file.txt  sample_file_main1.txt`
      Nhánh `main` không có các tệp `sample_test_file1.txt` và `sample_test_file2.txt` từ nhánh `develop`.

- **Chuyển sang nhánh `develop` để kiểm tra**:
    - Chuyển nhánh:
      ```bash
      git switch develop
      ```
    - Liệt kê nội dung:
      ```bash
      ls
      ```
      Kết quả: `README.md  sample_file_main1.txt  sample_test_file1.txt  sample_test_file2.txt  test_file.txt`
      Nhánh `develop` có thêm hai tệp `sample_test_file1.txt` và `sample_test_file2.txt`.

- **Chuyển về nhánh `main` để hợp nhất**:
    - Chuyển lại nhánh `main`:
      ```bash
      git switch main
      ```

- **Cập nhật nhánh `main`**:
    - Trước khi hợp nhất, đảm bảo nhánh `main` được cập nhật từ kho từ xa:
      ```bash
      git pull origin main
      ```
      Kết quả có thể là:
      ```
      Already up to date.
      ```
      Điều này cho biết nhánh `main` cục bộ đã đồng bộ với nhánh từ xa.

- **Hợp nhất nhánh `develop` vào `main`**:
    - Chạy lệnh hợp nhất:
      ```bash
      git merge develop
      ```
      Kết quả:
      ```
      Updating abc1234..def5678
      Fast-forward
       sample_test_file1.txt | 1 +
       sample_test_file2.txt | 1 +
       2 files changed, 2 insertions(+)
       create mode 100644 sample_test_file1.txt
       create mode 100644 sample_test_file2.txt
      ```
      Nhánh `main` giờ đã bao gồm các tệp từ nhánh `develop`.

- **Kiểm tra nội dung**:
    - Chạy:
      ```bash
      ls
      ```
      Kết quả: `README.md  sample_file_main1.txt  sample_test_file1.txt  sample_test_file2.txt  test_file.txt`
      Các tệp `sample_test_file1.txt` và `sample_test_file2.txt` giờ đã có trên nhánh `main`.

## 3. Đẩy Thay đổi Lên GitHub
Sau khi hợp nhất cục bộ, bạn cần đẩy các thay đổi lên kho từ xa trên GitHub.

- **Kiểm tra trạng thái**:
    - Chạy:
      ```bash
      git status
      ```
      Kết quả:
      ```
      On branch main
      Your branch is ahead of 'origin/main' by 2 commits.
      ```
      Điều này cho biết nhánh `main` cục bộ có các cam kết mới chưa được đẩy lên GitHub.

- **Cam kết (nếu cần)**:
    - Trong ví dụ này, việc hợp nhất đã tự động tạo cam kết (nếu là merge commit). Nếu cần cam kết bổ sung:
      ```bash
      git commit -m "Hợp nhất nhánh develop vào main"
      ```

- **Đẩy lên GitHub**:
    - Chạy:
      ```bash
      git push origin main
      ```
      Kết quả: Các thay đổi được đẩy lên nhánh `main` trên GitHub.

- **Kiểm tra trên GitHub**:
    - Truy cập kho `git_training_v3` trên GitHub (`https://github.com/username/git_training_v3`).
    - Chuyển sang nhánh `main` và kiểm tra: Các tệp `sample_test_file1.txt` và `sample_test_file2.txt` giờ đã xuất hiện.

## 4. Hợp nhất qua Pull Request trên GitHub
Trong thực tế, hợp nhất thường được thực hiện qua Pull Request (PR) trên GitHub để hỗ trợ xem xét mã (code review) và đảm bảo chất lượng.

- **Tạo Pull Request**:
    - Truy cập kho trên GitHub.
    - Nhấp vào tab **Pull requests** > **New pull request**.
    - Chọn:
        - **Base branch**: `main` (nhánh đích).
        - **Compare branch**: `develop` (nhánh nguồn).
    - Xem các thay đổi (ví dụ: thêm `sample_test_file1.txt` và `sample_test_file2.txt`).
    - Nhấp **Create pull request**, thêm tiêu đề (ví dụ: "Hợp nhất develop vào main") và mô tả, sau đó nhấp **Create**.
    - Nhấp **Merge pull request** > **Confirm merge** để hoàn tất.

- **Cập nhật kho cục bộ**:
    - Sau khi hợp nhất trên GitHub, cập nhật nhánh `main` cục bộ:
      ```bash
      git pull origin main
      ```

## 5. Chiến lược Hợp nhất và Quản lý Nhánh
- **Khi nào nên hợp nhất?**:
    - Khi mã trên nhánh tính năng (`develop`, `feature/*`, v.v.) đã được hoàn thiện, kiểm tra và xác thực.
    - Khi cần tích hợp các sửa lỗi (hotfix) hoặc tính năng mới vào nhánh chính (`main`) để triển khai.

- **Quy trình làm việc nhóm**:
    - Mỗi nhà phát triển hoặc nhóm làm việc trên nhánh riêng (ví dụ: `feature/login`, `bugfix/issue-123`).
    - Đồng bộ hóa thường xuyên với nhánh `main` để tránh xung đột:
      ```bash
      git pull origin main
      ```
    - Sau khi hoàn thiện, tạo Pull Request để hợp nhất và thực hiện code review.
    - Sau khi hợp nhất, có thể xóa nhánh tính năng:
      ```bash
      git push origin --delete develop
      ```

- **Loại hợp nhất**:
    - **Fast-forward merge**: Nếu nhánh đích (`main`) không có cam kết mới, Git sẽ di chuyển con trỏ của `main` đến cam kết mới nhất của nhánh nguồn (ví dụ: `develop`).
    - **Merge commit**: Nếu nhánh `main` có cam kết mới, Git tạo một cam kết hợp nhất để kết hợp cả hai lịch sử.

## 6. Thực tiễn hiện đại (Cập nhật 2025)

- **Quy tắc bảo vệ nhánh**:
    - Trên GitHub, thiết lập **branch protection rules** trong **Settings** > **Branches** để yêu cầu:
        - Pull Request trước khi hợp nhất.
        - Phê duyệt từ ít nhất một người đánh giá (reviewer).
        - Kiểm tra CI/CD (qua GitHub Actions) phải thành công.

- **Tự động hóa với GitHub Actions**:
    - Tạo workflow để kiểm tra mã tự động khi đẩy lên nhánh `develop` hoặc tạo PR:
      ```yaml
      name: CI
      on:
        push:
          branches: [ develop ]
        pull_request:
          branches: [ main ]
      jobs:
        test:
          runs-on: ubuntu-latest
          steps:
            - uses: actions/checkout@v3
            - name: Run tests
              run: echo "Chạy kiểm tra mã nguồn"
      ```

- **Thông điệp cam kết chuẩn hóa**:
    - Sử dụng **Conventional Commits** (ví dụ: `feat: thêm tệp mẫu`, `fix: sửa lỗi tệp`) để tạo changelog tự động và hỗ trợ versioning.

- **Công cụ hỗ trợ**:
    - Sử dụng **GitHub CLI** để tạo và quản lý PR:
      ```bash
      gh pr create --base main --head develop --title "Hợp nhất develop vào main"
      ```
'avance GitHub Flow**: Tạo nhánh tính năng từ `main`, đẩy mã, tạo PR, và hợp nhất sau khi xem xét.

## 7. Tầm quan trọng của Hợp nhất
- **Tích hợp mã nguồn**: Hợp nhất đưa các tính năng mới hoặc sửa lỗi vào nhánh chính, sẵn sàng cho triển khai.
- **Kiểm soát chất lượng**: Sử dụng Pull Requests để xem xét mã, đảm bảo không đưa mã lỗi vào sản phẩm.
- **Hỗ trợ làm việc nhóm**: Cho phép nhiều nhà phát triển làm việc song song trên các nhánh riêng, sau đó tích hợp mã một cách có tổ chức.
- **Tránh xung đột**: Đồng bộ hóa thường xuyên với nhánh chính giúp giảm thiểu xung đột khi hợp nhất.

Bằng cách sử dụng `git merge` và Pull Requests trên GitHub, bạn có thể quản lý và tích hợp mã nguồn một cách hiệu quả, đảm bảo quy trình phát triển phù hợp với các tiêu chuẩn DevOps hiện đại!
---
course: devpops_ultimate
module: module_2
title: "Thuật ngữ chính của Git trong DevOps"
order: 2
pubDate: 2025-06-26
updatedDate: 2025-06-26
---


## 1. Tổng quan về bài giảng
Bài giảng này giới thiệu các thuật ngữ cốt lõi của Git, một công cụ kiểm soát phiên bản quan trọng trong DevOps. Hiểu rõ các thuật ngữ này là nền tảng để làm việc hiệu quả với Git trong suốt khóa học và các dự án thực tế. Các thuật ngữ sẽ được sử dụng nhiều lần trong các bài giảng tiếp theo, bao gồm kho lưu trữ Git, vùng làm việc, vùng tạm, và nhánh.

### Mục tiêu bài giảng
- Hiểu rõ khái niệm **Git Repository** (kho lưu trữ Git) và vai trò của nó.
- Nắm bắt các giai đoạn làm việc của Git: **Working Directory**, **Staging Area**, và **Git Directory**.
- Hiểu khái niệm **Remote Repository** và vai trò của nó trong việc bảo vệ mã nguồn.
- Làm quen với khái niệm **Branch** (nhánh) và ý nghĩa của nó trong phát triển phần mềm.

## 2. Git Repository (Kho lưu trữ Git) là gì?
Git Repository là một thư mục lưu trữ tất cả các tệp, lịch sử thay đổi, và cấu hình được quản lý bởi Git trong một dự án. Thư mục này thường là một thư mục ẩn có tên `.git`, được tạo khi bạn khởi tạo Git trong dự án.

### Đặc điểm của Git Repository
- **Vị trí:** Thư mục `.git` nằm trong thư mục gốc của dự án trên máy cục bộ (local machine).
- **Nội dung:**
    - Lưu trữ lịch sử thay đổi của các tệp (file history).
    - Ghi lại các thao tác Git (commit, merge, branch, v.v.).
    - Chứa cấu hình dự án (ví dụ: thông tin kho lưu trữ từ xa, tên người dùng).
- **Tầm quan trọng:**
    - Là trung tâm quản lý phiên bản mã nguồn của dự án.
    - Nếu thư mục `.git` bị xóa, toàn bộ lịch sử theo dõi phiên bản sẽ mất, chỉ còn lại các tệp cục bộ không được Git quản lý.

### Ví dụ minh họa
- Giả sử bạn làm việc trên dự án **Project A**:
    - Bạn khởi tạo Git trong thư mục dự án bằng lệnh `git init`.
    - Git tạo một thư mục ẩn `.git` trong thư mục **Project A**.
    - Thư mục `.git` chứa:
        - Lịch sử các commit.
        - Thông tin về các nhánh (branches).
        - Các thay đổi được theo dõi (file modifications).
- Mọi thao tác Git (commit, push, merge) đều được ghi nhận trong thư mục `.git`.

### Cách truy cập thư mục `.git`
- **Windows:**
    - Thư mục `.git` là thư mục ẩn, cần bật tùy chọn **Show hidden files** trong File Explorer để xem.
- **macOS/Linux/Unix:**
    - Sử dụng lệnh `ls -a` trong terminal để hiển thị các tệp/thư mục ẩn, bao gồm `.git`.
- **Lưu ý:** Chỉ khởi tạo Git (`git init`) khi muốn bắt đầu quản lý phiên bản dự án. Không chỉnh sửa trực tiếp thư mục `.git` để tránh làm hỏng kho lưu trữ.

## 3. Các giai đoạn làm việc trong Git
Git hoạt động dựa trên ba giai đoạn chính: **Working Directory**, **Staging Area**, và **Git Directory**. Hiểu rõ các giai đoạn này giúp bạn quản lý mã nguồn hiệu quả.

### 3.1. Working Directory (Vùng làm việc)
- **Định nghĩa:** Là thư mục gốc của dự án, chứa tất cả các tệp mã nguồn mà bạn đang làm việc.
- **Đặc điểm:**
    - Bao gồm các tệp mã nguồn, thư mục con (subdirectories), và các mô-đun của dự án.
    - Được gọi là **untracked area** (vùng chưa được theo dõi) cho đến khi bạn thực hiện các thay đổi và thêm chúng vào Git.
    - Các tệp trong vùng này là "bản sống" (live files), nơi bạn chỉnh sửa và viết mã.
- **Ví dụ:**
    - Thư mục dự án **Project A** chứa:
        - Thư mục `src` cho mã nguồn.
        - Thư mục `tests` cho kiểm thử.
        - Các tệp như `README.md`, `main.py`.
    - Đây là nơi bạn chỉnh sửa tệp, nhưng Git chưa theo dõi thay đổi cho đến khi bạn thực hiện các lệnh như `git add`.

### 3.2. Staging Area (Vùng tạm)
- **Định nghĩa:** Là khu vực trung gian nơi Git bắt đầu theo dõi các thay đổi của bạn trước khi lưu trữ chúng vào kho lưu trữ.
- **Đặc điểm:**
    - Khi bạn thực hiện thay đổi trong Working Directory và thêm chúng bằng lệnh `git add`, các thay đổi được ghi vào Staging Area.
    - Staging Area cho phép bạn chọn lọc thay đổi nào sẽ được commit vào kho lưu trữ.
- **Ví dụ:**
    - Bạn chỉnh sửa tệp `main.py` và `README.md` trong Working Directory.
    - Dùng lệnh `git add main.py` để thêm `main.py` vào Staging Area.
    - Chỉ `main.py` được chuẩn bị để commit, `README.md` vẫn chưa được theo dõi.

### 3.3. Git Directory (Local Repository)
- **Định nghĩa:** Là thư mục `.git`, còn gọi là kho lưu trữ cục bộ (local repository), nơi lưu trữ tất cả lịch sử, thay đổi, và cấu hình của dự án.
- **Đặc điểm:**
    - Chứa toàn bộ dữ liệu Git, bao gồm:
        - Lịch sử commit.
        - Thông tin nhánh (branches).
        - Các thay đổi được theo dõi (tracked changes).
    - Đây là nơi lưu trữ chính thức các thay đổi sau khi bạn thực hiện `git commit`.
- **Ví dụ:**
    - Sau khi dùng `git commit` để lưu `main.py` từ Staging Area, thay đổi được ghi vào thư mục `.git`.
    - Thư mục `.git` lưu trữ thông tin như ai commit, khi nào, và thay đổi gì.

### Tóm tắt ba giai đoạn
- **Working Directory:** Vùng chưa được theo dõi, chứa các tệp mã nguồn bạn đang chỉnh sửa.
- **Staging Area:** Vùng tạm, nơi Git theo dõi các thay đổi đã chọn để chuẩn bị commit.
- **Git Directory:** Kho lưu trữ cục bộ, chứa lịch sử và dữ liệu Git.

### Lưu ý
- Các giai đoạn này có thể khó hình dung khi mới bắt đầu, nhưng sẽ rõ ràng hơn qua thực hành (hands-on labs) trong các bài giảng sau.
- Quy trình làm việc: **Chỉnh sửa (Working Directory) → **Thêm vào tạm (Staging Area)** → **Lưu trữ (Git Directory)**.

## 4. Remote Repository (Kho lưu trữ từ xa)
- **Định nghĩa:** Là kho lưu trữ Git được lưu trữ trên máy chủ từ xa (như GitHub, GitLab, hoặc máy chủ nội bộ), nơi nhóm phát triển đồng bộ mã nguồn.
- **Vai trò:**
    - Lưu trữ mã nguồn an toàn, tránh mất dữ liệu nếu máy cục bộ bị hỏng.
    - Hỗ trợ cộng tác giữa các nhà phát triển trong nhóm, cho phép đẩy (push) và kéo (pull) mã.
- **Ví dụ:**
    - Bạn phát triển mã trên máy cục bộ và đẩy mã lên kho lưu trữ GitHub.
    - Đồng đội có thể kéo mã từ GitHub về máy của họ để làm việc.
    - Nếu máy cục bộ của bạn bị hỏng, mã vẫn an toàn trên GitHub.
- **Cập nhật 2025:** Remote Repository tích hợp với các pipeline CI/CD (như GitHub Actions, GitLab CI/CD) để tự động xây dựng, kiểm thử, và triển khai.

## 5. Branch (Nhánh) trong Git
- **Định nghĩa:** Nhánh là một con trỏ (pointer) đến một chuỗi commit, cho phép phát triển các tính năng mới hoặc sửa lỗi mà không ảnh hưởng đến mã chính của dự án.
- **Cách hình dung:**
    - Git giống như một cái cây, với nhánh chính (main/master branch) là thân cây.
    - Các nhánh phụ (feature branches) là các cành cây, chứa các tính năng hoặc sửa đổi riêng biệt.
    - Nếu một nhánh bị lỗi hoặc không cần nữa, nó có thể bị xóa mà không ảnh hưởng đến nhánh chính.
- **Ứng dụng:**
    - Phát triển tính năng mới trên nhánh riêng (feature branch).
    - Sửa lỗi trên nhánh sửa lỗi (bugfix branch).
    - Sau khi hoàn thành, nhánh được hợp nhất (merge) vào nhánh chính.
- **Ví dụ:**
    - Bạn tạo nhánh `feature/login` để phát triển chức năng đăng nhập.
    - Sau khi hoàn thành, merge nhánh `feature/login` vào nhánh `main`.
    - Nếu chức năng đăng nhập có lỗi, nhánh `feature/login` có thể bị xóa mà không ảnh hưởng đến `main`.
- **Cập nhật 2025:** Các mô hình nhánh như **Gitflow** và **Trunk-based Development** được sử dụng phổ biến trong DevOps để quản lý nhánh hiệu quả.

## 6. Tổng hợp các thuật ngữ chính
- **Git Repository:** Thư mục `.git`, chứa lịch sử, thay đổi, và cấu hình của dự án.
- **Working Directory:** Thư mục dự án, chứa các tệp mã nguồn chưa được Git theo dõi.
- **Staging Area:** Vùng tạm, nơi Git theo dõi các thay đổi đã chọn để commit.
- **Git Directory:** Kho lưu trữ cục bộ (`.git`), lưu trữ tất cả dữ liệu Git.
- **Remote Repository:** Kho lưu trữ từ xa (như GitHub), nơi đồng bộ mã nguồn.
- **Branch:** Nhánh, cho phép phát triển song song mà không ảnh hưởng đến mã chính.

## 7. Cập nhật theo xu hướng DevOps năm 2025
- **GitOps:** Sử dụng Git làm nguồn sự thật duy nhất để quản lý mã nguồn và cơ sở hạ tầng.
- **Tích hợp AI:** GitHub Copilot và các công cụ AI khác hỗ trợ đề xuất mã và quản lý nhánh trực tiếp từ kho lưu trữ.
- **Bảo mật kho lưu trữ:** Các công cụ như Dependabot và CodeQL tích hợp với GitHub để kiểm tra lỗ hổng bảo mật trong mã nguồn.
- **Quản lý nhánh tự động:** Các pipeline CI/CD tự động xóa nhánh sau khi merge, tối ưu hóa quy trình.

## 8. Tổng kết
Bài giảng này đã giới thiệu các thuật ngữ cốt lõi của Git: Git Repository, Working Directory, Staging Area, Git Directory, Remote Repository, và Branch. Hiểu rõ các khái niệm này là bước đầu tiên để làm việc hiệu quả với Git trong DevOps. Các bài giảng tiếp theo sẽ đi sâu vào cách sử dụng lệnh Git, thực hành quản lý kho lưu trữ, và tích hợp với các công cụ như GitHub, Maven, Jenkins, và Docker.
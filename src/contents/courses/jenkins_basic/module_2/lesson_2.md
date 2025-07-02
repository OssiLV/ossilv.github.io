---
course: jenkins_basic
module: module_2
title: "[CONFIG] General"
order: 2
pubDate: 2025-07-01
updatedDate: 2025-07-01
---

## 1. Disable this project

> Vô hiệu hóa job — Jenkins sẽ không chạy job này, dù có trigger.

## 2. Discard Old Builds

> Giúp tự động xóa các build cũ để tiết kiệm dung lượng.

| Trường cấu hình                | Ý nghĩa                             |
| ------------------------------ | ----------------------------------- |
| `Max # of builds to keep`      | Giữ lại tối đa bao nhiêu bản build  |
| `Max # of days to keep builds` | Giữ lại build tối đa bao nhiêu ngày |

## 3. GitHub project

- Tích vào nếu project dùng GitHub. 
- Dùng để tạo liên kết từ Jenkins → GitHub trong giao diện job.

## 4. This project is parameterized

> Cho phép khai báo biến đầu vào khi build job.

| Parameter                 | Kiểu dữ liệu       | Dùng khi...                            |
| ------------------------- | ------------------ | -------------------------------------- |
| **String Parameter**      | Chuỗi ngắn         | Tên nhánh, tag, bản build              |
| **Boolean Parameter**     | true / false       | Bật/tắt test, deploy                   |
| **Choice Parameter**      | Chọn một giá trị   | Chọn môi trường, server, ngôn ngữ      |
| **Multi-line String**     | Chuỗi nhiều dòng   | Email list, config script              |
| **Password Parameter**    | Chuỗi ẩn           | API Key, mật khẩu                      |
| **File Parameter**        | File upload        | Đưa file input vào job                 |
| **Run Parameter**         | Build của job khác | Chọn output từ job khác để dùng tiếp   |
| **Credentials Parameter** | Chọn credentials   | Chọn SSH key, username/password đã lưu |


## 5. Throttle builds (nếu cài plugin Throttle Concurrent Builds)

Giới hạn số lượng bản build chạy song song theo:
- Toàn hệ thống 
- Từng nhãn (label)
- Từng project

## 6. Execute concurrent builds if necessary

- Cho phép chạy nhiều bản build cùng lúc.
- Nếu không bật, Jenkins sẽ xếp hàng đợi nếu job đang chạy.

## 7. Advanced

### 7.1. Quiet period

>  Jenkins sẽ chờ bao lâu (tính bằng giây) trước khi thực hiện build sau khi được trigger.

- Mặc định: 0 giây (ngay lập tức)
- Thường dùng khi:
  - Có thể có nhiều trigger liên tục, ví dụ push liên tục
  - Bạn muốn gộp nhiều commit lại rồi mới build

Ví dụ: `Quiet period = 10` → Jenkins sẽ đợi 10 giây rồi mới build sau khi nhận trigger (poll SCM, webhook...)

### 7.2. Retry Count

> Nếu build bị fail ngay từ đầu (thường do vấn đề Git, SCM...), Jenkins sẽ tự thử lại mấy lần?

- Dùng cho trường hợp GitHub bị lag, SCM chưa sẵn sàng
- Không áp dụng cho các bước build sau (chỉ SCM checkout)

Ví dụ: `Retry Count = 3` → Jenkins sẽ thử lại 3 lần trước khi kết luận lỗi.

### 7.3. Block build when upstream project is building

> Nếu job phụ thuộc (upstream) đang chạy → Jenkins sẽ chờ job đó chạy xong mới build.
>
> `Upstream` nghĩa là job trước đó.

- Dùng trong chuỗi pipeline phân mảnh, ví dụ:
  -  build-job → test-job → deploy-job
  - Bạn không muốn deploy-job chạy khi build-job đang chạy

### 7.4. Block build when downstream project is building

> Nếu job phụ thuộc phía sau (downstream) đang chạy → job này sẽ không được build cho đến khi downstream xong.
> 
> `Downstream` nghĩa là job phía sau, chạy khi job hiện tại kết thúc.

- Ít dùng hơn, thường dành cho hệ thống CI/CD có đồng bộ trạng thái phức tạp

### 7.5. Use custom workspace

> Thay vì dùng workspace mặc định, bạn chỉ định một thư mục cụ thể.

- Mặc định Jenkins build tại:

  ```text
  /var/jenkins_home/workspace/<job-name>
  ```
  
- Nếu bạn muốn dùng thư mục khác (đặc biệt nếu cần nhiều job build chung chỗ), bạn bật tùy chọn này và chỉ định path.

### 7.6. Display Name

> Tên hiển thị của build, thay thế cho #1, #2 mặc định.

- Hữu ích khi bạn muốn build hiển thị rõ ràng hơn, ví dụ:
- 
  ```text
  Display Name: Build-${BUILD_NUMBER}-ENV-${ENV}
  ```
  
### 7.7. Keep the build logs of dependencies

> Giữ lại log của các job liên quan (upstream/downstream) cùng với log của build hiện tại.

- Dùng trong hệ thống nhiều job liên kết, để dễ debug về sau.

Ví dụ:

- Bạn đang ở deploy-job 
- Nếu bật tùy chọn này → Jenkins sẽ giữ log của build-job và test-job kèm theo.

### 7.8. Tóm tắt trong Advanced

| Tùy chọn                            | Công dụng chính                       |
| ----------------------------------- | ------------------------------------- |
| **Quiet period**                    | Trì hoãn chạy build vài giây          |
| **Retry Count**                     | Tự động thử lại khi SCM lỗi           |
| **Block if upstream is building**   | Chờ job trước hoàn thành              |
| **Block if downstream is building** | Chờ job sau hoàn thành                |
| **Use custom workspace**            | Thay đổi nơi build                    |
| **Display Name**                    | Tùy chỉnh tên build thay vì `#1`      |
| **Keep logs of dependencies**       | Lưu log các job liên quan để dễ debug |

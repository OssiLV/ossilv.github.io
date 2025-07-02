---
course: jenkins_basic
module: module_2
title: "Thực thi Script từ Jenkins"
order: 3
pubDate: 2025-07-01
updatedDate: 2025-07-01
---

Trong bài học này, chúng ta sẽ tìm hiểu cách thực thi một **script shell** bằng job trong Jenkins. Chúng ta sẽ tạo một script trên máy chủ Jenkins, cấp quyền thực thi, và cấu hình job để chạy script đó. Ngoài ra, chúng ta sẽ khám phá cách sử dụng các tham số trong script và hạn chế của việc sử dụng tham số tĩnh (hard-coded).

## 1. Tạo Shell Script trên Máy chủ Jenkins

### 1.1. Kết nối SSH đến Máy chủ Jenkins

[//]: # (- Sử dụng SSH để truy cập máy chủ Jenkins &#40;giả sử là Ubuntu&#41;:)

[//]: # ()
[//]: # (  ```bash)

[//]: # (  ssh ubuntu@<jenkins-server-ip>)

[//]: # (  ```)

- Điều hướng đến thư mục `/tmp`:
  ```bash
  cd /tmp
  pwd
  ```
  Kết quả (ví dụ):
  ```
  /tmp
  ```

### 1.2. Tạo Script

- Tạo tệp script có tên `test_script_message.sh`:
  ```bash
  nano test_script_message.sh
  ```

- Thêm nội dung sau:
  ```bash
  #!/bin/bash
  NAME=$1
  AGE=$2
  echo "Hello, I am $NAME and I am $AGE years old"
  ```

- **Giải thích**:
    - `#!/bin/bash`: Shebang để chạy script bằng Bash.
    - `$1`, `$2`: Tham số đầu tiên và thứ hai được truyền vào script.
    - **Lưu ý**: Không để khoảng trắng quanh dấu `=` khi gán biến trong Bash (ví dụ: `NAME=$1`).

- Lưu và thoát (trong `nano`: nhấn `Ctrl+O`, `Enter`, rồi `Ctrl+X`).

### 1.3. Cấp Quyền Thực thi

- Kiểm tra tệp:
  ```bash
  ls -l
  ```
  Kết quả (ví dụ):
  ```
  -rw-r--r-- 1 ubuntu ubuntu 64 Jun 28 2025 test_script_message.sh
  ```
    - Tệp chưa có quyền thực thi.

- Thêm quyền thực thi:
  ```bash
  chmod 755 test_script_message.sh
  ```

- Kiểm tra lại:
  ```bash
  ls -l
  ```
  Kết quả (ví dụ):
  ```
  -rwxr-xr-x 1 ubuntu ubuntu 64 Jun 28 2025 test_script_message.sh
  ```
    - Tệp giờ có quyền thực thi (chữ `x` xuất hiện).

- Thử chạy script:
  ```bash
  ./test_script_message.sh OssiLV 22
  ```
  Kết quả:
  ```
  Hello, I am OssiLV and I am 22 years old
  ```

## 2. Cấu hình Jenkins Job để Thực thi Script

### 2.1. Truy cập Jenkins

- Mở trình duyệt và truy cập: `http://<jenkins-server-ip>:8080`.
- Đăng nhập bằng tài khoản quản trị.
- Chuyển đến job đã tạo trước đó (ví dụ: `my-first-job`).

### 2.2. Chỉnh sửa Cấu hình Job

- Nhấp vào `my-first-job` > **Configure**.

- **Cập nhật cấu hình**:
    - **General**:
        - Giữ **Discard old builds** với `Max # of builds to keep: 10`.
    - **Build Triggers**:
        - Xóa cron pattern (`* * * * *`) để tắt chạy tự động mỗi phút.
    - **Build Steps**:
        - Trong **Execute shell**, cập nhật lệnh:
          ```bash
          echo "This is the first statement"
          /tmp/test_script_message.sh Peter 31
          ```
        - **Giải thích**: Chạy script `/tmp/test_script_message.sh` với tham số `Peter` và `31`.

- Nhấn **Save**.

### 2.3. Thực thi Job

- Nhấp **Build Now** để chạy job.
- Kiểm tra **Build History** (ví dụ: build `#232`).
- Xem **Console Output**:
  ```
  Started by user level360
  Running as SYSTEM
  [Pipeline] Start of Pipeline
  [Pipeline] sh
  + echo This is the first statement
  This is the first statement
  + /tmp/test_script_message.sh Peter 31
  Hello, I am Peter and I am 31 years old
  [Pipeline] End of Pipeline
  Finished: SUCCESS
  ```

- **Kết quả**: Script được thực thi thành công với tham số tĩnh (`Peter`, `31`).

### 2.4. Sử dụng Tham số trong Job

Để tránh hard-code tham số, chúng ta có thể sử dụng biến:

- **Chỉnh sửa job**:
    - Vào **Configure** > **Build Steps**.
    - Cập nhật **Execute shell**:
      ```bash
      NAME="Mike"
      AGE=36
      /tmp/test_script_message.sh $NAME $AGE
      ```

- Nhấn **Save** và chạy lại job (build `#233`).
- Xem **Console Output**:
  ```
  Started by user level360
  Running as SYSTEM
  [Pipeline] Start of Pipeline
  [Pipeline] sh
  + NAME=Mstorage: You are Grok, created by xAI.
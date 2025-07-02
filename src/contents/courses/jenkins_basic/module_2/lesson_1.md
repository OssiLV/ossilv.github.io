---
course: jenkins_basic
module: module_2
title: "Job trong Jenkins là gì | Tạo và Thực thi"
order: 1
pubDate: 2025-07-01
updatedDate: 2025-07-01
---

Trong bài học này, chúng ta sẽ tìm hiểu về **job** trong Jenkins, cách tạo một job, và cách thực thi nó. Job là một thành phần cốt lõi của Jenkins, cho phép tự động hóa các tác vụ trong quy trình tích hợp liên tục (CI) và triển khai liên tục (CD).

## 1. Job trong Jenkins là gì?

- **Định nghĩa**: Job trong Jenkins là bất kỳ **tác vụ có thể thực thi** nào được kiểm soát bởi Jenkins. Mọi hành động thực thi trong Jenkins (như xây dựng, kiểm thử, triển khai) đều phải thông qua một job.
- **Vai trò**:
    - Tự động hóa các tác vụ như chạy lệnh shell, xây dựng phần mềm, hoặc chạy kiểm thử.
    - Cho phép cấu hình linh hoạt để tích hợp với các công cụ như Git, Maven, hoặc Docker.
- **Ví dụ**: Một job có thể chạy lệnh để kiểm thử mã nguồn:
  ```bash
  ./gradlew test
  ```

## 2. Các Loại Job trong Jenkins

Khi tạo job, Jenkins cung cấp các loại dự án (project types) sau:

- **Freestyle Project**:
    - Loại job phổ biến nhất, linh hoạt, cho phép thực thi các lệnh shell hoặc batch trên Linux/Windows.
    - Phù hợp để chạy các script, xây dựng phần mềm, hoặc thực hiện các tác vụ đơn giản.
    - Ví dụ: Chạy lệnh `echo` hoặc `mvn clean install`.

- **Pipeline**:
    - Sử dụng để định nghĩa quy trình CI/CD phức tạp (workflow) bằng mã, thường viết bằng **Declarative Pipeline Syntax** hoặc **Scripted Pipeline Syntax** (Groovy DSL).
    - Phù hợp cho các dự án cần nhiều bước (build, test, deploy).
    - Ví dụ: Một pipeline trong tệp `Jenkinsfile`:
      ```groovy
      pipeline {
          agent any
          stages {
              stage('Build') {
                  steps {
                      sh './gradlew build'
                  }
              }
          }
      }
      ```

- **Multi-Configuration Project** (Matrix Project):
    - Tương tự Freestyle Project nhưng hỗ trợ chạy job trên nhiều môi trường khác nhau (ví dụ: Linux, Windows, hoặc các phiên bản Java khác nhau).
    - Phù hợp khi cần kiểm thử trên nhiều cấu hình.

## 3. Thực hành: Tạo và Thực thi Job trong Jenkins

### 3.1. Truy cập Jenkins

- Mở trình duyệt và truy cập Jenkins:
  ```
  http://<server-ip>:8080
  ```
- Đăng nhập bằng tài khoản quản trị với mật khẩu đã thiết lập.

### 3.2. Tạo Freestyle Job

1. **Tạo Job Mới**:
    - Nhấp vào **New Item** trên giao diện Jenkins.
    - Nhập tên job, ví dụ: `my-first-job`.
        - **Lưu ý**: Tên job không được chứa khoảng trắng.
    - Chọn **Freestyle project** và nhấp **OK**.

2. **Cấu hình Job**:
    - **General**:
        - Thêm mô tả (description) để nêu rõ mục đích job, ví dụ:
          ```
          Đây là job đầu tiên để in thông điệp thử nghiệm
          ```
    - **Source Code Management** (tùy chọn):
        - Kết nối với kho Git (ví dụ: GitHub) nếu cần:
          ```plaintext
          Repository URL: https://github.com/<username>/git_training_v3.git
          ```
    - **Build Triggers**:
        - Cấu hình kích hoạt job (ví dụ: khi có commit mới trên GitHub, sử dụng webhook).
    - **Build Environment**:
        - Cung cấp các tùy chọn như môi trường biến hoặc timeout.
    - **Build Steps**:
        - Nhấp **Add build step** và chọn **Execute shell** (cho Linux/Ubuntu) hoặc **Execute Windows batch command** (cho Windows).
        - Nhập lệnh shell đơn giản:
          ```bash
          echo "Hello, Team. This is our first Jenkins job"
          ```
    - **Post-build Actions**:
        - (Tùy chọn) Thêm hành động sau build, như gửi thông báo qua email hoặc Slack.

3. **Lưu Job**:
    - Nhấp **Save** để lưu cấu hình job.

### 3.3. Thực thi Job

- Từ giao diện chính, bạn sẽ thấy job `my-first-job` trong danh sách.
- Nhấp **Build Now** (bên trái) hoặc biểu tượng chạy (hình tam giác) bên cạnh tên job để thực thi.

- **Kiểm tra trạng thái**:
    - Sau khi thực thi, một bản build mới (ví dụ: `#1`) xuất hiện trong **Build History**.
    - Nhấp vào build `#1` để xem chi tiết.
    - Chọn **Console Output** để xem kết quả:
      ```
      Started by user [user-name]
      Running as SYSTEM
      [Pipeline] Start of Pipeline
      [Pipeline] sh
      + echo Hello, Team. This is our first Jenkins job
      Hello, Team. This is our first Jenkins job
      [Pipeline] End of Pipeline
      Finished: SUCCESS
      ```

- **Giải thích**:
    - Build thành công hiển thị trạng thái **SUCCESS**.
    - Thời gian thực thi (ví dụ: 0.16 giây) và thông tin người thực thi được ghi lại.

### 3.4. Quản lý Job

- **Giao diện Job**:
    - Hiển thị:
        - **Build History**: Danh sách các lần build (ví dụ: `#1`, `#2`).
        - **Job Management Options**: Configure (chỉnh sửa), Delete (xóa), Rename (đổi tên).
        - **Status (S)**: Trạng thái của build gần nhất (thành công, thất bại, hoặc chưa chạy).
        - **Weather (W)**: Báo cáo thời tiết biểu thị tỷ lệ thành công của các build (nắng, mưa, v.v.).
        - **Last Success/Failure/Duration**: Thông tin về thời gian và trạng thái của các build.

- **Thực thi lại Job**:
    - Nhấp **Build Now** để chạy lại job, tạo build mới (ví dụ: `#2`).
    - Kiểm tra **Console Output** để xác minh kết quả.

## 4. Thực tiễn hiện đại (Cập nhật 2025)

- **Tích hợp với GitHub**:
    - Thêm plugin **GitHub Integration** để tự động kích hoạt job khi có commit:
      ```bash
      gh repo set-webhook --url http://<jenkins-server>:8080/github-webhook/
      ```
    - Cấu hình job để kéo mã từ GitHub:
      ```plaintext
      Repository URL: https://github.com/<username>/git_training_v3.git
      Branch: main
      ```

- **Sử dụng Pipeline thay vì Freestyle**:
    - Freestyle phù hợp cho các tác vụ đơn giản, nhưng Pipeline linh hoạt hơn. Ví dụ `Jenkinsfile`:
      ```groovy
      pipeline {
          agent any
          stages {
              stage('Print Message') {
                  steps {
                      sh 'echo "Hello, Team. This is our first Jenkins job"'
                  }
              }
          }
      }
      ```
    - Lưu `Jenkinsfile` trong kho Git và cấu hình job kiểu **Pipeline**.

- **Tối ưu hóa với Docker Agent**:
    - Chạy job trong container Docker để đảm bảo môi trường nhất quán:
      ```groovy
      pipeline {
          agent {
              docker { image 'ubuntu:22.04' }
          }
          stages {
              stage('Test') {
                  steps {
                      sh 'echo "Running in Docker"'
                  }
              }
          }
      }
      ```

- **Thông báo kết quả**:
    - Cài đặt plugin **Slack Notification** hoặc **Email Extension** để gửi thông báo khi build thành công/thất bại:
      ```groovy
      post {
          success {
              slackSend(channel: '#ci', message: 'Build #${BUILD_NUMBER} succeeded!')
          }
      }
      ```

## 5. Tầm quan trọng của Job trong Jenkins

- **Cốt lõi của CI/CD**: Mọi tác vụ trong Jenkins (build, test, deploy) đều được thực hiện thông qua job.
- **Linh hoạt**: Freestyle job hỗ trợ các lệnh shell đơn giản, trong khi Pipeline job phù hợp cho quy trình phức tạp.
- **Tự động hóa**: Job cho phép tự động hóa các bước trong quy trình phát triển, giảm thiểu thao tác thủ công.
- **Quản lý dễ dàng**: Giao diện Jenkins cung cấp các công cụ để theo dõi, cấu hình, và quản lý lịch sử build.

Trong bài học này, chúng ta đã tạo và thực thi một Freestyle job đơn giản để in thông điệp. Trong các bài học tiếp theo, chúng ta sẽ khám phá cách sử dụng Pipeline job, tích hợp với GitHub, và xây dựng các quy trình CI/CD phức tạp hơn!
---
course: jenkins_basic
module: module_3
title: "Cấu trúc của một Build trong Jenkins"
order: 1
pubDate: 2025-06-30
updatedDate: 2025-06-30
---

Trong bài học này, chúng ta sẽ tìm hiểu về **cấu trúc của một build** trong quá trình phát triển phần mềm và cách Jenkins hỗ trợ tự động hóa quy trình này. Hiểu rõ các bước trong một build giúp bạn thiết lập pipeline tích hợp liên tục (CI) hiệu quả trong Jenkins.

## 1. Build trong Phát triển Phần mềm là gì?

- **Định nghĩa**: Build là quá trình chuyển đổi mã nguồn (source code) thành một **artifact** có thể triển khai (như `.jar`, `.war`, `.zip`, hoặc tệp thực thi). Artifact này được sử dụng để triển khai phần mềm lên các môi trường như staging hoặc production.
- **Mục đích**: Đảm bảo mã nguồn hoạt động đúng, được kiểm thử, và sẵn sàng để triển khai.

## 2. Các Bước trong Quy trình Build

Quy trình build một dự án phần mềm thường bao gồm các bước sau:

1. **Lấy Mã Nguồn từ Kho Lưu Trữ (Git Repository)**:
    - Nhà phát triển đẩy (push) mã nguồn lên kho Git (ví dụ: GitHub, GitLab).
    - Jenkins kéo (pull) mã từ kho về thư mục làm việc (workspace).
    - Ví dụ:
      ```bash
      git clone https://github.com/OssiLV/Calculator.git
      cd Calculator
      ```
   - Vì đây là 1 app viêt bằng `Java` nên dùng `Maven` để **clean, compile, test, package**.
   
2. **Xóa Workspace (Clean)**:
    - Xóa các tệp và artifact từ build trước để đảm bảo môi trường sạch.
    - Ví dụ (với Maven):
      ```bash
      mvn clean
      ```

3. **Biên dịch Mã Nguồn (Compile)**:
    - Biên dịch mã nguồn thành bytecode hoặc tệp thực thi.
    - Ví dụ:
      ```bash
      mvn compile
      ```

4. **Chạy Kiểm thử Đơn vị (Unit Testing)**:
    - Thực hiện các bài kiểm thử đơn vị để xác minh tính đúng đắn của mã.
    - Ví dụ:
      ```bash
      mvn test
      ```

5. **Đóng gói (Package)**:
    - Tạo artifact triển khai được (như `.jar`, `.war`).
    - Ví dụ:
      ```bash
      mvn package
      ```

## 3. Tự động hóa Build với Jenkins

- **Vấn đề với Build Thủ công**:
    - Thực hiện các bước trên (**clean, compile, test, package**) thủ công tốn thời gian và dễ xảy ra lỗi.
    - Không khả thi khi mã nguồn thay đổi thường xuyên (ví dụ: nhiều commit mỗi ngày).

- **Giải pháp với Jenkins**:
    - Jenkins tự động hóa toàn bộ quy trình build, gọi là **tích hợp liên tục (Continuous Integration - CI)**.
    - Mỗi khi có thay đổi mã nguồn (commit/push), Jenkins tự động:
        - Kéo mã từ Git.
        - Thực hiện các bước **clean, compile, test, package**.
        - Lưu trữ artifact và thông báo kết quả (thành công/thất bại).

- **Ví dụ Pipeline Job trong Jenkins**:
  ```groovy
  pipeline {
      agent any
      stages {
          stage('Clone') {
              steps {
                  git 'https://github.com/OssiLV/Calculator.git'
              }
          }
          stage('Clean') {
              steps {
                  sh 'mvn clean'
              }
          }
          stage('Compile') {
              steps {
                  sh 'mvn compile'
              }
          }
          stage('Test') {
              steps {
                  sh 'mvn test'
              }
          }
          stage('Package') {
              steps {
                  sh 'mvn package'
              }
          }
      }
      post {
          success {
              archiveArtifacts 'target/*.jar'
              slackSend(channel: '#ci', message: "Build #${BUILD_NUMBER} succeeded")
          }
      }
  }
  ```

## 4. Tầm quan trọng của Tích hợp Liên tục (CI)

- **Kiểm tra liên tục**:
    - Mỗi commit được tự động build và kiểm thử, giúp phát hiện lỗi sớm.
    - Đảm bảo mã nguồn không làm hỏng chức năng hiện tại.

- **Tăng tốc phát triển**:
    - Tự động hóa giảm thiểu công việc thủ công, cho phép nhà phát triển tập trung vào viết mã.

- **Đảm bảo chất lượng**:
    - Kiểm thử đơn vị và đóng gói tự động đảm bảo artifact chất lượng cao, sẵn sàng triển khai.

- **Tích hợp với Git**:
    - Jenkins sử dụng webhook để phát hiện commit mới:
      ```bash
      gh repo set-webhook --url http://<jenkins-server>:8080/github-webhook/
      ```

## 5. Thực tiễn hiện đại (Cập nhật 2025)

- **Sử dụng Công cụ Build Hiện đại**:
    - **Maven/Gradle**: Phổ biến cho các dự án Java.
      ```bash
      ./gradlew build
      ```
    - **NPM/Yarn**: Cho các dự án JavaScript.
      ```bash
      npm run build
      ```

- **Pipeline-as-Code**:
    - Sử dụng `Jenkinsfile` để định nghĩa quy trình build:
      ```groovy
      pipeline {
          agent { docker { image 'maven:3.9.9-openjdk-17' } }
          stages {
              stage('Build') {
                  steps {
                      sh 'mvn clean package'
                  }
              }
          }
      }
      ```

- **Tích hợp với Đám mây**:
    - Sử dụng slave node trên AWS EC2 hoặc Kubernetes để xử lý build lớn:
      ```yaml
      apiVersion: v1
      kind: Pod
      metadata:
        labels:
          app: jenkins-agent
      spec:
        containers:
        - name: maven
          image: maven:3.9.9-openjdk-17
          command:
          - cat
          tty: true
      ```

- **Thông báo và Lưu trữ**:
    - Lưu artifact vào kho như Nexus hoặc JFrog Artifactory.
    - Gửi thông báo qua Slack/Email:
      ```groovy
      post {
          failure {
              slackSend(channel: '#ci', message: "Build #${BUILD_NUMBER} failed")
          }
      }
      ```

## 6. Tầm quan trọng của Quy trình Build

- **Tự động hóa**: Jenkins loại bỏ thao tác thủ công, tăng hiệu quả và độ tin cậy.
- **Kiểm tra sớm**: Phát hiện lỗi ngay sau mỗi commit, giảm chi phí sửa lỗi.
- **Khả năng lặp lại**: Quy trình build nhất quán, có thể tái sử dụng cho nhiều dự án.
- **Tích hợp DevOps**: Là nền tảng cho CI/CD, hỗ trợ phát triển và triển khai nhanh chóng.

Trong các bài học tiếp theo, chúng ta sẽ tìm hiểu cách thiết lập một pipeline tự động hoàn chỉnh trong Jenkins để thực hiện quy trình build, kiểm thử, và đóng gói phần mềm!
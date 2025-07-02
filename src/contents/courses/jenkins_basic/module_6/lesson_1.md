---
course: jenkins_basic
module: module_6
title: "Giới thiệu Jenkins Declarative Pipeline"
order: 1
pubDate: 2025-07-02
updatedDate: 2025-07-02
---

Trong bài học này, chúng ta sẽ tìm hiểu về **Jenkins Declarative Pipeline**, lý do tại sao cần sử dụng pipeline, và các trường hợp sử dụng của nó. Chúng ta sẽ so sánh pipeline với **Freestyle Job**, làm rõ những hạn chế của Freestyle Job và cách Declarative Pipeline khắc phục chúng.

## 1. Tại sao cần Jenkins Pipeline?

### 1.1. Hạn chế của Freestyle Job

Trong các bài học trước, chúng ta đã sử dụng **Freestyle Job** để thực hiện các bước như:

- Lấy mã nguồn từ kho Git (fetch).
- Biên dịch mã nguồn (build).
- Chạy kiểm thử (test).
- Đóng gói và triển khai (publish, deploy).

Tuy nhiên, Freestyle Job có các hạn chế sau:

- **Cấu hình lưu trữ trong tệp XML**:
    - Mỗi Freestyle Job tạo một tệp `config.xml` trong hệ thống tệp của Jenkins (thư mục `/var/lib/jenkins`).
    - Tệp này chứa toàn bộ cấu hình job (SCM, build steps, post-build actions).
    - Ví dụ cấu trúc thư mục:
      ```
      /var/lib/jenkins/
      ├── config.xml (cấu hình toàn cục)
      ├── jobs/
      │   ├── my-first-job/
      │   │   ├── config.xml (cấu hình job)
      │   │   ├── history/ (lịch sử build)
      │   │   ├── workspace/ (thư mục làm việc)
      │   │   ├── archives/ (artifact)
      ```

- **Hệ thống tệp nặng nề**:
    - Tệp `config.xml` được lưu cùng với:
        - **Lịch sử build**: Lưu trữ log của hàng trăm/thousands build.
        - **Workspace**: Lưu mã nguồn và tệp tạm.
        - **Artifact**: Lưu các tệp như `.jar`, `.war`, `.zip`.
    - Kết quả: Hệ thống tệp có thể chiếm hàng GB hoặc TB, tùy thuộc vào số lượng build.

- **Khó sao lưu và khôi phục**:
    - Sao lưu chỉ các tệp `config.xml` của job là không khả thi vì chúng nằm lẫn với dữ liệu khác.
    - Khi máy chủ Jenkins gặp sự cố hoặc cần tái tạo trên máy chủ mới, việc khôi phục cấu hình job rất phức tạp.

- **Không đồng bộ với mã nguồn**:
    - Cấu hình job không được lưu trong hệ thống quản lý mã nguồn (SCM) như Git.
    - Ví dụ: Mã ứng dụng được lưu trong GitHub, nhưng quy trình build (Freestyle Job) lại nằm trong Jenkins.
    - Hậu quả: Không thể phiên bản hóa (version) quy trình build cùng với mã ứng dụng.

- **Không hỗ trợ branching**:
    - Không thể tạo quy trình build riêng cho các nhánh (branch) như `dev`, `qa`, hoặc `prod`.
    - Khi ứng dụng có nhiều phiên bản (ví dụ: v1.0.1, v0.95), cần tạo job riêng cho từng phiên bản, dẫn đến việc quản lý phức tạp.

- **Bảo trì tốn kém**:
    - Mỗi khi mã nguồn thay đổi (ví dụ: thêm bước kiểm thử mới), phải chỉnh sửa job thủ công qua giao diện Jenkins.

### 1.2. Giải pháp: Declarative Pipeline

- **Định nghĩa**: Declarative Pipeline là cách định nghĩa quy trình build (build process) dưới dạng mã nguồn (code) trong một tệp `Jenkinsfile`, sử dụng cú pháp đơn giản và có cấu trúc.
- **Lợi ích**:
    - **Lưu trữ trong SCM**: `Jenkinsfile` được lưu cùng mã ứng dụng trong kho Git, cho phép phiên bản hóa quy trình build.
    - **Đồng bộ với mã nguồn**: Quy trình build đi kèm với từng nhánh (branch) hoặc phiên bản ứng dụng.
    - **Tự động hóa**: Loại bỏ cấu hình thủ công qua giao diện Jenkins.
    - **Khả năng tái sử dụng**: Dễ dàng sao chép hoặc khôi phục pipeline trên máy chủ mới.

- **Ví dụ `Jenkinsfile`**:
  ```groovy
  pipeline {
      agent any
      stages {
          stage('Fetch') {
              steps {
                  git 'https://github.com/<username>/git_training_v3.git'
              }
          }
          stage('Build') {
              steps {
                  sh 'mvn clean compile'
              }
          }
          stage('Test') {
              steps {
                  sh 'mvn test'
              }
          }
          stage('Publish') {
              steps {
                  sh 'mvn package'
                  archiveArtifacts 'target/*.jar'
              }
          }
          stage('Deploy') {
              steps {
                  sh 'docker push my-app:latest'
              }
          }
      }
      post {
          success {
              slackSend(channel: '#ci', message: "Build #${BUILD_NUMBER} succeeded")
          }
      }
  }
  ```

## 2. So sánh Freestyle Job và Declarative Pipeline

| **Tiêu chí**              | **Freestyle Job**                                                                 | **Declarative Pipeline**                                                  |
|---------------------------|----------------------------------------------------------------------------------|---------------------------------------------------------------------------|
| **Cấu hình**              | Qua giao diện Jenkins, lưu trong `config.xml`.                                    | Dưới dạng mã trong `Jenkinsfile`, lưu trong SCM (Git).                    |
| **Phiên bản hóa**         | Không thể phiên bản hóa, khó sao lưu/khôi phục.                                   | Phiên bản hóa cùng mã ứng dụng, dễ quản lý qua Git.                      |
| **Đồng bộ với mã nguồn**  | Không đồng bộ, quy trình build tách biệt khỏi mã nguồn.                          | Đồng bộ, `Jenkinsfile` nằm trong cùng kho Git với mã ứng dụng.           |
| **Branching**             | Không hỗ trợ quy trình build riêng cho từng nhánh.                                | Hỗ trợ pipeline riêng cho từng nhánh (`dev`, `qa`, `prod`).              |
| **Bảo trì**               | Cần chỉnh sửa thủ công qua UI, tốn thời gian.                                     | Chỉnh sửa `Jenkinsfile`, dễ dàng commit và review như mã nguồn.          |
| **Khả năng mở rộng**      | Hạn chế, khó tái cấu trúc cho quy trình phức tạp.                                 | Linh hoạt, hỗ trợ pipeline phức tạp với các stage và bước tùy chỉnh.     |

## 3. Cách hoạt động của Declarative Pipeline

- **Tệp `Jenkinsfile`**:
    - Là tệp mã nguồn (thường viết bằng Groovy) định nghĩa các bước của pipeline.
    - Lưu trong kho Git cùng với mã ứng dụng (ví dụ: `git_training_v3`).

- **Cấu trúc cơ bản**:
  ```groovy
  pipeline {
      agent any // Chạy trên bất kỳ agent nào
      stages {
          stage('Tên Stage') {
              steps {
                  // Các bước thực thi (sh, git, etc.)
              }
          }
      }
      post {
          success {
              // Hành động sau khi thành công
          }
          failure {
              // Hành động sau khi thất bại
          }
      }
  }
  ```

- **Quy trình thực thi**:
    1. Jenkins được cấu hình để kéo `Jenkinsfile` từ kho Git (ví dụ: `https://github.com/<username>/git_training_v3.git`).
    2. Jenkins đọc `Jenkinsfile` và thực thi các bước được định nghĩa (fetch, build, test, publish, deploy).
    3. Kết quả được lưu trữ và thông báo (qua Slack, email, v.v.).

## 4. Thực tiễn hiện đại (Cập nhật 2025)

- **Lưu trữ `Jenkinsfile` trong SCM**:
    - Commit `Jenkinsfile` vào kho Git:
      ```bash
      git add Jenkinsfile
      git commit -m "Add Jenkins pipeline configuration"
      git push origin main
      ```

- **Hỗ trợ Multi-branch Pipeline**:
    - Sử dụng plugin **Multibranch Pipeline** để tự động phát hiện `Jenkinsfile` trong các nhánh:
      ```groovy
      pipeline {
          agent any
          stages {
              stage('Build') {
                  when { branch 'main' }
                  steps {
                      sh 'mvn clean package'
                  }
              }
              stage('Test') {
                  when { branch 'dev' }
                  steps {
                      sh 'mvn test'
                  }
              }
          }
      }
      ```

- **Tích hợp với GitHub Webhook**:
    - Cấu hình webhook để kích hoạt pipeline khi có commit mới:
      ```bash
      gh repo set-webhook --url http://<jenkins-server>:8080/github-webhook/
      ```

- **Sử dụng Docker Agent**:
    - Chạy pipeline trong container để đảm bảo môi trường nhất quán:
      ```groovy
      pipeline {
          agent {
              docker { image 'maven:3.9.9-openjdk-17' }
          }
          stages {
              stage('Build') {
                  steps {
                      sh 'mvn clean package'
                  }
              }
          }
      }
      ```

- **Sao lưu và Khôi phục**:
    - Sao lưu `Jenkinsfile` và mã nguồn trong Git, không phụ thuộc vào hệ thống tệp Jenkins.
    - Khôi phục pipeline trên máy chủ mới bằng cách clone kho Git và chạy pipeline.

## 5. Tầm quan trọng của Declarative Pipeline

- **Phiên bản hóa**: Quy trình build được lưu trong SCM, dễ dàng quản lý và quay lại phiên bản cũ.
- **Đồng bộ**: Quy trình build đi cùng mã ứng dụng, hỗ trợ các nhánh và phiên bản khác nhau.
- **Tự động hóa**: Loại bỏ cấu hình thủ công, tăng hiệu quả và giảm lỗi.
- **Khả năng mở rộng**: Hỗ trợ pipeline phức tạp với nhiều stage, tích hợp với các công cụ DevOps (Docker, Kubernetes, Slack).
- **Bảo trì dễ dàng**: Chỉ cần chỉnh sửa `Jenkinsfile` và commit, thay vì cấu hình lại job qua UI.

Trong các bài học tiếp theo, chúng ta sẽ tìm hiểu sâu hơn về cú pháp Declarative Pipeline, cách viết `Jenkinsfile`, và cách tích hợp pipeline với các công cụ hiện đại để xây dựng quy trình CI/CD hoàn chỉnh!
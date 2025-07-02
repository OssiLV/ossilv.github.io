---
title: "LAB - 1: CI/CD Pipeline for Dockerized Java Application"
desc: ""
author: "ossilv"
pubDate: 2025-07-02
updatedDate: 2025-07-02
level: "beginner"
overview: [
#    "Hiểu biết về DevOps và các công cụ DevOps hiện đại như Docker, Kubernetes, Jenkins, Docker Swarm và Kubernetes Helm.",
#    "Nắm vững hoàn toàn về Docker Containers, điều phối bằng Docker Swarm và Kubernetes.",
#    "Trở thành chuyên gia DevOps trong lĩnh vực Kubernetes và quản trị Kubernetes từ cơ bản đến nâng cao.",
#    "Với vai trò Kỹ sư CI DevOps, thực hiện tích hợp Jenkins với nhiều công cụ công nghệ hiện đại như Docker, quy trình phân phối mã (Code Delivery Pipeline), Git & GitHub.",
#    "Có khả năng tự động hóa quy trình phân phối mã và triển khai (Deployment Pipeline) bằng Jenkins với vai trò Kỹ sư DevOps.",
#    "Học cách xây dựng ứng dụng đã được đóng gói bằng Docker (Dockerize) sử dụng Docker Containers, Dockerfile và HELM với vai trò Kỹ sư DevOps.",
#    "Phát triển và triển khai hoàn chỉnh ứng dụng trên nền tảng Kubernetes và Docker Containers."
]
requirement: [
#    "Bạn có tinh thần học hỏi một cách vui vẻ và thoải mái :)",
#    "Không yêu cầu kiến thức nền tảng. Bất kỳ ai muốn tìm hiểu về các công nghệ DevOps (Docker, Kubernetes, Jenkins, Git & GitHub) đều có thể tham gia khóa học.",
#    "Tốt hơn nếu bạn có sẵn hệ điều hành Linux để học các công cụ DevOps.",
#    "Nên có kiến thức cơ bản về quy trình phát triển phần mềm."
]
---


**LAB-1: CI/CD Pipeline for Dockerized Java Application**

## 1. Các công cụ sử dụng

| Thành phần         | Mục đích                             |
|--------------------| ------------------------------------ |
| `GitHub`           | Lưu source code & Dockerfile         |
| `Jenkins (Docker)` | CI/CD tool để tự động build & deploy |
| `Maven`            | Build app Java, chạy test            |
| `Docker`           | Đóng gói app thành image             |
| `DockerHub`        | Nơi publish & phân phối image        |


## 2. Jenkins Plugins

| Plugins                | Mục đích chính                                                                               |
|------------------------| -------------------------------------------------------------------------------------------- |
| `credentials-binding`  | **Quản lý biến môi trường an toàn** (username/password, token...) để dùng trong job/pipeline |
| `junit`                | **Hiển thị kết quả test JUnit** dưới dạng báo cáo trong Jenkins UI                           |
| `github`               | Tích hợp GitHub:<br>- Tự động clone repo<br>- Trigger build khi có push                      |
| `maven-plugin`         | Hỗ trợ Maven trong Jenkins Freestyle jobs<br>(phát hiện `pom.xml`, chạy `mvn`)               |
| `docker-build-publish` | Cho phép Jenkins **build và push image Docker** dễ dàng với giao diện (Freestyle)            |
| `docker-plugin`        | Quản lý **Docker Agents/Slaves** dùng Docker để chạy job hoặc spin-up containers             |

## 3. GitHub repo

https://github.com/OssiLV/Calculator
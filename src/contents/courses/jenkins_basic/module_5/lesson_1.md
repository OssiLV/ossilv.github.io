---
course: jenkins_basic
module: module_5
title: "Chuẩn bị"
order: 1
pubDate: 2025-07-02
updatedDate: 2025-07-02
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
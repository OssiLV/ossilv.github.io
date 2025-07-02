---
title: "LAB - 1: CI/CD Pipeline for Dockerized Java Application"
desc: "Tech Stack: Jenkins (Dockerized), Maven, Docker, GitHub, DockerHub; Jenkins Plugins: credentials-binding, maven-plugin, docker-build-publish, junit, github"
author: "ossilv"
pubDate: 2025-07-02
updatedDate: 2025-07-02
level: "beginner"
overview: [
    "Built a complete CI/CD pipeline for a Java application using Jenkins Freestyle Job.",
    "Automated the process: clone source from GitHub → build with Maven → run unit tests → package as Docker image → push to DockerHub.",
    "Used credentials-binding plugin to securely manage DockerHub credentials.",
    "Configured SCM trigger to automatically run the job on new commits.",
    "Managed Jenkins as a Docker container and handled all setup via Docker Compose."
]
requirement: [
]
---

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
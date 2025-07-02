---
course: lab_1_ci-cd_pipeline_for_dockerized_java_application
module: module_1
title: "Tạo Job và Configs"
order: 2
pubDate: 2025-07-02
updatedDate: 2025-07-02
---

## 1. Global Tools

Di chuyển theo đường dẫn **Dashboard > Jenkins > Tools**

- Maven installations
  - `Add Maven`
    - **Name**: Có thể đặt theo version như `Maven 3.9.10`
    - Check vào `Install automatically`
    - Trong `Install from Apache` chọn Version và nhấn `Save`

## 2. Tạo Freestyle Job

Tạo Freestyle Job đặt tên `CI-CD_Pipeline_for_Dockerized_Java_Application`

## 3. Configs

### 3.1. General configs

1. GitHub project
   - Check vào `GitHub project`
   - Thêm đường dẫn GitHub repo https://github.com/OssiLV/Calculator
   
>**Bước này để hiển thị liên kết GitHub repo mà Job đang tương tác**
   
2. This project is parameterized
   - Truy cập [Docker Account](https://app.docker.com/signup) tạo Personal access tokens Với Access Permissions **Read & Write**
   - Quay trở lại Jenkins và check vào `This project is parameterized`
   - Chọn `Credentials Parameter`
   - Chọn `Add` trong `Default Value` để thêm **Jenkins Credentials Provider**
     - **Kind**: Username with pasword
     - **Scope**: Global
     - **Username**: Nhập `Username` của tài khoản Docker
     - **Password**: Nhập `Personal access tokens` vừa tạo
     - **Desctiption** [Optional]: Nhập `Docker Read & Write`
     - Nhấn **Add** để lưu
   - Tại `Default Value` chọn **Jenkins Credentials Provider** vừa tạo
   - 
> Cho phép **Jenkins job** nhận thông tin đăng nhập Docker Hub một cách bảo mật để thực hiện push image

### 3.2. Source Code Management 

- Chọn `Git`
- Thêm đường dẫn GitHub repo https://github.com/OssiLV/Calculator vào `Repository URL`
- Nhập `*/main`  vào Branch Specifier
  
> Để Jenkins kết nối đến GitHub repository chứa mã nguồn, tải về và dùng trong quá trình build

### 3.3. Triggers 

- Tùy chọn Triggers Poll SCM, tham khảo https://crontab.guru/ để cấu hình Schedule

| Cron             | Nghĩa                                       |
| ---------------- | ------------------------------------------- |
| `* * * * *`      | Mỗi phút                                    |
| `H/5 * * * *`    | Mỗi 5 phút, rải đều cho tránh tải cao       |
| `H H * * *`      | Mỗi ngày 1 lần, thời điểm ngẫu nhiên        |
| `H/15 * * * 1-5` | Mỗi 15 phút vào các ngày từ thứ 2 đến thứ 6 |


> **Poll SCM** giúp Jenkins tự động kiểm tra (poll) Git repository định kỳ, và tự động trigger (kích hoạt) build job nếu có thay đổi mới trong mã nguồn (commit mới).


### 3.4. Environment 

- Check `Use secret text(s) or file(s)`
- Thêm `Username and password (separated)`
  - **Username Variable**: DOCKER_USERNAME_ENV
  - **Password Variable**: DOCKER_PASSWORD_ENV
  - **Credentials** > **Specific credentials** > Chọn Credentials vừa tạo ở bước thiết lập parameterized

### 3.5. Build Steps 

- Thêm `Invoke top-level Maven targets`
  - **Maven Version**: Chọn Maven Version đã tạo ở bước **Global Tools**
  - **Goals**: Nhập `clean package`
  - **Advanced** > **POM**: pom.xml
  
- Thêm `Execute shell`
  ```bash
  echo $DOCKER_PASSWORD_ENV | docker login -u "$DOCKER_USERNAME_ENV" --password-stdin
  ```

- Thêm `Docker Build and Publish`
  - **Repository Name**: [Docker Username]/jenkins-calculator-app-demo
  - **Registry credentials**: Chọn Credentials vừa tạo ở bước thiết lập parameterized

### 3.6. Post-build Actions

- Thêm `Archive the artifacts`
  - **Files to archive**: target/*.jar
- Thêm `Publish JUnit test result report`
  - **Test report XMLs**: target/surefire-reports/*xml
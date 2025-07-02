---
course: jenkins_basic
module: module_1
title: "Cài đặt Jenkins bằng Docker"
order: 4
pubDate: 2025-06-29
updatedDate: 2025-06-29
---

## 1. Yêu cầu:

-  [Cài đặt Docker & Docker Compose trên Linux](https://docs.docker.com/desktop/setup/install/linux/ubuntu/)

## 2. Setup Jenkins
### 2.1. Thực thi bằng file yml

Tạo file `docker-compose.yml`

```bash
touch docker-compose.yml
open docker-compose.yml
```

Copy nội dung này vào file `docker-compose.yml` và lưu lại

```yml
services:
  jenkins:
    image: jenkins/jenkins:lts-jdk21
    container_name: jenkinsLTS
    restart: unless-stopped
    ports:
      - "8080:8080"     # Web UI
      - "50000:50000"   # Agent port
    volumes:
      - jenkins_home:/var/jenkins_home
      - /var/run/docker.sock:/var/run/docker.sock  # Jenkins build Docker
    environment:
      - JAVA_OPTS=-Duser.timezone=Asia/Ho_Chi_Minh

volumes:
  jenkins_home:
    external: true
```

```bash
docker compose up -d
```

| Thành phần       | Ý nghĩa                                                                                                       |
| ---------------- | ------------------------------------------------------------------------------------------------------------- |
| `docker compose` | Lệnh dùng để chạy các dịch vụ Docker từ file `docker-compose.yml`. (Phiên bản mới, thay cho `docker-compose`) |
| `up`             | Lệnh **khởi động (hoặc tạo)** các container từ định nghĩa trong file                                          |
| `-d`             | Gọi là **detached mode**, nghĩa là chạy ngầm, không hiển thị log trực tiếp trên terminal                      |

➡ Docker tự động tìm `docker-compose.yml` trong thư mục và dùng để chạy.

### 2.2. Thực thi bằng lệnh terminal

Tạo volume `jenkins_home` nếu chưa có:
```bash
docker volume create jenkins_home
```

> Bỏ qua bước này nếu volume đã tồn tại (bạn đã có rồi).

Chạy Jenkins bằng lệnh `docker run`:

```bash
docker run -d \
  --name jenkinsLTS \
  --restart unless-stopped \
  -p 8080:8080 \
  -p 50000:50000 \
  -v jenkins_home:/var/jenkins_home \
  -v /var/run/docker.sock:/var/run/docker.sock \
  -e JAVA_OPTS="-Duser.timezone=Asia/Ho_Chi_Minh" \
  jenkins/jenkins:lts-jdk21
```

## 3.  Lấy mật khẩu đăng nhập Jenkins (lần đầu)

Xem thông tin container đang chạy

```bash
docker ps
```

```bash
docker exec jenkinsLTS cat /var/jenkins_home/secrets/initialAdminPassword
```

## 4. Truy cập Jenkins

http://localhost:8080

## 5. Xóa container và volume

> Nếu sau này bạn muốn xóa container và volume:
> ```bash
> docker rm -f jenkinsLTS
> docker volume rm jenkins_home
> ```

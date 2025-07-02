---
course: lab_1_ci-cd_pipeline_for_dockerized_java_application
module: module_1
title: "Setup Jenkins bằng Docker"
order: 1
pubDate: 2025-07-02
updatedDate: 2025-07-02
---

## 1. Clone dự án từ GitHub

```bash
git clone https://github.com/OssiLV/Calculator.git
```

## 2. Setup Jenkins

```bash
cd Calculator
docker compose up -d
```

## 3. Chạy Jenkins

http://localhost:8080

## 4. Cài đặt Plugins

- Copy nội dung trong file `install-plugins.groovy` và dán vào  **Dashboard** > **Manage Jenkins** > **Script Console**
- Nhấn Run để chạy
- Có thể xem tiến trình cài đặt trong **Dashboard** > **Manage Jenkins** > **Plugins**


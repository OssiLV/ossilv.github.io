---
title: "DevOps là gì và các công cụ"
desc: "__"
author: ossilv # references `src/contents/authors/ossilv.json`
relatedPosts: []
prevPost: devops_ultimate
nextPost: devops_p1_b2
pubDate: 2025-06-24
updatedDate: 2025-06-24
tags: ["DevOps"]
categories:
    - name: "Software Development Methodologies"
      subcategories: ["DevOps"]
---

---

[Trở về DevOps Ultimate](/blog/devops)

---

# DevOps là gì và các công cụ

## 1. DevOps là gì?

**DevOps** không phải là một công nghệ hay ngôn ngữ lập trình. DevOps là một **phương pháp phát triển phần mềm hiện đại**, kết hợp giữa:
- **Development (phát triển phần mềm)** và
- **Operations (vận hành hệ thống)**

Mục tiêu của DevOps là:
- Rút ngắn chu kỳ phát hành phần mềm
- Cải thiện chất lượng và độ ổn định
- Tăng khả năng phản hồi với thay đổi

DevOps hướng đến một quy trình **liên tục**, bao gồm:

- Continuous Development (Phát triển liên tục)
- Continuous Testing (Kiểm thử liên tục)
- Continuous Integration (Tích hợp liên tục)
- Continuous Deployment (Triển khai liên tục)
- Continuous Monitoring (Giám sát liên tục)

---

## 2. Lịch sử phát triển mô hình phần mềm

### a. Mô hình Waterfall (Thác nước)

Trước đây, mô hình Waterfall rất phổ biến. Quy trình này bao gồm:
1. Lập kế hoạch và lấy yêu cầu
2. Phát triển mã nguồn
3. Kiểm thử toàn bộ sản phẩm
4. Triển khai và bảo trì

**Nhược điểm:**
- Mỗi giai đoạn diễn ra tuần tự → chậm
- Không thể kiểm thử sớm
- Thời gian đưa sản phẩm ra thị trường rất dài

### b. Mô hình Agile

Được tạo ra để khắc phục các nhược điểm của Waterfall. Đặc điểm:
- Phát triển phần mềm theo từng tính năng nhỏ
- Kiểm thử và phát hành liên tục
- Phù hợp với môi trường yêu cầu thay đổi thường xuyên

### c. DevOps

Phát triển song song với Agile, DevOps tập trung vào sự phối hợp giữa **phát triển** và **vận hành**:
- Rút ngắn chu kỳ
- Tự động hóa kiểm thử, triển khai và giám sát

---

## 3. Câu chuyện thực tế: Facebook và kỹ thuật "Dark Launching"

### Vấn đề:
- Năm 2011, Facebook phát hành hàng loạt tính năng mới (Timeline, Music, Ticker)
- Các tính năng này được triển khai đồng thời trên toàn cầu
- Kết quả: Server bị quá tải, gián đoạn dịch vụ

### Giải pháp: "Dark Launching"
Facebook triển khai kỹ thuật chia làm 3 bước:
1. **Phát hành giới hạn** cho nhóm người dùng nhỏ
2. **Giám sát phản hồi** và **phát triển/kiểm thử liên tục**
3. **Triển khai theo từng đợt**, từng khu vực

Từ đó sinh ra khái niệm:
- **Continuous Monitoring**
- **Continuous Development**
- **Continuous Testing**
- → Đây là nền móng của DevOps hiện đại

---

## 4. Quy trình DevOps hiện đại

DevOps là **chu trình vô hạn**:

1. **Plan** – lập kế hoạch
2. **Code** – viết mã
3. **Build** – xây dựng phần mềm
4. **Test** – kiểm thử
5. **Release** – phát hành
6. **Deploy** – triển khai
7. **Operate** – vận hành
8. **Monitor** – giám sát

Nếu có lỗi → quay lại bước lập kế hoạch và lặp lại toàn bộ quy trình.

> Ưu điểm: Có thể phát hành phần mềm hàng tuần, hai tuần một lần, hoặc thậm chí hàng ngày.

---

## 5. Các công cụ DevOps phổ biến

### a. Lập kế hoạch & Quản lý mã nguồn
- **Git** – quản lý phiên bản
- **Subversion (SVN)** – hệ thống kiểm soát mã nguồn
- **JIRA** – theo dõi lỗi và quản lý công việc

### b. Build Tools (Công cụ xây dựng)
- **Maven** – phổ biến cho dự án Java
- **Gradle** – thay thế hiện đại hơn Maven

### c. Kiểm thử tự động
- **Selenium** – kiểm thử giao diện web
- **JUnit** – kiểm thử đơn vị cho Java
- **Rest Assured** – kiểm thử API REST

### d. Cấu hình và triển khai
- **Ansible**, **Puppet**, **Chef**, **SaltStack** – cấu hình hệ thống tự động

### e. Giám sát
- **Nagios**, **New Relic**, **Prometheus**, **Grafana** – theo dõi hiệu suất hệ thống

---

## 6. Kết luận

- DevOps giúp tự động hóa và tăng tốc độ phát triển phần mềm.
- Cốt lõi của DevOps là **liên tục và hợp tác** giữa đội phát triển và đội vận hành.
- Trong những bài học tiếp theo, bạn sẽ tìm hiểu sâu hơn về:
  - Continuous Integration
  - Continuous Deployment
  - Các công cụ như Jenkins, Docker, Kubernetes...
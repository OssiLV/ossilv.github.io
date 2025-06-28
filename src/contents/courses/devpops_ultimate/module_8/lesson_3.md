---
course: devpops_ultimate
module: module_8
title: "Tổng quan Kiến trúc của Jenkins"
order: 3
pubDate: 2025-06-28
updatedDate: 2025-06-28
---

Trong bài học này, chúng ta sẽ tìm hiểu về kiến trúc của Jenkins, tập trung vào mô hình **master-slave** (chủ-tớ) và vai trò của các nút **master** (chủ) và **slave** (tớ, hay còn gọi là worker node). Hiểu rõ kiến trúc này giúp bạn nắm được cách Jenkins phân phối và thực thi các tác vụ trong quy trình tích hợp liên tục (CI) và triển khai liên tục (CD).

## 1. Kiến trúc Master-Slave của Jenkins

Jenkins hoạt động theo mô hình **master-slave**, trong đó:

- **Master Node (Nút Chủ)**:
    - Hoạt động như một **bộ điều phối** (controller) hoặc **bộ lập lịch** (scheduler).
    - Quản lý và phân phối các tác vụ (jobs) tới các slave node.
    - Chấp nhận lệnh từ người dùng và hiển thị kết quả đầu ra.
    - Lưu trữ cấu hình, lịch sử build, và kết quả thực thi.

- **Slave Node (Nút Tớ/Worker Node)**:
    - Hoạt động như một **nút thực thi** (execution node).
    - Chỉ thực hiện các tác vụ được master node giao phó (ví dụ: xây dựng, kiểm thử, triển khai).
    - Không yêu cầu cài đặt đầy đủ Jenkins, chỉ cần cài đặt **Jenkins agent** và Java.
    - Master node sẽ lên lịch các job và phân công cho worker node, tùy theo năng lực của từng node.

**Lưu ý**: Một master node duy nhất có thể kết nối với nhiều worker/slave nodes.

## 2. Kết nối giữa Master và Slave

- Như đã đề cập, master node phân phối tải công việc tới các slave nodes.
- Jenkins chỉ cần được cài đặt trên master node.
- Trên slave node, không cần cài đặt Jenkins. Thay vào đó, chúng ta chỉ cần:
  - Cài đặt Java (đây là điều kiện bắt buộc).
  - Thực thi một lệnh sẽ tải xuống một file .jar — chính là Jenkins agent.
  - Agent này sẽ kết nối slave node với master node thông qua một token định danh.

## 3. Hệ điều hành của Slave Node

- Bạn có thể kết nối bất kỳ loại hệ điều hành nào làm slave node:
  - Nếu master node chạy Linux, bạn vẫn có thể dùng Windows, Linux hoặc Mac làm slave node.
- Jenkins rất linh hoạt trong việc kết nối các máy khác hệ điều hành làm node phụ trợ.

## 4. Tóm tắt kiến trúc Jenkins

- Chúng ta có một master node Jenkins.
- Và nhiều slave/worker nodes.
- Master kết nối với các slave thông qua Jenkins Agent.
- Master node có nhiệm vụ:
  - Lên lịch (schedule) job.
  - Gửi (dispatch) job cho slave node.
  - Theo dõi (monitor) tiến trình.
  - Thu thập và hiển thị kết quả.
- Slave node chỉ cần:
  - Thực hiện (execute) các tác vụ được giao.
  - Không cần cài Jenkins, chỉ cần Java và Jenkins agent.
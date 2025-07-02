---
course: jenkins_basic
module: module_3
title: "[QUIZ]: Cấu trúc Build và Jenkins CI"
order: 1
updatedDate: 2025-06-30
questions:
    - question: "Mục tiêu chính của quá trình build trong phát triển phần mềm là gì?"
      options: ["A. Tạo tài liệu kỹ thuật", "B. Biến mã nguồn thành artifact có thể triển khai", "C. Thiết kế giao diện người dùng", "D. Tạo cơ sở dữ liệu mẫu"]
      answer: 1

    - question: "Bước đầu tiên trong quy trình build thông thường là gì?"
      options: ["A. Clean workspace", "B. Compile mã nguồn", "C. Pull mã từ Git repository", "D. Đóng gói (package)"]
      answer: 2

    - question: "Tại sao cần thực hiện bước 'clean' trước khi build?"
      options: ["A. Để kiểm thử mã mới", "B. Để giảm dung lượng mã nguồn", "C. Để xóa các tệp từ build trước, tránh lỗi phát sinh", "D. Để cập nhật mã nguồn"]
      answer: 2

    - question: "Jenkins hỗ trợ tự động hóa quy trình build thông qua cơ chế nào?"
      options: ["A. Manual Job", "B. CI/CD", "C. IDE Plugin", "D. GitHub Action"]
      answer: 1

    - question: "Trong Jenkins Pipeline, stage nào thực hiện biên dịch mã nguồn?"
      options: ["A. Clean", "B. Clone", "C. Compile", "D. Test"]
      answer: 2

    - question: "Tại sao tích hợp liên tục (CI) lại quan trọng trong DevOps?"
      options: ["A. Giúp tạo nhiều repository hơn", "B. Cho phép kiểm thử và phát hiện lỗi sớm", "C. Giảm chi phí lưu trữ artifact", "D. Tránh sử dụng Jenkins"]
      answer: 1

    - question: "Trong thực tiễn hiện đại, công cụ nào phổ biến để định nghĩa pipeline-as-code?"
      options: ["A. Bash Script", "B. Jenkinsfile", "C. Dockerfile", "D. Makefile"]
      answer: 1
---
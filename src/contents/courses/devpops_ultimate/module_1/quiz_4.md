---
course: devpops_ultimate
module: module_1
title: "[QUIZ]: Continuous Integration (CI)"
order: 4
updatedDate: 2025-06-28
questions:
  - question: "Continuous Integration (CI) là gì?"
    options:
      - "A. Quá trình kiểm thử thủ công sản phẩm"
      - "B. Quá trình lập kế hoạch phát triển phần mềm"
      - "C. Quá trình tự động build và kiểm thử phần mềm sau mỗi lần commit"
      - "D. Triển khai phần mềm lên môi trường production"
    answer: 2

  - question: "Công cụ nào thường được sử dụng làm CI server?"
    options:
      - "A. Docker"
      - "B. Jenkins"
      - "C. Git"
      - "D. JIRA"
    answer: 1

  - question: "Nếu không sử dụng CI, điều gì có thể xảy ra?"
    options:
      - "A. Quá trình phát hành diễn ra nhanh hơn"
      - "B. Lỗi dễ phát hiện hơn"
      - "C. Quá trình build có thể mất hàng giờ và khó xác định nguyên nhân lỗi"
      - "D. Lập trình viên hợp tác hiệu quả hơn"
    answer: 2

  - question: "CI giúp ích gì trong quá trình phát triển phần mềm?"
    options:
      - "A. Rút ngắn thời gian viết mã"
      - "B. Phát hiện lỗi sớm và dễ xác định nguyên nhân gây lỗi"
      - "C. Giảm chi phí lưu trữ dữ liệu"
      - "D. Hạn chế tự động hóa"
    answer: 1

  - question: "Quy trình nào được kích hoạt mỗi khi lập trình viên check-in mã nguồn?"
    options:
      - "A. Triển khai trực tiếp lên production"
      - "B. Build và kiểm thử tự động thông qua CI server"
      - "C. Gửi email thông báo"
      - "D. Tạo branch mới"
    answer: 1

  - question: "CI thường sử dụng công cụ nào để build ứng dụng?"
    options:
      - "A. Figma, Slack"
      - "B. Selenium, Postman"
      - "C. Maven, Gradle, Ant"
      - "D. WordPress, Webflow"
    answer: 2

  - question: "Continuous Deployment (CD) là gì?"
    options:
      - "A. Quá trình kiểm thử thủ công"
      - "B. Tự động triển khai các bản build đã kiểm thử lên môi trường như staging hoặc production"
      - "C. Phát triển tính năng mới"
      - "D. Quản lý quyền truy cập người dùng"
    answer: 1

  - question: "Continuous Delivery khác gì với Continuous Deployment?"
    options:
      - "A. Không liên quan gì đến CI"
      - "B. Luôn triển khai lên production sau mỗi commit"
      - "C. Giữ phần mềm luôn ở trạng thái có thể triển khai, nhưng không bắt buộc triển khai ngay"
      - "D. Chỉ áp dụng cho phần mềm mã nguồn mở"
    answer: 2

  - question: "Khi nào việc xác định nguyên nhân lỗi trở nên dễ dàng hơn trong CI?"
    options:
      - "A. Khi chỉ có một người làm việc"
      - "B. Khi có nhiều commit được gộp cùng lúc"
      - "C. Khi build được thực hiện thường xuyên theo từng khoảng thời gian"
      - "D. Khi sử dụng email để thông báo lỗi"
    answer: 2

  - question: "Điều kiện nào sau đây là đúng về mối quan hệ giữa CI, Continuous Deployment và Continuous Delivery?"
    options:
      - "A. Nếu CI thất bại, ta vẫn có thể triển khai và phân phối phần mềm"
      - "B. CI không ảnh hưởng đến Delivery"
      - "C. Nếu CI và Deployment thành công thì Delivery sẽ thành công"
      - "D. Chỉ cần CI là đủ, không cần Deployment và Delivery"
    answer: 2
---

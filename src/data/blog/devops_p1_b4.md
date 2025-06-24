---
title: "Tích hợp liên tục"
desc: "__"
author: ossilv # references `src/data/authors/ossilv.json`
relatedPosts: []
prevPost: devops_p1_b3
nextPost: devops_p1_b5
pubDate: 2025-06-24
updatedDate: 2025-06-24
tags: ["DevOps"]
categories:
    - name: "Software Development Methodologies"
      subcategories: ["DevOps"]
---

---

[Trở về DevOps Ultimate](devops_ultimate)

---

# Tích hợp liên tục (Continuous Integration)

## Giới thiệu

Chào mừng đội ngũ đã quay trở lại với khóa học Jenkins trong DevOps!

Trong bài học này, chúng ta sẽ tìm hiểu về **Tích hợp liên tục (Continuous Integration - CI)**, một thành phần quan trọng trong quy trình DevOps. Các nội dung chính bao gồm:

- CI là gì
- Những thách thức nếu không áp dụng CI
- Mối liên hệ giữa CI, Continuous Delivery và Continuous Deployment
- Lý do sử dụng Jenkins cho CI

---

## Continuous Integration (CI) là gì?

**Tích hợp liên tục** là quá trình tự động xây dựng (build) và kiểm thử (test) phần mềm. Mục tiêu là đảm bảo rằng mỗi thay đổi từ các lập trình viên đều được tích hợp và kiểm tra thường xuyên.

Ví dụ: Trong một nhóm phát triển có 10–15 lập trình viên, tất cả họ đều đẩy mã nguồn (check-in) lên một kho lưu trữ chung. CI server như Jenkins sẽ lấy mã nguồn này, thực hiện build với công cụ như Maven, Gradle, Ant… và sau đó thực hiện các bài kiểm thử tự động để đảm bảo chất lượng build.

**Lưu ý:** Trong khi CI truyền thống chủ yếu tập trung vào build, các bài kiểm thử tự động có thể được tích hợp để mở rộng phạm vi kiểm soát chất lượng.

CI giúp:

- Phát hiện lỗi nhanh chóng
- Xác định nguyên nhân gây lỗi dễ dàng (so sánh giữa các lần commit gần nhau)

---

## Nếu không sử dụng CI, điều gì sẽ xảy ra?

Dưới đây là các vấn đề thường gặp nếu tổ chức **không áp dụng CI**:

- Lập trình viên thực hiện thay đổi và check-in mã nguồn liên tục.
- Sau một khoảng thời gian (ví dụ cuối ngày), toàn bộ mã nguồn được gộp lại và build trên nhánh chính.
- Quá trình build có thể mất 4–6 giờ và dẫn đến nhiều lỗi như lỗi biên dịch, lỗi chức năng...
- Việc xác định nguyên nhân lỗi sẽ mất rất nhiều thời gian vì có quá nhiều thay đổi được tích hợp cùng lúc.
- Gây **trễ thời gian phát hành phần mềm** do mất thời gian khắc phục và kiểm tra lại.

---

## Quy trình CI hoạt động như thế nào?

Khi áp dụng CI:

- Mỗi lần check-in vào kho mã nguồn sẽ kích hoạt một quy trình build tự động (có thể theo lịch định kỳ hoặc theo mỗi lần commit).
- Jenkins (CI server) sẽ lấy mã nguồn mới, build và kiểm thử phần mềm.
- Build thành công sẽ được triển khai (deploy) lên môi trường kiểm thử để tiếp tục đánh giá.

Ví dụ: Bạn lên lịch build mỗi 3 giờ một lần. Nếu build 6h sáng thành công nhưng build 9h có lỗi, bạn chỉ cần xem các thay đổi trong khoảng từ 6h–9h để xác định nguyên nhân lỗi → giúp tiết kiệm thời gian rất nhiều.

---

## Lợi ích của Continuous Integration

- Không cần chờ đợi việc tích hợp thủ công, giảm rủi ro gộp code hàng loạt.
- Tăng cường khả năng giao tiếp và minh bạch giữa các thành viên.
- Phát hiện lỗi sớm → giảm chi phí sửa lỗi.
- Giảm thời gian gỡ lỗi → tập trung phát triển tính năng mới.
- Rút ngắn chu kỳ phát hành phần mềm.
- Tự động kiểm tra và build giúp giảm thiểu lỗi sản phẩm khi triển khai.

---

## Continuous Deployment (Triển khai liên tục)

**Continuous Deployment** là quá trình triển khai tự động các build đã được kiểm thử lên các môi trường như staging hoặc production.

- Khi build thành công, Jenkins có thể triển khai bản build đó lên môi trường staging để kiểm tra kỹ hơn (integration, regression, sanity, system test).
- Nếu mọi thứ ổn định, cùng một bản build có thể được triển khai lên production.

---

## Continuous Delivery (Phân phối liên tục)

**Continuous Delivery** là việc giữ cho phần mềm luôn ở trạng thái có thể triển khai bất cứ lúc nào.

- Dù không triển khai ngay lập tức, nhưng mã nguồn luôn sẵn sàng để đưa lên production.
- Yêu cầu: CI và Continuous Deployment hoạt động ổn định.
- Khi cần, nhóm vận hành chỉ việc chọn bản build phù hợp và triển khai, không cần sửa đổi gì thêm.

---

## Mối quan hệ giữa CI, CD và CD (Deployment vs Delivery)

- Nếu CI thất bại → không thể triển khai → phân phối cũng thất bại.
- Nếu CI và Deployment thành công → Delivery thành công.

---

Cảm ơn các bạn đã theo dõi. Hẹn gặp lại ở bài học tiếp theo!

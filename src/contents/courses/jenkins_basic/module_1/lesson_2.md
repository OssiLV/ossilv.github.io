---
course: jenkins_basic
module: module_1
title: "Nên sử dụng bản phát hành LTS hay Weekly của Jenkins?"
order: 2
pubDate: 2025-06-28
updatedDate: 2025-06-28
---

Trong bài học này, chúng ta sẽ thảo luận về việc nên chọn bản phát hành **LTS (Long-Term Support)** hay **Weekly** của Jenkins khi cài đặt. Quyết định này phụ thuộc vào môi trường sử dụng (sản xuất hay phát triển) và yêu cầu cụ thể của dự án.

---

## 1. Tổng quan về các bản phát hành của Jenkins

Jenkins cung cấp hai loại bản phát hành chính, có sẵn trên trang chính thức [jenkins.io](https://www.jenkins.io):

- **Bản phát hành LTS (Long-Term Support)**:
    - Là phiên bản ổn định, được kiểm tra kỹ lưỡng với ít lỗi hơn.
    - Được phát hành khoảng **mỗi 12 tuần**, dựa trên một bản Weekly được chọn làm baseline.
    - Nhận các bản cập nhật sửa lỗi định kỳ (thường mỗi 4 tuần) trong suốt chu kỳ hỗ trợ.
    - Phù hợp cho môi trường **sản xuất** (production) nơi cần độ ổn định cao.

- **Bản phát hành Weekly**:
    - Được phát hành **hàng tuần**, chứa các tính năng mới nhất và sửa lỗi gần đây.
    - Có thể bao gồm nhiều tính năng thử nghiệm hơn, nhưng chưa được kiểm tra kỹ như bản LTS.
    - Phù hợp cho môi trường **phát triển** (development) hoặc thử nghiệm nơi ưu tiên các tính năng mới.

## 2. Nên chọn bản phát hành nào?

Quyết định chọn bản LTS hay Weekly phụ thuộc vào môi trường và mục đích sử dụng:

- **Môi trường sản xuất (Production)**:
    - **Chọn bản LTS**:
        - **Lý do**: Bản LTS được kiểm tra kỹ lưỡng, ít lỗi, và được hỗ trợ lâu dài, đảm bảo độ tin cậy cho các hệ thống quan trọng.
        - **Ví dụ**: Nếu bạn triển khai Jenkins để chạy pipeline CI/CD cho một ứng dụng thương mại, bản LTS là lựa chọn an toàn.

- **Môi trường phát triển hoặc thử nghiệm (Development/Testing)**:
    - **Chọn bản Weekly**:
        - **Lý do**: Bản Weekly cung cấp các tính năng mới nhất và cập nhật plugin nhanh hơn, phù hợp để thử nghiệm các tính năng mới hoặc tích hợp với các công cụ hiện đại.
        - **Ví dụ**: Nếu bạn đang phát triển một pipeline mới hoặc thử nghiệm plugin mới, bản Weekly giúp bạn tiếp cận các cải tiến sớm.

## 3. Thực tiễn hiện đại (Cập nhật 2025)

- **Quản lý Plugin**:
    - Với bản LTS, sử dụng **Plugin Manager** trong Jenkins để cài đặt các plugin đã được kiểm tra tương thích.
    - Với bản Weekly, bạn có thể thử các phiên bản plugin mới nhất, nhưng cần kiểm tra tính ổn định.

- **Cập nhật định kỳ**:
    - Với LTS, cập nhật mỗi 4-12 tuần để nhận sửa lỗi.
    - Với Weekly, kiểm tra changelog trên [jenkins.io](https://www.jenkins.io/changelog/) để đánh giá tính năng mới trước khi nâng cấp.

## 4. Tóm tắt: LTS hay Weekly?

- **Chọn bản LTS**:
    - **Khi nào**: Môi trường sản xuất hoặc khóa học dài hạn (như khóa học này).
    - **Lý do**: Ổn định, ít lỗi, được hỗ trợ lâu dài.
    - **Ví dụ**: Pipeline CI/CD cho ứng dụng thương mại.

- **Chọn bản Weekly**:
    - **Khi nào**: Môi trường phát triển, thử nghiệm tính năng mới, hoặc cần plugin mới nhất.
    - **Lý do**: Cung cấp các tính năng và cập nhật mới nhất, nhưng có thể không ổn định.
    - **Ví dụ**: Thử nghiệm pipeline mới hoặc tích hợp với công cụ hiện đại.

Trong khóa học này, chúng ta sẽ sử dụng bản **LTS** để đảm bảo độ ổn định và nhất quán khi học về Jenkins từ đầu đến cuối. Điều này giúp bạn tập trung vào việc học các tính năng cốt lõi mà không gặp lỗi từ các bản phát hành chưa ổn định.
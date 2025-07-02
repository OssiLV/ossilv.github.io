---
course: jenkins_basic
module: module_1
title: "Jenkins là gì và Tại sao cần Jenkins"
order: 1
pubDate: 2025-06-28
updatedDate: 2025-06-28
---

Trong bài học này, chúng ta sẽ tìm hiểu về **Jenkins**, một công cụ quan trọng trong DevOps, và lý do tại sao nó được sử dụng để hỗ trợ quy trình tích hợp liên tục (Continuous Integration - CI). Chúng ta sẽ khám phá định nghĩa của Jenkins, chức năng của nó, và vai trò của nó trong việc tự động hóa vòng đời phát triển phần mềm.

---

## 1. Jenkins là gì?

Jenkins là một **máy chủ tích hợp liên tục mã nguồn mở** được viết bằng Java, dùng để tự động hóa các tác vụ trong quy trình phát triển phần mềm. Nó hỗ trợ việc xây dựng (build), kiểm thử (test), và triển khai (deploy) phần mềm một cách tự động, giúp giảm thiểu các thao tác thủ công.

- **Định nghĩa chính thức** (dành cho chứng chỉ DevOps):
    - Jenkins là một máy chủ tích hợp liên tục mã nguồn mở được viết bằng Java, dùng để điều phối một chuỗi các hành động nhằm đạt được quy trình tích hợp liên tục một cách tự động.
- **Định nghĩa đơn giản**:
    - Jenkins là một công cụ mã nguồn mở giúp tự động hóa việc xây dựng, kiểm thử, và triển khai phần mềm, hỗ trợ toàn bộ vòng đời phát triển phần mềm.

- **Chức năng chính**:
    - **Xây dựng phần mềm**: Chuyển đổi mã nguồn thành các tệp thực thi (artifacts) như `.jar`, `.war`, `.tar`, hoặc `.zip`.
    - **Kiểm thử phần mềm**: Tự động chạy các bộ kiểm thử (test suites) để đảm bảo chất lượng mã.
    - **Triển khai phần mềm**: Đẩy các bản build thành công lên môi trường triển khai (ví dụ: môi trường staging hoặc production).
    - **Điều phối tác vụ**: Hoạt động như một công cụ thực thi (execution engine) để tự động hóa các bước trong quy trình CI/CD.

- **Đặc điểm nổi bật**:
    - Là mã nguồn mở, với hàng nghìn **plugin** từ bên thứ ba, cung cấp các tính năng đa dạng như tích hợp với Git, Docker, Kubernetes, hoặc các công cụ kiểm thử như Selenium.
    - Hỗ trợ xây dựng các pipeline CI/CD linh hoạt, phù hợp với nhiều loại dự án.

## 2. Tại sao cần Jenkins trong DevOps?

Jenkins đóng vai trò quan trọng trong quy trình tích hợp liên tục (CI) và triển khai liên tục (CD), giúp tối ưu hóa quy trình phát triển phần mềm. Dưới đây là các lý do chính:

### 2.1. Tự động hóa Quy trình CI/CD

Quy trình CI điển hình bao gồm các bước:

1. **Checkout mã nguồn**: Nhà phát triển lấy mã từ kho lưu trữ (repository) như GitHub.
2. **Thực hiện thay đổi**: Thêm tính năng mới hoặc sửa lỗi.
3. **Kiểm thử cục bộ (Local Testing)**: Chạy các bài kiểm thử để đảm bảo mã hoạt động.
4. **Tích hợp (Integration)**: Hợp nhất mã vào nhánh chính (ví dụ: `main`).
5. **Xây dựng (Build)**: Tạo bản build từ mã nguồn.
6. **Kiểm thử tích hợp (Integration Testing)**: Chạy kiểm thử chức năng và hồi quy.
7. **Triển khai (Deploy)**: Đẩy bản build lên môi trường triển khai.
8. **Hợp nhất (Merge)**: Đưa mã vào nhánh chính nếu tất cả bước trên thành công.

Jenkins tự động hóa các bước này thông qua các **job** hoặc **pipeline**:

- **Kiểm thử cục bộ**: Jenkins có thể chạy các bài kiểm thử tự động ngay khi nhà phát triển cam kết (commit) mã lên kho lưu trữ.
- **Xây dựng và kiểm thử tích hợp**: Jenkins xây dựng bản build và chạy các bộ kiểm thử (unit tests, integration tests, regression tests).
- **Triển khai tự động**: Nếu kiểm thử thành công, Jenkins triển khai bản build lên môi trường được chỉ định.
- **Hợp nhất mã**: Jenkins có thể tự động hợp nhất mã vào nhánh chính sau khi tất cả các bước được hoàn thành.

### 2.2. Lợi ích của Jenkins

- **Tự động hóa toàn bộ quy trình**:
    - Loại bỏ các thao tác thủ công như chạy kiểm thử, xây dựng, hoặc triển khai.
    - Tự động kích hoạt các job khi có cam kết mã mới (kết hợp với webhook từ GitHub).

- **Tiết kiệm thời gian**:
    - Nhà phát triển không cần thực hiện các bước kiểm thử hoặc triển khai thủ công, giúp tập trung vào viết mã.
    - Pipeline tự động đảm bảo quy trình nhanh chóng và nhất quán.

- **Giảm lỗi do con người**:
    - Tự động hóa giảm thiểu sai sót trong quá trình xây dựng, kiểm thử, hoặc triển khai.
    - Cung cấp phản hồi nhanh chóng (ví dụ: thông báo lỗi qua email hoặc Slack) nếu build hoặc kiểm thử thất bại.

- **Tăng tốc giao hàng sản phẩm**:
    - Jenkins hỗ trợ giao hàng nhanh chóng với các bản build không lỗi, phù hợp với nguyên tắc DevOps về giao hàng liên tục.

- **Thông báo cho các bên liên quan**:
    - Gửi thông báo (qua email, Slack, hoặc các plugin khác) khi build thất bại hoặc triển khai thành công.

- **Hỗ trợ plugin đa dạng**:
    - Hàng nghìn plugin cho phép tích hợp với các công cụ như Git, Maven, Gradle, Docker, Kubernetes, và các nền tảng đám mây (AWS, Azure).

### 2.3. Ví dụ Quy trình CI với Jenkins

Giả sử bạn có một dự án trên GitHub (`git_training_v3`):

1. **Nhà phát triển cam kết mã**:
    - Đẩy mã lên nhánh `feature/new-feature`:
      ```bash
      git push origin feature/new-feature
      ```

2. **Webhook kích hoạt Jenkins**:
    - Một webhook trên GitHub thông báo cho Jenkins về cam kết mới.

3. **Jenkins chạy pipeline**:
    - **Job kiểm thử cục bộ**:
        - Chạy bộ kiểm thử đơn vị (unit tests):
          ```bash
          ./gradlew test
          ```
    - **Job xây dựng**:
        - Tạo bản build (ví dụ: `.jar`):
          ```bash
          ./gradlew build
          ```
    - **Job kiểm thử tích hợp**:
        - Chạy kiểm thử tích hợp và hồi quy:
          ```bash
          ./gradlew integrationTest
          ```
    - **Job triển khai**:
        - Triển khai bản build lên môi trường staging:
          ```bash
          ./gradlew deployToStaging
          ```
    - **Hợp nhất mã**:
        - Nếu tất cả bước trên thành công, tạo Pull Request tự động hoặc hợp nhất vào nhánh `main`.

4. **Thông báo**:
    - Nếu build thất bại, Jenkins gửi thông báo qua Slack hoặc email, nêu rõ lỗi.

## 3. Tầm quan trọng của Jenkins trong DevOps

- **Tự động hóa quy trình CI/CD**: Giảm thiểu thao tác thủ công, tăng tốc độ giao hàng sản phẩm.
- **Hỗ trợ toàn bộ vòng đời phát triển**: Từ xây dựng, kiểm thử, đến triển khai và hợp nhất mã.
- **Giảm lỗi và tăng chất lượng**: Tự động chạy kiểm thử, phát hiện lỗi sớm, và thông báo nhanh chóng.
- **Tùy chỉnh cao**: Hàng nghìn plugin cho phép tích hợp với hầu hết các công cụ DevOps.
- **Tiết kiệm thời gian**: Nhà phát triển tập trung vào viết mã thay vì thực hiện các tác vụ thủ công.

Jenkins là một công cụ mạnh mẽ, không thể thiếu trong quy trình DevOps, giúp tự động hóa và tối ưu hóa quy trình phát triển phần mềm, đảm bảo sản phẩm chất lượng cao được giao nhanh chóng và đáng tin cậy!

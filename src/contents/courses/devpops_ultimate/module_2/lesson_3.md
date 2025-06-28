---
course: devpops_ultimate
module: module_2
title: "Git và Hệ thống Kiểm soát Phiên bản trong DevOps"
order: 3
pubDate: 2025-06-28
updatedDate: 2025-06-28
---

## 1. Tổng quan về bài giảng
Bài giảng này giới thiệu **Git**, một hệ thống kiểm soát phiên bản (version control system) mã nguồn mở, và giải thích tại sao nó cần thiết trong phát triển phần mềm và DevOps. Nội dung tập trung vào định nghĩa của Git, vai trò của hệ thống kiểm soát phiên bản, và sự khác biệt giữa các loại hệ thống kiểm soát phiên bản (tập trung và phân tán).

### Mục tiêu bài giảng
- Hiểu **Git là gì** và vai trò của nó trong quản lý mã nguồn.
- Nắm rõ khái niệm **hệ thống kiểm soát phiên bản** và lợi ích của nó.
- Phân biệt giữa **hệ thống kiểm soát phiên bản tập trung (CVCS)** và **phân tán (DVCS)**, với Git là một DVCS.
- Hiểu lý do cần sử dụng Git trong các dự án DevOps.

## 2. Git là gì?
Git là một **hệ thống kiểm soát phiên bản mã nguồn mở và miễn phí**, được thiết kế để quản lý các thay đổi mã nguồn trong các dự án phần mềm. Git cho phép nhiều nhà phát triển làm việc đồng thời trên cùng một dự án, theo dõi lịch sử thay đổi, và khôi phục mã nguồn khi cần.

### Đặc điểm của Git
- **Mã nguồn mở:** Git miễn phí, không yêu cầu giấy phép thương mại, có thể tải và cài đặt từ internet.
- **Hiệu suất cao:** Git xử lý nhanh các thao tác như commit, merge, và diff.
- **Phân tán:** Mỗi nhà phát triển có bản sao đầy đủ của kho lưu trữ, tăng tính linh hoạt và an toàn.
- **Cộng đồng mạnh mẽ:** Git được hỗ trợ bởi cộng đồng lớn và tích hợp với các nền tảng như GitHub, GitLab.

### Vai trò của Git trong DevOps
- **Quản lý mã nguồn:** Git lưu trữ mã trong kho lưu trữ (repository), đảm bảo mọi thay đổi được ghi lại.
- **Hỗ trợ pipeline CI/CD:** Git tích hợp với các công cụ như Jenkins, GitLab CI/CD để tự động hóa xây dựng, kiểm thử, và triển khai.
- **Cộng tác nhóm:** Git cho phép nhiều nhà phát triển làm việc đồng thời trên các nhánh riêng, sau đó hợp nhất (merge) mã.

## 3. Hệ thống kiểm soát phiên bản (Version Control System) là gì?
Hệ thống kiểm soát phiên bản là công cụ giúp các nhóm phát triển phần mềm quản lý các thay đổi mã nguồn theo thời gian. Nó lưu trữ lịch sử thay đổi, cho phép theo dõi, so sánh, và khôi phục các phiên bản mã khác nhau.

### Chức năng của hệ thống kiểm soát phiên bản
- **Theo dõi thay đổi:** Ghi lại mọi sửa đổi trong mã nguồn, bao gồm ai thực hiện, khi nào, và sửa đổi gì.
- **Tạo phiên bản:** Cho phép tạo các phiên bản (versions) của mã nguồn để đánh dấu các mốc phát triển.
- **Khôi phục mã:** Hỗ trợ quay lại (rollback) phiên bản trước nếu phiên bản mới có lỗi.
- **Cộng tác:** Cho phép nhiều nhà phát triển làm việc đồng thời mà không gây xung đột.

### Ví dụ minh họa
- Giả sử bạn phát triển một tính năng mới:
    - Trước khi bắt đầu, bạn tạo phiên bản **v1.0** của mã nguồn.
    - Sau khi hoàn thành tính năng, bạn tạo phiên bản **v1.1** với các chức năng mới.
    - Hệ thống kiểm soát phiên bản ghi lại sự khác biệt giữa **v1.0** và **v1.1**, giúp bạn so sánh và khôi phục nếu cần.

### Cách Git thực hiện kiểm soát phiên bản
- Git lưu trữ các thay đổi trong một **kho lưu trữ (repository)**, cụ thể là thư mục ẩn `.git` (local repository).
- Mọi thay đổi được ghi lại dưới dạng **commit**, chứa thông tin về nội dung thay đổi, tác giả, và thời gian.
- Git cho phép quản lý các phiên bản thông qua nhánh (branches) và commit, hỗ trợ cả nâng cấp (upgrade) và hạ cấp (downgrade) mã nguồn.

## 4. Tầm quan trọng của hệ thống kiểm soát phiên bản
Hệ thống kiểm soát phiên bản, đặc biệt là Git, là yếu tố thiết yếu trong phát triển phần mềm và DevOps vì những lý do sau:

### Lợi ích
- **Quản lý phiên bản:** Đánh dấu các mốc phát triển (ví dụ: v1.0, v1.1) để theo dõi tính năng và cập nhật.
- **Khôi phục mã:** Cho phép quay lại phiên bản trước nếu phiên bản mới gây lỗi.
    - **Ví dụ:** Ứng dụng đang chạy phiên bản **v10** trên sản phẩm (production). Sau khi nâng cấp lên **v11**, một số tính năng bị lỗi. Với Git, bạn có thể dễ dàng quay lại **v10** để khôi phục hoạt động ổn định.
- **Cộng tác nhóm:** Nhiều nhà phát triển có thể làm việc đồng thời trên các nhánh riêng, giảm xung đột mã.
- **Thông báo khách hàng:** Cung cấp thông tin về phiên bản hiện tại và các tính năng mới.

### Vấn đề khi không có hệ thống kiểm soát phiên bản
- **Không thể khôi phục:** Nếu không có hệ thống kiểm soát phiên bản, việc quay lại phiên bản trước là gần như không thể vì không biết tệp nào đã thay đổi.
- **Khó quản lý:** Nâng cấp, hạ cấp, hoặc theo dõi tính năng trở nên phức tạp, dễ gây lỗi.
- **Tăng rủi ro:** Triển khai mã lỗi lên sản phẩm có thể gây gián đoạn mà không có cách khắc phục nhanh.

## 5. Các loại hệ thống kiểm soát phiên bản
Có hai loại chính: **Hệ thống kiểm soát phiên bản tập trung (Centralized Version Control System - CVCS)** và **Hệ thống kiểm soát phiên bản phân tán (Distributed Version Control System - DVCS)**. Git là một DVCS.

### 5.1. Hệ thống kiểm soát phiên bản tập trung (CVCS)
- **Định nghĩa:** Mã nguồn được lưu trữ trong một kho lưu trữ trung tâm duy nhất (central repository), thường đặt trên máy chủ từ xa hoặc máy tính cá nhân.
- **Đặc điểm:**
    - Mọi nhà phát triển truy cập trực tiếp vào kho lưu trữ trung tâm để lấy mã hoặc đẩy thay đổi.
    - Mỗi nhà phát triển chỉ có bản sao làm việc (working copy), không có lịch sử đầy đủ của kho lưu trữ.
- **Cách hoạt động:**
    - Nhà phát triển kéo (pull) mã từ kho trung tâm để làm việc.
    - Sau khi chỉnh sửa, họ đẩy (commit) thay đổi trực tiếp lên kho trung tâm.
    - Yêu cầu kết nối liên tục với kho trung tâm.

#### Nhược điểm của CVCS
- **Phụ thuộc vào kết nối:** Nếu mất kết nối hoặc máy chủ trung tâm bị gián đoạn (downtime), nhà phát triển không thể làm việc hoặc commit mã.
- **Rủi ro mất dữ liệu:** Nếu kho trung tâm bị crash (ví dụ: máy chủ bị xóa hoặc hỏng), toàn bộ mã nguồn có thể bị mất nếu không có bản sao lưu.
- **Hạn chế làm việc offline:** Nhà phát triển không thể commit hoặc xem lịch sử mã khi không kết nối với máy chủ.

#### Ví dụ CVCS
- **Subversion (SVN):** Một CVCS phổ biến trước khi Git ra đời.
- **Cơ chế:** SVN lưu trữ mã trên máy chủ trung tâm, nhà phát triển chỉ có bản sao làm việc trên máy cục bộ.

### 5.2. Hệ thống kiểm soát phiên bản phân tán (DVCS)
- **Định nghĩa:** Mỗi nhà phát triển có bản sao đầy đủ (clone) của kho lưu trữ, bao gồm cả mã nguồn và lịch sử thay đổi, trên máy cục bộ.
- **Đặc điểm:**
    - Không phụ thuộc vào kết nối liên tục với máy chủ trung tâm.
    - Nhà phát triển có thể commit, tạo nhánh, và xem lịch sử mã ngay trên máy cục bộ.
    - Đồng bộ với kho trung tâm khi cần bằng lệnh `git push` (đẩy mã) hoặc `git pull` (kéo mã).
- **Cách hoạt động:**
    - Nhà phát triển clone kho lưu trữ từ máy chủ từ xa (remote repository) về máy cục bộ.
    - Thực hiện thay đổi và commit trên kho cục bộ (local repository).
    - Khi sẵn sàng, đẩy thay đổi lên kho từ xa để đồng bộ với nhóm.

#### Lợi ích của DVCS (Git)
- **Làm việc offline:** Nhà phát triển có thể commit và quản lý mã cục bộ mà không cần kết nối internet.
- **Hiệu suất cao:** Các thao tác như commit, diff, và merge được thực hiện trên máy cục bộ, nhanh hơn so với truy cập máy chủ từ xa.
- **An toàn dữ liệu:** Mỗi nhà phát triển có bản sao đầy đủ của kho lưu trữ, nên nếu máy chủ từ xa bị crash, mã vẫn có thể được khôi phục từ máy cục bộ.
- **Kiểm tra trước khi đẩy:** Nhà phát triển có thể kiểm tra thay đổi cục bộ để đảm bảo không gây lỗi trước khi đẩy lên kho từ xa.
- **Cộng tác linh hoạt:** Nhiều nhà phát triển có thể làm việc đồng thời trên các nhánh riêng, sau đó đồng bộ qua kho từ xa.

#### Ví dụ minh họa DVCS
- Giả sử bạn làm việc trên dự án **Project A** với Git:
    - Bạn clone kho lưu trữ từ GitHub về máy cục bộ, tạo một bản sao đầy đủ (bao gồm mã và lịch sử).
    - Bạn chỉnh sửa mã, commit cục bộ, và kiểm tra tính năng mới trên máy.
    - Khi hoàn thành, bạn đẩy (push) thay đổi lên GitHub để đồng bộ.
    - Nếu kho GitHub bị crash, bạn vẫn có bản sao đầy đủ trên máy và có thể đẩy lại lên một kho mới.

## 6. Lý do cần sử dụng Git
Git là một DVCS vượt trội, giải quyết các hạn chế của CVCS và trở thành tiêu chuẩn trong DevOps nhờ các lợi ích sau:

- **Khả năng rollback:** Dễ dàng quay lại phiên bản trước nếu phiên bản mới gây lỗi trên sản phẩm.
- **Quản lý phiên bản:** Theo dõi các tính năng theo từng phiên bản (ví dụ: v10, v11), hỗ trợ nâng cấp và hạ cấp.
- **Cộng tác hiệu quả:** Hỗ trợ nhiều nhà phát triển làm việc đồng thời trên các nhánh riêng.
- **An toàn dữ liệu:** Bản sao cục bộ giảm rủi ro mất mã nguồn khi máy chủ từ xa gặp sự cố.
- **Tích hợp DevOps:** Git là nền tảng cho các pipeline CI/CD, tích hợp với Jenkins, GitHub Actions, GitLab CI/CD.

## 7. Cập nhật theo xu hướng DevOps năm 2025
- **GitOps:** Sử dụng Git làm nguồn sự thật duy nhất để quản lý mã nguồn và cơ sở hạ tầng, tích hợp với công cụ như ArgoCD, Flux.
- **Tích hợp AI:** Các công cụ AI như GitHub Copilot hỗ trợ đề xuất mã, phát hiện lỗi trong kho lưu trữ Git.
- **Bảo mật mã nguồn:** GitHub tích hợp Dependabot và CodeQL để kiểm tra lỗ hổng bảo mật trong mã.
- **Tối ưu hóa DVCS:** Các nền tảng như GitLab và Bitbucket cung cấp tích hợp CI/CD mạnh mẽ, giảm phụ thuộc vào công cụ bên thứ ba.

## 8. Tổng kết
Git là một hệ thống kiểm soát phiên bản phân tán mã nguồn mở, giúp quản lý mã nguồn hiệu quả, hỗ trợ cộng tác nhóm, và tích hợp với các pipeline DevOps. So với CVCS, Git vượt trội nhờ khả năng làm việc offline, an toàn dữ liệu, và hiệu suất cao. Các bài giảng tiếp theo sẽ đi sâu vào cách sử dụng lệnh Git, quản lý kho lưu trữ, và tích hợp với các công cụ như GitHub, Maven, Jenkins, và Docker.
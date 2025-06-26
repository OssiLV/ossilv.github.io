---
course: devpops_ultimate
module: module_3
title: "Cấu hình thông tin user trong Git"
order: 1
pubDate: 2025-06-26
updatedDate: 2025-06-26
---


## Lý do cần cấu hình thông tin người dùng trong Git

Thông tin người dùng trong Git rất quan trọng vì nó giúp xác định danh tính của bạn khi làm việc với kho lưu trữ từ xa (remote repository). Dưới đây là các lý do chính:

1. **Xác định danh tính người thực hiện commit**:
    - Khi làm việc trong một dự án lớn với nhiều lập trình viên (ví dụ: hơn 100 người), tất cả đều đẩy mã nguồn (commit) lên cùng một kho lưu trữ từ xa.
    - Nếu không cấu hình thông tin người dùng, sẽ rất khó để xác định ai là người đã thực hiện một commit cụ thể.

2. **Quản lý mã nguồn trong nhóm**:
    - Mỗi commit được gắn với thông tin người dùng (tên và email), giúp dễ dàng theo dõi ai đã thực hiện thay đổi trong mã nguồn.
    - Ví dụ: Trong một dự án tên "Project One" với hơn 100 lập trình viên:
        - Người dùng A thực hiện commit A.
        - Người dùng B thực hiện commit B.
        - Người dùng C thực hiện commit C.
    - Nếu thông tin người dùng không được gắn với commit, việc xác định ai là tác giả của đoạn mã sẽ trở nên phức tạp và mất thời gian.

3. **Tăng tính minh bạch và trách nhiệm**:
    - Thông tin người dùng giúp nhóm phát triển dễ dàng liên hệ với lập trình viên chịu trách nhiệm khi có vấn đề phát sinh trong mã nguồn.
    - Điều này đặc biệt quan trọng trong các dự án lớn, nơi việc phối hợp và kiểm tra mã nguồn là thường xuyên.

4. **Phù hợp với các công cụ quản lý mã nguồn hiện đại**:
    - Các nền tảng như GitHub, GitLab, hoặc Bitbucket sử dụng thông tin người dùng để hiển thị lịch sử commit, giúp việc quản lý dự án trở nên hiệu quả hơn.
    - Một số nền tảng thậm chí yêu cầu thông tin người dùng được cấu hình chính xác để đảm bảo tính bảo mật và xác thực.

---

## Cách cấu hình thông tin người dùng trong Git

Việc cấu hình thông tin người dùng trong Git là một bước cơ bản và cần được thực hiện trên máy tính cá nhân (local machine) trước khi bắt đầu làm việc với kho lưu trữ. Dưới đây là các bước chi tiết:

### 1. Kiểm tra phiên bản Git
Trước khi cấu hình, bạn có thể kiểm tra phiên bản Git đang sử dụng để đảm bảo tính tương thích.

- **Lệnh**:
  ```bash
  git --version
  ```

Kết quả ví dụ:

- Trên máy Mac, Windows hoặc Linux, lệnh này sẽ hiển thị phiên bản Git, ví dụ: git version 2.46.0 (phiên bản mới nhất tính đến năm 2025).
- Nếu phiên bản quá cũ, bạn nên cập nhật Git để tận dụng các tính năng mới và cải thiện bảo mật.

### 2. Xem thông tin trợ giúp về Git

Nếu bạn cần tìm hiểu về các lệnh Git, bạn có thể sử dụng lệnh trợ giúp.

```bash
git help
```

- Hiển thị danh sách các lệnh phổ biến như clone, init, commit, push, pull, v.v.
- Để tìm hiểu chi tiết về một lệnh cụ thể, sử dụng:
  ```bash
  git help <tên_lệnh>
  ```
    - Ví dụ: git help pull sẽ hiển thị thông tin chi tiết về lệnh pull, bao gồm cú pháp, mô tả, và các tùy chọn như --quiet, --verbose, --recurse-submodules, v.v.


Lưu ý:

- Trên Windows, thông tin trợ giúp có thể mở trong trình duyệt web. 
- Trên Mac hoặc Linux, thông tin hiển thị trực tiếp trong terminal.

### 3. Cấu hình thông tin người dùng

Thông tin người dùng được cấu hình ở mức toàn cục (global), áp dụng cho tất cả kho lưu trữ trên máy tính của bạn.

#### a. Cấu hình tên người dùng

```bash
git config --global user.name "Tên của bạn"
```

Ví dụ:

```bash
git config --global user.name "John Doe"
```

Giải thích:

- Thay "John Doe" bằng tên bạn muốn hiển thị trong lịch sử commit. 
- Tên này sẽ xuất hiện trong các commit bạn thực hiện.

#### b. Cấu hình địa chỉ email

```bash
git config --global user.email "email@example.com"
```

Ví dụ:

```bash
git config --global user.email "john.doe@gmail.com"
```

Giải thích:

- Email này nên khớp với tài khoản bạn sử dụng trên các nền tảng như GitHub hoặc GitLab để đảm bảo tính nhất quán. 
- Nếu bạn sử dụng nhiều tài khoản Git trên các nền tảng khác nhau, hãy đảm bảo email được cấu hình chính xác.

#### c. Kiểm tra cấu hình

Để xem tất cả thông tin cấu hình toàn cục đã thiết lập:

```bash
git config --list
```

Kết quả ví dụ:

```text
user.name=John Doe
user.email=john.doe@gmail.com
```

Lưu ý:

- Nếu bạn muốn kiểm tra chỉ một mục cụ thể, sử dụng:
    ```bash
    git config user.name
    git config user.email
    ```

#### d. Cập nhật thông tin người dùng

Nếu bạn cần thay đổi tên hoặc email, chỉ cần chạy lại lệnh cấu hình với giá trị mới.

```bash
git config --global user.name "John Doe, Jr."
git config --global user.email "john.doe.jr@gmail.com"
```

Sau khi cập nhật, kiểm tra lại bằng lệnh ```git config --list``` để xác nhận thay đổi.

### 4. Lưu ý quan trọng

**Cấu hình cục bộ (local):**

- Nếu bạn muốn cấu hình thông tin người dùng chỉ cho một kho lưu trữ cụ thể, bỏ tùy chọn ```--global```:
    ```bash
    git config user.name "Tên khác"
    git config user.email "email_khac@example.com"
    ```
- Cấu hình cục bộ chỉ áp dụng cho kho lưu trữ hiện tại.

**Tính bảo mật:**

- Đảm bảo email bạn sử dụng không tiết lộ thông tin cá nhân nhạy cảm, đặc biệt khi làm việc với các kho lưu trữ công khai.
- Trên GitHub, bạn có thể sử dụng email ẩn (ví dụ: ```username@users.noreply.github.com```) để bảo vệ quyền riêng tư.

**Tích hợp với các nền tảng hiện đại:**

- Một số nền tảng như GitHub yêu cầu xác minh email hoặc sử dụng SSH/GPG keys để tăng cường bảo mật. Hãy kiểm tra tài liệu chính thức của nền tảng để cấu hình thêm nếu cần.

---

## Tầm quan trọng của thông tin người dùng trong commit

Khi bạn thực hiện commit, thông tin người dùng (tên và email) sẽ được gắn vào commit đó. Điều này giúp:

1. Theo dõi lịch sử mã nguồn:

    - Mỗi commit hiển thị tên và email của người thực hiện, giúp dễ dàng biết ai đã thay đổi mã nguồn.

2. Hỗ trợ liên lạc trong nhóm:

   - Nếu có lỗi trong mã nguồn, trưởng nhóm hoặc các thành viên khác có thể liên hệ trực tiếp với lập trình viên thông qua email được cấu hình.

3. Tăng cường trách nhiệm:

   - Việc gắn thông tin người dùng với commit khuyến khích lập trình viên chịu trách nhiệm với mã nguồn của mình.

4. Tích hợp với các công cụ DevOps:

   - Các công cụ CI/CD (như Jenkins, GitHub Actions, GitLab CI) thường sử dụng thông tin commit để thông báo hoặc phân tích. Thông tin người dùng chính xác giúp các quy trình này hoạt động hiệu quả hơn.

---

## Tổng kết

- Cấu hình thông tin người dùng trong Git là một bước quan trọng để đảm bảo tính minh bạch và dễ dàng quản lý trong các dự án phát triển phần mềm. Bằng cách sử dụng các lệnh ```git config```, bạn có thể dễ dàng thiết lập tên và email, kiểm tra hoặc cập nhật chúng khi cần. Việc này không chỉ giúp xác định danh tính của bạn mà còn hỗ trợ tốt hơn trong việc phối hợp nhóm và tích hợp với các công cụ DevOps hiện đại.
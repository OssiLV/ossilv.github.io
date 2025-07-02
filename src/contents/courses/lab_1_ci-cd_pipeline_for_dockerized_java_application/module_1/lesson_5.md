---
course: lab_1_ci-cd_pipeline_for_dockerized_java_application
module: module_1
title: "DEBUG - 3: Cannot perform an interactive login from a non TTY device"
order: 5
pubDate: 2025-07-02
updatedDate: 2025-07-02
---

## 1. Lỗi

```bash
Started by user OssiLV
Running as SYSTEM
Building in workspace /var/jenkins_home/workspace/CI-CD Pipeline for Dockerized Java Application
The recommended git tool is: NONE
No credentials specified
 > git rev-parse --resolve-git-dir /var/jenkins_home/workspace/CI-CD Pipeline for Dockerized Java Application/.git # timeout=10
Fetching changes from the remote Git repository
 > git config remote.origin.url https://github.com/OssiLV/Calculator # timeout=10
Fetching upstream changes from https://github.com/OssiLV/Calculator
 > git --version # timeout=10
 > git --version # 'git version 2.39.5'
 > git fetch --tags --force --progress -- https://github.com/OssiLV/Calculator +refs/heads/*:refs/remotes/origin/* # timeout=10
 > git rev-parse refs/remotes/origin/main^{commit} # timeout=10
Checking out Revision b96fdb5bc51426c82c0d143bb16b4df45f21c731 (refs/remotes/origin/main)
 > git config core.sparsecheckout # timeout=10
 > git checkout -f b96fdb5bc51426c82c0d143bb16b4df45f21c731 # timeout=10
Commit message: "[dev]: change the output"
 > git rev-list --no-walk b96fdb5bc51426c82c0d143bb16b4df45f21c731 # timeout=10
[CI-CD Pipeline for Dockerized Java Application] $ /bin/sh -xe /tmp/jenkins17770788429758463888.sh
+ pwd
/var/jenkins_home/workspace/CI-CD Pipeline for Dockerized Java Application
[CI-CD Pipeline for Dockerized Java Application] $ /var/jenkins_home/tools/hudson.tasks.Maven_MavenInstallation/Maven_3.9.10/bin/mvn -f pom.xml clean package
[INFO] Scanning for projects...
[INFO] 
[INFO] -----------------------< org.example:Calculator >-----------------------
[INFO] Building Calculator 1.0-SNAPSHOT
[INFO]   from pom.xml
[INFO] --------------------------------[ jar ]---------------------------------
[INFO] 
[INFO] --- clean:3.2.0:clean (default-clean) @ Calculator ---
[INFO] Deleting /var/jenkins_home/workspace/CI-CD Pipeline for Dockerized Java Application/target
[INFO] 
[INFO] --- resources:3.3.1:resources (default-resources) @ Calculator ---
[INFO] skip non existing resourceDirectory /var/jenkins_home/workspace/CI-CD Pipeline for Dockerized Java Application/src/main/resources
[INFO] 
[INFO] --- compiler:3.8.1:compile (default-compile) @ Calculator ---
[INFO] Changes detected - recompiling the module!
[INFO] Compiling 2 source files to /var/jenkins_home/workspace/CI-CD Pipeline for Dockerized Java Application/target/classes
[INFO] 
[INFO] --- resources:3.3.1:testResources (default-testResources) @ Calculator ---
[INFO] skip non existing resourceDirectory /var/jenkins_home/workspace/CI-CD Pipeline for Dockerized Java Application/src/test/resources
[INFO] 
[INFO] --- compiler:3.8.1:testCompile (default-testCompile) @ Calculator ---
[INFO] Changes detected - recompiling the module!
[INFO] Compiling 1 source file to /var/jenkins_home/workspace/CI-CD Pipeline for Dockerized Java Application/target/test-classes
[INFO] 
[INFO] --- surefire:3.2.5:test (default-test) @ Calculator ---
[INFO] Using auto detected provider org.apache.maven.surefire.junitplatform.JUnitPlatformProvider
[INFO] 
[INFO] -------------------------------------------------------
[INFO]  T E S T S
[INFO] -------------------------------------------------------
[INFO] Running org.example.CalculatorTest
[INFO] Tests run: 5, Failures: 0, Errors: 0, Skipped: 0, Time elapsed: 0.034 s -- in org.example.CalculatorTest
[INFO] 
[INFO] Results:
[INFO] 
[INFO] Tests run: 5, Failures: 0, Errors: 0, Skipped: 0
[INFO] 
[INFO] 
[INFO] --- jar:3.2.2:jar (default-jar) @ Calculator ---
[INFO] Building jar: /var/jenkins_home/workspace/CI-CD Pipeline for Dockerized Java Application/target/Calculator-1.0-SNAPSHOT.jar
[INFO] ------------------------------------------------------------------------
[INFO] BUILD SUCCESS
[INFO] ------------------------------------------------------------------------
[INFO] Total time:  1.958 s
[INFO] Finished at: 2025-07-02T11:08:22Z
[INFO] ------------------------------------------------------------------------
[CI-CD Pipeline for Dockerized Java Application] $ /bin/sh -xe /tmp/jenkins8257157309351476601.sh
+ echo
+ docker login -u ossilv --password-stdin
Error: Cannot perform an interactive login from a non TTY device
Build step 'Execute shell' marked build as failure
Archiving artifacts
Recording test results
[Checks API] No suitable checks publisher found.
Finished: FAILURE
```

## 2. Nguyên nhân
```bash
Error: Cannot perform an interactive login from a non TTY device
```

Lệnh `docker login` khi không dùng cờ `--password-stdin` sẽ cố gắng hỏi mật khẩu qua tương tác TTY, nhưng Jenkins (hoặc bất kỳ script CI nào) không chạy trên TTY → gây lỗi.

## 3. Phương pháp xử lý

- Dùng --password-stdin

  Thay vì viết:

  ```bash
  docker login -u DOCKER_USERNAME_ENV DOCKER_PASSWORD_ENV
  ```

  Hãy viết:

  ```bash
  echo "$DOCKER_HUB_PASSWORD" | docker login -u "$DOCKER_HUB_USER" --password-stdin
  ```
  
- Kiểm tra lại tên biến
- Quay lại Jenkins UI và build lại job


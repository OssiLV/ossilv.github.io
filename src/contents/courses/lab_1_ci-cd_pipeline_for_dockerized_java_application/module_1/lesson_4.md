---
course: lab_1_ci-cd_pipeline_for_dockerized_java_application
module: module_1
title: "DEBUG - 2: Docker: not found"
order: 4
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
[CI-CD Pipeline for Dockerized Java Application] $ /bin/sh -xe /tmp/jenkins5433199114947203568.sh
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
[INFO] Total time:  1.886 s
[INFO] Finished at: 2025-07-02T10:54:49Z
[INFO] ------------------------------------------------------------------------
[CI-CD Pipeline for Dockerized Java Application] $ /bin/sh -xe /tmp/jenkins13824783289948030619.sh
+ + echo ossilv
docker login -u  --password-stdin
/tmp/jenkins13824783289948030619.sh: 2: docker: not found
Build step 'Execute shell' marked build as failure
Archiving artifacts
Recording test results
[Checks API] No suitable checks publisher found.
Finished: FAILURE
```

## 2. Nguyên nhân

```bash
/tmp/jenkins13824783289948030619.sh: 2: docker: not found
```

Trong container Jenkins, bạn đang gọi lệnh `docker`, nhưng Jenkins không tìm thấy command này – nghĩa là Docker chưa được cài đặt bên trong container Jenkins.

## 3. Phương pháp xử lý


> Nếu Jenkins chạy trên Docker thì exec vào container Jenkins chỉ cần cài client Docker CLI trong container Jenkins là được, không cần daemon.

- exec vào container Jenkins sử dụng quyền root user
  ```bash
  docker exec -u root -it [container_id] bash
  ```

- Cài client Docker CLI
  ```bash
  apt-get update && \
  apt-get install -y docker.io && \
  usermod -aG docker jenkins
  ```

- Kiểm tra docker version
  ```bash
  docker --version
  ```
  Nếu thấy output dạng `Docker version ...` nghĩa là đã **OK**
  
- Quay lại Jenkins UI và build lại job


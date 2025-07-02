---
course: lab_1_ci-cd_pipeline_for_dockerized_java_application
module: module_1
title: "DEBUG - 1: fatal: not in a git directory"
order: 3
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
ERROR: Error fetching remote repo 'origin'
hudson.plugins.git.GitException: Failed to fetch from https://github.com/OssiLV/Calculator
	at PluginClassLoader for git//hudson.plugins.git.GitSCM.fetchFrom(GitSCM.java:999)
	at PluginClassLoader for git//hudson.plugins.git.GitSCM.retrieveChanges(GitSCM.java:1240)
	at PluginClassLoader for git//hudson.plugins.git.GitSCM._checkout(GitSCM.java:1311)
	at PluginClassLoader for git//hudson.plugins.git.GitSCM.checkout(GitSCM.java:1278)
	at hudson.scm.SCM.checkout(SCM.java:540)
	at hudson.model.AbstractProject.checkout(AbstractProject.java:1250)
	at hudson.model.AbstractBuild$AbstractBuildExecution.defaultCheckout(AbstractBuild.java:649)
	at jenkins.scm.SCMCheckoutStrategy.checkout(SCMCheckoutStrategy.java:85)
	at hudson.model.AbstractBuild$AbstractBuildExecution.run(AbstractBuild.java:522)
	at hudson.model.Run.execute(Run.java:1840)
	at hudson.model.FreeStyleBuild.run(FreeStyleBuild.java:44)
	at hudson.model.ResourceController.execute(ResourceController.java:101)
	at hudson.model.Executor.run(Executor.java:446)
Caused by: hudson.plugins.git.GitException: Command "git config remote.origin.url https://github.com/OssiLV/Calculator" returned status code 128:
stdout: 
stderr: fatal: not in a git directory

	at PluginClassLoader for git-client//org.jenkinsci.plugins.gitclient.CliGitAPIImpl.launchCommandIn(CliGitAPIImpl.java:2846)
	at PluginClassLoader for git-client//org.jenkinsci.plugins.gitclient.CliGitAPIImpl.launchCommandIn(CliGitAPIImpl.java:2771)
	at PluginClassLoader for git-client//org.jenkinsci.plugins.gitclient.CliGitAPIImpl.launchCommandIn(CliGitAPIImpl.java:2766)
	at PluginClassLoader for git-client//org.jenkinsci.plugins.gitclient.CliGitAPIImpl.launchCommand(CliGitAPIImpl.java:2059)
	at PluginClassLoader for git-client//org.jenkinsci.plugins.gitclient.CliGitAPIImpl.launchCommand(CliGitAPIImpl.java:2071)
	at PluginClassLoader for git-client//org.jenkinsci.plugins.gitclient.CliGitAPIImpl.setRemoteUrl(CliGitAPIImpl.java:1670)
	at PluginClassLoader for git-client//hudson.plugins.git.GitAPI.setRemoteUrl(GitAPI.java:182)
	at PluginClassLoader for git//hudson.plugins.git.GitSCM.fetchFrom(GitSCM.java:987)
	... 12 more
ERROR: Error fetching remote repo 'origin'
Archiving artifacts
Recording test results
[Checks API] No suitable checks publisher found.
Finished: FAILURE
```

## 2. Nguyên nhân

```bash
fatal: not in a git directory
```

Jenkins không thể clone được GitHub repository, do workspace không phải là một thư mục Git hợp lệ. Lỗi phổ biến khi khai báo Source Code Management (SCM) chưa đúng, hoặc Jenkins không thực sự thực hiện được lệnh `git clone`.

## 3. Phương pháp xử lý

> Nếu Jenkins chạy trên Docker thì exec vào container Jenkins tìm đến thư mục workspace chứa job hiện tại và xóa sau đó build lại job

- exec vào container Jenkins
  ```bash
  docker exec -it [container_id] bash
  ```
- Di chuyển tới thư mục workspace và xóa job
  ```bash
  cd /var/jenkins_home/workspace
  rm -fr [tên thư mục job]
  ```
  
- Quay lại Jenkins UI và build lại job


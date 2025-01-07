---
title: "Getting Started with Ansible: Setting up Locally for Beginners"
date: 7th Jan 2025
description: Learn how to setting up Ansible in your Local Environment.
image: /blogs-img/ansble.jpg
alt: Ansible
ogImage: /blogs-img/ansble.jpg
tags:
  - Ansible
  - GettingStarted
published: true
---

### Introduction

[Ansible](https://www.redhat.com/en/ansible-collaborative?intcmp=7015Y000003t7aWQAQ) is an open-source automation tool that simplifies IT tasks like configuration management, application deployment, and orchestration. With it's agentless architecture, Ansible uses SSH to communicate with systems, making it lightweight and easy to set up. It relies on declarative YAML-based playbooks, allowing you to define tasks in a simple and human-readable format.

Whether you're managing a single server or an entire data center, Ansible helps automate repetitive tasks, ensuring consistency and saving time. This blog will guide you through setting up Ansible locally, so you can start exploring its powerful automation capabilities right from your machine.

### Prerequisites

These are requirement for Ansible setup:

- a Virtualization tools like VMWare or Virtualbox.
- Ubuntu VM.
- Basic command-line knowledge.

### Setting up Ubuntu

setting up Ubuntu VM is a simple process, i'm using Virtualbox for launch this VM since i have plan to create multi node in this article i'm gonna setup 2 Ubuntu VM as ansible nodes. all you need to setup is attaching NAT Network for internet connection, and Host-only Network for communicate with host machine. then update and upgrade your Ubuntu VM using

```bash
sudo apt update && sudo apt upgrade
```

### Setting up ansible

install ansible on your local machine, since im using mac i'll be use brew to install it on my mac

```bash
brew install ansible
```

then validate Ansible installation using:

```bash
ansible --version
```

> you don't have to install ansible on each VMs, because ansible is **agentless**
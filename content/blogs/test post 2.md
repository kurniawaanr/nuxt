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

#### Setting up Ubuntu

setting up Ubuntu VM is a simple process, i'm using Virtualbox for launch this VM since i have plan to create multi node in this article i'm gonna setup 2 Ubuntu VM as ansible nodes. all you need to setup is attaching NAT Network for internet connection, and Host-only Network for communicate with host machine. then update and upgrade your Ubuntu VM using

```bash
sudo apt update && sudo apt upgrade
```

#### Setting up ansible

install ansible on your local machine, since im using mac i'll be use brew to install it on my mac

```bash
brew install ansible
```

then validate Ansible installation using:

```bash
ansible --version
```

> you don't have to install ansible on each VMs, because ansible is **agentless**

#### Setting up the Inventory File

This `inventory file` contains information about the hosts that we created before (Ubuntu VMs). The inventory file also often used to set variables that will be valid only for specific host or groups, in order to be used within `playbooks` and `templates`. to edit contents of Ansible inventory open it on `/etc/ansible/hosts` if this folder path doesnt exist you just need to create it.

> you are free to create inventory files in any location, but usually is on `/etc/ansible/hosts`

since i have 2 Ubuntu VMs this is my inventory file configuration, i define a group named `nodes` with 2 different VMs in it, each identified by a custom alis: `ubuntu1` and `ubuntu2` (im using the Ubuntu VM hostname for this). and be sure to assign the IPs with the IP addresses of your Ubuntu VMs on `ansible_host` and your username on each VMs on `ansible_user` .

```text
[nodes]
ubuntu1 ansible_host=192.168.0.11 ansible_user=kur
ubuntu2 ansible_host=192.168.0.12 ansible_user=kur

[all:vars]
ansible_python_interpreter=/usr/bin/python3
```

the `all:vars` subgroup sets the `ansible_python_interpreter` host parameter that will be valid for all host included in this inventory. the purpose of this is to make sure the nodes uses the `/usr/bin/python3` (Python 3) executeable instead of `/usr/bin/python` (python 2.7). save the files then run this command to check the connection from your local machine into ansible nodes (VMs)

```bash
ansible all -m ping -u root
```

then the output will be like this:

```bash
ubuntu2 | SUCCESS => {
    "changed": false,
    "ping": "pong"
}
ubuntu1 | SUCCESS => {
    "changed": false,
    "ping": "pong"
}
```

that's it! we are done setting up Ansible on our Local Environment. In the next post, I'll be exploring Ansible playbooks to deploy applications.

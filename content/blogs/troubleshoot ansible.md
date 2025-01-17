---
title: "Troubleshooting Ansible Setup on Localhost: Lessons from My Experience"
date: 8th Jan 2025
description: Facing several issues when setting up ansible on localhost, and how
  i fix this issue.
image: /blogs-img/troubleshoot.jpg
alt: How To Connect You Namecheap Domain With Vercel Deployed App
ogImage: /blogs-img/troubleshoot.jpg
tags:
  - issue
  - troubleshoot
  - ansible
published: true
---

### Introduction

Getting started with Ansible can be an exciting yet challenging experience, especially during the initial setup. i've already setting up ansible from the scratch before, but on different system. this time on the different system, i'm facing an issue where ansible control node cant connect/ping into the nodes. There is no problem with test connection from my host machine into my VMs even with SSH i can do it all. In this post, I’ll walk you through the challenges I encountered during my first Ansible setup and the solutions I found along the way.

### Problems

- Can't upgrade python version using deadsnakes PPA
- Can't do ansible ping test connection into ansible host using ansible ping command

### Analyze

the system that im running on:


| Device     | Specs    |
|------------|-------------------|
| Macbook Air M3   | - Sequoia 15.2 |
|            | - Ansible core 2.18       |
|  | - Python3.13 |
| Virtualbox | - Ubuntu 18.04 |
|    | - Python3.6        |
|    |   |

as [ansible documentation](https://docs.ansible.com/ansible/latest/reference_appendices/release_and_maintenance.html) provide that the version of ansible core must be match with python version. since i'm using `ansible 2.18` which is the latest version of ansible i can't connect into my Ubuntu 18 VM because it has pyton3.6 on the default install.

### Fix

cause the problem is on the version of ansible core on my control node which is ansible 2.18 and the host node that have python 3.6 pre-installed. first thing i need to do is upgrading my python3 version on my Ubuntu machine. but the problem that i have said before is i can't upgrade python version using install from deadsnakes PPA which i don't really know until now. so, i'm using another method that manually install it from it source, the installation guide can be found [here](https://computingforgeeks.com/how-to-install-python-on-ubuntu-linux/).

after upgrading python3 is success, don't forget to add this into ansible inventory:
```text
[all:vars]
ansible_python_interpreter=/usr/bin/python3
```
then run again the command:
```bash
ansible all - i /path/to/your-inventory -m ping
```

the result should be like this
```bash
kur | SUCCESS => {
    "changed": false,
    "ping": "pong"
}
```

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

### Problems

- Can't upgrade python version using ubuntu package manager
- Can't do ansible ping test connection into ansible host

### Analyze

the system that im running on:

|                |                                                 |
| -------------- | ----------------------------------------------- |
| Device         | Specs                                           |
| Macbook Air M3 | - Sequoia 15.2
- Ansible core 2.18
- python3.13 |
| Virtualbox     | * Ubuntu 18
* Python3.6                         |

### Fix

cause the problem is on the version of ansible core on my control node which is ansible 2.18 and the host node that have python 3.6 pre-installed.

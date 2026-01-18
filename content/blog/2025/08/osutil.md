---
title: "My OSutil"
description: "Learning from others to build a new utility for all Operating Systems"
pubDate: 2025-08-10
draft: false
---

## Taming the OS Jungle: From Linutil to My Cross-Platform OSutil

Ever feel like you're wrestling with different beasts every time you switch between Windows, macOS, and Linux? I did. That's why I embarked on a quest to create a single tool to rule them all, or at least make them play a little nicer together. The result? [OSutil](https://github.com/Jaredy899/osutil), my cross-platform utility library designed to bring order to the operating system chaos.

To install simply copy and paste these commands into your terminal of choice!

For Linux and Mac:

```bash
sh <(curl -fsSL jaredcervantes.com/os)
```

For Windows:

```powershell
irm jaredcervantes.com/winos | iex
```

### Inspiration and Evolution

OSutil has its roots in Chris Titus's [linutil](https://github.com/ChrisTitusTech/linutil), a fantastic tool for Linux system administration. I've always admired the simplicity and efficiency of linutil, but I wanted something that could offer the same benefits across all the operating systems I use daily.

![OSutil](https://github.com/Jaredy899/osutil/blob/main/.github/Linux.png?raw=true)

That's where the idea for OSutil came from. I realized I already had a collection of scripts and tools I'd built for my Windows and macOS environments. You might remember my previous blog posts detailing my [Windows setup](/blog/2025/06/my-windows-setup) and my [macOS configuration](/blog/2025/07/my-mac-setup). OSutil is, in a way, the culmination of those efforts, bringing everything together under one program. I also originally had a Linux setup simliar to these setups (and even had a blog written about it). But I started work on OSutil after a little insirpation.

### Building a Cross-Platform Solution

The real challenge was taking these disparate scripts and creating a unified, cross-platform experience. I wanted users to be able to run similar commands and achieve consistent results regardless of their operating system. This required careful planning, platform-specific implementations, and a lot of testing.

OSutil combines the best aspects of my existing Windows and macOS scripts with the core principles of linutil. It provides a set of command-line utilities for tasks such as:

* System information retrieval
* Package management
* Network configuration
* File system operations
* And more!

One of my favorite features is that **OSutil works entirely in the terminal — even over SSH**. This makes it perfect for managing **headless Linux machines** or remote servers where you don’t have a graphical interface. Whether you’re sitting at your desk or connected halfway across the world, OSutil feels the same.

### Why OSutil?

I believe OSutil offers a unique blend of features and benefits:

* **Cross-Platform Compatibility:** Works seamlessly on Windows, macOS, and Linux.
* **Familiar Syntax:** Inspired by linutil, making it easy to learn for Linux users.
* **Extensible Design:** Built with modularity in mind, allowing for easy addition of new utilities.
* **Personalized Experience:** Integrates the best parts of my personal Windows and macOS setups.
* **Remote-Friendly:** Fully functional over SSH, making it ideal for headless systems.

Honestly, the program is really for myself. But I'm constantly working on improving OSutil and adding new features. There may also be some bugs with some of the scripts (and probably some of the underlying Rust code, as I'm terrible at Rust), but I encourage you to check out the [repository](https://github.com/Jaredy899/osutil), to report bugs and issues, contribute your own scripts, and help me make it even better!

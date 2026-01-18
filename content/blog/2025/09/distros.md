---
title: "My Thoughts on Windows, macOS, and Linux Distros"
description: "A quick review of the operating systems and Linux distributions I've tested, and what stands out about each."
pubDate: 2025-09-07
draft: false
---
# Operating Systems

Over the course of contributing to open source projects, testing scripts, and just tinkering, I’ve had the chance to try out a variety of Linux distributions—as well as macOS and Windows. Each one has its own strengths, quirks, and communities.  

To help manage and streamline my setups across all these systems, I built a small utility I call **[OSutil](/blog/2025/08/osutil)**. It’s been a huge help in keeping my environments consistent and easier to configure.

Here’s a quick rundown of my thoughts on each system I’ve used so far.

---

## Windows ![Windows](https://avatars.githubusercontent.com/u/6154722?s=48&v=4)

Windows is the OS I use the most—it’s my main laptop system and also what I run on my desktop. It works well for games, which is a big reason I stick with it, but honestly, it’s pretty awful for almost everything else because of all the bloat it comes with now.  

To make it usable, I rely on a few key tools:

- [Chris Titus Tech’s utility](https://github.com/ChrisTitusTech/winutil) to debloat and strip out unnecessary junk  
- A custom install file to cut down on the garbage that ships with Windows  
- AutoHotKey to create shortcuts and workarounds that make the system faster and more efficient  

On my desktop, I also use **WSL (Windows Subsystem for Linux)**, which makes development much easier by giving me a Linux-like environment without leaving Windows. I also use Windows for work, and while it’s not my favorite OS, these tweaks and workarounds make it functional enough for my daily workflow.

---

## macOS ![Apple](https://avatars.githubusercontent.com/u/10639145?s=48&v=4)

I like macOS, though it has some odd presets—like overly flashy animations—that I usually tone down. What really makes it shine for me are the laptops themselves: long battery life, great build quality, and a smooth developer experience.  

[Homebrew](https://brew.sh/) makes installing packages easy, and [**Raycast**](https://www.raycast.com/) has become essential for me to use macOS quickly and efficiently. While I wouldn’t call it perfect, macOS is a great balance of polish and practicality, especially on Apple’s hardware.

---

## Debian ![Debian](https://avatars.githubusercontent.com/u/1854028?s=48&v=4)

Debian is solid and everywhere. It’s the base for so many other distributions, and you can always count on it to be stable. However, the base Debian system is often behind on package versions, which can be frustrating if you want the latest software. Although the latest Debian 13 just came out so it does have a lot of newer packages, they’ll be outdated before too long.  

That said, Debian is what I trust for my **server setup**. I run it through **Proxmox** for virtualization and use it as the base for my **Docker containers**. I also run **TrueNAS SCALE**, which is Debian-based, for managing storage. For me, Debian’s stability makes it the perfect choice for server environments, even if it’s not the most exciting distro on the desktop.

---

## Ubuntu ![Ubuntu](https://avatars.githubusercontent.com/u/4604537?s=48&v=4)

Ubuntu is based on Debian but is more up-to-date. It’s probably the most popular Linux desktop, but honestly, the desktop experience leaves a lot to be desired. It’s great for servers and gets the job done, but I find the desktop environment a bit lacking.

---

## Arch ![Arch](https://avatars.githubusercontent.com/u/4673648?s=48&v=4)

Arch is the definition of bleeding edge. It has all the packages you could ever want, and with the AUR (Arch User Repository), you can install just about anything.  

I use Arch in two ways:

- On a **play laptop**, I run [Omarchy by DHH](https://omarchy.org/), which makes Arch surprisingly easy and fun to use.  
- On my **desktop**, I dual-boot Arch alongside Windows, giving me the best of both worlds: Windows for games and work, and Arch for tinkering and development.  

The downside is that Arch is easy to break if you’re not careful, especially with frequent updates. But that’s also part of the fun—it’s a distro that rewards learning and experimentation.

---

## Fedora ![Fedora](https://avatars.githubusercontent.com/u/3316637?s=84&v=4)

Fedora is another solid choice, and it’s always up-to-date. However, I’m a bit wary of it because of Red Hat’s recent moves towards closed source. Still, it’s a great distro for those who want the latest features and a polished experience.

---

## openSUSE ![openSUSE](https://avatars.githubusercontent.com/u/623819?s=48&v=4)

openSUSE feels a bit slow compared to others, but it has a good community and is well-maintained. It uses RPM packages like Fedora, and it’s a solid choice if you want something a little different.

---

## Solus ![Solus](https://avatars.githubusercontent.com/u/6185495?s=48&v=4)

Solus is a niche distro focused on desktop environments. It has a friendly community and is well put together, but it’s not as standard as the other distros. You pretty much have to use their package manager, but they have almost everything you’d need.

---

## Void ![Void](https://avatars.githubusercontent.com/u/37247796?s=48&v=4)

Void Linux is small, fast, and updated regularly. It uses the runit init system instead of systemd, which helps it boot quickly and stay lightweight. It’s flexible and a great choice if you want something minimal and different.

---

## Alpine ![Alpine](https://avatars.githubusercontent.com/u/7600810?s=48&v=4)

Alpine is very small and also uses OpenRC for init, making it fast and efficient. It’s popular for Docker containers and server use, but you can run a desktop environment on it if you want. It’s a great choice for lightweight systems.

---

## NixOS ![NixOS](https://avatars.githubusercontent.com/u/487568?s=48&v=4)

NixOS is unique because it’s declarative: you define your entire system configuration in a single file, and the system builds itself from that. This makes it incredibly easy to replicate your setup on another machine. However, installing and uninstalling software isn’t as straightforward as with other distros, and there’s a bit of a learning curve.

---

Every OS has its own vibe and use case. I’ve enjoyed exploring them all, and I’ll probably keep hopping around as I keep learning and contributing. If you’re curious about any of these, I recommend giving them a try and seeing which one fits your workflow best!

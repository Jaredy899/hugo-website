---
title: "My Linux Configuration"
description: "How I configure different linux Distributions"
pubDate: 2025-07-27
draft: true
---

# Jared's Linux Installs: Automating Your Linux Setup

---

![Linux](https://qmpdliftraf4pov3.public.blob.vercel-storage.com/tux-b91fJLvI1Otb3xyK5KNNjYobaitzfT.webp)

---

Are you tired of manually setting up a new Linux system every time? Do you wish for a quicker, more consistent way to get your environment just right? Look no further than **[Jared's Linux Installs](https://github.com/Jaredy899/linux.git)**, a fantastic collection of shell scripts designed for automated Linux setup and configuration.

This toolkit isn't just about automation; it's also a living collection of Jared's personal Linux configurations. It helps you quickly set up a new Linux system with essential utilities and optimized settings, providing a consistent environment across various distributions.

## 🚀 Key Features

Jared's Linux Installs comes packed with capabilities to streamline your setup and provide a robust configuration base:

* **Post-install Setup**: Install standard utilities and configure basic system settings right after your OS is fresh.
* **Comprehensive Configuration Collection**: Beyond the automated scripts, the repository is also home to various personal configuration files, notably including a detailed **Nix configuration**, showcasing how different Linux distributions are configured and maintained.
* **Linux Utility**: Run [Chris Titus Tech's Linutil](https://github.com/ChrisTitusTech/linutil) for additional system optimizations and tweaks. I have updated this utility to fix most bugs and added some custom functionality.
* **SSH Key Management**: Easily add and configure SSH keys for secure remote access.
* **Network Drive Setup**: Mount and configure network storage with ease.
* **Tailscale VPN**: Install and configure Tailscale for secure, zero-config networking across your devices.
* **Docker Installation**: Get Docker and Docker Compose set up quickly for containerized development.
* **Config Replacement**: Replace default configs with optimized versions (sourced from this very repository!) for better performance or security.
* **System Updates**: Keep your system up to date with a single command.

## 💡 How to Use It

### Quick Start

Getting started with Jared's Linux Installs is incredibly simple. Just open your terminal and run this command:

```sh
sh <(curl -fsSL jaredcervantes.com/linux)
```

**Important Note**: When running scripts directly from the internet, always understand what they do. While this script offers immense convenience, it's good practice to review its contents if you have any security concerns.

### Special Arch Linux Installation Support

For Arch Linux users, this toolkit is even smarter! If you run the script from an Arch Linux ISO environment, it will automatically detect this and offer to run a dedicated Arch installation script, guiding you through the setup process.

## 🛠️ Available Options (The Main Menu)

Once you run the main script, you'll be presented with a clear menu of options:

![Linux](https://qmpdliftraf4pov3.public.blob.vercel-storage.com/linux-xLV0UbU0VyzQ6fq5pGtQje6HaV50g0.webp)

1. **Run Post Install Script** - Install and configure essential utilities.
2. **Run Linux Utility** - Launch the [Jared Linux Utility](https://github.com/Jaredy899/jaredlinutil) for system tweaks.
3. **Add SSH Key** - Configure SSH key authentication.
4. **Install a Network Drive** - Set up network storage mounts.
5. **Install Tailscale** - Set up Tailscale VPN for secure networking.
6. **Install Docker** - Install Docker and related tools.
7. **Replace Configs** - Replace configuration files with optimized versions.
8. **Update System** - Run system updates.
9. **Exit** - Exit the script.

## Who is This For?

This toolkit is a must-have for:

* **Linux Enthusiasts**: Who frequently reinstall or set up new systems and value consistent configurations, including those using Nix.
* **System Administrators**: Looking for a reliable, repeatable way to configure machines.
* **Developers**: Who need a consistent environment with Docker, SSH, and network drives.
* **Anyone Learning Linux**: As a practical example of system automation, scripting, and modern configuration management like Nix.

## 📝 License

This project is open source and available under the [MIT License](https://github.com/Jaredy899/linux/blob/main/LICENSE). This means you're free to use, modify, and distribute it!

## 📚 Documentation

For more detailed information about each component and how it works, dive into the comments directly within the individual script files on the GitHub repository. The repository itself serves as a direct documentation of Jared's configuration choices, including the Nix setup.

---

Jared's Linux Installs provides a robust and convenient way to automate common Linux setup tasks, while also offering a window into comprehensive system configuration, including Nix. Give it a try the next time you're setting up a new system, and experience the power of efficient Linux automation and configuration management!

---
title: "OSutil Refactor: Focusing on Linux and macOS"
description: "Notes on refactoring OSutil and narrowing platform support to Linux and macOS"
pubDate: 2026-01-26
draft: false
tags: ["osutil", "rust", "open-source", "refactoring"]
---

# 🛠️ OSutil Refactor: Focusing on Linux and macOS

Over the past few weeks, I’ve been doing a major refactor of **[OSutil](https://github.com/Jaredy899/osutil)**. What started as a cross-platform system utility targeting Windows, Linux, macOS, and FreeBSD has now been intentionally narrowed to **Linux-first with macOS support**.

This wasn’t just cleanup for cleanup’s sake. It was a response to real-world complexity, maintenance cost, and how I actually use the tool day to day.

---

## 🎯 What OSutil Is (and Is Becoming)

OSutil is a terminal-based system utility toolkit focused on fast, keyboard-driven workflows. It aims to unify common system tasks behind a consistent TUI interface instead of a pile of ad-hoc shell scripts.

The philosophy is simple:

- Terminal-first  
- Scriptable and opinionated  
- Minimal abstraction where it hurts  
- Focus on platforms that actually make sense for deep CLI tooling  

Originally, that meant supporting *everything*. In practice, that turned out to be a mistake.

---

## 🪟 Why Windows Support Was Removed

Windows was the single biggest source of friction.

OSutil relies heavily on interactive terminal behavior, and Windows makes that much harder than it needs to be, especially when dealing with **pseudo-terminals (PTYs)**.

Some of the recurring problems:

- PTY handling on Windows is awkward and inconsistent  
- PowerShell, CMD, and newer terminals all behave differently  
- Terminal control sequences don’t reliably map to Unix behavior  
- Extra abstraction layers were required just to match basic Linux functionality  

A lot of time was spent fighting the platform instead of building features. Since OSutil is fundamentally a terminal-oriented tool, that tradeoff didn’t make sense long-term.

Windows support was removed so the project could move forward without being dominated by platform-specific workarounds.

---

## 🐡 Why FreeBSD Didn’t Make the Cut

FreeBSD wasn’t removed because it was broken — it was removed because it wasn’t worth maintaining.

In practice:

- I don’t use FreeBSD personally  
- I don’t have a FreeBSD system to test on  
- User demand was very low  
- Supporting it required special-casing assumptions that work fine on Linux  

Maintaining support for an OS I don’t use and can’t easily test added complexity without much benefit. Dropping FreeBSD simplified the project and made it easier to reason about the codebase.

---

## 🍎 macOS: Supported, With Limits

macOS sits somewhere between Linux and Windows.

On the positive side:

- It’s Unix-based  
- Terminal behavior is mostly predictable  
- PTYs work well enough for TUI applications  

At the same time:

- Many system settings can’t be manipulated from the command line  
- Apple locks down significant parts of the OS  
- Some configuration changes still require GUI interaction  

OSutil works well on macOS, but there are limits to how much system automation is possible. macOS remains supported, just with realistic expectations.

---

## 🐧 Why Linux Is the Primary Focus

Linux is where OSutil fits best.

- Clean and consistent PTY support  
- CLI-friendly system configuration  
- Predictable terminal behavior  
- Tooling that aligns with OSutil’s goals  

By focusing on Linux (and supporting macOS where it makes sense), I can:

- Move faster  
- Reduce conditional compilation and platform-specific hacks  
- Improve reliability and depth instead of breadth  

Instead of being “kind of okay everywhere,” OSutil can be solid where it matters.

---

## 🔧 What Changed in the Refactor

### 🧹 Platform Support Reduction

Windows and FreeBSD support were removed entirely.

This included deleting:

- Windows PowerShell scripts  
- Windows-specific tabs and configuration  
- FreeBSD build scripts  
- FreeBSD-specific development helpers  

Alongside that cleanup:

- All `#[cfg(windows)]` conditionals were removed  
- Windows-specific code paths were deleted  
- PowerShell syntax highlighting was dropped  
- Platform detection was simplified to Linux and macOS  
- Build scripts were cleaned up accordingly  

Documentation was updated to reflect the new scope, including the README and issue templates.

---

## ✨ Codebase Improvements

The refactor resulted in a cleaner and more maintainable project:

- Fewer conditional compilation paths  
- Simpler execution logic  
- Less platform-specific branching  
- Easier onboarding for contributors  

Reducing scope made the code easier to reason about and easier to change.

---

## 🚀 What’s Next

Even though Windows support was removed from OSutil, Windows automation itself isn’t going away.

Instead of forcing OSutil to work in an environment it isn’t well suited for, I’m planning to lean more heavily into **PowerShell** and make my existing Windows setup script more capable and more polished. This builds on ideas I’ve already talked about in [a previous post](/blog/my-windows-setup).

Keeping Windows tooling native and Unix tooling native avoids awkward abstractions and lets each platform play to its strengths.

---

## 📦 Installation

OSutil is still easy to install on Linux and macOS:

```bash
sh <(curl -fsSL jaredcervantes.com/os)

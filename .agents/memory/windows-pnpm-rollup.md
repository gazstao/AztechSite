---
name: Windows pnpm and Rollup
description: Cross-platform dependency behavior for building the Vite site outside Replit.
---

The workspace must retain Rollup's Windows x64 optional package when the project is cloned and built on Windows; Linux-only dependency pruning makes the local Vite build fail even though the Replit build works.

**Why:** The Replit runtime is Linux, but the published static site may be built locally on Windows for WAMP hosting.

**How to apply:** Keep the Windows Rollup package resolvable in the workspace lockfile and reinstall dependencies with pnpm after pulling changes on Windows.
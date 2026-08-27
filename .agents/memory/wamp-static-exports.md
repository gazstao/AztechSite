---
name: WAMP static exports
description: Packaging constraint for serving the Vite site from Apache in WAMP.
---

Static WAMP exports must use the exact URL prefix where Apache serves the site. The current WAMP package targets the document root (`/`) and must preserve the root-level `assets` directory. Apache rules in the package need module guards because unsupported `.htaccess` directives can turn normal CSS and JavaScript requests into HTTP 500 failures.

**Why:** A browser error against hashed CSS or JavaScript files can be caused by the Apache rewrite layer rather than by a missing frontend dependency.

**How to apply:** Build with `BASE_PATH=/` for the WAMP document root or `/aztech/` only when hosting inside that subfolder. Retain every generated asset and guard optional Apache directives with `IfModule`.
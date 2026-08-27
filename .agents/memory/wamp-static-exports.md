---
name: WAMP static exports
description: Packaging constraint for serving the Vite site from Apache in WAMP.
---

The static WAMP download is built for the `/aztech/` URL prefix and must preserve the `aztech/assets` directory layout. Apache rules in the package need module guards because unsupported `.htaccess` directives can turn normal CSS and JavaScript requests into HTTP 500 failures.

**Why:** A browser error against hashed CSS or JavaScript files can be caused by the Apache rewrite layer rather than by a missing frontend dependency.

**How to apply:** Package the top-level `aztech` directory for direct extraction into the WAMP `www` folder, retain every generated asset, and guard optional Apache directives with `IfModule`.
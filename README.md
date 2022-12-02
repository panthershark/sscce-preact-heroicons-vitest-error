# Preact Heroicons Vitest SSCCE

This is an [SSCCE](http://sscce.org/) showing how the preact-horeicons library doesn't play well with vitest.

# How do I make this thing fail?

Just run `npm install`, then `npm test`. You should see this error:

```
Error: Failed to resolve entry for package "preact-heroicons". The package may have incorrect main/module/exports specified in its package.json.
```

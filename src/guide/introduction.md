# Overview

## What is fCanvas?

fCanvas is a powerful 2d canvas library that allows minimal rendering and provides diverse shapes.

fCanvas allows for high performance animations, transitions, button nesting, layering, filtering,
caching, event handling for desktop and mobile apps, and more.

You can draw things to the stage, add event handlers to them, move them,
scale and rotate them independently of other shapes for support
high performance animation, even if your application uses thousands of shapes.

This project is an attempt at rewriting [KonvaJS](https://github.com/konvajs/konva) which allows for minimal reduction f useless APIs and increased performance reduction in redrawing.

## Why select fCanvas?
- `fCanvas` removes dozens or even hundreds of redundant APIs of libraries like [Konva.js](https://konvajs.org/docs/overview.html) and [Fabric.js](http: //fabricjs.com/) reduces packet size to around 80kB and only 60kB when used with [vue](https://vuejs.org)
- it allows the most advanced tree-shaking support for extremely small package sizes
- Optimized tactics and strong reactions. **It automatically stops the redraw when nothing has changed this is the latest compared to [Konva.js](https://konvajs.org/docs/overview.html) and [Fabric.js](http://fabricjs.com/)**

## Install fCanvas

If you are using package managers:

```bash:no-line-numbers
pnpm add fcanvas
```

Or just use script tag:

```html
<script src="https://unpkg.com/fcanvas@1/dist/index.browser.min.global.js"></script>
```

Or use module EMCA:

```js
import { Stage } from "https://unpkg.com/fcanvas@1"
```

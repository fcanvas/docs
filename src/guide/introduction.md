# Overview

## What is fCanvas?

fCanvas is a powerful 2d canvas library that allows minimal rendering and provides diverse shapes.

fCanvas allows for high performance animations, transitions, button nesting, layering, filtering,
caching, event handling for desktop and mobile apps, and more.

You can draw things to the stage, add event handlers to them, move them,
scale and rotate them independently of other shapes for support
high performance animation, even if your application uses thousands of shapes.

This project is an attempt at rewriting [KonvaJS](https://github.com/konvajs/konva) which allows for minimal reduction of useless APIs and increased performance reduction in redrawing.

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
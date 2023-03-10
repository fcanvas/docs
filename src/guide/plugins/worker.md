# @fcanvas/worker

The plugin provides support for using `fCanvas` in `WebWorker`

> This plugin needs to be integrated into both `mainstream` and `Worker`

> If you just need simple operation and don't need to redraw many times directly or manipulate events you don't need this plugin

View source code at: https://github.com/fcanvas/fcanvas

## Install

```bash:no-line-numbers
pnpm add fcanvas @fcanvas/worker
```

## Usage

To use the power of `WebWorker` with fCanvas you first need to create a `Stage` on the main thread to `receive` signals from `Worker`:

then you just create another `Stage` in `Worker` and send it to `thread` and use `fCanvas` as usual:
::: code-group

```ts [main.ts]
import Worker from "./worker?worker"

import { portToWorker } from "@fcanvas/worker"

const worker = new Worker()

const stage = new Stage().mount("#app")
portToWorker(worker, stage)
```

```ts [worker.ts]
import {
  Circle,
  computed,
  Layer,
  Stage,
  useMouseIsPressed,
  useMousePos
} from "fcanvas"

import { portToThread } from "@fcanvas/worker"

const stage = new Stage()

const layer = new Layer()
stage.add(layer)

const pos = useMousePos(layer)
const mouseIsPressed = useMouseIsPressed(layer)

const circle = new Circle({
  x: computed(() => pos.mouseX),
  y: computed(() => pos.mouseY),
  radius: 50,
  stroke: "#fff",
  fill: computed(() => (mouseIsPressed.value ? "red" : "green"))
})
layer.add(circle)

portToThread(stage)
```

:::

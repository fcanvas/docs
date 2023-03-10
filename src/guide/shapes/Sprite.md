# Sprite Shape

:::tip
This class is a descendant of [Shape](/guide/essentials/Shape) it also inherits all the options that [Shape](/guide/essentials/Shape) provides.
:::
:::tip
This component also supports a return function
:::

To create a sprite with `fcanvas`, we can instantiate a `Sprite` object.

In addition, this shape also provides a few other parameters:

## Require Options

| Name       | Type                                                    | Description                                                                          |
| ---------- | ------------------------------------------------------- | ------------------------------------------------------------------------------------ |
| image      | `MayBeRef<CanvasImageSource \| string>`                 | This parameter accepts the same data type as `image` of [Image](/guide/shapes/Image) |
| animations | `MayBeRef<Record<string, AnimationFrames \| number[]>>` | animation map                                                                        |
| animation  | `MayBeRef<keyof animations>`                            | animation key                                                                        |

### Inherit [Shape](/guide/essentials/Shape)

| Name | Type               | Description |
| ---- | ------------------ | ----------- |
| x    | `MayBeRef<number>` | offset x    |
| y    | `MayBeRef<number>` | offset y    |

```ts
interface AnimationFrames {
  frames: number[]
  frameIndex?: number
  frameRate?: number
}
```

## Optional Options

| Name       | Type                | Default                                                                              | Description                                                                                                                                   |
| ---------- | ------------------- | ------------------------------------------------------------------------------------ | --------------------------------------------------------------------------------------------------------------------------------------------- |
| width      | `MayBeRef<number>`  | auto                                                                                 | width that the image displays. this will be disabled if `height` does not exist                                                               |
| height     | `MayBeRef<number>`  | auto height that the image displays. this will be disabled if `width` does not exist |
| frameIndex | `MayBeRef<number>`  | 0                                                                                    | Animation frame index                                                                                                                         |
| frameRate  | `MayBeRef<boolean>` | 17                                                                                   | Animation frame rate                                                                                                                          |
| infinite   | `MayBeRef<boolean>` | true                                                                                 | Animation will repeat right after the end                                                                                                     |
| fixedSize  | `MayBeRef<boolean>` | true                                                                                 | set a fixed size for this element. if `=false` it will continuously resize to fit the frame. this reduces the performance of removable memory |

## Demo

:::preview

```ts
import { Stage, Layer, Sprite, watch, loadImage } from "fcanvas"

const stage = new Stage({ height: 300 }).mount("#app")
const layer = new Layer().addTo(stage)

const animations = {
  idle: [
    // x, y, width, height (4 frames)
    2, 2, 70, 119, 71, 2, 74, 119, 146, 2, 81, 119, 226, 2, 76, 119
  ],
  punch: [
    // x, y, width, height (4 frames)
    2, 138, 74, 122, 76, 138, 84, 122, 346, 138, 120, 122
  ]
}

const blob = new Sprite({
  x: 0,
  y: 0,
  image: await loadImage("https://konvajs.org/assets/blob-sprite.png"),
  animation: "idle",
  animations,
  frameRate: 7,
  frameIndex: 0
})
// add the shape to the layer
layer.add(blob)
// add the layer to the stage
stage.add(layer)
// start sprite animation
blob.start()

window.addEventListener("click", () => {
  blob.animation = "punch"
  const watcher = watch(blob.currentFrameIndex, (index) => {
    if (index === 2) {
      setTimeout(() => {
        watcher()
        blob.$.animation = "idle"
      }, 1000 / 7)
    }
  })
})
```

:::

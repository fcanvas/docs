# Label Shape

:::tip
This class is a descendant of [Group](/guide/essentials/Group) it also inherits all the options that [Group](/guide/essentials/Group) provides.
:::
:::tip
This component also supports a return function
:::

To create a text label with `fcanvas`, which can be used for creating text with backgrounds, simple tooltips, or tooltips with pointers, we can instantiate a `Label` object.

## Require Options

- [Tag](/guide/shapes/Tag)
- [Text](/guide/shapes/Text)

## Demo

:::preview

```ts
import { Stage, Layer, Ellipse, Label, Tag, Text } from "fcanvas"

const stage = new Stage({ height: 300 }).mount("#app")
const layer = new Layer().addTo(stage)

const tooltip = new Label({
  x: 170,
  y: 75,
  opacity: 0.75
}).addTo(layer)

new Tag({
  x: 0,
  y: 0,
  fill: "black",
  pointerDirection: "down",
  pointerWidth: 10,
  pointerHeight: 10,
  lineJoin: "round",
  shadow: {
    x: 10,
    y: 10,
    blur: 10,
    color: "red"
  }
}).addTo(tooltip)
new Text({
  x: 0,
  y: 0,
  text: "Tooltip pointing down",
  fontSize: 18,
  padding: 5,
  fill: "white"
}).addTo(tooltip)

// label with left pointer
const labelLeft = new Label({
  x: 20,
  y: 130,
  opacity: 0.75
})

new Tag({
  x: 0,
  y: 0,
  fill: "green",
  pointerDirection: "left",
  pointerWidth: 20,
  pointerHeight: 28,
  lineJoin: "round"
}).addTo(labelLeft)
new Text({
  x: 0,
  y: 0,
  text: "Label pointing left",
  fontFamily: "Calibri",
  fontSize: 18,
  padding: 5,
  fill: "white"
}).addTo(labelLeft)

// simple label
const simpleLabel = new Label({
  x: 180,
  y: 150,
  opacity: 0.75
})

new Tag({
  x: 0,
  y: 0,
  fill: "yellow"
}).addTo(simpleLabel)
new Text({
  x: 0,
  y: 0,
  text: "Simple label",
  fontFamily: "Calibri",
  fontSize: 18,
  padding: 5,
  fill: "black"
}).addTo(simpleLabel)

// add the labels to layer
layer.add(tooltip)
layer.add(labelLeft)
layer.add(simpleLabel)
```

:::

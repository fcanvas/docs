# useMousePos

Reactive mouse position

## Usage

```ts
import { useMousePos, toRefs } from "fcanvas"

const { x, y, winX, winY } = toRefs(useMousePos(layer))
```

## Type Declarations

```typescript
interface MousePos {
  mouseX: 0
  mouseY: 0
  winMouseX: 0
  winMouseY: 0
  isTouch: false
  id: number
}
export function useMousePos(
  instance: ElAddEventListener = getCurrentShape()
): MousePos
```

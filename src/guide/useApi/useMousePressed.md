# useMousePressed
Reactive mouse pressing state. Triggered by `mousedown`, `touchstart` on target element and released by `mouseup` `mouseleave` `touchend` `touchcancel`

## Usage
```ts
import { useMousePressed } from 'fcanvas'

const pressed = useMousePressed(layer)
```

## Type Declarations
```typescript
export function useMousePressed(instance: ElAddEventListener = getCurrentShape()): Ref<boolean>
```
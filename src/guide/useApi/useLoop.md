# useLoop
Wrapper for `requestAnimationFrame` with controls

## Usage
```ts
import { useLoop } from 'fcanvas'

const stop = useLoop((stop) => {
  /* your function */
})
```

## Type Declarations
```typescript

// eslint-disable-next-line functional/no-mixed-type
interface Looper {
  (): void
  stopped: boolean
}

export function useLoop(fn: (stop: () => void) => void): Looper
```
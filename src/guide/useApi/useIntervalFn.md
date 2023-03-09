# useIntervalFN
Wrapper for setInterval with controls

## Usage
```ts
import { useIntervalFn } from 'fcanvs'

const { pause, resume, isActive } = useIntervalFn(() => {
  /* your function */
}, 1000)
```

## Type Declarations
```typescript
export interface UseIntervalFnOptions {
  /**
   * Start the timer immediately
   *
   * @default true
   */
  immediate?: boolean
  /**
   * Execute the callback immediate after calling this function
   *
   * @default false
   */
  immediateCallback?: boolean
}
/**
 * Wrapper for `setInterval` with controls
 *
 * @param cb
 * @param interval
 * @param options
 */
export declare function useIntervalFn(
  cb: Fn,
  interval?: MaybeComputedRef<number>,
  options?: UseIntervalFnOptions
): Pausable
```
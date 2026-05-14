[**@xgsd/workers**](../README.md)

***

[@xgsd/workers](../globals.md) / createTransport

# Function: createTransport()

> **createTransport**\<`Mode`\>(`opts`): [`ActivationHandler`](../type-aliases/ActivationHandler.md)\<`Mode`\>

Defined in: [index.ts:388](https://github.com/Isolated-/xgsd-workers/blob/a748118556084352a015235e3506b18bf1c36f1b/src/index.ts#L388)

Creates a reusable worker transport.

`createTransport()` is the primary public API exposed by
`@xgsd/workers`.

A transport is responsible for:

- loading a worker entry file
- creating activation contexts
- executing middleware + worker pipelines
- producing WorkerResult responses
- dispatching runtime signals/logs

The returned handler can be invoked multiple times with different
activation payloads.

---

## Worker model

Workers are designed for ESM environments and should export a
default function.

Example:

```js
export default async function (data) {
  return {
    hello: data.name,
  }
}
```

---

## Activation lifecycle

Each call to the returned handler creates a fresh activation context.

The activation context contains:

- activation data
- environment variables
- middleware state
- execution metadata
- worker result/error state

Middleware may freely mutate the activation context during execution.

Only `ctx.result` and `ctx.error` are considered transport output.

---

## Serialisation

Worker results should contain serialisable data.

Complex objects may lose prototype information during transport.

Non-serialisable values (such as circular references, functions,
streams, sockets, etc.) may cause the activation to fail with
`CODE_INVALID_DATA`.

---

## Signals

Workers emit runtime signals during execution.

Signals may include:

- activation lifecycle events
- logs
- errors
- system/runtime messages

Signals are written to the configured stream.

---

## Example

```ts
import {createTransport} from '@xgsd/workers'

const transport = createTransport({
  entry: './worker.js',
})

const result = await transport({
  data: {
    name: 'world',
  },
})

console.log(result)
```

---

## Output modes

Wrapped mode (default):

```json
{
  "version": "v1",
  "ok": true,
  "result": {},
  "error": null
}
```

Raw mode:

```ts
createTransport({
  output: {
    mode: 'raw'
  }
})
```

Returns the worker result directly.

---

## Type Parameters

### Mode

`Mode` *extends* [`WorkerOutputMode`](../type-aliases/WorkerOutputMode.md) = `"wrapped"`

## Parameters

### opts

[`CreateTransportOpts`](../type-aliases/CreateTransportOpts.md)\<`Mode`\>

## Returns

[`ActivationHandler`](../type-aliases/ActivationHandler.md)\<`Mode`\>

## Since

v1

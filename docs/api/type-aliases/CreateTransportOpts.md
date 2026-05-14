[**@xgsd/workers**](../README.md)

***

[@xgsd/workers](../globals.md) / CreateTransportOpts

# Type Alias: CreateTransportOpts\<Mode\>

> **CreateTransportOpts**\<`Mode`\> = `object`

Defined in: [index.ts:197](https://github.com/Isolated-/xgsd-workers/blob/a748118556084352a015235e3506b18bf1c36f1b/src/index.ts#L197)

Configuration options for `createTransport()`.

`CreateTransportOpts` controls how Workers.js loads, executes,
and manages worker activations.

---

## Entry

`entry` is the path to the worker entry file.

Workers should export a default async function:

```js
export default async function worker(data) {
  return data
}
```

Entry paths are resolved before worker execution begins.

---

## Streams

`stream` is used to receive runtime signals emitted by Workers.js.

Signals may include:

- lifecycle events
- logs
- runtime/system messages
- structured errors

Streams only need to implement:

```ts
{
  write(chunk): boolean
}
```

Example:

```ts
createTransport({
  entry: './worker.js',
  stream: process.stdout,
})
```

---

## Environment variables

`env` provides default activation environment variables.

These values override any activation values.

Example:

```ts
createTransport({
  entry: './worker.js',
  env: {
    region: 'eu-west-1',
  },
})
```

---

## Limits

`limits` configures runtime resource constraints.

Limits are enforced per worker activation.

Supported limits:

- `ttl` → maximum activation runtime in milliseconds
- `memory` → maximum worker memory usage

Example:

```ts
createTransport({
  entry: './worker.js',
  limits: {
    ttl: 5000,
    memory: 128,
  },
})
```

---

## Output modes

Workers.js supports two output modes:

### Wrapped mode (default)

Returns a structured `WorkerResult` response:

```json
{
  "version": "v1",
  "ok": true,
  "result": {},
  "error": null
}
```

### Raw mode

Returns the worker result directly:

```ts
createTransport({
  output: {
    mode: 'raw',
  },
})
```

Raw mode is useful when Workers.js is being integrated into
existing transports, queues, or RPC systems.

---

## Since

v1

## Type Parameters

### Mode

`Mode` *extends* [`WorkerOutputMode`](WorkerOutputMode.md) = `"wrapped"`

## Properties

### entry

> **entry**: `string`

Defined in: [index.ts:201](https://github.com/Isolated-/xgsd-workers/blob/a748118556084352a015235e3506b18bf1c36f1b/src/index.ts#L201)

Path to the worker entry file.

***

### env?

> `optional` **env?**: `Record`\<`string`, `unknown`\>

Defined in: [index.ts:211](https://github.com/Isolated-/xgsd-workers/blob/a748118556084352a015235e3506b18bf1c36f1b/src/index.ts#L211)

Default activation environment variables.

***

### limits?

> `optional` **limits?**: `object`

Defined in: [index.ts:216](https://github.com/Isolated-/xgsd-workers/blob/a748118556084352a015235e3506b18bf1c36f1b/src/index.ts#L216)

Runtime execution limits.

#### Index Signature

\[`key`: `string`\]: `unknown`

#### memory?

> `optional` **memory?**: `MemoryType`

Maximum worker memory usage.

#### onError?

> `optional` **onError?**: `GuardErrorBehaviour`

added in v1.0.3
 when worker guard is triggered promise will be rejected vs resolved

#### ttl?

> `optional` **ttl?**: `number`

Maximum activation runtime in milliseconds.

***

### output?

> `optional` **output?**: `object`

Defined in: [index.ts:239](https://github.com/Isolated-/xgsd-workers/blob/a748118556084352a015235e3506b18bf1c36f1b/src/index.ts#L239)

Worker output configuration.

#### Index Signature

\[`key`: `string`\]: `unknown`

#### mode?

> `optional` **mode?**: `Mode`

Output mode.

- `wrapped` → structured WorkerResult response
- `raw` → returns worker result/error directly

#### onError?

> `optional` **onError?**: `ErrorBehaviour`

added in v1.0.3
 determines what to when data can't be serialised

***

### stream?

> `optional` **stream?**: [`StreamLike`](StreamLike.md)

Defined in: [index.ts:206](https://github.com/Isolated-/xgsd-workers/blob/a748118556084352a015235e3506b18bf1c36f1b/src/index.ts#L206)

Writable stream used for runtime signals/logs.

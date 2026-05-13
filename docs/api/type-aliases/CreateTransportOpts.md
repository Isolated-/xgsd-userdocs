[**@xgsd/workers**](../README.md)

---

[@xgsd/workers](../globals.md) / CreateTransportOpts

# Type Alias: CreateTransportOpts\<Mode\>

> **CreateTransportOpts**\<`Mode`\> = `object`

Defined in: [index.ts:148](https://github.com/Isolated-/xgsd-workers/blob/ffaa37d2bc13390dde2e75b8a76cd89706066dc5/src/index.ts#L148)

Configuration options for `createTransport()`.

`CreateTransportOpts` controls how Workers.js loads, executes,
and manages worker activations.

---

## Entry

`entry` is the path to the worker entry file.

Workers should export a default async function:

```js
export default async function worker(data) {
  return data;
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
  entry: "./worker.js",
  stream: process.stdout,
});
```

---

## Environment variables

`env` provides default activation environment variables.

These values override any activation values.

Example:

```ts
createTransport({
  entry: "./worker.js",
  env: {
    region: "eu-west-1",
  },
});
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
  entry: "./worker.js",
  limits: {
    ttl: 5000,
    memory: 128,
  },
});
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
    mode: "raw",
  },
});
```

Raw mode is useful when Workers.js is being integrated into
existing transports, queues, or RPC systems.

---

## Since

v1

## Type Parameters

### Mode

`Mode` _extends_ `WorkerOutputMode` = `"wrapped"`

## Properties

### entry

> **entry**: `string`

Defined in: [index.ts:152](https://github.com/Isolated-/xgsd-workers/blob/ffaa37d2bc13390dde2e75b8a76cd89706066dc5/src/index.ts#L152)

Path to the worker entry file.

---

### env?

> `optional` **env?**: `Record`\<`string`, `unknown`\>

Defined in: [index.ts:162](https://github.com/Isolated-/xgsd-workers/blob/ffaa37d2bc13390dde2e75b8a76cd89706066dc5/src/index.ts#L162)

Default activation environment variables.

---

### limits?

> `optional` **limits?**: `object`

Defined in: [index.ts:167](https://github.com/Isolated-/xgsd-workers/blob/ffaa37d2bc13390dde2e75b8a76cd89706066dc5/src/index.ts#L167)

Runtime execution limits.

#### Index Signature

\[`key`: `string`\]: `MemoryType` \| `undefined`

#### memory?

> `optional` **memory?**: `MemoryType`

Maximum worker memory usage.

#### ttl?

> `optional` **ttl?**: `number`

Maximum activation runtime in milliseconds.

---

### output?

> `optional` **output?**: `object`

Defined in: [index.ts:184](https://github.com/Isolated-/xgsd-workers/blob/ffaa37d2bc13390dde2e75b8a76cd89706066dc5/src/index.ts#L184)

Worker output configuration.

#### mode?

> `optional` **mode?**: `Mode`

Output mode.

- `wrapped` → structured WorkerResult response
- `raw` → returns worker result/error directly

---

### stream?

> `optional` **stream?**: [`StreamLike`](StreamLike.md)

Defined in: [index.ts:157](https://github.com/Isolated-/xgsd-workers/blob/ffaa37d2bc13390dde2e75b8a76cd89706066dc5/src/index.ts#L157)

Writable stream used for runtime signals/logs.

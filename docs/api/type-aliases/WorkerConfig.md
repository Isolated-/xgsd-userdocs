[**@xgsd/workers**](../README.md)

***

[@xgsd/workers](../globals.md) / WorkerConfig

# Type Alias: WorkerConfig

> **WorkerConfig** = `object`

Defined in: [core/types.ts:56](https://github.com/Isolated-/xgsd-workers/blob/ea4cc8ec85b211048bcfb1a1c34e805794fe9184/src/core/types.ts#L56)

WORKER CONFIG TYPES

## Properties

### bundler?

> `optional` **bundler?**: `object`

Defined in: [core/types.ts:59](https://github.com/Isolated-/xgsd-workers/blob/ea4cc8ec85b211048bcfb1a1c34e805794fe9184/src/core/types.ts#L59)

#### cache?

> `optional` **cache?**: [`WorkerConfigCache`](WorkerConfigCache.md)

#### enabled?

> `optional` **enabled?**: `boolean`

***

### dist?

> `optional` **dist?**: `string`

Defined in: [core/types.ts:58](https://github.com/Isolated-/xgsd-workers/blob/ea4cc8ec85b211048bcfb1a1c34e805794fe9184/src/core/types.ts#L58)

***

### entry

> **entry**: `string`

Defined in: [core/types.ts:57](https://github.com/Isolated-/xgsd-workers/blob/ea4cc8ec85b211048bcfb1a1c34e805794fe9184/src/core/types.ts#L57)

***

### http?

> `optional` **http?**: `object`

Defined in: [core/types.ts:63](https://github.com/Isolated-/xgsd-workers/blob/ea4cc8ec85b211048bcfb1a1c34e805794fe9184/src/core/types.ts#L63)

#### cache?

> `optional` **cache?**: [`WorkerConfigCache`](WorkerConfigCache.md)

***

### limits?

> `optional` **limits?**: `object`

Defined in: [core/types.ts:66](https://github.com/Isolated-/xgsd-workers/blob/ea4cc8ec85b211048bcfb1a1c34e805794fe9184/src/core/types.ts#L66)

#### memory?

> `optional` **memory?**: `number`

#### ttl?

> `optional` **ttl?**: `number`

***

### output?

> `optional` **output?**: `object`

Defined in: [core/types.ts:70](https://github.com/Isolated-/xgsd-workers/blob/ea4cc8ec85b211048bcfb1a1c34e805794fe9184/src/core/types.ts#L70)

#### mode?

> `optional` **mode?**: `"raw"` \| `"wrapped"` \| `"auto"`

[**@xgsd/workers**](../README.md)

***

[@xgsd/workers](../globals.md) / WorkerConfig

# Type Alias: WorkerConfig

> **WorkerConfig** = `object`

Defined in: [core/types.ts:56](https://github.com/Isolated-/xgsd-workers/blob/f804e52aec360064da6e930f8acb6381f7f3c3a4/src/core/types.ts#L56)

WORKER CONFIG TYPES

## Properties

### bundler?

> `optional` **bundler?**: `object`

Defined in: [core/types.ts:59](https://github.com/Isolated-/xgsd-workers/blob/f804e52aec360064da6e930f8acb6381f7f3c3a4/src/core/types.ts#L59)

#### cache?

> `optional` **cache?**: [`WorkerConfigCache`](WorkerConfigCache.md)

#### enabled?

> `optional` **enabled?**: `boolean`

#### exclude?

> `optional` **exclude?**: `string`[]

#### extensions?

> `optional` **extensions?**: `string`[]

#### include?

> `optional` **include?**: `string`[]

***

### dist?

> `optional` **dist?**: `string`

Defined in: [core/types.ts:58](https://github.com/Isolated-/xgsd-workers/blob/f804e52aec360064da6e930f8acb6381f7f3c3a4/src/core/types.ts#L58)

***

### entry

> **entry**: `string`

Defined in: [core/types.ts:57](https://github.com/Isolated-/xgsd-workers/blob/f804e52aec360064da6e930f8acb6381f7f3c3a4/src/core/types.ts#L57)

***

### http?

> `optional` **http?**: `object`

Defined in: [core/types.ts:66](https://github.com/Isolated-/xgsd-workers/blob/f804e52aec360064da6e930f8acb6381f7f3c3a4/src/core/types.ts#L66)

#### cache?

> `optional` **cache?**: [`WorkerConfigCache`](WorkerConfigCache.md)

***

### limits?

> `optional` **limits?**: `object`

Defined in: [core/types.ts:69](https://github.com/Isolated-/xgsd-workers/blob/f804e52aec360064da6e930f8acb6381f7f3c3a4/src/core/types.ts#L69)

#### memory?

> `optional` **memory?**: `number`

#### ttl?

> `optional` **ttl?**: `number`

***

### output?

> `optional` **output?**: `object`

Defined in: [core/types.ts:73](https://github.com/Isolated-/xgsd-workers/blob/f804e52aec360064da6e930f8acb6381f7f3c3a4/src/core/types.ts#L73)

#### mode?

> `optional` **mode?**: `"raw"` \| `"wrapped"` \| `"auto"`

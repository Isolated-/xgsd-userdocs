[**@xgsd/workers**](../README.md)

***

[@xgsd/workers](../globals.md) / Context

# Type Alias: Context\<T, E\>

> **Context**\<`T`, `E`\> = `object`

Defined in: [core/types.ts:85](https://github.com/Isolated-/xgsd-workers/blob/a748118556084352a015235e3506b18bf1c36f1b/src/core/types.ts#L85)

## Type Parameters

### T

`T` = `unknown`

### E

`E` = `any`

## Properties

### data

> **data**: `T` \| `null`

Defined in: [core/types.ts:87](https://github.com/Isolated-/xgsd-workers/blob/a748118556084352a015235e3506b18bf1c36f1b/src/core/types.ts#L87)

***

### env

> **env**: `Record`\<`string`, `any`\> \| `null`

Defined in: [core/types.ts:88](https://github.com/Isolated-/xgsd-workers/blob/a748118556084352a015235e3506b18bf1c36f1b/src/core/types.ts#L88)

***

### error?

> `optional` **error?**: `E` \| `null`

Defined in: [core/types.ts:92](https://github.com/Isolated-/xgsd-workers/blob/a748118556084352a015235e3506b18bf1c36f1b/src/core/types.ts#L92)

***

### execute?

> `optional` **execute?**: (`fn`) => `Promise`\<`any`\>

Defined in: [core/types.ts:90](https://github.com/Isolated-/xgsd-workers/blob/a748118556084352a015235e3506b18bf1c36f1b/src/core/types.ts#L90)

#### Parameters

##### fn

`RunFn`\<`T`\>

#### Returns

`Promise`\<`any`\>

***

### id

> **id**: `string`

Defined in: [core/types.ts:86](https://github.com/Isolated-/xgsd-workers/blob/a748118556084352a015235e3506b18bf1c36f1b/src/core/types.ts#L86)

***

### meta

> **meta**: [`ContextMetadata`](ContextMetadata.md)

Defined in: [core/types.ts:94](https://github.com/Isolated-/xgsd-workers/blob/a748118556084352a015235e3506b18bf1c36f1b/src/core/types.ts#L94)

***

### result?

> `optional` **result?**: `T` \| `null`

Defined in: [core/types.ts:91](https://github.com/Isolated-/xgsd-workers/blob/a748118556084352a015235e3506b18bf1c36f1b/src/core/types.ts#L91)

***

### state?

> `optional` **state?**: `Record`\<`string`, `any`\>

Defined in: [core/types.ts:93](https://github.com/Isolated-/xgsd-workers/blob/a748118556084352a015235e3506b18bf1c36f1b/src/core/types.ts#L93)

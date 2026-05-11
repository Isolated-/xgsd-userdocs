[**@xgsd/workers**](../README.md)

***

[@xgsd/workers](../globals.md) / WorkerResult

# Type Alias: WorkerResult\<T\>

> **WorkerResult**\<`T`\> = \{ `code?`: `number`; `duration`: `number`; `error`: `null`; `ok`: `true`; `result`: `T`; `version`: `"v1"`; \} \| \{ `code?`: `number`; `duration`: `number`; `error`: [`WorkerError`](WorkerError.md); `ok`: `false`; `result`: `null`; `version`: `"v1"`; \}

Defined in: [core/types.ts:34](https://github.com/Isolated-/xgsd-workers/blob/ea4cc8ec85b211048bcfb1a1c34e805794fe9184/src/core/types.ts#L34)

WORKER RESULT TYPES

## Type Parameters

### T

`T`

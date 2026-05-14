[**@xgsd/workers**](../README.md)

***

[@xgsd/workers](../globals.md) / WorkerResult

# Type Alias: WorkerResult\<T\>

> **WorkerResult**\<`T`\> = \{ `code?`: `number`; `duration`: `number`; `error`: `null`; `ok`: `true`; `result`: `T`; `version`: `"v1"`; \} \| \{ `code?`: `number`; `duration`: `number`; `error`: [`WorkerError`](WorkerError.md); `ok`: `false`; `result`: `null`; `version`: `"v1"`; \}

Defined in: [core/types.ts:9](https://github.com/Isolated-/xgsd-workers/blob/a748118556084352a015235e3506b18bf1c36f1b/src/core/types.ts#L9)

WORKER RESULT TYPES

## Type Parameters

### T

`T`

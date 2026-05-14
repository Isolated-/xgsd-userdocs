[**@xgsd/workers**](../README.md)

***

[@xgsd/workers](../globals.md) / ActivationHandler

# Type Alias: ActivationHandler\<Mode\>

> **ActivationHandler**\<`Mode`\> = \<`T`\>(`activation?`) => `Promise`\<`TransportResult`\<`Mode`, `T`\>\>

Defined in: [core/types.ts:109](https://github.com/Isolated-/xgsd-workers/blob/a748118556084352a015235e3506b18bf1c36f1b/src/core/types.ts#L109)

## Type Parameters

### Mode

`Mode` *extends* [`WorkerOutputMode`](WorkerOutputMode.md) = `"wrapped"`

## Type Parameters

### T

`T` = `any`

## Parameters

### activation?

[`Activation`](Activation.md)\<`T`\>

## Returns

`Promise`\<`TransportResult`\<`Mode`, `T`\>\>

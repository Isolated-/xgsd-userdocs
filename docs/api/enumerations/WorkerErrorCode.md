[**@xgsd/workers**](../README.md)

***

[@xgsd/workers](../globals.md) / WorkerErrorCode

# Enumeration: WorkerErrorCode

Defined in: [types/error.types.ts:12](https://github.com/Isolated-/xgsd-workers/blob/9a86de86e0299b7a6300fb874405fc956e309734/src/types/error.types.ts#L12)

Error codes used across the worker/runtime boundary.

These codes are **serialisable** and are used to classify failures
in a consistent way across processes, streams, and transport layers.

They are intended for:
- Cross-process error handling
- Structured logging / observability
- Debugging runtime failures

## Enumeration Members

### CODE\_FATAL\_ERROR

> **CODE\_FATAL\_ERROR**: `"CODE_FATAL_ERROR"`

Defined in: [types/error.types.ts:32](https://github.com/Isolated-/xgsd-workers/blob/9a86de86e0299b7a6300fb874405fc956e309734/src/types/error.types.ts#L32)

## Fatal Error

A **non-recoverable** internal runtime error.

Execution cannot safely continue after this is thrown.

***

### CODE\_INVALID\_CONFIG

> **CODE\_INVALID\_CONFIG**: `"CODE_INVALID_CONFIG"`

Defined in: [types/error.types.ts:44](https://github.com/Isolated-/xgsd-workers/blob/9a86de86e0299b7a6300fb874405fc956e309734/src/types/error.types.ts#L44)

## Invalid Configuration

Configuration provided to the worker is invalid or malformed.

### Examples:
- Missing required fields
- Invalid schema shape
- Unsupported configuration values

***

### CODE\_INVALID\_DATA

> **CODE\_INVALID\_DATA**: `"CODE_INVALID_DATA"`

Defined in: [types/error.types.ts:96](https://github.com/Isolated-/xgsd-workers/blob/9a86de86e0299b7a6300fb874405fc956e309734/src/types/error.types.ts#L96)

## Invalid Data

Data cannot be safely serialised for transport.

### Common causes:
- Circular references
- Non-serialisable values (e.g. `BigInt`, functions)
- Structured clone incompatibility

***

### CODE\_INVALID\_DEFAULT\_FUNCTION

> **CODE\_INVALID\_DEFAULT\_FUNCTION**: `"CODE_INVALID_DEFAULT_FUNCTION"`

Defined in: [types/error.types.ts:73](https://github.com/Isolated-/xgsd-workers/blob/9a86de86e0299b7a6300fb874405fc956e309734/src/types/error.types.ts#L73)

## Invalid Default Export

The module `default` export is not a function.

### Expected:
```ts
export default () => {}
```

### Invalid examples:
- Object export
- `null` or `undefined`
- Primitive values

***

### CODE\_INVALID\_ENTRY\_FILE

> **CODE\_INVALID\_ENTRY\_FILE**: `"CODE_INVALID_ENTRY_FILE"`

Defined in: [types/error.types.ts:56](https://github.com/Isolated-/xgsd-workers/blob/9a86de86e0299b7a6300fb874405fc956e309734/src/types/error.types.ts#L56)

## Invalid Entry File

The entry file cannot be resolved, loaded, or parsed.

### Common causes:
- File does not exist
- Syntax error in module
- Unsupported module format (CJS/ESM mismatch)

***

### CODE\_INVALID\_MIDDLEWARE\_FUNCTION

> **CODE\_INVALID\_MIDDLEWARE\_FUNCTION**: `"CODE_INVALID_MIDDLEWARE_FUNCTION"`

Defined in: [types/error.types.ts:84](https://github.com/Isolated-/xgsd-workers/blob/9a86de86e0299b7a6300fb874405fc956e309734/src/types/error.types.ts#L84)

## Invalid Middleware Function

Middleware provided is not a valid function.

### Causes:
- Non-callable middleware
- Incorrect plugin shape

***

### CODE\_WORKER\_GUARD

> **CODE\_WORKER\_GUARD**: `"CODE_WORKER_GUARD"`

Defined in: [types/error.types.ts:23](https://github.com/Isolated-/xgsd-workers/blob/9a86de86e0299b7a6300fb874405fc956e309734/src/types/error.types.ts#L23)

## Guard Violation

Thrown when execution safety limits are exceeded.

### Typical causes:
- TTL (time-to-live) exceeded
- Memory limit breached
- Runtime guard rails triggered

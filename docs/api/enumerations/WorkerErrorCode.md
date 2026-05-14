[**@xgsd/workers**](../README.md)

***

[@xgsd/workers](../globals.md) / WorkerErrorCode

# Enumeration: WorkerErrorCode

Defined in: [types/error.types.ts:12](https://github.com/Isolated-/xgsd-workers/blob/a748118556084352a015235e3506b18bf1c36f1b/src/types/error.types.ts#L12)

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

Defined in: [types/error.types.ts:39](https://github.com/Isolated-/xgsd-workers/blob/a748118556084352a015235e3506b18bf1c36f1b/src/types/error.types.ts#L39)

## Fatal Error

A **non-recoverable** internal runtime error.

Execution cannot safely continue after this is thrown.

***

### CODE\_INVALID\_DATA

> **CODE\_INVALID\_DATA**: `"CODE_INVALID_DATA"`

Defined in: [types/error.types.ts:91](https://github.com/Isolated-/xgsd-workers/blob/a748118556084352a015235e3506b18bf1c36f1b/src/types/error.types.ts#L91)

## Invalid Data

Data cannot be safely serialised for transport.

### Common causes:
- Circular references
- Non-serialisable values (e.g. `BigInt`, functions)
- Structured clone incompatibility

***

### CODE\_INVALID\_DEFAULT\_FUNCTION

> **CODE\_INVALID\_DEFAULT\_FUNCTION**: `"CODE_INVALID_DEFAULT_FUNCTION"`

Defined in: [types/error.types.ts:68](https://github.com/Isolated-/xgsd-workers/blob/a748118556084352a015235e3506b18bf1c36f1b/src/types/error.types.ts#L68)

## Invalid Default Export

The module `default` export is not a function.

### Expected:
```ts
export default async (data) => {}
```

### Invalid examples:
- Object export
- `null` or `undefined`
- Primitive values

***

### CODE\_INVALID\_ENTRY\_FILE

> **CODE\_INVALID\_ENTRY\_FILE**: `"CODE_INVALID_ENTRY_FILE"`

Defined in: [types/error.types.ts:51](https://github.com/Isolated-/xgsd-workers/blob/a748118556084352a015235e3506b18bf1c36f1b/src/types/error.types.ts#L51)

## Invalid Entry File

The entry file cannot be resolved, loaded, or parsed.

### Common causes:
- File does not exist
- Syntax error in module
- Unsupported module format (CJS/ESM mismatch)

***

### CODE\_INVALID\_MIDDLEWARE\_FUNCTION

> **CODE\_INVALID\_MIDDLEWARE\_FUNCTION**: `"CODE_INVALID_MIDDLEWARE_FUNCTION"`

Defined in: [types/error.types.ts:79](https://github.com/Isolated-/xgsd-workers/blob/a748118556084352a015235e3506b18bf1c36f1b/src/types/error.types.ts#L79)

## Invalid Middleware Function

Middleware provided is not a valid function.

### Causes:
- Non-callable middleware
- Incorrect plugin shape

***

### CODE\_WORKER\_ABORTED

> **CODE\_WORKER\_ABORTED**: `"CODE_WORKER_ABORTED"`

Defined in: [types/error.types.ts:18](https://github.com/Isolated-/xgsd-workers/blob/a748118556084352a015235e3506b18bf1c36f1b/src/types/error.types.ts#L18)

## Worker aborted

Thrown when user forces process to exit (CTRL+C)

***

### CODE\_WORKER\_GUARD

> **CODE\_WORKER\_GUARD**: `"CODE_WORKER_GUARD"`

Defined in: [types/error.types.ts:30](https://github.com/Isolated-/xgsd-workers/blob/a748118556084352a015235e3506b18bf1c36f1b/src/types/error.types.ts#L30)

## Guard Violation

Thrown when execution safety limits are exceeded.

### Typical causes:
- TTL (time-to-live) exceeded
- Memory limit breached
- Runtime guard rails triggered

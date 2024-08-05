# 2620. Counter - Easy

This repository contains a solution to the counter function problem. The task is to implement a function that, given an integer `n`, returns another function (`counter()`). This `counter()` function, when called, initially returns `n` and subsequently returns a value incremented by 1 each time it is called.

## Problem Description

Given an integer `n`, return a counter function. This counter function initially returns `n` and then returns 1 more than the previous value every subsequent time it is called (`n`, `n + 1`, `n + 2`, etc).

### Examples

#### Example 1
- **Input**: `n = 10`, `["call","call","call"]`
- **Output**: `[10, 11, 12]`
- **Explanation**:
  - `counter()` = 10 // The first time `counter()` is called, it returns `n`.
  - `counter()` = 11 // Returns 1 more than the previous time.
  - `counter()` = 12 // Returns 1 more than the previous time.

#### Example 2
- **Input**: `n = -2`, `["call","call","call","call","call"]`
- **Output**: `[-2, -1, 0, 1, 2]`
- **Explanation**: `counter()` initially returns -2. Then increases by 1 after each subsequent call.

## Constraints
- `-1000 <= n <= 1000`
- `0 <= calls.length <= 1000`
- `calls[i] === "call"`

## Usage

To use the `counter()` function:

1. Initialize the counter with a starting value, `n`.
2. Call the returned function to get the next number in the sequence.

### Example Usage

```javascript
const startValue = 10;
const counter = createCounter(startValue);

console.log(counter()); // 10
console.log(counter()); // 11
console.log(counter()); // 12

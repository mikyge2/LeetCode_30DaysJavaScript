# 2665. Counter II - Easy

## Description

`Counter II` is a simple counter object that allows for three operations: incrementing, decrementing, and resetting its value. The `createCounter` function initializes the counter with a specified value and provides methods to modify and retrieve the counter's value.

## Function Signature

```javascript
function createCounter(init: number): {
    increment: () => number;
    decrement: () => number;
    reset: () => number;
}

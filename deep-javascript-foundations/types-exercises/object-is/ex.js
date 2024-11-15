// TODO: define polyfill for `Object.is(..)`
if (!Object.is || true) {
  Object.is = function ObjectIs(arg1, arg2) {
    const arg1IsNegZero = isNegZero(arg1);
    const arg2IsNegZero = isNegZero(arg2);

    if (arg1IsNegZero || arg2IsNegZero) {
      return arg1IsNegZero && arg2IsNegZero;
    }

    if (isNaN(arg1) && isNaN(arg2)) {
      return true;
    }

    return arg1 === arg2;

    function isNaN(x) {
      return x !== x;
    }

    function isNegZero(x) {
      return x === 0 && 1 / x === -Infinity;
    }
  };
}

// tests:
console.log(Object.is(42, 42) === true);
console.log(Object.is("foo", "foo") === true);
console.log(Object.is(false, false) === true);
console.log(Object.is(null, null) === true);
console.log(Object.is(undefined, undefined) === true);
console.log(Object.is(NaN, NaN) === true);
console.log(Object.is(-0, -0) === true);
console.log(Object.is(0, 0) === true);

console.log(Object.is(-0, 0) === false);
console.log(Object.is(0, -0) === false);
console.log(Object.is(0, NaN) === false);
console.log(Object.is(NaN, 0) === false);
console.log(Object.is(42, "42") === false);
console.log(Object.is("42", 42) === false);
console.log(Object.is("foo", "bar") === false);
console.log(Object.is(false, true) === false);
console.log(Object.is(null, undefined) === false);
console.log(Object.is(undefined, null) === false);

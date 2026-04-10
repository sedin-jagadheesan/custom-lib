export function reduce<T, R>(
  fn: (acc: R, val: T) => R,
  initial: R,
  arr: T[]
): R {
  let acc = initial;

  for (let i = 0; i < arr.length; i++) {
    acc = fn(acc, arr[i]);
  }

  return acc;
}
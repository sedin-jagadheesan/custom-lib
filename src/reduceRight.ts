export function reduceRight<T, R>(
  fn: (acc: R, val: T) => R,
  initial: R,
  arr: T[]
): R {
  let acc = initial;

  for (let i = arr.length - 1; i >= 0; i--) {
    acc = fn(acc, arr[i]);
  }

  return acc;
}
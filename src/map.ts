export function map<T, R>(
  fn: (item: T, index: number) => R,
  arr: T[]
): R[] {
  const result: R[] = [];

  for (let i = 0; i < arr.length; i++) {
    result[i] = fn(arr[i], i);
  }

  return result;
}
export function some<T>(
  fn: (item: T) => boolean,
  arr: T[]
): boolean {
  for (let i = 0; i < arr.length; i++) {
    if (fn(arr[i])) return true;
  }
  return false;
}
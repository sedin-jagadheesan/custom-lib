export function every<T>(fn: (item: T, index: number, arr: T[]) => boolean,arr: T[]): boolean {
  if (!Array.isArray(arr)) return false;

  for (let i = 0; i < arr.length; i++) {
    if (!fn(arr[i], i, arr)) return false;
  }

  return true;
}
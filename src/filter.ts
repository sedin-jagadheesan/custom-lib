export function filter<T>(fn: (item: T, index: number, arr: T[]) => boolean,arr: T[]): T[]{
  if (!Array.isArray(arr)) return [];
  const result: T[] = [];
  for (let i = 0; i < arr.length; i++){
    if (fn(arr[i], i, arr)){
      result[result.length] = arr[i];
    }
  }
  return result;
}
export function find<T>(arr: T[],arg1: any,arg2?: any): T | undefined{
  if (!Array.isArray(arr)) return undefined;
  if (typeof arg1 === "function") {
    for (let i = 0; i < arr.length; i++) {
      if (arg1(arr[i], i, arr)) return arr[i];
    }
  }
  else if (typeof arg1 === "string") {
    for (let i = 0; i < arr.length; i++) {
      if ((arr[i] as any)?.[arg1] === arg2) {
        return arr[i];
      }
    }
  }
  return undefined;
}
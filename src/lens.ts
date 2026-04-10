export function lens(path: string): string[] {
  return path.split(".");
}


export function view(lensPath: string[], obj: any): any {
  let value = obj;

  for (let i = 0; i < lensPath.length; i++) {
    value = value?.[lensPath[i]];
  }

  return value;
}


export function set(
  lensPath: string[],
  newValue: any,
  obj: any
): any {
  if (lensPath.length === 0) return newValue;

  const [key, ...rest] = lensPath;

  return {
    ...obj,
    [key]: rest.length
      ? set(rest, newValue, obj[key] || {})
      : newValue
  };
}
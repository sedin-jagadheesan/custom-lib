export function pluck(path: any, arr: any[]): any[] {
  const result: any[] = [];

  for (let i = 0; i < arr.length; i++) {
    const item = arr[i];

    // 🔹 Case 1 & 2: string path
    if (typeof path === "string") {
      if (path.includes(".")) {
        const keys = path.split(".");
        let value = item;

        for (let k = 0; k < keys.length; k++) {
          value = value?.[keys[k]];
        }

        result[result.length] = value;
      } else {
        result[result.length] = item[path];
      }
    }

    // 🔹 Case 3: multiple keys
    else if (Array.isArray(path)) {
      const obj: any = {};

      for (let j = 0; j < path.length; j++) {
        obj[path[j]] = item[path[j]];
      }

      result[result.length] = obj;
    }
  }

  return result;
}
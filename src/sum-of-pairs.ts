export const sumOfPairs = (ints: number[], s: number): [number, number] | void => {
  if (ints.length === 0) {
    return undefined;
  }
  let result: [number, number] = undefined;
  let indice = Number.MAX_VALUE;
  for (let i = 0; i < ints.length; i++) {
    for (let j = 0; j < ints.length; j++) {
      if (i !== j && ((ints[i] + ints[j]) === s) && indice > Math.max(i, j)) {
        indice = Math.max(i, j);
        result = [ints[i], ints[j]];
      }
    }
  }
  return result;
}

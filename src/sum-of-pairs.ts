export const sumOfPairs = (ints: number[], s: number): [number, number] | void => {
  if (ints.length === 0) {
    return undefined;
  }
  const res = ints.map((v1, i) => {
    return ints.map((v2, j) => {
      if (i !== j && ((v1 + v2) === s)) {
        return [ints[i], ints[j], Math.max(i, j)];
      }
    }).sort(compareIndice)[0];
  }).sort(compareIndice)[0];
  return res ? [res[0], res[1]] : undefined;
}

const compareIndice = (i1: [number, number, number], i2: [number, number, number]) => {
  return (i1 && i2) ? i1[2] - i2[2] : 0;
}

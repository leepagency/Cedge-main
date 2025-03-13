export const getIndexGrid = (startIndex: number, arrayLength: number, interval: number) => {
  let indices: number[] = [];
  for (let i = startIndex; i < arrayLength; i += interval) {
    indices.push(i);
  }
  return indices;
};

export const addIndexStyle = (arrayLength: number, interval: number, index: number) => {
  for (let i = 0; i < interval; i++) {
    const indexGrid: number[] = getIndexGrid(i, arrayLength, interval);

    if (indexGrid.includes(index)) {
      return i;
    }
  }
};

export const getDividedArray = <T>(arrayLength: number, interval: number, myArray: T[]): T[][] => {
  const newArray: T[][] = [];
  for (let i = 0; i < arrayLength; i += interval) {
    newArray.push(myArray.slice(i, i + interval));
  }
  return newArray;
};

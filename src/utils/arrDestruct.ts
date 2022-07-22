export const arrDestruct = (arr: number[] | undefined) => {
  let result = '';

  if (arr) {
    arr.forEach((el) => {
      result += el;
      result += ',';
    });
    return result.slice(0, result.length - 1);
  }
  return;
};

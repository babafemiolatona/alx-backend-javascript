const hasValuesFromArray = (arr, values) => {
  const set = new Set(arr);
  for (const value of values) {
    if (!set.has(value)) return false;
  }
  return true;
};

module.exports = hasValuesFromArray;

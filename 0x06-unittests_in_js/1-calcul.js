const calculateNumber = (type, a, b) => {
  if (type === 'SUM') {
    a = Math.round(a);
    b = Math.round(b);
    return (a + b);
  } else if (type === 'SUBTRACT') {
    a = Math.round(a);
    b = Math.round(b);
    return (a - b);
  } else if (type === 'DIVIDE') {
    if (b === 0) {
      return 'Error';
    }
    a = Math.round(a);
    b = Math.round(b);
    return (a / b);
  }
};

module.exports = calculateNumber;

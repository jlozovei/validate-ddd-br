function getDDD(rawDDD) {
  const string = String(rawDDD);

  if (string.lastIndexOf('(') > -1) {
    const start = string.lastIndexOf('(') + 1;
    const end = string.lastIndexOf(')');

    const onlyDDD = string.substring(start, end);
    return onlyDDD;
  }

  return string;
}

export { getDDD };

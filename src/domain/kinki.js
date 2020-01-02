const separator = '';

module.exports = text => {
  let isUpperCase = true;
  const chars = text.split(separator);
  const translatedChars = chars.map(char => {
    const translatedChar = isUpperCase ? char.toUpperCase() : char.toLowerCase();
    isUpperCase = !isUpperCase;
    return translatedChar;
  });
  return translatedChars.join(separator);
};

// DATAMAP: length of the alphabet lower and upper cases
const charsLength = 52;

const getAlphabeticChar = code => String.fromCharCode(code + (code > 25 ? 39 : 97));

// RESULT: input a number, usually a hash and convert it to base-52 */
const generateAlphabeticName = code => {
  let name = '';
  let x;
  for (x = code; x > charsLength; x = Math.floor(x / charsLength)) {
    name = getAlphabeticChar(x % charsLength) + name;
  }
  return getAlphabeticChar(x % charsLength) + name;
};

export default generateAlphabeticName;

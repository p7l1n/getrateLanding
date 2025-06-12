const replaceAll = (templateString, wordToReplace, replaceWith) => {
  const regex = new RegExp(wordToReplace, "g");
  return templateString.replace(regex, replaceWith);
};

export const toCurrency = (n, separator = " ") => {
  if (!n) return "0";
  const num = +(n + "");
  return replaceAll(num.toLocaleString("en"), ",", separator);
};
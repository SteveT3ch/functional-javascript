const capify = str => [str.charAt(0).toUpperCase(), str.substring(1)].join("");

const processWords = (fn, str) => str.split(" ").map(fn).join(" ");

const inputStr = 'buy bitcoin now!';
const getValue = e => console.log(processWords(capify, inputStr));
getValue();
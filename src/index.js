const WORD_LIST = require("../data/wordList");
const LETTERS = require("../data/letters");

const DEFAULT_BLOCK = 3;
const DEFAULT_NUM_OF_BLOCK_ELEMENTS = 3;
const DEFAULT_SEPARATOR = "-";

const generateLetterId = () => generateCustomLetterId();

const generateCustomLetterId = (block=DEFAULT_BLOCK, numberOfEl=DEFAULT_NUM_OF_BLOCK_ELEMENTS, separator=DEFAULT_SEPARATOR)=>
  Array.from({ length: block }).reduce(
    (id, el, i) =>
      id + getBlock(numberOfEl)+ (i < block - 1 ? separator : ''),
    ''
  );


const getIndex = (max = LETTERS.length - 1) => Math.floor(Math.random() * max);

const getBlock = (numberOfEl) =>
  Array.from({ length: numberOfEl }).reduce(
    (block, i) => block + LETTERS[getIndex()],
    ""
  );

const generateWordId = (
  block = DEFAULT_BLOCK,
  separator = DEFAULT_SEPARATOR,
  wordList = WORD_LIST
) =>
  Array.from({
    length: block
  }).reduce(
    (id, el, i) =>
      id +
      wordList[getIndex(wordList.length - 1)] +
      (i < block - 1 ? separator : ""),
    ""
  );

  const generateIdStartingWith = (
  startWith = '',
  block = 1,
  separator = DEFAULT_SEPARATOR,
  numberOfEl=DEFAULT_NUM_OF_BLOCK_ELEMENTS
) =>
  Array.from({
    length: block
  }).reduce(
    (id, el, i) =>
      id + separator + getBlock(numberOfEl),
    startWith
  );

module.exports = {
  generateLetterId,
  generateCustomLetterId,
  generateWordId,
  generateIdStartingWith
};
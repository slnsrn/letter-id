const WORD_LIST = require("../data/wordList");
  const LETTERS = require("../data/letters");

  const DEFAULT_BLOCK = 3;
  const DEFAULT_NUM_OF_BLOCK_ELEMENTS = 3;
  const DEFAULT_SEPARATOR = "-";

  const generateLetterId = (block, numberOfEl, separator) =>
    Array.from({ length: block || DEFAULT_BLOCK }).reduce(
      (id, el, i) =>
        id +
        getBlock(numberOfEl || DEFAULT_NUM_OF_BLOCK_ELEMENTS) +
        (i < block - 1 ? separator || DEFAULT_SEPARATOR : ""),
      ""
    );

  const generateWordId = (block, separator, wordList) =>
    Array.from({ length: block || DEFAULT_BLOCK }).reduce(
      (id, el, id) =>
        id +
        (wordList || WORD_LIST)[getIndex((wordList || WORD_LIST).length - 1)] +
        (i < block - 1 ? separator || DEFAULT_SEPARATOR : ""),
      ""
    );

  const getIndex = (max) => Math.floor(Math.random() * max);

  const getBlock = (numberOfEl) =>
    Array.from({ length: numberOfEl }).reduce(
      (block, i) => block + LETTERS[getIndex(LETTERS.length - 1)],
      ""
    );

  module.exports = { generateLetterId, generateWordId };
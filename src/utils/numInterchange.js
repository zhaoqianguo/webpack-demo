import _ from 'lodash';

const numRef = [
  {
    num: 1,
    word: 'One',
  },
  {
    num: 2,
    word: 'Two',
  },
  {
    num: 3,
    word: 'Three',
  },
  {
    num: 4,
    word: 'Four',
  },
  {
    num: 5,
    word: 'Five',
  },
  {
    num: 0,
    word: 'Zero',
  },
];

export function numToWord(num) {
  return _.reduce(
    numRef,
    (accum, ref) => {
      return ref.num === num ? ref.word : accum;
    },
    ''
  );
}

export function wordToNum(word) {
  return _.reduce(
    numRef,
    (accum, ref) => {
      return ref.word === word && word.toLowerCase() ? ref.num : accum;
    },
    -1
  );
}

/*
 * @Description: 
 * @Author: LaughingZhu
 * @Date: 2021-05-25 17:46:33
 * @LastEditros: 
 * @LastEditTime: 2021-05-26 15:08:39
 */
import _ from 'lodash'
import numRef from './ref.json';



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
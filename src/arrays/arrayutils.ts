import {Equals} from '../obj/equals';

export function equals<T extends Equals<T>>(thisArr: T[], thatArr: T[]) {
  if (thisArr.length !== thatArr.length) {
    return false;
  }

  for (let index = 0; index < thisArr.length; index++) {
    if (!thisArr[index].equals(thatArr[index])) {
      return false;
    }
  }

  return true;
}

export function copy<T>(src: T[], srcIndex: number, dest: T[], destIndex: number, length: number) {
  for (let index = 0; index < length; index++) {
    let srcVal = src[srcIndex + index];
    dest[destIndex + index] = srcVal;
  }
}
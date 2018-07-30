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
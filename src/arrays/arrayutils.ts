import {Collectable} from 'typescriptcollectionsframework';

export function equals<T>(thisArr: T[], thatArr: T[], equalsImpl: Collectable<T>) {
  if (thisArr.length !== thatArr.length) {
    return false;
  }

  for (let index = 0; index < thisArr.length; index++) {
    if (!equalsImpl.equals(thisArr[index], thatArr[index])) {
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

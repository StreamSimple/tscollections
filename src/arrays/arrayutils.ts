import {Collectable} from 'typescriptcollectionsframework';

export class ArrayUtils {
  public static equals<T>(thisArr: T[],
                          thatArr: T[],
                          equalsImpl: Collectable<T>): boolean {
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

  public static copy<T>(src: T[], srcIndex: number, dest: T[], destIndex: number, length: number) {
    for (let index = 0; index < length; index++) {
      let srcVal = src[srcIndex + index];
      dest[destIndex + index] = srcVal;
    }
  }
}


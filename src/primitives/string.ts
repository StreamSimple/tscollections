import {UInt} from 'com.streamsimple.tsnumbers/dist/uint';
import {Hashable} from 'typescriptcollectionsframework';

export class StringHashableImpl implements Hashable<string> {
  public static readonly INSTANCE = new StringHashableImpl();

  private constructor() {
  }

  equals(thisString: string, thatString: string): boolean {
    return thisString === thatString;
  }

  hashCode(val: String): number {
    let hashcodeVal = new UInt(0);

    for (let index = 0; index < val.length; index++) {
      hashcodeVal = hashcodeVal.mult(new UInt(31)).add(new UInt(val.charCodeAt(index)));
    }

    return hashcodeVal.toNumber();
  }
}
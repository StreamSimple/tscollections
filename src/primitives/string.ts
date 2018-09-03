import {UInt} from 'com.streamsimple.tsnumbers/dist/uint';
import {Hashable} from 'typescriptcollectionsframework';
import {HashableUtils} from '../utils/hashableutils';

export class StringHashableImpl implements Hashable<string> {
  public static readonly INSTANCE = new StringHashableImpl();

  private constructor() {
  }

  public equals(thisString: string, thatString: string): boolean {
    return thisString === thatString;
  }

  public hashCode(val: string): number {
    let hashcodeVal = new UInt(0);

    for (let index = 0; index < val.length; index++) {
      hashcodeVal = hashcodeVal.mult(new UInt(31)).add(new UInt(val.charCodeAt(index)));
    }

    return hashcodeVal.toNumber();
  }

  public composeHashCodes(...vals: string[]): number {
    let hashCodes = vals.map(val => StringHashableImpl.INSTANCE.hashCode(val));
    return HashableUtils.composeHashCode(hashCodes);
  }
}

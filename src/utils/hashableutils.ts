import {UInt} from 'com.streamsimple.tsnumbers/dist/uint';

export class HashableUtils {
  private constructor() {
  }

  public static composeHashCode(hashCodes: number[]): number {
    let hashCode = new UInt(0);

    for (let tempHashCode of hashCodes) {
      hashCode = hashCode.mult(new UInt(31)).
        add(new UInt(tempHashCode));
    }

    return hashCode.toNumber();
  }
}
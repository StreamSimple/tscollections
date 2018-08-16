import {ULong} from 'com.streamsimple.tsnumbers/dist/ulong';
import {Primitive, PrimitiveType} from './primitive';
import {Hashable} from 'typescriptcollectionsframework';
import {UInt} from 'com.streamsimple.tsnumbers/dist/uint';

export class PULong implements Primitive {
  constructor(public readonly val: ULong) {
  }

  public getType(): PrimitiveType {
    return PrimitiveType.ULONG;
  }

  public static parseLong(valString: string): PULong {
    return new PULong(ULong.parseLong(valString));
  }
}

export class PULongHashable implements Hashable<PULong> {
  public static readonly INSTANCE = new PULongHashable();

  private constructor() {
  }

  equals(thisVal: PULong, thatVal: PULong): boolean {
    return false;
  }

  hashCode(val: PULong): number {
    return val.val.getLs32b().
      add(val.val.getMs32b().mult(new UInt(31))).
      toNumber();
  }
}

import {UInt} from 'com.streamsimple.tsnumbers/dist/uint';
import {Primitive, PrimitiveType} from './primitive';
import {Hashable} from 'typescriptcollectionsframework';

export class PUInt implements Primitive {
  constructor(public readonly val: UInt) {
  }

  public getType(): PrimitiveType {
    return PrimitiveType.UINT;
  }

  public static parseInt(valString: string): PUInt {
    return new PUInt(UInt.parseInt(valString));
  }
}

export class PUintHashable implements Hashable<PUInt> {
  equals(thisVal: PUInt, thatVal: PUInt): boolean {
    return thisVal.val.toNumber() == thatVal.val.toNumber();
  }

  hashCode(val: PUInt): number {
    return val.val.toNumber();
  }
}

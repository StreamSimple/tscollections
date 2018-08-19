import {UInt} from 'com.streamsimple.tsnumbers/dist/uint';
import {PrimitiveNumber, PrimitiveType} from './primitive';
import {Hashable} from 'typescriptcollectionsframework';

export class PUInt implements PrimitiveNumber {
  constructor(public readonly val: UInt) {
  }

  public getType(): PrimitiveType {
    return PrimitiveType.UINT;
  }

  public static parseInt(valString: string): PUInt {
    return new PUInt(UInt.parseInt(valString));
  }

  public toNumber(): number {
    return this.val.toNumber();
  }

  public isNumber(): boolean {
    return true;
  }
}

export class PUintHashable implements Hashable<PUInt> {
  public static readonly INSTANCE = new PUintHashable();

  private constructor() {
  }

  equals(thisVal: PUInt, thatVal: PUInt): boolean {
    return thisVal.val.toNumber() == thatVal.val.toNumber();
  }

  hashCode(val: PUInt): number {
    return val.val.toNumber();
  }
}

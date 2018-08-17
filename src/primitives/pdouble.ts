import {Primitive, PrimitiveType} from './primitive';
import {Hashable} from 'typescriptcollectionsframework';
import {StringHashableImpl} from './string';

export class PDouble implements Primitive {
  constructor(public readonly val: number) {
  }

  public getType(): PrimitiveType {
    return PrimitiveType.DOUBLE;
  }

  public static parseDouble(valString: string): PDouble {
    return new PDouble(Number.parseFloat(valString));
  }
}

export class PDoubleHashable implements Hashable<PDouble> {
  public static readonly INSTANCE = new PDoubleHashable();

  private constructor() {
  }

  equals(thisVal: PDouble, thatVal: PDouble): boolean {
    return thisVal.val === thatVal.val;
  }

  hashCode(doubleVal: PDouble): number {
    return StringHashableImpl.INSTANCE.hashCode(doubleVal.val.toExponential(20));
  }
}

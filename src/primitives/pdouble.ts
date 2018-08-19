import {PrimitiveNumber, PrimitiveType} from './primitive';
import {Hashable} from 'typescriptcollectionsframework';
import {StringHashableImpl} from './string';

export class PDouble implements PrimitiveNumber {
  constructor(public readonly val: number) {
  }

  public getType(): PrimitiveType {
    return PrimitiveType.DOUBLE;
  }

  public static parseDouble(valString: string): PDouble {
    return new PDouble(Number.parseFloat(valString));
  }

  public toNumber(): number {
    return this.val;
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

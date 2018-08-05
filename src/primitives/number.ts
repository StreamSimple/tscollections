import {Hashable} from 'typescriptcollectionsframework';
import {StringHashableImpl} from './string';

export class NumberHashableImpl implements Hashable<number> {
  public static readonly INSTANCE = new NumberHashableImpl();

  private constructor() {
  }

  equals(thisNumber: number, thatNumber: number): boolean {
    return thisNumber === thatNumber;
  }

  hashCode(val: number): number {
    return StringHashableImpl.INSTANCE.hashCode(val.toString());
  }
}

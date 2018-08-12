import {Hashable} from 'typescriptcollectionsframework';
import {NumberHashableImpl} from './number';
import {StringHashableImpl} from './string';

export enum PrimitiveType {
  UINT,
  ULONG,
  DOUBLE,
  STRING
}

export interface Primitive {
  getType(): PrimitiveType;
}

export function isNumber(x: any): x is number {
  return typeof x === "number";
}

export function isString(x: any): x is string {
  return typeof x === "string";
}

export class PrimitiveHashable implements Hashable<string | number> {
  public static readonly INSTANCE = new PrimitiveHashable();

  private constructor() {
  }

  public equals(thisVal: string | number, thatVal: string | number): boolean {
    return thisVal === thatVal;
  }

  public hashCode(val: string | number): number {
    if (isNumber(val)) {
      return NumberHashableImpl.INSTANCE.hashCode(val);
    } else if (isString(val)) {
      return StringHashableImpl.INSTANCE.hashCode(val);
    } else {
      throw new Error();
    }
  }
}
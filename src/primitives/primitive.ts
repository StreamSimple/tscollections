import {Hashable} from 'typescriptcollectionsframework';
import {NumberHashableImpl} from './number';
import {StringHashableImpl} from './string';
import {PUInt} from './puint';
import {PULong} from './pulong';
import {PString} from './pstring';
import {PDouble} from './pdouble';

export enum PrimitiveType {
  UINT,
  ULONG,
  DOUBLE,
  STRING
}

export interface Primitive {
  getType(): PrimitiveType;
}

export function parsePrimitive(valString: string, primitiveType: PrimitiveType) {
  switch (primitiveType) {
    case PrimitiveType.UINT:
      return PUInt.parseInt(valString);
    case PrimitiveType.ULONG:
      return PULong.parseLong(valString);
    case PrimitiveType.DOUBLE:
      return PDouble.parseDouble(valString);
    case PrimitiveType.STRING:
      return new PString(valString);
    default:
      throw new Error();
  }
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
import {Hashable} from 'typescriptcollectionsframework';
import {StringHashableImpl} from './string';
import {PUInt, PUintHashable} from './puint';
import {PULong, PULongHashable} from './pulong';
import {PString} from './pstring';
import {PDouble, PDoubleHashable} from './pdouble';

export enum PrimitiveType {
  UINT,
  ULONG,
  DOUBLE,
  STRING
}

export interface Primitive {
  getType(): PrimitiveType;
  isNumber(): boolean;
}

export interface PrimitiveNumber extends Primitive{
  toNumber(): number;
}

export function parsePrimitive(valString: string, primitiveType: PrimitiveType): Primitive {
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

export class PrimitiveHashable implements Hashable<Primitive> {
  public static readonly INSTANCE = new PrimitiveHashable();

  private constructor() {
  }

  public equals(thisVal: Primitive, thatVal: Primitive): boolean {
    if (thisVal.getType() !== thatVal.getType()) {
      return false;
    }

    switch (thisVal.getType()) {
      case PrimitiveType.UINT:
        return PUintHashable.INSTANCE.equals(thisVal as PUInt, thatVal as PUInt);
      case PrimitiveType.ULONG:
        return PULongHashable.INSTANCE.equals(thisVal as PULong, thatVal as PULong);
      case PrimitiveType.DOUBLE:
        return PDoubleHashable.INSTANCE.equals(thisVal as PDouble, thatVal as PDouble);
      case PrimitiveType.STRING:
        return StringHashableImpl.INSTANCE.equals((thisVal as PString).val, (thatVal as PString).val);
      default:
        throw new Error();
    }
  }

  public hashCode(val: Primitive): number {
    switch (val.getType()) {
      case PrimitiveType.UINT:
        return PUintHashable.INSTANCE.hashCode(val as PUInt);
      case PrimitiveType.ULONG:
        return PULongHashable.INSTANCE.hashCode(val as PULong);
      case PrimitiveType.DOUBLE:
        return PDoubleHashable.INSTANCE.hashCode(val as PDouble);
      case PrimitiveType.STRING:
        return StringHashableImpl.INSTANCE.hashCode((val as PString).val);
      default:
        throw new Error();
    }
  }
}
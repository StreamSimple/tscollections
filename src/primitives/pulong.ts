import {ULong} from 'com.streamsimple.tsnumbers/dist/ulong';
import {Primitive, PrimitiveType} from './primitive';

export class PULong implements Primitive {
  constructor(public readonly val: ULong) {
  }

  public getType(): PrimitiveType {
    return PrimitiveType.ULONG;
  }
}
import {UInt} from 'com.streamsimple.tsnumbers/dist/uint';
import {Primitive, PrimitiveType} from './primitive';

export class PUInt implements Primitive {
  constructor(public readonly val: UInt) {
  }

  public getType(): PrimitiveType {
    return PrimitiveType.UINT;
  }
}
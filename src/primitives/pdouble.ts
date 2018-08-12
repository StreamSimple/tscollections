import {Primitive, PrimitiveType} from './primitive';

export class PDouble implements Primitive {
  constructor(public readonly val: number) {
  }

  public getType(): PrimitiveType {
    return PrimitiveType.DOUBLE;
  }
}
import {Primitive, PrimitiveType} from './primitive';

export class PString implements Primitive {
  constructor(public readonly val: string) {
  }

  public getType(): PrimitiveType {
    return PrimitiveType.STRING;
  }
}
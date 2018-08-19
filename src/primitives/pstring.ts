import {Primitive, PrimitiveType} from './primitive';

export class PString implements Primitive {
  constructor(public readonly val: string) {
  }

  public getType(): PrimitiveType {
    return PrimitiveType.STRING;
  }

  public isNumber(): boolean {
    return false;
  }

  public toString(): string {
    return this.val;
  }
}

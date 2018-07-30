import {EqualsAndHashcode} from '../obj/equalsAndHashcode';
import {UInt} from 'com.streamsimple.tsnumbers/dist/uint';

export class String implements EqualsAndHashcode<String> {
  private hashcodeVal: UInt = new UInt(0);

  constructor(public readonly val: string) {
  }

  public equals(that: String): boolean {
    return this.val === that.val;
  }

  public hashcode(): UInt {
    let temp = this.hashcodeVal;

    if (temp.toNumber() == 0 && this.val.length > 0) {
      for (let index = 0; index < this.val.length; index++) {
        temp = temp.mult(new UInt(31)).add(new UInt(this.val.charCodeAt(index)));
      }

      this.hashcodeVal = temp;
    }

    return temp;
  }
}
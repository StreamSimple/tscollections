import * as chai from "chai";
import {Primitive, PrimitiveHashable} from './primitive';
import {PDouble} from './pdouble';
import {PUInt} from './puint';
import {UInt} from 'com.streamsimple.tsnumbers/dist/uint';
import {PULong, PULongHashable} from './pulong';
import {PString} from './pstring';
import {StringHashableImpl} from './string';

const expect = chai.expect;

describe('PrimitiveHashableImpl', () => {
  describe('hashcode tests', () => {
    it('should return expected hashcode for each primitive type', () => {
      let actual = PrimitiveHashable.INSTANCE.hashCode(new PDouble(5.23));
      expect(actual).to.not.eq(0);

      actual = PrimitiveHashable.INSTANCE.hashCode(new PUInt(new UInt(5)));
      expect(actual).to.eq(5);

      let longVal = PULong.parseLong('10000000000');
      actual = PrimitiveHashable.INSTANCE.hashCode(longVal);
      expect(actual).to.eq(PULongHashable.INSTANCE.hashCode(longVal));

      actual = PrimitiveHashable.INSTANCE.hashCode(new PString('boom'));
      expect(actual).to.eq(StringHashableImpl.INSTANCE.hashCode('boom'));
    });
  });

  describe('equals tests', () => {
    it('equals should work for all primitive types', () => {
      let primArr1: Primitive[] = [
        new PDouble(1111.5),
        new PUInt(new UInt(5)),
        PULong.parseLong('10000000000'),
        new PString('bboomasd')];
      let primArr2: Primitive[] = [
        new PDouble(63.7),
        new PUInt(new UInt(111111)),
        PULong.parseLong('5005555000000'),
        new PString('bamboom')];

      for (let index = 0; index < primArr1.length; index++) {
        expect(PrimitiveHashable.INSTANCE.equals(primArr1[index], primArr1[index])).to.be.true;
        expect(PrimitiveHashable.INSTANCE.equals(primArr1[index], primArr2[index])).to.be.false;
      }
    });
  });
});

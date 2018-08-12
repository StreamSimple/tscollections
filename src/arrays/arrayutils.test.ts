import * as chai from "chai";
import {ArrayUtils} from './arrayutils';
import {StringHashableImpl} from '../primitives/string';

const expect = chai.expect;

describe('ArrayUtils', () => {
  describe('equals tests', () => {
    it('should say empty arrays are equal', () => {
      let listA: string[] = [];
      let listB: string[] = [];

      expect(ArrayUtils.equals(listA, listB, StringHashableImpl.INSTANCE)).to.be.true;
    });

    it('should say arrays of different sizes are not equal', () => {
      let listA = ['a', 'b', 'c'];
      let listB = ['a', 'b', 'c', 'd'];

      expect(ArrayUtils.equals(listA, listB, StringHashableImpl.INSTANCE)).to.be.false;
    });

    it('should say equal arrays are equal', () => {
      let listA = ['a', 'b', 'c'];
      let listB = ['a', 'b', 'c'];

      expect(ArrayUtils.equals(listA, listB, StringHashableImpl.INSTANCE)).to.be.true;
    });

    it('should say non-equal arrays of equal size are not', () => {
      let listA = ['a', 'b', 'c'];
      let listB = ['a', 'd', 'c'];

      expect(ArrayUtils.equals(listA, listB, StringHashableImpl.INSTANCE)).to.be.false;
    });
  });
});

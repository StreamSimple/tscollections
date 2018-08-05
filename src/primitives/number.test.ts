import * as chai from "chai";
import {NumberHashableImpl} from './number';
const expect = chai.expect;

describe('StringHashableImpl', () => {
  describe('hashcode tests', () => {
    it('should return a non zero hashcode', () => {
      let actual = NumberHashableImpl.INSTANCE.hashCode(111);
      expect(actual).to.not.eq(0);
    });

    it('should return different hashcodes', () => {
      let actual1 = NumberHashableImpl.INSTANCE.hashCode(188888.555);
      let actual2 = NumberHashableImpl.INSTANCE.hashCode(-10);
      expect(actual1).to.not.eq(actual2);
    });
  });
});
import * as chai from "chai";
import {StringHashableImpl} from './string';

const expect = chai.expect;
describe('StringHashableImpl', () => {
  describe('hashcode tests', () => {
    it('should return 0 for a string of length 0', () => {
      let actual = StringHashableImpl.INSTANCE.hashCode('');
      expect(actual).to.eq(0);
    });

    it('should return a non zero hashcode', () => {
      let actual = StringHashableImpl.INSTANCE.hashCode('blah');
      expect(actual).to.not.eq(0);
    });

    it('should return different hashcodes', () => {
      let actual1 = StringHashableImpl.INSTANCE.hashCode('blah');
      let actual2 = StringHashableImpl.INSTANCE.hashCode('boomboom');
      expect(actual1).to.not.eq(actual2);
    });
  });
});
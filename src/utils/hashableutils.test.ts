import * as chai from "chai";
import {HashableUtils} from './hashableutils';
const expect = chai.expect;

describe('HashableUtils', () => {
  describe('compose hashcode tests', () => {
    it('should return a zero hashcode', () => {
      let actual = HashableUtils.composeHashCode([]);
      expect(actual).to.eq(0);
    });

    it('should return the correct hashcode', () => {
      let actual = HashableUtils.composeHashCode([1, 2, 3]);
      expect(actual).to.eq(31 * 31 + 2 * 31 + 3);
    });
  });
});

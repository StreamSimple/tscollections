import * as chai from "chai";
import {StringHashableImpl} from '../primitives/string';
import {HashSet} from 'typescriptcollectionsframework';
import {SetUtils} from './setutils';

const expect = chai.expect;

describe('SetUtils', () => {
  describe('equals tests', () => {
    it('should say empty sets are equal', () => {
      let setA = new HashSet<string>(StringHashableImpl.INSTANCE);
      let setB = new HashSet<string>(StringHashableImpl.INSTANCE);

      expect(SetUtils.equals(setA, setB)).to.be.true;
    });

    it('should say sets of different sizes are not equal', () => {
      let setA = new HashSet<string>(StringHashableImpl.INSTANCE);
      setA.add('a');
      setA.add('b');
      setA.add('c');
      let setB = new HashSet<string>(StringHashableImpl.INSTANCE);
      setB.add('a');
      setB.add('b');
      setB.add('c');
      setB.add('d');

      expect(SetUtils.equals(setA, setB)).to.be.false;
    });

    it('should say equal sets are equal', () => {
      let setA = new HashSet<string>(StringHashableImpl.INSTANCE);
      setA.add('a');
      setA.add('b');
      setA.add('c');
      let setB = new HashSet<string>(StringHashableImpl.INSTANCE);
      setB.add('a');
      setB.add('b');
      setB.add('c');

      expect(SetUtils.equals(setA, setB)).to.be.true;
    });

    it('should say non-equal sets of equal size are not', () => {
      let setA = new HashSet<string>(StringHashableImpl.INSTANCE);
      setA.add('a');
      setA.add('b');
      setA.add('c');
      let setB = new HashSet<string>(StringHashableImpl.INSTANCE);
      setB.add('a');
      setB.add('d');
      setB.add('c');

      expect(SetUtils.equals(setA, setB)).to.be.false;
    });
  });
});
import * as chai from "chai";
import {HashSet, LinkedHashSet} from 'typescriptcollectionsframework';
import {SetUtils} from './setutils';
import {StringHashableImpl} from '../primitives/string';
import {ArrayUtils} from '../arrays/arrayutils';

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

  describe('linkedHashSetToArr tests', () => {
    it('It should handle empty arrays', () => {
      let set = new LinkedHashSet<string>(StringHashableImpl.INSTANCE);
      let actual = SetUtils.linkedHashSetToArr(set);
      let expected = [];

      expect(ArrayUtils.equals(expected, actual, StringHashableImpl.INSTANCE)).to.be.true;
    });

    it('It should create an array of the correct order', () => {
      let set = new LinkedHashSet<string>(StringHashableImpl.INSTANCE);
      set.add('a1');
      set.add('b1');
      set.add('c1');
      set.add('d1');
      set.add('e1');
      set.add('f1');
      set.add('g1');
      set.add('h1');
      set.add('i1');

      let actual = SetUtils.linkedHashSetToArr(set);
      let expected = ['a1', 'b1', 'c1', 'd1', 'e1', 'f1', 'g1', 'h1', 'i1'];

      expect(ArrayUtils.equals(expected, actual, StringHashableImpl.INSTANCE)).to.be.true;
    });
  });
});
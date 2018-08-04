import * as chai from "chai";
import {StringHashableImpl} from '../primitives/string';
import {HashMap, HashSet} from 'typescriptcollectionsframework';
import {SetUtils} from './setutils';
import {MapUtils} from './maputils';

const expect = chai.expect;

describe('MapUtils', () => {
  describe('equals tests', () => {
    it('should say empty maps are equal', () => {
      let mapA = new HashMap<string, string>(StringHashableImpl.INSTANCE);
      let mapB = new HashMap<string, string>(StringHashableImpl.INSTANCE);

      expect(MapUtils.equals(mapA, mapB, StringHashableImpl.INSTANCE)).to.be.true;
    });

    it('should say maps of different sizes are not equal', () => {
      let mapA = new HashMap<string, string>(StringHashableImpl.INSTANCE);
      mapA.put('a', 'a1');
      mapA.put('b', 'b1');
      mapA.put('c', 'c1');

      let mapB = new HashMap<string, string>(StringHashableImpl.INSTANCE);
      mapB.put('a', 'a1');
      mapB.put('b', 'b1');
      mapB.put('c', 'c1');
      mapB.put('d', 'd1');

      expect(MapUtils.equals(mapA, mapB, StringHashableImpl.INSTANCE)).to.be.false;
    });

    it('should say equal maps are equal', () => {
      let mapA = new HashMap<string, string>(StringHashableImpl.INSTANCE);
      mapA.put('a', 'a1');
      mapA.put('b', 'b1');
      mapA.put('c', 'c1');

      let mapB = new HashMap<string, string>(StringHashableImpl.INSTANCE);
      mapB.put('a', 'a1');
      mapB.put('b', 'b1');
      mapB.put('c', 'c1');

      expect(MapUtils.equals(mapA, mapB, StringHashableImpl.INSTANCE)).to.be.true;
    });

    it('should say non-equal sets of equal size are not', () => {
      let mapA = new HashMap<string, string>(StringHashableImpl.INSTANCE);
      mapA.put('a', 'a1');
      mapA.put('b', 'b1');
      mapA.put('c', 'c1');

      let mapB = new HashMap<string, string>(StringHashableImpl.INSTANCE);
      mapB.put('a', 'a1');
      mapB.put('d', 'd1');
      mapB.put('c', 'c1');

      expect(MapUtils.equals(mapA, mapB, StringHashableImpl.INSTANCE)).to.be.false;
    });
  });
});
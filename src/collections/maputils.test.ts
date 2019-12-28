import * as chai from "chai";
import {StringHashableImpl} from '../primitives/string';
import {HashMap, ImmutableMap} from 'typescriptcollectionsframework';
import {MapUtils} from './maputils';
import {MapDiff, MapDiffCollectable, ValueDiff} from './mapdiff';

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

    it('should say non-equal maps of equal size are not', () => {
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

  describe('diff tests', () => {
    it('should say empty maps are the same', () => {
      let oldMap = new HashMap<string, string>(StringHashableImpl.INSTANCE);
      let newMap = new HashMap<string, string>(StringHashableImpl.INSTANCE);

      let mapDiff = MapUtils.diff(oldMap, newMap, StringHashableImpl.INSTANCE);

      expect(mapDiff.isSame()).to.be.true;
    });

    it('should detect added key value pairs', () => {
      let oldMap = new HashMap<string, string>(StringHashableImpl.INSTANCE);
      oldMap.put('a', 'a1');
      oldMap.put('b', 'b1');
      oldMap.put('c', 'c1');

      let newMap = new HashMap<string, string>(StringHashableImpl.INSTANCE);
      newMap.put('a', 'a1');
      newMap.put('b', 'b1');
      newMap.put('c', 'c1');
      newMap.put('d', 'd1');

      let expectedAdded = new HashMap<string, string>();
      expectedAdded.put('d', 'd1');

      let expected = new MapDiff<string, string>(expectedAdded, new HashMap(), new HashMap());
      let actual = MapUtils.diff(oldMap, newMap, StringHashableImpl.INSTANCE);

      let mapDiffCollectable = new MapDiffCollectable(StringHashableImpl.INSTANCE);

      expect(mapDiffCollectable.equals(expected, actual)).to.be.true;
    });

    it('should detect removed key value pairs', () => {
      let oldMap = new HashMap<string, string>(StringHashableImpl.INSTANCE);
      oldMap.put('a', 'a1');
      oldMap.put('b', 'b1');
      oldMap.put('c', 'c1');

      let newMap = new HashMap<string, string>(StringHashableImpl.INSTANCE);
      newMap.put('a', 'a1');
      newMap.put('b', 'b1');

      let expectedRemoved = new HashMap<string, string>();
      expectedRemoved.put('c', 'c1');

      let expected = new MapDiff<string, string>(new HashMap(), expectedRemoved, new HashMap());
      let actual = MapUtils.diff(oldMap, newMap, StringHashableImpl.INSTANCE);

      let mapDiffCollectable = new MapDiffCollectable(StringHashableImpl.INSTANCE);

      expect(mapDiffCollectable.equals(expected, actual)).to.true;
    });

    it('should detect changed key value pairs', () => {
      let oldMap = new HashMap<string, string>(StringHashableImpl.INSTANCE);
      oldMap.put('a', 'a1');
      oldMap.put('b', 'b1');
      oldMap.put('c', 'c1');

      let newMap = new HashMap<string, string>(StringHashableImpl.INSTANCE);
      newMap.put('a', 'a1');
      newMap.put('b', 'b1');
      newMap.put('c', 'c2');

      let expectedChanged = new HashMap<string, ValueDiff<string>>();
      expectedChanged.put('c', new ValueDiff('c1', 'c2'));

      let expected = new MapDiff<string, string>(new HashMap(), new HashMap(), expectedChanged);
      let actual = MapUtils.diff(oldMap, newMap, StringHashableImpl.INSTANCE);

      let mapDiffCollectable = new MapDiffCollectable(StringHashableImpl.INSTANCE);

      expect(mapDiffCollectable.equals(expected, actual)).to.true;
    });
  });

  describe('clone hash map tests', () => {
    it('clone an empty map properly', () => {
      let expected = new HashMap<string, string>(StringHashableImpl.INSTANCE);
      let actual = MapUtils.cloneHashMap(expected, StringHashableImpl.INSTANCE);

      expect(MapUtils.equals(expected, actual, StringHashableImpl.INSTANCE)).to.be.true;
    });

    it('should clone a simple map properly', () => {
      let expected = new HashMap<string, string>(StringHashableImpl.INSTANCE);
      expected.put('a', 'a1');
      expected.put('b', 'b1');
      expected.put('c', 'c1');

      let actual = MapUtils.cloneHashMap(expected, StringHashableImpl.INSTANCE);

      expect(MapUtils.equals(expected, actual, StringHashableImpl.INSTANCE)).to.be.true;
    });
  })
});

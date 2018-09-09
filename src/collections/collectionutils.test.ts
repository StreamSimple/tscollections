import * as chai from "chai";
import {ListUtils} from './listutils';
import {ArrayList} from 'typescriptcollectionsframework';
import {StringHashableImpl} from '../primitives/string';
import {CollectionUtils} from './collectionutils';

const expect = chai.expect;

describe('ListUtils', () => {
  describe('diff tests', () => {
    it('should return an empty diff for empty lists', () => {
      let firstList = new ArrayList<string>(StringHashableImpl.INSTANCE);
      let secondList = new ArrayList<string>(StringHashableImpl.INSTANCE);
      let listDiff = CollectionUtils.diff(firstList, secondList);

      expect(listDiff.isSame()).to.be.true;
    });

    it('should return removed elements in diff', () => {
      let firstList = new ArrayList<string>(StringHashableImpl.INSTANCE);
      firstList.add('a');
      firstList.add('b');
      firstList.add('c');

      let secondList = new ArrayList<string>(StringHashableImpl.INSTANCE);
      secondList.add('a');

      let expectedRemoved = new ArrayList<string>(StringHashableImpl.INSTANCE);
      expectedRemoved.add('b');
      expectedRemoved.add('c');

      let listDiff = CollectionUtils.diff(firstList, secondList);
      expect(listDiff.added.isEmpty()).to.be.true;

      let actualRemoved = ListUtils.createArrayListFromCollection(listDiff.removed);

      expect(ListUtils.equals(expectedRemoved, actualRemoved, StringHashableImpl.INSTANCE));
    });

    it('should return added elements in diff', () => {
      let firstList = new ArrayList<string>(StringHashableImpl.INSTANCE);
      firstList.add('a');

      let secondList = new ArrayList<string>(StringHashableImpl.INSTANCE);
      secondList.add('a');
      secondList.add('b');
      secondList.add('c');

      let expectedAdded = new ArrayList<string>(StringHashableImpl.INSTANCE);
      expectedAdded.add('b');
      expectedAdded.add('c');

      let listDiff = CollectionUtils.diff(firstList, secondList);
      expect(listDiff.removed.isEmpty()).to.be.true;

      let actualAdded = ListUtils.createArrayListFromCollection(listDiff.added);

      expect(ListUtils.equals(expectedAdded, actualAdded, StringHashableImpl.INSTANCE));
    });
  });
});
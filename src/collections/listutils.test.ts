import * as chai from "chai";
import {StringHashableImpl} from '../primitives/string';
import {ArrayList} from 'typescriptcollectionsframework';
import {ListUtils} from './listutils';

const expect = chai.expect;

describe('ListUtils', () => {

  describe('equals tests', () => {
    it('should return an empty diff for empty lists', () => {
      let firstList = new ArrayList<string>(StringHashableImpl.INSTANCE);
      let secondList = new ArrayList<string>(StringHashableImpl.INSTANCE);
      let listDiff = ListUtils.diff(firstList, secondList);

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

      let listDiff = ListUtils.diff(firstList, secondList);
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

      let listDiff = ListUtils.diff(firstList, secondList);
      expect(listDiff.removed.isEmpty()).to.be.true;

      let actualAdded = ListUtils.createArrayListFromCollection(listDiff.added);

      expect(ListUtils.equals(expectedAdded, actualAdded, StringHashableImpl.INSTANCE));
    });
  });

  describe('equals tests', () => {
    it('should say empty lists are equal', () => {
      let listA = new ArrayList<string>(StringHashableImpl.INSTANCE);
      let listB = new ArrayList<string>(StringHashableImpl.INSTANCE);

      expect(ListUtils.equals(listA, listB, StringHashableImpl.INSTANCE)).to.be.true;
    });

    it('should say lists of different sizes are not equal', () => {
      let listA = new ArrayList<string>(StringHashableImpl.INSTANCE);
      listA.add('a');
      listA.add('b');
      listA.add('c');

      let listB = new ArrayList<string>(StringHashableImpl.INSTANCE);
      listB.add('a');
      listB.add('b');
      listB.add('c');
      listB.add('d');

      expect(ListUtils.equals(listA, listB, StringHashableImpl.INSTANCE)).to.be.false;
    });

    it('should say equal lists are equal', () => {
      let listA = new ArrayList<string>(StringHashableImpl.INSTANCE);
      listA.add('a');
      listA.add('b');
      listA.add('c');

      let listB = new ArrayList<string>(StringHashableImpl.INSTANCE);
      listB.add('a');
      listB.add('b');
      listB.add('c');

      expect(ListUtils.equals(listA, listB, StringHashableImpl.INSTANCE)).to.be.true;
    });

    it('should say non-equal lists of equal size are not', () => {
      let listA = new ArrayList<string>(StringHashableImpl.INSTANCE);
      listA.add('a');
      listA.add('b');
      listA.add('c');

      let listB = new ArrayList<string>(StringHashableImpl.INSTANCE);
      listB.add('a');
      listB.add('d');
      listB.add('c');

      expect(ListUtils.equals(listA, listB, StringHashableImpl.INSTANCE)).to.be.false;
    });
  });
});

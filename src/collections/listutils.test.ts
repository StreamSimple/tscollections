import * as chai from "chai";
import {StringHashableImpl} from '../primitives/string';
import {ArrayList} from 'typescriptcollectionsframework';
import {ListUtils} from './listutils';

const expect = chai.expect;

describe('ListUtils', () => {
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

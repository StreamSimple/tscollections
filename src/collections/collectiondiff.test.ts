import * as chai from "chai";
import {CollectionDiff} from './collectiondiff';
import {ArrayList} from 'typescriptcollectionsframework';

const expect = chai.expect;

describe('CollectionDiff', () => {
  describe('isSame tests', () => {
    it('should be the same', () => {
      let diff = new CollectionDiff(new ArrayList(), new ArrayList());
      expect(diff.isSame()).to.be.true;
    });

    it('should not be the same if there are added elements', () => {
      let added = new ArrayList();
      let removed = new ArrayList();

      added.add('a');

      let diff = new CollectionDiff(added, removed);
      expect(diff.isSame()).to.be.false;
    });

    it('should not be the same if there are removed elements', () => {
      let added = new ArrayList();
      let removed = new ArrayList();

      removed.add('a');

      let diff = new CollectionDiff(added, removed);
      expect(diff.isSame()).to.be.false;
    });
  });
});

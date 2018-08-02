import {Collectable, JSet} from 'typescriptcollectionsframework';

export class SetUtils {
  /**
   * This method requires both JSets to use the same Collectable implementation.
   * @param {JSet<T>} thisSet
   * @param {JSet<T>} thatSet
   * @returns {boolean}
   */
  public static equals<T>(thisSet: JSet<T>, thatSet: JSet<T>): boolean {
    if (thisSet.size() !== thatSet.size()) {
      return false;
    }

    let thisIterator = thisSet.iterator();

    while (thisIterator.hasNext()) {
      let thisElement = thisIterator.next();

      if (!thatSet.contains(thisElement)) {
        return false;
      }
    }

    return true;
  }
}
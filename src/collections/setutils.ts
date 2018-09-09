import {ImmutableSet, JSet, LinkedHashSet} from 'typescriptcollectionsframework';

export class SetUtils {
  /**
   * This method requires both JSets to use the same Collectable implementation.
   * @param {JSet<T>} thisSet
   * @param {JSet<T>} thatSet
   * @returns {boolean}
   */
  public static equals<T>(thisSet: ImmutableSet<T>, thatSet: ImmutableSet<T>): boolean {
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

  public static linkedHashSetToArr<T>(set: LinkedHashSet<T>): T[] {
    let arr: T[] = new Array(set.size());
    let iterator = set.Iterator();
    let index = 0;

    while (iterator.hasNext()) {
      arr[index] = iterator.next().getValue();
      index++;
    }

    return arr;
  }
}
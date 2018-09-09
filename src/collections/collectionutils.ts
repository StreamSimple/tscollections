import {CollectionDiff} from './collectiondiff';
import {ArrayList, ImmutableCollection, ImmutableList} from 'typescriptcollectionsframework';

export class CollectionUtils {
  /**
   * Note that this method assumes both the lists have the same collectable implementation.
   * @param {ImmutableCollection<T>} firstList
   * @param {ImmutableCollection<T>} secondList
   */
  public static diff<T>(firstList: ImmutableCollection<T>,
                        secondList: ImmutableCollection<T>): CollectionDiff<T> {
    let addedList = new ArrayList<T>();
    let removedList = new ArrayList<T>();

    let firstIterator = firstList.iterator();
    let secondIterator = secondList.iterator();

    while (firstIterator.hasNext()) {
      let element = firstIterator.next();

      if (!secondList.contains(element)) {
        removedList.add(element);
      }
    }

    while (secondIterator.hasNext()) {
      let element = secondIterator.next();

      if (!firstList.contains(element)) {
        addedList.add(element);
      }
    }

    return new CollectionDiff<T>(addedList, removedList);
  }
}
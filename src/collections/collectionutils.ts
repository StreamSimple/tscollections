import {CollectionDiff} from './collectiondiff';
import {ArrayList, Collection, ImmutableCollection} from 'typescriptcollectionsframework';

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

  public static addAll<T>(dest: Collection<T>, arr: T[]) {
    for (let item of arr) {
      dest.add(item);
    }
  }

  public static addAllFromCollection<T>(dest: Collection<T>, collection: ImmutableCollection<T>) {
    let iterator = collection.iterator();

    while (iterator.hasNext()) {
      dest.add(iterator.next());
    }
  }
}
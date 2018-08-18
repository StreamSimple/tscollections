import {
  ArrayList,
  Collectable, ImmutableCollection,
  ImmutableList,
  LinkedList,
  List
} from 'typescriptcollectionsframework';
import {CollectionDiff} from './collectiondiff';

export class ListUtils {
  public static equals<T>(thisList: ImmutableList<T>,
                          thatList: ImmutableList<T>,
                          equalsImpl: Collectable<T>): boolean {
    if (thisList.size() !== thatList.size()) {
      return false;
    }

    let thisIterator = thisList.iterator();
    let thatIterator = thatList.iterator();

    while (thisIterator.hasNext()) {
      let thisElement = thisIterator.next();
      let thatElement = thatIterator.next();

      if (!equalsImpl.equals(thisElement, thatElement)) {
        return false;
      }
    }

    return true;
  }

  /**
   * Note that this method assumes both the lists have the same collectable implementation.
   * @param {ImmutableList<T>} firstList
   * @param {ImmutableList<T>} secondList
   */
  public static diff<T>(firstList: ImmutableList<T>,
                        secondList: ImmutableList<T>): CollectionDiff<T> {
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

  public static createArrayListFrom<T>(arr: T[]): ArrayList<T> {
    let list = new ArrayList<T>();
    ListUtils.addAll(list, arr);
    return list;
  }

  public static createArrayListFromCollection<T>(collection: ImmutableCollection<T>): ArrayList<T> {
    let list = new ArrayList<T>();
    ListUtils.addAllFromCollection(list, collection);
    return list;
  }

  public static ceateLinkedListFrom<T>(arr: T[]): LinkedList<T> {
    let list = new LinkedList<T>();
    ListUtils.addAll(list, arr);
    return list;
  }

  public static createLinkedListFromCollection<T>(collection: ImmutableCollection<T>): LinkedList<T> {
    let list = new LinkedList<T>();
    ListUtils.addAllFromCollection(list, collection);
    return list;
  }

  public static addAll<T>(dest: List<T>, arr: T[]) {
    for (let item of arr) {
      dest.add(item);
    }
  }

  public static addAllFromCollection<T>(dest: List<T>, collection: ImmutableCollection<T>) {
    let iterator = collection.iterator();

    while (iterator.hasNext()) {
      dest.add(iterator.next());
    }
  }
}
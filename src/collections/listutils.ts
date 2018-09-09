import {
  ArrayList,
  Collectable, ImmutableCollection,
  ImmutableList,
  LinkedList,
  List
} from 'typescriptcollectionsframework';
import {CollectionDiff} from './collectiondiff';
import {CollectionUtils} from './collectionutils';

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

  public static createArrayListFrom<T>(arr: T[]): ArrayList<T> {
    let list = new ArrayList<T>();
    CollectionUtils.addAll(list, arr);
    return list;
  }

  public static createArrayListFromCollection<T>(collection: ImmutableCollection<T>): ArrayList<T> {
    let list = new ArrayList<T>();
    CollectionUtils.addAllFromCollection(list, collection);
    return list;
  }

  public static ceateLinkedListFrom<T>(arr: T[]): LinkedList<T> {
    let list = new LinkedList<T>();
    CollectionUtils.addAll(list, arr);
    return list;
  }

  public static createLinkedListFromCollection<T>(collection: ImmutableCollection<T>): LinkedList<T> {
    let list = new LinkedList<T>();
    CollectionUtils.addAllFromCollection(list, collection);
    return list;
  }

  public static toArray<T>(list: ImmutableList<T>) {
    let arr = new Array<T>(list.size());

    for (let index = 0; index < list.size(); index++) {
      arr[index] = list.get(index);
    }

    return arr;
  }
}
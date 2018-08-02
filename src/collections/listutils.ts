import {Collectable, List} from 'typescriptcollectionsframework';

export class ListUtils {
  public static equals<T extends Collectable<T>>(thisList: List<T>, thatList: List<T>, equalsImpl: Collectable<T>) {
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
}
import {ArrayList, Collectable, ImmutableList, LinkedList, List} from 'typescriptcollectionsframework';

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
    ListUtils.addAll(list, arr);
    return list;
  }

  public static ceateLinkedListFrom<T>(arr: T[]): LinkedList<T> {
    let list = new LinkedList<T>();
    ListUtils.addAll(list, arr);
    return list;
  }

  public static addAll<T>(dest: List<T>, arr: T[]) {
    for (let item of arr) {
      dest.add(item);
    }
  }
}
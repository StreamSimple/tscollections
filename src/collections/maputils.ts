import {Collectable, JMap} from 'typescriptcollectionsframework';

export class MapUtils {
  /**
   * This method assumes that the same Hashable implementation is used for keys in both maps.
   * @param {JMap<K, V>} thisMap
   * @param {JMap<K, V>} thatMap
   * @param {Collectable<V>} valueEqualsImpl
   * @returns {boolean}
   */
  public static equals<K, V>(thisMap: JMap<K, V>,
                             thatMap: JMap<K, V>,
                             valueEqualsImpl: Collectable<V>): boolean {
    if (thisMap.size() !== thatMap.size()) {
      return false;
    }

    let keyIterator = thisMap.keySet().iterator();

    while (keyIterator.hasNext()) {
      let key = keyIterator.next();

      if (!thatMap.containsKey(key)) {
        return false;
      }
    }

    return true;
  }
}
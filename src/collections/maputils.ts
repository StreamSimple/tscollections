import {Collectable, Hashable, HashMap, ImmutableMap, JIterator, JMap, MapEntry} from 'typescriptcollectionsframework';
import {MapDiff, ValueDiff} from './mapdiff';
import {StringHashableImpl} from "../primitives/string";

export class MapUtils {
  /**
   * This method assumes that the same Hashable implementation is used for keys in both maps.
   * @param {JMap<K, V>} thisMap
   * @param {JMap<K, V>} thatMap
   * @param {Collectable<V>} valueEqualsImpl
   * @returns {boolean}
   */
  public static equals<K, V>(thisMap: ImmutableMap<K, V>,
                             thatMap: ImmutableMap<K, V>,
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

  public static diff<K, V>(oldMap: ImmutableMap<K, V>,
                           newMap: ImmutableMap<K, V>,
                           equalsImpl: Collectable<V>): MapDiff<K, V> {
    let added = new HashMap<K, V>();
    let removed = new HashMap<K, V>();
    let changed = new HashMap<K, ValueDiff<V>>();

    let oldEntrySet = oldMap.entrySet();
    let newKeys = newMap.keySet();

    let oldEntryIterator = oldEntrySet.iterator();
    let newKeyIterator = newKeys.iterator();

    while (oldEntryIterator.hasNext()) {
      let oldEntry = oldEntryIterator.next();
      let oldKey = oldEntry.getKey();
      let oldValue = oldEntry.getValue();

      if (newKeys.contains(oldKey)) {
        // The old and new map have the same key
        let newValue = newMap.get(oldKey);

        if (!equalsImpl.equals(oldValue, newValue)) {
          // The values are different so this is a change
          changed.put(oldKey, new ValueDiff<V>(oldValue, newValue));
        }
      } else {
        // The old map has a key that the new map doesn't. So this was a removal.
        removed.put(oldKey, oldValue);
      }
    }

    // Get the new keys
    while (newKeyIterator.hasNext()) {
      let newKey = newKeyIterator.next();

      if (!oldMap.containsKey(newKey)) {
        added.put(newKey, newMap.get(newKey));
      }
    }

    return new MapDiff(added, removed, changed);
  }

  public static cloneHashMap<K, V>(mapVal: ImmutableMap<K, V>, hashable: Hashable<K>): HashMap<K, V> {
    const newMap: HashMap<K, V> = new HashMap<K, V>(hashable);
    const entryIterator: JIterator<MapEntry<K, V>> = mapVal.entrySet().iterator();

    while (entryIterator.hasNext()) {
      const entry: MapEntry<K, V> = entryIterator.next();
      newMap.put(entry.getKey(), entry.getValue());
    }

    return newMap;
  }
}

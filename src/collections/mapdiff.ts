import {ImmutableMap} from 'typescriptcollectionsframework';

export class MapDiff<K, V> {
  constructor(public readonly added: ImmutableMap<K, V>,
              public readonly removed: ImmutableMap<K, V>,
              public readonly changed: ImmutableMap<K, ValueDiff<V>>) {
  }

  public isSame(): boolean {
    return this.added.isEmpty() && this.removed.isEmpty() && this.changed.isEmpty();
  }
}

export class ValueDiff<T> {
  constructor(public readonly oldVal: T, public readonly newVal: T) {
  }
}
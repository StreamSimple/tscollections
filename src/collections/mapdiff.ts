import {Collectable, ImmutableMap} from 'typescriptcollectionsframework';
import {MapUtils} from './maputils';

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

export class ValueDiffCollectable<T> implements Collectable<ValueDiff<T>> {
  constructor(private valueEqualsImpl: Collectable<T>) {
  }

  public equals(thisDiff: ValueDiff<T>, thatDiff: ValueDiff<T>): boolean {
    return this.valueEqualsImpl.equals(thisDiff.oldVal, thatDiff.oldVal) &&
      this.valueEqualsImpl.equals(thisDiff.newVal, thatDiff.newVal)
  }
}

export class MapDiffCollectable<K, V> implements Collectable<MapDiff<K, V>> {
  constructor(private valueEqualsImpl: Collectable<V>) {
  }

  equals(thisDiff: MapDiff<K, V>, thatDiff: MapDiff<K, V>): boolean {
    let valueDiffCollectable = new ValueDiffCollectable(this.valueEqualsImpl);

    return MapUtils.equals(thisDiff.added, thatDiff.added, this.valueEqualsImpl) &&
      MapUtils.equals(thisDiff.removed, thatDiff.removed, this.valueEqualsImpl) &&
      MapUtils.equals(thisDiff.changed, thatDiff.changed, valueDiffCollectable);
  }
}
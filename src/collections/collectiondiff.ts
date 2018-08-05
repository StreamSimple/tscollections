import {ImmutableCollection} from 'typescriptcollectionsframework';

export class CollectionDiff<T> {
  constructor(public readonly added: ImmutableCollection<T>, public readonly removed: ImmutableCollection<T>) {
  }
}
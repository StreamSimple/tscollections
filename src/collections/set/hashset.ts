import {EqualsAndHashcode} from '../../obj/equalsAndHashcode';
import {Set} from './set';
import {Collection} from '../collection';
import {UInt} from 'com.streamsimple.tsnumbers/dist/uint';

declare var Map: MapConstructor;

export class HashSet<E extends EqualsAndHashcode<E>> implements Set<E> {
  add(e: E): boolean {
    return false;
  }

  addAll(c: Collection<E>): boolean {
    return false;
  }

  clear() {
  }

  contains(e: E): boolean {
    return false;
  }

  containsAll(c: Collection<E>): boolean {
    return false;
  }

  equals(that: Collection<E>): boolean {
    return false;
  }

  hashcode(): UInt {
    return undefined;
  }

  isEmpty(): boolean {
    return false;
  }

  remove(e: E): boolean {
    return false;
  }

  removeAll(c: Collection<E>): boolean {
    return false;
  }

  retainAll(c: Collection<E>): boolean {
    return false;
  }

  size(): number {
    return 0;
  }

  toArray(): E[] {
    return undefined;
  }
}
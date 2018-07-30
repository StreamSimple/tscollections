import {EqualsAndHashcode} from '../obj/equalsAndHashcode';

export interface Collection<E> extends EqualsAndHashcode<E> {
  add(e: E);
  addAll(c: Collection<E>)
  clear();
  contains(e: E);
  containsAll(c: Collection<E>);
  isEmpty(): boolean;
  remove(e: E): boolean;
  removeAll(c: Collection<E>);
  retainAll(c: Collection<E>);
  size(): number;
  toArray(): E[];
}
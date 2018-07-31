import {EqualsAndHashcode} from '../obj/equalsAndHashcode';
import {Equals} from '../obj/equals';

export interface Collection<E extends Equals<E>> extends EqualsAndHashcode<Collection<E>> {
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
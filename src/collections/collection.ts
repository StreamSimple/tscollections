import {EqualsAndHashcode} from '../obj/equalsAndHashcode';
import {Equals} from '../obj/equals';

export interface Collection<E extends Equals<E>> extends EqualsAndHashcode<Collection<E>> {
  add(e: E): boolean;
  addAll(c: Collection<E>): boolean;
  clear();
  contains(e: E): boolean;
  containsAll(c: Collection<E>): boolean;
  isEmpty(): boolean;
  remove(e: E): boolean;
  removeAll(c: Collection<E>): boolean;
  retainAll(c: Collection<E>): boolean;
  size(): number;
  toArray(): E[];
}
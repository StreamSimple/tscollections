import {Collection} from '../collection';
import {EqualsAndHashcode} from '../../obj/equalsAndHashcode';

export interface List<E extends EqualsAndHashcode<E>> extends Collection<E> {
  addAtIndex(index: number, e: E);
  get(index: number): E;
  indexOf(e: E): number;
  lastIndexOf(e: E): number;
  removeAtIndex(e: number): E;
}
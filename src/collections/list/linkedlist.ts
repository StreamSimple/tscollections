import {List} from './list';
import {EqualsAndHashcode} from '../../obj/equalsAndHashcode';
import {Collection} from '../collection';
import {UInt} from 'com.streamsimple.tsnumbers/dist/uint';
import * as Collections from 'typescript-collections';
import {equalsFunction} from '../../obj/equals';

export class LinkedList<E extends EqualsAndHashcode<E>> implements List<E> {
  private innerList = new Collections.LinkedList<E>();

  constructor() {
  }

  public add(e: E): boolean {
    return this.innerList.add(e);
  }

  public addAll(c: Collection<E>): boolean {
    let arr = c.toArray();

    for (let item of arr) {
      this.add(item);
    }

    return true;
  }

  public addAtIndex(index: number, e: E) {
    this.innerList.add(e, index);
  }

  public clear() {
    this.innerList.clear();
  }

  public contains(e: E): boolean {
    return this.innerList.contains(e, equalsFunction);
  }

  public containsAll(c: Collection<E>): boolean {
    let arr = c.toArray();

    for (let item of arr) {
      if (!this.contains(item)) {
        return false;
      }
    }

    return true;
  }

  public equals(that: Collection<E>): boolean {
    // TODO
    return false;
  }

  public get(index: number): E {
    return undefined;
  }

  public hashcode(): UInt {
    return undefined;
  }

  public indexOf(e: E): number {
    return 0;
  }

  public isEmpty(): boolean {
    return false;
  }

  public lastIndexOf(e: E): number {
    return 0;
  }

  public remove(e: E): boolean {
    return false;
  }

  public removeAll(c: Collection<E>): boolean {
    return false;
  }

  public removeAtIndex(e: number): E {
    return undefined;
  }

  public retainAll(c: Collection<E>): boolean {
    return false;
  }

  public size(): number {
    return 0;
  }

  public toArray(): E[] {
    return undefined;
  }
}
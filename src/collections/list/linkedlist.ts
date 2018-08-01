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
    throw new Error('Unsupported.');
  }

  public get(index: number): E {
    if (index >= this.size()) {
      throw new Error('Index out of bounds.');
    }

    let currentNode = this.innerList.firstNode;

    for (let tempIndex = 0; tempIndex < index; tempIndex++) {
      currentNode = currentNode.next;
    }

    return currentNode.element;
  }

  public hashcode(): UInt {
    throw new Error('Unsupported.');
  }

  public indexOf(e: E): number {
    return this.innerList.indexOf(e, equalsFunction);
  }

  public isEmpty(): boolean {
    return this.innerList.isEmpty();
  }

  public lastIndexOf(e: E): number {
    let lastIndex = -1;
    let currentNode = this.innerList.firstNode;

    for (let index = 0; index < this.size(); index++) {
      if (currentNode.element.equals(e)) {
        lastIndex = index;
      }

      currentNode = currentNode.next;
    }

    return lastIndex;
  }

  public remove(e: E): boolean {
    return this.innerList.remove(e, equalsFunction);
  }

  public removeAll(c: Collection<E>): boolean {
    let changed = false;
    let arr = c.toArray();

    for (let item of arr) {
      changed = changed || this.remove(item);
    }

    return changed;
  }

  public removeAtIndex(e: number): E {
    return this.innerList.removeElementAtIndex(e);
  }

  public retainAll(c: Collection<E>): boolean {
    throw new Error('Unsupported.');
  }

  public size(): number {
    return this.innerList.size();
  }

  public toArray(): E[] {
    return this.innerList.toArray();
  }
}
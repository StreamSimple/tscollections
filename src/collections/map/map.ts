import {EqualsAndHashcode} from '../../obj/equalsAndHashcode';

export interface Map<K extends EqualsAndHashcode<K>, V> {
  clear();
  containsKey(key: K);
  containsValue(value: V)

  /*
  Set<Map.Entry<K,V>>	entrySet()
  boolean	equals(Object o)
  default void	forEach(BiConsumer<? super K,? super V> action)
  V	get(Object key)
  default V	getOrDefault(Object key, V defaultValue)
  int	hashCode()
  boolean	isEmpty()
  Set<K>	keySet()
  default V	merge(K key, V value, BiFunction<? super V,? super V,? extends V> remappingFunction)
  V	put(K key, V value)
  void	putAll(Map<? extends K,? extends V> m)
  default V	putIfAbsent(K key, V value)
  V	remove(Object key)
  default boolean	remove(Object key, Object value)
  default V	replace(K key, V value)
  default boolean	replace(K key, V oldValue, V newValue)
  default void	replaceAll(BiFunction<? super K,? super V,? extends V> function)
  int	size()
  Collection<V>	values()
   */
}

export interface MapEntry<K extends EqualsAndHashcode<K>, V> extends EqualsAndHashcode<K> {
  getKey(): K;
  getValue(): V;
  setValue(value: V): V;
}
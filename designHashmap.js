/* 
Design a HashMap without using any built-in hash table libraries.

Implement the MyHashMap class:

MyHashMap() initializes the object with an empty map.
void put(int key, int value) inserts a (key, value) pair into the HashMap. If the key already exists in the map, update the corresponding value.
int get(int key) returns the value to which the specified key is mapped, or -1 if this map contains no mapping for the key.
void remove(key) removes the key and its corresponding value if the map contains the mapping for the key.
*/

//best for this leetcode.
var MyHashMap = function() {
  this.hashMap = {}
};

MyHashMap.prototype.put = function(key, value) {
  this.hashMap[key] = value;
};

MyHashMap.prototype.get = function(key) {
  return Object.prototype.hasOwnProperty.call(this.hashMap, key) ? this.hashMap[key] : -1;
};

MyHashMap.prototype.remove = function(key) {
  delete this.hashMap[key];
};



//more complex example. 
class ListNode {
    constructor(key, val, next) {
        this.key = key
        this.val = val
        this.next = next
    }
}
class MyHashMap {
    constructor() {
        this.size = 19997
        this.mult = 12582917
        this.data = new Array(this.size)
    }
    hash(key) {
        return key * this.mult % this.size
    }
    put(key, val) {
        this.remove(key)
        let h = this.hash(key)
        let node = new ListNode(key, val, this.data[h])
        this.data[h] = node
    }
    get(key) {
        let h = this.hash(key), node = this.data[h]
        for (; node; node = node.next)
            if (node.key === key) return node.val
        return -1
    }
    remove(key) {
        let h = this.hash(key), node = this.data[h]
        if (!node) return
        if (node.key === key) this.data[h] = node.next
        else for (; node.next; node = node.next)
            if (node.next.key === key) {
                node.next = node.next.next
                return
            }
    }
};

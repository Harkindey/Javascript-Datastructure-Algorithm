class HashTable {
	constructor(val) {
		this._storage = [];
		this._tableSize = val;
		// once 50% full resize it. and rerun hashfunction
		this.inputSize = 0;
	}
	/*
	 * Inserts a new key-value pair
	 * @param {string} key - the key associated
	 * with the value
	 * @param {*} value - the value to insert
	 */
	insert(key, value) {
		const index = this._hash(key, this._tableSize);

		if (!this._storage[index]) this._storage[index] = [];
		//[0,0,0,[]]
		// TODO: loop trhrough array and find if key was already inserted
		this._storage[index].push([key, value]);
		//[0,0,0,[['a', 1]]]
	}
	/*
	 * Deletes a key-value pair
	 * @param {string} key - the key associated with the value
	 * @return {*} value - the deleted value
	 */
	remove() {}
	/*
	 * Returns the value associated with a key
	 * @param {string} key - the key to search for
	 * @return {*} - the value associated with the key
	 */
	// HashTable {_storage: [0,0,0,[['a',1], ['b',2]], 0,0,0]}
	// Amontized where worst case time complexity isn't consider cause it isnt helpful
	// the worst case is so unlikely it isnt useful to think about.
	retrieve(key) {
		const index = this._hash(key, this._tableSize);
		const arrayAtIndex = this._storage[index];
		if (arrayAtIndex) {
			for (let i = 0; i < arrayAtIndex.length; i++) {
				const keyValueArray = arrayAtIndex[i];
				if (keyValueArray[0] === key) return keyValueArray[1];
			}
		}
	}
	/*
	 * Hashes string value into an integer that can be mapped to an array index
	 * @param {string} str - the string to be hashed
	 * @param {number} n - the size of the storage array
	 * @return {number} - an integer between 0 and n
	 */
	_hash(str, n) {
		let sum = 0;
		for (let i = 0; i < str.length; i++) sum += str.charCodeAt(i) * 3;
		return sum % n;
	}
}

const myHT = new HashTable(25);

console.log(myHT);

myHT.insert('a', 1);
// HashTable {_storage: [0,0,0,['a',1], 0,0,0]}
myHT.insert('b', 1);
// HashTable {_storage: [0,0,0,[['a',1], ['b',2]], 0,0,0]}

console.log(myHT);

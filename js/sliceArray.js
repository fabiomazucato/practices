const arr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

/**
 * Create a new array dividing the main array (arr), the last position will be the remainder
 */

const splitArr = new Array(
	Math.ceil(arr.length / 3)
)
.fill('')
.map(function() {
	return this.splice(0, 3)
},  arr.slice())

// return splitArr [ [ 0, 1, 2 ], [ 3, 4, 5 ], [ 6, 7, 8 ], [ 9, 10 ] ] 

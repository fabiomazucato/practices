const arr = [1, 2, undefined, 3, null, 4, NaN, 5, '', 6]

/**
* Filter only valid numbers
*/
const arr3 = arr.filter(value => Number(value))

const arr2 = arr.filter(Boolean)

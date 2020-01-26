const arr = [1, 2, undefined, 3, null, 4, NaN, 5, '', 6]

/**
 * Filter only numbers
 */
const arr2 = arr.filter(value => Number(value))

const arr3 = arr.filter(Boolean)

// return arr2 and arr3 [1, 2, 3, 4, 5, 6]

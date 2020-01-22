const ar = [1, 2, 3, 4, 10, 11]

function simpleArraySum(ar) {
	return ar.reduce((total, value) => total + value, 0)
}

const total = simpleArraySum(ar)

const a = [17, 28, 30]
const b = [99, 16, 8]

function compareTriplets(a, b) {
	const arrPoints = [0, 0]

	for (let i = 0; i <= 3; i++) {
		switch (true) {
			case a[i] < b[i]:
				++arrPoints[1]
				break
			case a[i] == b[i]:
				break
			case a[i] > b[i]:
				++arrPoints[0]
				break
		}
	}

	return arrPoints
}

class DateConverter {
	static toText(date) {
		const day = ('0' + date.getDate()).slice(-2)
		const month = ('0' + (date.getMonth() + 1)).slice(-2)

		return `${day}/${month}/${date.getFullYear()}`
	}

	static toDate(date) {
		const signal = date.search('-') > 0 ? '-' : '/'

		return new Date(...date.split(signal).map((item, i) => item - (i % 2)))
	}
}

const d = new Date()
const dText = DateConverter.toText(d)
const dDate = DateConverter.toDate(dText)

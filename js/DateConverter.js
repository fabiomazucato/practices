class DateConverter {
	static toText(date) {
		const day = ('0' + date.getDate()).slice(-2)
		const month = ('0' + (date.getMonth() + 1)).slice(-2)

		return `${day}/${month}/${date.getFullYear()}`
	}

	static toDate(date) {
		const separator = date.search('-') > 0 ? '-' : '/'

		return new Date(...date.split(signal).map((item, i) => item - (i % 2)))

		/** 
		 * to work with ES 5.1: generic array-like object as arguments
		 const args = date.split(separator).map((item, i) => item - (i % 2))
		return date = Date.apply(null, args)
		*/
	}
}

const d = new Date()
const dText = DateConverter.toText(d)
const dDate = DateConverter.toDate(dText)

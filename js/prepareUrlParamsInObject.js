const url =
	'https://www.google.com/webhp?hl=pt-BR&sa=X&ved=0ahUKEwjmk8qztZjqAhWnKLkGHYrmCuAQPAgH'

const prepareUrlParamsInObject = (url) => {
	const urlParameters = url.split('?')[1]

	const parametersInProperty = decodeURI(
		urlParameters.replace(/&/g, '","').replace(/=/g, '":"')
	)

	const objectUrlParameters = JSON.parse(`{"${parametersInProperty}"}`)

	return objectUrlParameters
}

const objectUrlParameters = prepareUrlParamsInObject(url)

// return { hl: 'pt-BR', sa: 'X', ved: '0ahUKEwjmk8qztZjqAhWnKLkGHYrmCuAQPAgH' }

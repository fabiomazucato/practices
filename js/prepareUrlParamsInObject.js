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

const prepareUrlParamsInObject_2 = (url) => {
	const urlParameters = url.split('?')[1]

	const objectUrlParameters = new URLSearchParams(urlParameters)

	return objectUrlParameters
}

const objectUrlParameters_2 = prepareUrlParamsInObject_2(url)
// return URLSearchParams { 'hl' => 'pt-BR', 'sa' => 'X', 'ved' => '0ahUKEwjmk8qztZjqAhWnKLkGHYrmCuAQPAgH' }

const hl = objectUrlParameters_2.get('hl')
// return pt-BR

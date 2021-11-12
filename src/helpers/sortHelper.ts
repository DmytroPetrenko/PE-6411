const sortNumbers = (a: number, b: number) => {
	return a - b
}

const sortString = (a: string, b: string) => {
	if (a > b) {
		return 1
	}
	if (a < b) {
		return -1
	}
	return 0
}

const sortWeight = (a: string, b: string) => {
	const num1 = convertToCt(a)
	const num2 = convertToCt(b)

	return sortNumbers(num1, num2)
}

const convertToCt = (str: string) => {
	const match = str.match(/\d+/g)
	const num: number = match ? +match[0] : 0
	return str.includes("LB") ? num * 2267.96185 : num
}

export const sortHelper = { sortWeight, sortNumbers, sortString }

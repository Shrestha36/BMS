
	const longest = (str) => {

	str = str.split(" ")
	
	return str.sort((a, b) => b.length - a.length)[0]
	}
	
export default longest;
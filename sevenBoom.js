function sevenBoom(arr) {
	let found = false
	arr.forEach(item => {
		console.log(item.toString().indexOf('7') > -1)
		if(item.toString().indexOf('7') > -1){
			found = true
		}
	})
	return found ? 'Boom!' : 'there is no 7 in the array'
}

function pieChart(data) {
	const total = Object.values(data).reduce((cur, acc)=> {
		return acc + cur
	}, 0)
	
	const unit = 360/total
	
	const newObj = {}
	Object.entries(data).map(entry => {
		
		newObj[entry[0]] = parseFloat((Number(entry[1]) * unit).toFixed(1))
	})
  
  return newObj
}

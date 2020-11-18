function chosenWine(wines) {
	if(!wines.length) return null
	if(wines.length === 1) return wines[0].name
	
	wines.sort(customSortByProperty)
	return wines[1].name
}

function customSortByProperty (a,b) {
  return a.price > b.price
}

console.log(chosenWine([{name: "Wine A", price: 8.99}, {name: "Wine 32", price: 13.99}, {name: "Wine 9", price: 10.99}]));

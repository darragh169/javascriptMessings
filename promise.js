console.clear()

const myPromise = new Promise((resolve, reject) => {
	const obj = { test: 1 }
  
  setTimeout(function () {
  	console.log('internal promise finished')
    resolve(obj)
  }, 2000)
})

console.log('myPromise', myPromise)

myPromise.then((result) => {
	console.log('finished', result)
})

// Without using .flat(), create a function to flatten an array

const exampleArray = [1,2,[3,4, [5,6,7], 8], 9, 10];

function flatten (input = []) {
  const arr = []
  for (let i = 0; i < input.length; i++) {
    if(typeof input[i] !== 'object') {
      arr.push(input[i])
    } else {
      arr.push(...flatten(input[i]))
    }
  }

  return arr
}

console.log(flatten(exampleArray)) // [1,2,3,4,5,6,7,8,9,10]

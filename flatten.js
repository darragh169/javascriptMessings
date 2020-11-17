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

function flattenWithReduce (input = []) {
  const arr = input.reduce((acc, item) => {
    if (Array.isArray(item)) {
      acc.push(...flattenWithReduce(item))
    } else {
      acc.push(item)
    }
    return acc
  }, [])
  return arr
}

console.log(flatten(exampleArray)) // [1,2,3,4,5,6,7,8,9,10]
console.log(flattenWithReduce(exampleArray)) // [1,2,3,4,5,6,7,8,9,10]

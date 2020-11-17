const str = 'this is is a test test string'

function removeDuplicatesWithSet (str = '') {
  let tempSet = new Set(str.split(' '))
  return [...tempSet].join(' ')
}

function removeDuplicatesWithoutSet (str = '') {
  const arr = []
  const strArr = str.split(' ')
  for (let idx = 0; idx < strArr.length; idx++) {
    if(!arr.includes(strArr[idx])) {
      arr.push(strArr[idx])
    }
  }
  return arr.join(' ')
}

console.log(removeDuplicatesWithSet(str))
console.log(removeDuplicatesWithoutSet(str))

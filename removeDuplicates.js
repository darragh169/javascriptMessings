const str = 'this is is a test test string'

function removeDuplicates (str = '') {
  let tempSet = new Set(str.split(' '))
  return [...tempSet].join(' ')
}

console.log(removeDuplicates(str))

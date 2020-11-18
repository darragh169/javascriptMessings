var pokemon = {
  firstName: 'Pika',
  lastName: 'Chu',
  getName: function () {
    return this.firstName + ' ' + this.lastName
  }
}

function getPokemonName (number) {
  console.log(this)
  return this.getName() + ' ' + number
}

const poke = getPokemonName.call(pokemon, '1')

console.log(poke)

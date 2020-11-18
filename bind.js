var pokemon = {
  firstName: 'Pika',
  lastName: 'Chu',
  getName: function () {
    return this.firstName + ' ' + this.lastName
  }
}

function getPokemonName () {
  console.log(this)
  return this.getName()
}

const poke = getPokemonName.bind(pokemon)

console.log(poke())

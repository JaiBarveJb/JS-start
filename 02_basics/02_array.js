const marvel_heroes = ["thor", "Ironman", "spiderman"]
const dc_heroes = ["superman", "flash", "batman"]

// marvel_heroes.push(dc_heroes)

// console.log(marvel_heroes)
// console.log(marvel_heroes[3][1])

const allHeroes = marvel_heroes.concat(dc_heroes)
console.log(allHeroes)

const all_heroes = [...marvel_heroes, ...dc_heroes]
console.log(all_heroes)


const another_array = [1,2,3,[4,5,6],7,[6,7,[4,5]]]

const real_another_array = another_array.flat(Infinity)

console.log(real_another_array)

//Array.isArray , Array.from,  Array.of
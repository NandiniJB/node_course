const fs = require('fs')
// const book = {
//     title : 'Ego is the Enemy',
//     author: 'Ryan Holiday'
// }

// const bookJson = JSON.stringify(book)

// fs.writeFileSync('1-json.json', bookJson)

const dataBuffered = fs.readFileSync('1-json.json')
const dataJSON = dataBuffered.toString();
const data = JSON.parse(dataJSON)

data.name = "Anil"
data.age = 26

const dataJson = JSON.stringify(data)

fs.writeFileSync('1-json.json', dataJson)

console.log(data)
const fs = require('fs')
const { connected } = require('process')

// const book ={
//     title: "Ego is the enemy",
//     author: "Ryan Holiday"
// }

// const bookJSON = JSON.stringify(book)
// fs.writeFileSync('1-json.json',bookJSON)

const jsonData = fs.readFileSync('1-json.json').toString()
const parsedData = JSON.parse(jsonData)
parsedData.name = 'Yhemmy'

fs.writeFileSync('1-json.json',JSON.stringify(parsedData))

console.log(parsedData)
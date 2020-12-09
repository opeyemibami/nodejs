const fs = require("fs");
const chalk = require('chalk')

const getNotes = (title) =>{
    const notes = loadNotes() 
    const matchNote = notes.find((note)=>note.title === title)
    console.log(matchNote)
    if (matchNote){
        console.log(chalk.bgGreen(matchNote.title))
        console.log(chalk.inverse(matchNote.body))
    }else{
        console.log(chalk.bgRed('Note not found'))
    }

}
const addNote = (title, body)=> {
    const notes = loadNotes()
    const duplicate = notes.find((note)=> note.title === title)
    if (!duplicate) {
        notes.push({
            title: title,
            body: body
        })
        saveNotes(notes)
        console.log('New note added')
    }
    else {
        console.log('Note title taken!')
    }

}

const saveNotes = (notes)=> {
    const dataJSON = JSON.stringify(notes)
    fs.writeFileSync('notes.json', dataJSON)
}

const loadNotes = function () {
    try {
        const dataBuffer = fs.readFileSync('notes.json')
        const dataJSON = dataBuffer.toString()
        return JSON.parse(dataJSON)

    } catch (e) {
        return []
    }
}

const removeNote = function (title) {
    const notes = loadNotes()
    const notesToKeep = notes.filter((note)=> note.title!==title)

    if(notesToKeep.length!==notes.length){
        saveNotes(notesToKeep)
        console.log(chalk.bgGreen("Note removed!"))
    }else{
        console.log(chalk.bgRed("No note found!"))
    }
}

const listNotes = () => {
    const notes = loadNotes()
    console.log(chalk.bgGreen("Your notes:"))
    notes.forEach(note => {
         console.log(note)
    });
    
}

// Exports 
module.exports = {
    getNotes: getNotes,
    addNote: addNote,
    removeNote: removeNote,
    listNotes:listNotes,
}
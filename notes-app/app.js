
const chalk = require('chalk')
const yargs = require('yargs')

const notes_utils = require('./notes')

// create add command
yargs.command({
    command: 'add',
    description: "Adding a new note",
    builder:{
        title: {
            describe: 'Note title',
            demandOption:true,
            type:'string'
        },
        body:{
            describe: "The body of the note",
            demandOption:true,
            type:'string'
        }

    },
    handler(argv){
        notes_utils.addNote(argv.title, argv.body)
    }
})

// create a remove command 
yargs.command({
    command: 'remove',
    description: "Delete a note",
    builder:{
        title: {
            describe: 'Note title',
            demandOption:true,
            type:'string'
        },
    },
    handler(argv){
        notes_utils.removeNote(argv.title)
    }
})

// create read command 
yargs.command({
    command: 'list',
    description: "listing saved notes",
    handler(){
        notes_utils.listNotes()
    }
})

//  
yargs.command({
    command: 'read',
    description: "Read a notes",
    handler(argv){
        notes_utils.getNotes(argv.title)
    }
})
yargs.parse()
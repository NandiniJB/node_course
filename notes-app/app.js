
const chalk = require('chalk')
const yargs = require('yargs')
const notes = require('./notes.js')

// console.log(yargs.argv['title'])
// const command = yargs.argv['fun']

// if(command == 'add'){
//     console.log('Adding note')
// }else if(command == 'remove'){
//     console.log('Removing note')
// }

yargs.version('1.1.0')

yargs.command({
    command: 'add',
    discribe: 'Add a new note',
    builder: {
        title: {
            describe: "note title",
            demandOption: true,
            type: 'string'
        },
        body: {
            describe: "note body",
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv){
        notes.addNote(argv.title, argv.body)
    }
})

yargs.command({
    command: 'remove',
    discribe: 'Remove a note',
    builder: {
        title: {
            describe: 'Note title',
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv){
        notes.removeNote(argv.title)
    }
})

yargs.command({
    command: 'read',
    discribe: 'Read a note',
    builder: {
        title: {
            describe: 'Note title',
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv){
        notes.readNote(argv.title);
    }
})

yargs.command({
    command: 'list',
    discribe: 'List notes',
    handler(){
        notes.listNotes();
    }
})

yargs.parse()

// console.log(yargs.argv)
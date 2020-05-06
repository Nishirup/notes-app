
const fs = require('fs')
const chalk = require('chalk')
const addNote = (title,body)  => {

	const notes = loadNotes()
	//const duplicateNotes = notes.filter( (note)  => note.title === title)
	const duplicateNote = notes.find( (note)  => note.title === title)
//filter traverses the entire array to look for the dupicates..while find traverses the array until it gets the first match and if did not find that item..the 'find' method will return undefined..so we can use 'find' also

 //debugger //"debugger" is node's bulit in debugging tool and if we use it here , it will stop the application at this point in this time . Then we can use developer tools to look at any values I want. "DEBUGGER" gives a bit more flexibility.
//With console.log we have to manually list out the things we want to see..with debugger , we can add the debugger statement one time and once we get to the dev tools we can look at everything .
//When we have debuggers in our application..they are not going to pause the program by default .We have to run node with a special option to get that dine and to do this we use the following command - node inspect app.js add --title="my title" --body="my body"
//If we get a timeout error by running the above inspect command then use this command - node --inspect-brk app.js add --title="courses" --body="node js"
//After this - go to chrome and type the following url - chrome://inspect


//if(duplicateNotes.length === 0){	
if(!duplicateNote) //it means add if there is no duplicateNote
{
	notes.push({
		title : title,
		 body : body
})

	saveNotes(notes)
	console.log(chalk.green.inverse('Note added successfully'))
}
else {

	console.log(chalk.red.inverse('Note title already present'))

}

}

const removeNote =  (title) => {
	const notes = loadNotes()
	const resultNotes = notes.filter( (note) => note.title != title)

	if(notes.length === resultNotes.length)
	{
		console.log(chalk.bgRed('No notes removed'))
	}
	else {
		saveNotes(resultNotes)
		console.log(chalk.bgGreen('Note removed successfully'))
}
}

	

const getNotes = () => {

	return 'Your notes...'

}

const saveNotes =(notes) => {

	const dataJSON = JSON.stringify(notes)
	fs.writeFileSync('notes.json' , dataJSON)
}

const loadNotes = () => {
	try{
	const dataBuffer = fs.readFileSync('notes.json')
	const dataJSON = dataBuffer.toString()
	return JSON.parse(dataJSON)
} catch(e) {
	return []
}
}

const listNotes = () => {

	const notes = loadNotes()
	console.log(chalk.red('Your notes'))
	notes.forEach((note) => console.log(note.title))
}
	
const readNote = (title) => {

	const notes = loadNotes()
	const noteToRead = notes.find((note) => note.title === title)
	if(noteToRead) {
		console.log(chalk.bold(noteToRead.title))
		console.log(noteToRead.body)
	}
	else
	{
		console.log(chalk.red('Title you are looking for is not present'))
	}
}
module.exports = {
	getNotes: getNotes,
	addNote: addNote,
	removeNote: removeNote,
	listNotes: listNotes,
	readNote: readNote 
}

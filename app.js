const chalk = require('chalk');
const yargs = require('yargs');
const notes = require('./notes.js')

const command = process.argv[2];
//console.log(command);
//console.log(process.argv)

//customize yargs version
yargs.version('1.1.0')

//add,remove,read,list -- forth assignment

//create add command
yargs.command({
	command: 'add',
	describe: 'Add a new note',
	builder: {
		title:{
			describe: 'Add a title',
			demandOption: true, //default value for demandOption is false
			type: 'string'
		},
		
		body:{
			describe: 'Add your notes here',
			demandOption: true,
			type: 'string'
		}
	},
			
	handler(argv) {
		notes.addNote(argv.title,argv.body)
}
})

yargs.command({
         command: 'remove',
         describe: 'Remove a note',
         builder: {
                title:{
                        describe: 'Give the title you want to remove',
                        demandOption: true, //default value for demandOption is false
                        type: 'string'
                }
	},
	 handler(argv) {
		notes.removeNote(argv.title)         
}
 })

yargs.command({
         command: 'list',
         describe: 'List a note',
         handler() {
                 notes.listNotes()
         }
 })


yargs.command({
         command: 'read',
         describe: 'Read a note',
	 builder: {
		title:{
			describe: 'Enter the title you want to read',
			demandOption:true,
			type: 'string'
		}
	},
         handler(argv) {
		notes.readNote(argv.title)         
}
 })



yargs.parse()
//console.log(yargs.argv)
/*
if(command === 'add'){
	console.log("Adding note!")
}else if(command === 'remove'){
	console.log("Removing note!")
}
*/







/* 
console.log(chalk.green('Success!'));
console.log(chalk.blue.bold('Success!'));
console.log(chalk.red.inverse('Success!'));
console.log(chalk.red('Error!'));
*/

/*third assignment---
Use the chalk library in your project and that's going to require you to do a few different things.

First up you're going to have to install it.

You want to install a version to appoint four point one of chalk.

Now if you forget the command.

That's OK.

That is the entire point of these challenges.

It's to give you experience.

So you build that muscle memory.

You can refer to the previous video to look up that command.

Or better yet crack open the PDA f guide as that is a very easy way to scan between lessons and figure

out exactly what was covered.

It includes code snippets as well as command line commands that we covered in the lesson.

Step two you're going to load chalk in using require just like we did for validator.

So that could happen up here on line one just before our require call to load and notes then you're

going to use the chalk library to print the string success in the console with green text.

So green text would look a bit like what we have over here though the exact shade of green will depend

on your operating system and other display settings.

Now once you have that done you're going to test your work.

So you want to run our script after saving it and you should see the green text success down below in

the terminal.

Now if you're wondering how you're supposed to get this done considering you've never used the library

before.

That's where the documentation comes into play.

Maybe you're saying Hey Andrew I bought the course so you could teach me these things.

And well we're going to cover a ton of packages in detail learning exactly how they work and how you

can build complex apps with them.

The goal is to also give you a bit of experience here and they're learning how to use new tools on your

own.

And I'll show you once again how to actually solve the challenge afterwards it's important to build

up this experience.

So when you're done with a class you can go off and explore all of the interesting and awesome things

that NPM has to offer down below.

There is some example usages here they are printing some text in blue so you can use this as a starting

point.

And if you were to scroll down through the documentation there's a styles section which gives you even

more insight onto the various modifiers and colors that are available to you.

So take some time to really explore the docs and figure out how to solve this challenge when you're

done with that.

You can always use the bonus to experience a bit more of what chalk has to offer.

Use the docs to mess around with other styles such as making the text bold C in here or inverting the

text where the color becomes the background.

So here that would be green inverse.

As an example just take some time to mess around with a few other ways.

Chalk can be used as always.

We're going to work through all of the solutions together.

So if you get stuck or you can't quite get something that is a ok.

All right pause the video give this your best effort and when you're done come back and click play*/

/*
const validator = require('validator')
const msg_func = require('./notes.js')

const message = msg_func()

console.log(message)
console.log(validator.isEmail('nishita@example.com'))
console.log(validator.isEmail('example.com'))
console.log(validator.isURL('https://www.youtube.com/'))
console.log(validator.isURL('https/www.youtube.com/'))

*/

/*SECOND ASSIGNMENT---
 So big picture goal you want to define and use a function in a new file.

So step one you're going to create a new file called Notes dot J X and this is a real file we're actually

going to use as part of the notes application from there you're going to create a get notes function

which is also going to be a real function we'll be building out throughout this course.

Now for the moment it's not going to do anything fancy it doesn't need any arguments and it's not going

to run any calculations all it's going to do is return a static string like your notes dot dot dot the

notes will eventually come later step 3 you want to export the new function from the new file step for

from app dot J S you want to make sure you can load in that new function call it and print the message

to the console.

So in the end of the day act J S should be requiring the new notes file it should be calling that function

to get the message and it should be using console dot log to print that message to the console when

you're done you should run the program and the message should print down below.

Once again as these challenges get more complex it's okay if something's not quite clear or you're not

quite sure how to do something you can always go back to the video in the beginning and figure out exactly

what happened.

That's not cheating.

That's called being resourceful actually memorizing things will come with time.

All right let's kick things off take a moment to pause the video when you're done come back and click

play
*/


/* FIRST ASSIGNMENT---
//const name = require('./utils.js')
const add = require('./utils.js')

const sum = add(4,6)

console.log(sum);i
*/

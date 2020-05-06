console.log('utils.js');

const name = 'Mike'

const add = function(a,b){
	return a + b
}

//whatever we assign to module.exports is what other files can get access to.

//module.exports = name

module.exports = add

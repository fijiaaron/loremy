var alphabet = "abcdefghijklmnopqrstuvwzyz".split("")

function loremy(num_words=100) {
	var words = []
	while (words.length < num_words) {
		var word_len = d(2, 6) - 1 // length 1-10 but weighted more to the middle
		console.log("--word_len: ", word_len)
		var word = gibberword(word_len)
		console.log("--word:", word)

		// capitalize first word
		if (words.length == 0) {
			word = capitalize(word)
		}

		var sentence_length = d(4, 5) - 3 // length 1-18 but weighted more towards the middle
		console.log("sentence length: ", sentence_length)
		if (words.length % sentence_length == 0 && words.length != 0) {
			// add peried to end of sentence
			words.push(word + ".")
			word_len = d(2,6) - 1

			// capitalize the start of the next sentence
			word = gibberword(word_len)
			word = capitalize(word)
		}

		words.push(word)
	}


	console.log("--words", words)
	var text = words.join(" ")

	return text + ".";
}

function capitalize(word) {
	console.log("capitalize: ", word)
	return word.charAt(0).toUpperCase() + word.slice(1);
}

function d(dice=1, sides=6) {
	var sum = 0
	var rolls = []
	while (rolls.length < dice) {
		var number = roll(sides)
		rolls.push(number)
	}

	// console.log("rolls: ", rolls)

	var sum = rolls.reduce((acc, roll) => acc + roll, 0)
	// console.log("sum:" + sum)
	return sum
}

function roll(max=6, min=1) {
	var number = Math.floor(Math.random() * max) + min
	// console.log("roll: " + number)
	return number
}


function gibberword(length=5) {
	var letters = []

	while(letters.length < length) {
		var i = roll(alphabet.length -1)
		console.log("letter: ", i, alphabet[i])
		letters.push(alphabet[i])
	}

	return letters.join("")
}

for (var i=0; i<10; i++) {
	// console.log("d: ----->" + d(dice=3))
	var length = d(1,8)
	console.log("length: " + length)
	var word = gibberword(length)
	console.log("gibberword:" + word)
}

number_of_words = 100
if (process.argv.length > 2) {
	console.log(process.argv)
	number_of_words = process.argv[2]
}
var text = loremy(number_of_words)

console.log("text: ", text)
// export default loremy;

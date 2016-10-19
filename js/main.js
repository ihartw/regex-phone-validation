// Exercise: Create a form with a phone number input on your page. Create a regular expression to automatically convert the user input into this phone number format: (123) 456-7899.

function formatPhone() {
	var phoneInput = document.getElementById('phone')
	//creates a variable called numbers that stores the input and removes all non-digit characters
    var numbers = phoneInput.value.replace(/\D/g, '')
    //clear out the user value, which will be replaced later
    phoneInput.value = ''
    if(numbers.length === 10) {
    	console.log("Correct amount of numbers")
    	phoneInput.value += "(" + numbers.substring(0, 3) + ") " + numbers.substring(3, 6) + "-" + numbers.substring(6, 10)
	} else if (numbers.length === 0) {
		console.log("No Numbers")
		phoneInput.value += ""
	} else {
		console.log("Incorrect amount of numbers")
		phoneInput.value += "(" + numbers.substring(0, 3) + ") " + numbers.substring(3, 6) + "-" + numbers.substring(6, 10)
	}
}

var display = document.getElementById('phone')
display.addEventListener('blur', formatPhone, false)
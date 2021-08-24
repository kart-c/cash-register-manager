const billInput = document.querySelector('#bill-input');
const cashInput = document.querySelector('#cash-input');
const checkBtn = document.querySelector('.button');
const errorMsg = document.querySelector('.error-message');
const notesToGive = document.querySelectorAll('.notes-to-give');

const numberOfNotes = [2000, 500, 100, 20, 10, 5, 1];

checkBtn.addEventListener('click', () => {
	errorMsg.style.display = 'none';
	if (billInput.value && cashInput.value) {
		const bill = parseInt(billInput.value);
		const cash = parseInt(cashInput.value);
		if (cash >= bill) {
			const amountToBeGiven = cash - bill;
			returnAmount(amountToBeGiven);
			billInput.value = '';
			cashInput.value = '';
		} else {
			errorMessage('You need more money to to pay the bill');
		}
	} else if (billInput.value !== NaN && cashInput !== NaN) {
		errorMessage('Enter the amount in number');
	} else {
		errorMessage('Field cannot be empty');
	}
});

function errorMessage(msg) {
	errorMsg.style.display = 'block';
	errorMsg.innerText = msg;
}

function returnAmount(notes) {
	for (i = 0; i < numberOfNotes.length; i++) {
		const note = Math.trunc(notes / numberOfNotes[i]);
		notes = notes % numberOfNotes[i];
		notesToGive[i].innerText = note;
	}
}

const billInput = document.querySelector('#bill-input');
const cashInput = document.querySelector('#cash-input');
const checkBtn = document.querySelector('.button');
const errorMsg = document.querySelector('.error-message');
const notesToGive = document.querySelectorAll('.notes-to-give');
const enterBtn = document.querySelector('.enter');
const cashContainer = document.querySelector('.cash-container');
const tableContainer = document.querySelector('.table-container');

const numberOfNotes = [2000, 500, 100, 20, 10, 5, 1];

enterBtn.addEventListener('click', function () {
	errorMsg.style.display = 'block';
	if (Math.sign(billInput.value) === -1) {
		billInput.value = '';
		errorMessage('Enter valid  number');
	} else if (billInput.value && Math.sign(billInput.value !== -1)) {
		errorMsg.style.display = 'none';
		cashContainer.style.display = 'block';
		enterBtn.style.display = 'none';
	}
});

checkBtn.addEventListener('click', () => {
	errorMsg.style.display = 'none';
	if (Math.sign(billInput.value) !== -1 && Math.sign(cashInput.value) !== -1) {
		const bill = parseInt(billInput.value);
		const cash = parseInt(cashInput.value);
		if (cash >= bill) {
			tableContainer.style.display = 'block';
			const amountToBeGiven = cash - bill;
			returnAmount(amountToBeGiven);
			billInput.value = '';
			cashInput.value = '';
		} else {
			errorMessage('You need more money to to pay the bill');
		}
	} else if (billInput.value !== NaN && cashInput !== NaN) {
		errorMessage('Enter valid number');
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

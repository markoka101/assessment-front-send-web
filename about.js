console.log("hello world");



function handleSubmit(evt) {
	evt.preventDefault();
	
	alert('The form has been submitted successfully');
}


let form = document.querySelector('form#contact');

form.addEventListener('submit', handleSubmit);

const polite = () => alert('You look as polite as him');

let compliment = document.querySelector('img#polite');

compliment.addEventListener('mouseover', polite);
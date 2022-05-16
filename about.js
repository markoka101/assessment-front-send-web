//alert user when submit button is pressed
function handleSubmit(evt) {
	evt.preventDefault();	
	alert('The form has been submitted successfully');
}


let form = document.querySelector('form#contact');

form.addEventListener('submit', handleSubmit);

let compliment = document.querySelector('img#polite');

//alert user when the mouse hovers over the image
compliment.addEventListener('mouseover', polite => {
	alert('You look as polite as him');
});
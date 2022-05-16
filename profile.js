//create node-list of all buttons on the page
const btn = document.querySelectorAll("button");

//loop through the list to find which button was pressed
//from there take the appropriate action
for (element in btn) {
    btn[element].addEventListener('click', evt => {
        if (evt.target.id === 'color') {
            alert('Blue');
        } else if (evt.target.id === 'place') {
            alert('New York City');
        } else {
            alert('Playing guitar before starting work');
        }
    })
}
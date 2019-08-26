// Fonctionnalité 1
let footer = document.querySelector('footer');
let count = 0;

footer.addEventListener("click", function () {
	count++;
	console.log(`Clic numéro ${count}`);
});


// Fonctionnalité 2
let menu = document.getElementById('navbarHeader');
let btnMenu = document.getElementsByClassName('navbar-toggler')[0];
let menuStatus = false;

btnMenu.addEventListener("click", function () {
	if (menuStatus == false) {
		menu.classList.remove('collapse');
		menuStatus = true;
	}
	else if (menuStatus == true) {
		menu.classList.add('collapse');
		menuStatus = false;
	}
	// menu.classList.toggle('collapse');
});

// Fonctionnalité 3
let btnEdit = document.querySelector(".btn.btn-sm.btn-outline-secondary");
let card_text = btnEdit.parentNode.parentNode.previousElementSibling;

btnEdit.addEventListener("click", function () {
	card_text.style.color = 'red';
});

// Fonctionnalité 4
let btnEdit2 = document.querySelectorAll(".btn.btn-sm.btn-outline-secondary")[1];
let card_text2 = document.querySelectorAll('.card-text')[1];

btnEdit2.addEventListener("click", function () {
	if (card_text2.style.color === 'green') {
		card_text2.style.color = 'black';
		isGreen = true;
	}
	else {
		card_text2.style.color = 'green';
	}
});

// Fonctionnalité 5
let navbar = document.querySelector('.navbar');
let linkTag = document.getElementsByTagName('link')[0];
let linkDisabled = false;
navbar.addEventListener("dblclick", function () {
	if (linkDisabled == false) {
		linkTag.disabled = true;
		linkDisabled = true;
		console.log('knl');
	}
	else if(linkDisabled == true){
		linkTag.disabled = false;
		linkDisabled = false;
		console.log('knl');
	}
});